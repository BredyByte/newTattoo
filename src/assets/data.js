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
    route: 'tattoo',
    linkPhoto: require('./img/tattoo2Test.JPG'),
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
    route: 'laser_removal',
    linkPhoto: require('./img/laser1Test.jpeg'),
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
    route: 'piercing',
    linkPhoto: require('./img/piercing1Test.jpeg'),
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
    title: 'adriannistal_latinta',
    linkPhoto: require('./img/swiperImg1.jpeg'),
    route: 'adriannistal_latinta',
    imgData: [require('./img/tattoo2Test.JPG')],
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aliquid, architecto, aspernatur cumque dicta ducimus enim incidunt
          mollitia nam natus necessitatibus nihil nostrum odit pariatur
          mollitia nam natus necessitatibus nihil nostrum odit pariatur
          mollitia nam natus necessitatibus nihil nostrum odit pariatur,
          mollitia nam natus necessitatibus nihil nostrum odit pariatur
          provident rem, similique tempora voluptatem.`,
    social: [
      {
        title: 'Intagram',
        link: 'https://www.instagram.com/adriannistal_latinta/',
      },
    ],
    style: ['COLORWORK', 'JAPANESEWORK', 'HANDWORK'],
  },
  {
    title: 'tattoo.soff',
    linkPhoto: require('./img/swiperImg2.jpeg'),
    route: 'tattoo_soff',
    imgData: [
      require('./img/tattoo2Test.JPG'),
      require('./img/tattoo1Test.JPG'),
      require('./img/tattoo2Test.JPG'),
      require('./img/tattoo1Test.JPG'),
      require('./img/tattoo2Test.JPG'),
      require('./img/tattoo1Test.JPG'),
      require('./img/tattoo2Test.JPG'),
      require('./img/tattoo1Test.JPG'),
    ],
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aliquid, architecto, aspernatur cumque dicta ducimus enim incidunt
          mollitia nam natus necessitatibus nihil nostrum odit pariatur
          provident rem, similique tempora voluptatem.`,
    social: [
      {
        title: 'Intagram',
        link: 'https://www.instagram.com/tattoo.soff/',
      },
    ],
    style: ['FINE LINE', 'BLACKWORK', 'DOTWORK'],
  },
  {
    title: 'lyon_noirtattoo',
    linkPhoto: require('./img/swiperImg3.jpg'),
    route: 'lyon_noirtattoo',
    imgData: [
      require('./img/tattoo2Test.JPG'),
      require('./img/tattoo1Test.JPG'),
      require('./img/tattoo2Test.JPG'),
      require('./img/tattoo1Test.JPG'),
    ],
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          provident rem, similique tempora voluptatem.`,
    social: [
      {
        title: 'Intagram',
        link: 'https://www.instagram.com/lyon_noirtattoo/',
      },
    ],
    style: ['DOTWORK', 'BLXCKWORK'],
  },
  {
    title: 'elf.f_tattoo',
    route: 'elf.f_tattoo',
    linkPhoto: require('./img/swiperImg2.jpeg'),
    imgData: [
      require('./img/tattoo2Test.JPG'),
      require('./img/tattoo1Test.JPG'),
      require('./img/tattoo2Test.JPG'),
    ],
    desc: 'Bio coming soon',
    social: [
      {
        title: 'Intagram',
        link: 'https://www.instagram.com/elf.f_tattoo/',
      },
    ],
    style: ['PIERCING', 'ANYSINGWORK', 'TATTOOWORK'],
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
