import {Head as JaenHead} from '@snek-at/jaen'
import {
  getFormattedProductPrices,
  getProductTags,
  ProductPageContext,
  ProductPageData
} from '@snek-at/gatsby-theme-shopify'
import {graphql, PageProps} from 'gatsby'
import React from 'react'
import {Layout} from '../components/Layout'
import {ProductTemplate} from '../components/templates/ProductTemplate'
import {useWishlist} from '../services/wishlist'

type ProductPageTemplateProps = PageProps<ProductPageData, ProductPageContext>

const ProductPageTemplate = (props: ProductPageTemplateProps) => {
  const {shopifyProduct, relatedProducts} = props.data

  const {wishlist, addToWishlist, removeFromWishlist} = useWishlist()

  const isOnWishList = wishlist.some(item => item.id === shopifyProduct.id)

  // const analytics = useAnalytics()

  console.log(`isOnWishList: ${isOnWishList}`)

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
    <>
      <Layout path={props.path}>
        <ProductTemplate
          path={props.path}
          shopifyProduct={props.data.shopifyProduct}
          relatedProducts={props.data.relatedProducts}
          onWishlistAdd={handleWishlistAdd}
          isOnWishList={isOnWishList}
        />
      </Layout>
    </>
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
    <JaenHead {...(props as any)}>
      <title id="title">{shopifyProduct.title} | AGT GunTrade</title>
      <meta
        id="meta-description"
        name="description"
        content={
          shopifyProduct.description +
          ` | Produkttyp: ${shopifyProduct.productType}` +
          ` | Hersteller: ${shopifyProduct.vendor}`
        }
      />
      <meta
        id="meta-date"
        name="date"
        content={new Date(shopifyProduct.createdAt).toISOString()}
      />
      <meta
        id="meta-image"
        name="image"
        content={
          shopifyProduct.featuredMedia?.image?.gatsbyImageData?.images?.fallback
            ?.src
        }
      />
    </JaenHead>
  )
}
