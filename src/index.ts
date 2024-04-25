#!/usr/bin/env/ node
import prompts  from "prompts"
import path from "node:path"
import fs from "node:fs"
const bootStrap = async () => {
    const result = await prompts([
        {
            type: 'text', // 代表展示的类型 
            name: 'projectName', // 保存结果后的key
            message: `请输入你的项目名称:` // 用于提示信息
        }
    ])

    console.log(result)
    // 需要将template整个文件夹 复制一份到 当前输入路径的位置 
    // process.cwd() 表示当前shell输入命令的路径
    const targetPath = path.resolve(process.cwd(),result.projectName)
    // 注意此时__dirname 是  C:\Users\86132\Desktop\vite\create-simple-vue-ts\dist
    // 因为最终是执行在dist下面的index.js方法
    // 所以拿源文件路径 需要回到上一步的template去拿
    const sourcePath = path.resolve(__dirname, '../template')
    console.log("targetPath",targetPath)
    console.log("sourcePath",sourcePath)

    // 需要传源文件路径  目标路径  和选项 recursive代表递归复制
    fs.cpSync(sourcePath,targetPath, {
        recursive: true
    })
    // 将原来修改的文件名 修改回去
    fs.renameSync(
        path.resolve(targetPath, '__gitignore'),
        path.resolve(targetPath,'.gitignore')
    )
}

bootStrap()