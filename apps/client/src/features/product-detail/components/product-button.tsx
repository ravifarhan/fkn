"use client";

import { Button } from "@repo/ui/components/button";
import { Spinner } from "@repo/ui/components/spinner";

interface ProductButtonProps {
  loadingAdd: boolean;
  onClickAdd: () => void;
  disabled?: boolean;
}

export function ProductButton({
  loadingAdd,
  onClickAdd,
  disabled,
}: ProductButtonProps) {
  return (
    <div className="flex flex-col gap-2 px-4">
      <Button
        onClick={onClickAdd}
        disabled={disabled}
        className="rounded-full"
      >
        {loadingAdd ? (
          <>
            <Spinner />
            ADD TO CART
          </>
        ) : (
          "ADD TO CART"
        )}
      </Button>
    </div>
  );
}
