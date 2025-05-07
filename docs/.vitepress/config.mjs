import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/14game/',
    title: "title",
    description: "text",
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '女王', link: '/sfy' },
        ],
        sidebar: {
            '/': [
                {
                    text: 'P1',
                    items: [
                        { text: '以太税', link: '/sfy#以太税' },
                        { text: '风阶段', link: '/sfy#风阶段' },
                        { text: '土阶段', link: '/sfy#土阶段' },
                        { text: '冰阶段', link: '/sfy#冰阶段' }
                    ]
                },
                {
                    text: 'P2',
                    items: [
                        { text: '激进切换', link: '/sfy#激进切换' }
                    ]
                }
            ]
        }
    }
}) 