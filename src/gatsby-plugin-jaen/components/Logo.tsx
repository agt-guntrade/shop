import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'

const Logo: React.FC = () => {
  return (
    <StaticImage
      src="https://osg.snek.at/storage/BQACAgQAAxkDAAIRYWLcUNC3zwxMZyu5rL7nN2KemEVPAAJoDAACKRHhUsOwfaK3UyezKQQ"
      alt="AGT GunTrade Logo"
      style={{maxWidth: '300px'}}
    />
  )
}

export default Logo
