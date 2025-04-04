import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation travail pratique 2",
  description: "Documentation travail pratique 2 du cours d'application web",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Marc-Antoine Jobin', link: '/Marc-Antoine%20Jobin' },
      { text: 'Samuel Croteau', link: '/Samuel%20Croteau' }
    ],

    sidebar: [
      {
        text: 'Contributeurs',
        items: [
          { text: 'Marc-Antoine Jobin', link: '/Marc-Antoine%20Jobin' },
          { text: 'Samuel Croteau', link: '/Samuel%20Croteau' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
