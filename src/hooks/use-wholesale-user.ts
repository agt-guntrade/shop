import {useAuthenticationContext} from '@atsnek/jaen'
import {useEffect, useState} from 'react'

export const useWholesaleUser = () => {
  const authContext = useAuthenticationContext()

  const [isWholesaleUser, setIsWholesaleUser] = useState(false)

  useEffect(() => {
    if (authContext.user) {
      const roles = authContext.user.roles || []

      const exists = roles.findIndex(role => {
        return role.id === '553eab36-b77f-486a-b67b-2f989afd76be'
      })

      if (exists !== -1) {
        setIsWholesaleUser(true)
      }
    }
  }, [authContext.user])

  return isWholesaleUser
}
