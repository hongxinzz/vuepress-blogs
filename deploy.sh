# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
npm run build

# 进入打包好的文件夹
cd docs/.vuepress/dist

# 创建git的本地仓库，提交修改
git init
git add -A
git commit -m ':memo: 每日博客'

git config user.name hongxinzz
git config user.email 510348414@qq.com

# 覆盖式地将本地仓库发布至github，因为发布不需要保留历史记录
# 格式为：git push -f git@github.com:'用户名'/'仓库名'.git master
git remote add origin https://github.com/hongxinzz/vuepress-blogs.git
git push -f origin master

cd -
