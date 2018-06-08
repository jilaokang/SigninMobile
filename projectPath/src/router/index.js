/* eslint-disable */
import index from '@/components/index'

import home from '../components/boss/index'
import AppList from '../components/common/frame/bodyAppList';

import topTime from '../components/frame/topTime'

import bodyRole from '../components/frame/bodyRole'

import myCourse from '../components/role/student/myCourse'
import myStudents from '../components/role/teacher/myStudents'
import myClasses from '../components/role/counselor/myClasses'

import myCounselor from '../components/role/department/myCounselor'

import err404 from '../components/err/404'


export default [{
  path: '/',
  redirect: 'home',
  component: index,
  children: [
    {
      path: 'app',
      component: AppList
    }, {
      path: 'home',
      component: home
    },
    {
      path: 'role',
      component: bodyRole,
      children: [{
        path: "topTime",
        component: topTime,
        children: [{
          path: 'myCourse',
          component: myCourse
        }, {
          path: 'myStudents',
          component: myStudents
        }, {
          path: 'myClasses',
          component: myClasses
        }]
      }, {
        path: 'myCounselor',
        component: myCounselor
      }]
    }
  ]
}, {
  path: '*',
  component: err404
}]
