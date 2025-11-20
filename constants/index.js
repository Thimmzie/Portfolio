import Dong from '../src/assets/images/dong.png';
import Moneva from '../src/assets/images/moneva.png';
import { FaXTwitter, FaLinkedin, FaGithub, FaHashnode } from 'react-icons/fa6';

const Mobilemenu = [
  { id: 'home', title: 'Homepage', path: '/' },
  { id: 'about', title: 'About Me', path: '/about' },
  { id: 'project', title: 'Projects', path: '/project' },
  { id: 'article', title: 'Articles', path: '/article' },
  // { id: 'reachout', title: 'Reach out to me' },
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
  { id: 1, media: FaXTwitter },
  { id: 2, media: FaLinkedin },
  { id: 3, media: FaGithub },
  { id: 4, media: FaHashnode },
];

export { Mobilemenu, Projects, questions, socials };
