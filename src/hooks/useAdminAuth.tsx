import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

export const useAdminAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          await checkAdminRole(session.user.id);
        } else {
          setUser(null);
          navigate("/admin-login");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/admin-login");
        return;
      }

      await checkAdminRole(session.user.id);
    } catch (error) {
      console.error('Error checking user:', error);
      navigate("/admin-login");
    } finally {
      setLoading(false);
    }
  };

  const checkAdminRole = async (userId: string) => {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .single();

    if (error || !data) {
      await supabase.auth.signOut();
      navigate("/admin-login");
      return;
    }

    const { data: { user: currentUser } } = await supabase.auth.getUser();
    setUser(currentUser);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  return { user, loading, logout };
};
