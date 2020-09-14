import React from 'react'

const Form = () => {
  return (
      <form>
        <label htmlFor="weight">Weight</label>
        <input
          type="weight"
          required
          placeholder="Weight in kgs"
          name="Weight"
          id="Weight"
        />
        <label htmlFor="height">Height</label>
        <input
          type="number"
          required
          placeholder="Height in cms"
          name="height"
          id="height"
        />
        <button>Calculate BMI</button>
      </form>
    )
}

export default Form