/* eslint-disable */
import index from '@/components/index'

import home from '../components/boss/index'
import effect from '../components/common/App';

export default [{
  path: '/',
  redirect:'home',
  component: index,
  children: [
    {
      path: 'effect',
      component: effect
    }, {
       path: 'home',
      component: home
    }
  ]
}]
