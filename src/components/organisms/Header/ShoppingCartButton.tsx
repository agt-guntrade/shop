import {
  Avatar,
  AvatarBadge,
  Button,
  ButtonProps,
  IconButton
} from '@chakra-ui/react'
import {FaShoppingBasket} from '@react-icons/all-files/fa/FaShoppingBasket'

import {FaBell} from '@react-icons/all-files/fa/FaBell'

import React, {useMemo} from 'react'

import {useBasket} from '../../../services/basket'

export interface ShoppingCartButtonProps extends ButtonProps {}

export const ShoppingCartButton: React.FC<ShoppingCartButtonProps> = () => {
  const basketContext = useBasket()

  const totalItems = useMemo(() => {
    return basketContext.checkout?.lineItems.length
  }, [basketContext.checkout?.lineItems.length])

  return (
    <>
      <Button
        onClick={basketContext.onOpen}
        display={{
          base: 'none',
          sm: 'flex'
        }}
        size="sm"
        rounded="md"
        colorScheme="brand"
        leftIcon={<FaShoppingBasket />}>
        Warenkorb {totalItems ? `(${totalItems})` : ''}
      </Button>
      <IconButton
        onClick={basketContext.onOpen}
        display={{
          base: 'flex',
          sm: 'none'
        }}
        icon={<FaShoppingBasket />}
        aria-label="Open Warenkorb"
      />
    </>
  )
}
