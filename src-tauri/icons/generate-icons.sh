#!/bin/bash

# 检查是否安装了 ImageMagick
if ! command -v convert &> /dev/null; then
    echo "错误: 需要安装 ImageMagick"
    echo "请运行: brew install imagemagick (macOS) 或 sudo apt-get install imagemagick (Linux)"
    exit 1
fi

# 检查 SVG 文件是否存在
if [ ! -f "app-icon.svg" ]; then
    echo "错误: app-icon.svg 文件不存在"
    exit 1
fi

echo "开始生成图标..."

# 创建临时目录
mkdir -p temp

# 生成 PNG 图标
echo "生成 PNG 图标..."
convert -background none app-icon.svg -resize 32x32 32x32.png
convert -background none app-icon.svg -resize 128x128 128x128.png
convert -background none app-icon.svg -resize 256x256 128x128@2x.png

# 生成 Windows 图标
echo "生成 Windows 图标..."
convert -background none app-icon.svg -define icon:auto-resize=16,32,48,64,128,256 icon.ico

# 生成 macOS 图标
echo "生成 macOS 图标..."
mkdir -p temp/MyIcon.iconset
convert -background none app-icon.svg -resize 16x16 temp/MyIcon.iconset/icon_16x16.png
convert -background none app-icon.svg -resize 32x32 temp/MyIcon.iconset/icon_16x16@2x.png
convert -background none app-icon.svg -resize 32x32 temp/MyIcon.iconset/icon_32x32.png
convert -background none app-icon.svg -resize 64x64 temp/MyIcon.iconset/icon_32x32@2x.png
convert -background none app-icon.svg -resize 128x128 temp/MyIcon.iconset/icon_128x128.png
convert -background none app-icon.svg -resize 256x256 temp/MyIcon.iconset/icon_128x128@2x.png
convert -background none app-icon.svg -resize 256x256 temp/MyIcon.iconset/icon_256x256.png
convert -background none app-icon.svg -resize 512x512 temp/MyIcon.iconset/icon_256x256@2x.png
convert -background none app-icon.svg -resize 512x512 temp/MyIcon.iconset/icon_512x512.png
convert -background none app-icon.svg -resize 1024x1024 temp/MyIcon.iconset/icon_512x512@2x.png

# 在 macOS 上使用 iconutil 生成 .icns 文件
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "使用 iconutil 生成 .icns 文件..."
    iconutil -c icns temp/MyIcon.iconset -o icon.icns
else
    echo "警告: 不是 macOS 系统，无法生成 .icns 文件"
    echo "请在 macOS 系统上运行此脚本，或使用在线工具生成 .icns 文件"
fi

echo "图标生成完成！"
echo "请检查当前目录中的图标文件" 