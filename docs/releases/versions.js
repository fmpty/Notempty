// 版本配置文件 - 发布新版本时只需修改这里
const VERSION = {
  latest: "v1.0.1",
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
};

// 历史版本列表 - 添加新版本时在这里追加
const VERSIONS_HISTORY = [
  {
    version: "v1.0.1",
    date: "2026-04-14",
    changelog: "新增系统服务部署支持，优化多平台兼容性"
  },
  {
    version: "v1.0.0",
    date: "2026-04-13",
    changelog: "初始版本发布"
  }
  // 添加更多历史版本...
  // {
  //   version: "v0.9.0",
  //   date: "2026-04-01",
  //   changelog: "Beta 测试版本"
  // }
];
