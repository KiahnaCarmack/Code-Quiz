import React, { useState } from "react";
import "./App.css";

function App() {


  const [finalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const questions = [
    {
    text: "  What is the benefit of using React.js?",
    options:[
      
      {answer:0, text: "Speed, Flexibility, Performance,Reusable Components, Usability", isCorrect: true},
      {answer:1, text: "it has a really cool name", isCorrect: false},
      {answer:2, text: "Object Oriented Program Language, it's easy, platform independent,", isCorrect: false},
      {answer:3, text: "All of the Above", isCorrect: false},
    
      
  
  ],
},
{
  text: "  What does HTML Stand For",
  options:[
    
    {answer:0, text: "Highly Transactional Model Language", isCorrect: false},
    {answer:1, text: "Hyper Text Major Language", isCorrect: true},
    {answer:2, text: "Hyper Text Mark-up Language", isCorrect: false},
    {answer:3, text: "Hyper Text Mark-up Layout", isCorrect: false},
  
    

],
},
{
  text: "Who owns and actively Updates React?",
  options:[
    
    {answer:0, text: "Instagram", isCorrect: false},
    {answer:1, text: "Facebook", isCorrect: true},
    {answer:2, text: "Google", isCorrect: false},
    {answer:3, text: "Expedia", isCorrect: false},
  
    

],
},
{
  text: " What is the difference between a framework and library?",
  options:[
    
    {answer:0, text: "What?", isCorrect: false},
    {answer:1, text: "Libraries is a documentation for refrence, frameworks help build your application", isCorrect: false},
    {answer:2, text: "Libraries provide developers with predefined functions and classes to make their work easier and boost the development process. Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms.", isCorrect: true},
    {answer:3, text: "Libraries have predefined functions, frameworks are used in README's", isCorrect: false},
  
    

],
},
{
  text: " Which is NOT a Javascript Library?",
  options:[
    
    {answer:0, text: "JQuery", isCorrect: false},
    {answer:1, text: "BootStrap", isCorrect: true},
    {answer:2, text: "React", isCorrect: false},
    {answer:3, text: "D3", isCorrect: false},
  
    

],
},
{
  text: "What goes inbetween the Head of an HTML Doc?",
  options:[
    
    {answer:0, text: " text", isCorrect: false},
    {answer:1, text: " images", isCorrect: false},
    {answer:2, text: "Meta Data", isCorrect: true},
    {answer:3, text: "The Date", isCorrect: false},
  
    

],
},
{
  text: " How do you link a Css file in React?",
  options:[
    
    {answer:0, text: " import './filepath'", isCorrect: true},
    {answer:1, text: "import './add Css'", isCorrect: false},
    {answer:2, text: "import 'filepath'", isCorrect: false},
    {answer:3, text: "import ',/filepath'", isCorrect: false},
  
    

],
},
{
  text: " What is a global Variable?",
  options:[
    
    {answer:0, text: "It's Global, BABY!", isCorrect: false},
    {answer:1, text: "Global Variables can be used across any web application", isCorrect: false},
    {answer:2, text: "Global Variable can be accessed inside a function", isCorrect: false},
    {answer:3, text: "Variables declared Globally (outside any function) have Global Scope. Global variables can be accessed from anywhere in a JavaScript program. ", isCorrect: true},
  
    

],
},
{
  text: "what is the command to clone a repository from Github?",
  options:[
    
    {answer:0, text: "copy + paste", isCorrect: false},
    {answer:1, text: "git clone + ssh or https from Github", isCorrect: true},
    {answer:2, text: "ctrl + alt + dlte", isCorrect: false},
    {answer:3, text: "git clone // app name //", isCorrect: false},
  
    

],
},
{
  text: " What is the UI?",
  options:[
    
    {answer:0, text: "United Interns", isCorrect: false},
    {answer:1, text: "User interface is exclusivly for the server side", isCorrect: false},
    {answer:2, text: "The user interface (UI) is the point of human-computer interaction and communication in a device", isCorrect: true},
    {answer:3, text: "All of the above", isCorrect: false},
  
    
  ],
},
  ];
   const optionClicked = (isCorrect) => {
     if(isCorrect) {
       setScore(score + 1);
     }
     if(currentQuestion + 1 < questions.length)
     {
     setCurrentQuestion(currentQuestion + 1);
   }else {
     setFinalResults(true)
   }
  }


return (
    <div className="App">
      <div className="quiz-header">
        <h1> Code Quiz!</h1>
      </div>
      <div className="current-score">
        <h2> Current Score: {score}</h2>
        {finalResults ? (
          <div className="final-results">
            <h1>Final Results</h1>
            <h2> 1 out of 10 correct - ( 20%)</h2>
            <button>Restart</button>
          </div>
        ) : (
          <div className="question-card">
            <h2 className="question-header">Question {currentQuestion + 1} out of {questions.length}</h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>
            <ul>
             {questions[currentQuestion].options.map((option) =>{
               return(
                 <li onClick={() => optionClicked(option.isCorrect)}key={option.answer}>{option.text}</li>
               )
             }
             
             
             
             )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
