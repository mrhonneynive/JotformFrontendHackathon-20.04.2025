import { ProductProps } from "../types/productprops";

export function parseProduct(raw: any): ProductProps {
  return {
    pid: raw.pid,
    name: raw.name,
    description: raw.description || "",
    price: raw.price || "0",
    images: JSON.parse(raw.images || "[]"),
    options: JSON.parse(raw.options || "[]"),
    hasQuantity: raw.hasQuantity,
    hasSpecialPricing: raw.hasSpecialPricing,
    fitImageToCanvas: raw.fitImageToCanvas,
    showSubtotal: raw.showSubtotal,
    connectedCategories: raw.connectedCategories,
    connectedProducts: raw.connectedProducts,
    period: raw.period,
    recurringtimes: raw.recurringtimes,
    setupfee: raw.setupfee,
    trial: raw.trial,
    isStockControlEnabled: raw.isStockControlEnabled,
    isLowStockAlertEnabled: raw.isLowStockAlertEnabled,
    stockQuantityAmount: raw.stockQuantityAmount,
  };
}
