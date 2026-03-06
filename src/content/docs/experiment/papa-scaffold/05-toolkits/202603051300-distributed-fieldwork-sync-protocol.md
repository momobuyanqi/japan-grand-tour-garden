---
title: "分布式田野同步协议：基于 Git Subtree 的协作流程手册"
date: 2026-03-05
created: 2026-03-05 13:00:00
updated: 2026-03-05 13:00:00
publish:
  - papa-scaffold
  - Garden
tags: [Git-Subtree, Technical-Protocol, Collaboration-Workflow, Backup-Strategy]
description: 记录如何通过 Git Subtree 将主 OS 文件夹桥接至独立共享仓库的技术实现细节，及双向同步的操作规范。
---

# 分布式田野同步协议：基于 Git Subtree 的协作流程手册

## 一、 系统架构

- **主 OS 节点**：`/Users/wygg/mycode/myAntigravity` (私有主仓库)
- **共享子节点**：`200-agora/220-social-design/202604-japan-socialized-learning`
- **共享桥接库**：`https://github.com/wygg/japan-great-tour-2026.git`
- **对等克隆节点**：女儿（momo）的本地电脑。

## 二、 操作规程 (Standard Operating Procedures)

### 1. 父亲侧 (WYGG)：从微缩投影到云端推送
当本地完成田野任务设计或文案更新时，执行以下命令同步至云端：

```bash
# 关联共享仓库（仅需一次）
git remote add japan-tour https://github.com/wygg/japan-great-tour-2026.git

# 推送最新变更（折叠投影）
git subtree push --prefix=200-agora/220-social-design/202604-japan-socialized-learning japan-tour main
```

### 2. 女儿侧 (momo)：同步与反向贡献
- **首次获取**：`git clone [仓库地址]`
- **同步父亲的更新**：`git pull origin main`
- **上传自己的田野发现**：
  ```bash
  git add .
  git commit -m "feat: [女儿的更新描述]"
  git push origin main
  ```

### 3. 冲突与补救 (Rollback & Safety)
- **获取丢失文件**：若文件被误删，通过 `git checkout [commit_id] -- [file_path]` 从历史中取回。
- **防止主仓库污染**：由于使用了 `subtree` 模式，女儿在共享库的所有改动，父亲需要通过 `git subtree pull` 才会拉取回主 OS。这为父亲提供了一个**“智识防火墙”**——可以先在共享库查看女儿的代码，确认无误后再合并。

## 三、 数字足迹命名规范
所有协作文件应严格遵循：
`YYYYMMDDHHMM-描述词-作者标签.md`
例如：`202603151400-上野千鹤子访谈录-momo.md`

---
**Antigravity OS 技术负责人**
*记于 050-Toolkits 协议库*
