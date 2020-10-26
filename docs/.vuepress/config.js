module.exports = {
  base: '/Occam-s-Razor.github.io/',
  port: 3333,
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "奥卡姆剃刀's world",
      description: ' Always believe something beautiful is going to happen',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/la-m.png',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3eaf7c',
      },
    ],
  ],
  themeConfig: {
    repo: 'chengwanglove/Occam-s-Razor.github.io',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用',
            buttonText: '刷新',
          },
        },
        nav: [
          {
            text: '前端知识',
            link: '/guide/install.html'
          },
          {
            text: '计算机基础',
            link: '/computerScience/install.html'
          },
          {
            text: '服务端知识',
            link: '/server/install.html'
          }
        ],
      },
    },
    sidebar: {
      '/server/': [
        {
          title: 'node基础知识',
          collapsable: true,
          children: [
            'node/intro',
            'node/path2',
            'node/buffer',
            'node/dns',
            'node/events',
            'node/fs',
            'node/http',
            'node/path',
            'node/process',
            'node/querystring',
            'node/stream',
            'node/url',
            'node/childProcess',
          ],
        },
        {
          title: 'egg',
          collapsable: true,
          children: [
            'egg/basic',
          ],
        },
      ],
      '/guide/': [
        {
          title: '浏览器结构与工作原理',
          collapsable: true,
          children: [
            'chrome/devtools',
            'chrome/core',
            'chrome/jsExecution',
            'chrome/v8',
            'chrome/page',
            // 'chrome/stack'
          ],
          
        },
        {
          title: 'webpack知识学习',
          collapsable: true,
          children: [
            'webpack/basic',
            'webpack/advanced',
            'webpack/configuration',
          ],
          
        },
        {
          title: 'javaScript',
          collapsable: true,
          children: [
            'javascript/basic',
            'javascript/call',
            'javascript/new',
            'javascript/bind',
            'javascript/repeat',
            'javascript/type',
            'javascript/copy',
            'javascript/extend',
            'javascript/typeCon',
          ],
        },
        {
          title: '前端全链路性能优化',
          collapsable: true,
          children: [
            'perfect/basic',
          ],
        },
      ],
      '/computerScience/': [
        {
          title: '数据结构与算法',
          collapsable: false,
          children: [
            'dataStructure/complexity',
            'dataStructure/str',
            'dataStructure/math',
            'dataStructure/array',
            'dataStructure/linklist',
          ],
        },
      ],
    },
  },
};
