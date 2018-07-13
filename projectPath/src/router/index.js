import index from '@/views/index'

import home from '../views/frame/index'
import AppList from '../views/frame/appList';

import topTime from '../views/frame/content'
import bodyRole from '../views/frame/role'

import Lesson from '../views/pages/student/myCourse'
import Change from '../views/pages/teacher/change'
import Counselor from '../views/pages/department/counselor'

import Absent from '../views/pages/teacher/absent'
import Class from '../views/pages/teacher/class'

import Teacher from '../views/pages/department/teacher'
import Course from '../views/pages/department/course'

import College from '../views/pages/counselor/college'
import Department from '../views/pages/counselor/department'


import err404 from '../views/common/404'


export default [
  { path: '/', redirect: 'home', component: index,
    children: [
      { path: 'app', component: AppList },
      { path: 'home', component: home },
      { path: 'role', component: bodyRole,
        children: [
          { path: "counselor", component: Counselor },
          { path: "teacher", component: Teacher },
          { path: "course", component: Course },
          { path: "college", component: College },
          { path: "department", component: Department },
          { path: "time", component: topTime,
            children: [
              { path: 'lesson', component: Lesson },
              { path: "absent", component: Absent },
              { path: "class", component: Class },
              { path: "change", component: Change }
            ]}]}]},
  { path: '*', component: err404 }
]
