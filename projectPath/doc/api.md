## 复用组件
| 请求 | 名称      | 类型   | 说明                     | 示例 |
| :--- | :-------- | :----: | :----------------------- | :--- |
|   | `percent` | object | 百分比示意图，共四个参数 | 如下 |
|      | `chart`   | Array  | 走势曲线图*3             | 如下 |
|      | `col`     | Array  | 对比柱状图*3             | 如下 |
|      | `table`   | Array  | 表格展示所有数据*3       | 如下 |

#### ① 百分比图
````javascript
  percent: {
      // 圈内标题
      title: "本系今日签到",
      // 今日签到率
      today: 85,
      // 昨日签到
      yeasterday: 72,
      // 上个月签到
      lastmonth: 75
    }
````

#### ② 曲线图
````javascript
  chart: [
      // 一个曲线图内容
      {
        // 基础配置
        config: {
          // 曲线图标题
          title: "上周本系签到率走势",
          // 坐标轴最大值
          max: 100,
          // 坐标轴最小值
          min: 60
        },
        // 坐标轴数据
        data: [{
          // X轴数据
          x: "周一",
          // Y轴数据
          y: 80
          },
          { x: "周二", y: 90 },
          { x: "周三", y: 70 },
          { x: "周四", y: 80 },
          { x: "周五", y: 85 },
          { x: "周六", y: 69 },
          { x: "周日", y: 75 }
        ]
      },
  ...
]
````

#### ③ 表格
````javascript
  table: [{
      config: {
        // 表格标题
        nav: "上周签到率",
        // 表格列
        title: ["姓名", "腾讯通", "签到率"]
      },
      // 表格内容
      content: [
        // 标题
        ["信息系"],
        // 值
        ["赵老师", "15031017", "98%"],
        ["李老师", "15031017", "98%"],
        ["法律系"],
        ["刘老师", "15031017", "98%"]
      ]
    }
  ...
  ]
````

#### ④ 柱状图
````javascript
  col: [{
      config: {
          title: '上周全校签到率报表',
          max: 100,
          min: 60
        },
      data: [
          {x: '金融系', y: 80},
          {x: '会计系', y: 90},
          {x: '信息系', y: 83},
          {x: '法律系', y: 80},
          {x: '艺术系', y: 68},
          {x: '传播系', y: 69},
          {x: '工管系', y: 85}
        ]
    }
  ...
  ]
````

<br/>
<br/>

---

<br/>
<br/>

## 功能需求

#### 身份信息

| 请求 | 名称     | 类型   | 说明                                                         | 示例     |
| :--- | :------- | :----: | ------------------------------------------------------------ | :------- |
| GET  | user     | number | 学生-学号，老师-腾讯通号                                     | 15031017 |
|      | role     | string | 角色权限 0-校领导 1-系主任 2-辅导员 3-老师 4-学生 6-最高权限 | 3        |
|      | userName | string | 用户姓名                                                     | 钱博康   |

````javascript
{
  // 用户的唯一标示
  "user": "15031017",
  // 角色权限 0-校领导 1-系主任 2-辅导员 3-老师 4-学生 6-最高权限
  "role": 6,
  // 用户姓名
  "username": "钱博康"
}
````

#### 学生：课程信息

| 请求 | 名称      | 类型   | 说明                        | 示例     |
| :--- | :-------- | :----: | :-------------------------- | :------- |
| POST | user      | number | 唯一标识                    | 15031017 |
|      | date      | object | 请求日期                    | Data()   |
| GET  | classList | array  | 当天课表，默认获取当天课表 | 如下     |

```javascript
  "classList": [
    {
        // 一天分为["1-2", "3-4", "5-6", "7-8"]共四节课
        "time": "1-2",
        "classname": "计算机网络原理",
        "teacher": "何友鸣",
        "location": "学4201室",
        // 课程是否结束
        "done": true,
        // 签到情况
        "signin": true,
        // 签退情况
        "signout": true,
      },
      ...
  ]
```

#### 老师：签到修改

- 获取某天学生的签到详情

