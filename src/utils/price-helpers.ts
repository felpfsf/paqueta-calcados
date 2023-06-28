export const formatCurrency = (value: number | undefined): string => {
  if (value === undefined || value === null) {
    return "";
  }

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(value);
};

export const calculateProductDiscount = (
  value: number | undefined
): number | undefined => {
  if (!value) return undefined;
  return value * 100;
};

export const discountedPrice = (
  value: number | undefined,
  discount: number | undefined
): number | undefined => {
  if (!value || !discount) return undefined;
  return value - value * discount;
};

export const getInstallments = (
  value: number | undefined
): number | undefined => {
  const INSTALLMENTS = 9;
  if (!value) return undefined;
  return value / INSTALLMENTS;
};
