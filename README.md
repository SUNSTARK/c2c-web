# C2C-Web
C2C众包项目Web端

## 补充说明
1. 管理员接口已通过测试，封装参考在src/api/admin_apis/index.js，引用参考test.vue
2. $store新增role、account变量，存储用户的身份标识、登录账号
3. 目前所用权限路由方法比较简单，只是在路由前判断to.path中的meta.roles是否包含当前用户身份，具体查看admin.js和com.js
4. 用户界面user_layout引用参考router/com.js，父组件使用layout，在children属性中引入所需要的页面组件
5. 登录界面已经接入后端，后续请求头都会自动加上真实token

## 更新日志
### v2.4
1. 优化用户界面导航栏样式
2. 用户导航栏新增管理后台入口，管理后台新增用户首页入口
3. 可视化引入中国地图

### v2.3
1. App.vue中新增全局方法reload，用于刷新某个组件，使用时需inject注入
2. 修复了导航菜单路由至个人中心仍处于激活状态的bug
3. 修复了第一次进入admin_home时，面包屑导航不生效的bug
4. 统一了用户界面部分样式，登录注册页新增返回主页选项
5. 优化了router的部分逻辑

### v2.2
1. 任务大厅、任务审核新增服务器异常处理逻辑
2. 优化管理员页面部分可视化样式

### v2.1
1. 引入身份权限路由，新增路由地址请参考admin.js和com.js的meta属性
2. 统一登录注册界面风格
3. $store内存中加入了role身份标识变量，account登录账号变量
4. 用户导航新增v-if、v-else，用于显示登录注册按钮和当前登录账号名

### v2.0
1. 目前所有管理员接口已通过测试，具体方法都封装在src/api/admin_apis/index.js中
2. 项目整合，管理员项目和普通用户项目合并

### v1.5
1. 封装get，post方法，添加了拦截器
2. 登录系统接入后端服务器

### v1.4
1. 重构登录界面，修改layout的部分样式
2. 优化router权限路由逻辑
3. 引入axios模块，未测试
4. 优化echart自适应及其部分显示效果
5. 任务大厅新增点击行展开操作，新增下架二次确认提示

### v1.3
1. 侧栏NavMenu改为路由动态生成
2. 面包屑导航改为路由动态生成
3. 删除前台相关组件
4. 新增NavMenu二级菜单
5. 优化部分显示效果

### v1.2
1. 新增标签页icon图标
2. 新增面包屑导航指引
3. 新增404页面

## 注意事项
```bash
# 安装依赖
yarn install

# 启动服务
yarn start

# 打包发布
yarn build
```
