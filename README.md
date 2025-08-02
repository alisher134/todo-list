# Todo List

Простой и понятный тудушка с возможностью добавления, удаления и отметки выполнения. Проект разработан с React, TypeScript и архитектурой ITCSS.

## Технологии

- React (v18+)
- TypeScript
- Vite
- SCSS (ITCSS)
- ESLint + Prettier

## Установка

```bash
git clone https://github.com/alisher134/todo-list.git
cd todo-list
npm install
```

## Скрипты

```bash
npm run start       # локальный запуск
npm run build       # сборка проекта
npm run lint        # линтинг кода
```

## Структура проекта
```bash
Копировать
Редактировать
src/
├── assets/         # изображения, иконки, шрифты
├── components/     # Все компоненты
│ ├── layout/       # Компоненты для общей структуры страницы
│ ├── shared/       # Универсальные UI-компоненты
├── constants/      # константы проекта
├── helpers/        # вспомогательные функции
├── hooks/          # кастомные React-хуки
├── styles/         # глобальные стили по методологии ITCSS
│ ├── settings/     # переменные
│ ├── tools/        # mixins, функции
│ ├── generic/      # normalize, reset
│ ├── elements/     # базовые HTML-элементы
│ ├── objects/      # абстрактные повторно используемые layout-структуры
│ ├── components/   # стили UI-компонентов
│ └── utilities/    # утилиты
├── App.tsx         # корневой компонент приложения
└── main.tsx        # точка входа
```

## Автор

- [@alisherr134](https://t.me/alisherr134) — Frontend разработчик  
