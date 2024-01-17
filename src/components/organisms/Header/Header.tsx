import {ChevronDownIcon, CloseIcon, HamburgerIcon} from '@chakra-ui/icons'
import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import {FaShoppingBasket} from '@react-icons/all-files/fa/FaShoppingBasket'
import {Link as GatsbyLink} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'

import {Searchbar, SearchbarProps} from '../../molecules/Searchbar'
import {NavAuthButton} from './NavAuthButton'
import {useBasket} from '../../../services/basket'
import {useContactModal} from '../../../services/contact'
import {useAuthenticationContext} from '@atsnek/jaen'

/**
 *
 * Find the best match for a path in a list of paths.
 *
 * Example:
 * path = /waffen/luftdruckwaffen/luftgewehre
 * paths = ['/waffen', '/waffen/luftdruckwaffen', '/waffen/luftdruckwaffen/test']
 *
 * returns '/waffen/luftdruckwaffen'
 *
 *
 * @param path
 * @param paths
 * @returns
 */
const findBestMatch = (path: string, paths: Array<string>) => {
  const pathParts = path.split('/').filter(p => p !== '')
  const pathPartsLength = pathParts.length

  const bestMatch = paths.reduce((prev, curr) => {
    const currParts = curr.split('/').filter(p => p !== '')
    const currPartsLength = currParts.length

    if (currPartsLength > pathPartsLength) {
      return prev
    }

    const match = currParts.every((part, i) => part === pathParts[i])

    if (match) {
      return curr
    }

    return prev
  }, '')

  return bestMatch
}

export interface HeaderProps extends SearchbarProps {
  path: string
  links: {
    name: string
    path: string
  }[]
}

export const Header = (props: HeaderProps) => {
  const {path: activePath, links} = props

  const {isOpen, onToggle} = useDisclosure()

  const bestMatch = findBestMatch(
    activePath,
    links.map(l => l.path)
  )

  const authContext = useAuthenticationContext()

  const basketContext = useBasket()
  const contactContext = useContactModal()

  const grayColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <>
      <Box
        bg={['agt.gray', 'agt.gray', 'agt.gray', 'agt.gray']}
        color={['white', 'white', 'primary.700', 'primary.700']}
        w="full">
        {!authContext.isAuthenticated && (
          <Container maxW="8xl">
            <HStack
              py={4}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
                display={{base: 'flex', md: 'none'}}
              />

              <HStack
                as={GatsbyLink}
                to="/"
                cursor={'pointer'}
                spacing={{base: '10', md: '20'}}
                alignItems={'center'}
                maxW="2xl">
                <StaticImage
                  src="https://osg.snek.at/storage/BQACAgQAAxkDAAIRYWLcUNC3zwxMZyu5rL7nN2KemEVPAAJoDAACKRHhUsOwfaK3UyezKQQ"
                  alt="AGT GunTrade Logo"
                  style={{maxWidth: '300px'}}
                />
              </HStack>
              <Box display={{base: 'none', md: 'block'}} w="100%" px={8}>
                <Searchbar />
              </Box>

              <HStack
                spacing={4}
                alignItems={'center'}
                justifyContent={'flex-end'}>
                <Button
                  onClick={() => {
                    contactContext.onOpen()
                  }}
                  variant="ghost"
                  display={{
                    base: 'none',
                    md: 'flex'
                  }}
                  _hover={{
                    textDecoration: 'underline'
                  }}
                  color={['white']}
                  colorScheme="agt.grayScheme"
                  fontSize={'md'}
                  size="sm"
                  rounded="md">
                  Kontakt
                </Button>

                <NavAuthButton />

                <Button
                  onClick={basketContext.onOpen}
                  display={{
                    base: 'none',
                    sm: 'flex'
                  }}
                  size="sm"
                  rounded="md"
                  color={['black']}
                  colorScheme="brand"
                  leftIcon={<FaShoppingBasket />}>
                  Warenkorb
                </Button>
                <IconButton
                  onClick={basketContext.onOpen}
                  display={{
                    base: 'flex',
                    sm: 'none'
                  }}
                  icon={<FaShoppingBasket />}
                  aria-label="Open Warenkorb"
                  colorScheme={'agt.redScheme'}
                />
              </HStack>
            </HStack>
          </Container>
        )}
        <Box>
          <Collapse in={isOpen} animateOpacity>
            <Box py="4">
              <Box display={{base: 'flex', md: 'none'}} w="100%" bg="white">
                <Flex direction={'column'} w="100%" py="2">
                  <Searchbar />

                  <VStack spacing={4} py={4} align="left" mx={4}>
                    {activePath && <MobileNavItem name="Hauptseite" path="/" />}
                    <MobileNavItem name="Kategorien" children={links} />
                    <Divider />

                    <MobileNavItem name="Kontakt" path="/contact" />
                  </VStack>
                </Flex>
              </Box>
            </Box>
          </Collapse>
        </Box>
      </Box>
      <Box
        as="nav"
        bg={useColorModeValue('white', 'gray.700')}
        role="navigation"
        display={{base: 'none', md: 'flex'}}>
        <Flex
          h={12}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxW="8xl"
          mx="auto">
          <HStack
            w="100%"
            as={'nav'}
            spacing={4}
            justifyContent={'space-between'}>
            {links.map((link, i) => (
              <Link
                key={i}
                as={GatsbyLink}
                to={link.path}
                px={2}
                py={1}
                rounded={'md'}
                fontSize="lg"
                bg={link.path === bestMatch ? grayColor : 'transparent'}
                _hover={{
                  textDecoration: 'none',
                  bg: grayColor
                }}
                _focus={{
                  textDecoration: 'none',
                  bg: grayColor
                }}>
                {link.name}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Box>
    </>
  )
}

interface NavItem {
  name: string
  path?: string
  children?: Array<NavItem>
}

const MobileNavItem = ({name, children, path}: NavItem) => {
  const {isOpen, onToggle} = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Button
        py={2}
        as={children ? undefined : GatsbyLink}
        // @ts-ignore
        to={children ? undefined : path}
        variant={'ghost'}
        justify={'space-between'}
        justifyContent={'space-between'}
        _hover={{
          textDecoration: 'none'
        }}
        rightIcon={
          <>
            {children && (
              <Icon
                as={ChevronDownIcon}
                transition={'all .25s ease-in-out'}
                transform={isOpen ? 'rotate(180deg)' : ''}
                w={6}
                h={6}
              />
            )}
          </>
        }
        fontWeight={600}
        color={useColorModeValue('gray.600', 'gray.200')}>
        {name}
      </Button>

      <Collapse in={isOpen} animateOpacity style={{marginTop: '0!important'}}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map(child => (
              <Link key={child.name} as={GatsbyLink} to={child.path} py={2}>
                {child.name}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const ClickMobileNavItem = ({
  name,
  onClick
}: {
  name: React.ReactNode
  onClick: () => void
}) => {
  return (
    <Flex
      as={'button'}
      py={2}
      onClick={onClick}
      align={'center'}
      _hover={{
        textDecoration: 'none'
      }}>
      <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
        {name}
      </Text>
    </Flex>
  )
}
