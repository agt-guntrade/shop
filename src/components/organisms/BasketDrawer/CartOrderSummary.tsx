import {Box, Button, ButtonGroup, Stack, Text, Link} from '@chakra-ui/react'
import {Link as GatsbyLink} from 'gatsby'
import {FaArrowRight} from '@react-icons/all-files/fa/FaArrowRight'
import {FaArrowLeft} from '@react-icons/all-files/fa/FaArrowLeft'
import * as React from 'react'

import {formatPrice} from '../../../common/utils'
import {useBasket} from '../../../services/basket'

export interface CartOrderSummaryProps {
  subtotal: number
  currency: string
  infoText?: React.ReactNode
  checkoutButtonText: string
  onClickCheckout?: () => void
}

export const CartOrderSummary = ({
  subtotal,
  currency,
  infoText,
  checkoutButtonText,
  onClickCheckout
}: CartOrderSummaryProps) => {
  const basketContext = useBasket()

  const disableBuyButton = React.useMemo(
    () =>
      basketContext.checkout?.lineItems.length === 0 ||
      basketContext.checkout?.lineItems.length === undefined,
    [basketContext.checkout?.lineItems.length]
  )

  return (
    <Stack spacing="8" width="full" px="2">
      <Stack spacing="6">
        <Box>
          <Text
            as="span"
            fontSize={{
              base: 'md',
              md: 'lg'
            }}
            fontWeight="semibold">
            Zwischensumme:
          </Text>
          <Text
            fontSize={{
              base: 'lg',
              md: 'xl'
            }}
            fontWeight="extrabold">
            {formatPrice(subtotal, {currency})}
          </Text>
        </Box>

        <>{infoText}</>
      </Stack>

      <ButtonGroup w="full">
        <Button
          w="full"
          variant="outline"
          size="md"
          leftIcon={<FaArrowLeft />}
          py="9 !important"
          onClick={basketContext.onClose}>
          Weiter einkaufen
        </Button>
        <Button
          w="full"
          size="md"
          py="9 !important"
          rightIcon={<FaArrowRight />}
          onClick={onClickCheckout}
          isDisabled={disableBuyButton}>
          {checkoutButtonText}
        </Button>
      </ButtonGroup>
    </Stack>
  )
}
