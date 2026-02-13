import * as React from "react";
import "tailwindcss";

// Simple className combiner
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface CardProps extends React.ComponentProps<"div"> {}
interface CardSlotProps extends React.ComponentProps<"div"> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-white text-gray-900 flex flex-col gap-4 rounded-xl border shadow-sm hover:shadow-md transition",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardSlotProps) {
  return (
    <div
      data-slot="card-header"
      className={cn("px-6 pt-6 pb-2 border-b border-gray-200", className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: CardSlotProps) {
  return (
    <h4
      data-slot="card-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: CardSlotProps) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-gray-600 text-sm mt-1", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardSlotProps) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 py-4 text-gray-700", className)}
      {...props}
    />
  );
}

export function CardFooter({ className, ...props }: CardSlotProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn("px-6 pb-6 flex justify-end", className)}
      {...props}
    />
  );
}