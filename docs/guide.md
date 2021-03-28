## 健壮性
打包
忽视文件
ts声明文件
单元测试
eslint
README.md

## 步骤
- 初始化文件夹，初始化 git 仓库，初始化 npm，初始化 tsc
```
git init
touch .gitignore
npm init -y
touch .npmignore
npm i typescript -D
tsc --init
```
- 修改 tsconfig.js 配置
- 添加 npm 脚本
- 添加 eslint 校验代码
```
npm i eslint -D
eslint --init
```
- 设置 git 提交的校验钩子
```js
npm install --save-dev husky @commitlint/config-conventional @commitlint/cli commitizen cz-conventional-changelog

// commitlint.config
touch commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"]
};

// huskyrc
touch .huskyrc
{
    "hooks": {
        "pre-commit": "npm run format && npm run lint && npm test",
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
}

// touch .czrc
touch .czrc
{ "path": "cz-conventional-changelog" }

// package.json
{
  "scripts": {
    "commit": "git-cz"
  }
}
```
- 开始编写代码
- watch 模式开发
- 忽略 ts 编译生成的文件夹
- 添加单元测试
- 写一个单元测试示例
- 设置一些有用的 npm 脚本
- 完善 package.json 的描述信息
- 提交代码到 git 仓库
- 发布包到 npm



## 构建目标
- umd 兼容性强
- iife 立即执行函数，用于浏览器
- cjs 用于nodejs
- esm es6 module

## README.md
添加github 官方徽标
```js
// 用法
https://img.shields.io/badge/{徽标标题}-{徽标内容}-{徽标颜色}.svg

// eg:
![build](https://img.shields.io/badge/build-passing-success.svg)
![npm package](https://img.shields.io/badge/npm%20package-1.1.3-success.svg)

// 带链接的徽标
[![](https://img.shields.io/badge/{徽标标题}-{徽标内容}-{徽标颜色}.svg)]({linkUrl})

// github 动态徽标
https://img.shields.io/github/issues/{github用户名}/{仓库名}.svg
https://img.shields.io/github/forks/{github用户名}/{仓库名}.svg
https://img.shields.io/github/stars/{github用户名}/{仓库名}.svg
https://img.shields.io/github/license/{github用户名}/{仓库名}.svg
```

## 参考
[从零开发一个健壮的npm包](https://segmentfault.com/a/1190000014838704)

import alias from '@rollup/plugin-alias'
import eslint from '@rollup/plugin-eslint'
import { nodeResolve } from '@rollup/plugin-node-resolve'  // 加载第三方的node模块
import commonjs from '@rollup/plugin-commonjs' // cjs 转 esm
import { babel } from '@rollup/plugin-babel' 
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'

## error
jest 不支持es module，但是rollup 需要使用es module，所以不能直接转成cjs
```js
npm i rollup-jest

// package.json
"jest": {
  "preset": "rollup-jest"
}
```

## ？
jest 插桩？