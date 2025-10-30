"use client"

import { useMemo } from "react"
import { ProductVariant } from "@/types"
import { Button } from "@repo/ui/components/button"

interface ProductVariantsProps {
  variants: ProductVariant[]
  selectedColor: string | null
  selectedSize: string | null
  onSelectColor: (color: string | null) => void
  onSelectSize: (size: string | null) => void
}

export function ProductVariants({
  variants,
  selectedColor,
  selectedSize,
  onSelectColor,
  onSelectSize,
}: ProductVariantsProps) {
  const colors = Array.from(new Set(variants.map((v) => v.color)))
  const sizes = Array.from(new Set(variants.map((v) => v.size)))

  const isAvailable = (color: string, size: string) =>
    variants.some((v) => v.color === color && v.size === size && v.stock > 0)

  const handleColorClick = (color: string) => {
    onSelectColor(selectedColor === color ? null : color)
  }

  const handleSizeClick = (size: string) => {
    onSelectSize(selectedSize === size ? null : size)
  }

  const selectedStock = useMemo(() => {
    if (!selectedColor || !selectedSize) return null
    const match = variants.find(
      (v) => v.color === selectedColor && v.size === selectedSize
    )
    return match ? match.stock : null
  }, [selectedColor, selectedSize, variants])

  return (
    <div className="space-y-4 px-4">
      <p className="text-sm font-medium">
        Stock:{" "}
        {selectedStock === null
          ? ""
          : selectedStock > 0
          ? selectedStock
          : "Out of stock"}
      </p>

      <div>
        <p className="text-sm font-medium mb-2">
          Color: {selectedColor || ""}
        </p>
        <div className="flex gap-2 flex-wrap">
          {colors.map((color) => {
            const disabled = selectedSize
              ? !isAvailable(color, selectedSize)
              : false
            return (
              <Button
                key={color}
                onClick={() => handleColorClick(color)}
                variant={selectedColor === color ? "default" : "outline"}
                disabled={disabled}
              >
                {color}
              </Button>
            )
          })}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">
          Size: {selectedSize || ""}
        </p>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((size) => {
            const disabled = selectedColor
              ? !isAvailable(selectedColor, size)
              : false
            return (
              <Button
                key={size}
                onClick={() => handleSizeClick(size)}
                variant={selectedSize === size ? "default" : "outline"}
                disabled={disabled}
              >
                {size}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
