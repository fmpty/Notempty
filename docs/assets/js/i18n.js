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
      description: '一个对新手友好的轻量级笔记工具，支持本地部署或外网部署。浏览器里写 Markdown，自动保存，支持图片上传和多用户登录。',
      download: '立即下载'
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
      description: 'A beginner-friendly lightweight note-taking tool supporting local or external deployment. Write Markdown in browser with auto-save, image upload and multi-user login.',
      download: 'Download Now'
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
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = this.t(key);
      if (value) {
        el.textContent = value;
      }
    });

    document.title = this.currentLang === 'zh'
      ? 'Notempty · 轻量级网页笔记工具'
      : 'Notempty · Lightweight Web Notes';
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
