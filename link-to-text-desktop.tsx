import React, { useState } from 'react';
import { Copy, ExternalLink, Search, Link, Zap } from 'lucide-react';

const LinkToTextDesktop = () => {
  const [url, setUrl] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [isAdvanced, setIsAdvanced] = useState(false);

  const generateLink = () => {
    if (!url || !selectedText) return;
    
    let link = url;
    if (prefix || suffix) {
      const encodedPrefix = encodeURIComponent(prefix);
      const encodedText = encodeURIComponent(selectedText);
      const encodedSuffix = encodeURIComponent(suffix);
      link = `${url}#:~:text=${encodedPrefix},${encodedText},${encodedSuffix}`;
    } else {
      const encodedText = encodeURIComponent(selectedText);
      link = `${url}#:~:text=${encodedText}`;
    }
    
    setGeneratedLink(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
  };

  const openLink = () => {
    window.open(generatedLink, '_blank');
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Link className="w-8 h-8 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Link to Text Desktop</h1>
          </div>
          <p className="text-gray-600">
            生成带有文本片段高亮的链接，让别人直接看到你想要分享的内容
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          {/* URL Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              网页链接
            </label>
            <div className="relative">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10"
              />
              <ExternalLink className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Text Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              要高亮的文本
            </label>
            <textarea
              value={selectedText}
              onChange={(e) => setSelectedText(e.target.value)}
              placeholder="输入要高亮的文本内容..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-20 resize-none"
            />
          </div>

          {/* Advanced Options Toggle */}
          <div className="mb-6">
            <button
              onClick={() => setIsAdvanced(!isAdvanced)}
              className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
            >
              <Zap className="w-4 h-4 mr-1" />
              {isAdvanced ? '隐藏' : '显示'}高级选项
            </button>
          </div>

          {/* Advanced Options */}
          {isAdvanced && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-3">上下文匹配（可选）</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    前缀文本
                  </label>
                  <input
                    type="text"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    placeholder="目标文本前面的内容"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    后缀文本
                  </label>
                  <input
                    type="text"
                    value={suffix}
                    onChange={(e) => setSuffix(e.target.value)}
                    placeholder="目标文本后面的内容"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                前缀和后缀可以帮助浏览器更准确地定位文本，特别是当目标文本在页面中出现多次时。
              </p>
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={generateLink}
            disabled={!url || !selectedText || !isValidUrl(url)}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            <Search className="w-5 h-5 mr-2" />
            生成链接
          </button>
        </div>

        {/* Generated Result */}
        {generatedLink && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">生成的链接</h2>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">链接地址</span>
                <div className="flex space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
                    title="复制链接"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={openLink}
                    className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
                    title="打开链接"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-800 break-all bg-white p-3 rounded border">
                {generatedLink}
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={copyToClipboard}
                className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
              >
                <Copy className="w-4 h-4 mr-2" />
                复制链接
              </button>
              <button
                onClick={openLink}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                测试链接
              </button>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-blue-800 mb-2">使用说明</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 输入要分享的网页链接</li>
            <li>• 输入想要高亮的文本内容</li>
            <li>• 点击"生成链接"按钮</li>
            <li>• 复制生成的链接并分享给其他人</li>
            <li>• 支持的浏览器：Chrome、Edge、Firefox 等现代浏览器</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinkToTextDesktop;