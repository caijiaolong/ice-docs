import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '文档',
      children: [
        '/zh/guide/getting-started.html',
        '/zh/guide/README.md',
      ],
    },
  ],
  '/zh/upgrade/': [
    {
      text: '升级',
      link: '/zh/upgrade/upgrade_guide.html'
    },
  ],
  '/zh/advanced/': [
    {
      text: '深入',
      children: [
        '/zh/advanced/architecture.html',
        '/zh/advanced/source-code.html',
      ],
    }
  ]
}
