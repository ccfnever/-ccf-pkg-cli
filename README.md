# ccf-pkg-cli

## 简介
`ccf-pkg-cli` 是一个批量安装、删除、更新 node_modules 依赖的命令行工具。

主要是为了方便以下场景的使用：
- 初始化一个项目，而它有多个文件夹需要安装依赖
- 想给多个项目同时更新某些 npm 包
- 更新 node 版本后，需要给项目重新安装依赖
- 硬盘容量不足，想一次性删除某些目录下的 node_modules
- 迁移数据的时候，删除 node_modules 以提高迁移速度 

todo:
yml 配置化功能还没加入，目的是为了批量处理一下散乱的项目，等有时间再搞 ：）
## 安装
```
npm install -g ccf-pkg-cli
```

## 使用
```
# 查看帮助
pkg-cli -h

# 递归删除特定目录下的所有 node_modules
pkg-cli remove -d dir_path

# 递归安装特定目录下的所有项目（带 package.json 文件的目录）
pkg-cli install -d dir_path


```