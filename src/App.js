import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dvalue: 0,
      fvalue: 0,
      value1: "",
      op: "",
      ans: ""
    };

    this.handleButton = this.handleButton.bind(this);
    this.handleAns = this.handleAns.bind(this);
    this.handleOp = this.handleOp.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleAns = (e) => {
    this.setState((state) => ({
      fvalue: state.fvalue + e.target.innerHTML
    }));

    if (this.state.op === "+") {
      this.setState((state) => ({
        dvalue: Number(this.state.value1) + Number(this.state.dvalue)
      }));
    } else if (this.state.op === "-") {
      this.setState((state) => ({
        dvalue: Number(this.state.value1) - Number(this.state.dvalue)
      }));
    } else if (this.state.op === "X") {
      this.setState((state) => ({
        dvalue: Number(this.state.value1) * Number(this.state.dvalue)
      }));
    } else {
      this.setState((state) => ({
        dvalue: Number(this.state.value1) / Number(this.state.dvalue)
      }));
    }
  };

  handleButton = (e) => {
    if (this.state.dvalue === 0) {
      this.setState({
        dvalue: "",
        fvalue: ""
      });
    }
    if (
      this.state.dvalue === "+" ||
      this.state.dvalue === "-" ||
      this.state.dvalue === "X" ||
      this.state.dvalue === "/"
    ) {
      this.setState({
        dvalue: ""
      });
    }

    this.setState((state) => ({
      dvalue: state.dvalue + e.target.innerHTML,
      fvalue: state.fvalue + e.target.innerHTML
    }));
  };

  handleOp = (e) => {
    this.setState((state) => ({
      dvalue: e.target.innerHTML,
      fvalue: state.fvalue + e.target.innerHTML,
      op: e.target.innerHTML,
      value1: state.fvalue
    }));
  };
  handleClear = (e) => {
    this.setState({
      fvalue: "",
      dvalue: 0
    });
  };

  render() {
    return (
      <div className="container" id="calculator-main">
        <div className="calculator">
          <div className="formulaScreen">{this.state.fvalue}</div>
          <div className="outputScreen" id="display">
            {this.state.dvalue}
          </div>
          <div>
            <button
              className="type2"
              id="clear"
              onClick={(e) => this.handleClear(e)}
            >
              AC
            </button>
            <button
              className="type1"
              id="divide"
              onClick={(e) => this.handleOp(e)}
            >
              /
            </button>
            <button
              className="type1"
              id="multiply"
              onClick={(e) => this.handleOp(e)}
            >
              X
            </button>
            <button
              className="type1"
              id="seven"
              onClick={(e) => this.handleButton(e)}
            >
              7
            </button>
            <button
              className="type1"
              id="eight"
              onClick={(e) => this.handleButton(e)}
            >
              8
            </button>
            <button
              className="type1"
              id="nine"
              onClick={(e) => this.handleButton(e)}
            >
              9
            </button>
            <button
              className="type1"
              id="substract"
              onClick={(e) => this.handleOp(e)}
            >
              -
            </button>
            <button
              className="type1"
              id="four"
              onClick={(e) => this.handleButton(e)}
            >
              4
            </button>
            <button
              className="type1"
              id="five"
              onClick={(e) => this.handleButton(e)}
            >
              5
            </button>
            <button
              className="type1"
              id="six"
              onClick={(e) => this.handleButton(e)}
            >
              6
            </button>
            <button
              className="type1"
              id="add"
              onClick={(e) => this.handleOp(e)}
            >
              +
            </button>
            <button
              className="type1"
              id="one"
              onClick={(e) => this.handleButton(e)}
            >
              1
            </button>
            <button
              className="type1"
              id="two"
              onClick={(e) => this.handleButton(e)}
            >
              2
            </button>
            <button
              className="type1"
              id="three"
              onClick={(e) => this.handleButton(e)}
            >
              3
            </button>
            <button
              className="type3"
              id="equal"
              onClick={(e) => this.handleAns(e)}
            >
              =
            </button>
            <button
              className="type2"
              id="zero"
              onClick={(e) => this.handleButton(e)}
            >
              0
            </button>
            <button
              className="type1"
              id="dot"
              onClick={(e) => this.handleButton(e)}
            >
              .
            </button>
          </div>
        </div>
        <p>
          A simple calculator made with <b>React</b>
        </p>
      </div>
    );
  }
}

export default App;
