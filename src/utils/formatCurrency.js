export const formatCurrency = (value) => {
  if (typeof value !== 'number') {
    throw new Error('O valor deve ser um número');
  }

  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}
