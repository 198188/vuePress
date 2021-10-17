#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'blog.tjuanrui.cn' > CNAME

git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
# gitee
# git remote add origin https://gitee.com/xiaotiejuan/vuepress.git
# git push -u origin master

#-------github------
git branch -M main
git remote add origin https://github.com/198188/vuepress.git
git push  -f origin main

echo '----部署成功-----'

cd ../../../

git add .
git commit -m 'deploy'
git branch -M main
git remote add vue https://github.com/198188/vuePress.git
git push -f vue main

cd -
