"use client";

interface ProductDescriptionProps {
  description: string;
}

export function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div className="px-4">
      <h2 className="text-lg font-semibold mb-2">Description</h2>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
