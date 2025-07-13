# Link to Text Desktop

一个将网页文本生成高亮链接的桌面工具，基于 Next.js 15 和 Tauri v2 构建。

## 功能特点

- 输入网页链接和要高亮的文本
- 生成带有 `#:~:text=` 片段的链接
- 支持前缀和后缀上下文匹配
- 复制链接和直接测试功能
- 美观的用户界面

## 开发环境准备

### 前提条件

1. 安装 [Node.js](https://nodejs.org/) (v18+)
2. 安装 [Rust](https://www.rust-lang.org/tools/install)
3. 安装 [Tauri 开发环境](https://tauri.app/v1/guides/getting-started/prerequisites)

### 安装依赖

```bash
# 安装 Node.js 依赖
npm install

# 安装 Tauri CLI
npm install -g @tauri-apps/cli
```

## 开发

```bash
# 启动开发服务器
npm run dev

# 在开发模式下运行 Tauri 应用
npm run tauri dev
```

## 构建

```bash
# 构建生产版本
npm run build

# 构建 Tauri 应用
npm run tauri build
```

构建完成后，可执行文件将位于 `src-tauri/target/release` 目录中。

## 技术栈

- [Next.js 15](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tauri v2](https://tauri.app/)
- [Lucide React](https://lucide.dev/) (图标) 