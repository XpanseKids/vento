import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
}

const WHATSAPP_NUMBER = "5511999999999";

export function WhatsAppButton({
  message = "Olá! Gostaria de saber mais sobre a Vento para minha clínica.",
  variant = "default",
  size = "default",
  className,
  children,
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-emerald-light px-6 py-3 font-display font-semibold text-white shadow-lg shadow-emerald-light/20 transition-all hover:bg-emerald-light/90 hover:shadow-xl hover:shadow-emerald-light/25",
        className,
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-5 w-5" />
        {children ?? "Falar no WhatsApp"}
      </a>
    </Button>
  );
}
