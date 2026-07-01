// 版本配置文件 - 发布新版本时只需修改这里
const VERSION = {
  latest: "v1.0.4",
  date: "2026-07-01",
  changelog: "增加了本地用户登录，避免没有网络的情况下单机使用",
  files: {
    windows: [
      { name: "Windows x64", file: "Notempty-v1.0.4-windows-amd64.exe", arch: "amd64" },
      { name: "Windows 32位", file: "Notempty-v1.0.4-windows-386.exe", arch: "386" }
    ],
    linux: [
      { name: "Linux x64", file: "Notempty-v1.0.4-linux-amd64", arch: "amd64" },
      { name: "Linux ARM64", file: "Notempty-v1.0.4-linux-arm64", arch: "arm64" }
    ],
    macos: [
      { name: "macOS Intel", file: "Notempty-v1.0.4-darwin-amd64", arch: "amd64" },
      { name: "macOS Apple Silicon", file: "Notempty-v1.0.4-darwin-arm64", arch: "arm64" }
    ]
  }
};

// 历史版本列表 - 添加新版本时在这里追加
const VERSIONS_HISTORY = [
  {
    version: "v1.0.4",
    date: "2026-07-01",
    changelog: "增加了本地用户登录，避免没有网络的情况下单机使用",
    files: {
      windows: [
        { name: "Windows x64", file: "Notempty-v1.0.4-windows-amd64.exe", arch: "amd64" },
        { name: "Windows 32位", file: "Notempty-v1.0.4-windows-386.exe", arch: "386" }
      ],
      linux: [
        { name: "Linux x64", file: "Notempty-v1.0.4-linux-amd64", arch: "amd64" },
        { name: "Linux ARM64", file: "Notempty-v1.0.4-linux-arm64", arch: "arm64" }
      ],
      macos: [
        { name: "macOS Intel", file: "Notempty-v1.0.4-darwin-amd64", arch: "amd64" },
        { name: "macOS Apple Silicon", file: "Notempty-v1.0.4-darwin-arm64", arch: "arm64" }
      ]
    }
  },
  {
    version: "v1.0.3",
    date: "2026-06-09",
    changelog: "修复文件监听内存泄漏问题，提升长时间运行稳定性",
    files: {
      windows: [
        { name: "Windows x64", file: "Notempty-v1.0.3-windows-amd64.exe", arch: "amd64" },
        { name: "Windows 32位", file: "Notempty-v1.0.3-windows-386.exe", arch: "386" }
      ],
      linux: [
        { name: "Linux x64", file: "Notempty-v1.0.3-linux-amd64", arch: "amd64" },
        { name: "Linux ARM64", file: "Notempty-v1.0.3-linux-arm64", arch: "arm64" }
      ],
      macos: [
        { name: "macOS Intel", file: "Notempty-v1.0.3-darwin-amd64", arch: "amd64" },
        { name: "macOS Apple Silicon", file: "Notempty-v1.0.3-darwin-arm64", arch: "arm64" }
      ]
    }
  },
  {
    version: "v1.0.2",
    date: "2026-05-01",
    changelog: "优化目录扫描性能，增加配置文件热重载功能",
    files: {
      windows: [
        { name: "Windows x64", file: "Notempty-v1.0.2-windows-amd64.exe", arch: "amd64" },
        { name: "Windows 32位", file: "Notempty-v1.0.2-windows-386.exe", arch: "386" }
      ],
      linux: [
        { name: "Linux x64", file: "Notempty-v1.0.2-linux-amd64", arch: "amd64" },
        { name: "Linux ARM64", file: "Notempty-v1.0.2-linux-arm64", arch: "arm64" }
      ],
      macos: [
        { name: "macOS Intel", file: "Notempty-v1.0.2-darwin-amd64", arch: "amd64" },
        { name: "macOS Apple Silicon", file: "Notempty-v1.0.2-darwin-arm64", arch: "arm64" }
      ]
    }
  },
  {
    version: "v1.0.1",
    date: "2026-04-14",
    changelog: "新增系统服务部署支持，优化多平台兼容性",
    files: {
      windows: [
        { name: "Windows x64", file: "Notempty-v1.0.1-windows-amd64.exe", arch: "amd64" },
        { name: "Windows 32位", file: "Notempty-v1.0.1-windows-386.exe", arch: "386" }
      ],
      linux: [
        { name: "Linux x64", file: "Notempty-v1.0.1-linux-amd64", arch: "amd64" },
        { name: "Linux ARM64", file: "Notempty-v1.0.1-linux-arm64", arch: "arm64" }
      ],
      macos: [
        { name: "macOS Intel", file: "Notempty-v1.0.1-darwin-amd64", arch: "amd64" },
        { name: "macOS Apple Silicon", file: "Notempty-v1.0.1-darwin-arm64", arch: "arm64" }
      ]
    }
  },
  {
    version: "v1.0.0",
    date: "2026-04-13",
    changelog: "初始版本发布",
    files: {
      windows: [
        { name: "Windows x64", file: "Notempty-v1.0.0-windows-amd64.exe", arch: "amd64" },
        { name: "Windows 32位", file: "Notempty-v1.0.0-windows-386.exe", arch: "386" }
      ],
      linux: [
        { name: "Linux x64", file: "Notempty-v1.0.0-linux-amd64", arch: "amd64" },
        { name: "Linux ARM64", file: "Notempty-v1.0.0-linux-arm64", arch: "arm64" }
      ],
      macos: [
        { name: "macOS Intel", file: "Notempty-v1.0.0-darwin-amd64", arch: "amd64" }, 
        { name: "macOS Apple Silicon", file: "Notempty-v1.0.0-darwin-arm64", arch: "arm64" }
      ]
    }
  }
];