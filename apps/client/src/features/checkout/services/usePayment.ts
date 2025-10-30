import { Transaction } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function usePayment() {
  const mutation = useMutation({
    mutationFn: async (payload: Transaction) => {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed fetching payment");
      return res.json();
    },
    onSuccess: ({ token }) => {
      if (window.snap) {
        window.snap.pay(token, {
          onSuccess: (result) => console.log("Success:", result),
          onPending: (result) => console.log("Pending:", result),
          onError: (result) => console.log("Error:", result),
          onClose: () => console.log("close"),
        });
      }
    },
  });

  return {
    payment: mutation.mutate,
    isPaymentPending: mutation.isPending,
  };
}
