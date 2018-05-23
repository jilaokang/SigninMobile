/* eslint-disable */
import index from '@/components/index'

import home from '../components/boss/index'
import effect from '../components/common/appList';

import classDetail from '../components/effects/classdetail'

import err404 from '../components/err/404'

export default [{
  path: '/',
  redirect: 'home',
  component: index,
  children: [
    {
      path: 'effect',
      component: effect
    }, {
      path: 'home',
      component: home
    },{
      path:"classdetail",
      component:classDetail
    }
  ]
}, {
  path: '*',
  component: err404
}]
