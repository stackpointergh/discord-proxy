const axios = require('axios');

module.exports = async (req, res) => {
  // Твой реальный вебхук Дискорда
  const discordWebhookUrl = "https://discord.com/api/webhooks/1510843202352189511/kA7c2gEYX-hWC3arGR2L5fjiIoXiMqzoi8Ewyg-ZHb7Fn5rMdv16h2tMj3NaZYBy7fLg";
  const imageUrl = "https://img.championat.com/s/732x488/news/big/e/q/strimer-buster-stal-gostem-novogo-vypuska-shou-sessiya_17110287991808551485.jpg";

  try {
    // Отправляем первое сообщение (Текст + Бустер)
    await axios.post(discordWebhookUrl, {
      content: "ВАШ ГОСПОДИН ВЕРНУЛСЯ\n" + imageUrl
    });

    // Небольшая пауза, чтобы Дискорд не ругался
    await new Promise(resolve => setTimeout(resolve, 500));

    // Отправляем второе сообщение
    await axios.post(discordWebhookUrl, {
      content: "НА КОЛЕНИ РАБЫ!"
    });

    res.status(200).send("Пакет успешно доставлен в Discord!");
  } catch (error) {
    res.status(500).send("Ошибка прокси: " + error.message);
  }
};
