// ------- Components ------

type CartItemProps = {
  id: number
  name: string
  image: string
  value: number
  delay: number
}

type MenuDialogProps = {
  setShowDish: React.Dispatch<React.SetStateAction<boolean>>
}

type MenuItemProps = {
  menu: Menu
  setShowDish: Dispatch<SetStateAction<boolean>>
}

type RestaurantItemProps = {
  restaurant: Restautante
}

// ------- Containers ------

type CartListProps = {
  setShow: Dispatch<SetStateAction<string>>
}

type PurchaseCompletedProps = {
  setShow: Dispatch<SetStateAction<string>>
  requestId: number
}

// ------- Api ------

type ApiProduct = {
  id: number
  price: number
}

type ApiPurchasePayload = {
  products: ApiProduct[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

