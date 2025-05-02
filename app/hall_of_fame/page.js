'use client'; // Required for useState and event handlers

import React, { useState } from 'react';
import Navbar from '../../components/navbar.js';
import styles from '../../styles/HallOfFame.module.css';
import { Github } from 'lucide-react';

// --- Mock Data ---
const projectsData = {
  'Fall 2024': [
    {
      id: 1,
      title: 'TaskTamers',
      members: ['Mary', 'Bob', 'Sue', 'Tara', 'Dan'],
      description: 'Project Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      githubUrl: 'https://github.com/your-repo/tasktamers', 
      imageUrl: 'https://placehold.co/600x400/4F8DDE/ffffff?text=TaskTamers',
    },
    {
      id: 2,
      title: 'StudyBuddies',
      members: ['Mary', 'Bob', 'Sue', 'Tara', 'Dan'],
      description: 'Project Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      githubUrl: 'https://github.com/your-repo/studybuddies',
      imageUrl: 'https://placehold.co/600x400/4F8DDE/ffffff?text=StudyBuddies',
    },
    {
      id: 3,
      title: 'Journey to Midcard',
      members: ['Mary', 'Bob', 'Sue', 'Tara', 'Dan'],
      description: 'Project Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      githubUrl: 'https://github.com/your-repo/journey',
      imageUrl: 'https://placehold.co/600x400/4F8DDE/ffffff?text=Journey',
    },
    {
      id: 4,
      title: 'Sky Sharks',
      members: ['Mary', 'Bob', 'Sue', 'Tara', 'Dan'],
      description: 'Project Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      githubUrl: 'https://github.com/your-repo/skysharks',
      imageUrl: 'https://placehold.co/600x400/4F8DDE/ffffff?text=Sky+Sharks',
    },
  ],
  'Spring 2024': [
     {
      id: 5,
      title: 'Project Alpha',
      members: ['Alice', 'Charlie', 'David'],
      description: 'Spring project focusing on AI-driven scheduling solutions.',
      githubUrl: 'https://github.com/your-repo/alpha',
      imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=Project+Alpha',
    },
     {
      id: 6,
      title: 'EcoTrack',
      members: ['Eve', 'Frank', 'Grace'],
      description: 'An application for tracking personal carbon footprint.',
      githubUrl: 'https://github.com/your-repo/ecotrack',
      imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=EcoTrack',
    },
  ],
  'Fall 2023': [
    {
      id: 7,
      title: 'CodeConnect',
      members: ['Heidi', 'Ivan', 'Judy'],
      description: 'A platform for collaborative coding challenges.',
      githubUrl: 'https://github.com/your-repo/codeconnect',
      imageUrl: 'https://placehold.co/600x400/1e40af/ffffff?text=CodeConnect',
     },
  ],
  'Spring 2023': [
     {
      id: 8,
      title: 'HealthHub',
      members: ['Mallory', 'Oscar', 'Peggy'],
      description: 'Centralized hub for personal health records and tracking.',
      githubUrl: 'https://github.com/your-repo/healthhub',
      imageUrl: 'https://placehold.co/600x400/1e3a8a/ffffff?text=HealthHub',
     },
  ],
};
// --- Components ---

/**
 * Renders the semester selection tabs
 */
const SemesterTabs = ({ semesters, selectedSemester, onSelectSemester }) => {
  return (
    <div className={styles.tabsContainer}>
      {semesters.map((semester) => (
        <button
          key={semester}
          onClick={() => onSelectSemester(semester)}
          className={`${styles.tabButton} ${
            selectedSemester === semester ? styles.activeTab : ''
          }`}
        >
          {semester}
        </button>
      ))}
    </div>
  );
};

/**
 * Renders a single project card
 */
const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <img
        src={project.imageUrl}
        alt={`${project.title} Placeholder`}
        className={styles.cardImage}
        // Basic fallback using placeholder service URL structure
        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/cccccc/ffffff?text=Image+Error`; }}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardMembers}>
          By: {project.members.join(', ')}
        </p>
        <p className={styles.cardDescription}>
          {project.description}
        </p>
        <a
          href={project.githubUrl}
          target="_blank" // just opens the link in a new tab
          rel="noopener noreferrer"
          className={styles.githubButton}
        >
          {/* Use inline style for icon size/margin or wrap in a styled span if needed */}
          <Github size={16} style={{ marginRight: '8px', transform: 'scale(1)' }} className={styles.githubIcon} />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function HallOfFamePage() {
  // state to keep track of the selected sem
  const [selectedSemester, setSelectedSemester] = useState('Fall 2024');
  // list of sems from the data keys
  const semesters = Object.keys(projectsData);
  const filteredProjects = projectsData[selectedSemester] || [];

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      {/* Main content area */}
      <main className={styles.mainContent}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to the Hall of Fame!
          </h1>
          {/* <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>

        {/* Semester Selection Tabs */}
        <SemesterTabs
          semesters={semesters}
          selectedSemester={selectedSemester}
          onSelectSemester={setSelectedSemester}
        />

        {/* Project Grid Section */}
        {filteredProjects.length > 0 ? (
           <div className={styles.projectGrid}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className={styles.noProjects}>No projects found for this semester.</p>
        )}
      </main>
    </div>
  );
}
