* Git flow - push:
- Git add . (add all the changes)
- Git commit -m "Content of change"
- Git push origin master -> push code to master branch

------ For real project:
- Stand in master -> git checkout -b feat/your-branch-name ==> create new branch from master
- Git add .
- Git commit -m "Content of change"
- Git push origin feat/your-branch-name
- Create Pull request in github UI

* Git flow - clone and run source:
1. Run this command: "git clone https://github.com/Doris-896/first-repo-by-kris.git ."
2. cd first-repo-by-kris
3. yarn install (If you have not installed yarn yet, please use "npm install --global yarn")
4. yarn start

* Git flow - pull:
- Stand in master
- Git pull origin master