import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState('');
  const [time, setTime] = useState('1');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);



  function handleSubmit(e) {
    e.preventDefault();

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let calculatedResults;


    if (gender === 'male' && gramsLeft > 0) {
      calculatedResults = gramsLeft / (weight * 0.7);
    } else if (gender === 'female' && gramsLeft > 0) {
      calculatedResults = gramsLeft / (weight * 0.6);
    } else {
      calculatedResults = 0;
    }

    setResult(calculatedResults);

  }

  return (
    <div id='content'>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <select value={bottles} onChange={e => setBottles(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select type='number' value={time} onChange={e => setTime(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>14</option>
            <option>15</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type='radio' name='gender' value='male' defaultChecked onChange={e => setGender(e.target.value)}></input><label>Male</label>
          <input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)}></input><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(1)}</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>

    </div>
  );
}

export default App;
