export default {
  OS_NAME: process.env.VUE_APP_OS_NAME,
  ACCENT_COLOR: '#FF9F00',
  SUPPORTED_DEVICES: [
    {
      product: 'TETRA',
      name: 'U50A_ATT',
      model: '5041C'
    },
    {
      product: 'IDOL 5',
      name: 'simba6_cricket',
      model: '6060C'
    },
    {
      product: 'IDOL 4',
      name: 'idol4',
      model: '6055'
    },
    {
      product: 'TCL LX',
      name: 'U50A_PLUS_TF',
      model: 'A502DL'
    },
    {
      product: 'IDEAL XTRA',
      name: 'U50A_PLUS_ATT',
      model: '5059R'
    },
    {
      product: 'TCL A1',
      name: 'FERMI_TF',
      model: 'A501DL'
    }
  ],
  RELEASE_VARIANTS: {
    teamWin: {
      description: 'TeamWin',
      suffix: '.img'
    },
    orangeFox: {
      description: 'OrangeFox',
      suffix: '.img'
    },
    pitchBlack: {
      description: 'PitchBlack',
      suffix: '.img'
    },
    skyHawk: {
      description: 'SkyHawk',
      suffix: '.img'
    },
    dark: {
      description: 'Dark.',
      suffix: '.img'
    },
    batik: {
      description: 'Batik',
      suffix: '.img'
    },
    nusantara: {
      description: 'Nusantara',
      suffix: '.img'
    },
    redWolf: {
      description: 'RedWolf',
      suffix: '.img'
    }
  },
  DONATION_LINKS: [
    {
      title: 'Paypal Donation Link',
      description:
        'If you are able to, please consider making a donation through PayPal for A-Team and our future projects. This allows us to support this and other projects now and in the future.',
      highlight: true,
      url: 'https://paypal.me/PizzaG98',
      icon: 'paypal',
      rel: 'noreferer'
    }
  ]
}
