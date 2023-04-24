import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  useDisclosure
} from '@chakra-ui/react'
import {connectBlock, Field, useIndexField} from '@snek-at/jaen'
import {Slider} from '@snek-at/uikit'
import React, {ReactNode} from 'react'
import {scroller} from 'react-scroll'

import {getThemeColor} from '../../../../common/utils'
import {Bullet} from '../../../atoms/Bullet'
import {FixedStrokeLogo} from '../../../molecules/FixedStrokeLogo'
import {NewsCard} from '../../../molecules/NewsCard'
import NewsModal from '../../NewsModal'
import * as style from './style'

export interface NewsSectionProps {
  name: string
  displayName: string
  anchor?: string
}

export interface NewsProps {
  anchor?: string
  heading: ReactNode
}

export const News = ({anchor, heading}: NewsProps) => {
  const [childId, setChildId] = React.useState<string>()
  const [url, setUrl] = React.useState<string>()
  const {isOpen, onOpen, onClose} = useDisclosure()

  const index = useIndexField({
    jaenPageId: 'JaenPage /news/'
  })

  // if (index.children.length === 0) {
  //   return null
  // }

  return (
    <>
      <Box
        id={anchor}
        position="relative"
        overflow="hidden"
        color="ece8e1"
        css={style.Section}>
        <Divider
          orientation="horizontal"
          position="absolute"
          boxSizing="border-box"
          // w="85vw"
          // h="100%"
          top="0"
          left={{base: '0', '2xl': 'calc(4em + 2.5vw)'}}
          //left="5vw"
          borderColor="stroke"
        />
        <Divider
          orientation="vertical"
          position="absolute"
          className="bspacer"
          // w="0"
          // h="100%"
          top="0"
          left="calc(4em + 2.5vw)"
          // borderLeft="1px"
          borderColor="stroke"
          display={{base: 'none', '2xl': 'block'}}
        />
        <Box
          w="100%"
          h="100%"
          position="absolute"
          style={{clip: 'rect(0, auto, auto, 0)'}}>
          <FixedStrokeLogo
            strokeColor={getThemeColor('stroke')}
            backgroundColor={getThemeColor('background')}
          />
        </Box>
        <Container position="relative" py="10" maxW="8xl">
          <Box textAlign="center" my="10">
            <Heading size="2xl">{heading}</Heading>
            <Bullet color="agt.yellow" w="unset" fontSize="xl" mt="5" mb="10" />
          </Box>
          <Slider
            flexDir="column"
            alignItems="stretch"
            w="100%"
            elementProps={{boxSize: 'none'}}>
            <HStack
              spacing="9"
              h="100%"
              py="5"
              width="max-content"
              minW="100%"
              justifyContent="center">
              {index.children.map(page => {
                React.useEffect(() => {
                  if (
                    window &&
                    window.location.search ===
                      `?${page?.jaenPageMetadata?.title}` &&
                    !isOpen
                  ) {
                    setChildId(page.id)
                    onOpen()
                    scroller.scrollTo('news', {offset: -200})
                  }
                }, [])
                return index.withJaenPage(
                  page.id,
                  <Box
                    onClick={() => {
                      onOpen()
                      setChildId(page.id)
                      setUrl(`?${page?.jaenPageMetadata?.title}`)
                    }}>
                    <NewsCard />
                  </Box>
                )
              })}
            </HStack>
          </Slider>
        </Container>
        {childId && (
          <>
            {index.withJaenPage(
              childId || '',
              <NewsModal
                url={url || ''}
                highlight={
                  <Field.Text
                    name="highlight"
                    defaultValue="Aktion"
                    label="Tag"
                  />
                }
                isOpen={isOpen}
                onClose={onClose}
                heading={
                  <Field.Text
                    name="heading"
                    defaultValue="Titel"
                    label="Überschrift"
                  />
                }
                text={
                  <Field.Text
                    name="description"
                    defaultValue=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum."
                    label="Beschreibung"
                  />
                }
                image={
                  // <Field.Image
                  //   name="main"
                  //   defaultValue={
                  //     <StaticImage
                  //       src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  //       alt="default image"
                  //     />
                  //   }
                  // />
                  null
                }
              />
            )}
          </>
        )}
      </Box>
    </>
  )
}

export const NewsSection = ({name, displayName, anchor}: NewsSectionProps) =>
  connectBlock(
    () => (
      <News
        anchor={anchor}
        heading={
          <Field.Text
            name="heading"
            defaultValue={'Neuigkeiten'}
            label="Überschrift"
          />
        }
      />
    ),
    {
      name: name,
      label: displayName
    }
  )

export const NewsSectionJSX = ({
  name,
  displayName,
  anchor
}: NewsSectionProps) => (
  <Field.Section
    name={name}
    label={displayName}
    blocks={[NewsSection({name: `${name}-item`, displayName, anchor})]}
  />
)
