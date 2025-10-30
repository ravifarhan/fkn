export interface SnapResult {
  transaction_id: string;
  order_id: string;
  gross_amount: string;
  payment_type: string;
  transaction_time: string;
  transaction_status: string;
  fraud_status?: string;
  va_numbers?: Array<{ bank: string; va_number: string }>;
  finish_redirect_url?: string;
}

interface Snap {
  pay: (
    token: string,
    options?: {
      onSuccess?: (result: SnapResult) => void;
      onPending?: (result: SnapResult) => void;
      onError?: (result: SnapResult) => void;
      onClose?: () => void;
    }
  ) => void;
}

declare global {
  interface Window {
    snap: Snap;
  }
}
