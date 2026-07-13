// ============================================================================
//  📚  GYAANVAULT — SPPU M.Sc. Data Science notes data (single source of truth)
//  Savitribai Phule Pune University · M.Sc. Data Science · NEP 2020 CBCS
//  (Structure & practical lists verified against the official 2023-24 syllabus.)
//
//  The entire /notes UI is generated from THIS file — no subject is hardcoded
//  in the components. To publish material you only ever edit this file.
//
//  ── HOW TO ADD YOUR LINKS (Sem I / II) ───────────────────────────────────
//  Two ways to host a file:
//   (A) LOCAL (already used for the 6 uploaded PDFs): drop the PDF in
//       /public/study-material/ and set url to "/study-material/<file>.pdf".
//   (B) GOOGLE DRIVE: paste the file's "view" link; the Download button
//       auto-derives a direct-download link from it.
//  For the resource you have, set available: true and fill `url`:
//    resources.notes:          typed/handwritten notes PDF
//    resources.questionPapers: past or sample question papers
//    resources.practicals:     solved practical manual (labs)
//    resources.interviewPrep:  curated Q&A for that subject
//  Example:
//    notes: sm("DS-501-...-Notes.pdf")
//
//  ── HOW TO ADD SEMESTER III / IV LATER (no component edits needed) ────────
//  Sem III & IV already exist with the real course codes and comingSoon:true.
//  When you have the material: (1) remove `comingSoon: true` from that
//  semester, and (2) fill each subject's tags + resources like Sem I / II.
//  The accordions, search, filters and cards all update automatically.
// ============================================================================

// Shorthand for a file you dropped in /public/study-material/.
//   sm("DS-501-Notes.pdf")  ->  { available: true, url: "/study-material/DS-501-Notes.pdf" }
// For a Google Drive link, just write the object yourself:
//   { available: true, url: "https://drive.google.com/file/d/XXX/view" }
export const sm = (file) => ({ available: true, url: `/study-material/${file}` });

// Small helper so every subject gets the same 4-resource shape without repetition.
function resources(overrides = {}) {
  const empty = { available: false, url: "" };
  return {
    notes: { ...empty, ...overrides.notes },
    questionPapers: { ...empty, ...overrides.questionPapers },
    practicals: { ...empty, ...overrides.practicals },
    interviewPrep: { ...empty, ...overrides.interviewPrep },
  };
}

// Human labels + order for the four resource types (used by tabs and filters).
export const RESOURCE_TYPES = [
  { key: "notes", label: "Notes" },
  { key: "questionPapers", label: "Question Papers" },
  { key: "practicals", label: "Practicals" },
  { key: "interviewPrep", label: "Interview Prep" },
];

// ── General (non-subject) resources shown as a strip on the page ───────────
export const generalResources = [
  {
    title: "Full Syllabus PDF",
    description: "Official SPPU M.Sc. Data Science NEP 2020 CBCS syllabus (all semesters).",
    url: "/study-material/MSC-DS-Syllabus.pdf",
  },
  {
    title: "Research Methodology (DS-531-RM) Guidelines",
    description: "Course outline, research proposal format and evaluation guidelines for Research Methodology.",
    // TODO: add a dedicated RM guidelines link if you prepare one.
    url: "",
  },
  {
    title: "OJT / Industrial Training Guidelines",
    description: "On-Job Training (DS-581-OJT) & Sem-IV Industrial Training rules, report format and evaluation.",
    // TODO: add OJT guidelines link if you prepare one (also covered in the syllabus PDF).
    url: "",
  },
];

