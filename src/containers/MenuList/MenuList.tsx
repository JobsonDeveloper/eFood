import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store/store'
import MenuItem from '../../components/MenuItem/MenuItem'
import MenuDialog from '../../components/MenuDialog/MenuDialog'

import { MenuListComp } from './Styles'

const MenuList = () => {
  const { menu } = useSelector((state: RootReducer) => state.restaurantSelected)
  const [showDish, setShowDish] = useState(false)

  return (
    <MenuListComp className="container">
      {menu.map((item) => (
        <MenuItem key={item.id} menu={item} setShowDish={setShowDish} />
      ))}
      {showDish && <MenuDialog setShowDish={setShowDish} />}
    </MenuListComp>
  )
}

export default MenuList
