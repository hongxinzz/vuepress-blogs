const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'FreddZhuo学习笔记',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */


  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '博客',
        link: '/blog/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/hongxinzz/'
      }
    ],
    sidebar: {
      '/blog/': [
        {
          title: '前端必会基础',
          collapsable: false,
          children: [
            'JavaScript变量、作用域',
            'JavaScript预编译AO、GO',
            '前端跨域的那些事'
          ]
        },
        {
          title: '前端手写代码',
          collapsable: false,
          children: [
            '手写一个jsonp',
            'JavaScript中的防抖和节流',
          ]
        },
        {
          title: '浏览器的那些事',
          collapsable: false,
          children: [
            '理解进程、线程',
            '同步与异步',
            '网络安全'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
