# Tye — Architectural Portfolio

简洁的建筑作品集网站，专为 GitHub Pages 的默认 Jekyll 分支发布方式准备。
图片自动从 pages 文件夹读取，按文件路径排序。无需修改图片数量，无需 Node/npm。

## 1. 放置文件

将本代码包内的文件放在仓库根目录（不要再嵌套 portfolio 文件夹）。

| 文件 | 用途 |
| --- | --- |
| index.html | 网页主体，发布时自动生成图片列表 |
| styles.css | 样式、手机适配 |
| script.js | 点击放大、缩放、关闭 |
| _config.yml | 姓名和副标题 |
| pages/ | 放 PDF 导出的逐页图片 |
| portfolio.pdf | 可选：原始作品集 PDF，需要你自行添加 |
| Gemfile | 可选本地 Jekyll 预览所需依赖声明 |

将每页 PDF 导出成 JPG、PNG、WebP 或 AVIF 图片，放入 pages/。
推荐命名：001.jpg、002.jpg、003.jpg……（封面也算第一页）。
支持混合格式，例如 001.jpg、002.png、003.webp。使用补零编号，避免 1、10、2 的排序问题。
不要将逐页 PDF 文件放进去；网页的连续展示读取的是图片。也不要只把扩展名从 PDF 改成 JPG。
建议图片长边约 2400–3200 px，压缩后检查小字清晰度；这只是起点，可按图纸复杂程度调整。
原始 PDF 可以保留矢量线条和文字，放大查看效果通常更好。

## 2. 可选 PDF

把整本 PDF 命名为 portfolio.pdf（小写），与 index.html 放在同一级。
发布时如果检测到该文件，页首自动出现 View PDF 与 Download PDF。
不放 PDF 则自动隐藏这两个按钮，不会产生失效链接。

## 3. GitHub Pages 发布

1. 将这些文件放到你的 GitHub 仓库，commit 并 push。
2. 仓库 Settings → Pages。
3. Build and deployment → Source 选择 Deploy from a branch。
4. Branch 选择你实际推送的分支（通常 main），文件夹选择 /(root)，Save。
5. 等待 GitHub Pages 构建完成，从 Pages 设置页面打开网站地址。

本版本依赖 GitHub Pages 自带的 Jekyll 处理 index.html 中的模板。
不要添加 .nojekyll 文件；如果仓库原来有这个文件，使用本模板时应移除它。
若原仓库有自定义 GitHub Actions 网站构建，请改用以上分支发布设置，或自行把 Jekyll 构建加入原流程。
网站使用相对路径，同时适用于 username.github.io 和 username.github.io/repository/。
首次部署后检查首页、放大、PDF 和手机布局。

在已配置好远程仓库的目录中，可用：

```bash
git add index.html styles.css script.js _config.yml Gemfile .gitignore README.md pages
# 如果添加了 PDF，再运行：git add portfolio.pdf
git commit -m "Add architectural portfolio"
git push
```

以后增删图片或替换 PDF 后，再提交并 push 即可。不要只上传 ZIP，需上传解压后的文件。

## 4. 修改姓名与副标题

编辑 _config.yml 的 title 和 description。颜色、页面最大宽度在 styles.css 修改。
网页不包含外部字体、追踪器、CDN 或第三方 JS 库。

## 5. 本地预览（可选）

不能直接双击 index.html 预览完整效果，因为图片列表需要先由 Jekyll 生成。
也不能只用 Python http.server 或 VS Code Live Server 处理原始模板。
最省事的是 push 后查看 GitHub Pages。

如已安装 Ruby 与 Bundler，在项目目录运行：

```bash
bundle install
bundle exec jekyll serve
```

打开终端显示的本地网址。Gemfile 不需要在 GitHub 上手动运行。

## 功能

- 每页按原比例竖向排列，不裁切、不拉伸。
- 第一张优先加载，其余图片使用浏览器原生懒加载。
- 点击页面打开模态大图，Zoom in 放大并滚动查看，Fit page 回到整页。
- 支持 Escape 关闭、键盘焦点、手机浏览。
- 不启用 JavaScript 时，点击图片仍可在新标签页打开原图。
- 图片空文件夹时展示 Portfolio coming soon。

## 验证范围

交付前做了 JavaScript 语法检查及模板/资源的静态检查。
当前交付环境未安装 Ruby/Jekyll，未进行真实 Jekyll 构建或浏览器视觉验收。
最终以你的 GitHub Pages 构建结果与实际作品集图片检查为准。

官方设置说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
