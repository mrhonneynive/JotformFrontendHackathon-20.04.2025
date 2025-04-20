export interface ProductOption {
  type: string;
  name: string;
  properties: string;
  defaultQuantity: string;
  specialPricing: boolean;
  expanded?: boolean;
  specialPrices?: string;
  specialPricingAllowed?: boolean;
}

export interface ProductProps {
  pid: string;
  name: string;
  description: string;
  price: string;
  images: string[]; // parsed from stringified array
  options: ProductOption[]; // parsed from stringified array
  type: string;
  hasQuantity?: string;
  hasSpecialPricing?: string;
  fitImageToCanvas?: string;
  showSubtotal?: string;
  connectedCategories?: string;
  connectedProducts?: string;
  period?: string;
  recurringtimes?: string;
  setupfee?: string;
  trial?: string;
  isStockControlEnabled?: string;
  isLowStockAlertEnabled?: string;
  stockQuantityAmount?: string;
  cartQuantity?: number;
}
