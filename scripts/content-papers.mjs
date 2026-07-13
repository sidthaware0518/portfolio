// Sample / PRACTICE question papers for GyaanVault, written from the SPPU
// syllabus units. Clearly labelled as practice papers — NOT official SPPU papers.
const p = (v) => ({ t: "para", v });
const h1 = (v) => ({ t: "h1", v });
const h3 = (v) => ({ t: "h3", v });
const muted = (v) => ({ t: "muted", v });
const hr = () => ({ t: "hr" });

// Build a standard SPPU-style practice paper.
// short: 7 short questions (attempt any 5), long: array of {a, b} OR-pairs.
function paper({ code, file, title, badge, marks = 70, short, long }) {
  const blocks = [
    muted("⚠ This is a SAMPLE / PRACTICE question paper prepared for revision from the SPPU M.Sc. Data Science syllabus. It is NOT an official or past university examination paper. Use it only to test your preparation."),
    hr(),
    p(`Time: 3 Hours` + " ".repeat(30) + `Maximum Marks: ${marks}`),
    p("Instructions: (1) All questions carry equal weightage where indicated. (2) Figures to the right indicate full marks. (3) Draw neat diagrams / write code wherever necessary."),
    hr(),
    h1("Q1. Answer any FIVE of the following.            [5 × 2 = 10]"),
    ...short.map((q, i) => h3(`${String.fromCharCode(97 + i)}) ${q}`)),
  ];
  long.forEach((pair, i) => {
    blocks.push(h1(`Q${i + 2}. Answer the following.            [${pair.marks || 15}]`));
    blocks.push(h3("A) " + pair.a));
    blocks.push(p("OR"));
    blocks.push(h3("B) " + pair.b));
  });
  return { code, file, title, subtitle: "Sample / Practice Question Paper", badge, blocks };
}

