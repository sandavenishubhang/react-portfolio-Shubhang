import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project7 from "../assets/projects/project-7.jpg"; 
import project8 from "../assets/projects/project-8.jpg"; // Replace with an appropriate image path
import project9 from "../assets/projects/project-9.jpg"; // Replace with an appropriate image path
import project10 from "../assets/projects/project-10.jpg"; // Path to your project image
import project11 from "../assets/projects/project-11.jpg"; // Path to your project image
import project12 from "../assets/projects/project-12.jpg";


export const HERO_CONTENT = `
I am a data-driven professional with a passion for solving complex problems through analytics and innovative solutions. With expertise in Python, SQL, and machine learning frameworks like TensorFlow and PyTorch, I specialize in developing efficient ETL pipelines, building scalable data architectures, and delivering impactful visualizations. My experience includes designing data-driven strategies, automating workflows, and providing actionable business intelligence using tools such as Tableau, Power BI, and AWS. I aim to leverage my skills to drive innovation, optimize processes, and deliver data-centric solutions.
`;
export const ABOUT_TEXT = `
My passion for data analytics stems from a desire to uncover meaningful patterns and insights hidden within datasets. With a Bachelor of Technology in Electrical and Electronics Engineering from Mahindra École Centrale and a Master of Science in Data Analytics Engineering from Northeastern University, I have cultivated a strong technical foundation that supports my expertise in Python, SQL, and R.

Professionally, I have honed my skills as a Data Analyst, working on projects that involved optimizing workflows, creating interactive dashboards, and implementing data-driven strategies to solve business challenges. My tenure at Deep Red Ink Consulting and PSR Tech Hub has equipped me with the ability to process and analyze large datasets, automate workflows, and deliver insights that drive decision-making.

In addition to my work experience, I have completed academic and independent projects such as designing ETL pipelines, implementing machine learning models, and conducting exploratory data analysis. These experiences have prepared me to tackle real-world challenges from multiple perspectives and deliver solutions that create value.

My goal is to leverage data to tell compelling stories, empower decision-makers, and contribute to impactful innovations in the field of data analytics and engineering.
`;


  
export const EXPERIENCES = [
  {
    year: "2021 - 2022",
    role: "Data Analyst",
    company: "Deep Red Ink Consulting",
    description: `
      Utilized Excel to process and clean raw lead datasets, ensuring data accuracy and readiness for analysis. Designed and developed dynamic dashboards using Power BI and Tableau to present actionable insights and track key performance metrics. Conducted in-depth data analysis and A/B testing with Python to evaluate marketing strategies and optimize campaign performance. Collaborated with cross-functional teams to understand client requirements and deliver data-driven solutions tailored to project goals.
    `,
    technologies: ["Python", "Power BI", "Tableau", "Excel", "Scikit-learn", "Google Analytics"],
  },
  {
    year: "2020 - 2021",
    role: "Data Analyst",
    company: "PSR Tech Hub",
    description: `
      Extracted, cleaned, and analyzed datasets of over 1 million rows using SQL and Excel, providing actionable insights that improved IT resource utilization. Developed Power BI dashboards to monitor system performance, cloud resource allocation, and operational metrics, enabling proactive decision-making. Conducted trend analysis in Excel and created detailed reports to improve the accuracy of project deliverables. Collaborated on cloud-based projects to optimize resource allocation and reduce operational costs.
    `,
    technologies: ["SQL", "Excel", "Power BI"],
  },
  
  
];

