# Student Dashboard - IgebraAI

A **real-time, interactive student dashboard** built with **Next.js** and **React**, designed to track student performance, skills, attention metrics, and insights. This dashboard includes animated charts, KPIs, sidebar navigation, dark/light mode, and a landing page for a professional SaaS-like experience.

---

## 🎯 Features

- Landing page with animated blobs and welcome message  
- Interactive sidebar navigation  
- Dark/light mode toggle  
- Animated charts:
  - Cluster Pie Chart
  - Skill Bars
  - Radar Profile
  - Attention Scatter Plot
- Real-time simulated updates of student data  
- Animated KPI counters for total students, average grades, and skill levels  
- Student search with progress modal  
- Scroll-to-top button  
- Fully responsive design suitable for desktop and mobile  
- Ready for deployment on **Vercel**

---

## 📸 Demo

### Landing Page

<img width="1920" height="1080" alt="Screenshot (498)" src="https://github.com/user-attachments/assets/9cf901bb-7698-4975-ab35-cdbcd7c5e080" />

### Dashboard Overview


<img width="1920" height="1080" alt="Screenshot (499)" src="https://github.com/user-attachments/assets/8ad2f65a-af53-4301-8240-c75fbf0916ee" />


---

## 🛠 Tech Stack

- **Frontend:** Next.js 13, React, TypeScript  
- **Animations:** Framer Motion  
- **Icons:** React Icons  
- **Charts:** Custom components (`ClusterPie`, `SkillBar`, `RadarProfile`, `AttentionScatter`)  
- **Deployment:** Vercel  

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/tejzx/Student-Dashboard---IgebraAI.git
cd Student-Dashboard---IgebraAI
````

2. Install dependencies:

```bash
npm install
npm install framer-motion react-icons
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment on Vercel

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) → **New Project** → Import your GitHub repo.
3. Vercel will automatically detect Next.js and deploy.
4. Access your live dashboard via the Vercel-provided URL.

---

## 📂 Project Structure

```
igebraai-students/
├─ app/
│  ├─ page.tsx
│  └─ ...
├─ components/
│  ├─ ClusterPie.tsx
│  ├─ SkillBar.tsx
│  ├─ RadarProfile.tsx
│  └─ AttentionScatter.tsx
├─ public/
│  ├─ landing-page.png
│  ├─ dashboard-overview.png
│  └─ charts-animation.gif
├─ package.json
├─ next.config.js
└─ tsconfig.json
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Tejashree Ramesh**
