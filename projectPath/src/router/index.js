/* eslint-disable */
import index from '@/components/index'

import home from '../components/boss/index'
import effect from '../components/common/appList';

import classDetail from '../components/effects/student/studentinfo'

import classStudent from '../components/effects/student/classStudent'
import classTeacher from '../components/effects/student/classTeacher'

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
      component:classDetail,
      children:[{
        path:'student',
        component:classStudent
      },{
        path:'teacher',
        component:classTeacher
      }]
    }
  ]
}, {
  path: '*',
  component: err404
}]
