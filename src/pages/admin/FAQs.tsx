import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const FAQs = () => {
  const { loading, logout } = useAdminAuth();
  const [faqs, setFaqs] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<any>(null);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "general",
  });

  useEffect(() => {
    if (!loading) fetchFAQs();
  }, [loading]);

  const fetchFAQs = async () => {
    const { data, error } = await supabase
      .from("faqs")
      .select("*")
      .order("order_number", { ascending: true });

    if (error) {
      console.error("Error fetching FAQs:", error);
      toast.error("Failed to load FAQs");
      return;
    }

    setFaqs(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingFaq) {
        const { error } = await supabase
          .from("faqs")
          .update(formData)
          .eq("id", editingFaq.id);

        if (error) throw error;
        toast.success("FAQ updated successfully!");
      } else {
        const { error } = await supabase
          .from("faqs")
          .insert({ ...formData, order_number: faqs.length });

        if (error) throw error;
        toast.success("FAQ added successfully!");
      }

      setIsDialogOpen(false);
      resetForm();
      fetchFAQs();
    } catch (error: any) {
      console.error("Error saving FAQ:", error);
      toast.error("Failed to save FAQ");
    }
  };

  const handleEdit = (faq: any) => {
    setEditingFaq(faq);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;

    const { error } = await supabase.from("faqs").delete().eq("id", id);

    if (error) {
      console.error("Error deleting FAQ:", error);
      toast.error("Failed to delete FAQ");
      return;
    }

    toast.success("FAQ deleted successfully!");
    fetchFAQs();
  };

  const resetForm = () => {
    setFormData({
      question: "",
      answer: "",
      category: "general",
    });
    setEditingFaq(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard">
              <Button variant="outline">← Back to Dashboard</Button>
            </Link>
            <h1 className="text-2xl font-bold">Manage FAQs</h1>
          </div>
          <Button onClick={logout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">Total FAQs: {faqs.length}</p>

          {/* Add/Edit FAQ Dialog */}
          <div>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add FAQ
            </Button>

            <Dialog open={isDialogOpen} onOpenChange={(open) => {
              setIsDialogOpen(open);
              if (!open) resetForm();
            }}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingFaq ? "Edit FAQ" : "Add New FAQ"}
                  </DialogTitle>
                  <DialogDescription>
                    Fill in the FAQ details below
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Question *</Label>
                    <Input
                      value={formData.question}
                      onChange={(e) =>
                        setFormData({ ...formData, question: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label>Answer *</Label>
                    <Textarea
                      value={formData.answer}
                      onChange={(e) =>
                        setFormData({ ...formData, answer: e.target.value })
                      }
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label>Category *</Label>
                    <Input
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      placeholder="e.g., General, Courses, Fees"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    {editingFaq ? "Update FAQ" : "Add FAQ"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Category: {faq.category}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(faq)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(faq.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
