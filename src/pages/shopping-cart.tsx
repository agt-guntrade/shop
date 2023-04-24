import {useDisclosure} from '@chakra-ui/hooks'
import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'
import React from 'react'
import {Layout} from '../components/Layout'
import {ContactModal} from '../components/organisms/ContactModal'
import {WishlistTemplate} from '../components/templates/WishlistTemplate'
import {useWishlist} from '../services/wishlist'

const WishlistPage = ({path}: PageProps) => {
  const {wishlist, updateQuantity, removeFromWishlist} = useWishlist()
  const {isOpen, onOpen, onClose} = useDisclosure()

  const handleRequestNow = () => {
    onOpen()
  }

  return (
    <Layout path={path}>
      <WishlistTemplate
        path={path}
        items={wishlist}
        onRemove={removeFromWishlist}
        onQuantityChange={updateQuantity}
        onRequestNow={handleRequestNow}
      />
      <ContactModal
        wishlist={wishlist}
        isOpen={isOpen}
        heading={<p>Kaufanfrage (unverbindlich)</p>}
        text={''}
        onClose={() => onClose()}
      />
    </Layout>
  )
}

export default connectPage(WishlistPage, {
  label: 'Wunschliste'
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`
