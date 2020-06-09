import React, { Component } from 'react';
import Button from './Button';
import '../css/ButtonPanel.css';
// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { onClick } = this.props;
    return (
      <div>
        <div className="group-1 panelRow">
          <Button name="Button" value="AC" onClick={onClick} />
          <Button name="Button" value="+/-" onClick={onClick} />
          <Button name="Button" value="%" onClick={onClick} />
          <Button name="Button Button-r" value="÷" onClick={onClick} />
        </div>
        <div className="group-2 panelRow">
          <Button name="Button" value="7" onClick={onClick} />
          <Button name="Button" value="8" onClick={onClick} />
          <Button name="Button" value="9" onClick={onClick} />
          <Button name="Button Button-r" value="*" onClick={onClick} />


        </div>
        <div className="group-3 panelRow">
          <Button name="Button" value="4" onClick={onClick} />
          <Button name="Button" value="5" onClick={onClick} />
          <Button name="Button" value="6" onClick={onClick} />
          <Button name="Button Button-r" value="-" onClick={onClick} />


        </div>
        <div className="group-4 panelRow">
          <Button name="Button" value="1" onClick={onClick} />
          <Button name="Button" value="2" onClick={onClick} />
          <Button name="Button" value="3" onClick={onClick} />
          <Button name="Button Button-r" value="+" onClick={onClick} />


        </div>
        <div className="group-5 panelRow">
          <Button name="Button Button-0" value="0" onClick={onClick} />
          <Button name="Button" value="." onClick={onClick} />
          <Button name="Button Button-r" value="=" onClick={onClick} />

        </div>


      </div>
    );
  }
}

export default ButtonPanel;
