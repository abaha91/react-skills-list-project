import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeValue, toAddSkill } from '../actions/index'

class NewSkill extends Component {

  constructor(props) {
    super(props);
  }

  onChangeFunction(event) {
    event.preventDefault();
    this.props.dispatch(changeValue(event.target.value))
  }

  toAddSkill(event) {
    event.preventDefault();
    this.props.dispatch({
      type: 'TO_ADD_SKILL',
      text: this.props.inputValue,
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className="new-skill">
        <form className="new-skill--form">
          <input type="text" className="new-skill--input" placeholder="Введите новую цель" value={this.props.inputValue} onChange={e => this.onChangeFunction(e)}/>
          <input type="button" className="new-skill--submit" value="Новая цель" onClick={ e => {this.toAddSkill(e)}}/>
        </form>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
};

export default connect(mapStateToProps)(NewSkill);