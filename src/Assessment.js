import React, { useState } from 'react';
import './Assessment.css';
import backgroundImage from './pic5.jpg';
function Assessment() {
  const [score, setScore] = useState(null);

  const evaluateAnswers = () => {
    const form = document.getElementById("carPartsForm");
    let totalScore = 0;

    // Evaluation logic for each question
    const answers = [
      { question: 'q1', correctAnswer: 'b' },
      { question: 'q2', correctAnswer: 'c' },
      { question: 'q3', correctAnswer: 'a' },
      { question: 'q4', correctAnswer: 'b' },
      { question: 'q5', correctAnswer: 'a' },
      { question: 'q6', correctAnswer: 'b' },
      { question: 'q7', correctAnswer: 'c' },
      { question: 'q8', correctAnswer: 'c' },
      { question: 'q9', correctAnswer: 'c' },
      { question: 'q10', correctAnswer: 'a' }
    ];

    answers.forEach(item => {
      const answer = form.querySelector(`input[name="${item.question}"]:checked`);
      if (answer && answer.value === item.correctAnswer) {
        totalScore++;
      }
    });

    return totalScore;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const thankYouMessage = document.getElementById('thankYouMessage');
    const score = evaluateAnswers();

    if (score !== null) {
      form.style.display = 'none';
      thankYouMessage.innerHTML = `Your score: ${score}<br>Your Response has been Recorded<br><a href="about.html">Go to homepage</a>`;
      thankYouMessage.style.display = 'block';
      thankYouMessage.style.textAlign = 'center';
      thankYouMessage.style.fontSize = '3rem';
      setScore(score);
    } else {
      alert("Please answer all questions before submitting.");
    }
  };
  function areAllQuestionsAnswered() {
            var form = document.getElementById("carPartsForm");
            var questions = form.querySelectorAll('input[type="radio"]');
            for (var i = 0; i < questions.length; i++) {
                if (!questions[i].checked) {
                    return false;
                }
            }
            return true;
        }

  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <form id="carPartsForm" onSubmit={handleSubmit}>
          <h1>Car Parts Assessment</h1>

          <div className="question">
            <label htmlFor="q1">1. What is the primary function of the engine in a car?</label>
            <input type="radio" name="q1" value="a" /> Generates electrical energy<br />
            <input type="radio" name="q1" value="b" /> Converts chemical energy into mechanical energy<br />
            <input type="radio" name="q1" value="c" /> Controls the car's entertainment system<br />
          </div>

          <div className="question">
            <label htmlFor="q2">2. Which part connects the wheels and helps in steering?</label>
        <input type="radio" name="q2" value="a" /> Axle<br />
        <input type="radio" name="q2" value="b" /> Crankshaft<br />
        <input type="radio" name="q2" value="c" /> Tie Rod<br />
      </div>

          <div className="question">
            <label htmlFor="q3">3. Which of the following components is part of the braking system?</label>
            <input type="radio" name="q3" value="a"/> Brake pads<br/>
            <input type="radio" name="q3" value="b"/> Radiator<br/>
            <input type="radio" name="q3" value="c"/>Fuel injector<br/>
        </div>

          <div className="question">
            <label htmlFor="q4">4. What does the transmission do?</label>
                    <input type="radio" name="q4" value="a"/> Controls the air conditioning system<br/>
                    <input type="radio" name="q4" value="b"/> Manages the gear ratio between the engine and the wheels<br/>
                    <input type="radio" name="q4" value="c"/> Filters exhaust gases<br/>
                </div>

          <div className="question">
            <label htmlFor="q5">5. What is the purpose of the car's battery?</label>
                    <input type="radio" name="q5" value="a"/> To start the engine<br/>
                    <input type="radio" name="q5" value="b"/> To provide fuel to the engine<br/>
                    <input type="radio" name="q5" value="c"/> To paint the car<br/>
                </div>

          <div className="question">
            <label htmlFor="q6">6. What is the function of a car's radiator?</label>
            <input type="radio" name="q6" value="a" /> To increase engine temperature<br />
            <input type="radio" name="q6" value="b" /> To decrease engine temperature by dissipating heat <br />
            <input type="radio" name="q6" value="c" /> To monitor engine performance<br />
          </div>

          <div className="question">
            <label htmlFor="q7">7. Which part of a car is primarily responsible for initiating the ignition process?</label>
            <input type="radio" name="q7" value="a" /> Alternator<br />
            <input type="radio" name="q7" value="b" /> Battery<br />
            <input type="radio" name="q7" value="c" /> Spark Plug<br />
          </div>

          <div className="question">
            <label htmlFor="q8">8. Which type of transmission allows the vehicle to change gears automatically based on engine speed?</label>
            <input type="radio" name="q8" value="a" /> Manual<br />
            <input type="radio" name="q8" value="b" /> Semi automatic<br />
            <input type="radio" name="q8" value="c" /> Automatic<br />
          </div>

          <div className="question">
            <label htmlFor="q9">9. What does ABS in a car's braking system stand for?</label>
            <input type="radio" name="q9" value="a" /> Auto Breaking System<br />
            <input type="radio" name="q9" value="b" /> Advanced braking System<br />
            <input type="radio" name="q9" value="c" /> Anti-Lock Breaking System<br />
          </div>

          <div className="question">
            <label htmlFor="q10">10. Which component is essential for filtering the air going into the engine to mix with fuel?</label>
            <input type="radio" name="q10" value="a" /> Air Filter<br />
            <input type="radio" name="q10" value="b" /> Fuel pump<br />
            <input type="radio" name="q10" value="c" /> Carburetor<br />
          </div>



          <button type="submit">Submit Assessment</button>
        </form>
        <br />
        <br />
      </div>
      <div id="thankYouMessage" style={{ marginBottom: '500px', display: score !== null ? 'block' : 'none', height: '180px', backgroundColor: 'bisque' }}></div>
    </div>
  );
}

export default Assessment ;