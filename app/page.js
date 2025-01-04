import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/About';
import SkillsBar from './components/skills/Skillsbar';
import { skills ,experiences} from '@/assets/assets';
import Skills from './components/skills/Skill';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import { leadership } from '@/assets/assets';

const page = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <Hero/>
      </div>
      <AboutMe/>
      <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
        <Experience experiences={experiences} />
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />

    
    </div>
  )
}

export default page