import React from 'react'
import './projects.css'
import NLP from '../../assets/nlp.JPG'
import CSoon from '../../assets/commingSoon.jpg'
import ML from '../../assets/ml.png'
import Elastic from '../../assets/elastic.png'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="container proj__container">

        <div className="proj__card">
          <h4> Machine Learning</h4>
          <div className="proj">
            <div className="proj__img">
              <img src={ML} alt="csoon_proj" />
            </div>
            <div className="proj__list">
              <h3>Fraud detection in Credit Card transactions using binary classification</h3>
              <h5>Comparison of SVM, Complement Naive-Bayes, LR, GMM classifiers</h5>
              <h5>Accuracy analysis using confusion-matrix, AUPRC and AUROC</h5>
              <h5>Analysisng the effect of imabalance ratio in the dataset</h5>
              <h5>Language: Python Library: Scikit-learn</h5>
              <a href="https://github.com/SaeedJamaly/Credit_Card_fraud_detection.git">Please visit my Github repository</a>
            </div>
          </div>

          <div className="proj">

            <div className="proj__img">
              <img src={CSoon} alt="csoon_proj" />
            </div>
            <div className="proj__list">
              <h3>Performance of Random Forest in Java and Python</h3>
              <h5>Language: Python, Java Library: Scikit-learn, Tribuo</h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <a href="https://github.com/SaeedJamaly/Java_vs_Python_in_Random_Forest.git">Please visit my Github repository</a>
            </div>
          </div>


          <div className="proj">

            <div className="proj__img">
              <img src={CSoon} alt="csoon_proj" />
            </div>
            <div className="proj__list">
              <h3>Time-series generation using VAE_LSTM</h3>
              <h5>Language: Python Library: Keras</h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <a href="https://github.com/SaeedJamaly/VAE-LSTM_in_Anomaly_detection.git">Please visit my Github repository</a>
            </div>

          </div>

        </div>


        <div className="proj__card">
          <h4>Distributed Systems</h4>
          <div className="proj">

            <div className="proj__img">
              <img src={Elastic} alt="csoon_proj" />
            </div>
            <div className="proj__list">
              <h3>Distributed search engine implementation using ES and K8s</h3>
              <h5>Language: Java</h5>
              <h5></h5>
              <h5></h5>
              <h5></h5>
              <a href="https://github.com/SaeedJamaly/ElasticSearch_and_Kubernetes_Implementation.git">Please visit my Github repository</a>
            </div>
          </div>
        </div>


        <div className="proj__card">
          <h4>Natural Language Processing</h4>
          <div className="proj">
            <div className="proj__img">
              <img src={NLP} alt="nlp_proj" />
            </div>
            <div className="proj__list">
              <h3>Sentiment analysis of sentences with featured grammar</h3>
              <h5>Language: Python Library: NLTK</h5>
              <h5>Analyze sentence sentiment and sentiment bearing named entities </h5>
              <h5>Using feature-based Earley's chart parser as the algorithm</h5>
              <h5>Designed grammar to cover sentences with complex and compound structure</h5>
              <a href="https://github.com/SaeedJamaly/sentiment_analysis_assignment.git">Please visit my Github repository</a>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Projects