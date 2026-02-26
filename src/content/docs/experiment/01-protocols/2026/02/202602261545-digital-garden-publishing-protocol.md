---
title: 📋 数字花园上下架与同步协议 (Publishing Protocol)
publish:
- japan
tags:
- 宪法
- 协议
- 自动化
---
# 📋 数字花园上下架与同步协议 (v1.1)

本协议定义了“壮游花园”数字花园中内容的生命周期管理规则，即如何将 Obsidian 本地笔记发布（上架）到 Vercel 线上网站，以及如何将其撤回（下架）。

## 1. 上架逻辑 (Publishing)

上架行为由笔记 Frontmatter 中的 `publish` 标签触发：

- **通用日本专题**：
  - 标签：`publish: [japan]`
  - 目标：同步到花园的 `experiment` (实验室) 根目录下。
- **夜抄读 (Zotero 笔记)**：
  - 标签：`publish: [夜抄读]`
  - 目标：同步到花园的 `experiment/night-reading` 目录下。

### 自动化路径：
- **实时监听**：后台 `ink-watcher` 服务时刻盯着 `tcm-10-library/12-momo-night-reading-write`。
- **即时处理**：一旦检测到新文件或修改，`ink-sync-processor` 自动补全 YAML、处理图片并上传 R2、纠正 URL、触发推送。

## 2. 下架逻辑 (Unpublishing/Pruning)

下架行为是“镜像式”的：

- **标签移除**：当从笔记的 `publish` 列表中移除某个标签（如 `japan`）后，下次同步时，目标目录中的对应文件将被**自动物理删除**。
- **孤儿清理 (Orphan Cleanup)**：`dispatcher.py` 脚本会自动扫描目标目录，任何在源目录中不再具备有效 `publish` 标签的文件，都被视为“孤儿”，会被清理掉。

## 3. mo小虾的角色 (Agent's Role)

- **指令触发**：mo小虾具备通过 Discord 指令 `同步夜抄读` 手动触发全量同步的权限。
- **后台常驻**：mo小虾通过 macOS LaunchAgent 服务 (`ai.moxiaoxia.inkwatcher`) 确保同步逻辑在电脑开机后即处于待命状态。
- **协议解释**：mo小虾在处理任务时，需优先遵循本协议定义的标签命名与路径规则。

---
**签署人**：Antigravity Agent (momo 的人生操作系统核心)
**生效日期**：2026-02-26
