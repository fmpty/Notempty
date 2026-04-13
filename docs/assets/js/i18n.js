// 多语言配置文件
const I18N = {
  zh: {
    nav: {
      features: '功能',
      quickstart: '快速开始',
      config: '配置',
      github: 'GitHub'
    },
    hero: {
      title: 'Notempty',
      subtitle: '轻量级笔记工具',
      descriptionShort: '一个对新手友好的轻量级笔记工具',
      description: '一个对新手友好的轻量级笔记工具，支持本地部署或外网部署。浏览器里写 Markdown，自动保存，支持图片上传和多用户登录。',
      download: '立即下载',
      scroll: '向下滚动了解更多'
    },
    features: {
      title: '核心功能',
      subtitle: '简洁而强大的笔记体验',
      items: [
        { title: 'Markdown 编辑', desc: '基于 EasyMDE 的实时预览编辑器，支持完整的 Markdown 语法，所见即所得的写作体验。' },
        { title: '图片上传', desc: '支持粘贴或拖拽上传图片，自动保存到笔记目录。支持 PNG、JPG、GIF、WebP、HEIC、AVIF、BMP 格式。' },
        { title: '全文搜索', desc: '侧栏支持标题和正文全文检索，快速找到你需要的笔记内容。' },
        { title: '多用户隔离', desc: '支持代理登录、GitHub、Gitee OAuth 登录，每位用户数据完全隔离存储。' },
        { title: '公开笔记', desc: '支持将笔记设为公开，生成静态分享链接，方便与他人分享你的知识。' },
        { title: '主题切换', desc: '支持明暗主题切换，自动保存偏好设置，保护你的眼睛。' }
      ]
    },
    quickstart: {
      title: '快速开始',
      subtitle: '下载编译好的程序，几分钟即可搭建你的本地笔记服务',
      downloadTitle: '下载最新版本',
      currentVersion: '当前版本',
      releaseDate: '发布日期',
      viewHistory: '查看历史版本 →',
      moreOptions: '更多下载选项',
      download: '下载',
      steps: [
        { title: '下载程序', desc: '根据你的操作系统选择对应的版本下载，解压到任意目录。' },
        { title: '创建配置文件', desc: '在程序同级目录创建 notes-config.json 文件：' },
        { title: '运行程序', desc: 'Windows：双击运行 notes.exe<br>Linux/macOS：在终端运行 ./notes' },
        { title: '开始使用', desc: '打开浏览器访问 http://127.0.0.1:8787，点击登录按钮即可开始使用。' }
      ],
      copy: '复制',
      copied: '已复制!'
    },
    history: {
      title: '历史版本',
      subtitle: '下载 Notempty 的所有历史版本',
      backToHome: '← 返回首页',
      changelog: '更新内容',
      latest: '最新版本',
      download: '下载'
    },
    config: {
      title: '配置说明',
      subtitle: '灵活的登录方式配置',
      tabs: {
        proxy: '代理登录（推荐）',
        github: 'GitHub OAuth',
        gitee: 'Gitee OAuth'
      },
      proxy: {
        advantages: '代理登录优势',
        benefits: [
          '配置最简单，只需一个代理服务地址',
          '无需申请 GitHub/Gitee OAuth 应用',
          '统一的回调地址，多环境部署更方便',
          '客户端不接触 Client Secret，更安全'
        ]
      },
      github: {
        steps: 'GitHub OAuth 配置步骤',
        instructions: [
          '打开 GitHub → Settings → Developer settings → OAuth Apps → New OAuth App',
          '填写 Application name、Homepage URL 和 Authorization callback URL',
          '创建后获取 Client ID 和 Client Secret',
          '填入配置文件即可'
        ]
      },
      gitee: {
        steps: 'Gitee OAuth 配置步骤',
        instructions: [
          '打开 Gitee → 设置 → 第三方应用 → 创建应用',
          '填写应用名称、应用主页和回调地址',
          '创建后获取 Client ID 和 Client Secret',
          '填入配置文件即可'
        ]
      }
    },
    structure: {
      title: '数据存储结构',
      subtitle: '清晰的数据组织方式',
      features: '存储特点',
      benefits: [
        '每位用户拥有独立的存储目录',
        '按年月组织笔记，便于管理',
        '每篇笔记是一个文件夹，包含 Markdown 和图片',
        '与 Hugo leaf bundle 格式兼容',
        '支持 Git 版本管理'
      ]
    },
    footer: {
      desc: '一个对新手友好的轻量级笔记工具',
      license: '开源项目，遵循 MIT 许可证'
    }
  },
  en: {
    nav: {
      features: 'Features',
      quickstart: 'Quick Start',
      config: 'Config',
      github: 'GitHub'
    },
    hero: {
      title: 'Notempty',
      subtitle: 'Lightweight Notes',
      descriptionShort: 'A beginner-friendly lightweight note-taking tool',
      description: 'A beginner-friendly lightweight note-taking tool supporting local or external deployment. Write Markdown in browser with auto-save, image upload and multi-user login.',
      download: 'Download Now',
      scroll: 'Scroll down to learn more'
    },
    features: {
      title: 'Core Features',
      subtitle: 'Simple yet powerful note-taking experience',
      items: [
        { title: 'Markdown Editor', desc: 'Real-time preview editor based on EasyMDE with full Markdown syntax support for a WYSIWYG writing experience.' },
        { title: 'Image Upload', desc: 'Support paste or drag-and-drop image upload, automatically saved to note directory. Supports PNG, JPG, GIF, WebP, HEIC, AVIF, BMP formats.' },
        { title: 'Full-text Search', desc: 'Sidebar supports title and content full-text search to quickly find your notes.' },
        { title: 'Multi-user Isolation', desc: 'Support proxy login, GitHub, and Gitee OAuth login with complete data isolation for each user.' },
        { title: 'Public Notes', desc: 'Support setting notes as public and generating static sharing links to share your knowledge.' },
        { title: 'Theme Switching', desc: 'Support light/dark theme switching with automatic preference saving to protect your eyes.' }
      ]
    },
    quickstart: {
      title: 'Quick Start',
      subtitle: 'Download the compiled program and set up your local note service in minutes',
      downloadTitle: 'Download Latest Version',
      currentVersion: 'Current Version',
      releaseDate: 'Release Date',
      viewHistory: 'View Version History →',
      moreOptions: 'More Download Options',
      download: 'Download',
      steps: [
        { title: 'Download', desc: 'Choose the version for your operating system, download and extract to any directory.' },
        { title: 'Create Config', desc: 'Create notes-config.json file in the same directory as the program:' },
        { title: 'Run Program', desc: 'Windows: Double-click to run notes.exe<br>Linux/macOS: Run ./notes in terminal' },
        { title: 'Start Using', desc: 'Open browser and visit http://127.0.0.1:8787, click login button to start using.' }
      ],
      copy: 'Copy',
      copied: 'Copied!'
    },
    history: {
      title: 'Version History',
      subtitle: 'Download all historical versions of Notempty',
      backToHome: '← Back to Home',
      changelog: 'Changelog',
      latest: 'Latest',
      download: 'Download'
    },
    config: {
      title: 'Configuration',
      subtitle: 'Flexible login configuration options',
      tabs: {
        proxy: 'Proxy Login (Recommended)',
        github: 'GitHub OAuth',
        gitee: 'Gitee OAuth'
      },
      proxy: {
        advantages: 'Proxy Login Benefits',
        benefits: [
          'Simplest configuration with just a proxy service URL',
          'No need to apply for GitHub/Gitee OAuth apps',
          'Unified callback URL for easier multi-environment deployment',
          'Client does not touch Client Secret, more secure'
        ]
      },
      github: {
        steps: 'GitHub OAuth Configuration Steps',
        instructions: [
          'Go to GitHub → Settings → Developer settings → OAuth Apps → New OAuth App',
          'Fill in Application name, Homepage URL and Authorization callback URL',
          'Get Client ID and Client Secret after creation',
          'Fill into configuration file'
        ]
      },
      gitee: {
        steps: 'Gitee OAuth Configuration Steps',
        instructions: [
          'Go to Gitee → Settings → Third-party Apps → Create App',
          'Fill in app name, homepage and callback URL',
          'Get Client ID and Client Secret after creation',
          'Fill into configuration file'
        ]
      }
    },
    structure: {
      title: 'Data Storage Structure',
      subtitle: 'Clear data organization',
      features: 'Storage Features',
      benefits: [
        'Each user has independent storage directory',
        'Organize notes by year and month for easy management',
        'Each note is a folder containing Markdown and images',
        'Compatible with Hugo leaf bundle format',
        'Support Git version control'
      ]
    },
    footer: {
      desc: 'A beginner-friendly lightweight note-taking tool',
      license: 'Open source project under MIT License'
    }
  }
};

