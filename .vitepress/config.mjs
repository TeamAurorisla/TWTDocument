import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// 原本的config
// export default defineConfig({
  // title: "航迹：潮汐绘卷 整合包开发文档",
  // description: "航迹：潮汐绘卷 The Weaving Tides 整合包开发文档",

  // themeConfig: {
  //   // https://vitepress.dev/reference/default-theme-config
  //   nav: [
  //     { text: 'Home', link: '/' },
  //     { text: 'Example', link: '/markdown-examples' }
  //   ],

  //   sidebar: [
  //     {
  //       text: '示例',
  //       items: [
  //         { text: 'Markdown Examples', link: '/about' },
  //         { text: 'Runtime API Examples', link: '/api-examples' }
  //       ]
  //     }
  //   ],
  //   socialLinks: [
  //     { icon: 'github', link: 'https://github.com/TeamAurorisla' }
  //   ]
  // },
// })

const vitePressOptions = {
  title: "航迹：潮汐绘卷 整合包开发文档",
  description: "航迹：潮汐绘卷 The Weaving Tides 整合包开发文档",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Example', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown Examples', link: '/about' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TeamAurorisla' }
    ]
  },
};

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/',
  collapsed: true,
  capitalizeFirst: true
};

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
