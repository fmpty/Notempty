# Noteempty 项目主页

这是 Noteempty 软件项目的 GitHub Pages 主页源码。

## 🚀 部署说明

### 方式一：GitHub Actions 自动部署（推荐）

本项目已配置 GitHub Actions 工作流，推送代码到 main 分支后会自动部署到 GitHub Pages。

1. 在 GitHub 仓库设置中启用 GitHub Pages：
   - 进入 Settings → Pages
   - Source 选择 "GitHub Actions"

2. 推送代码到 main 分支：
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. GitHub Actions 会自动构建并部署，几分钟后即可访问

### 方式二：手动部署

1. 进入仓库 Settings → Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "main" 和 "/docs" 文件夹
4. 点击 Save

## 📁 目录结构

```
.
├── .github/
│   └── workflows/
│       └── pages.yml      # GitHub Actions 工作流配置
├── docs/                   # GitHub Pages 源文件
│   ├── _config.yml        # Jekyll 配置
│   ├── index.html         # 主页
│   └── assets/
│       ├── css/
│       │   └── style.css  # 样式文件
│       └── js/
│           └── main.js    # 交互脚本
└── README.md              # 本文件
```

## 🎨 自定义修改

### 修改主页内容

编辑 `docs/index.html` 文件：

- 修改标题和描述
- 更新功能介绍
- 修改 GitHub 仓库链接
- 调整配置示例

### 修改样式

编辑 `docs/assets/css/style.css` 文件：

- 修改颜色变量（CSS 变量在 :root 中定义）
- 调整布局和间距
- 自定义动画效果

### 修改交互

编辑 `docs/assets/js/main.js` 文件：

- 添加新的交互功能
- 修改标签页切换逻辑
- 自定义滚动动画

## 📝 注意事项

1. **GitHub 仓库链接**：请将 `index.html` 中的 `yourusername/notes` 替换为你的实际 GitHub 用户名和仓库名

2. **代理服务器地址**：如果代理服务器地址有变化，请在配置示例中更新

3. **图片资源**：如需添加截图或演示图，可将图片放入 `docs/assets/images/` 目录

## 🔧 本地预览

如果你想在本地预览效果：

### 方式一：使用 Python 简单服务器

```bash
cd docs
python -m http.server 8000
```

然后访问 http://localhost:8000

### 方式二：使用 Jekyll（推荐）

```bash
cd docs
bundle install
bundle exec jekyll serve
```

然后访问 http://localhost:4000

## 📄 许可证

与主项目一致，遵循 MIT 许可证。
