// 多语言配置文件
const I18N = {
  zh: {
    // 导航
    nav: {
      features: '功能',
      quickstart: '快速开始',
      config: '配置',
      github: 'GitHub'
    },
    // Hero 区域
    hero: {
      title: 'Notempty',
      subtitle: '轻量级网页笔记工具',
      description: '一个对新手友好的轻量级笔记工具，支持本地部署或外网部署。浏览器里写 Markdown，自动保存，支持图片上传和多用户登录。',
      download: '立即下载',
      github: 'GitHub 仓库'
    },
    // 功能区域
    features: {
      title: '功能特性',
      subtitle: '简洁而强大，满足你的笔记需求',
      items: [
        {
          title: 'Markdown 编辑',
          desc: '基于 EasyMDE 的编辑器，支持实时预览、语法高亮，让写作更流畅'
        },
        {
          title: '自动保存',
          desc: '内容自动保存到本地磁盘，无需担心数据丢失'
        },
        {
          title: '图片上传',
          desc: '支持粘贴或拖拽上传图片，自动与笔记关联存储'
        },
        {
          title: '多用户支持',
          desc: '支持代理登录、GitHub/Gitee OAuth，数据完全隔离'
        },
        {
          title: '全文搜索',
          desc: '侧栏搜索支持标题和正文全文检索，快速找到笔记'
        },
        {
          title: '公开分享',
          desc: '可将笔记设为公开，生成静态分享链接'
        }
      ]
    },
    // 快速开始
    quickstart: {
      title: '快速开始',
      subtitle: '下载编译好的程序，几分钟即可搭建你的本地笔记服务',
      download: {
        title: '下载最新版本',
        version: '当前版本：',
        date: '发布日期：',
        history: '查看历史版本 →',
        more: '更多下载选项'
      },
      steps: [
        {
          title: '下载程序',
          desc: '根据你的操作系统选择对应的版本下载，解压到任意目录。'
        },
        {
          title: '创建配置文件',
          desc: '在程序同级目录创建 notes-config.json 文件'
        },
        {
          title: '运行程序',
          desc: 'Windows：双击运行 notes.exe<br>Linux/macOS：在终端运行 ./notes'
        },
        {
          title: '开始使用',
          desc: '打开浏览器访问 http://127.0.0.1:8787，点击登录按钮即可开始使用。'
        }
      ]
    },
    // 配置
    config: {
      title: '配置说明',
      subtitle: '灵活的配置选项，适应不同场景',
      tabs: ['代理登录', 'GitHub OAuth', 'Gitee OAuth'],
      proxy: {
        title: '代理登录（推荐）',
        desc: '最简单的配置方式，使用统一的代理服务处理 OAuth',
        code: '{
  "listen": "127.0.0.1:8787",
  "proxyAuth": {
    "proxyUrl": "http://your-proxy-server:port",
    "cookieSecret": "your-random-secret-key"
  }
}'
      },
      github: {
        title: 'GitHub OAuth',
        desc: '直接使用 GitHub 账号登录',
        code: '{
  "listen": "127.0.0.1:8787",
  "githubOAuth": {
    "clientId": "your-client-id",
    "clientSecret": "your-client-secret",
    "callbackUrl": "http://127.0.0.1:8787/auth/github/callback",
    "cookieSecret": "your-random-secret-key"
  }
}'
      },
      gitee: {
        title: 'Gitee OAuth',
        desc: '使用 Gitee 账号登录，适合国内用户',
        code: '{
  "listen": "127.0.0.1:8787",
  "giteeOAuth": {
    "clientId": "your-client-id",
    "clientSecret": "your-client-secret",
    "callbackUrl": "http://127.0.0.1:8787/auth/gitee/callback",
    "cookieSecret": "your-random-secret-key"
  }
}'
      }
    },
    // 存储结构
    storage: {
      title: '数据存储',
      subtitle: '清晰的目录结构，方便管理和备份',
      features: [
        '每位用户拥有独立的存储目录',
        '按年月组织笔记，便于管理',
        '每篇笔记是一个文件夹，包含 Markdown 和图片',
        '与 Hugo leaf bundle 格式兼容',
        '支持 Git 版本管理'
      ]
    },
    // 页脚
    footer: {
      desc: '一个对新手友好的轻量级笔记工具',
      license: '开源项目，遵循 MIT 许可证'
    },
    // 通用
    common: {
      copy: '复制',
      copied: '已复制!',
      download: '下载'
    }
  },
  
  en: {
    // 导航
    nav: {
      features: 'Features',
      quickstart: 'Quick Start',
      config: 'Config',
      github: 'GitHub'
    },
    // Hero 区域
    hero: {
      title: 'Notempty',
      subtitle: 'Lightweight Web Notes',
      description: 'A beginner-friendly lightweight note-taking tool that supports local or external deployment. Write Markdown in browser with auto-save, image upload, and multi-user login.',
      download: 'Download Now',
      github: 'GitHub Repo'
    },
    // 功能区域
    features: {
      title: 'Features',
      subtitle: 'Simple yet powerful, meeting your note-taking needs',
      items: [
        {
          title: 'Markdown Editor',
          desc: 'EasyMDE-based editor with live preview and syntax highlighting for smooth writing'
        },
        {
          title: 'Auto Save',
          desc: 'Content automatically saved to local disk, no worry about data loss'
        },
        {
          title: 'Image Upload',
          desc: 'Support paste or drag-and-drop image upload, automatically associated with notes'
        },
        {
          title: 'Multi-User',
          desc: 'Support proxy login, GitHub/Gitee OAuth with complete data isolation'
        },
        {
          title: 'Full-Text Search',
          desc: 'Sidebar search supports title and content full-text retrieval'
        },
        {
          title: 'Public Sharing',
          desc: 'Set notes as public and generate static sharing links'
        }
      ]
    },
    // 快速开始
    quickstart: {
      title: 'Quick Start',
      subtitle: 'Download the compiled program and set up your local note service in minutes',
      download: {
        title: 'Download Latest',
        version: 'Current Version: ',
        date: 'Release Date: ',
        history: 'View History →',
        more: 'More Downloads'
      },
      steps: [
        {
          title: 'Download',
          desc: 'Choose the version for your OS, download and extract to any directory.'
        },
        {
          title: 'Create Config',
          desc: 'Create notes-config.json in the same directory as the program'
        },
        {
          title: 'Run',
          desc: 'Windows: Double-click notes.exe to run<br>Linux/macOS: Run ./notes in terminal'
        },
        {
          title: 'Start Using',
          desc: 'Open browser and visit http://127.0.0.1:8787, click login to start.'
        }
      ]
    },
    // 配置
    config: {
      title: 'Configuration',
      subtitle: 'Flexible configuration options for different scenarios',
      tabs: ['Proxy Auth', 'GitHub OAuth', 'Gitee OAuth'],
      proxy: {
        title: 'Proxy Login (Recommended)',
        desc: 'The simplest configuration using a unified proxy service for OAuth',
        code: '{
  "listen": "127.0.0.1:8787",
  "proxyAuth": {
    "proxyUrl": "http://your-proxy-server:port",
    "cookieSecret": "your-random-secret-key"
  }
}'
      },
      github: {
        title: 'GitHub OAuth',
        desc: 'Login directly with GitHub account',
        code: '{
  "listen": "127.0.0.1:8787",
  "githubOAuth": {
    "clientId": "your-client-id",
    "clientSecret": "your-client-secret",
    "callbackUrl": "http://127.0.0.1:8787/auth/github/callback",
    "cookieSecret": "your-random-secret-key"
  }
}'
      },
      gitee: {
        title: 'Gitee OAuth',
        desc: 'Login with Gitee account, suitable for users in China',
        code: '{
  "listen": "127.0.0.1:8787",
  "giteeOAuth": {
    "clientId": "your-client-id",
    "clientSecret": "your-client-secret",
    "callbackUrl": "http://127.0.0.1:8787/auth/gitee/callback",
    "cookieSecret": "your-random-secret-key"
  }
}'
      }
    },
    // 存储结构
    storage: {
      title: 'Data Storage',
      subtitle: 'Clear directory structure for easy management and backup',
      features: [
        'Each user has an independent storage directory',
        'Notes organized by year and month for easy management',
        'Each note is a folder containing Markdown and images',
        'Compatible with Hugo leaf bundle format',
        'Support Git version control'
      ]
    },
    // 页脚
    footer: {
      desc: 'A beginner-friendly lightweight note-taking tool',
      license: 'Open source project under MIT License'
    },
    // 通用
    common: {
      copy: 'Copy',
      copied: 'Copied!',
      download: 'Download'
    }
  }
};

