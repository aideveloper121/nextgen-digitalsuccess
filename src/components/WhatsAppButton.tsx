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
        {/* 🌟 Glowing Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-lg opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />

        {/* 💚 WhatsApp Floating Button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="lg"
              className="relative z-10 rounded-full h-16 w-16 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 bg-[#25D366] hover:bg-[#20BA5A] p-0"
            >
              {/* Official WhatsApp SVG (larger icon) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="h-10 w-10 text-white"  
              >{/* 👈 increased from h-8 w-8 */}
                <path d="M16.027 3C9.396 3 4 8.396 4 15.027c0 2.639.84 5.084 2.27 7.086L4 29l7.102-2.232a12.96 12.96 0 0 0 4.925.969C22.658 27.737 28 22.341 28 15.709 28 9.078 22.658 3 16.027 3Zm.021 23.812a10.902 10.902 0 0 1-5.547-1.518l-.395-.232-4.22 1.325 1.385-4.105-.262-.426a10.875 10.875 0 0 1-1.66-5.75c0-6.02 4.91-10.93 10.945-10.93 6.021 0 10.93 4.91 10.93 10.93 0 6.035-4.91 10.935-10.93 10.935ZM22.223 18.4c-.32-.16-1.883-.93-2.176-1.035-.293-.107-.506-.16-.717.16-.213.32-.826 1.035-1.013 1.248-.186.213-.373.24-.693.08-.32-.16-1.35-.496-2.574-1.58-.95-.846-1.594-1.893-1.781-2.213-.186-.32-.02-.494.14-.653.146-.146.32-.373.48-.56.16-.187.213-.32.32-.534.107-.213.054-.4-.026-.56-.08-.16-.717-1.73-.982-2.373-.26-.626-.525-.54-.717-.54h-.613c-.187 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.666 0 1.572 1.146 3.092 1.307 3.305.16.213 2.26 3.453 5.475 4.846.766.333 1.365.533 1.83.68.768.244 1.467.209 2.02.127.615-.094 1.883-.768 2.15-1.508.267-.746.267-1.387.187-1.508-.08-.12-.293-.187-.613-.347Z" />
              </svg>
            </Button>
          </DropdownMenuTrigger>

          {/* 📱 Dropdown Menu */}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="#25D366"
                  className="h-4 w-4"
                >
                  <path d="M16.027 3C9.396 3 4 8.396 4 15.027c0 2.639.84 5.084 2.27 7.086L4 29l7.102-2.232a12.96 12.96 0 0 0 4.925.969C22.658 27.737 28 22.341 28 15.709 28 9.078 22.658 3 16.027 3Zm.021 23.812a10.902 10.902 0 0 1-5.547-1.518l-.395-.232-4.22 1.325 1.385-4.105-.262-.426a10.875 10.875 0 0 1-1.66-5.75c0-6.02 4.91-10.93 10.945-10.93 6.021 0 10.93 4.91 10.93 10.93 0 6.035-4.91 10.935-10.93 10.935Z" />
                </svg>
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
