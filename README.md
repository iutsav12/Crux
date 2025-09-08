# 🚀 Crux — Modern URL Shortener with Analytics & Admin

Crux is a fast, privacy-friendly URL shortener. Create branded short links, protect them with passwords or expiry rules, and track device/location analytics — all with an admin dashboard for user and link management.

<p align="center">
  <img alt="Crux Banner" src="demo/Screenshot 2025-09-08 191919.png" width="800">
</p>

---

## ✨ Features

- 🔗 **Custom Short Links** — create links with your own domains.  
- 🔒 **Secure Links** — password protection & expiry rules.  
- 📊 **Analytics Dashboard** — track clicks by device, location & time.  
- 👤 **User Accounts** — manage personal and team links.  
- 🛠️ **Admin Panel** — control users, monitor links, and manage system settings.  
- ⚡ **Fast & Scalable** — built with Node.js, Express, SQL, and optional Redis caching.  
- 🐳 **Docker Support** — quick deployment with containers.  

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL / MySQL / SQLite  
- **Cache / PubSub (optional)**: Redis  
- **Auth**: JWT  
- **Deployment**: Docker, Railway, Render  
- **Other**: Nginx (reverse proxy), Tailwind (UI)

---

## ⚙️ Setup

### 1. Clone Repository
```bash
git clone https://github.com/iutsav12/Crux.git
cd Crux

2. Install Dependencies
npm install

3. Configure Environment

Create a .env file in the project root:

PORT=3000
SITE_NAME=Crux
DEFAULT_DOMAIN=localhost:3000
JWT_SECRET=your-secret-key

DB_CLIENT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=crux
DB_USER=postgres
DB_PASSWORD=
DB_SSL=false

REDIS_ENABLED=false
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=

4. Run Locally
npm run dev


App will be available at:
👉 http://localhost:3000

🐳 Deployment with Docker

Build and run container:

docker build -t crux .
docker run -p 3000:3000 --env-file .env crux

🎥 Demo Video
<p align="center"> <a href="docs/demo.mp4"> <img src="docs/demo-thumbnail.png" alt="Crux Demo Video" width="600"/> </a> </p>

👉 Watch Full Demo Video

📸 Screenshots
Dashboard	Create Link	Analytics

	
	
📡 API Overview

POST /api/auth/login — authenticate user

POST /api/links — create a new short link

GET /api/links/:id — fetch link details

DELETE /api/links/:id — delete a link

GET /api/stats/:id — get analytics for a link

(Full API docs coming soon)

🔒 Security Notes

Use strong JWT_SECRET in .env

Always enable HTTPS in production

Enable Redis for better analytics performance

Set DISALLOW_REGISTRATION=true to restrict signups

🧪 Testing

Run tests:

npm test

🗺️ Roadmap

 QR Code support

 Multi-language support

 Custom analytics reports

 Team collaboration features

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

📜 License

MIT

<p align="center"> Built with ❤️ by Utsav Kumar </p> ``