// 语言管理器
const i18n = {
  currentLang: localStorage.getItem('lang') || 'zh',
  
  init() {
    this.updatePage();
    this.createLangSwitcher();
  },
  
  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.updatePage();
    this.updateSwitcher();
  },
  
  t(key) {
    const keys = key.split('.');
    let value = I18N[this.currentLang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  },
  
  updatePage() {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = this.t(key);
      if (value) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = value;
        } else {
          el.innerHTML = value;
        }
      }
    });
    
    // 更新页面标题
    document.title = this.currentLang === 'zh' 
      ? 'Notempty · 轻量级网页笔记工具'
      : 'Notempty · Lightweight Web Notes';
  },
  
  createLangSwitcher() {
    const nav = document.querySelector('.nav-links');
    if (!nav || document.querySelector('.lang-switcher')) return;
    
    const li = document.createElement('li');
    li.className = 'lang-switcher';
    li.innerHTML = `
      <button class="lang-btn" onclick="i18n.toggleLang()">
        <span class="lang-current">${this.currentLang === 'zh' ? '中' : 'EN'}</span>
        <span class="lang-arrow">▼</span>
      </button>
      <div class="lang-dropdown">
        <a href="#" onclick="i18n.setLang('zh'); return false;" class="${this.currentLang === 'zh' ? 'active' : ''}">中文</a>
        <a href="#" onclick="i18n.setLang('en'); return false;" class="${this.currentLang === 'en' ? 'active' : ''}">English</a>
      </div>
    `;
    nav.appendChild(li);
  },
  
  updateSwitcher() {
    const btn = document.querySelector('.lang-current');
    if (btn) {
      btn.textContent = this.currentLang === 'zh' ? '中' : 'EN';
    }
    const links = document.querySelectorAll('.lang-dropdown a');
    links.forEach(link => {
      link.classList.toggle('active', link.textContent.includes(this.currentLang === 'zh' ? '中文' : 'English'));
    });
  },
  
  toggleLang() {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown) {
      dropdown.classList.toggle('show');
    }
  }
};

// 点击外部关闭下拉菜单
document.addEventListener('click', (e) => {
  if (!e.target.closest('.lang-switcher')) {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown) dropdown.classList.remove('show');
  }
});

// 初始化
document.addEventListener('DOMContentLoaded', () => i18n.init());
