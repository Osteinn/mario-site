# Mario Characters Site

Сайт с персонажами Mario, созданный на React и TailwindCSS с анимациями.

## Установка зависимостей

```bash
npm install
```

## Запуск проекта

```bash
npm run dev
```

## Добавление изображений персонажей

Необходимо добавить следующие изображения в папку `src/assets/characters/`:

1. `mario.png` - Марио
2. `luigi.png` - Луиджи
3. `peach.png` - Принцесса Пич
4. `bowser.png` - Боузер
5. `yoshi.png` - Йоши
6. `toad.png` - Тоад
7. `donkeykong.png` - Донки Конг
8. `wario.png` - Варио
9. `koopa.png` - Купа Трупа
10. `boo.png` - Бу

Все изображения должны быть в формате PNG для лучшего качества отображения.

## Структура проекта

```
mario-site/
├── public/
├── src/
│   ├── assets/
│   │   └── characters/      ← изображения персонажей
│   ├── App.jsx              ← основной компонент
│   ├── main.jsx             ← точка входа
│   └── index.css            ← стили Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Возможности

- Адаптивная сетка персонажей
- Анимации при наведении
- Анимированное появление заголовка
- Responsive дизайн

## Технологии

- React 18
- TailwindCSS
- Framer Motion (анимации)
- Vite (сборщик)
