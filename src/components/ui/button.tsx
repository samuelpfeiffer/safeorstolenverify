
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-sos-orange text-white hover:bg-sos-orange/90 border border-transparent shadow-[0_4px_20px_hsl(16_100%_50%_/_0.4)] hover:shadow-[0_6px_25px_hsl(16_100%_50%_/_0.5)] rounded-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-transparent hover:shadow-destructive/25 rounded-xl",
        outline:
          "border-2 border-sos-orange/30 bg-transparent text-sos-orange hover:bg-sos-orange/10 hover:border-sos-orange hover:shadow-[0_0_20px_hsl(16_100%_50%_/_0.3)] backdrop-blur-sm rounded-xl",
        secondary:
          "bg-sos-lime text-sos-dark hover:bg-sos-lime/90 border border-transparent shadow-[0_4px_20px_hsl(82_84%_47%_/_0.3)] hover:shadow-[0_6px_25px_hsl(82_84%_47%_/_0.4)] font-bold rounded-xl",
        ghost: "hover:bg-sos-orange/10 hover:text-sos-orange text-foreground border border-transparent hover:border-sos-orange/20 rounded-xl",
        link: "text-sos-orange underline-offset-4 hover:underline border border-transparent rounded-none",
        gradient: "bg-gradient-to-r from-sos-orange via-sos-orange to-sos-orange/80 text-white hover:from-sos-orange/90 hover:via-sos-orange hover:to-sos-orange shadow-[0_4px_20px_hsl(16_100%_50%_/_0.4)] hover:shadow-[0_6px_30px_hsl(16_100%_50%_/_0.6)] rounded-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        lime: "bg-sos-lime text-sos-dark hover:bg-sos-lime/90 shadow-[0_4px_20px_hsl(82_84%_47%_/_0.3)] hover:shadow-[0_6px_25px_hsl(82_84%_47%_/_0.4)] border border-transparent font-bold rounded-xl",
        security: "bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600 shadow-[0_4px_20px_hsl(142_76%_36%_/_0.4)] hover:shadow-[0_6px_25px_hsl(142_76%_36%_/_0.5)] border border-transparent rounded-xl",
        premium: "bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white hover:from-purple-700 hover:via-purple-800 hover:to-indigo-800 shadow-[0_4px_20px_hsl(262_83%_58%_/_0.4)] hover:shadow-[0_6px_30px_hsl(262_83%_58%_/_0.6)] border border-transparent rounded-xl relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-xl px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