export const papers = [
  paper({
    code: "DS-501-MJ", file: "DS-501-Statistics-Sample-Question-Paper.pdf",
    title: "Statistics for Data Science", badge: "Semester I · Core · Practice Paper",
    short: [
      "Define mean, median and mode.",
      "What is standard deviation?",
      "State the range of the correlation coefficient.",
      "Define skewness.",
      "State Bayes' theorem.",
      "What is a p-value?",
      "Differentiate correlation and regression.",
    ],
    long: [
      { a: "Explain measures of central tendency and dispersion with examples.", b: "Explain Karl Pearson's coefficient of correlation and its interpretation." },
      { a: "Explain simple and multiple linear regression. How is a model evaluated using R² and adjusted R²?", b: "Explain logistic regression and how it differs from linear regression." },
      { a: "Describe hypothesis testing. Explain t-test, chi-square test and ANOVA.", b: "Explain sampling techniques: simple random and stratified random sampling." },
    ],
  }),
  paper({
    code: "DS-502-MJ", file: "DS-502-Computational-Mathematics-Sample-Question-Paper.pdf",
    title: "Computational Mathematics", badge: "Semester I · Core · Practice Paper",
    short: [
      "Define a vector space.", "What is a basis of a vector space?",
      "Define eigenvalue and eigenvector.", "What is the rank of a matrix?",
      "State the inner product of two vectors.", "What is an orthogonal set?",
      "Define a linear map.",
    ],
    long: [
      { a: "Explain vector spaces, subspaces and linear independence with examples.", b: "Explain eigenvalues, eigenvectors and diagonalisation of a matrix." },
      { a: "Explain solving a system of linear equations using row reduction and echelon form.", b: "Explain Singular Value Decomposition (SVD) and QR decomposition." },
      { a: "Describe how matrix methods are applied in data science (SVD, NMF).", b: "Explain the Gram-Schmidt process and orthogonal projections." },
    ],
  }),
  paper({
    code: "DS-503-MJ", file: "DS-503-Fundamentals-of-Data-Science-Sample-Question-Paper.pdf",
    title: "Fundamentals of Data Science", badge: "Semester I · Core · Practice Paper", marks: 35,
    short: [
      "State the 3 V's of Big Data.", "What is structured data?",
      "Define an outlier.", "What is data wrangling?",
      "Name two data visualization tools.", "What is one-hot encoding?",
      "Define the data science lifecycle.",
    ],
    long: [
      { a: "Explain the data science lifecycle and the data scientist's toolbox.", b: "Explain types of data and problems with unstructured data.", marks: 10 },
      { a: "Explain data preprocessing: cleaning, transformation and encoding techniques.", b: "Explain proximity measures (Euclidean, Manhattan, Minkowski) and outlier detection.", marks: 10 },
      { a: "Explain basic and specialized data visualization tools with use cases.", b: "Explain descriptive vs inferential statistics in data science.", marks: 5 },
    ],
  }),
  paper({
    code: "DS-510-MJ", file: "DS-510-Data-Mining-Sample-Question-Paper.pdf",
    title: "Data Mining and Data Warehousing", badge: "Semester I · Elective · Practice Paper", marks: 35,
    short: [
      "What is a data warehouse?", "Define OLAP.", "What is market basket analysis?",
      "State support and confidence.", "What is a decision tree?",
      "Differentiate classification and clustering.", "What is the K-Means algorithm?",
    ],
    long: [
      { a: "Explain data warehouse architecture and OLAP operations.", b: "Explain the knowledge discovery process and data preprocessing.", marks: 10 },
      { a: "Explain the Apriori algorithm for mining association rules with an example.", b: "Explain multilevel and multidimensional association rules.", marks: 10 },
      { a: "Explain decision tree construction and attribute selection measures.", b: "Explain K-Means and Naïve Bayes classification.", marks: 5 },
    ],
  }),
  paper({
    code: "DS-512-MJ", file: "DS-512-Artificial-Intelligence-Sample-Question-Paper.pdf",
    title: "Artificial Intelligence", badge: "Semester I · Elective · Practice Paper", marks: 35,
    short: [
      "What is an intelligent agent?", "Define state space search.",
      "What is a heuristic?", "Differentiate BFS and DFS.",
      "What is the A* algorithm?", "Define propositional logic.",
      "What is forward chaining?",
    ],
    long: [
      { a: "Explain types of intelligent agents and their structure.", b: "Explain the Water Jug and 8-puzzle problems as state space search.", marks: 10 },
      { a: "Explain uninformed and informed search algorithms (BFS, DFS, A*).", b: "Explain the A* and AO* search algorithms with examples.", marks: 10 },
      { a: "Explain knowledge representation techniques.", b: "Explain propositional and predicate logic with forward/backward chaining.", marks: 5 },
    ],
  }),
  paper({
    code: "DS-551-MJ", file: "DS-551-Database-Technologies-Sample-Question-Paper.pdf",
    title: "Database Technologies", badge: "Semester II · Core · Practice Paper",
    short: [
      "State ACID properties.", "Differentiate DDL and DML.",
      "What is NoSQL?", "Define a document database.",
      "What is Map-Reduce?", "What is polyglot persistence?",
      "What is a version stamp?",
    ],
    long: [
      { a: "Explain SQL DDL, DML and DCL commands with examples and ACID properties.", b: "Explain aggregate data models and distribution models in NoSQL." },
      { a: "Explain document databases (MongoDB) and graph databases (Neo4j) with examples.", b: "Explain Map-Reduce and consistency in distributed databases." },
      { a: "Explain schema migrations and polyglot persistence.", b: "Explain the factors in choosing a database technology." },
    ],
  }),
  paper({
    code: "DS-552-MJ", file: "DS-552-Machine-Learning-Sample-Question-Paper.pdf",
    title: "Machine Learning", badge: "Semester II · Core · Practice Paper",
    short: [
      "Differentiate supervised and unsupervised learning.", "What is overfitting?",
      "Define the bias-variance tradeoff.", "What is regularization?",
      "State precision and recall.", "What is a confusion matrix?",
      "What is the K-Means algorithm?",
    ],
    long: [
      { a: "Explain linear, multiple and polynomial regression with residual analysis.", b: "Explain regularization methods: Lasso, Ridge and ElasticNet." },
      { a: "Explain SVM, KNN and Naïve Bayes classification algorithms.", b: "Explain decision tree classification (CART) and model evaluation using ROC." },
      { a: "Explain clustering methods: K-Means, hierarchical and density-based.", b: "Explain association rule mining: Apriori, Eclat and FP-trees." },
    ],
  }),
  paper({
    code: "DS-553-MJ", file: "DS-553-Python-Programming-Sample-Question-Paper.pdf",
    title: "Python Programming for Data Science", badge: "Semester II · Core · Practice Paper", marks: 35,
    short: [
      "Differentiate list and tuple.", "What is a lambda function?",
      "What is a dictionary?", "What is exception handling?",
      "What is a NumPy array?", "What is a Pandas DataFrame?",
      "What does groupby do?",
    ],
    long: [
      { a: "Explain Python data types, conditional statements and loops with examples.", b: "Explain lists, tuples, dictionaries and sets with operations.", marks: 10 },
      { a: "Explain functions, lambda, map, filter and reduce with examples.", b: "Explain modules, packages, file handling and exception handling.", marks: 10 },
      { a: "Explain NumPy arrays and their operations.", b: "Explain Pandas DataFrame, handling missing data and groupby.", marks: 5 },
    ],
  }),
  paper({
    code: "DS-560-MJ", file: "DS-560-Big-Data-Sample-Question-Paper.pdf",
    title: "Big Data", badge: "Semester II · Elective · Practice Paper", marks: 35,
    short: [
      "State the characteristics of Big Data.", "What is HDFS?",
      "What is MapReduce?", "Name two Hadoop ecosystem components.",
      "Why is Spark faster than MapReduce?", "What is Hive?",
      "What is a NoSQL database?",
    ],
    long: [
      { a: "Explain the characteristics, sources and applications of Big Data.", b: "Explain Hadoop architecture and its components (HDFS, MapReduce).", marks: 10 },
      { a: "Explain data preprocessing and real-time analytics in Big Data.", b: "Explain the Hadoop ecosystem: Pig, Hive, HBase, Mahout and Spark.", marks: 10 },
      { a: "Explain Big Data visualization tools and best practices.", b: "Explain scalability and performance optimization techniques.", marks: 5 },
    ],
  }),
  paper({
    code: "DS-562-MJ", file: "DS-562-Deep-Learning-Sample-Question-Paper.pdf",
    title: "Deep Learning", badge: "Semester II · Elective · Practice Paper", marks: 35,
    short: [
      "What is a perceptron?", "What is backpropagation?",
      "Name three activation functions.", "What is a CNN?",
      "Define convolution and pooling.", "What is transfer learning?",
      "What is an LSTM?",
    ],
    long: [
      { a: "Explain the perceptron, multilayer perceptron and backpropagation.", b: "Explain gradient descent, stochastic gradient descent and optimizers.", marks: 10 },
      { a: "Explain CNN architecture: convolution, pooling, strides and transfer learning.", b: "Explain RNNs, LSTM and GRU with applications.", marks: 10 },
      { a: "Explain reinforcement learning, MDP and Q-learning.", b: "Explain ethical considerations, bias and fairness in deep learning.", marks: 5 },
    ],
  }),
];
