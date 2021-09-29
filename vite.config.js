import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import viteCompression from "vite-plugin-compression";
import { minifyHtml } from "vite-plugin-html";
import analyze from "rollup-plugin-analyzer";
import * as path from "path";
import styleImport from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  base: `/hello/`,
  build: {
    outDir: `hello`,
    assetsDir: `legacy`,
    assetsInlineLimit: 1024, //1kb
    cssCodeSplit: true,
    // rollupOptions: {
    //   output: {
    //     entryFileNames: `entries/[name].[hash].js`,
    //     chunkFileNames: `chunks/[name].[hash].js`,
    //     assetFileNames: `assets/[name].[hash].[ext]`,
    //   },
    // },
  },
  server: {
    port: 23333,
    proxy: {
      "/proxy-api": `https://proxy.com`,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, `src`),
      "@style": path.resolve(__dirname, `src/style`),
      "@store": path.resolve(__dirname, `src/store`),
      "@router": path.resolve(__dirname, `src/router`),
      "@components": path.resolve(__dirname, `src/components`),
      "@assets": path.resolve(__dirname, `src/assets`),
      "@api": path.resolve(__dirname, `src/api`),
      "@compositions": path.resolve(__dirname, `src/compositions`),
      "@views": path.resolve(__dirname, `src/views`),
      "@utils": path.resolve(__dirname, `src/utils`),
    },
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
    styleImport({
      libs: [],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style/var.scss";`,
      },
      less: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
  },
});
