import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Mail, Phone, Award } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "TESLA STOCK PRICE PREDICTION",
      tech: "Python, Machine Learning, Seaborn, GitHub",
      link: "https://github.com/RithwikYathamshetty/StatMl-Lab/blob/main/TESLA%20STOCK%20PRICE%20PREDICTION.ipynb",
      description: [
        "Developed a sophisticated predictive model using Linear Regression and Support Vector Machine (SVR) to forecast Tesla stock prices, processing 10 years of historical data.",
        "Optimized Support Vector Regression (SVR) model performance using GridSearchCV, enhancing hyperparameter tuning efficiency by 60% and reducing model training time from 4 hours to 1.5 hours.",
        "Presented comprehensive comparative analyses of predicted versus actual Tesla stock values using Seaborn and Matplotlib, resulting in stakeholders identifying three previously unseen indicators influencing market volatility.",
        "Deployed the project on GitHub, facilitating collaboration and version control for continuous model improvement."
      ]
    },
    {
      title: "AC INVENTORY MANAGEMENT SYSTEM",
      tech: "C, GitHub",
      link: "https://github.com/RithwikYathamshetty/-PSP-course-project-AC-INVENTORY-MANAGEMENT-SYSTEM",
      description: [
        "Designed and developed a robust Inventory Management System in C to manage and track over 1,000 AC units, automating inventory processes.",
        "Implemented functionalities to add, display, search, and sort AC records, significantly enhancing operational productivity.",
        "Reduced manual data entry errors by 50% through the automation of inventory tracking and reporting.",
        "Created a user-friendly interface and ensured data integrity through robust programming practices, facilitating easier management for end-users."
      ]
    },
    {
      title: "NVIDIA VOLUME PREDICTION",
      tech: "Python, Machine Learning, GitHub",
      link: "https://github.com/RithwikYathamshetty/AIML-2024/blob/main/Nvidia_Stock_Price_Prediction.ipynb",
      description: [
        "Engineered multiple regression models including Decision Tree, SVR, Random Forest, K-Nearest Neighbors (KNN), ElasticNet, and Multi-layer Perceptron (MLP) to predict Nvidia stock price movements.",
        "Performed bootstrap resampling with 1,000 iterations to evaluate model stability and reliability, enhancing the robustness of predictions.",
        "Validated model stability through 1,000 bootstrap resampling iterations and visualized performance using Seaborn/Matplotlib, influencing key trading desks to incorporate model insights into risk management strategies.",
        "Discovered and incorporated the top-performing predictive model based on rigorous error metric analysis into the trading system, boosting prediction accuracy – Presented findings and model insights in detailed reports, leading to the adoption of the system by key trading desks forinformed decision-making."
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      date: "Aug 2024",
      link: "https://www.credly.com/badges/c9e262fc-9cb2-4a2d-8386-3fdf8749957e/public_url"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Data Engineering",
      date: "Mar 2024",
      link: "https://www.credly.com/badges/f701a0ac-e207-4df4-a15f-1c44e34a2f44/public_url"
    },
    {
      title: "Data Analytics Essentials",
      date: "Mar 2024",
      link: "https://www.credly.com/badges/34a5d7fb-d3d4-414f-9410-c1251d9384be/public_url"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary text-white">
      {/* Header/Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-secondary-darker via-secondary to-secondary-darker py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2
            }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <img
              src="src/Profile.jpg"
              alt="Rithwik Yathamshetty"
              className="w-48 h-48 rounded-full object-cover relative z-10 border-2 border-primary/50"
            />
          </motion.div>
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent mb-4"
            >
              Rithwik Yathamshetty
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 text-gray-300"
            >
              <a href="mailto:rithwikyathamshetty2003@gmail.com" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105">
                <Mail size={20} /> rithwikyathamshetty2003@gmail.com
              </a>
              <a href="tel:+917285993700" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105">
                <Phone size={20} /> +91-7285993700
              </a>
              <a href="https://www.linkedin.com/in/rithwik-yathamshetty-8ab5232a4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://www.credly.com/users/rithwik-yathamshetty.018f2939" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105">
                <Award size={20} /> Credly
              </a>
              <motion.a 
                href="https://drive.google.com/file/d/1vA8WnSHcMAD1iJrdrS2bDnB4WLMzMp4W/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} /> View Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Education Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-darker"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">Education</h2>
          <motion.div 
            className="bg-secondary p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-500"
            whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(168, 85, 247, 0.1)" }}
          >
            <h3 className="text-xl font-semibold">SR University Warangal, India</h3>
            <p className="text-gray-400">Sep 2022 – Apr 2026</p>
            <p className="mt-2">B.Tech in Computer Science - AI & ML</p>
            <p className="text-primary">CGPA: 8.769/10</p>
            <p className="mt-4 text-gray-300">
              <strong>Coursework:</strong> Computer Architecture, Machine Learning, Data Structures, Algorithms, Object-Oriented Programming,
              Operating Systems, Network Security, Computer Vision, C, Python, Java
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Languages", skills: "C, Python, Java" },
              { title: "Tools & Frameworks", skills: "Git, Visual Studio, MySQL, MATLAB" },
              { title: "Web Development", skills: "HTML, CSS, JavaScript, Bootstrap" },
              { title: "Databases", skills: "SQL, MySQL, PLSQL, MongoDB" }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.1)",
                }}
                className="bg-secondary-light p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-semibold mb-2 text-primary-light">{skill.title}</h3>
                <p className="text-gray-300">{skill.skills}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-darker"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">Projects</h2>
          <div className="space-y-8">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-secondary p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary-light">{project.title}</h3>
                    <motion.a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                      View Project
                    </motion.a>
                  </div>
                  <p className="text-primary mb-4">{project.tech}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.1)",
                  }}
                  className="bg-secondary-light p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="font-semibold mb-2 text-primary-light">{cert.title}</h3>
                  <p className="text-gray-400">{cert.date}</p>
                  <div className="mt-4">
                    <motion.a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary px-4 py-2 rounded-lg flex items-center gap-2 w-fit transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Award size={20} />
                      View Certificate
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;