import GithubLogo from '../assets/img/Github.svg'
import InstagramLogo from '../assets/img/Instagram.svg'
import LinkedinLogo from '../assets/img/Linkedin.svg'
import TwitterLogo from '../assets/img/Twitter.svg'
import DribbbleLogo from '../assets/img/Dribbble.svg'


export const config = {
  email: 'hahafizhmaulana@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/git-hafizh',
      logo: GithubLogo
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hafizhmaula.na',
      logo: InstagramLogo
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hafizhmaulana/',
      logo: LinkedinLogo
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/hafizhmaulana',
      logo: DribbbleLogo
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/nocturnefish',
      logo: TwitterLogo
    },
  ],

  navLinks: [
    {
      name: 'Home',
      label: 'home-page',
      url: '/'
    },
    {
      name: 'About',
      label: 'about-page',
      url: '/about',
    },
    {
      name: 'Experience',
      label: 'experience-page',
      url: '/jobs',
    },
    {
      name: 'Work',
      label: 'work-page',
      url: '/projects',
    },
    {
      name: 'Contact',
      label: 'contact-page',
      url: '/contact',
    },
  ],

  colors: {
    blackSolid: '#272833',
    yellowOrigin: '#FCD12A'
  },
}