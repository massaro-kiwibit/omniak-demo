import { MenuItem } from "../app.component";

export const menu: MenuItem[] = [
    {
        name: 'Home',
        icon: 'roofing',
        path: 'home'
    },
    {
        name: 'Develop',
        icon: 'code',
        path: 'develop',
        subMenu: [
            {
                name: 'Android',
                icon: 'android',
                path: 'develop/android'
            },
            {
                name: 'Flutter',
                icon: 'flutter_dash',
                path: 'develop/flutter'
            },
            {
                name: 'Web',
                icon: 'language',
                path: 'develop/web'
            }
        ]
    },
    {
        name: 'Foundations',
        icon: 'book',
        path: 'foundations',
        subMenu: [
            {
                name: 'Accessibility',
                icon: 'accessibility'
            },
            {
                name: 'Customizing Material',
                icon: 'support_agent'
            }
        ]
    },
    {
        name: 'Styles',
        icon: 'palette',
        path: 'styles'
    },
]

export const bottomNavMenu: MenuItem[] = [
    {
        name: 'Home',
        path: 'home',
        icon: 'roofing'
    },
    {
        name: 'Develop',
        icon: 'code',
        path: 'develop',
    },
    {
        name: 'Foundations',
        icon: 'book',
        path: 'foundations',
    },
    {
        name: 'Styles',
        icon: 'palette',
        path: 'styles'
    },
];