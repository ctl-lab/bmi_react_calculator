import React, { Component } from "react";

import Form from "./components/Form";
import Message from "./components/Message";
import { calculateBmi } from "./helpers/bmiHelper";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
    method: "metric"
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onMethodSelect = (e) => {
    let methodByUser = e.target.value
    this.setState({method: methodByUser})


  }

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height,
      this.state.method
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  render() {
    return (
      <div>
        <Form
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          onMethodSelect={this.onMethodSelect}
        />
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
      </div>
    );
  }
}

export default App;
