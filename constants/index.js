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
      'Dong is a Web3-powered reward and engagement platform built on blockchain technology. I worked on integrating...',
    link: 'https://thimmzie.github.io/-Dong/',
    img: Dong,
  },
  {
    id: 2,
    title: 'Moneva',
    about:
      'Moneva is a personal expense-tracking app designed to help users manage their daily spending with clarity and ease...',
    link: 'https://moneva.pxxl.click/',
    img: Moneva,
  },
];

export { Mobilemenu, Projects };
