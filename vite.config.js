import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import viteCompression from "vite-plugin-compression";
import { minifyHtml } from "vite-plugin-html";
import analyze from "rollup-plugin-analyzer";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: `/@`,
        replacement: path.join(__dirname, `src`),
      },
    ],
  },
  plugins: [
    vue(),
    legacy({
      targets: [`> 0%`],
    }),
    analyze(),
    viteCompression({
      // RegExp or (file: string) => boolean 指定哪些资源不压缩 /\.(js|mjs|json|css|html)$/i
      // filter: ``,
      // 是否禁用
      //disable: false,
      //是否在控制台输出压缩结果
      //verbose: true,
      // 压缩算法： 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw'
      algorithm: `brotliCompress`,
      // 压缩后是否删除源文件
      //deleteOriginFile: false,
      // 生成的压缩包后缀
      // ext: `.gz`,
    }),
    minifyHtml({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
    }),
  ],
});
