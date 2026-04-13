// 版本配置文件 - 发布新版本时只需修改这里
const VERSION = {
  latest: "v1.0.0",
  date: "2026-04-13",
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
};
