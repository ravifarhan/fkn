export interface Transaction {
  orderId: string;
  fullname: string;
  phone: string;
  shippingMethod: string;
  transactionItems: TransactionItem[];
}

export interface TransactionItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}
