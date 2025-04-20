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
  hasQuantity?: string;
  hasSpecialPricing?: string;
  fitImageToCanvas?: string;
  showSubtotal?: string;
}
