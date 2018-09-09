module.exports = {
  title: 'Netro',
  description: 'The PHP Framework for WordPress Developers',
  base: '/docs/',

  head: [
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400i,700,700i',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
  ],

  themeConfig: {
    // logo: '/assets/img/logo.svg',
    displayAllHeaders: true,
    sidebarDepth: 1,

    nav: [
      { text: 'API', link: 'https://api.netro.io' },
    ],

    sidebar: {
      '/1.0/': require('./1.0'),
    },
  },
}