export const PROJECTS = [

 
  {
      title: "AWS Udemy Warehouse",
      image: project3,
      description:
        "An end-to-end data warehouse project leveraging AWS Lambda, Glue, Athena, and Tableau to automate and analyze Udemy course data. The pipeline automatically processes new data and updates structured tables for real-time insights.",
      technologies: ["AWS Lambda", "Glue", "S3", "Athena", "Python", "Tableau"],
      github: "https://github.com/sandavenishubhang/AWS-Udemy-warehouse",
      liveDemo: "https://public.tableau.com/app/profile/shubhang.yadav.sandaveni/viz/UdemyDatawarehouse/Dashboard1",
  },

  {
    title: "Music Streaming Data Warehouse",
    image: project1,
    description:
      "A data warehouse project analyzing user behavior in music consumption, leveraging PostgreSQL and Talend Studio for ETL, with Tableau dashboards for insights. Implements star schema design and OLAP queries for business intelligence.",
    technologies: ["PostgreSQL", "Talend Studio", "Tableau"],
    github: "https://github.com/sandavenishubhang/Music_Streaming_Data_Warehouse",
  },
  {
    title: "Stock Price Prediction",
    image: project2,
    description:
      "Developed a robust MLOps pipeline to predict stock prices using machine learning models. This project focused on data preprocessing, anomaly detection, and bias detection while leveraging tools like Docker and DVC for version control. Implemented automated workflows for training, validation, and deployment, ensuring seamless integration and monitoring in a production environment.",
    technologies: ["Python", "TensorFlow", "AWS", "Docker", "PostgreSQL", "DVC"],
    github: "https://github.com/Venkata1106/MLOPS_Group2", // Replace with actual link
  },

  {
    title: "Credit Card Default Prediction",
    image: project4,
    description:
      "Built a machine learning model to predict credit card defaults, leveraging advanced classification algorithms. This project involved extensive data preprocessing, feature engineering, and hyperparameter tuning to achieve high accuracy. The model helps financial institutions assess customer risk and make informed decisions.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/sandavenishubhang/CreditCardDefaultPrediction", // Replace with actual link
  },

  {
    title: "HCAHPS Patient Satisfaction Dashboard",
    image: project12, // Replace with the actual project image reference
    description:
      "An interactive Tableau dashboard analyzing HCAHPS Patient Satisfaction Scores across U.S. hospitals. Utilizes MySQL for data cleaning and preprocessing, with dynamic filters and visualizations to compare hospital performance, survey response rates, and cohort benchmarks.",
    technologies: ["Tableau", "MySQL", "Data Visualization"],
    liveDemo: "https://public.tableau.com/app/profile/shubhang.yadav.sandaveni/viz/HCAHPSPatientSatisfactionScores_17411230022710/HCAHPSDashboard?publish=yes",
  },
  
  {
    title: "Diabetes Prediction",
    image: project7, // Replace with an image related to the project
    description:
      "Developed a machine learning model to predict diabetes onset using healthcare datasets. The project involved data cleaning, exploratory data analysis, feature selection, and implementing classification models. Designed visualizations to communicate results effectively, helping healthcare providers make informed decisions.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/sandavenishubhang/Diabetes-Prediction",
  },
  
  {
    title: "Running Footwear Consumer Segmentation",
    image: project8, // Replace with an image related to the project
    description:
      "Based on a detailed consumer survey to gather data on running footwear preferences and purchasing behavior. Performed cluster analysis using unsupervised learning techniques to segment consumers into actionable groups. The insights enabled targeted marketing strategies, helping businesses tailor their product offerings. Visualized results with detailed graphs to enhance decision-making.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
    github: "https://github.com/sandavenishubhang/Running-Footwear-Consumer-Segmentation-Using-Cluster-Analysis",
  },
  
  {
    title: "U.S. Food Imports Analysis",
    image: project9, // Replace with an image related to the project
    description:
      "Analyzed U.S. food import trends using a dataset covering trade volumes and product categories. Created interactive dashboards and detailed visualizations to uncover insights about major import sources and commodities. The project leveraged advanced analytics to assist stakeholders in making data-driven decisions.",
    technologies: ["Python", "DataWrapper","Flourish", "Excel", "Pandas"],
    liveDemo: "https://sites.google.com/view/group9-us-food-imports", // Link to the live site
  },
  
  {
    title: "Connecticut Real Estate Analysis (2007-2021)",
    image: project10,
    description:
      "Analyzed Connecticut's real estate trends from 2007 to 2021. Explored property sales, assessed values, and geographical disparities through advanced data analytics and an interactive Tableau dashboard. Provided actionable insights to stakeholders.",
    technologies: ["Python", "Tableau", "Jupyter Notebook", "Excel"],
    github: "https://github.com/sandavenishubhang/Connecticut-Real-Estate-Analysis",
    liveDemo: "https://public.tableau.com/app/profile/shubhang.yadav.sandaveni/viz/ConnecticutResidentialRealEstateTrends/Dashboard1", // Leave blank if there's no live demo
  },
  {
    title: "Education Consultancy Management System",
    image: project11, // Replace with your project image
    description:
      "Developed a management system to streamline operations for education consultancy services. Features include student and course management, application tracking, and integrated reporting tools. The system simplifies administrative processes and enhances user experience.",
    technologies: ["MySQL", "MongoDB", "Python"],
    github: "https://github.com/sandavenishubhang/Education-Consultancy-Services-Management-System",
  
  },
];











export const CONTACT = {
  address: "23 Moraine St, Boston, MA 02130 ",
  phoneNo: "+1 (770)508-7046 ",
  email: "sshubhangyadav@gmail.com",
};
