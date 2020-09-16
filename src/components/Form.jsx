import React from 'react'

const Form = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>

      <label for="method-selector">Choose method:</label>
      <select id="method-selector" onChange={props.onMethodSelect}>
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>

      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight in kgs"
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder="Height in cms"
        value={props.height}
        // name is the one that matters here, the one that has the name 
        // for the e.target.name to work
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id="calculate">Calculate BMI</button>
    </form>
  );
}

export default Form