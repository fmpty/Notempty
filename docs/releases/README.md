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
| v1.0.4 | 2026-07-01 | 增加了本地用户登录，避免没有网络的情况下单机使用 |
| v1.0.3 | 2026-06-09 | 修复文件监听内存泄漏问题，提升长时间运行稳定性 |
| v1.0.2 | 2026-05-01 | 优化目录扫描性能，增加配置文件热重载功能 |
| v1.0.1 | 2026-04-14 | 新增系统服务部署支持，优化多平台兼容性 |
| v1.0.0 | 2026-04-13 | 初始版本发布 |
