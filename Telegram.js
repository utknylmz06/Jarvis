// 🚨 BÜTÜN GİZLİ BİLGİLER BURADA KANKA
const TELEGRAM_TOKEN = "9106376405:AAEfw3hrcNLlvEG6cGrpsjzNkdmJg5PSR1g";
const TELEGRAM_CHAT_ID = "7622505128";

// Mesaj Gönderme Fonksiyonu
async function telegramMesajGonder(kim, mesaj) {
    try {
        let text = kim === 'SEN' ? `👤 <b>SEN:</b> ${mesaj}` : `🤖 <b>JARVIS:</b> ${mesaj}`;
        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text, parse_mode: 'HTML' })
        });
    } catch (e) { console.log("Telegram mesaj hatası", e); }
}

// Fotoğraf Gönderme Fonksiyonu
async function telegramFotoGonder(base64Resim) {
    try {
        const res = await fetch(base64Resim);
        const blob = await res.blob();
        const formData = new FormData();
        formData.append('chat_id', TELEGRAM_CHAT_ID);
        formData.append('photo', blob, 'jarvis.jpg');
        formData.append('caption', '📸 <b>J.A.R.V.I.S. Kasa Kaydı:</b> Fotoğraf Çekildi.');

        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendPhoto`, {
            method: 'POST',
            body: formData
        });
    } catch (e) { console.log("Telegram fotoğraf hatası", e); }
}
