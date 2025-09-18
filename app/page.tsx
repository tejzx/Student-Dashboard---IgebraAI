"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiSearch, HiSun, HiMoon, HiArrowUp } from "react-icons/hi";

import ClusterPie from "@/components/ClusterPie";
import SkillBar from "@/components/SkillBar";
import AttentionScatter from "@/components/AttentionScatter";
import RadarProfile from "@/components/RadarProfile";
import StudentTable from "@/components/StudentTable";

const sections = [
  { id: "clusters", label: "Student Clusters" },
  { id: "skills", label: "Skills Overview" },
  { id: "attention", label: "Attention Metrics" },
  { id: "radar", label: "Radar Profile" },
  { id: "students", label: "Student List" },
  { id: "insights", label: "Insights" },
];

// Mock student data
const mockData = {
  insights: [
    "Top student performance improved by 15% this month.",
    "Student engagement peaks on Wednesdays and Fridays.",
    "New skills acquisition shows positive trend in ML courses.",
  ],
  clusterData: [
    { name: "Cluster A", value: 40 },
    { name: "Cluster B", value: 25 },
    { name: "Cluster C", value: 35 },
  ],
  skills: [
    { skill: "Python", level: 90 },
    { skill: "Machine Learning", level: 75 },
    { skill: "React.js", level: 60 },
    { skill: "Data Visualization", level: 80 },
  ],
  attention: [
    { x: 1, y: 10 },
    { x: 2, y: 25 },
    { x: 3, y: 15 },
    { x: 4, y: 30 },
  ],
  radar: [
    { subject: "Math", score: 85 },
    { subject: "Science", score: 78 },
    { subject: "English", score: 92 },
    { subject: "ML Concepts", score: 80 },
    { subject: "Web Dev", score: 70 },
  ],
  students: [
    { id: 1, name: "Alice Johnson", grade: "A", skills: { Python: 95, ML: 85, React: 70 } },
    { id: 2, name: "Bob Smith", grade: "B", skills: { Python: 75, ML: 60, React: 65 } },
    { id: 3, name: "Charlie Lee", grade: "A", skills: { Python: 90, ML: 80, React: 75 } },
    { id: 4, name: "Dana White", grade: "C", skills: { Python: 60, ML: 50, React: 55 } },
    { id: 5, name: "Ethan Brown", grade: "B", skills: { Python: 80, ML: 70, React: 60 } },
    { id: 6, name: "Fiona Green", grade: "A", skills: { Python: 92, ML: 85, React: 78 } },
    { id: 7, name: "George Clark", grade: "C", skills: { Python: 55, ML: 50, React: 45 } },
    { id: 8, name: "Hannah Adams", grade: "B", skills: { Python: 78, ML: 70, React: 65 } },
    { id: 9, name: "Ian Thompson", grade: "A", skills: { Python: 95, ML: 88, React: 80 } },
    { id: 10, name: "Julia Roberts", grade: "B", skills: { Python: 80, ML: 72, React: 70 } },
  ],
};

// Convert grade to numeric for averaging
const gradeMap: Record<string, number> = { A: 4, B: 3, C: 2, D: 1, F: 0 };

// Animated blob background
const blobVariants = {
  animate: {
    scale: [1, 1.3, 1],
    rotate: [0, 15, -15, 0],
    borderRadius: ["30% 50% 40% 50%", "50% 40% 50% 30%", "30% 50% 40% 50%"],
    transition: { duration: 12, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
  },
};

// Section animation
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }),
};

// Glowing animation for charts
const glowAnimation = {
  animate: {
    boxShadow: ["0 0 10px rgba(255,255,255,0.3)", "0 0 20px rgba(255,255,255,0.6)", "0 0 10px rgba(255,255,255,0.3)"],
    transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
  },
};

