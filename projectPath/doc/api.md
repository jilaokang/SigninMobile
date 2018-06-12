# api list

- [ ] 身份识别

|请求|名称|类型|值区间限定|说明|示例|
|:-:|:-:|:-:|:-:|:-:|:-:|
|GET|user|number|无|唯一标识符，学生-学号，老师-腾讯通号|15031017|
||role|string|"学生"，"老师"，"辅导员"，"系主任"，"校领导"|取范围值中之一|学生|
||userName|string|无|用户姓名|钱博康|

- [ ] 学生：课表页面

|请求|名称|类型|值区间限定|说明|示例|
|:-:|:-:|:-:|:-:|:-:|:-:|
|POST|user|number|无|唯一标识符，学生-学号，老师-腾讯通号|15031017|
||date|object|无|当前请求时间|Data()|
||msg|string|无|学生的异常反馈|我跟辅导员请假了|
|Get|classList|Array|无|当天课程详细列表|如下|

````javascript
"classList": [
  {
    // String: 一天分为["1-2", "3-4", "5-6", "7-8"]共四节课
    "time": "1-2",
    "classname": "计算机网络原理",
    "teacher": "何友鸣",
    "location": "学4201室",
    // Boolean: 课程是否结束
    "done": true, 
    "signin": true,
    "signout": true,
  }
]
````
