import React, { Component } from 'react';
import Button from './Button'

class ButtonPanel extends Component {


  render() {
    return (
      <div>
        <div className="group-1">
          <Button name="Button" value="AC" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="+/-" onClick={this.props.onClick.bind(this)}></Button>
          <Button name="Button" value="%" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="/" onClick={this.props.onClick.bind(this)} ></Button>
        </div>
        <div className="group-2">
          <Button name="Button" value="7" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="8" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="9" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="*" onClick={this.props.onClick.bind(this)} ></Button>


        </div>
        <div className="group-3">
          <Button name="Button" value="4" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="5" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="6" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="-" onClick={this.props.onClick.bind(this)} ></Button>


        </div>
        <div className="group-4">
          <Button name="Button" value="1" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="2" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="3" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="+" onClick={this.props.onClick.bind(this)} ></Button>


        </div>
        <div className="group-5">
          <Button name="Button" value="0" onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="." onClick={this.props.onClick.bind(this)} ></Button>
          <Button name="Button" value="=" onClick={this.props.onClick.bind(this)} ></Button>

        </div>





      </div>
    );
  }
}

export default ButtonPanel;
