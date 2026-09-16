# Blog Demo

一个基于 **Vue2 + Element UI** 的个人博客前端练手项目，包含首页文章列表、侧边栏信息区、时间线、关于页、登录页与文章详情页等基础模块。

## 项目简介

该项目主要用于前端页面搭建与组件拆分练习，当前以静态展示为主，部分接口（如登录）已预留调用能力，可对接后端服务继续扩展为完整博客系统。

## 技术栈

- Vue 2.6
- Vue Router 3
- Vuex 3（当前为基础空仓）
- Element UI 2
- Axios
- Vue CLI 5

## 功能概览

- 顶部导航：首页 / 时间线 / 关于
- 首页双栏布局：
  - 左侧文章卡片列表 + 分页
  - 右侧个人信息、联系方式、最新文章、分类、热门标签、友链
- 登录页：账号密码输入、接口调用示例、动态时钟展示
- 文章详情页：标题、封面图、正文与元信息展示
- 时间线页：学习记录时间线展示
- “我的”页：未登录态提示组件

## 项目结构

```text
blogdemo
├─ public/                 # 静态资源与 HTML 模板
├─ src/
│  ├─ api/                 # 接口封装（如登录）
│  ├─ assets/              # 图片、字体图标等资源
│  ├─ components/          # 通用与业务组件
│  │  └─ home/             # 首页左右区域组件
│  ├─ router/              # 路由配置
│  ├─ store/               # Vuex 状态管理
│  ├─ utils/               # axios 实例与拦截器
│  ├─ views/               # 页面级组件
│  ├─ App.vue
│  └─ main.js
├─ package.json
└─ vue.config.js
```

## 路由说明

根路由 `/` 会重定向到 `/home`，主要页面如下：

- `/home`：首页
- `/timeLine`：时间线
- `/about`：关于页
- `/login`：登录页
- `/mine`：个人页（当前演示未登录提示）
- `/articleDetail`：文章详情页

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发环境

```bash
npm run serve
```

默认本地开发地址：

- 前端页面：`http://localhost:8888`（见 `vue.config.js`）
- API 基础地址：`http://localhost:8080`（见 `src/utils/require.js`）

### 3. 打包构建

```bash
npm run build
```

### 4. 代码检查

```bash
npm run lint
```

## 脚本命令

- `npm run serve`：启动开发服务器
- `npm run build`：构建生产包
- `npm run lint`：执行 ESLint 检查

## 接口与配置说明

- 登录接口封装位于：`/src/api/login.js`
- Axios 实例与拦截器位于：`/src/utils/require.js`
  - 请求头会自动读取 `localStorage.token` 写入 `Authorization`
  - 当前 `baseURL` 为本地地址，可按需改为后端服务地址

## 当前状态与后续可扩展项

当前项目偏向 UI 与结构练习，建议后续补充：

- 文章、分类、标签等真实数据接口对接
- 登录鉴权与路由守卫
- 搜索功能接入
- 富文本/Markdown 文章渲染
- 全局状态管理与错误处理完善
