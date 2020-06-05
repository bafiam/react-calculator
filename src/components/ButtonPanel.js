import React, { Component } from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { onClick } = this.props;
    return (
      <div>
        <div className="group-1">
          <Button name="Button" value="AC" onClick={onClick} />
          <Button name="Button" value="+/-" onClick={onClick} />
          <Button name="Button" value="%" onClick={onClick} />
          <Button name="Button" value="/" onClick={onClick} />
        </div>
        <div className="group-2">
          <Button name="Button" value="7" onClick={onClick} />
          <Button name="Button" value="8" onClick={onClick} />
          <Button name="Button" value="9" onClick={onClick} />
          <Button name="Button" value="*" onClick={onClick} />


        </div>
        <div className="group-3">
          <Button name="Button" value="4" onClick={onClick} />
          <Button name="Button" value="5" onClick={onClick} />
          <Button name="Button" value="6" onClick={onClick} />
          <Button name="Button" value="-" onClick={onClick} />


        </div>
        <div className="group-4">
          <Button name="Button" value="1" onClick={onClick} />
          <Button name="Button" value="2" onClick={onClick} />
          <Button name="Button" value="3" onClick={onClick} />
          <Button name="Button" value="+" onClick={onClick} />


        </div>
        <div className="group-5">
          <Button name="Button" value="0" onClick={onClick} />
          <Button name="Button" value="." onClick={onClick} />
          <Button name="Button" value="=" onClick={onClick} />

        </div>


      </div>
    );
  }
}

export default ButtonPanel;
