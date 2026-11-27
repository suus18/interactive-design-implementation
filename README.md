# 강민지 · 브랜드 비주얼 디자이너 포트폴리오 (IEUM)

Figma Make 导出的交互作品集网站。两屏：프로필 首页 + 프로필 전체 보기 详情页，作品图可点击打开大图并左右翻页。

## 在线预览

GitHub Pages：https://suus18.github.io/interactive-design-implementation/

## 仓库结构

- `src/` — 页面源码（React 19 + Vite 8 + Tailwind v4）
- `.figma/make/site.json` — 站点标题 / 描述 / favicon / OG 配置，由 `vite.config.ts` 注入 HTML
- `scripts/make-webp.mjs` — 把设计导出里的大图转成 WebP
- `.github/workflows/deploy-pages.yml` — 构建并发布到 GitHub Pages
- `Interactive Design Implementation.zip` — Figma Make 原始导出包，图片与字体等二进制资源以它为源

## 资源说明

矢量图标与字体等二进制文件不进仓库，构建时从 zip 里取出：

- `public/assets/*.svg` 直接从 zip 拷贝
- 三张大图由 `scripts/make-webp.mjs` 转成 WebP（约 140KB/张）
- Pretendard 四个字重按站点实际用到的字形做子集（约 23KB/字重）

所以本地想完整构建时，先解压 zip 并执行上述两步资源准备，再 `npm run build`。平均线上包体积约 0.9MB。

## 本地开发

```bash
npm install
npm run dev            # 默认 8443 端口
npm run build          # 产物在 dist/
```

`FIGMA_PUBLIC_URL` 用于指定部署子路径（Pages 下为 `/interactive-design-implementation`）；妙搭托管则读 `MIAODA_CLIENT_BASE_PATH`。两者缺省时 base 为 `/`。
