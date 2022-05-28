export const projects = [
  {
    title: 'Homebase',
    subtitle: 'Real Estate Trend Visualizer',
    description:
      "Kepler.gl inspired web-app used to visualize housing trends. Employs GIS principles to join geospatial census data with housing trends characterized by Zillow's published economic data. Allows real estate investors to find potential markets using interactive data filtering. ",
    tags: ['React', 'JavaScript', 'DeckGL', 'CSS'],
    source: 'https://github.com/wynander/homebase',
    visit: 'https://mm2022-858dd.web.app/',
    id: 0,
    type: 'webapp',
    assets: [
      {
        source: '/homebase/HOMEBASE_BoundaryCAZoomed.png',
        description: 'View detailed city boundaries across the country',
      },
      {
        source: '/homebase/HOMEBASE_Hex.png',
        description:
          'Hexagonal grid showing average house prices and housing appreciation  trends',
      },
      {
        source: '/homebase/HOMEBASE_HexFilter.png',
        description: 'Filter the data for whats important to you',
      },
    ],
    learnings: [],
  },
  {
    title: 'Spark',
    subtitle: 'Financial Modelling Tool',
    description:
      "A portfolio planning tool that creates financial models based on user's income, savings habits, investments, and ideal retirement scenario. Capable of modelling the effects of thousands of assets simultaneously while still remaining responsive.  ",
    tags: ['React', 'JavaScript', 'Firebase'],

    source: 'https://github.com/wynander/spark',
    visit: 'https://spark-e53fb.web.app/',
    id: 1,
    type: 'webapp',
    assets: [
      {
        source: '/spark/spark-home.png',
        description: 'Home page',
      },
      {
        source: '/spark/spark-plot.png',
        description:
          'Responsive dashboard with stateful inputs that are used to generate a forward-looking financial model',
      },
      {
        source: '/spark/spark-assets.png',
        description:
          'Assset management module where asset characteristics can be reviewed, updated, or deleted.',
      },
      {
        source: '/spark/spark-db.png',
        description:
          "All user details, including financial model inputs and the user's asset collection, are stored to Firebase. On page load, Spark first verifies whether a user is logged in, then if that user has portfolio variables or assets, will automatically repopulate the relevant fields. ",
      },
    ],
    learnings: [],
  },
  {
    title: 'Portfolio',
    subtitle: 'Modern SSR Portfolio',
    description: 'This portfolio site was built using Next.js and Styled Components to showcase my work. Click view more to return to the top.',
    image: '/images/3.jpg',
    tags: ['React', 'Next.js', 'Styled Components'],
    source: 'https://google.com',
    visit: '/',
    id: 2,
    type: 'matlab',
    assets: [
      {
        source: '/portfolio/portfolio-dark.png',
        description: 'Dark Mode Theme',
      },
      {
        source: '/portfolio/portfolio-light.png',
        description: 'Light Mode Theme',
      },
    ],
    learnings: [],
  },
]

export const TimeLineData = [
  { year: 2017, text: 'Started my journey' },
  { year: 2018, text: 'Worked as a freelance developer' },
  { year: 2019, text: 'Founded JavaScript Mastery' },
  { year: 2020, text: 'Shared my projects with the world' },
  { year: 2021, text: 'Started my own platform' },
]
