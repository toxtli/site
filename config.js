const REPOSITORY = 'website';
const FIRST_NAME = 'Carlos';
const LAST_NAME = 'Toxtli';
const GITHUB_USERNAME = 'toxtli';
const TWITTER_USERNAME = 'ctoxtli';
const LINKEDIN_USERNAME = 'toxtli';
const PHONE_NUMBER = '650-564-4482';
const ADDRESS = 'Boston, MA';
const EMAIL = 'me@carlostoxtli.com';
const FOOTER_URL = 'https://www.carlostoxtli.com';

const BIO = `
  Carlos Toxtli is currently a Computer Science Ph.D. Candidate at Northeastern University where he is researching 
  intelligent tools to improve the Future of Work. In the past, he has worked at Microsoft Research, 
  Google Amazon, and the United Nations where he developed innovative tools to empower people through technology. 
  His research has been published in top venues and covered by news outlets. His passion for using AI to help 
  individuals grow at their job has led him to become a tech evangelist facilitating the continuous learning of 
  adults.  He has given more than one hundred talks in conferences around the world. He is also a serial 
  entrepreneur, creating multiple startups focused on fin-tech, e-commerce, automation, bots, and education.
`;

const EXPERIENCE_LIST = [
  {
    title: 'Northeastern University',
    company: 'Graduate Research Assistant',
    description: `Main Responsibilities:

        - The design, development and evaluation of A.I. tools to enable the Future of Work

      Main Achievements:

        - Publish research papers`,
    period: '',
  },
  {
    title: 'Snap Inc.',
    company: 'Research Intern',
    description: `
      Main Responsibilities:
      - Research and development of tools that understand context-aware user behavior.
      Main Achievements:
      
      - Big Data analysis
      - Causal Inference study`,
    period: '',
  },
  {
    title: 'Microsoft Research',
    company: 'Research Intern',
    description: `
      Main Responsibilities: 
      - Research and development of tools that enable assisted document’s comments management. Worked under the guidance of Elnaz Nouri, Robert Sim, and Ryen White.
      Main Achievements:
      - The first study about understanding the taxonomy of comments in documents. The outcome was a dataset and a Multi Context Neural Network architecture based on BERT for classifying comments to implement automatic comments triage.`,
    period: '',
  },
];

const EDUCATION_LIST = [
  {
    institution: 'Institution 1',
    qualification: 'Qualification 1',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    period: '2015',
  },
  {
    institution: 'Institution 2',
    qualification: 'Qualification 2',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    period: '2012',
  },
];

const LANGUAGES_AND_TOOLS = [
  { name: 'HTML5', iconClass: 'fa-html5' },
  { name: 'CSS3', iconClass: 'fa-css3-alt' },
  { name: 'Javascript', iconClass: 'fa-js-square' },
  { name: 'Angular', iconClass: 'fa-angular' },
  { name: 'React', iconClass: 'fa-react' },
  { name: 'NodeJS', iconClass: 'fa-node-js' },
  { name: 'SASS', iconClass: 'fa-sass' },
  { name: 'LESS', iconClass: 'fa-less' },
  { name: 'Wordpress', iconClass: 'fa-wordpress' },
  { name: 'Gulp', iconClass: 'fa-gulp' },
  { name: 'Grunt', iconClass: 'fa-grunt' },
  { name: 'NPM', iconClass: 'fa-npm' },
  { name: 'R', iconClass: 'fa-r-project' },
];

const SKILLS = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'];

const PORTFOLIO = {
  introParagraphs: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est laborum.`,
  ],
  items: [
    {
      name: 'First portfolio item',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
    {
      name: 'Second portoflio item name',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
  ],
};

const CERTIFICATIONS = [
  'Certification 1',
  'Certification 2',
  'Certification 3',
  'Award 1',
  'Award 2',
];

module.exports = {
  siteTitle: `${FIRST_NAME} ${LAST_NAME} Resume`, // <title>
  manifestName: `${FIRST_NAME} ${LAST_NAME} Resume`,
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#e84615',
  manifestThemeColor: '#e84615',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/photo.jpg',
  pathPrefix: `/${REPOSITORY}`, // This path is subpath of your hosting https://domain/portfolio
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  // bio
  bio: BIO,
  // experience
  experienceList: EXPERIENCE_LIST,
  // education
  educationList: EDUCATION_LIST,
  // languages & tools
  langTools: LANGUAGES_AND_TOOLS,
  // skills
  skills: SKILLS,
  // certifications
  certifications: CERTIFICATIONS,
  // portfolio
  portfolio: PORTFOLIO,
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: `https://github.com/${GITHUB_USERNAME}`,
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: `https://twitter.com/${TWITTER_USERNAME}`,
    },
  ],
  linkedin: LINKEDIN_USERNAME,
  github: GITHUB_USERNAME,
  twitter: TWITTER_USERNAME,
  email: EMAIL,
  phone: PHONE_NUMBER,
  address: ADDRESS,
  footerUrl: FOOTER_URL,
};
