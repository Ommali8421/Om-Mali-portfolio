'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Om Babaso Mali</h1>
              <p className={styles.role}>B.Tech Computer Science Undergraduate</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Sangli, India
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/Ommali8421" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;m a Computer Science undergraduate at Walchand College of Engineering (2024–2028) 
                with a strong interest in software development, problem solving, and building real-world 
                systems. I enjoy turning ideas into working applications that make an impact.
              </p>
              
              <p className={styles.paragraph}>
                My work spans from core programming in C, C++, and Java to web technologies like 
                HTML and CSS. I like exploring backend development, databases, and system design 
                while continuously improving my fundamentals in data structures and algorithms.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>June 2025</span>
                </div>
                <h3 className={styles.expRole}>Web Development Intern</h3>
                <p className={styles.expCompany}>IINNFOKIDAA Solutions</p>
                <ul className={styles.expList}>
                  <li>Developed backend modules for internal web tools using Flask.</li>
                  <li>Integrated application logic with a persistent database layer.</li>
                  <li>Worked on secure and reliable data handling for internal systems.</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>2025 - Present</span>
                </div>
                <h3 className={styles.expRole}>Public Relations Officer (PRO)</h3>
                <p className={styles.expCompany}>ACSES Club, WCE</p>
                <ul className={styles.expList}>
                  <li>Managing external networking and industry engagement for CSE students.</li>
                  <li>Coordinating with professionals and alumni for events and initiatives.</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Techumen &apos;25</span>
                </div>
                <h3 className={styles.expRole}>Volunteer / Presenter (Java Arena)</h3>
                <p className={styles.expCompany}>Techumen &apos;25 | WCE</p>
                <ul className={styles.expList}>
                  <li>Delivered sessions on Java and OOP principles to 150+ students.</li>
                  <li>Helped students understand logic building and core programming concepts.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>C</span>
                    <span className={styles.skillTag}>C++</span>
                    <span className={styles.skillTag}>Java (OOP)</span>
                    <span className={styles.skillTag}>HTML</span>
                    <span className={styles.skillTag}>CSS</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Coursework</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Data Structures</span>
                    <span className={styles.skillTag}>Software Engineering</span>
                    <span className={styles.skillTag}>Computer Networks</span>
                    <span className={styles.skillTag}>Object-Oriented Programming</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Technical Interests</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Web Development</span>
                    <span className={styles.skillTag}>Backend Systems</span>
                    <span className={styles.skillTag}>Databases</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Non-Technical</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Teamwork</span>
                    <span className={styles.skillTag}>Leadership</span>
                    <span className={styles.skillTag}>Critical Thinking</span>
                    <span className={styles.skillTag}>Hardworking</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Achievements</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <ul className={styles.expList}>
                <li>
                  Cleared the college-level hackathon at WCE Sangli to represent the institute 
                  in the national Smart India Hackathon 2025.
                </li>
                <li>
                  Selected to deliver a Java and OOP principles session to 150+ students at Techumen &apos;25.
                </li>
                <li>
                  Achieved 98.8 percentile (State Rank: 3116) in MHT-CET among 3+ lakh candidates.
                </li>
              </ul>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Outside of academics and coding, I enjoy working on presentations, brainstorming ideas, 
                solving puzzles, reading novels, and exploring new technologies. I am also an active 
                participant in social and departmental activities such as the Social IT Awareness 
                Campaign (SITAC) and ACSES initiatives.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
