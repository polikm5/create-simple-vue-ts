import {defineConfig} from 'tsup';

export default defineConfig({
    target: 'node18', // 用于指定编译JS的目标版本
    entry: ["src/index.ts"], // 编译入口
    format: ["cjs"], // 输出代码的模块规范
    minify: true, // 是否开启文件压缩
    clean: true, // 每次打包前 先清空之前的打包文件
    platform: "node", // 指定代码的运行平台
    outDir: "dist", // 用于指定代码输出的文件夹 
})