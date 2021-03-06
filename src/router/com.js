/**普通用户路由 */
import userHome from '@/pages/user_home/index'
import user_layout from '@/pages/user_layout/index'

let comRouter = [
  {
    path: '/',
    redirect: {path: '/home'}, // 重定向到主页
    children: []
  },
  {
    path: '/user',
    redirect: {path: '/user/info'}, // 重定向到主页
    children: []
  },
  {
    path: "/",
    name: "用户主页",
    component: user_layout,
    children: [
      {
        path: '/home',
        component: userHome,
        children: [],
        meta: {
          title: 'C2C众包平台',
          roles: ['admin', 'user']  // 用于权限判断
        },
      },
      {
        path: "/user",
        name: "personal_center",
        component: () => import("../pages/personal_center"),
        meta: {
          title: '个人中心',
          roles: ['admin', 'user'],
        },
        children: [
          {
            path: "/user/info",
            name: "user_info",
            component: () => import("../pages/personal_center/user_info/index"),
            meta: {
              title: '个人信息',
              roles: ['admin', 'user'],
            },
            children: []
          },
          {
            path: "/user/task/list",
            name: "task_list",
            component: () => import("../pages/personal_center/task_list"),
            meta: {
              title: '我的工作台',
              roles: ['admin', 'user'],
            },
            children: []
          },
          {
            path: "/user/task/mine",
            name: "task_mine",
            component: () => import("../pages/personal_center/task_list"),
            meta: {
              title: '我的发布',
              roles: ['admin', 'user'],
            },
          }
        ]
      }
    ]
  },
  {
    path: "/addtask",
    name: "addtask",
    component: user_layout,
    children: [
      {
        path: '/addtask',
        component: () => import("../pages/personal_center/add_task/AddTask"),
        children: [],
        meta: {
          title: '发布任务',
          roles: ['admin', 'user']
        }
      }
    ]
  },

  {
    path: "/login",
    name: "登录",
    component: () => import("../pages/login/user_login"),
    meta: {
      title: '登录页面',
      roles: ['admin', 'user']
    },
    children: []
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/register/register"),
    meta: {
      title: '注册页面',
      roles: ['admin', 'user']
    },
    children: []
  },
]


export {comRouter};
