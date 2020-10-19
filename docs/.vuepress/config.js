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
          collapsable: false,
          children: [
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
      ],
      '/guide/': [
        {
          title: '浏览器结构与工作原理',
          collapsable: false,
          children: [
            'chrome/devtools',
            'chrome/core',
            'chrome/jsExecution',
            'chrome/v8',
            'chrome/page',
            // 'chrome/stack'
          ],
          
        },
        // {
        //   title: '调试技巧',
        //   collapsable: false,
        //   children: [
        //     'chrome/devtools',
        //   ],
        // },
      ],
      '/computerScience/': [
        {
          title: '数据结构与算法',
          collapsable: false,
          children: [
            'dataStructure/complexity',
            'dataStructure/str',
            'dataStructure/linklist',
          ],
        },
      ],
    },
  },
};
