<div align="center">

# 🧸 Toys Paradise

### Unleash Your Inner Child — a full-stack toy marketplace for collectors and tiny drivers alike.

[![Live Site](https://img.shields.io/badge/🔗%20Live%20Site-toys--paradise.web.app-7C3AED?style=for-the-badge&labelColor=1E293B)](https://toys-paradise.web.app/)
[![API Server](https://img.shields.io/badge/⚙️%20API%20Server-toys--paradise--server.vercel.app-7C3AED?style=for-the-badge&labelColor=1E293B)](https://toys-paradise-server.vercel.app/)

---

**Technologies**

![React](https://img.shields.io/badge/React%2018-61DAFB?logo=react&logoColor=black&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite%204-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase%20Auth-FFCA28?logo=firebase&logoColor=black&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%203-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)
![daisyUI](https://img.shields.io/badge/daisyUI%202-5A0EF8?logo=daisyui&logoColor=white&style=for-the-badge)
![React Router](https://img.shields.io/badge/React%20Router%206-CA4245?logo=reactrouter&logoColor=white&style=for-the-badge)

</div>

---

## ✨ Overview

**Toys Paradise** is a responsive e-commerce-style marketplace for premium toy cars. Visitors can browse the whole collection, search live as they type, and explore toys by category. Registered sellers can list new toys, update prices and stock, and manage their own inventory.

> The frontend is deployed on **Firebase Hosting** and talks to a separate **Express + MongoDB** REST API ([repo](../toys-paradise-server)).

---

## 🚀 Features

| | Feature | Details |
|---|---|---|
| 🔍 | **Live search** | Results update as you type, with debouncing and regex-safe escaping |
| 🏷️ | **Category tabs** | Filter the grid by SUV, Classic, or Sports |
| ⭐ | **Top Rated** | Featured section surfaces the highest-rated toys |
| 🛂 | **Authentication** | Email/password **and** Google sign-in via Firebase |
| ➕ | **Add Toys** | Sellers can publish new toys with full details |
| ✏️ | **Update / Delete** | Edit price, quantity & description, or remove toys with confirmation |
| 🔁 | **Sorting** | My Toys sorts by price — ascending or descending |
| 📱 | **Fully responsive** | Mobile menu, masonry-style cards, and fluid grids |
| 🖼️ | **Interactive UI** | AOS animations, testimonial sliders, FAQ accordions, SweetAlert2 toasts |

---

## 🧰 Tech Stack

**Client**

- [React 18](https://react.dev) + [Vite 4](https://vitejs.dev)
- [React Router v6](https://reactrouter.com) — client-side routing & route guards
- [Firebase v9](https://firebase.google.com) — authentication
- [Tailwind CSS](https://tailwindcss.com) + [daisyUI](https://daisyui.com) — styling & components
- `react-slick` / `react-rating` / `AOS` / `SweetAlert2` / `react-icons`

**Server** (see [`../toys-paradise-server`](../toys-paradise-server))

- Node.js + [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com) (Node driver, Atlas cluster)

---

## 🛠️ Getting Started

### Prerequisites

- Node.js **16+** and npm
- A [Firebase](https://console.firebase.google.com) project with **Email/Password** and **Google** sign-in enabled
- (Optional) The API server running locally — see the [server README](../toys-paradise-server/README.md)

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd toys-paradise-client

# 2. Install dependencies
npm install

# 3. Configure environment variables (see below)
cp .env.local.example .env.local   # or create .env.local manually

# 4. Start the dev server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env.local` file at the project root:

```env
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your-project.firebaseapp.com
VITE_PROJECTID=your-project-id
VITE_STORAGEBUCKET=your-project.firebasestorage.app
VITE_MESSAGINGSENDERID=your_messaging_sender_id
VITE_APPID=your_firebase_app_id
```

> All values come from **Firebase Console → Project Settings → Your apps → SDK setup and configuration**.

> To point the app at a local backend instead of the deployed API, replace `https://toys-paradise-server.vercel.app` in the fetch calls with `http://localhost:5000`.

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |

---

## 🗂️ Project Structure

```
toys-paradise-client/
├── public/                 # static assets
├── src/
│   ├── assets/             # images & icons
│   ├── Firebase/           # firebase.config.js
│   ├── Hooks/              # useTitle
│   ├── Layout/             # Main layout (navbar + footer + outlet)
│   ├── Pages/
│   │   ├── Home/           # banner, featured, categories, gallery, FAQ…
│   │   ├── AllToys/        # live-searchable toy grid
│   │   ├── AddToys/        # add-a-toy form
│   │   ├── MyToys/         # inventory, sort, update, delete
│   │   ├── ToyDetails/     # single toy view (protected)
│   │   ├── Login/ Register/ Blog/ Error/
│   │   └── Shared/         # navbar, footer, product card, social login
│   ├── Provider/           # AuthProvider (Firebase auth context)
│   ├── Routes/             # router + private routes
│   ├── App.jsx
│   └── main.jsx
├── .env.local              # environment variables (git-ignored)
├── firebase.json           # Firebase hosting config
└── tailwind.config.js
```

---

## 🔌 API

This app consumes the following REST endpoints hosted at `https://toys-paradise-server.vercel.app`:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/allToys` | Fetch all toys |
| `GET` | `/toySearch/:text` | Case-insensitive search by toy name |
| `GET` | `/toy/:id` | Fetch a single toy |
| `GET` | `/myToys?email=…&sort=…` | Fetch toys by seller, sorted by price |
| `POST` | `/allToys` | Add a new toy |
| `PATCH` | `/myToys/:id` | Update price, quantity & description |
| `DELETE` | `/allToys/:id` | Delete a toy |

---

## ☁️ Deployment

```bash
npm run build            # generate dist/
firebase login
firebase use toys-paradise
firebase deploy          # deploy to Firebase Hosting
```

The `firebase.json` rewrite rule serves `index.html` for all routes so client-side routing works on every path.

---

## 📄 License

Distributed under the **ISC License**. See `LICENSE` for more information.

<div align="center">

---

Made with ❤️ for little adventurers. [Back to top](#top)

</div>