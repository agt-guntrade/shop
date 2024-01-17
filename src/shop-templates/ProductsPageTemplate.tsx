import {Head as JaenHead, PageConfig, PageProps} from '@atsnek/jaen'
import {
  ProductsPageContext,
  ProductsPageData,
  SearchProvider,
  getCollectionStructure,
  useProductSearch
} from '@snek-at/gatsby-theme-shopify'
import React from 'react'
import {ProductsTemplate} from '../components/templates/ProductsTemplate'
import {ProductsTemplateProps} from '../components/templates/ProductsTemplate/ProductsTemplate'

export type ProductsPageTemplateProps = PageProps<
  ProductsPageData,
  ProductsPageContext
>

const ProductsPageTemplate = (props: ProductsPageTemplateProps) => {
  const {implicitTags, tags, maxPrice, minPrice, vendors, productTypes} =
    props.pageContext

  const search = useProductSearch({
    filters: {
      mainTag: implicitTags.length > 0 ? implicitTags[0] : undefined
    }
  })

  const onSortChange = (sort: string) => {
    let sortKey

    let reverse

    switch (sort) {
      case 'Alphabetisch':
        sortKey = 'TITLE'
        reverse = false
        break
      case 'Preis aufsteigend':
        sortKey = 'PRICE'
        reverse = false
        break
      case 'Preis absteigend':
        sortKey = 'PRICE'
        reverse = true
        break
      default:
        sortKey = 'TITLE'
        reverse = false
    }

    search.onChangeOptions({
      sortKey,
      reverse
    })
  }

  const updateFilter = (filters: Partial<ProductsTemplateProps['filters']>) => {
    search.onChangeFilter({
      ...filters,
      maxPrice: filters.maxPrice || undefined,
      minPrice: filters.minPrice || undefined
    })
  }

  const buildProductsPageMeta = () => {
    const collectionTitle = props.pageContext.collectionId

    let title = 'Sortiment'
    let description =
      'Unser Sortiment' +
      ' | Hersteller: ' +
      vendors.join(', ') +
      ' | Produkttypen: ' +
      productTypes.join(', ') +
      ' | Tags: ' +
      tags.join(', ')

    if (collectionTitle) {
      const struct = getCollectionStructure(collectionTitle)

      if (struct.name) {
        title = struct.name
        description += ' | Kategorie: ' + title
      }
    }

    return {
      title,
      description
    }
  }

  return (
    <ProductsTemplate
      path={props.path}
      products={search.products}
      isFetching={search.isFetching}
      fetchNextPage={search.fetchNextPage}
      filters={{
        tags,
        vendors,
        productTypes,
        minPrice,
        maxPrice
      }}
      activeFilters={search.filters}
      updateFilter={updateFilter}
      sortOptions={['Alphabetisch', 'Preis aufsteigend', 'Preis absteigend']}
      onSortChange={onSortChange}
    />
  )
}

export default (
  props: JSX.IntrinsicAttributes &
    PageProps<ProductsPageData, ProductsPageContext>
) => (
  <SearchProvider>
    <ProductsPageTemplate {...props} />
  </SearchProvider>
)

export const Head = (props: ProductsPageTemplateProps) => {
  return (
    <JaenHead
      {...(props as any)}
      jaenPageMetadata={{
        title: 'Onlineshop | AGT GunTrade',
        description: 'Alle Artikel von AGT GunTrade im Überblick'
      }}
    />
  )
}

export const pageConfig: PageConfig = {
  label: 'Onlineshop | AGT GunTrade',
  icon: 'FaShopify',
  childTemplates: []
}
