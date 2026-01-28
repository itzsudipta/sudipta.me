# [Sudipta.me](https://sudiptasarkar.me) — Engineering Logic, Not Just Syntax.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-emerald?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![AWS](https://img.shields.io/badge/AWS-Amplify-FF9900?style=for-the-badge&logo=amazon-aws)

An editorial-inspired digital portfolio architected with a focus on high-performance systems, computational depth, and visual clarity. This project represents the intersection of **Engineering and Intelligence**.

---

## 🏛️ Architectural Philosophy

> "I believe the best technical architectures are invisible. They empower developers to move fast while ensuring the user never has to think about the underlying complexity."

This ecosystem is designed to bridge the gap between human needs and technical constraints. Every line of code—from a PostgreSQL schema to a fine-tuned ML model—is written to serve a specific user purpose.

---

## 🛠️ The Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS (Zinc/High-Contrast Theme) |
| **Icons** | Lucide React |
| **Deployment** | AWS Amplify (CI/CD) |
| **Intelligence** | Python, PostgreSQL, Machine Learning |

---

## 🚀 Key Features

- **Editorial About Page:** A narrative-driven profile focusing on academic roots (BPCIT & NIT) and professional impact.
- **Dynamic Projects Logic:** Conditional rendering for project cards—displaying "Live Demo" and "Source" buttons only when links are provided.
- **Academic Timeline:** A clean, vertical timeline component documenting a journey through B.Tech, Diploma, and Science backgrounds.
- **Optimized Performance:** 
  - **Server-Side Rendering (SSR):** For lightning-fast initial loads and SEO.
  - **Image Optimization:** Leveraging Next.js `Image` component for assets in `/public/MyData/`.
- **Responsive Navigation:** A custom-built, fixed-logic navbar that eliminates layout shift (CLS) and supports system theme syncing.

---

## 📦 Project Structure

```bash
├── app/              # Next.js App Router (About, Projects, Experience)
├── components/       # Reusable UI components (Navbar, ProjectCard, Timeline)
├── public/           
│   └── MyData/       # Optimized assets & Sudipta.jpg
├── styles/           # Global CSS & Tailwind configuration
├── lib/              # Tailwind utility merges (cn)
└── next.config.js    # Next.js configuration (Server-side settings)
```

---

## 🛠️ Local Development

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/sudipta.me.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the engine**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## ☁️ Deployment on AWS

This portfolio is architected to run on **AWS Amplify**. 

- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Features:** Supports Next.js SSR and automatic SSL certification via Route 53.

---

## 🤝 Acknowledgment

Beyond the technical milestones, this journey is a reflection of my roots. Any impact I make through my work is a tribute to my parents, whose values are the silent logic behind every system I architect. **Honoured to be their son.**

---

## 📬 Get In Touch

- **Portfolio:** [sudiptasarkar.me](https://sudiptasarkar.me)
- **LinkedIn:** [Your Profile Link]
- **Email:** hello@sudiptasarkar.me

---

© 2024 Sudipta Sarkar. Always betting on the web.
