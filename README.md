🐍 Wikipedia Ular - UAS Sentul

Website informasi ular berbasis Node.js + Express + EJS yang dijalankan menggunakan Docker, dideploy otomatis menggunakan GitHub Actions, diamankan dengan HTTPS Let's Encrypt, serta dimonitor menggunakan Uptime Kuma.

---

📋 Project Overview

Website ini dibuat untuk memenuhi tugas UAS Sistem Operasi dan Jaringan Komputer STMIK Tazkia Semester Genap 2025/2026.

Fitur yang diimplementasikan:

- Halaman informasi ular berbasis Wikipedia
- Reverse Proxy menggunakan Nginx
- SSL/TLS menggunakan Let's Encrypt
- Containerization menggunakan Docker
- CI/CD otomatis menggunakan GitHub Actions
- Monitoring menggunakan Uptime Kuma
- Backup otomatis harian menggunakan Cron

---

🏗️ Arsitektur Sistem

                    +----------------------+
                    |       Internet       |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |  DNS (roesdi.my.id)  |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |        Nginx         |
                    |   Reverse Proxy      |
                    |  SSL Let's Encrypt   |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    | Docker Container     |
                    | Node.js + Express    |
                    | Port Internal: 3000  |
                    | Host Port: 8081      |
                    +----------------------+

                               |
                               v

                    +----------------------+
                    |     Uptime Kuma      |
                    |     Port: 3002       |
                    | monitor.roesdi.my.id |
                    +----------------------+

---

🔧 Infrastruktur

Komponen| Detail
Domain| roesdi.my.id
Monitoring| monitor.roesdi.my.id
VPS IP| 103.168.146.195
Reverse Proxy| Nginx
SSL| Let's Encrypt
Backend| Node.js + Express
Template Engine| EJS
Container| Docker
CI/CD| GitHub Actions
Monitoring| Uptime Kuma
Backup| Cron Job

---

📂 Struktur Deployment

/home/m1821/
│
├── my-app/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── package.json
│   ├── app.js
│   └── views/
│
├── backups/
│   ├── app-20260622-134907.tar.gz
│   └── backup.log
│
└── backup.sh

---

🚀 Deployment Otomatis (CI/CD)

Setiap push ke branch "main" akan memicu GitHub Actions yang akan:

1. Build aplikasi
2. Push perubahan
3. Deploy ke VPS
4. Restart container secara otomatis

Workflow:

Developer
    |
git push main
    |
    v
GitHub Actions
    |
    v
Build Docker Image
    |
    v
Deploy VPS
    |
    v
Restart Container

File workflow:

.github/workflows/deploy.yml

---

▶️ Menjalankan Aplikasi

Clone Repository

git clone https://github.com/username/repository.git /home/m1821/my-app

cd /home/m1821/my-app

Build dan Jalankan

docker compose up -d --build

Verifikasi

curl http://localhost:8081

Status container:

docker ps

---

🔄 Restart Aplikasi

Jika aplikasi mengalami kendala:

cd /home/m1821/my-app

docker compose restart

Verifikasi:

docker ps

---

⏪ Rollback Versi Sebelumnya

Melihat Riwayat Commit

git log --oneline

Contoh:

a1b2c3d Fix bug navbar
d4e5f6g Update styling

Revert Commit

git revert <commit-hash> --no-edit

Contoh:

git revert a1b2c3d --no-edit

Push Perubahan

git push origin main

CI/CD akan otomatis melakukan deploy ulang.

---

💾 Backup Otomatis

Backup dijalankan setiap hari pukul 02:00 WIB.

Cron Job:

0 2 * * * /home/m1821/backup.sh

Lokasi backup:

/home/m1821/backups/

Contoh file backup:

app-20260622-134907.tar.gz

---

♻️ Restore dari Backup

Lihat Daftar Backup

ls -la /home/m1821/backups/

Ekstrak Backup

sudo tar -xzf \
/home/m1821/backups/app-YYYYMMDD-HHMMSS.tar.gz \
-C /tmp/

Salin ke Folder Project

sudo cp -r \
/tmp/home/m1821/my-app/* \
/home/m1821/my-app/

Restart Aplikasi

cd /home/m1821/my-app

docker compose restart

---

📊 Monitoring

Monitoring menggunakan Uptime Kuma.

URL Dashboard:

https://monitor.roesdi.my.id

Monitor yang digunakan:

https://roesdi.my.id

Konfigurasi:

Parameter| Nilai
Interval| 60 Detik
Tipe| HTTP Monitor
Status UP| Hijau
Status DOWN| Merah

---

📝 Logging

Log Aplikasi

Melihat log:

docker logs my-app-app-1

Log realtime:

docker logs -f my-app-app-1

Log berdasarkan waktu:

docker logs --since 2026-06-22T14:00:00 my-app-app-1

---

Log Nginx

Access Log

sudo tail -f /var/log/nginx/access.log

Error Log

sudo tail -f /var/log/nginx/error.log

---

Log Backup

cat /home/m1821/backups/backup.log

---

⚙️ Informasi Operasional

Item| Lokasi
Folder Project| /home/m1821/my-app
Backup Folder| /home/m1821/backups
Nginx Config| /etc/nginx/sites-available/roesdi.my.id
Workflow CI/CD| .github/workflows/deploy.yml
Port Aplikasi| 8081
Port Monitoring| 3002
Backup Script| /home/m1821/backup.sh

---

🛠️ Teknologi yang Digunakan

- Node.js
- Express.js
- EJS
- Docker
- Docker Compose
- Nginx
- Let's Encrypt
- GitHub Actions
- Uptime Kuma
- Cron

---

👨‍🎓 Informasi Akademik

Mata Kuliah: Sistem Operasi dan Jaringan Komputer
Program Studi: Teknik Informatika
Institusi: STMIK Tazkia
Semester: Genap 2025/2026

---

📄 Lisensi

Dokumentasi ini dibuat untuk keperluan akademik dalam rangka memenuhi tugas UAS Sistem Operasi dan Jaringan Komputer.
