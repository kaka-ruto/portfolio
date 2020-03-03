module.exports = {
  siteTitle: 'Kaka Ruto | Software Engineer',
  siteDescription:
    'Collins Ruto is a software engineer based in Nairobi, Kenya who specializes in the design and implementation of scalable, highly available APIs in Ruby, Go and GraphQL.',
  siteKeywords:
    'Collins Ruto, Kaka Ruto, borenho, software engineer, software developer, backend engineer, ruby developer, Golang',
  siteUrl: 'https://collinsruto.com',
  blogUrl: 'https://blog.collinsruto.com',
  coursesUrl: 'https://www.codingshade.com',
  siteLanguage: 'en_US',

  googleVerification: 'process.env.GOOGLE_VERIFICATION',

  name: 'Collins Ruto',
  location: 'Nairobi, Kenya',
  email: 'kaka@collinsruto.com',
  github: 'https://github.com/borenho/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/borenho/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rutocollins/',
    },
    {
      name: 'Stackoverflow',
      url: 'https://stackoverflow.com/users/6488361/ruto-collins',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kaka_ruto_/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kaka_ruto',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@kaka_ruto',
  googleAnalyticsID: 'process.env.GOOGLE_ANALYTICS_ID',
  googleTagManagerID: 'process.env.GOOGLE_TAG_MANAGER_ID',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
