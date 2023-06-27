const formatCurrency = (value: number | undefined) => {
  if (value === undefined || value === null) {
    return "";
  }

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(value);
};