import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

export const useAdminAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Check session on app load
    const init = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (session?.user) {
          // ✅ If session exists, verify admin role
          await checkAdminRole(session.user.id);
        } else {
          // ✅ No session => user not logged in
          setUser(null);
        }
      } catch (error) {
        console.error("Error restoring session:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    init();

    // ✅ Listen for login/logout changes
    const { data: subscription } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          await checkAdminRole(session.user.id);
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      subscription?.subscription?.unsubscribe?.();
    };
  }, []);

  const checkAdminRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .single();

      if (error || !data) {
        console.warn("Not admin or role check failed");
        await supabase.auth.signOut();
        setUser(null);
        return;
      }

      const { data: { user: currentUser } } = await supabase.auth.getUser();
      setUser(currentUser);
    } catch (err) {
      console.error("Error checking admin role:", err);
      setUser(null);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/admin-login");
  };

  return { user, loading, logout };
};
