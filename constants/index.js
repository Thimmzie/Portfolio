import Dong from '../src/assets/images/dong.png';
import Moneva from '../src/assets/images/moneva.png';
import Porfolio from '../src/assets/images/portfolio.png';
import Guessy from '../src/assets/images/guessy.png';
import { FaXTwitter, FaLinkedin, FaGithub, FaHashnode } from 'react-icons/fa6';
import Api from '../src/assets/images/apicover.jpg';

const Mobilemenu = [
  { id: 'home', title: 'Homepage', path: '/' },
  { id: 'about', title: 'About Me', path: '/about' },
  { id: 'project', title: 'Projects', path: '/project' },
  { id: 'article', title: 'Articles', path: '/article' },
];

const Projects = [
  {
    id: 1,
    title: 'Dong',
    about:
      'Dong is a Web3-powered reward and engagement platform built on blockchain technology. I worked on integrating MetaMask wallet connectivity and interacting with the smart contract directly from the frontend, also built the frontend. The project focuses on enabling users to connect their wallets, view on-chain data, and perform secure transactions in a simple, user-friendly interface.',
    link: 'https://thimmzie.github.io/-Dong/',
    img: Dong,
  },
  {
    id: 2,
    title: 'Moneva',
    about:
      'Moneva is a personal expense-tracking app designed to help users manage their daily spending with clarity and ease. It’s an ongoing project, with a minor frontend and major backend features still in development. This project focuses on a clean UI, smooth interactions, and real-time expense tracking.',
    link: 'https://moneva.pxxl.click/',
    img: Moneva,
  },
];

const questions = [
  {
    id: 1,
    question: 'What does your typical project timeline look like?',
    answer:
      'Timeline depends on the scope of the project. Once I understand your requirements, I will give a clear timeline and milestone breakdown.',
  },
  {
    id: 2,
    question: 'How do you handle scope changes mid-project?',
    answer:
      'Small changes are handled organically. Bigger changes are noted, costed, and added as new milestones so the original stays realistic.',
  },
  {
    id: 3,
    question: 'What do you need from the client before commencement?',
    answer:
      'Clear product goals, required features, brand guidelines, and technical constraints (if any) ',
  },
  {
    id: 4,
    question: 'Do you offer post-launch support or maintenance?',
    answer:
      'Yes, I provide maintenance plans, bug fixes, feature updates, and performance improvements after launch. ',
  },
  {
    id: 5,
    question: 'Why do you combine software engineering and technical writing?',
    answer:
      'I believe good code deserves clear documentation. Writing helps me to simplify technical concepts and bridge developers with the tools they use',
  },
];

const socials = [
  {
    id: 1,
    media: FaXTwitter,
    username: 'rushhour435',
    url: 'https://x.com/rushhour435?s=21  ',
  },
  {
    id: 2,
    media: FaLinkedin,
    username: 'Ayodeji Olupinla',
    url: 'https://www.linkedin.com/in/ayodeji-olupinla-60875b205?',
  },
  {
    id: 3,
    media: FaGithub,
    username: 'Thimmzie',
    url: 'https://github.com/Thimmzie',
  },
  {
    id: 4,
    media: FaHashnode,
    username: 'Thimmzie435',
    url: 'https://hashnode.com/@Thimmzie435',
  },
];

const FullProjects = [
  {
    id: 1,
    title: 'Dong',
    about:
      'Dong is a Web3-powered platform built on blockchain technology. I worked on integrating MetaMask wallet connectivity and interacting with the smart contract directly from the frontend, also built the frontend. The project focuses on enabling users to connect their wallets, view on-chain data, and perform secure transactions in a simple, user-friendly interface.',
    link: 'https://dong-khaki.vercel.app/',
    img: Dong,
    stack: 'JavaScript • CSS • Ether.JS',
  },
  {
    id: 2,
    title: 'Moneva',
    about:
      'Moneva is a personal expense-tracking app designed to help users manage their daily spending with clarity and ease. It’s an ongoing project, with a minor frontend and major backend features still in development. This project focuses on a clean UI, smooth interactions, and real-time expense tracking.',
    link: 'https://moneva.pxxl.click/',
    img: Moneva,
    stack: 'React • Tailwind CSS • Gsap',
  },
  {
    id: 3,
    title: 'Ayodeji"s portfolio',
    about:
      'This project is a fully responsive portfolio website built to highlight my skills, personality, and approach to modern frontend development. It features smooth animations, clean UI patterns, and a carefully structured layout optimized for both desktop and mobile experiences.',
    link: 'https://ayodeji435.netlify.app/',
    img: Porfolio,
    stack: 'React • Tailwind CSS • Motion • Gsap • Express • Node.JS',
  },
  {
    id: 4,
    title: 'Guessy',
    about:
      'This project is a lightweight number-guessing game where users attempt to guess a randomly generated number within a defined range. It features simple validation, instant feedback, and a smooth user flow',
    link: 'https://guessy-vert.vercel.app/',
    img: Guessy,
    stack: 'Javascript • CSS',
  },
];

const Writing = [
  {
    id: 1,
    img: Api,
    title: 'APIs: The Bridge Between Frontend and Real Data',
    excerpt:
      'Behind every smooth digital experience is a system quietly exchanging information. ',
    date: 'Nov 17, 2025',
    time: '📖 10 min read',
    link: 'https://ayodeji435.hashnode.dev/apis-the-bridge-between-frontend-and-real-data',
  },
];

export { Mobilemenu, Projects, questions, socials, FullProjects, Writing };