// ── Semester-wise curriculum ───────────────────────────────────────────────
// type: "core" | "elective" | "lab"
export const semesters = [
  {
    id: 1,
    slug: "semester-1",
    title: "Semester I",
    subjects: [
      {
        code: "DS-501-MJ",
        title: "Statistics for Data Science",
        type: "core",
        tags: ["Central Tendency", "Correlation", "Linear Regression", "Logistic Regression", "Probability", "Hypothesis Testing", "Sampling"],
        resources: resources({
          notes: sm("DS-501-Statistics-for-Data-Science-Notes.pdf"),
        }),
      },
      {
        code: "DS-502-MJ",
        title: "Computational Mathematics",
        type: "core",
        tags: ["Vector Spaces", "Eigenvalues", "Linear Maps", "Matrix Methods", "SVD", "Data Science Applications"],
        resources: resources({
          notes: sm("DS-502-Computational-Mathematics-Notes.pdf"),
        }),
      },
      {
        code: "DS-503-MJ",
        title: "Fundamentals of Data Science",
        type: "core",
        tags: ["Data Science Lifecycle", "Statistical Analysis", "Data Preprocessing", "Data Visualization", "EDA"],
        resources: resources({
          notes: sm("DS-503-Fundamentals-of-Data-Science-Notes.pdf"),
        }),
      },
      {
        code: "DS-504-MJP",
        title: "Lab Course on Statistics for Data Science",
        type: "lab",
        tags: ["Python", "Statistics", "Practical"],
        // Practical list — verbatim from the official DS-504-MJP syllabus.
        practicalList: [
          "Diagrammatic Representation and Descriptive Statistics for raw data (bar chart, line chart, pie chart etc.)",
          "Data Summaries: Measures of Central Tendency, Dispersion, Skewness and Kurtosis",
          "Implementation of Correlation and Linear Regression",
          "Problems on simple probability, conditional probability, Baye's theorem and independence of events",
          "Implementation of Logistic Regression",
          "Implementation of Hypothesis Testing – t-test, Chi-square, ANOVA, F-test",
          "Case study on a real-world dataset (e.g. Kaggle) applying all the above",
        ],
        resources: resources(),
      },
      {
        code: "DS-505-MJP",
        title: "Lab Based on Computational Mathematics",
        type: "lab",
        tags: ["Python", "Linear Algebra", "Practical"],
        practicalList: [
          "Practical based on application of vector spaces (Unit 1)",
          "Practical based on Eigenvalues, Eigenvectors & Inner Product Spaces (Unit 2)",
          "Practical based on Linear Maps (Unit 3)",
          "Practical based on Basic Matrix Methods for Applications (Unit 4)",
          "Mini case based on Mathematics Applied to Data Science (Unit 5) — 2 practicals",
        ],
        resources: resources(),
      },
      {
        code: "DS-510-MJ",
        title: "Data Mining and Data Warehousing",
        type: "elective",
        tags: ["Data Warehouse", "OLAP", "Association Rules", "Apriori", "Classification", "Clustering"],
        resources: resources({
          notes: sm("DS-510-Data-Mining-and-Data-Warehousing-Notes.pdf"),
        }),
      },
      {
        code: "DS-511-MJP",
        title: "Lab on Data Mining and Data Warehousing",
        type: "lab",
        tags: ["Python", "Data Mining", "Practical"],
        practicalList: [
          "Prepare a Scatter Plot (Forge / Iris dataset)",
          "Find all null values in a dataset and remove them",
          "Convert categorical values into numeric format for a dataset",
          "Implement Naïve Bayes",
          "Implement Decision Tree (whether or not to play tennis)",
          "Find decision boundary using a neural network on the two-moons dataset",
          "Implement k-Nearest Neighbours to build a prediction model (Forge dataset)",
          "Implement k-Means algorithm on a synthetic dataset",
          "Implement Agglomerative clustering on a synthetic dataset",
        ],
        resources: resources(),
      },
      {
        code: "DS-512-MJ",
        title: "Artificial Intelligence",
        type: "elective",
        tags: ["Intelligent Agents", "State Space Search", "BFS/DFS", "A* Search", "Knowledge Representation", "Logic"],
        resources: resources({
          notes: sm("DS-512-Artificial-Intelligence-Notes.pdf"),
        }),
      },
      {
        code: "DS-513-MJP",
        title: "Lab on Artificial Intelligence",
        type: "lab",
        tags: ["Python", "AI", "Practical"],
        practicalList: [
          "Find factorial of a given number",
          "Check whether a given number is prime or not",
          "Print the Fibonacci series",
          "Implement a Simple Chatbot",
          "Implement Breadth First Search (BFS) traversal",
          "Implement Depth First Search (DFS) traversal",
          "Implement the Water Jug problem",
          "Print the multiplication table of a given number",
        ],
        resources: resources(),
      },
      {
        code: "DS-531-RM",
        title: "Research Methodology",
        type: "core",
        tags: ["Research Process", "Literature Review", "Research Design", "Hypothesis", "Sampling", "Report Writing", "Publication Ethics"],
        resources: resources(),
      },
    ],
  },
  {
    id: 2,
    slug: "semester-2",
    title: "Semester II",
    subjects: [
      {
        code: "DS-551-MJ",
        title: "Database Technologies",
        type: "core",
        tags: ["SQL", "NoSQL", "MongoDB", "Neo4j", "Data Modeling", "Map-Reduce", "Polyglot Persistence"],
        resources: resources({
          notes: sm("DS-551-Database-Technologies-Notes.pdf"),
        }),
      },
      {
        code: "DS-552-MJ",
        title: "Machine Learning",
        type: "core",
        tags: ["Supervised Learning", "Regression", "Classification", "SVM", "KNN", "Clustering", "Association Rules"],
        resources: resources({
          notes: sm("DS-552-Machine-Learning-Notes.pdf"),
        }),
      },
      {
        code: "DS-553-MJ",
        title: "Python Programming for Data Science",
        type: "core",
        tags: ["Python", "Lists & Dicts", "Functions", "Modules", "NumPy", "Pandas"],
        resources: resources({
          notes: sm("DS-553-Python-Programming-for-Data-Science-Notes.pdf"),
        }),
      },
      {
        code: "DS-554-MJP",
        title: "Lab Course on Database Technology",
        type: "lab",
        tags: ["SQL", "MongoDB", "Neo4j", "Practical"],
        practicalList: [
          "Data Query Language (DQL): SELECT with WHERE, ORDER BY, logical operators, scalar & aggregate functions (IIT Bombay Virtual Lab)",
          "Assignment 1: Model & query a Movie / Actor database (MongoDB document database)",
          "Assignment 2: Model & query a Book–Publisher system (MongoDB document database)",
          "Assignment 3: Model & query a Hospital database (MongoDB document database)",
          "Assignment 4 (Neo4j): Song database — artists, songs, recording studios & companies",
          "Assignment 5 (Neo4j): Employee database — departments, skillsets & projects",
        ],
        resources: resources(),
      },
      {
        code: "DS-555-MJP",
        title: "Lab Course on Machine Learning",
        type: "lab",
        tags: ["Python", "Scikit-Learn", "Practical"],
        practicalList: [
          "Prepare a Scatter Plot (Forge / Iris dataset)",
          "Find all null values in a dataset and remove them",
          "Convert categorical values into numeric format for a dataset",
          "Implement simple Linear Regression for predicting house price",
          "Implement multiple Linear Regression for a given dataset",
          "Implement Polynomial Regression for a given dataset",
          "Implement Naïve Bayes",
          "Implement Decision Tree (whether or not to play tennis)",
          "Implement linear SVM",
          "Find decision boundary using a neural network with 10 hidden units (two-moons dataset)",
          "Transform data with Principal Component Analysis (PCA)",
          "Implement k-Nearest Neighbours to build a prediction model (Forge dataset)",
          "Implement k-Means algorithm on a synthetic dataset",
          "Implement Agglomerative clustering on a synthetic dataset",
        ],
        resources: resources(),
      },
      {
        code: "DS-560-MJ",
        title: "Big Data",
        type: "elective",
        tags: ["Hadoop", "HDFS", "MapReduce", "Spark", "Hive", "Big Data Visualization"],
        resources: resources({
          notes: sm("DS-560-Big-Data-Notes.pdf"),
        }),
      },
      {
        code: "DS-561-MJP",
        title: "Lab Course on Big Data",
        type: "lab",
        tags: ["Hadoop", "Spark", "Practical"],
        practicalList: [
          "Data Ingestion & Storage: load a large dataset into HDFS; compare storage formats; store processed data in MongoDB",
          "Data Preprocessing & Cleaning with Apache Spark (missing values, outliers, noise); train/test split",
          "Data Analysis & Mining: implement an ML algorithm (Decision Tree / Logistic Regression) with Apache Mahout; evaluate metrics",
          "Data Visualization of a multi-dimensional dataset (Tableau / D3.js)",
          "Scalability & Performance Optimization: scale up, profile and optimize (partitioning, caching)",
          "Case Study & Application on a chosen domain (healthcare / finance / marketing)",
        ],
        resources: resources(),
      },
      {
        code: "DS-562-MJ",
        title: "Deep Learning",
        type: "elective",
        tags: ["Neural Networks", "CNN", "RNN", "LSTM", "Reinforcement Learning", "TensorFlow", "Keras"],
        resources: resources({
          notes: sm("DS-562-Deep-Learning-Notes.pdf"),
        }),
      },
      {
        code: "DS-563-MJP",
        title: "Lab Course on Deep Learning",
        type: "lab",
        tags: ["TensorFlow", "Keras", "Practical"],
        practicalList: [
          "Introduction to Deep Learning: feedforward network on XOR; MLP on MNIST; gradient descent & backprop from scratch; optimizers; autoencoder",
          "Neural Network Fundamentals: MLP on MNIST; MLP from scratch (NumPy); CNN on CIFAR-10; RNN-LSTM sentiment analysis",
          "Convolutional Neural Networks (CNNs): CIFAR-10 CNN, transfer learning (VGG/ResNet), object detection, feature-map visualization",
          "Recurrent Neural Networks (RNNs): RNN from scratch, LSTM sentiment analysis, char-level text generation, seq2seq translation, GRU stock prediction",
          "Ethical Considerations in Deep Learning: differential privacy, explainable AI, facial recognition & fairness case studies",
        ],
        resources: resources(),
      },
      {
        code: "DS-581-OJT",
        title: "On Job Training in IT Industry / Summer Project",
        type: "core",
        infoOnly: true,
        info: "A 120-hour On-Job Training / summer project undertaken in industry immediately after the Semester-II examination. There are no lecture notes — a college mentor monitors progress, weekly progress reports are submitted, and the final report & presentation are evaluated by the examination panel. See the OJT guidelines in the General Resources strip above.",
        tags: ["Internship", "Industry", "120 Hours"],
        resources: resources(),
      },
    ],
  },
  {
    id: 3,
    slug: "semester-3",
    title: "Semester III",
    comingSoon: true,
    subjects: [
      { code: "DS-601-MJ", title: "Data Visualization and Analytics", type: "core", tags: [], resources: resources() },
      { code: "DS-602-MJ", title: "Optimization Techniques", type: "core", tags: [], resources: resources() },
      { code: "DS-603-MJ", title: "Predictive Analysis", type: "core", tags: [], resources: resources() },
      { code: "DS-604-MJP", title: "Lab Course on Data Visualization and Analytics", type: "lab", tags: [], resources: resources() },
      { code: "DS-605-MJP", title: "Lab Course on Optimization Techniques and Predictive Analysis", type: "lab", tags: [], resources: resources() },
      { code: "DS-610-MJ", title: "Exploratory Data Analysis (Elective)", type: "elective", tags: [], resources: resources() },
      { code: "DS-611-MJP", title: "Lab Course on Exploratory Data Analysis", type: "lab", tags: [], resources: resources() },
      { code: "DS-612-MJ", title: "Business Informatics (Elective)", type: "elective", tags: [], resources: resources() },
      { code: "DS-613-MJP", title: "Lab Course on Business Informatics", type: "lab", tags: [], resources: resources() },
      { code: "DS-631-RP", title: "Research Project Work", type: "core", tags: [], resources: resources() },
    ],
  },
  {
    id: 4,
    slug: "semester-4",
    title: "Semester IV",
    comingSoon: true,
    subjects: [
      { code: "DS-651-MJP", title: "Full Time Industrial Training (IT)", type: "core", tags: [], resources: resources() },
      { code: "DS-652-MJ", title: "MOOC Courses / Online Courses (Elective)", type: "elective", tags: [], resources: resources() },
      { code: "DS-681-RP", title: "Research Work / Research Paper in Journal", type: "core", tags: [], resources: resources() },
    ],
  },
];

