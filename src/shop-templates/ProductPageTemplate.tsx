import {Head as JaenHead} from 'jaen'
import {
  getFormattedProductPrices,
  getProductTags,
  ProductPageContext,
  ProductPageData
} from '@snek-at/gatsby-theme-shopify'
import {graphql, PageProps} from 'gatsby'
import React from 'react'
import {ProductTemplate} from '../components/templates/ProductTemplate'
import {useWishlist} from '../services/wishlist'

type ProductPageTemplateProps = PageProps<ProductPageData, ProductPageContext>

const ProductPageTemplate = (props: ProductPageTemplateProps) => {
  const {shopifyProduct, relatedProducts} = props.data

  const {wishlist, addToWishlist, removeFromWishlist} = useWishlist()

  const isOnWishList = wishlist.some(item => item.id === shopifyProduct.id)

  // const analytics = useAnalytics()

  const handleWishlistAdd = (id: string) => {
    if (!isOnWishList) {
      const {priceFormatted, compareAtPriceFormatted} =
        getFormattedProductPrices(shopifyProduct)

      const {price, compareAtPrice} = shopifyProduct.variants[0]

      const tags = getProductTags(shopifyProduct)

      const payload = {
        id,
        handle: shopifyProduct.handle,
        title: shopifyProduct.title,
        price,
        compareAtPrice,
        priceFormatted,
        compareAtPriceFormatted,
        featuredMedia: shopifyProduct.featuredMedia,
        categoriesString: tags.categoryString,
        tagsString: tags.otherString,
        quantity: 1
      }

      // analytics.track('wishlist-add', {
      //   id,
      //   handle: shopifyProduct.handle,
      //   title: shopifyProduct.title
      // })

      addToWishlist(payload)
    } else {
      // analytics.track('wishlist-remove', {
      //   id
      // })

      removeFromWishlist(id)
    }
  }

  return (
    <ProductTemplate
      path={props.path}
      shopifyProduct={props.data.shopifyProduct}
      relatedProducts={props.data.relatedProducts}
      onWishlistAdd={handleWishlistAdd}
      isOnWishList={isOnWishList}
    />
  )
}

export const query = graphql`
  query ($productId: String!, $relatedProductIds: [String!]!) {
    relatedProducts: allShopifyProduct(filter: {id: {in: $relatedProductIds}}) {
      nodes {
        ...shopifyProductData
      }
    }
    shopifyProduct(id: {eq: $productId}) {
      ...shopifyProductData
    }
  }
`

export default ProductPageTemplate

export const Head = (props: ProductPageTemplateProps) => {
  const shopifyProduct = props.data.shopifyProduct

  return (
    <JaenHead
      {...(props as any)}
      jaenPageMetadata={{
        title: shopifyProduct.title,
        description:
          shopifyProduct.description +
          ` | Produkttyp: ${shopifyProduct.productType}` +
          ` | Hersteller: ${shopifyProduct.vendor}`,
        date: new Date(shopifyProduct.createdAt).toISOString(),
        image:
          shopifyProduct.featuredMedia?.image?.gatsbyImageData?.images?.fallback
            ?.src
      }}
    />
  )
}
