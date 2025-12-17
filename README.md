# Coffee Cart Playwright Tests

Набір автотестів на Playwright для демо-додатку https://coffee-cart.app/.

## Вимоги
- Node.js 18+ (рекомендовано LTS)
- npm (йде разом із Node.js)

## Встановлення
Перед командами перейдіть у директорію, де лежить package.json (корінь проєкту):
```bash
cd /шлях/до/coffeeCartPW1712
```
```bash
npm install
```

## Запуск тестів
- Повний прогін: `npm test`
- Перегляд HTML-звіту після прогону: `npm run report`

## Структура
- [playwright.config.ts](playwright.config.ts) — базові налаштування, проєкти браузерів, репортер, retry, trace/video.
- [tests/coffee-cart.menu.spec.ts](tests/coffee-cart.menu.spec.ts) — основний сценарій для кошика кави.
- [tests/example.spec.ts](tests/example.spec.ts) — приклад тестів із документації Playwright.

## Нотатки по конфігу
- Тести працюють у headed режимі (`headless: false`) з відео на фейлах і скріншотами лише при помилках.
- `fullyParallel: true`, `forbidOnly: true` у CI, retries у CI = 2.

## Типові проблеми
- Переконайтесь, що мережа не блокує доступ до https://coffee-cart.app/.
- Якщо звіт не відкривається автоматично, запустіть `npm run report` і відкрийте посилання з консолі.

## Ліцензія
ISC