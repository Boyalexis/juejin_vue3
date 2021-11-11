import { INavbar, INavItem } from '../typings'

export const NavbarData: INavbar[] = [
  {
    id: 1,
    name: '首页',
    to: '/'
  },
  {
    id: 2,
    name: '沸点',
    to: 'pins'
  },
  {
    id: 3,
    name: '资讯',
    to: 'news'
  },
  {
    id: 4,
    name: '小册',
    to: 'books'
  },
  {
    id: 5,
    name: '活动',
    to: 'events'
  },
  {
    id: 6,
    name: '开发者大会',
    to: 'events'
  },

]

export const DropDownData = [
  {
    id: 1,
    text: '写文章',
    icon: '',
    to: ''
  },
  {
    id: 2,
    text: '草稿箱',
    icon: '',
    to: ''
  },
]

export const NavListData: INavItem[] = [
  {
    id: 1,
    name: '推荐',
    to: '/recommend'
  },
  {
    id: 2,
    name: '关注',
    to: '/following'
  },
  {
    id: 3,
    name: '后端',
    to: '/backend'
  },
  {
    id: 4,
    name: '前端',
    to: '/frontend'
  },
  {
    id: 5,
    name: 'Android',
    to: '/Android'
  },
  {
    id: 6,
    name: 'IOS',
    to: '/ios'
  },
  
]