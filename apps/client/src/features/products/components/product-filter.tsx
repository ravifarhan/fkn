"use client";

import { dummyCategories } from "@/lib";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";

interface ProductFilterProps {
  category: string;
  sortBy: string;
  onCategoryChange: (val: string) => void;
  onSortChange: (val: string) => void;
}

export function ProductFilter({
  category,
  sortBy,
  onCategoryChange,
  onSortChange,
}: ProductFilterProps) {

  return (
    <div className="flex flex-row justify-between items-center w-full gap-4">
      <Select value={category} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-full sm:w-48">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent sideOffset={4}>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            <SelectItem value="all">All Categories</SelectItem>
            {dummyCategories?.map((data) => (
              <SelectItem key={data.id} value={data.slug}>
                {data.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger className="w-full sm:w-48">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent sideOffset={4}>
          <SelectGroup>
            <SelectLabel>Sort by</SelectLabel>
            <SelectItem value="popular">Popular</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price_low">Price: Low to High</SelectItem>
            <SelectItem value="price_high">Price: High to Low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
