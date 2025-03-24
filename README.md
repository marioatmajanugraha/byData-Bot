# byData Auto Completed All Task Bot 🎯

Script ini dirancang untuk mengotomatiskan penyelesaian tugas sosial dan mitra (SOCIAL & PARTNERS)

---

## 📌 Fitur
- ✅ Auto completion untuk tugas kategori SOCIAL dan PARTNERS
- 🎁 Auto claim reward (XP Points) setelah tugas selesai
- 🔌 Dukungan proxy (`proxy.txt`) untuk koneksi aman dengan fallback ke proxy berikutnya jika gagal
- 📋 Menampilkan status tugas (completed, claimed) dan detail hasil
- ⚡ Delay 2 detik antar tugas untuk menghindari rate limit
- 🧩 Mendukung multiple wallet dari file `wallets.json`

---

## 🚀 Cara Penggunaan

1. **Clone repository ini**
```
git clone https://github.com/username/taskBot.git
cd taskBot
```

2. **Install Dependencies Pastikan Anda memiliki Node.js terinstall, lalu jalankan:**
```
npm install axios chalk cfonts http-proxy-agent socks-proxy-agent
```

3. **Siapkan file konfigurasi**
Buat file wallets.json dan isi dengan daftar wallet. Contoh:
```
[
    {"address": "0x1234..."},
    {"address": "0x5678..."}
]
```

4. **(Opsional) Buat proxy.txt jika ingin menggunakan proxy. Contoh:**
```
http://username:password@host:port
socks5://username:password@host:port
```

5. **Jalankan Script**
```
node task.js
```

6. **Ikuti Instruksi**
Jawab pertanyaan "Mau menggunakan proxy? (y/n)" di terminal

Script akan otomatis memproses semua wallet dan tugas secara berurutan

## ⚠️ Disclaimer
Gunakan script ini dengan bijak dan sesuai aturan platform yang dituju. Pengembang tidak bertanggung jawab atas penyalahgunaan atau konsekuensi seperti banned akun.

## 🤝 Kontribusi
Kami menyambut kontribusi! Jika Anda memiliki ide atau perbaikan:

## 📞 Kontak
Punya pertanyaan? Hubungi saya di:

Telegram: [@balveerxyz](https://t.me/balveerxyz)
Join komunitas: [Airdrop 888](https://t.me/airdroplocked)

## ⭐ Dukung Proyek Ini
Jika script ini membantu Anda, beri ⭐ di GitHub agar lebih banyak orang menemukannya!
