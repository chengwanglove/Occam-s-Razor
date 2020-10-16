#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


# 生成静态文件
npm run docs:build

git add .
git commit -m 'deploy'
git push

echo '主仓库已更新------\n\n'
# 进入生成的文件夹
cd docs/.vuepress/dist
# 如果是发布到自定义域名

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:chengwanglove/Occam-s-Razor.github.io.git master
echo '子仓库更新-------\n\n'

cd -
