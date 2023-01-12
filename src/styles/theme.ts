import { extendTheme } from 'native-base'

export const THEME = extendTheme({
    colors: {
        primary: {
            700: '#658280',
        },
        secondary: {
            700: '#F88A10'
        },
        gray: {
            700: '#080705',
            500: '#658280',
            100: '#F6F6FA'
        },
        salmon: {
            700: '#FE504F'
        }
    },

    fonts: {
        heading: 'Ubuntu_700Bold',
        body: 'JosefinSans_400Regular',
        ubuntuRegular: 'Ubuntu_400Regular',
        ubuntuBold: 'Ubuntu_700Bold',
        josefinRegular: 'JosefinSans_400Regular',
        josefinBold: 'JosefinSans_700Bold'
      },
})