import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project7 from "../assets/projects/project-7.jpg"; 
import project8 from "../assets/projects/project-8.jpg"; // Replace with an appropriate image path
import project9 from "../assets/projects/project-9.jpg"; // Replace with an appropriate image path
import project10 from "../assets/projects/project-10.jpg"; // Path to your project image
import project11 from "../assets/projects/project-11.jpg"; // Path to your project image


export const HERO_CONTENT = `I am a data-driven professional with a passion for uncovering insights and solving complex problems. With expertise in Python, SQL, and advanced machine learning frameworks like TensorFlow and PyTorch, I specialize in crafting efficient ETL pipelines, building scalable data architectures, and creating impactful visualizations. My experience spans across developing data-driven strategies, automating workflows, and delivering actionable business intelligence through tools like Tableau, Power BI, and AWS. I'm committed to leveraging my skills to drive innovation and create value in data analytics and engineering.`;
export const ABOUT_TEXT = `
      My journey into the world of data analytics began with a deep curiosity for uncovering patterns and insights hidden within data. 
      With a Bachelor of Technology in Electrical and Electronics Engineering from Mahindra École Centrale, Hyderabad, I laid the foundation for my technical skills, which I have since refined through my Master of Science in Data Analytics Engineering at Northeastern University, Boston.
  
      Over the years, I have gained hands-on experience in Python, SQL, and R, alongside tools like Tableau and Power BI, allowing me to transform raw data into meaningful insights. My professional journey includes working as a Data Analyst at Deep Red Ink Digital Marketing Agency, where I optimized workflows, developed interactive dashboards, and delivered data-driven solutions that enhanced client satisfaction and performance.
  
      Through academic and professional projects, I have designed ETL pipelines, built predictive models, and implemented clustering techniques to solve real-world challenges. This journey has been shaped by a constant drive to learn, adapt, and innovate, equipping me with the skills to approach data challenges from multiple perspectives and deliver impactful results.
  
      I am passionate about leveraging data to tell compelling stories and empower decision-making, always aiming to make a positive impact through my work.
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
  
  
  
];

export const PROJECTS = [
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
