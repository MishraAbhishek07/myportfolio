// import user_image from './user-image.png';
// import code_icon from './code-icon.png';
// import code_icon_dark from './code-icon-dark.png';
// import edu_icon from './edu-icon.png';
// import edu_icon_dark from './edu-icon-dark.png';
// import project_icon from './project-icon.png';
// import project_icon_dark from './project-icon-dark.png';
// import vscode from './vscode.png';
// import firebase from './firebase.png';
// import figma from './figma.png';
// import git from './git.png';
// import mongodb from './mongodb.png';
// import right_arrow_white from './right-arrow-white.png';
// import logo from './logo.png';
// import logo_dark from './logo_dark.png';
// import mail_icon from './mail_icon.png';
// import mail_icon_dark from './mail_icon_dark.png';
// import profile_img from './profile-img.png';
// import download_icon from './download-icon.png';
// import hand_icon from './hand-icon.png';
// import header_bg_color from './header-bg-color.png';
// import moon_icon from './moon_icon.png';
// import sun_icon from './sun_icon.png';
// import arrow_icon from './arrow-icon.png';
// import arrow_icon_dark from './arrow-icon-dark.png';
// import menu_black from './menu-black.png';
// import menu_white from './menu-white.png';
// import close_black from './close-black.png';
// import close_white from './close-white.png';
// import web_icon from './web-icon.png';
// import mobile_icon from './mobile-icon.png';
// import ui_icon from './ui-icon.png';
// import graphics_icon from './graphics-icon.png';
// import right_arrow from './right-arrow.png';
// import send_icon from './send-icon.png';
// import right_arrow_bold from './right-arrow-bold.png';
// import right_arrow_bold_dark from './right-arrow-bold-dark.png';

// export const assets = {
//     user_image,
//     code_icon,
//     code_icon_dark,
//     edu_icon,
//     edu_icon_dark,
//     project_icon,
//     project_icon_dark,
//     vscode,
//     firebase,
//     figma,
//     git,
//     mongodb,
//     right_arrow_white,
//     logo,
//     logo_dark,
//     mail_icon,
//     mail_icon_dark,
//     profile_img,
//     download_icon,
//     hand_icon,
//     header_bg_color,
//     moon_icon,
//     sun_icon,
//     arrow_icon,
//     arrow_icon_dark,
//     menu_black,
//     menu_white,
//     close_black,
//     close_white,
//     web_icon,
//     mobile_icon,
//     ui_icon,
//     graphics_icon,
//     right_arrow,
//     send_icon,
//     right_arrow_bold,
//     right_arrow_bold_dark
// };

// export const workData = [
//     {
//         title: 'Frontend project',
//         description: 'Web Design',
//         bgImage: '/work-1.png',
//     },
//     {
//         title: 'Geo based app',
//         description: 'Mobile App',
//         bgImage: '/work-2.png',
//     },
//     {
//         title: 'Photography site',
//         description: 'Web Design',
//         bgImage: '/work-3.png',
//     },
//     {
//         title: 'UI/UX designing',
//         description: 'UI/UX Design',
//         bgImage: '/work-4.png',
//     },
// ]

// export const serviceData = [
//     { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
//     { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
//     { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
//     { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
// ]

// export const infoList = [
//     { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
//     { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
//     { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
// ];

// export const toolsData = [
//     assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
// ];
// Navigation Bar SECTION
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
      { name: "React", value: 90 },
      { name: "JavaScript", value: 90 },
      { name: "Data Structures", value: 65 },
      { name: "HTML/CSS", value: 55 },
      { name: "TypeScript", value: 80 },
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
  