// ── Auto-attach generated study material by course code ────────────────────
// Solved practical manuals (labs), interview prep & sample question papers
// (theory subjects) are generated into /public/study-material/ by
// `node scripts/generate-content.mjs`. Mapping them here (instead of inside
// every subject) keeps the curriculum above clean. To add more later, drop the
// PDF in the folder and add a line here — or set it inline with sm(...).
const STUDY_MEDIA = {
  // Labs → solved practical manuals
  "DS-504-MJP": { practicals: "DS-504-Statistics-Lab-Solved-Practicals.pdf" },
  "DS-505-MJP": { practicals: "DS-505-Computational-Mathematics-Lab-Solved-Practicals.pdf" },
  "DS-511-MJP": { practicals: "DS-511-Data-Mining-Lab-Solved-Practicals.pdf" },
  "DS-513-MJP": { practicals: "DS-513-Artificial-Intelligence-Lab-Solved-Practicals.pdf" },
  "DS-554-MJP": { practicals: "DS-554-Database-Technology-Lab-Solved-Practicals.pdf" },
  "DS-555-MJP": { practicals: "DS-555-Machine-Learning-Lab-Solved-Practicals.pdf" },
  "DS-561-MJP": { practicals: "DS-561-Big-Data-Lab-Solved-Practicals.pdf" },
  "DS-563-MJP": { practicals: "DS-563-Deep-Learning-Lab-Solved-Practicals.pdf" },
  // Theory → interview prep + sample question paper
  "DS-501-MJ": { interviewPrep: "DS-501-Statistics-Interview-Prep.pdf", questionPapers: "DS-501-Statistics-Sample-Question-Paper.pdf" },
  "DS-502-MJ": { interviewPrep: "DS-502-Computational-Mathematics-Interview-Prep.pdf", questionPapers: "DS-502-Computational-Mathematics-Sample-Question-Paper.pdf" },
  "DS-503-MJ": { interviewPrep: "DS-503-Fundamentals-of-Data-Science-Interview-Prep.pdf", questionPapers: "DS-503-Fundamentals-of-Data-Science-Sample-Question-Paper.pdf" },
  "DS-510-MJ": { interviewPrep: "DS-510-Data-Mining-Interview-Prep.pdf", questionPapers: "DS-510-Data-Mining-Sample-Question-Paper.pdf" },
  "DS-512-MJ": { interviewPrep: "DS-512-Artificial-Intelligence-Interview-Prep.pdf", questionPapers: "DS-512-Artificial-Intelligence-Sample-Question-Paper.pdf" },
  "DS-551-MJ": { interviewPrep: "DS-551-Database-Technologies-Interview-Prep.pdf", questionPapers: "DS-551-Database-Technologies-Sample-Question-Paper.pdf" },
  "DS-552-MJ": { interviewPrep: "DS-552-Machine-Learning-Interview-Prep.pdf", questionPapers: "DS-552-Machine-Learning-Sample-Question-Paper.pdf" },
  "DS-553-MJ": { interviewPrep: "DS-553-Python-Programming-Interview-Prep.pdf", questionPapers: "DS-553-Python-Programming-Sample-Question-Paper.pdf" },
  "DS-560-MJ": { interviewPrep: "DS-560-Big-Data-Interview-Prep.pdf", questionPapers: "DS-560-Big-Data-Sample-Question-Paper.pdf" },
  "DS-562-MJ": { interviewPrep: "DS-562-Deep-Learning-Interview-Prep.pdf", questionPapers: "DS-562-Deep-Learning-Sample-Question-Paper.pdf" },
};
for (const sem of semesters) {
  for (const sub of sem.subjects) {
    const media = STUDY_MEDIA[sub.code];
    if (!media) continue;
    for (const [key, file] of Object.entries(media)) sub.resources[key] = sm(file);
  }
}

// Badge label + style key per subject type (consumed by the UI).
export const TYPE_BADGES = {
  core: { label: "Core", className: "bg-brand-500/15 text-brand-300 border-brand-400/30" },
  elective: { label: "Elective", className: "bg-accent/15 text-accent border-accent/30" },
  lab: { label: "Lab", className: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30" },
};
