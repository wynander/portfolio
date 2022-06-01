export const projects = [
  {
    title: 'Homebase',
    subtitle: 'Real Estate Trend Visualizer',
    description:
      "React web-app used to visualize housing trends. Employs GIS principles to join geospatial census data with housing trends characterized by Zillow's published economic data. Allows real estate investors to find potential markets using interactive data filtering. Offloads rendering to the GPU for better performance when visualizing large datasets. Without hardware acceleration, or with too low of system specs, the framerate of the app will drop drastically.",
    tags: ['React', 'JavaScript', 'DeckGL', 'CSS'],
    source: 'https://github.com/wynander/homebase',
    visit: 'https://mm2022-858dd.web.app/',
    id: 0,
    type: 'webapp',
    assets: [
      {
        source: '/homebase/HOMEBASE_BoundaryCAZoomed.png',
        description:
          'Custom data fetching hooks pull census data of city boundaries so the user can view detailed city outlines across the country. If all states are added the number of vertices shown is >1 million (~22,000 cities). ',
      },
      {
        source: '/homebase/HOMEBASE_Hex.png',
        description:
          'Trend algorithms determine appreciation rate and average price of homes in a given city. The hexagon layer is used to visualize the trends in a more performant and generalized way than the detailed city layer.',
      },
      {
        source: '/homebase/HOMEBASE_HexFilter.png',
        description:
          'Responsive filtering ranges allow the user to filter both layers by price and appreciation rate. ',
      },
    ],
    learnings: [],
  },
  {
    title: 'Spark',
    subtitle: 'Financial Modelling Tool',
    description:
      "A portfolio planning tool that creates financial models based on user's income, savings habits, investments, and ideal retirement scenario. Capable of modelling the effects of thousands of assets simultaneously while remaining responsive. Utilizes Formik and Yup to validate user input and create a clean, intuitive UI. ",
    tags: ['React', 'JavaScript', 'Firebase', 'CRUD'],

    source: 'https://github.com/wynander/spark',
    visit: 'https://spark-e53fb.web.app/',
    id: 1,
    type: 'webapp',
    assets: [
      {
        source: '/spark/spark-home.png',
        description:
          'Home page with navbar. Easy login with Google using the user-icon in the top right.',
      },
      {
        source: '/spark/spark-plot.png',
        description:
          'Responsive dashboard with controlled inputs that are used to generate a forward-looking financial model. Allows users to adjust some advanced parameters such as average return %, yearly inflation %, and yearly raise %.',
      },
      {
        source: '/spark/spark-assets.png',
        description:
          'Management module where an asset can be reviewed, updated, or deleted.',
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
    description:
      'Minimal and clean hosted portfolio website that utilizes SSR for improved loading and SEO. Click view more to return to the top.',
    image: '/images/3.jpg',
    tags: ['React', 'Next.js', 'Styled Components'],
    source: 'https://github.com/wynander/portfolio',
    visit: '/',
    id: 2,
    type: 'portfolio',
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