export default function Home() {
  const [data, setData] = useState<typeof mockData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("clusters");
  const [searchQuery, setSearchQuery] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);

  // Simulate real-time updates
  useEffect(() => {
    setData(mockData);
    const interval = setInterval(() => {
      setData((prev) => {
        if (!prev) return prev;
        // Randomly change cluster values & attention
        const newClusters = prev.clusterData.map((c) => ({
          ...c,
          value: Math.max(5, Math.min(100, c.value + Math.floor(Math.random() * 7 - 3))),
        }));
        const newAttention = prev.attention.map((a) => ({
          ...a,
          y: Math.max(5, Math.min(50, a.y + Math.floor(Math.random() * 5 - 2))),
        }));
        // Randomly change student skills slightly
        const newStudents = prev.students.map((s) => {
          const newSkills: Record<string, number> = {};
          Object.entries(s.skills).forEach(([k, v]) => (newSkills[k] = Math.max(0, Math.min(100, v + Math.floor(Math.random() * 5 - 2)))));
          return { ...s, skills: newSkills };
        });
        return { ...prev, clusterData: newClusters, attention: newAttention, students: newStudents };
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const filteredStudents =
    data?.students.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase())) || [];

  const bgClass = darkMode
    ? "bg-gray-900 text-gray-100"
    : "bg-gradient-to-br from-indigo-100 to-purple-100 text-gray-900";
  const sectionBg = darkMode ? "bg-gray-800" : "bg-white";

  // Compute KPI metrics
  const totalStudents = data?.students.length || 0;
  const avgGrade = data ? (data.students.reduce((acc, s) => acc + gradeMap[s.grade], 0) / totalStudents).toFixed(2) : 0;
  const avgPython = data ? Math.round(data.students.reduce((acc, s) => acc + s.skills.Python, 0) / totalStudents) : 0;
  const avgML = data ? Math.round(data.students.reduce((acc, s) => acc + s.skills.ML, 0) / totalStudents) : 0;
  const avgReact = data ? Math.round(data.students.reduce((acc, s) => acc + s.skills.React, 0) / totalStudents) : 0;

  // Landing page
  if (!showDashboard) {
    return (
      <div className={`${bgClass} flex items-center justify-center min-h-screen flex-col p-6 overflow-hidden relative`}>
        <motion.div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-40" variants={blobVariants} animate="animate" />
        <motion.div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 opacity-40" variants={blobVariants} animate="animate" />
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 text-center z-10" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to Student Dashboard
        </motion.h1>
        <motion.p className={`text-xl md:text-2xl mb-10 text-center z-10 ${darkMode ? "text-indigo-200" : "text-indigo-700"}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          Track student performance, skills & insights in real-time
        </motion.p>
        <motion.button
          onClick={() => setShowDashboard(true)}
          className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-110 animate-bounce transition-transform z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Enter Dashboard
        </motion.button>
      </div>
    );
  }

  return (
    <div className={`flex min-h-screen ${bgClass}`}>
      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || window.innerWidth >= 768) && (
          <motion.aside initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} className={`fixed md:relative z-40 w-64 p-6 h-screen flex-shrink-0 ${darkMode ? "bg-gradient-to-b from-indigo-700 to-purple-600 text-white" : "bg-gradient-to-b from-indigo-300 to-purple-300 text-gray-900"}`}>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <button onClick={() => setSidebarOpen(false)} className="md:hidden">
                <HiX size={24} />
              </button>
            </div>
            <nav className="space-y-3">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleLinkClick(sec.id)}
                  className={`block w-full text-left py-2 px-3 rounded transition-all font-medium ${
                    activeSection === sec.id
                      ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-white scale-105 shadow-lg"
                      : "hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-400 hover:text-white"
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </nav>
            <button onClick={() => setDarkMode(!darkMode)} className="mt-6 flex items-center gap-2 p-2 rounded bg-gray-200 text-gray-900 hover:scale-105 transition-transform">
              {darkMode ? <HiSun /> : <HiMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="flex-1 p-6 space-y-12 md:ml-64 transition-colors duration-500 relative">
        {/* KPI Metrics with glow */}
        <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {[
            { label: "Total Students", value: totalStudents },
            { label: "Avg Grade", value: avgGrade },
            { label: "Avg Python", value: avgPython + "%" },
            { label: "Avg ML", value: avgML + "%" },
            { label: "Avg React", value: avgReact + "%" },
          ].map((kpi, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-lg shadow-lg bg-indigo-500 text-white"
              variants={glowAnimation}
              animate="animate"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="font-semibold">{kpi.label}</h2>
              <p className="text-2xl font-bold">{kpi.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard sections */}
        {sections.map((sec, i) => {
          let content: JSX.Element;
          switch (sec.id) {
            case "clusters":
              content = <ClusterPie data={data.clusterData} glowing />;
              break;
            case "skills":
              content = <SkillBar data={data.skills} glowing />;
              break;
            case "attention":
              content = <AttentionScatter data={data.attention} glowing />;
              break;
            case "radar":
              content = <RadarProfile data={data.radar} glowing />;
              break;
            case "students":
              content = <StudentTable data={filteredStudents} onStudentClick={(s) => setSelectedStudent(s)} />;
              break;
            case "insights":
              content = (
                <ul className="list-disc pl-6 space-y-2">
                  {data.insights.map((ins, j) => (
                    <motion.li key={j} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: j * 0.2 }}>
                      {ins}
                    </motion.li>
                  ))}
                </ul>
              );
              break;
            default:
              content = <></>;
          }
          return (
            <motion.section key={sec.id} id={sec.id} className={`${sectionBg} p-6 rounded shadow-lg hover:shadow-2xl transition-all cursor-pointer`} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={sectionVariants}>
              <motion.h2 className={`text-xl font-semibold mb-4 ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>{sec.label}</motion.h2>
              {content}
            </motion.section>
          );
        })}

        {/* Scroll to top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button onClick={scrollToTop} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3 }} className="fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-50 animate-bounce">
              <HiArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Student Progress Modal */}
        <AnimatePresence>
          {selectedStudent && (
            <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className={`bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md w-full relative`} initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
                <button onClick={() => setSelectedStudent(null)} className="absolute top-4 right-4 text-gray-700 dark:text-gray-200">
                  <HiX size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-4">{selectedStudent.name} - Grade {selectedStudent.grade}</h2>
                <div className="space-y-3">
                  {Object.entries(selectedStudent.skills).map(([skill, level]: any) => (
                    <div key={skill}>
                      <h3 className="font-medium">{skill}</h3>
                      <div className="w-full h-4 bg-gray-300 rounded">
                        <motion.div className="h-4 bg-indigo-500 rounded" initial={{ width: 0 }} animate={{ width: `${level}%` }} transition={{ duration: 0.8 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}