# 快速获取占位图标

如果你无法立即生成所有所需的图标文件，可以使用以下方法快速获取占位图标，以便测试构建过程：

## 方法一：使用在线工具

1. 访问 [Favicon Generator](https://favicon.io/) 或 [RealFaviconGenerator](https://realfavicongenerator.net/)
2. 上传你的 SVG 文件或使用文本生成简单图标
3. 下载生成的图标包
4. 从包中提取所需的图标文件并重命名

## 方法二：使用示例图标

你可以从 Tauri 的示例项目中复制图标文件：

1. 访问 [Tauri 示例仓库](https://github.com/tauri-apps/tauri/tree/dev/examples/api/src-tauri/icons)
2. 下载所需的图标文件
3. 放置在 `src-tauri/icons` 目录中

## 方法三：使用简单的纯色图标

为了快速测试，你可以创建简单的纯色 PNG 图标：

```bash
# 安装 ImageMagick
brew install imagemagick  # macOS
# 或
sudo apt-get install imagemagick  # Linux

# 创建简单的纯色图标
convert -size 32x32 xc:#4F46E5 32x32.png
convert -size 128x128 xc:#4F46E5 128x128.png
convert -size 256x256 xc:#4F46E5 128x128@2x.png
```

## 最低要求的文件

要使构建过程正常工作，你至少需要以下文件：

- `32x32.png`
- `128x128.png`
- `128x128@2x.png`
- `icon.ico` (Windows)
- `icon.icns` (macOS)

记住，这些只是临时占位图标，你应该在发布前替换为正式的图标。 