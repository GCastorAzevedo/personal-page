const scale = [1, 0.8, 0.6, 0.4, 0.2];
const generateRange = (r, g, b, s) => `rgb(${r}, ${g}, ${b}, ${s})`;
const colorRanges = {
  paleViolet: scale.map((s) => generateRange(134, 45, 134, s)),
  violet: scale.map((s) => generateRange(103, 58, 183, s)),
  redViolet: scale.map((s) => generateRange(156, 39, 176, s)),
  mixedViolet: scale.map((s) => generateRange(132, 48, 179, s)),
  twoViolets: [generateRange(103, 58, 183, 1), generateRange(156, 39, 176, 1)],
  degradeViolet: [
    "#673ab7",
    "#6f37b6",
    "#7734b5",
    "#7f31b4",
    "#872fb3",
    "#8f2cb2",
    "#9729b1",
    "#9c27b0",
  ],
};

export const curriculumData = {
  leftColumn: {
    personalDetails: {
      name: "Gabriel Castor",
      jobTitle: "Software Developer",
      contact: {
        items: [
          {
            icon: (
              <i
                class="fa fa-envelope-o color-text-violet"
                aria-hidden="true"
              ></i>
            ), // <i class="fa fa-envelope color-text-violet" aria-hidden="true"></i>,
            content: "gabrielcastor1991@gmail.com",
          },
          {
            icon: <i className="fa fa-linkedin-square color-text-violet"></i>,
            content: "www.linkedin.com/in/gabriel-castor/",
          },
          {
            icon: (
              <i class="fa fa-github color-text-violet" aria-hidden="true"></i>
            ),
            content: "https://github.com/GCastorAzevedo",
          },
        ],
      },
    },
    programming: {
      items: [
        { letter: "Python", value: 35 },
        { letter: "Node/JS", value: 30 },
        { letter: "React", value: 15 },
        { letter: "Go", value: 10 },
        { letter: "C", value: 7 },
      ],
      colorRange: colorRanges["mixedViolet"],
    },
    languages: {
      items: [
        { language: "Portuguese (Native)", percentage: 100 },
        { language: "English (Fluent)", percentage: 85 },
        { language: "French (Advanced)", percentage: 70 },
        { language: "Italian (Intermediary)", percentage: 50 },
      ],
    },
    interests: {
      items: [
        { interest: "System Design & Architecture", percentage: 100 },
        { interest: "Data Engineering", percentage: 85 },
        { interest: "Machine Learning", percentage: 70 },
        { interest: "Statistical Modelling", percentage: 50 },
        { interest: "Quantum Gravity", percentage: 35 },
      ],
    },
    skills: {
      items: [
        { skill: "AWS cloud", radius: 50 },
        { skill: "Machine \n Learning", radius: 43 },
        { skill: "Statistical \n Analysis", radius: 57 },
        { skill: "Agile", radius: 35 },
        { skill: "API \n design", radius: 55 },
        { skill: "Back End \n engineering", radius: 58 },
      ],
      colorRange: colorRanges["degradeViolet"],
    },
  },
  rightColumn: {
    education: {
      items: [
        {
          startDate: "2017",
          content: [
            { value: "Thesis: Cluster analysis in high dimensions." },
            {
              value:
                "Key domains: Cluster Analysis, Statistics, Unsupervised Learning, Optimization, Outlier Analysis, Anomaly Detection, Data Visualization.",
            },
          ],
          institution: "Federal University of Rio de Janeiro",
          degree: "M.Sc. Applied Mathematics",
        },
        {
          startDate: "2017",
          content: [
            {
              value:
                "Information Retrieval (Natural Language) and Data Mining.",
            },
          ],
          institution: "Fundação Getúlio Vargas, Rio de Janeiro",
          degree: "Masters Extra Courses, Data Science",
        },
        {
          startDate: "2010",
          endDate: "2014",
          content: [{ value: "Scientific Computing Enphasis." }],
          institution: "Federal University of Rio de Janeiro",
          degree: "B.Sc. Applied Mathematics",
        },
        {
          startDate: "2013",
          content: [{ value: "Optics, Electronics, Scientific Computing." }],
          institution: "Institut d'Optique Graduate School, Paris",
          degree: "Academic exchange, Optics",
        },
      ],
    },
    professionalExperience: {
      items: [
        {
          startDate: "Sep 2021",
          current: true,
          content: [
            "Conceptualised and led the building of the main API to resolve asset locations into relevant metrics for Cervest, unblocking the development of new products and improvements.",
            "Main point of reference for services to feed the assets analytics to Cervest Front End, being responsible for releases, deployments, monitoring etc. Stack: Fastapi, Docker, Kubernetes, Terraform, Postgres",
            "Reduced calculation time of reports from 3m to 30s by leveraging pandas methods, optimising pydantic validations, and alleviating pressure from Postgres DB.",
            "Established the back-end backlog by mapping issues and architectural opportunities and documented the system, thus unblocking the technical roadmap.",
          ],
          role: "Python Engineer",
          company: "Cervest, London, UK",
        },
        {
          startDate: "Feb 2021",
          endDate: "Sep 2021",
          content: [
            "Automated the data ingestion by connecting to open banking data providers (PSD2-compliant APIs), fetching live transactions, and verifying the quality of data in collaboration with the Product team.",
            "Designed the core architecture of the business layer integrating third-party APIs.",
            "Restructured MongoDB aggregations and Node streams.",
          ],
          role: "Data Engineer",
          company: "Normative, Sweden",
        },
        {
          startDate: "2019",
          endDate: "2020",
          content: [
            "Redesigned the core data architecture serving the front end in GraphQL allowing clients to operate sub-systems on their distributed operations with proper sharing of asset data, leading to increased sales amid the covid crisis.",
            "Developed data pipelines for batch processing with PySpark - AWS lambda > S3 > Glue > Athena.",
            "Wrote integration tests (TDD), implemented gRPC services, conducted Postgres database operations.",
            // "Contributed to increasing sales despite the financial crisis by redesigning core data architecture serving the front end.",
            // "Investigated speed layers implementations for the company, aimed a highly scalable lambda architecture - in-house Kafka, AWS Kinesis, MQTT.",
            // "supplemented gRPC services.",
            // "Rewrite of legacy workers - AWS lambda + nodeJS + AWS cloudWatch + Grafana."
          ],
          role: "Software Developer",
          company: "Klappir Green Solutions, Iceland",
        },
        {
          startDate: "2018",
          endDate: "2019",
          content: [
            "Increased by ~ 25% the display of automobile and smartphone verticals by delivering ML pipelines with AWS Sagemaker and AWS Glue." +
              "Main stack: Python, Node, MongoDB, Scikit-learn, XGBoost, Tensorflow, Keras, AWS Sagemaker, Step Functions, Athena.",
            "Engineered batch processing pipelines for product score evaluation with AWS step functions and SQL Athena as Analytics.",
            "Crafted product matching aggregations on MongoDB, kickstarted solutions via NLP text and image similarity.",
            "Built and operated REST APIs, CIs in GitLab with Docker + Terraform (Golang + Elasticsearch; Flask; Node + MongoDB / PostgreSQL).",
            "Responsible for data exploration, analytics, visualisation, feature engineering, research of new ML techniques focused on e-commerce needs.",
          ],
          role: "Software Developer",
          company: "B2W Digital, Brazil",
        },
        {
          startDate: "2016",
          endDate: "2017",
          content: [
            "Lectured Calculus I and II (2017), Calculus III and IV (2016).",
          ],
          role: "Temporary Lecturer",
          company: "Federal University of Rio de Janeiro, Brazil",
        },
      ],
    },
    summary: {
      content: `
      Software Developer with over four years in climate tech building software and integrating data in SAAS contexts,
      currently the main point of reference for the analytics insights service at the Cervest Back End.
      Experienced in developing Python/Node services. Skilled in connecting heterogeneous data sources to databases,
      extracting, visualising, and processing insights using ML/statistics, and bridging data from the back end to the front end.
      MSc in Applied Mathematics, highly trained in Statistics, passionate about physics, aiming to earn a million dollars
      by solving the Yang-Mills mass gap problem. Multilingual. Fluent in Python and Javascript (+ React).
      `,
    },
  },
};
