import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """Получает ответ гостя и отправляет его в Telegram."""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    names = body.get("names", "").strip()
    salads = body.get("salads", [])
    drinks = body.get("drinks", [])

    if not names:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "Имена не указаны"}),
        }

    salads_text = ", ".join(salads) if salads else "не выбрано"
    drinks_text = ", ".join(drinks) if drinks else "не выбрано"

    message = (
        "🎊 <b>Новый ответ гостя!</b>\n\n"
        f"👥 <b>Гости:</b> {names}\n"
        f"🥗 <b>Салаты:</b> {salads_text}\n"
        f"🍾 <b>Напитки:</b> {drinks_text}"
    )

    token = os.environ["TELEGRAM_BOT_TOKEN"]
    chat_id = os.environ["TELEGRAM_CHAT_ID"]

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = urllib.parse.urlencode({
        "chat_id": chat_id,
        "text": message,
        "parse_mode": "HTML",
    }).encode()

    req = urllib.request.Request(url, data=data, method="POST")
    with urllib.request.urlopen(req) as resp:
        resp.read()

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"ok": True}),
    }
