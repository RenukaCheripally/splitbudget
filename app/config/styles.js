import { Platform } from 'react-native';

import colors from './colors';

export default {
  colors,
  text: {
    color: colors.dark,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 18,
  },
  link: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  heading: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amount: {
    color: colors.secondary,
    fontSize: 18,
  },
  toggle: {
    color: colors.medium,
    fontSize: 16,
  },
  button: {
    color: colors.white,
    fontSize: 18,
  },
}
