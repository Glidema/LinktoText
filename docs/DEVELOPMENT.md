# Link to Text Desktop 开发文档

本文档提供了 Link to Text Desktop 应用程序的详细开发指南。

## 目录

- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [开发环境设置](#开发环境设置)
- [构建流程](#构建流程)
- [代码规范](#代码规范)
- [贡献指南](#贡献指南)

## 技术栈

Link to Text Desktop 使用以下技术栈构建：

- **前端**：
  - [Next.js](https://nextjs.org/) - React 框架
  - [React](https://reactjs.org/) - UI 库
  - [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript
  - [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
  - [Lucide React](https://lucide.dev/) - 图标库

- **桌面应用**：
  - [Tauri](https://tauri.app/) - 构建跨平台桌面应用
  - [Rust](https://www.rust-lang.org/) - 系统编程语言

## 项目结构

```
link-to-text-desktop/
├── .github/                # GitHub 相关文件
│   └── workflows/          # GitHub Actions 工作流
├── docs/                   # 文档和资源
│   └── images/             # 文档图片
├── public/                 # 静态资源
├── src/                    # Next.js 前端源代码
│   ├── app/                # App Router 页面
│   │   ├── layout.tsx      # 根布局组件
│   │   ├── page.tsx        # 主页面组件
│   │   └── globals.css     # 全局样式
│   └── components/         # React 组件
│       └── LinkToTextDesktop.tsx  # 主应用组件
└── src-tauri/              # Tauri 后端代码
    ├── Cargo.toml          # Rust 项目配置
    ├── tauri.conf.json     # Tauri 配置
    ├── build.rs            # Rust 构建脚本
    ├── icons/              # 应用图标
    └── src/                # Rust 源代码
        └── main.rs         # 主入口文件
```

## 开发环境设置

### 前提条件

1. **安装 Node.js**：
   - 下载并安装 [Node.js](https://nodejs.org/) (v18+)
   - 验证安装：`node --version` 和 `npm --version`

2. **安装 Rust**：
   - 按照 [Rust 官方指南](https://www.rust-lang.org/tools/install) 安装 Rust
   - 验证安装：`rustc --version` 和 `cargo --version`

3. **安装 Tauri 依赖**：
   - 按照 [Tauri 前提条件指南](https://tauri.app/v1/guides/getting-started/prerequisites) 安装平台特定依赖

### 设置项目

1. **克隆仓库**：
   ```bash
   git clone https://github.com/你的用户名/link-to-text-desktop.git
   cd link-to-text-desktop
   ```

2. **安装依赖**：
   ```bash
   npm install
   ```

3. **启动开发服务器**：
   ```bash
   npm run tauri dev
   ```

## 构建流程

### 开发构建

开发模式下，应用会启动一个热重载的开发服务器：

```bash
npm run tauri dev
```

这将启动 Next.js 开发服务器和 Tauri 应用程序。

### 生产构建

构建生产版本的应用：

```bash
npm run tauri build
```

构建完成后，可执行文件将位于以下位置：

- **Windows**: `src-tauri/target/release/link-to-text-desktop.exe`
- **macOS**: `src-tauri/target/release/bundle/dmg/Link to Text Desktop_0.1.0_aarch64.dmg`
- **Linux**: `src-tauri/target/release/bundle/appimage/link-to-text-desktop_0.1.0_amd64.AppImage`

### 自动化构建

项目使用 GitHub Actions 进行自动化构建。当推送带有版本标签（如 `v0.1.0`）的提交时，会自动触发构建流程：

```bash
git tag -a v0.1.0 -m "版本 0.1.0 发布"
git push origin v0.1.0
```

## 代码规范

### TypeScript

- 使用类型注解确保类型安全
- 避免使用 `any` 类型
- 使用接口定义组件 props

### React 组件

- 使用函数组件和 Hooks
- 组件文件使用 PascalCase 命名
- 组件内部状态使用 useState 和 useReducer 管理

### CSS 样式

- 使用 Tailwind CSS 实用类
- 避免内联样式
- 遵循移动优先的响应式设计原则

## 贡献指南

### 提交 Pull Request

1. Fork 仓库并克隆到本地
2. 创建新分支：`git checkout -b feature/your-feature-name`
3. 进行更改并提交：`git commit -m "添加新功能"`
4. 推送到你的 Fork：`git push origin feature/your-feature-name`
5. 创建 Pull Request

### 提交规范

使用以下格式提交消息：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更改
- `style`: 格式调整（不影响代码功能）
- `refactor`: 重构代码
- `test`: 添加测试
- `chore`: 构建过程或辅助工具的变动

示例：`feat: 添加高级文本匹配选项` 