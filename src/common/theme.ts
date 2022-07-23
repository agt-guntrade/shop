import {extendTheme} from '@chakra-ui/react'
import {StyleFunctionProps} from '@chakra-ui/theme-tools'
import {Dict} from '@chakra-ui/utils'

const theme = {
  config: {
    initialColorMode: false
  },
  colors: {
    agt: {
      lightbackground: '#ffffff',
      darkbackground: '#1d1f21',
      lightstroke: '#d0d7de',
      darkstroke: '#d0d7de',
      lightprimary: '#ffffff',
      darkprimary: '#2D3748',
      orange: '#ff6000',
      red: '#ef3340',
      yellow: '#FFE401',
      blue: '#2151a1',
      blueAccent: '#1d4890',
      gray: '#1f1f1d',
      lightgray: '#E6E6E9',
      grayScheme: {
        300: '#424240',
        600: '#424240',
        500: '#1f1f1d',
        200: '#1f1f1d'
      },
      blueScheme: {
        300: '#1d4890',
        600: '#2151a1',
        500: '#1d4890',
        200: '#1d4890'
      },
      redScheme: {
        200: '#f47079',
        300: '#f25c66',
        400: '#f14753',
        500: '#ef3340',
        600: '#d72e3a',
        700: '#bf2933'
      },
      yellowScheme: {
        200: '#ffec4d',
        300: '#ffe934',
        400: '#ffe71a',
        500: '#FFE401',
        600: '#e6cd01',
        700: '#ccb601'
      }
    }
  },
  semanticTokens: {
    colors: {
      error: 'red.500',
      background: {
        default: 'agt.lightbackground',
        _dark: 'agt.darkbackground'
      },
      text: {
        default: 'agt.grey',
        _dark: 'white'
      },
      border: {
        default: 'agt.lightstroke',
        _dark: 'agt.darkstroke'
      },
      stroke: {
        default: 'agt.lightstroke',
        _dark: 'agt.darkstroke'
      },
      primary: {
        default: 'agt.lightprimary',
        _dark: 'agt.darkprimary'
      }
    }
  },
  styles: {
    global: (props: Dict<any> | StyleFunctionProps) => ({
      body: {
        bg: 'background'
      },
      ':host,:root': {
        '--chakra-ui-focus-ring-color': '#424240'
      },
      '::-webkit-scrollbar': {
        width: '0.5em',
        height: '0.5em'
      },

      '::-webkit-scrollbar-thumb': {
        background: 'agt.gray'
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: 'agt.gray.200'
      },
      '::-webkit-scrollbar-track': {
        background: 'agt.lightgray',
        boxShadow: 'inset 0px 0px 0px 0px #F0F0F0'
      }
    })
  },
  shadows: {
    outline: '0 0 0 3px #424240'
  }
}

export default extendTheme(theme)
