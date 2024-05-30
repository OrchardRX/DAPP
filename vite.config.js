import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import postCssPxToRem from "postcss-pxtorem"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/dapp',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // 1rem的大小(设计稿宽度的1/10)
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    },
    preprocessorOptions: {
    less: {
        math: "always", // 括号内才使用数学计算
        globalVars: {
        // 全局变量
        mainColor: "red",
        }
      }
    }
  },
})
