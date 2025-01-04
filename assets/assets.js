import Logo from "@/assets/simpana.png"
import Logo1 from "@/assets/vendify.png"
import Logo2 from "/assets/pacl.png"
import Home from "@/assets/home.png"
import Add from "@/assets/add.png"
import Edit from "@/assets/edit.png"
import One from "@/assets/1.png"
import Two from "@/assets/2.png"
import Three from "@/assets/3.png"
import Four from "@/assets/4.png"
import Five from "@/assets/5.png"
import Six from "@/assets/6.png"
import Seven from "@/assets/7.png"
import Eight from "@/assets/8.png"

const navBar = {
    show: true,
  };
  
  // Main Body SECTION
 export const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Abhishek",
    middleName: "",
    lastName: "Mishra",
    message: " Passionate about changing the world with technology. ",
    icons: [
      {
        image: "fa-github",
        url: "https://github.com/Mohd-shahid-iqbal",
      },
      {
        image: "fa-facebook",
        url: "https://www.facebook.com/profile.php?id=100002142394297",
      },
      {
        image: "fa-instagram",
        url: "https://www.instagram.com/shahid27945/",
      },
      {
        image: "fa-linkedin",
        url: "https://www.linkedin.com/in/mohd-shahid-iqbal-2b690713b/",
      },
    ],
  };
  
  // ABOUT SECTION
  // If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
  //a) your Instagram username
  //      i.e:profilePictureLink:"johnDoe123",
  //b) a link to an hosted image
  //      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
  //c) image in "editable-stuff" directory and use require("") to import here,
  //      i.e: profilePictureLink: require("../editable-stuff/shahid.png"),
  //d) If you do not want any picture to be displayed, just leave it empty :)
  //      i.e: profilePictureLink: "",
  // For Resume either provide link to your resume or import from "editable-stuff" directory
  //     i.e resume: require("../editable-stuff/resume.pdf"),
  //         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
  
  export const About = {
    show: true,
    heading: "About Me",
    
    imageSize: 375,
    message:
      "My name is Abhishek mishra. I’m a under-Graduate of 2024 from G.L Bajaj Institute of Technology & Management with a degree in B.Tech(IT) . I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
    resume:
      "https://drive.google.com/file/d/1wIK_ZlKEiPsnwl7MTBwVsl25WB36iQVu/view?usp=drive_link",
  };
  export const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
      { name: "React", value: 70 },
      { name: "JavaScript", value: 70 },
      { name: "Data Structures", value: 65 },
      { name: "HTML/CSS", value: 55 },
      { name: "Tailwind", value: 60 },
      { name: "SQL", value: 75 },
    ],
    softSkills: [
      { name: "Goal-Oriented", value: 80 },
      { name: "Collaboration", value: 90 },
      { name: "Positivity", value: 75 },
      { name: "Adaptability", value: 85 },
      { name: "Problem Solving", value: 75 },
      { name: "Empathy", value: 90 },
      { name: "Organization", value: 70 },
      { name: "Creativity", value: 90 },
    ],
  };
  

  export const experiences = {
    show: true,
    heading: "Experiences",
    data: [
      {
        role: "React Developer",
        companylogo: Logo,
        date: "Aug 2020 – May 2022",
      },
      {
        role: "Senior Software Engineer", 
        companylogo: Logo1,
        date: "May 2022 – March 2023",
      },
      {
        role: "React Developer",
        companylogo: Logo2,
        date: "March 2023 – Present",
      },
    ],
  };
  export const leadership = {
    show: true,
    heading: "Leadership",
    message:
      "As a React developer with leadership experience, I bring technical expertise, project management skills, and strong communication abilities to the table. I have a proven track record of building large-scale applications, optimizing code for performance, and implementing best practices. Additionally, I have experience leading teams and projects, creating and maintaining project plans, managing timelines and budgets, and ensuring timely delivery of high-quality work. I excel at communicating effectively with team members, stakeholders, and clients, both verbally and in writing, and am a skilled listener who can provide clear and constructive feedback. I am also passionate about mentoring and training other developers to help them develop their skills and achieve their goals. With my ability to solve complex technical problems and think creatively, I am always up-to-date with the latest developments in React and related technologies, and am able to innovate and inspire a positive, collaborative work environment.",
    images: [
      {
        img: Home,
        label: "First slide label",
        paragraph:
          "Home page of Task Management system where a user can manage all their tasks",
      },
      {
        img: Add,
        label: "Second slide label",
        paragraph: "User can add his task from this page",
      },
      {
        img: Edit,
        label: "Second slide label",
        paragraph:
          "If user Write somethings wrong then here he can edit the task ",
      },
      {
        img: One,
        label: "Dashboards",
        paragraph: "Dashboard with charts ",
      },
      {
        img:Two,
        label: "Users Module",
        paragraph: "Users can be managed from here ",
      },
      {
        img: Three,
        label: "Products",
        paragraph: "All the Products Are listed here ",
      },
      {
        img:Four,
        label: "Add Zone",
        paragraph: "A Zone can be Added from here ",
      },
      {
        img: Five,
        label: "Transactions",
        paragraph: "All the Transactions Are listed here",
      },
      {
        img:Six,
        label: "Vending Machine List",
        paragraph: "All the Vending machines are listed here",
      },
      {
        img:Seven,
        label: "Overview",
        paragraph: "Vending Machine Overview ",
      },
      {
        img: Eight,
        label: "Refill Vending Machine",
        paragraph: "User can refill machine from here ",
      },
    ],
    imageSize: {
      width: "615",
      height: "450",
    },
  };