---
id: 202602252355
title: "云端家园落成：基于 Cloudflare R2 的视觉资产托管实录"
created: 2026-02-25T23:55:00+08:00
updated: 2026-02-25T23:55:00+08:00
tags:
  - grand-tour
  - digital-ethnography
  - media-literacy
  - infrastructure
  - cloud-storage
publish:
  - japan
---

# 🛰️ 云端家园落成：基于 Cloudflare R2 的视觉资产托管实录

> **“让图片流浪在云端，让思想扎根在本地。”**

---

## 🧭 成长锚点 (Growth Anchors)
- **素养维度**：对象存储 (Object Storage) 架构逻辑、S3 协议实战、API 安全管理
- **涉及工具**：`Cloudflare R2`, `Boto3 (Python)`, `Environment Variables (.env)`
- **协作伙伴**：momo (制片人) & Anti-Gravity (系统架构师)

---

## ⚙️ 系统建构 (The Build)

为了彻底解决“图床焦虑”并保持数字花园的轻量化，我们今天完成了视觉资产架构的战略转型：

1.  **R2 存储桶初始化**：
    - 命名为 `momo`，定位为“人生 OS”与“日本壮游”的联合图床。
    - 开启了 **Object Read & Write** 权限，确保小虾具备自动化搬运能力。
2.  **Uploader 引擎开发**：
    - 编写了 `r2_uploader.py`。该脚本利用 `boto3` 库通过 S3 标准协议与 R2 通讯。
    - 实现了本地文件上传与公开 URL 的自动生成。
3.  **转换管线集成**：
    - 升级了 `heic_converter.py`。现在，照片从 iPhone 进入收件箱后，会经历：**[格式转码] -> [UID 命名] -> [本地归档] -> [R2 闪传]** 的四重工序。

## 🧠 媒介素养与认知迭代 (Literacy & Reflection)

### 1. 突破点：从“附件”到“对象”
我之前习惯于把图片看作笔记的附件（Attachment），存在本地文件夹里。今天我开始理解**“对象存储”**的概念——每一张图片都是一个拥有 URL 的独立对象，它们可以被全世界任何一个节点瞬间访问。这种“去中心化”的资产管理观，是构建大型数字民族志档案馆的基石。

### 2. 人机互喻 (AI Reciprocation)
在配置过程中，我深刻体会到了**“安全隔离”**的重要性。我们将敏感的 API 密钥存放在 `tcm-90-vault` 中，并通过环境变量加载。这种“既协作又防范”的系统设计，提升了我对数字安全主权的理解。

---

## 🏹 对田野调查的影响 (Impact on Fieldwork)
这意味着我在日本田野现场上传的照片，不再受限于 GitHub 的 100MB 单文件限制或 Git 仓库的总大小压力。我可以毫无顾忌地进行高频的视觉采集。同时，云端 URL 使得我的田野笔记在任何浏览器上打开时，图片都能瞬间加载。

---
*Authored by 数字化探险队 @ Digital Ethnography Lab*