| 请求 | 名称      | 类型   | 说明                        | 示例     |
| :--- | :-------- | :----: | :-------------------------- | :------- |
| POST | user      | number | 唯一标识                    | 15031017 |
|      | date      | object | 请求日期                    | Data()   |
| GET  | classList | array  | 当天课表，默认获取当天课表 | 如下     |

- 修改学生签到信息

| 请求 | 名称    | 类型   | 说明                 | 示例               |
| :--- | :------ | :----: | :------------------- | :----------------- |
| POST | user    | number | 被修改学生的唯一标识 | 15031017 |
|      | date    | object | 修改的具体的时间     |
|      | success | object | 修改情况             |                   |
|GET|value|boolean|是否修改成功|

````javascript
  classList: [{
          // 唯一标识
          key: 0,
          // 上课时间
          title: '1-2',
          class: '软工1501班',
          location: '中1201室',
          // 签到人数
          signin: 30,
          // 总人数
          total: 32,
          // 签到学生情况
          studentList: [{
            name: '张三',
            // 签到失败为false
            success: false
          }
        ...
        ]
    }
  ...
  ]
````

#### 老师，辅导员：缺课学生表

- 获取具体日期缺课学生表

| 请求 | 名称      | 类型   | 说明                        | 示例     |
| :--- | :-------- | :----: | :-------------------------- | :------- |
| POST | user      | number | 唯一标识                    | 15031017 |
|      | date      | object | 请求日期                    | Data()   |
| GET  | table | array  | 当天缺课学生表，默认当天情况 | 如下     |

````javascript
// 如上③表格
table: [ ... ]
````

#### 辅导员：班级情况

- 获取具体日期缺课学生表

| 请求 | 名称      | 类型   | 说明                        | 示例     |
| :--- | :-------- | :----: | :-------------------------- | :------- |
| POST | user      | number | 唯一标识                    | 15031017 |
|      | date      | object | 请求日期                    | Data()   |
| GET  | table | array  | 当天缺课学生，默认当天情况 | 如下     |

````javascript
// 如上③表格
table: [...]
````

#### 系主任：辅导员情况

- 查询具体辅导员情况

| 请求 | 名称      | 类型   | 说明                        | 示例     |
| :--- | :-------- | :----: | :-------------------------- | :------- |
| POST | user      | number | 需要查询身份的唯一标识                 | 15031017 |
| GET  | data | object  | 更新percent和chart数据 | 如下     |


````javascript
data:{
  // 如上①百分比圆
  percent: { }
  // 如上②走势曲线图
  chart: [ ... ]
  // 如上③表格详情
  table: [ ... ]
}
````

#### 系主任：教师情况

- 查询具体教师情况

| 请求 | 名称      | 类型   | 说明                        | 示例     |
| :--- | :-------- | :----: | :-------------------------- | :------- |
| POST | user      | number | 需要查询身份的唯一标识                 | 15031017 |
| GET  | data | object  | 更新percent和chart数据 | 如下     |


````javascript
data:{
  // 如上①百分比圆
  percent: { }
  // 如上②走势曲线图
  chart: [ ... ]
  // 如上③表格详情
  table: [ ... ]
}
````

#### 系主任：课程情况

- 查询具体课程情况

| 请求 | 名称      | 类型   | 说明                        | 示例     |
| :--- | :-------- | :----: | :-------------------------- | :------- |
| POST | user      | number | 需要查询身份的唯一标识                 | 15031017 |
| GET  | data | object  | 更新percent和chart数据 | 如下     |


````javascript
data:{
  // 如上①百分比圆
  percent: { }
  // 如上②走势曲线图
  chart: [ ... ]
  // 如上③表格详情
  table: [ ... ]
}
````

#### 校领导：系部情况

- 全校签到率
- 七个系本周的走势曲线（7张图）
- 各系对比

````javascript
data:{
  // 如上①百分比圆
  percent: { }
  // 如上②走势曲线图
  chart: [ ... ]
  // 如上③表格详情
  table: [ ... ]
}
````

#### 校领导：校园情况

- 全校签到率
- 全校签到率走势（7张图）
- 四个年级签到率对比

````javascript
data:{
  // 如上①百分比圆
  percent: { }
  // 如上②走势曲线图
  chart: [ ... ]
  // 如上③表格详情
  table: [ ... ]
}
````

<br/><br/><br/><br/>


