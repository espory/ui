import { defineConfig } from 'dumi';
const repo = '/ui/';

// 此处更换为自己的仓库名
let base = repo;
let publicPath = repo;

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
    base = undefined;
    publicPath = undefined;
  }
  

export default defineConfig({
  title: 'Espory UI', // 站点名称
  mode: 'site',
  outputPath: 'doc-site', // 输出文件夹
  base,
  publicPath,
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
});