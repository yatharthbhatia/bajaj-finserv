# 🏥 Doctor Listing Application

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern Next.js application for browsing and filtering doctors with detailed profiles, appointment booking functionality, and responsive design.

## ✨ Features

- 🔍 Browse doctors with detailed profiles
- ⚙️ Filter doctors by specialty, experience, location
- 📱 Responsive design for all devices
- 🎨 Clean, modern UI with doctor cards
- 📅 Easy appointment booking interface

## 🛠 Technologies

- **Frontend**:
  - Next.js (App Router)
  - TypeScript
  - Tailwind CSS
  - React Icons

- **API Integration**:
  - RESTful API endpoints for doctor data

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yatharthbhatia/doctor-listing.git
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📂 Project Structure

```
doctor-listing/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── loading.tsx       # Loading component
│   └── page.tsx          # Main page
├── components/           # React components
│   ├── doctor-card.tsx   # Individual doctor card
│   ├── doctor-list.tsx   # Doctor listing component
│   ├── filter-panel.tsx  # Filter panel
│   ├── search-bar.tsx    # Search functionality
│   └── theme-provider.tsx # Theme management
├── lib/                  # Utility functions
│   └── utils.ts
├── public/               # Static assets
├── types/                # TypeScript types
│   └── doctor.ts
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
