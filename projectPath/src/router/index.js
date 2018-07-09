import index from '@/components/index'

import home from '../components/home/index'
import AppList from '../components/frame/AppList';

import topTime from '../components/frame/Content'
import bodyRole from '../components/frame/Role'

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
