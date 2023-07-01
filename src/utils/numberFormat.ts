export function numberFormat(price: number): string {
  const formatedNumber = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  return formatedNumber
}
