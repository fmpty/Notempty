# 软件发布包目录

此目录用于存放 Notempty 各平台的编译包。

## 目录结构

```
releases/
├── v1.0.0/                 # 版本号
│   ├── windows/            # Windows 平台
│   │   └── notempty-windows-amd64.zip
│   ├── linux/              # Linux 平台
│   │   └── notempty-linux-amd64.tar.gz
│   └── macos/              # macOS 平台
│       └── notempty-macos-amd64.zip
├── v1.1.0/
│   ├── windows/
│   ├── linux/
│   └── macos/
└── ...
```

## 命名规范

- Windows: `notempty-windows-{arch}.zip`
- Linux: `notempty-linux-{arch}.tar.gz`
- macOS: `notempty-macos-{arch}.zip`

其中 `{arch}` 可以是:
- `amd64` - x86_64 架构
- `arm64` - ARM64 架构

## 使用说明

1. 下载对应平台的压缩包
2. 解压到任意目录
3. 创建配置文件 `notes-config.json`
4. 运行程序

## 版本历史

| 版本 | 发布日期 | 说明 |
|------|----------|------|
| v1.0.0 | 2026-04-13 | 初始版本发布 |
| v1.0.1 | 2026-04-14 | 新加配置文件功能 |
