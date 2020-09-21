# 确保脚本抛出遇到的错误
set -e


# 创建git的本地仓库，提交修改
git init
git add -A
git commit -m ':sparkles: 项目修改'

git config user.name hongxinzz
git config user.email 510348414@qq.com

# 覆盖式地将本地仓库发布至github，因为发布不需要保留历史记录
git remote add origin https://github.com/hongxinzz/vuepress-source.git
git push -f origin master

cd -
