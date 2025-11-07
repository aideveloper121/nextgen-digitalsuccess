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

  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="lg"
            className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale bg-[#25D366] hover:bg-[#20BA5A]"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="p-2 text-sm font-semibold text-muted-foreground">
            Chat with us on WhatsApp
          </div>
          {phoneNumbers.map((phone) => (
            <DropdownMenuItem
              key={phone.number}
              onClick={() => handleWhatsAppClick(phone.number)}
              className="cursor-pointer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {phone.display}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default WhatsAppButton;
