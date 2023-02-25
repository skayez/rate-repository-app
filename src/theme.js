const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textHeader: '#ffffff',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
    default: 'System',
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;