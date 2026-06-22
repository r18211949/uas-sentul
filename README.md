# UAS Sentul - Halaman Wikipedia Ular

## Arsitektur
GitHub → GitHub Actions → VPS (Docker) → Nginx (HTTPS) → User

## Komponen
- Aplikasi: Node.js + Express + EJS
- Web Server: Nginx (Reverse Proxy)
- SSL: Let's Encrypt (Certbot)
- Container: Docker + Docker Compose
- CI/CD: GitHub Actions
- Monitoring: Uptime Kuma (monitor.roesdi.my.id)
- Backup: Cron job harian ke /home/m1821/backups/

## Runbook
### Restart Aplikasi
\`\`\`bash
cd /home/m1821/my-app && docker compose restart
\`\`\`

### Rollback (Kembali ke versi sebelumnya)
\`\`\`bash
git revert <commit-hash> && git push
\`\`\`

### Cek Log Aplikasi
\`\`\`bash
docker logs my-app-app-1
\`\`\`

### Restore Backup
\`\`\`bash
tar -xzf /home/m1821/backups/app-YYYYMMDD.tar.gz -C /tmp/
\`\`\`

## Monitoring
- Uptime Kuma: https://monitor.roesdi.my.id
- Health Check: https://roesdi.my.id/health

## Catatan
- Port aplikasi (internal/host): 3000 -> 8081
- Port monitoring: 3002
