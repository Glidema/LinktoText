# 图标文件生成指南

从 `app-icon.svg` 生成以下图标文件：

## 所需文件
- `32x32.png`
- `128x128.png`
- `128x128@2x.png` (256x256)
- `icon.icns` (macOS)
- `icon.ico` (Windows)

## 生成步骤

### 使用在线工具
1. 访问 [Convertio](https://convertio.co/) 或 [CloudConvert](https://cloudconvert.com/)
2. 上传 `app-icon.svg` 文件
3. 转换为所需的格式和尺寸
4. 下载并放置在此文件夹中

### 使用本地工具

#### macOS 图标 (.icns)
1. 创建以下尺寸的 PNG 文件：16x16, 32x32, 64x64, 128x128, 256x256, 512x512, 1024x1024
2. 使用以下命令创建 .iconset 文件夹：
   ```bash
   mkdir MyIcon.iconset
   ```
3. 将 PNG 文件重命名并放入该文件夹：
   ```
   icon_16x16.png
   icon_16x16@2x.png
   icon_32x32.png
   icon_32x32@2x.png
   ...
   ```
4. 使用 iconutil 命令生成 .icns 文件：
   ```bash
   iconutil -c icns MyIcon.iconset -o icon.icns
   ```

#### Windows 图标 (.ico)
使用 ImageMagick：
```bash
convert app-icon.svg -define icon:auto-resize=16,24,32,48,64,128,256 icon.ico
```

## 注意事项
- 确保所有图标都是正方形的
- 图标应具有透明背景
- 测试图标在深色和浅色背景上的表现 