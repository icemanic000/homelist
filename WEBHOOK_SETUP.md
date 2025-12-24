# Webhook / n8n / Telegram налаштування

## 1) Webhook для кнопки Telegram-бота та форми

- URL: `https://krapsi.xyz/webhook-test/2d39af47-e558-47b8-bcc2-368e4bc9a69c`
- Метод: `POST`
- Формат: `application/json`

Сайт уже відправляє `POST` у `VITE_N8N_WEBHOOK_URL` та показує стани `Sending...` → `Done!`.

Щоб це працювало:

1. В `n8n` створи `Webhook` node.
2. Встанови `HTTP Method = POST`.
3. Увімкни `Response` (200 OK).
4. В `Production URL`/`Test URL` використовуй саме:
   `https://krapsi.xyz/webhook-test/2d39af47-e558-47b8-bcc2-368e4bc9a69c`

Payload приклади, які сайт надсилає:

- `type: "open_bot"` (кнопка запуску бота)
- `type: "feedback"` (форма повідомлення)

## 2) Як налаштувати Telegram Webhook

У Cloudflare Pages Functions додано endpoint:

- `POST /api/telegram/set-webhook`

Він викликає Telegram API `setWebhook` з токеном із `TELEGRAM_BOT_TOKEN` (секрет з `.env`).

### Варіант A: встановити Webhook з дефолтного env

1. Переконайся, що в Cloudflare Pages (Project → Settings → Environment Variables) є:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_WEBHOOK_URL`
2. Зроби `POST` запит на:
   - `/api/telegram/set-webhook`
   з порожнім JSON `{}`.

### Варіант B: передати webhookUrl в body

`POST /api/telegram/set-webhook`

Body:

```json
{ "webhookUrl": "https://krapsi.xyz/webhook-test/2d39af47-e558-47b8-bcc2-368e4bc9a69c" }
```

## 3) Про секрети

- `.env` доданий локально для dev.
- **Не коміть** `.env` у репозиторій.