// 语言管理器
const i18n = {
  currentLang: localStorage.getItem('lang') || 'zh',

  init() {
    this.updatePage();
    this.updateSwitcher();
    this.bindEvents();
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
        el.textContent = value;
      }
    });

    // 更新页面标题 - 检测是否在历史页面
    const isHistoryPage = document.querySelector('.history-page') !== null;
    if (isHistoryPage) {
      document.title = this.currentLang === 'zh'
        ? '历史版本 - Notempty'
        : 'Version History - Notempty';
    } else {
      document.title = this.currentLang === 'zh'
        ? 'Notempty · 轻量级网页笔记工具'
        : 'Notempty · Lightweight Web Notes';
    }

    // 更新 meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      if (isHistoryPage) {
        metaDesc.content = this.currentLang === 'zh'
          ? 'Notempty 历史版本下载'
          : 'Notempty Version History Downloads';
      } else {
        metaDesc.content = this.currentLang === 'zh'
          ? 'Notempty - 一个对新手友好的轻量级网页笔记工具，支持本地部署或外网部署，浏览器里写 Markdown，自动保存，支持图片上传和多用户登录'
          : 'Notempty - A beginner-friendly lightweight web note-taking tool supporting local or external deployment, with Markdown editing, auto-save, image upload and multi-user login';
      }
    }

    // 更新功能卡片
    this.updateFeatureCards();

    // 更新快速开始步骤
    this.updateQuickstartSteps();

    // 更新配置标签
    this.updateConfigTabs();

    // 更新配置说明
    this.updateConfigInfo();

    // 更新存储结构
    this.updateStructureInfo();

    // 更新页脚
    this.updateFooter();

    // 更新其他文本
    this.updateOtherText();
  },

  updateFeatureCards() {
    const cards = document.querySelectorAll('.feature-card');
    const items = this.t('features.items');
    cards.forEach((card, index) => {
      if (items[index]) {
        const h3 = card.querySelector('h3');
        const p = card.querySelector('p');
        if (h3) h3.textContent = items[index].title;
        if (p) p.textContent = items[index].desc;
      }
    });
  },

  updateQuickstartSteps() {
    const steps = document.querySelectorAll('.step');
    const stepData = this.t('quickstart.steps');
    steps.forEach((step, index) => {
      if (stepData[index]) {
        const h3 = step.querySelector('h3');
        const p = step.querySelector('p');
        if (h3) h3.textContent = stepData[index].title;
        if (p) {
          if (index === 2) {
            p.innerHTML = stepData[index].desc;
          } else {
            p.textContent = stepData[index].desc;
          }
        }
      }
    });
  },

  updateConfigTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const tabData = this.t('config.tabs');
    tabs.forEach(tab => {
      const tabKey = tab.getAttribute('data-tab');
      if (tabData[tabKey]) {
        tab.textContent = tabData[tabKey];
      }
    });
  },

  updateConfigInfo() {
    // 代理登录
    const proxyInfo = document.querySelector('#proxy .config-info');
    if (proxyInfo) {
      const h4 = proxyInfo.querySelector('h4');
      if (h4) h4.textContent = this.t('config.proxy.advantages');
      const ul = proxyInfo.querySelector('ul');
      if (ul) {
        const benefits = this.t('config.proxy.benefits');
        ul.innerHTML = benefits.map(b => '<li>' + b + '</li>').join('');
      }
    }

    // GitHub
    const githubInfo = document.querySelector('#github .config-info');
    if (githubInfo) {
      const h4 = githubInfo.querySelector('h4');
      if (h4) h4.textContent = this.t('config.github.steps');
      const ol = githubInfo.querySelector('ol');
      if (ol) {
        const instructions = this.t('config.github.instructions');
        ol.innerHTML = instructions.map(i => '<li>' + i + '</li>').join('');
      }
    }

    // Gitee
    const giteeInfo = document.querySelector('#gitee .config-info');
    if (giteeInfo) {
      const h4 = giteeInfo.querySelector('h4');
      if (h4) h4.textContent = this.t('config.gitee.steps');
      const ol = giteeInfo.querySelector('ol');
      if (ol) {
        const instructions = this.t('config.gitee.instructions');
        ol.innerHTML = instructions.map(i => '<li>' + i + '</li>').join('');
      }
    }
  },

  updateStructureInfo() {
    const structureInfo = document.querySelector('.structure-info');
    if (structureInfo) {
      const h4 = structureInfo.querySelector('h4');
      if (h4) h4.textContent = this.t('structure.features');
      const ul = structureInfo.querySelector('ul');
      if (ul) {
        const benefits = this.t('structure.benefits');
        ul.innerHTML = benefits.map(b => '<li>' + b + '</li>').join('');
      }
    }
  },

  updateFooter() {
    const footerDesc = document.querySelector('.footer-desc');
    if (footerDesc) footerDesc.textContent = this.t('footer.desc');
    const footerLicense = document.querySelector('.footer-license');
    if (footerLicense) footerLicense.textContent = this.t('footer.license');
  },

  updateOtherText() {
    // 区域标题和副标题
    const sectionTitles = document.querySelectorAll('.section-title');
    const sectionSubtitles = document.querySelectorAll('.section-subtitle');

    if (sectionTitles[0]) sectionTitles[0].textContent = this.t('features.title');
    if (sectionSubtitles[0]) sectionSubtitles[0].textContent = this.t('features.subtitle');

    if (sectionTitles[1]) sectionTitles[1].textContent = this.t('quickstart.title');
    if (sectionSubtitles[1]) sectionSubtitles[1].textContent = this.t('quickstart.subtitle');

    if (sectionTitles[2]) sectionTitles[2].textContent = this.t('config.title');
    if (sectionSubtitles[2]) sectionSubtitles[2].textContent = this.t('config.subtitle');

    if (sectionTitles[3]) sectionTitles[3].textContent = this.t('structure.title');
    if (sectionSubtitles[3]) sectionSubtitles[3].textContent = this.t('structure.subtitle');

    // 下载区域
    const downloadTitle = document.querySelector('.download-title');
    if (downloadTitle) {
      const versionSpan = downloadTitle.querySelector('span');
      downloadTitle.innerHTML = this.t('quickstart.downloadTitle') + ' ' + (versionSpan ? versionSpan.outerHTML : '');
    }

    const downloadNote = document.querySelector('.download-note');
    if (downloadNote) {
      const versionLink = downloadNote.querySelector('.version-link');
      downloadNote.innerHTML = this.t('quickstart.currentVersion') + '：<span id="current-version"></span> | ' +
        this.t('quickstart.releaseDate') + '：<span id="release-date"></span><br>' +
        (versionLink ? versionLink.outerHTML : '');
      // 重新填充版本信息
      if (typeof VERSION !== 'undefined') {
        const cv = document.getElementById('current-version');
        const rd = document.getElementById('release-date');
        if (cv) cv.textContent = VERSION.latest;
        if (rd) rd.textContent = VERSION.date;
      }
    }

    const versionHistoryTitle = document.querySelector('.version-history .download-title');
    if (versionHistoryTitle) versionHistoryTitle.textContent = this.t('quickstart.moreOptions');

    // Hero 区域
    const heroSubtitle = document.querySelector('.hero-desc');
    if (heroSubtitle) heroSubtitle.textContent = this.t('hero.descriptionShort');

    const scrollIndicator = document.querySelector('.scroll-indicator span');
    if (scrollIndicator) scrollIndicator.textContent = this.t('hero.scroll');

    // 复制按钮
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.setAttribute('title', this.t('quickstart.copy'));
    });

    // 更新动态生成的下载按钮
    this.updateDownloadButtons();
  },

  updateDownloadButtons() {
    // 更新主下载区域的下载按钮
    document.querySelectorAll('.download-card .download-btn').forEach(btn => {
      btn.textContent = this.t('quickstart.download');
    });

    // 更新更多下载选项的下载链接
    document.querySelectorAll('.version-item .version-link').forEach(link => {
      link.textContent = this.t('quickstart.download');
    });

    // 更新历史版本链接
    const versionLink = document.querySelector('.download-note .version-link');
    if (versionLink) {
      versionLink.textContent = this.t('quickstart.viewHistory');
    }

    // 更新历史页面的下载按钮
    document.querySelectorAll('.download-item-btn').forEach(btn => {
      btn.textContent = this.t('history.download');
    });

    // 更新历史页面的"最新版本"标签
    document.querySelectorAll('.version-badge').forEach(badge => {
      badge.textContent = this.t('history.latest');
    });

    // 更新历史页面的"更新内容"标题
    document.querySelectorAll('.changelog h4').forEach(h4 => {
      h4.textContent = this.t('history.changelog');
    });
  },

  updateSwitcher() {
    const btn = document.querySelector('.lang-current');
    if (btn) {
      btn.textContent = this.currentLang === 'zh' ? '中' : 'EN';
    }

    document.querySelectorAll('.lang-dropdown a').forEach(link => {
      link.classList.remove('active');
      const lang = link.getAttribute('data-lang');
      if (lang === this.currentLang) {
        link.classList.add('active');
      }
    });
  },

  bindEvents() {
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');

    if (!langBtn || !langDropdown) return;

    // Toggle dropdown
    langBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    // Language selection
    langDropdown.querySelectorAll('a[data-lang]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const lang = this.getAttribute('data-lang');
        i18n.setLang(lang);
        langDropdown.classList.remove('show');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function() {
      langDropdown.classList.remove('show');
    });
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    i18n.init();
  });
} else {
  i18n.init();
}
