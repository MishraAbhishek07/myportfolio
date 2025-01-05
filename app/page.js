import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react'

import Herosection from './components/Herosection';
import About from './components/About';
import NavBar from './components/NavBar';

import { skills ,experiences} from '@/assets/assets';
import SkillSection from './components/skills/SkillSection';
import WorkHistory from './components/WorkHistory';
import SliderShowcase from './components/SliderShowcase';
import { leadership } from '@/assets/assets';
import Projects from './components/Projects';
import Footer from './components/Footer';


const page = () => {
  return (
    <div>
      <NavBar/>
     
      <Herosection />
      
      <About/>
    
      <WorkHistory jobs={experiences} />

      <Projects/>

      <SliderShowcase
          title={leadership.heading}
          description={leadership.message}
          slides={leadership.images}
          imageSize={leadership.imageSize}
        />
   
       
        <SkillSection
          sectionTitle={skills.heading}
          technicalSkills={skills.hardSkills}
          interpersonalSkills={skills.softSkills}
        />
        <Footer/>

    
    </div>
  )
}

export default page