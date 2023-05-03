export const homePageData = [
  {
    title: 'Who We Are',
    img: require('./img/Studio.webp'),
    btnText: 'About Us',
    link: '/about',
  },
  {
    title: 'Our Services',
    img: require('./img/Studio2.webp'),
    btnText: 'Services',
    link: '/services',
  },
  {
    title: 'Our Team',
    img: require('./img/testBgSection.jpeg'),
    btnText: 'View Cracks',
    link: '/team',
  },
  {
    title: 'Locations & Contact',
    img: require('./img/testBgSection2.jpeg'),
    btnText: 'Contacts',
    link: '/contacts',
  },
];

export const servicesData = [
  {
    title: 'Tattoo',
    imgData: [
      require('./img/tattoo2Test.JPG'),
      require('./img/tattoo1Test.JPG'),
      require('./img/tattoo1Test.JPG'),
      require('./img/tattoo2Test.JPG'),
      require('./img/tattoo1Test.JPG'),
      require('./img/tattoo2Test.JPG'),
      require('./img/tattoo1Test.JPG'),
      require('./img/tattoo2Test.JPG'),
      require('./img/tattoo1Test.JPG'),
      require('./img/tattoo2Test.JPG'),
    ],
  },
  {
    title: 'Laser removal',
    imgData: [
      require('./img/laser1Test.jpeg'),
      require('./img/laser2Test.jpg'),
      require('./img/laser2Test.jpg'),
      require('./img/laser1Test.jpeg'),
      require('./img/laser2Test.jpg'),
      require('./img/laser1Test.jpeg'),
      require('./img/laser2Test.jpg'),
      require('./img/laser1Test.jpeg'),
    ],
  },
  {
    title: 'Piercing',
    imgData: [
      require('./img/piercing1Test.jpeg'),
      require('./img/piercing2Test.jpeg'),
      require('./img/piercing2Test.jpeg'),
      require('./img/piercing1Test.jpeg'),
      require('./img/piercing2Test.jpeg'),
      require('./img/piercing1Test.jpeg'),
      require('./img/piercing2Test.jpeg'),
      require('./img/piercing1Test.jpeg'),
    ],
  },
];

export const ourTeamData = [
  {
    title: 'Adri',
    imgData: [require('./img/swiperImg1.jpeg')],
  },
  {
    title: 'Sofi',
    imgData: [require('./img/swiperImg2.jpeg')],
  },
  {
    title: 'Marlon',
    imgData: [require('./img/swiperImg3.jpg')],
  },
];

export const menuBarData = [
  { link: '/', title: 'Home' },
  { link: '/about', title: 'About' },
  { link: '/services', title: 'Services' },
  { link: '/team', title: 'Our Team' },
  { link: '/contacts', title: 'Contacts' },
];

import { AiOutlineInstagram } from 'react-icons/ai';

export const footerIconsData = [
  {
    link: 'https://www.instagram.com/tattoo_blackrituals/',
    icon: AiOutlineInstagram,
  },
];
