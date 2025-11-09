import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WhatsAppButton = () => {
  const phoneNumbers = [
    { number: "923443493518", display: "0344-3493518" },
    { number: "923412445679", display: "0341-2445679" },
  ];

  const handleWhatsAppClick = (number) => {
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="relative group">
        {/* 🌟 Glowing Ring Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-lg opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />

        {/* 💬 WhatsApp Button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="lg"
              className="relative z-10 rounded-full h-16 w-16 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <MessageCircle className="h-7 w-7" />
            </Button>
          </DropdownMenuTrigger>

          {/* 📱 Dropdown Content */}
          <DropdownMenuContent
            align="end"
            sideOffset={10}
            className="w-64 rounded-xl border border-border bg-background shadow-2xl p-2 animate-in fade-in-50 slide-in-from-bottom-2"
          >
            <div className="p-3 text-sm font-semibold text-center text-muted-foreground border-b mb-2">
              💬 Chat with us on WhatsApp
            </div>
            {phoneNumbers.map((phone) => (
              <DropdownMenuItem
                key={phone.number}
                onClick={() => handleWhatsAppClick(phone.number)}
                className="cursor-pointer rounded-md flex items-center gap-2 py-3 px-4 hover:bg-[#25D366]/10 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span className="font-medium">{phone.display}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default WhatsAppButton;
