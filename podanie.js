document.getElementById('app-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const WEBHOOK_PODAŃ = "https://discord.com/api/webhooks/1459665375242354778/LAkcNVlYVLF4ctUqPtLXbQWwbJcTZQMYpPwBJfVnHmrMifDeniR8zOQe4Q3g9y6w1bMh"; 

    const btn = document.getElementById('submit-btn');
    btn.innerText = "WYSYŁANIE...";
    btn.disabled = true;

    const nick_mc = document.getElementById('p_mc').value;
    const nick_dc = document.getElementById('p_dc').value;

    const baseUrl = window.location.href.replace('podanie.html', 'decyzja.html');

    const entry = (label, id, suffix = "") => {
        const el = document.getElementById(id);
        const val = el ? el.value : "BRAK DANYCH";
        return `> **${label}**\n\`\`\`\n${val}${suffix}\n\`\`\`\n`;
    };

    // PRZESYŁAMY NICK DISCORD (nick_dc) W LINKU
    const acceptAction = `[✅ ZAAKCEPTUJ](${baseUrl}?status=TAK&nick=${encodeURIComponent(nick_dc)})`;
    const rejectAction = `[❌ ODRZUĆ](${baseUrl}?status=NIE&nick=${encodeURIComponent(nick_dc)})`;

    const payload = {
        username: "SYSTEM REKRUTACJI",
        embeds: [{
            title: "NOWE ZGŁOSZENIE SYSTEMOWE",
            color: 0x2b2d31,
            description: 
                entry("NICK MINECRAFT", "p_mc") +
                entry("NICK DISCORD", "p_dc") +
                entry("IMIE", "p1") +
                entry("WIEK", "p2") +
                entry("STATUS PREMIUM", "p3") +
                entry("OPIS OSOBY", "p4") +
                entry("WADY I ZALETY", "p5") +
                entry("MOTYWACJA", "p6") +
                entry("DOSWIADCZENIE", "p7") +
                entry("DYSPOZYCYJNOSC", "p8") +
                entry("ORTOGRAFIA", "p9", "/10") +
                entry("REGULAMIN", "p10", "/10") +
                entry("SPRAWDZANIE (PUNKTY)", "p11", "/10") +
                entry("METODA SPRAWDZANIA", "p11b") +
                entry("CEL ZA 3 MIESIACE", "p12") +
                `\n**PANEL DECYZYJNY ADMINISTRACJI:**\n${acceptAction} | ${rejectAction}`,
            footer: { text: "UNIMC.PL | LOG REKRUTACYJNY" }
        }]
    };

    fetch(WEBHOOK_PODAŃ, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            btn.innerText = "WYSLANO";
            btn.style.background = "#2ecc71";
            setTimeout(() => { window.location.href = "index.html"; }, 1000);
        } else { throw new Error(); }
    })
    .catch(() => {
        btn.innerText = "BŁĄD";
        btn.style.background = "#e74c3c";
        btn.disabled = false;
    });
});