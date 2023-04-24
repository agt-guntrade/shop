import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import {Link, navigate} from 'gatsby'
import {AiOutlineUser} from '@react-icons/all-files/ai/AiOutlineUser'
import {useIsClient} from '../../../common/useIsClient'
import {useAuthentication} from '../../../services/authentication'
import {useWishlist} from '../../../services/wishlist'
import React from 'react'

export interface NavAuthButtonProps {}

export const NavAuthButton: React.FC<NavAuthButtonProps> = () => {
  const {user, openLoginModal, logout} = useAuthentication()

  const basket = useWishlist()

  const {isClient} = useIsClient()

  if (!isClient) {
    return null
  }

  const responsiveButton = (
    <>
      <Button
        display={{base: 'none', lg: 'flex'}}
        size="sm"
        rounded="md"
        color={['black']}
        colorScheme="agt.yellowScheme"
        leftIcon={<AiOutlineUser />}
        onClick={openLoginModal}>
        {user ? user.name : 'Anmelden'}
      </Button>
      <IconButton
        color={['black']}
        size="sm"
        colorScheme="agt.yellowScheme"
        display={{base: 'flex', lg: 'none'}}
        icon={<AiOutlineUser />}
        aria-label="Anmelden"
        onClick={openLoginModal}
      />
    </>
  )

  if (!user) {
    return responsiveButton
  }

  return (
    <Menu>
      <MenuButton>{responsiveButton}</MenuButton>

      <MenuList color="black">
        <MenuItem
          onClick={() => {
            navigate('/products')
          }}>
          Großhandel
        </MenuItem>
        <MenuItem onClick={basket.onGoToWishlist}>Meine Wunschliste</MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => {
            void logout()
          }}>
          Abmelden
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
