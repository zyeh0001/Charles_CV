import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';
import React from 'react';
import skindicator1 from '../assets/skindicator_images/1.jpg';
import skindicator2 from '../assets/skindicator_images/2.png';
import skindicator3 from '../assets/skindicator_images/3.png';
import skindicator4 from '../assets/skindicator_images/4.png';
import skindicator5 from '../assets/skindicator_images/5.png';
import skindicator6 from '../assets/skindicator_images/6.png';
import skindicator7 from '../assets/skindicator_images/7.png';
import skindicator8 from '../assets/skindicator_images/8.png';
import skindicator9 from '../assets/skindicator_images/9.png';
import skindicator10 from '../assets/skindicator_images/10.png';
import skindicator11 from '../assets/skindicator_images/11.png';
import housing1 from '../assets/Australia_housing_image/1.png';
import housing2 from '../assets/Australia_housing_image/2.png';
import housing3 from '../assets/Australia_housing_image/3.png';
import housing4 from '../assets/Australia_housing_image/4.png';
import housing5 from '../assets/Australia_housing_image/5.png';
import painDiary1 from '../assets/pain_diary_image/1.jpeg';
import painDiary2 from '../assets/pain_diary_image/2.jpeg';
import painDiary3 from '../assets/pain_diary_image/3.jpeg';
import painDiary4 from '../assets/pain_diary_image/4.jpeg';
import painDiary5 from '../assets/pain_diary_image/5.jpeg';
import painDiary6 from '../assets/pain_diary_image/6.jpeg';
import painDiary7 from '../assets/pain_diary_image/7.jpeg';
import painDiary8 from '../assets/pain_diary_image/8.jpeg';
import painDiary9 from '../assets/pain_diary_image/9.jpeg';
import learningbar1 from '../assets/learningBar_image/1.png';
import learningbar2 from '../assets/learningBar_image/2.png';
import tagtag1 from '../assets/tagtag_image/1.png';
import tagtag2 from '../assets/tagtag_image/2.png';
import budget1 from '../assets/BudgetApp/budget1.png';
import budget2 from '../assets/BudgetApp/budget2.png';
import budget3 from '../assets/BudgetApp/budget3.png';
import confusion1 from '../assets/confusion/confusion1.png';
import confusion2 from '../assets/confusion/confusion2.png';
import confusion3 from '../assets/confusion/confusion3.png';
import confusion4 from '../assets/confusion/confusion4.png';
import yumyum1 from '../assets/yumyum/yumyum1.png';
import yumyum2 from '../assets/yumyum/yumyum2.png';
import yumyum3 from '../assets/yumyum/yumyum3.png';
import yumyum4 from '../assets/yumyum/yumyum4.png';
import yumyum5 from '../assets/yumyum/yumyum5.png';
import yumyum6 from '../assets/yumyum/yumyum6.png';
import yumyum7 from '../assets/yumyum/yumyum7.png';
import githubFinder1 from '../assets/github_finder/github1.png';
import githubFinder2 from '../assets/github_finder/github2.png';
import githubFinder3 from '../assets/github_finder/github3.png';
import githubFinder4 from '../assets/github_finder/github4.png';
import githubFinder5 from '../assets/github_finder/github5.png';
import houseMarket1 from '../assets/housing_market/housing1.png';
import houseMarket2 from '../assets/housing_market/housing2.png';
import houseMarket3 from '../assets/housing_market/housing3.png';
import houseMarket4 from '../assets/housing_market/housing4.png';
import houseMarket5 from '../assets/housing_market/housing5.png';
import support1 from '../assets/support_desk/support1.png';
import support2 from '../assets/support_desk/support2.png';
import support3 from '../assets/support_desk/support3.png';
import support4 from '../assets/support_desk/support4.png';

