// Topic-wise interview Q&A for GyaanVault, authored from the SPPU syllabus units.
const h1 = (v) => ({ t: "h1", v });
const p = (v) => ({ t: "para", v });
const muted = (v) => ({ t: "muted", v });
const hr = () => ({ t: "hr" });

// Build a Q&A section: array of [question, answer] -> blocks
const qa = (title, pairs) => [
  h1(title),
  ...pairs.flatMap(([q, a]) => [
    { t: "h3", v: "Q. " + q },
    p(a),
  ]),
];

const head = (subject) => [
  p(`Curated interview questions and answers for ${subject}, organised by topic from the SPPU M.Sc. Data Science syllabus. Ideal for viva, placement and internship preparation.`),
  muted("Tip: read the answer, then close the PDF and try to explain each concept aloud in your own words."),
  hr(),
];

function doc(code, file, title, badge, sections) {
  return { code, file, title, subtitle: "Interview Preparation — Topic-wise Q&A", badge, blocks: [...head(title), ...sections] };
}

export const interviews = [
  doc("DS-501-MJ", "DS-501-Statistics-Interview-Prep.pdf", "Statistics for Data Science", "Semester I · Core", [
    ...qa("Descriptive statistics", [
      ["What is the difference between mean, median and mode?", "Mean is the arithmetic average, median is the middle value of ordered data, and mode is the most frequent value. Median is preferred for skewed data because it is robust to outliers."],
      ["What do variance and standard deviation measure?", "Both measure dispersion around the mean. Variance is the average squared deviation; standard deviation is its square root, expressed in the same units as the data."],
      ["What is skewness and kurtosis?", "Skewness measures asymmetry of a distribution (positive = long right tail). Kurtosis measures 'tailedness' — high kurtosis means heavy tails and more outliers."],
    ]),
    ...qa("Correlation & regression", [
      ["What does the correlation coefficient r indicate?", "r lies between -1 and +1 and measures the strength and direction of a linear relationship. r=0 means no linear correlation. Correlation does not imply causation."],
      ["Difference between correlation and regression?", "Correlation quantifies the strength of association between two variables; regression models the relationship to predict one variable from another (Y = a + bX)."],
      ["What is R-squared?", "The proportion of variance in the dependent variable explained by the model. Adjusted R-squared penalises adding non-useful predictors."],
      ["What is multicollinearity?", "When predictor variables are highly correlated with each other, making coefficient estimates unstable. Detected via VIF; fixed by dropping/combining variables."],
    ]),
    ...qa("Probability & hypothesis testing", [
      ["State Bayes' theorem.", "P(A|B) = P(B|A)·P(A) / P(B). It updates the probability of a hypothesis given new evidence."],
      ["What is a p-value?", "The probability of observing the data (or more extreme) if the null hypothesis were true. If p < significance level (e.g. 0.05), we reject the null hypothesis."],
      ["When do you use a t-test vs a z-test?", "Use a z-test for large samples with known variance; a t-test for small samples with unknown variance."],
      ["What is ANOVA used for?", "To test whether the means of three or more groups differ significantly, using the F-statistic."],
      ["Explain the Central Limit Theorem.", "The sampling distribution of the sample mean approaches a normal distribution as sample size grows, regardless of the population's distribution."],
    ]),
  ]),
  doc("DS-502-MJ", "DS-502-Computational-Mathematics-Interview-Prep.pdf", "Computational Mathematics", "Semester I · Core", [
    ...qa("Linear algebra", [
      ["What is a vector space?", "A set of vectors closed under addition and scalar multiplication, satisfying axioms like associativity, existence of a zero vector and inverses."],
      ["What are eigenvalues and eigenvectors?", "For matrix A, a non-zero vector v is an eigenvector if Av = λv, where λ is the eigenvalue. They describe directions that are only scaled by the transformation."],
      ["What is the rank of a matrix?", "The number of linearly independent rows/columns; it equals the dimension of the column space."],
      ["What is Singular Value Decomposition (SVD)?", "Factorisation A = UΣVᵀ where U, V are orthogonal and Σ holds singular values. Used for dimensionality reduction, compression and Latent Semantic Indexing."],
      ["Why is linear algebra important in data science?", "Data is represented as matrices; operations like PCA, SVD, and neural-network computations are all linear-algebra based."],
    ]),
  ]),
  doc("DS-503-MJ", "DS-503-Fundamentals-of-Data-Science-Interview-Prep.pdf", "Fundamentals of Data Science", "Semester I · Core", [
    ...qa("Core concepts", [
      ["What are the 3 V's of Big Data?", "Volume (amount), Velocity (speed of generation) and Variety (structured, semi-structured, unstructured). Some add Veracity and Value."],
      ["Describe the data science lifecycle.", "Problem definition → data collection → cleaning/wrangling → exploratory analysis → modelling → evaluation → deployment → communication."],
      ["Structured vs unstructured data?", "Structured data fits tables (rows/columns, e.g. SQL); unstructured data has no fixed schema (text, images, audio)."],
    ]),
    ...qa("Preprocessing & EDA", [
      ["What is data wrangling?", "Cleaning and transforming raw data into a usable form — handling missing values, outliers, inconsistent formats and encoding."],
      ["How do you handle missing values?", "Remove rows/columns, or impute with mean/median/mode, forward-fill, or model-based imputation, depending on the amount and pattern of missingness."],
      ["Name distance measures for numeric data.", "Euclidean, Manhattan and Minkowski distances; used in clustering and KNN."],
      ["What is an outlier and how to detect it?", "An observation far from others. Detect via boxplots/IQR, z-score, or model-based methods; handle by removal, capping or transformation."],
    ]),
  ]),
  doc("DS-510-MJ", "DS-510-Data-Mining-Interview-Prep.pdf", "Data Mining and Data Warehousing", "Semester I · Elective", [
    ...qa("Data warehousing & OLAP", [
      ["What is a data warehouse?", "A central repository of integrated, subject-oriented, time-variant and non-volatile data used for decision support and analysis."],
      ["What is OLAP?", "Online Analytical Processing — enables multidimensional analysis with operations like roll-up, drill-down, slice and dice."],
      ["Star vs snowflake schema?", "A star schema has a central fact table linked to denormalised dimension tables; a snowflake schema normalises those dimensions into sub-tables."],
    ]),
    ...qa("Mining techniques", [
      ["Explain the Apriori algorithm.", "It finds frequent itemsets using the principle that any subset of a frequent itemset must also be frequent, then generates association rules with support and confidence thresholds."],
      ["What are support, confidence and lift?", "Support = frequency of an itemset; confidence = P(B|A) for rule A→B; lift = confidence / P(B), where lift > 1 indicates a positive association."],
      ["Classification vs clustering?", "Classification is supervised (predicts known labels); clustering is unsupervised (groups similar data without labels)."],
      ["How does a decision tree choose splits?", "By maximising information gain (entropy) or minimising Gini impurity at each node."],
    ]),
  ]),
  doc("DS-512-MJ", "DS-512-Artificial-Intelligence-Interview-Prep.pdf", "Artificial Intelligence", "Semester I · Elective", [
    ...qa("Agents & search", [
      ["What is an intelligent agent?", "An entity that perceives its environment through sensors and acts upon it through actuators to achieve goals."],
      ["Informed vs uninformed search?", "Uninformed (blind) search (BFS, DFS, UCS) uses no domain knowledge; informed search (Best-First, A*) uses heuristics to guide the search efficiently."],
      ["Explain the A* algorithm.", "A* selects the node minimising f(n) = g(n) + h(n), where g is cost-so-far and h is a heuristic estimate to the goal. It is optimal if h is admissible."],
      ["What is the difference between BFS and DFS?", "BFS explores level by level (complete, optimal for unweighted graphs) using a queue; DFS goes deep first using a stack/recursion (memory efficient, not guaranteed shortest path)."],
    ]),
    ...qa("Knowledge & reasoning", [
      ["What is knowledge representation?", "Encoding information about the world so an AI system can reason — via logic, semantic networks, frames or production rules."],
      ["Propositional vs predicate logic?", "Propositional logic deals with true/false statements; predicate (first-order) logic adds objects, predicates and quantifiers (∀, ∃) for richer expressiveness."],
      ["Forward vs backward chaining?", "Forward chaining reasons from facts to conclusions (data-driven); backward chaining starts from a goal and works back to supporting facts (goal-driven)."],
    ]),
  ]),
  doc("DS-551-MJ", "DS-551-Database-Technologies-Interview-Prep.pdf", "Database Technologies", "Semester II · Core", [
    ...qa("SQL & transactions", [
      ["What are ACID properties?", "Atomicity, Consistency, Isolation, Durability — guarantees that database transactions are processed reliably."],
      ["Difference between DDL, DML and DCL?", "DDL defines schema (CREATE, ALTER, DROP); DML manipulates data (INSERT, UPDATE, DELETE, SELECT); DCL controls access (GRANT, REVOKE, COMMIT, ROLLBACK)."],
      ["What is normalization?", "Organising data to reduce redundancy and anomalies, through normal forms (1NF–BCNF)."],
    ]),
    ...qa("NoSQL", [
      ["SQL vs NoSQL — when to use which?", "SQL suits structured data with fixed schema and complex joins; NoSQL suits large-scale, flexible-schema, high-velocity data (documents, graphs, key-value)."],
      ["What are aggregate data models?", "In NoSQL, data is grouped into aggregates (self-contained units like a document) that are read/written as a whole, aiding distribution."],
      ["What is Map-Reduce?", "A programming model that processes large datasets in parallel: Map emits key-value pairs, Reduce aggregates values by key."],
      ["What is polyglot persistence?", "Using different database technologies for different needs within one application (e.g. MongoDB for documents, Neo4j for relationships)."],
    ]),
  ]),
  doc("DS-552-MJ", "DS-552-Machine-Learning-Interview-Prep.pdf", "Machine Learning", "Semester II · Core", [
    ...qa("Fundamentals", [
      ["Supervised vs unsupervised learning?", "Supervised learning uses labelled data to predict outputs (classification/regression); unsupervised learning finds structure in unlabelled data (clustering, association)."],
      ["What is overfitting and how to prevent it?", "When a model learns noise and performs poorly on new data. Prevent via cross-validation, regularization (L1/L2), more data, or simpler models."],
      ["Explain the bias-variance tradeoff.", "High bias underfits (too simple); high variance overfits (too complex). Good models balance both to minimise total error."],
      ["What is regularization?", "Adding a penalty on coefficient size — Lasso (L1) can zero-out features; Ridge (L2) shrinks them; ElasticNet combines both."],
    ]),
    ...qa("Algorithms & evaluation", [
      ["How does SVM work?", "It finds the hyperplane that maximally separates classes; kernels map data to higher dimensions for non-linear separation."],
      ["How does KNN classify a point?", "By majority vote of its k nearest neighbours using a distance metric; simple but sensitive to k and feature scaling."],
      ["Explain precision, recall and F1-score.", "Precision = TP/(TP+FP), recall = TP/(TP+FN), F1 = harmonic mean of the two. Used when classes are imbalanced."],
      ["What is a confusion matrix?", "A table of TP, TN, FP, FN counts used to derive accuracy, precision, recall and other classification metrics."],
      ["K-Means vs hierarchical clustering?", "K-Means partitions into k clusters by minimising within-cluster distance (needs k in advance); hierarchical builds a dendrogram tree without pre-specifying k."],
    ]),
  ]),
  doc("DS-553-MJ", "DS-553-Python-Programming-Interview-Prep.pdf", "Python Programming for Data Science", "Semester II · Core", [
    ...qa("Python core", [
      ["List vs tuple vs set vs dictionary?", "List: ordered, mutable. Tuple: ordered, immutable. Set: unordered, unique elements. Dictionary: key-value pairs, mutable."],
      ["What are lambda, map, filter and reduce?", "lambda creates anonymous functions; map applies a function to each item; filter keeps items passing a condition; reduce aggregates items to a single value."],
      ["What is exception handling in Python?", "Using try/except/else/finally to catch and handle runtime errors gracefully without crashing the program."],
    ]),
    ...qa("NumPy & Pandas", [
      ["Difference between a Python list and a NumPy array?", "NumPy arrays are homogeneous, contiguous in memory and support vectorised operations, making them far faster for numeric computation."],
      ["What is a Pandas DataFrame?", "A 2-D labelled, tabular data structure with columns of potentially different types — the core object for data analysis in Pandas."],
      ["How do you handle missing data in Pandas?", "Detect with isnull(), remove with dropna(), or fill with fillna() using a constant, mean/median, or forward/backward fill."],
      ["What does groupby do?", "It splits data into groups, applies a function (e.g. aggregation) and combines the results — the split-apply-combine pattern."],
    ]),
  ]),
  doc("DS-560-MJ", "DS-560-Big-Data-Interview-Prep.pdf", "Big Data", "Semester II · Elective", [
    ...qa("Hadoop & Spark", [
      ["What is Hadoop?", "An open-source framework for distributed storage (HDFS) and processing (MapReduce) of large datasets across clusters of commodity hardware."],
      ["What is HDFS?", "The Hadoop Distributed File System — stores data as blocks replicated across nodes for fault tolerance and high throughput."],
      ["How does MapReduce work?", "Map processes input into key-value pairs; Shuffle groups by key; Reduce aggregates values per key — all in parallel across nodes."],
      ["Why is Spark faster than MapReduce?", "Spark processes data in-memory (RDDs/DataFrames) and uses a DAG execution engine, avoiding the repeated disk I/O of MapReduce."],
      ["What is the Hadoop ecosystem?", "Components like HDFS, MapReduce, YARN, Hive (SQL), Pig, HBase (NoSQL), Mahout (ML) and Spark."],
    ]),
  ]),
  doc("DS-562-MJ", "DS-562-Deep-Learning-Interview-Prep.pdf", "Deep Learning", "Semester II · Elective", [
    ...qa("Neural network basics", [
      ["What is a perceptron?", "The simplest neural unit — it computes a weighted sum of inputs, adds a bias, and applies an activation function to produce an output."],
      ["What is backpropagation?", "An algorithm that computes gradients of the loss w.r.t. weights using the chain rule and updates weights via gradient descent."],
      ["Name common activation functions.", "Sigmoid, tanh, ReLU (and variants like Leaky ReLU), and softmax for multi-class output layers."],
      ["What is the vanishing gradient problem?", "In deep networks, gradients shrink through many layers (especially with sigmoid/tanh), slowing learning. ReLU and architectures like LSTM mitigate it."],
    ]),
    ...qa("CNN & RNN", [
      ["What is a CNN and where is it used?", "A Convolutional Neural Network uses convolution and pooling layers to learn spatial features — ideal for image classification and computer vision."],
      ["What are convolution, pooling and stride?", "Convolution applies filters to detect features; pooling downsamples feature maps; stride is the step size of the filter."],
      ["What is transfer learning?", "Reusing a pre-trained model (e.g. VGG, ResNet) and fine-tuning it on a new, smaller dataset to save time and improve accuracy."],
      ["What is an RNN / LSTM used for?", "Recurrent networks model sequential data (text, time-series); LSTM/GRU add gates to remember long-term dependencies and avoid vanishing gradients."],
    ]),
  ]),
];
