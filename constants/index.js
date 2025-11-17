import Dong from '../src/assets/images/dong.png';
import Moneva from '../src/assets/images/moneva.png';

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

export { Mobilemenu, Projects };