const resumeData = {
  name: 'Charles Yeh',
  title: 'Web Developer',
  phone: '(61)423-105-719',
  email: 'charlesyehtw@gmail.com',
  location: 'Melbourne',
  address: '23 Longbourne Ave, Notting Hill',

  socials: {
    Facebook: {
      link: 'https://www.facebook.com/charlesyehtw/',
      text: 'Charles Yeh',
      icon: <FacebookIcon />,
    },
    Linkedin: {
      link: 'https://www.linkedin.com/in/charles-yeh-1b5950202/',
      text: 'Charles_Yeh',
      icon: <LinkedInIcon />,
    },
    Github: {
      link: 'https://github.com/zyeh0001',
      text: 'MyGitHub',
      icon: <GitHubIcon />,
    },
    Instagram: {
      link: 'https://www.instagram.com/charles.gaga_/',
      text: 'charles.gaga_',
      icon: <InstagramIcon />,
    },
  },
  about:
    'I’m an information technology master graduate from Monash University, with over 6 years of experience in operations, web development, project management, data analysis skills. Besides with a previous 1 year of experience as an FAE engineer. I have received training in providing effective solutions to customers, and developed strong interpersonal and oral communication skills. \n\nI have excellent problem-solving skills and transform complex analysis into clear and practical steps, providing meaningful and relevant insights. I am also adept at designing, developing, analyzing, and reviewing reports, metrics, and data sets to support performance results. \n\nI would like to apply my knowledge about Information technology to help companies to improve their performance. My specialty includes knowledge about  React js, AWS services, Javascript, CSS, HTML, Java, Python, Android studio, SQL, R, and Tableau. I am also a go-getter and quick learner that can help me face challenges during my work. I am now seeking to gain full-time employment as a web developer or any IT-related opportunities in different industries.',
  work: [
    {
      title: 'Freelance Web Developer',
      date: 'Sep2021 – PRESENT',
      description:
        'Ø Establish and maintain a multi-lingual website Taiwan-Japan exchange platform.',
    },
    {
      title: 'Greata International Corp-FAE Engineer',
      date: 'Apr2019 - Oct 2019',
      description:
        'Ø Work with Delta Electronics to support the Government intelligent street lamp system in Taoyuan city.\n Ø Assist customers to determined product requirements and provide pre-sales and after-sales technical support including problem solving and training.\nØ Examine failure Microchip IC testing using C programming and oscilloscope',
    },
    {
      title: 'Workforce Development Agency-Teaching Assistant',
      date: 'Aug 2018 - Oct 2020',
      description:
        'Ø Assist students in solving IT related problems for various certificates, including different computer C-level Technician certificates.',
    },
  ],
  education: [
    {
      name: 'Monash University',
      date: 'Mar2020 - Dec2021 - Melbourne, Australia',
      major: 'Master of Information Technology',
    },
    {
      name: 'National Dong Hwa University',
      date: 'Sep2014 - June2018 - Taipei, Taiwan',
      major: 'Bachelor of Computer Science',
    },
    {
      name: 'California State University of Monterey Bay',
      date: 'Aug2017 - Jan2018 - California, USA',
      major: 'ExchangeStudent',
      award:
        'Ø Awarded International exchange scholarship from Ministry of Education, Taiwan',
    },
  ],
  services: [
    {
      title: 'Web Dev',
      description:
        'I have over six years of experience in operations, web development, project management, data analysis skills.',
      icon: '',
    },
    {
      title: 'Cloud Computing',
      description:
        'I have over six years of experience in operations, web development, project management, data analysis skills.',
      icon: '',
    },
    {
      title: 'Software development',
      description:
        'I have over six years of experience in operations, web development, project management, data analysis skills.',
      icon: '',
    },
  ],

  skills: [
    {
      title: 'Web-Dev',
      description: [
        'ReactJS',
        'JavaScript',
        'Bootstrap',
        'Material UI',
        'AWS services',
      ],
    },
    {
      title: 'Database',
      description: ['SQL', 'MongoDB', 'Cassandra', 'Firebase'],
    },
    {
      title: 'Sourse Control',
      description: ['GIT', 'Agile/Scrum'],
    },
    {
      title: 'Visual',
      description: ['Tableau', 'R', 'D3.js'],
    },
  ],
  projects: [
    {
      tag: 'React',
      images: [yumyum1, yumyum2, yumyum3, yumyum4, yumyum5, yumyum6, yumyum7],
      title: 'YumYum Recipe Finder',
      description:
        'Ø A Fullstack MERN stack application, that have full login system with json web token protection, using React and tailwind as frontend design and Express, MongoDB as backend. This app also uses Redux and Redux Toolkit for state management and provide full CRUD function for user to create recipes. For recipe search feature, I utilise Spoonacular Api to get the recipe data, user are able to view their created recipes and add searched recipes to their favorite collection.',
      caption:
        'A modern recipe finder app for user to find recipe and allow user to create or save their favorite recipe into collection',
      links: [
        {
          type: 'project',
          link: 'https://charlesyumyum.herokuapp.com/',
          icon: <WebIcon />,
        },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/MERN-yumyum-recipe-app',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'React',
      images: [
        githubFinder1,
        githubFinder2,
        githubFinder3,
        githubFinder4,
        githubFinder5,
      ],
      title: 'Github Finder App',
      description:
        'Ø This is the second project I build followed from Udemy bootcamp React Front to back. The frontend is developed using React and use Tailwind and daisyUI for styling, data are fetching from the github rest api, and using contextAPI for state management.',
      caption:
        'A modern github finder app that allows user to find github users and view their github repositories',
      links: [
        {
          type: 'project',
          link: 'https://github-finder-app-wheat-five.vercel.app/',
          icon: <WebIcon />,
        },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/github-finder-app-',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'React',
      images: [
        houseMarket1,
        houseMarket2,
        houseMarket3,
        houseMarket4,
        houseMarket5,
      ],
      title: 'House Marketplace App',
      description:
        'Ø This is the third project that I followed from Udemy React Front to Back. The frontend is build using React and the backend is using firebase version 9 (db, auth, storage) ,It provides full CRUD functionality for users to manage house listing. This app is also fetching the google map api to get the house geolocation, and implement on Leaflet map.',
      caption:
        'A modern house marketplace website that allow users to post their house listings for sell or for rent',
      links: [
        {
          type: 'project',
          link: 'https://house-market-app-rho.vercel.app/',
          icon: <WebIcon />,
        },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/House-Market-app',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'React',
      images: [support1, support2, support3, support4],
      title: 'Support Desk App',
      description:
        'Ø This is the forth project that I followed from Udemy React Front to Back, It is a fullstack MERN project. Using React as frontend and redux, redux-toolkit for state management. Full authentication system with Json web token protection and full CRUD functionalities for user to manage their ticket to get support. ',
      caption:
        'A user friendly support desk app that allow users to post their tickets (needed support for certain products) and view their all support tickets.',
      links: [
        {
          type: 'project',
          link: 'https://charlessupportdesk.herokuapp.com/',
          icon: <WebIcon />,
        },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/-MERN-supportdesk-app',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'React',
      images: [
        skindicator1,
        skindicator2,
        skindicator3,
        skindicator4,
        skindicator5,
        skindicator6,
        skindicator7,
        skindicator8,
        skindicator9,
        skindicator10,
        skindicator11,
      ],
      title: 'Skindicator-x',
      description:
        'Ø Australia has one of the highest rates of skin cancer in the world; Each year, nearly 80% of all cancer cases in Australia are skin cancer cases. Left undetected skin cancer can even lead to death. The problem is that some Australians dont realise how serious skin cancer is and how important regular skin check-ups can be. Furthermore, Information about skin cancer is difficult to find and hard to understand \n\n Ø Our solutions involve providing basic preventive measures for skin cancer and analyzing the data based on the pictures of their skin uploaded by users (Classification of data is based on AI). At the end of the analysis, the user is given a prediction report along with a disclaimer. Please note that this is not a diagnosis report, we are just predicting the probability that the user has or may have skin cancer.',
      caption:
        'A free service website designed to raise skin health awareness allows users to check their moles and find the nearest dermatologist.',
      links: [
        {
          type: 'project',
          link: 'https://www.skindicator.ga/',
          icon: <WebIcon />,
        },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/Skindicator-x',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'React',
      images: [confusion1, confusion2, confusion3, confusion4],
      title: 'Coursera - Confusion App',
      description:
        'This project is the demonstration of the Front End development Course in Coursera. ',
      caption:
        'A restaurant website developed using React, Redux and Json server.',
      links: [
        // {
        //   type: 'project',
        //   link: 'https://www.skindicator.ga/',
        //   icon: <WebIcon />,
        // },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/cosera_confusion_app',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'React',
      images: [budget1, budget2, budget3],
      title: 'Budget App',
      description:
        'The project is a simple budget management application using React, user can add different budget categories and add expenses as well as tracking the expense log.',
      caption:
        'A budget management application developed using React with several custom React hooks',
      links: [
        {
          type: 'project',
          link: 'https://zyeh0001.github.io/-Budget_app/',
          icon: <WebIcon />,
        },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/-Budget_app',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'ASP.NET',
      images: [learningbar1, learningbar2],
      title: 'Learnong Bar',
      caption:
        'An framework of online language learning platform. This platform is designed for people who want to learn new languages and make friends from different countries.',
      description:
        'The platform allowed users to select the what languages they want to learn. \nUsers can also view an event list to go to that the Admin announced. Furthermore, there is also a forum to support students’ learning experience. It provides students with places to discuss course material, gives feedback, or chat with each other.',
      links: [
        // {
        //   type: 'project',
        //   link: 'https://www.skindicator.ga/',
        //   icon: <WebIcon />,
        // },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/LearningBar',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'Data Visual',
      images: [housing1, housing2, housing3, housing4, housing5],
      title: 'Australia housing asalysis website',
      caption:
        'A narrative visualisation website designed to show the average housing price and focus on the impact of population and top universities location.',
      description:
        'Ø Collect open data from Australian Bureau of Statistics and Kaggle, use Python for data wrangling (deal with null, invalidate value to realize data normalize and standard).\n Ø Use D3.js to realize data visualization including Choropleth map to show the geo-distribution and animation barchart to show housing price through timeline.',
      links: [
        {
          type: 'project',
          link: 'https://zyeh0001.github.io/Australia-Housing-Analysis-D3/',
          icon: <WebIcon />,
        },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/Australia-Housing-Analysis-D3',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'Android App',
      images: [
        painDiary1,
        painDiary2,
        painDiary3,
        painDiary4,
        painDiary5,
        painDiary6,
        painDiary7,
        painDiary8,
        painDiary9,
      ],
      title: 'Personalised Mobile Pain Diary',
      caption:
        'A health care Android application that allows users to keep record of their pain experience and present monthly report of the pain level.',
      description:
        'Ø A mobile and distributed, personalised pain diary application that enables individuals to record their pain experience and related factors such as their pain intensity level, pain location, physical activities (or number of steps taken daily) and mood. It allows users to view daily, weekly and monthly reports and monitor their health and progress. These reports can help the individual as well as their doctor to better understand their condition and the relationships between the environmental variables such as their pain intensity and weather.\n Ø The mobile app  was implemented in Android Studio 11 and interact with the public web APIs (e.g. weather public APIs) to retrieve relevant and useful information. \n Ø This project also utilise firebase as database to manage the users.',
      links: [
        // {
        //   type: 'project',
        //   link: 'https://zyeh0001.github.io/Australia-Housing-Analysis-D3/',
        //   icon: <WebIcon />,
        // },
        {
          type: 'source',
          link: 'https://github.com/zyeh0001/Pain-Diary',
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: 'AWS Serverless',
      images: [tagtag1, tagtag2],
      title: 'Tag Tag',
      caption:
        'A Modern Image Storage on the Cloud that utilise AWS services allow users to upload images and detect the objects inside the image',
      description:
        'Ø An AWS Cloud-based solution that exploits services such as S3, Lambda, APIGateway and database service (e.g. DynamoDB) to build a system for automated object-detection tagging and query handling. \n Ø The system allows end-users to upload their images into an S3 bucket, and handling  queries using API  gateway totrigger corresponding Lambda functions. The object detection feature was developed using Yolo.',
      links: [
        // {
        //   type: 'project',
        //   link: 'https://zyeh0001.github.io/Australia-Housing-Analysis-D3/',
        //   icon: <WebIcon />,
        // },
        {
          type: 'source',
          link: 'https://github.com/ElvisLzw/fit5225_ass2',
          icon: <GitHubIcon />,
        },
      ],
    },
  ],
};

export default resumeData;
