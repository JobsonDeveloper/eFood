import { useSelector } from 'react-redux'

import { RootReducer } from '../../store/store'
import MenuItem from '../../components/MenuItem/MenuItem'

import { MenuListComp } from './Styles'

const MenuList = () => {
  const { menu } = useSelector((state: RootReducer) => state.restaurantSelected)

  return (
    <MenuListComp className="container">
      {menu.map((item) => (
        <MenuItem
          key={item.id}
          menu={item}
        />
      ))}
    </MenuListComp>
  )
}

export default MenuList
