import {useAuth} from 'jaen'
import {useEffect, useState} from 'react'

export const useWholesaleUser = () => {
  const authContext = useAuth()

  const [isWholesaleUser, setIsWholesaleUser] = useState(false)

  useEffect(() => {
    if (authContext.isAuthenticated) {
      // const roles = authContext.user.profile.

      // const exists = roles.findIndex(role => {
      //   return role.id === '553eab36-b77f-486a-b67b-2f989afd76be'
      // })

      // if (exists !== -1) {
      //   setIsWholesaleUser(true)
      // }

      setIsWholesaleUser(true)
    }
  }, [authContext.user])

  return isWholesaleUser
}
