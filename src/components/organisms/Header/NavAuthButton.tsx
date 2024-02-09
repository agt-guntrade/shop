import {useAuth} from '@atsnek/jaen'
import {Button, IconButton} from '@chakra-ui/react'
import {AiOutlineUser} from '@react-icons/all-files/ai/AiOutlineUser'
import React from 'react'

export interface NavAuthButtonProps {}

export const NavAuthButton: React.FC<NavAuthButtonProps> = () => {
  const authContext = useAuth()

  return (
    <>
      <Button
        display={{base: 'none', lg: 'flex'}}
        size="sm"
        rounded="md"
        leftIcon={<AiOutlineUser />}
        onClick={() => {
          authContext.signinRedirect()
        }}>
        Anmelden
      </Button>
      <IconButton
        size="sm"
        display={{base: 'flex', lg: 'none'}}
        icon={<AiOutlineUser />}
        aria-label="Anmelden"
        onClick={() => {
          authContext.signinRedirect()
        }}
      />
    </>
  )
}
