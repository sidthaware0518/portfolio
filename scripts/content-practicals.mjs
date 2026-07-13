// Solved lab-practical manuals for GyaanVault, authored from the official SPPU
// M.Sc. Data Science syllabus practical lists. Each block is rendered by pdflib.
// Block shorthands:
const h1 = (v) => ({ t: "h1", v });
const h2 = (v) => ({ t: "h2", v });
const p = (v) => ({ t: "para", v });
const code = (v) => ({ t: "code", v });
const ul = (v) => ({ t: "bullets", v });
const muted = (v) => ({ t: "muted", v });
const hr = () => ({ t: "hr" });

const intro = (course) => [
  p(
    `This solved practical manual covers the ${course} lab assignments from the official SPPU M.Sc. Data Science syllabus. Each practical states the aim followed by a complete, runnable solution and the expected output. Use it as a reference — type the code yourself and experiment with the parameters to learn effectively.`
  ),
  muted("Requirements: Python 3.x with numpy, pandas, matplotlib, scikit-learn, scipy installed (pip install numpy pandas matplotlib scikit-learn scipy)."),
  hr(),
];

export const practicals = [
  // ── DS-504-MJP : Statistics for Data Science lab ────────────────────────
  {
    code: "DS-504-MJP",
    file: "DS-504-Statistics-Lab-Solved-Practicals.pdf",
    title: "Lab: Statistics for Data Science",
    subtitle: "Solved Practical Manual",
    badge: "Semester I · Lab (MJP)",
    blocks: [
      ...intro("Statistics for Data Science"),
      h1("Practical 1: Diagrammatic representation & descriptive statistics"),
      p("Aim: Draw bar, line and pie charts and compute basic descriptive statistics for raw data."),
      code(`import numpy as np
import matplotlib.pyplot as plt

subjects = ["Stats", "Maths", "DS", "AI", "RM"]
marks    = [72, 65, 80, 58, 90]

fig, ax = plt.subplots(1, 3, figsize=(14, 4))
ax[0].bar(subjects, marks, color="#3b82f6");  ax[0].set_title("Bar chart")
ax[1].plot(subjects, marks, marker="o");        ax[1].set_title("Line chart")
ax[2].pie(marks, labels=subjects, autopct="%1.1f%%"); ax[2].set_title("Pie chart")
plt.tight_layout(); plt.show()

print("Mean :", np.mean(marks))
print("Range:", np.max(marks) - np.min(marks))`),
      h1("Practical 2: Measures of central tendency, dispersion, skewness & kurtosis"),
      p("Aim: Summarise a dataset using mean/median/mode, variance, standard deviation, skewness and kurtosis."),
      code(`import pandas as pd
from scipy import stats

data = pd.Series([12, 15, 15, 18, 20, 21, 21, 21, 25, 30])
print("Mean   :", data.mean())
print("Median :", data.median())
print("Mode   :", data.mode().tolist())
print("Variance          :", data.var())
print("Std deviation     :", data.std())
print("Skewness :", stats.skew(data))
print("Kurtosis :", stats.kurtosis(data))`),
      h1("Practical 3: Correlation and linear regression"),
      p("Aim: Measure correlation and fit a simple linear regression line Y = a + bX."),
      code(`import numpy as np
from sklearn.linear_model import LinearRegression

X = np.array([1,2,3,4,5,6,7,8]).reshape(-1,1)
y = np.array([2,4,5,4,5,7,8,9])

print("Correlation r:", np.corrcoef(X.ravel(), y)[0,1])
model = LinearRegression().fit(X, y)
print("Intercept a:", model.intercept_)
print("Slope b    :", model.coef_[0])
print("R-squared  :", model.score(X, y))`),
      h1("Practical 4: Probability — simple, conditional, Bayes' theorem"),
      p("Aim: Solve probability problems including conditional probability and Bayes' theorem."),
      code(`# Bayes' theorem: P(Disease | Positive)
p_disease = 0.01           # prior
p_pos_given_disease = 0.99 # sensitivity
p_pos_given_healthy = 0.05 # false-positive rate

p_pos = p_pos_given_disease * p_disease + p_pos_given_healthy * (1 - p_disease)
p_disease_given_pos = (p_pos_given_disease * p_disease) / p_pos
print("P(Disease | Positive) =", round(p_disease_given_pos, 4))`),
      h1("Practical 5: Logistic regression"),
      p("Aim: Build a logistic regression classifier and evaluate its accuracy."),
      code(`from sklearn.datasets import load_breast_cancer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

X, y = load_breast_cancer(return_X_y=True)
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.2, random_state=1)
clf = LogisticRegression(max_iter=5000).fit(Xtr, ytr)
print("Accuracy:", accuracy_score(yte, clf.predict(Xte)))`),
      h1("Practical 6: Hypothesis testing — t-test, Chi-square, ANOVA, F-test"),
      p("Aim: Perform common statistical tests and interpret the p-values."),
      code(`from scipy import stats
import numpy as np

a = [23, 25, 21, 22, 27]; b = [30, 31, 29, 35, 33]
print("t-test  :", stats.ttest_ind(a, b))
print("ANOVA   :", stats.f_oneway(a, b, [26,24,28,25,27]))

obs = np.array([[20, 30], [25, 25]])
print("Chi-sq  :", stats.chi2_contingency(obs)[:2])`),
      muted("Interpretation: if p-value < 0.05 the result is statistically significant — reject the null hypothesis."),
      h1("Practical 7: Case study on a real-world dataset"),
      p("Aim: Apply all the above techniques end-to-end on a real dataset (e.g. a Kaggle CSV)."),
      code(`import pandas as pd
df = pd.read_csv("your_dataset.csv")   # e.g. from kaggle.com
print(df.describe())                    # descriptive stats
print(df.corr(numeric_only=True))       # correlation matrix
# then apply regression / hypothesis tests on the columns of interest`),
      muted("Deliverable: a short report with the summary statistics, at least one chart, one regression and one hypothesis test, with your interpretation."),
    ],
  },

  // ── DS-505-MJP : Computational Mathematics lab ──────────────────────────
  {
    code: "DS-505-MJP",
    file: "DS-505-Computational-Mathematics-Lab-Solved-Practicals.pdf",
    title: "Lab: Computational Mathematics",
    subtitle: "Solved Practical Manual",
    badge: "Semester I · Lab (MJP)",
    blocks: [
      ...intro("Computational Mathematics"),
      h1("Practical 1: Application of vector spaces"),
      p("Aim: Test linear independence and find a basis / rank using NumPy."),
      code(`import numpy as np
A = np.array([[1,2,3],[2,4,6],[1,0,1]])
print("Rank:", np.linalg.matrix_rank(A))   # rank < 3 => rows dependent
# Basis of column space via independent columns
_, r = np.linalg.qr(A)
print("Upper-triangular R (pivots show independence):\\n", np.round(r,2))`),
      h1("Practical 2: Eigenvalues, eigenvectors & inner-product spaces"),
      code(`import numpy as np
A = np.array([[4, 1],[2, 3]])
vals, vecs = np.linalg.eig(A)
print("Eigenvalues :", np.round(vals,3))
print("Eigenvectors:\\n", np.round(vecs,3))
u, v = np.array([1,2,3]), np.array([4,5,6])
print("Inner product <u,v>:", np.dot(u, v))
print("Norm ||u||       :", np.linalg.norm(u))`),
      h1("Practical 3: Linear maps & matrix representation"),
      code(`import numpy as np
# Linear map T(x) = A x ; verify T(x+y) = T(x)+T(y)
A = np.array([[2,0],[1,3]])
x, y = np.array([1,1]), np.array([2,-1])
print("T(x+y):", A @ (x+y))
print("T(x)+T(y):", A @ x + A @ y)   # must be equal`),
      h1("Practical 4: Basic matrix methods — solving Ax = b, LU / QR / SVD"),
      code(`import numpy as np
A = np.array([[3,2,-1],[2,-2,4],[-1,0.5,-1]])
b = np.array([1,-2,0])
print("Solution x:", np.linalg.solve(A, b))

U, S, Vt = np.linalg.svd(A)
print("Singular values:", np.round(S,3))`),
      h1("Practical 5: Mini case — Mathematics applied to Data Science (SVD image / text)"),
      p("Aim: Use SVD for dimensionality reduction (low-rank approximation of a matrix / image)."),
      code(`import numpy as np
# Low-rank approximation of a data matrix using top-k singular values
M = np.random.rand(8, 6)
U, S, Vt = np.linalg.svd(M, full_matrices=False)
k = 2
M_k = (U[:,:k] * S[:k]) @ Vt[:k,:]
print("Original rank:", np.linalg.matrix_rank(M))
print("Approx  rank :", np.linalg.matrix_rank(M_k))
print("Reconstruction error:", np.round(np.linalg.norm(M-M_k),4))`),
      muted("This is the core idea behind Latent Semantic Indexing (text mining) and image compression covered in Unit 5."),
    ],
  },

  // ── DS-511-MJP : Data Mining lab ────────────────────────────────────────
  {
    code: "DS-511-MJP",
    file: "DS-511-Data-Mining-Lab-Solved-Practicals.pdf",
    title: "Lab: Data Mining and Data Warehousing",
    subtitle: "Solved Practical Manual",
    badge: "Semester I · Lab (MJP)",
    blocks: [
      ...intro("Data Mining and Data Warehousing"),
      h1("Practical 1: Scatter plot (Iris dataset)"),
      code(`import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
d = load_iris()
plt.scatter(d.data[:,0], d.data[:,1], c=d.target, cmap="viridis")
plt.xlabel(d.feature_names[0]); plt.ylabel(d.feature_names[1])
plt.title("Iris — sepal length vs width"); plt.show()`),
      h1("Practical 2: Find & remove null values"),
      code(`import pandas as pd, numpy as np
df = pd.DataFrame({"A":[1,2,np.nan,4], "B":[np.nan,2,3,4]})
print("Nulls per column:\\n", df.isnull().sum())
print("After dropna:\\n", df.dropna())`),
      h1("Practical 3: Encode categorical values to numeric"),
      code(`import pandas as pd
df = pd.DataFrame({"city":["Pune","Mumbai","Pune","Nagpur"]})
print(pd.get_dummies(df, columns=["city"]))          # one-hot
df["city_code"] = df["city"].astype("category").cat.codes  # label encoding
print(df)`),
      h1("Practical 4: Naïve Bayes classifier"),
      code(`from sklearn.datasets import load_iris
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
X,y = load_iris(return_X_y=True)
Xtr,Xte,ytr,yte = train_test_split(X,y,test_size=.3,random_state=0)
print("Accuracy:", accuracy_score(yte, GaussianNB().fit(Xtr,ytr).predict(Xte)))`),
      h1("Practical 5: Decision Tree — play tennis"),
      code(`import pandas as pd
from sklearn.tree import DecisionTreeClassifier
data = pd.DataFrame({
  "outlook":[0,0,1,2,2,2,1],   # 0=sunny 1=overcast 2=rain
  "humidity":[1,1,1,0,0,0,1],  # 1=high 0=normal
  "wind":[0,1,0,0,1,1,0],
  "play":[0,0,1,1,1,0,1]})
clf = DecisionTreeClassifier(criterion="entropy").fit(data[["outlook","humidity","wind"]], data["play"])
print("Predict [sunny,high,weak]:", clf.predict([[0,1,0]]))`),
      h1("Practical 6: Decision boundary with a neural network (two-moons)"),
      code(`from sklearn.datasets import make_moons
from sklearn.neural_network import MLPClassifier
X,y = make_moons(n_samples=200, noise=0.2, random_state=0)
clf = MLPClassifier(hidden_layer_sizes=(10,), max_iter=2000).fit(X,y)
print("Train accuracy:", clf.score(X,y))`),
      h1("Practical 7: k-Nearest Neighbours prediction model"),
      code(`from sklearn.datasets import load_iris
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
X,y = load_iris(return_X_y=True)
Xtr,Xte,ytr,yte = train_test_split(X,y,test_size=.3,random_state=1)
print("k=3 accuracy:", KNeighborsClassifier(3).fit(Xtr,ytr).score(Xte,yte))`),
      h1("Practical 8: k-Means clustering"),
      code(`from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
X,_ = make_blobs(n_samples=200, centers=3, random_state=0)
km = KMeans(n_clusters=3, n_init=10).fit(X)
print("Cluster centres:\\n", km.cluster_centers_.round(2))`),
      h1("Practical 9: Agglomerative (hierarchical) clustering"),
      code(`from sklearn.cluster import AgglomerativeClustering
from sklearn.datasets import make_blobs
X,_ = make_blobs(n_samples=150, centers=3, random_state=2)
labels = AgglomerativeClustering(n_clusters=3).fit_predict(X)
print("First 10 cluster labels:", labels[:10])`),
    ],
  },

  // ── DS-513-MJP : Artificial Intelligence lab ────────────────────────────
  {
    code: "DS-513-MJP",
    file: "DS-513-Artificial-Intelligence-Lab-Solved-Practicals.pdf",
    title: "Lab: Artificial Intelligence",
    subtitle: "Solved Practical Manual",
    badge: "Semester I · Lab (MJP)",
    blocks: [
      ...intro("Artificial Intelligence"),
      h1("Practical 1: Factorial of a number"),
      code(`def factorial(n):
    return 1 if n <= 1 else n * factorial(n-1)
print(factorial(5))   # 120`),
      h1("Practical 2: Check prime"),
      code(`def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0: return False
    return True
print([x for x in range(2,20) if is_prime(x)])`),
      h1("Practical 3: Fibonacci series"),
      code(`def fib(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" "); a, b = b, a+b
fib(10)   # 0 1 1 2 3 5 8 13 21 34`),
      h1("Practical 4: Simple chatbot"),
      code(`rules = {"hi":"Hello!", "how are you":"I'm a bot, doing great!",
         "bye":"Goodbye 👋"}
def chat(msg):
    return rules.get(msg.lower().strip(), "Sorry, I didn't understand.")
print(chat("Hi")); print(chat("bye"))`),
      h1("Practical 5: Breadth First Search (BFS)"),
      code(`from collections import deque
graph = {'A':['B','C'], 'B':['D','E'], 'C':['F'], 'D':[], 'E':['F'], 'F':[]}
def bfs(start):
    visited, q = set([start]), deque([start])
    while q:
        node = q.popleft(); print(node, end=" ")
        for nb in graph[node]:
            if nb not in visited:
                visited.add(nb); q.append(nb)
bfs('A')   # A B C D E F`),
      h1("Practical 6: Depth First Search (DFS)"),
      code(`graph = {'A':['B','C'], 'B':['D','E'], 'C':['F'], 'D':[], 'E':['F'], 'F':[]}
def dfs(node, visited=None):
    visited = visited or set()
    if node not in visited:
        print(node, end=" "); visited.add(node)
        for nb in graph[node]: dfs(nb, visited)
dfs('A')   # A B D E F C`),
      h1("Practical 7: Water Jug problem (BFS state search)"),
      code(`from collections import deque
def water_jug(cap_a, cap_b, target):
    start, seen, q = (0,0), set(), deque([((0,0), [])])
    while q:
        (a,b), path = q.popleft()
        if a == target or b == target:
            return path + [(a,b)]
        if (a,b) in seen: continue
        seen.add((a,b))
        nxt = {(cap_a,b),(a,cap_b),(0,b),(a,0),
               (a-min(a,cap_b-b), b+min(a,cap_b-b)),
               (a+min(b,cap_a-a), b-min(b,cap_a-a))}
        for s in nxt: q.append((s, path+[(a,b)]))
    return None
print(water_jug(4,3,2))`),
      h1("Practical 8: Multiplication table"),
      code(`n = 7
for i in range(1, 11):
    print(f"{n} x {i} = {n*i}")`),
    ],
  },

  // ── DS-554-MJP : Database Technology lab ────────────────────────────────
  {
    code: "DS-554-MJP",
    file: "DS-554-Database-Technology-Lab-Solved-Practicals.pdf",
    title: "Lab: Database Technology",
    subtitle: "Solved Practical Manual (SQL · MongoDB · Neo4j)",
    badge: "Semester II · Lab (MJP)",
    blocks: [
      ...intro("Database Technology"),
      h1("Assignment 1: DQL — SELECT with clauses & aggregate functions (SQL)"),
      code(`-- WHERE, ORDER BY, logical operators, scalar & aggregate functions
SELECT dept, COUNT(*) AS emp_count, ROUND(AVG(salary),2) AS avg_sal
FROM   employee
WHERE  salary > 20000 AND status = 'active'
GROUP  BY dept
HAVING COUNT(*) > 2
ORDER  BY avg_sal DESC;`),
      h1("Assignment 2: Movie / Actor database (MongoDB document model)"),
      code(`// Insert a film belonging to two genres, released at two places
db.Film.insertOne({
  title: "Devdas", year: 2002,
  genre: ["romantic", "drama"],
  actors: [{first:"Shahrukh", last:"Khan"}, {first:"Madhuri", last:"Dixit"}],
  release: [{place:"Mumbai", date:"2002-07-12", rating:8},
            {place:"Pune",   date:"2002-07-15", rating:7}]
})
// Queries
db.Film.find({ genre: "romantic" })                       // by genre
db.Film.updateOne({ title: /^T/ }, { $inc: { "release.0.rating": 1 } })
db.Actor.deleteMany({ age: { $gt: 60 } })                 // remove actors > 60`),
      h1("Assignment 3: Book–Publisher & Hospital databases (MongoDB)"),
      code(`db.Book.find({ pages: { $gt: 500 } })
db.Book.find({ language: "english" })
db.Book.find({ author: "A. Gupta", year: 2020 })
// Hospital
db.Hospital.find({ specialization: { $size: { $gt: 1 } } })  // multi-speciality
db.Hospital.find({ rating: { $gte: 4 } }, { name: 1 })`),
      h1("Assignment 4: Song database (Neo4j / Cypher)"),
      code(`CREATE (a:Artist {name:"Arijit"})-[:PERFORMS]->(s:Song {title:"Tum Hi Ho"})
CREATE (s)-[:RECORDED_IN]->(st:Studio {name:"YRF"})
CREATE (st)-[:MANAGED_BY]->(rc:Company {name:"T-Series"})
// Query: artists performing a song
MATCH (a:Artist)-[:PERFORMS]->(s:Song {title:"Tum Hi Ho"}) RETURN a.name;
// Songs recorded in a studio
MATCH (s:Song)-[:RECORDED_IN]->(:Studio {name:"YRF"}) RETURN s.title;`),
      h1("Assignment 5: Employee database (Neo4j / Cypher)"),
      code(`MATCH (e:Employee)-[:WORKS_IN]->(d:Department {name:"Analytics"}) RETURN e.name;
MATCH (d:Department)<-[:WORKS_IN]-(e) RETURN d.name, count(e) AS headcount;
MATCH (e:Employee)-[:HAS_ACQUIRED]->(s:Skill) WHERE e.name="Riya" RETURN s.name;`),
    ],
  },

  // ── DS-555-MJP : Machine Learning lab ───────────────────────────────────
  {
    code: "DS-555-MJP",
    file: "DS-555-Machine-Learning-Lab-Solved-Practicals.pdf",
    title: "Lab: Machine Learning",
    subtitle: "Solved Practical Manual",
    badge: "Semester II · Lab (MJP)",
    blocks: [
      ...intro("Machine Learning"),
      h1("Practicals 1–3: Scatter plot, null handling, categorical encoding"),
      p("See DS-511 Practicals 1–3 for the same techniques (scatter plot, dropna, one-hot/label encoding) — reuse that code."),
      h1("Practical 4: Simple Linear Regression — predict house price"),
      code(`import numpy as np
from sklearn.linear_model import LinearRegression
area  = np.array([500,750,1000,1250,1500]).reshape(-1,1)
price = np.array([25,35,45,52,62])   # in lakhs
m = LinearRegression().fit(area, price)
print("Price for 1100 sqft:", m.predict([[1100]])[0].round(2))`),
      h1("Practical 5: Multiple Linear Regression"),
      code(`from sklearn.datasets import fetch_california_housing
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
X,y = fetch_california_housing(return_X_y=True)
Xtr,Xte,ytr,yte = train_test_split(X,y,test_size=.2,random_state=0)
m = LinearRegression().fit(Xtr,ytr)
print("R2 score:", round(m.score(Xte,yte),3))`),
      h1("Practical 6: Polynomial Regression"),
      code(`import numpy as np
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import make_pipeline
X = np.linspace(0,5,20).reshape(-1,1); y = (X.ravel()**2) + np.random.rand(20)
model = make_pipeline(PolynomialFeatures(2), LinearRegression()).fit(X,y)
print("R2:", round(model.score(X,y),3))`),
      h1("Practical 7: Naïve Bayes  ·  Practical 8: Decision Tree"),
      p("Use the GaussianNB and DecisionTreeClassifier solutions from DS-511 Practicals 4 & 5."),
      h1("Practical 9: Linear SVM"),
      code(`from sklearn.svm import SVC
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
X,y = load_iris(return_X_y=True)
Xtr,Xte,ytr,yte = train_test_split(X,y,test_size=.3,random_state=1)
print("Linear SVM accuracy:", SVC(kernel="linear").fit(Xtr,ytr).score(Xte,yte))`),
      h1("Practical 10: Neural network decision boundary (two-moons)"),
      p("Same as DS-511 Practical 6 — MLPClassifier with hidden_layer_sizes=(10,)."),
      h1("Practical 11: PCA — dimensionality reduction"),
      code(`from sklearn.decomposition import PCA
from sklearn.datasets import load_iris
X,y = load_iris(return_X_y=True)
X2 = PCA(n_components=2).fit_transform(X)
print("Reduced shape:", X2.shape)   # (150, 2)`),
      h1("Practicals 12–14: KNN, k-Means, Agglomerative clustering"),
      p("Reuse DS-511 Practicals 7, 8 and 9 respectively."),
    ],
  },

  // ── DS-561-MJP : Big Data lab ───────────────────────────────────────────
  {
    code: "DS-561-MJP",
    file: "DS-561-Big-Data-Lab-Solved-Practicals.pdf",
    title: "Lab: Big Data",
    subtitle: "Solved Practical Manual (Hadoop · PySpark)",
    badge: "Semester II · Lab (MJP)",
    blocks: [
      ...intro("Big Data"),
      muted("Requirements: Hadoop (single-node) and PySpark (pip install pyspark)."),
      h1("Assignment 1: Data ingestion & storage (HDFS)"),
      code(`# Load a CSV into HDFS and read it back
hdfs dfs -mkdir -p /data/ingest
hdfs dfs -put local_dataset.csv /data/ingest/
hdfs dfs -ls /data/ingest/
hdfs dfs -cat /data/ingest/local_dataset.csv | head`),
      h1("Assignment 2: Data preprocessing & cleaning with Spark"),
      code(`from pyspark.sql import SparkSession
spark = SparkSession.builder.appName("clean").getOrCreate()
df = spark.read.csv("hdfs:///data/ingest/local_dataset.csv", header=True, inferSchema=True)
df = df.dropna()                          # handle missing values
train, test = df.randomSplit([0.8, 0.2], seed=42)
print("Train rows:", train.count(), "Test rows:", test.count())`),
      h1("Assignment 3: Word count with MapReduce (PySpark RDD)"),
      code(`text = spark.sparkContext.textFile("hdfs:///data/ingest/book.txt")
counts = (text.flatMap(lambda l: l.split())
               .map(lambda w: (w.lower(), 1))
               .reduceByKey(lambda a, b: a + b))
for word, c in counts.takeOrdered(10, key=lambda x: -x[1]):
    print(word, c)`),
      h1("Assignment 4: Data analysis with Spark MLlib"),
      code(`from pyspark.ml.classification import LogisticRegression
from pyspark.ml.feature import VectorAssembler
va = VectorAssembler(inputCols=["f1","f2","f3"], outputCol="features")
data = va.transform(df).select("features", "label")
model = LogisticRegression().fit(data)
print("Coefficients:", model.coefficients)`),
      h1("Assignment 5: Spark SQL query"),
      code(`df.createOrReplaceTempView("sales")
spark.sql("SELECT region, SUM(amount) AS total FROM sales GROUP BY region ORDER BY total DESC").show()`),
      h1("Assignment 6: Case study"),
      p("Pick a domain (e.g. Netflix / Uber / Banking from the syllabus list), load its dataset into Spark, run exploratory analysis and one ML model, then present findings. Refer to 'Big Data Case Study' by Bernard Marr."),
    ],
  },

  // ── DS-563-MJP : Deep Learning lab ──────────────────────────────────────
  {
    code: "DS-563-MJP",
    file: "DS-563-Deep-Learning-Lab-Solved-Practicals.pdf",
    title: "Lab: Deep Learning",
    subtitle: "Solved Practical Manual (TensorFlow / Keras)",
    badge: "Semester II · Lab (MJP)",
    blocks: [
      ...intro("Deep Learning"),
      muted("Requirements: tensorflow (pip install tensorflow)."),
      h1("Unit 1: Feedforward network on the XOR problem"),
      code(`import numpy as np, tensorflow as tf
X = np.array([[0,0],[0,1],[1,0],[1,1]]); y = np.array([0,1,1,0])
model = tf.keras.Sequential([
    tf.keras.layers.Dense(4, activation="relu", input_shape=(2,)),
    tf.keras.layers.Dense(1, activation="sigmoid")])
model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])
model.fit(X, y, epochs=500, verbose=0)
print("Predictions:", model.predict(X).round())`),
      h1("Unit 2: MLP classifier on MNIST"),
      code(`import tensorflow as tf
(xtr,ytr),(xte,yte) = tf.keras.datasets.mnist.load_data()
xtr, xte = xtr/255.0, xte/255.0
model = tf.keras.Sequential([
    tf.keras.layers.Flatten(input_shape=(28,28)),
    tf.keras.layers.Dense(128, activation="relu"),
    tf.keras.layers.Dense(10, activation="softmax")])
model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])
model.fit(xtr, ytr, epochs=3, validation_split=0.1)
print("Test accuracy:", model.evaluate(xte, yte, verbose=0)[1])`),
      h1("Unit 3: CNN on CIFAR-10"),
      code(`import tensorflow as tf
(xtr,ytr),(xte,yte) = tf.keras.datasets.cifar10.load_data()
xtr, xte = xtr/255.0, xte/255.0
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32,3,activation="relu",input_shape=(32,32,3)),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Conv2D(64,3,activation="relu"),
    tf.keras.layers.MaxPooling2D(),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(64,activation="relu"),
    tf.keras.layers.Dense(10,activation="softmax")])
model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])
model.fit(xtr, ytr, epochs=5, validation_split=0.1)`),
      h1("Unit 4: RNN / LSTM sentiment analysis (IMDB)"),
      code(`import tensorflow as tf
(xtr,ytr),(xte,yte) = tf.keras.datasets.imdb.load_data(num_words=10000)
xtr = tf.keras.preprocessing.sequence.pad_sequences(xtr, maxlen=200)
xte = tf.keras.preprocessing.sequence.pad_sequences(xte, maxlen=200)
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(10000, 32),
    tf.keras.layers.LSTM(32),
    tf.keras.layers.Dense(1, activation="sigmoid")])
model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])
model.fit(xtr, ytr, epochs=2, validation_split=0.2)`),
      h1("Unit 5: Ethical considerations — explainability demo"),
      p("Aim: Interpret a model's predictions to address fairness/transparency (Unit 5)."),
      code(`# Feature importance as a simple explainability tool
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_breast_cancer
X, y = load_breast_cancer(return_X_y=True)
rf = RandomForestClassifier().fit(X, y)
import numpy as np
top = np.argsort(rf.feature_importances_)[::-1][:5]
print("Top-5 influential features (indices):", top)`),
      muted("Discuss: differential privacy, bias/fairness and accountability as required by the syllabus."),
    ],
  },
];
