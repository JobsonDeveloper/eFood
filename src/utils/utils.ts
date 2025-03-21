import Product from "../model/Product"

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: Product[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.value) {
      return (accumulator += currentItem.value)
    }

    return 0
  }, 0)
}