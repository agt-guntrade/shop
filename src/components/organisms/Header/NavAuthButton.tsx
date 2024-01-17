import {useAuthenticationContext} from '@atsnek/jaen'
import {Button, IconButton} from '@chakra-ui/react'
import {AiOutlineUser} from '@react-icons/all-files/ai/AiOutlineUser'
import React from 'react'

export interface NavAuthButtonProps {}

export const NavAuthButton: React.FC<NavAuthButtonProps> = () => {
  const authContext = useAuthenticationContext()

  return (
    <>
      <Button
        display={{base: 'none', lg: 'flex'}}
        size="sm"
        rounded="md"
        color={['black']}
        colorScheme="brand"
        leftIcon={<AiOutlineUser />}
        onClick={authContext.openLoginModal}>
        Anmelden
      </Button>
      <IconButton
        color={['black']}
        size="sm"
        colorScheme="brand"
        display={{base: 'flex', lg: 'none'}}
        icon={<AiOutlineUser />}
        aria-label="Anmelden"
        onClick={authContext.openLoginModal}
      />
    </>
  )
}
