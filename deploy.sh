#!/usr/bin/env sh

# Прекращать выполнение скрипта при ошибках
set -e

# Сборка проекта
npm run build

# Переход в папку сборки
cd dist

# Инициализация Git в папке dist
git init
git add -A
git commit -m 'deploy'

# git push -f git@github.com:egorchh/egorchh.github.io.git master

# Возврат в корень проекта
cd -