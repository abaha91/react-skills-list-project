import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeValue } from '../actions/index'

class NewSkill extends Component {

  onChangeFunction(event) {
    event.preventDefault();
    this.props.dispatch(changeValue(event.target.value))
  }

  // toAddSkill(event) {
  //   event.preventDefault();
  //   this.props.dispatch(toAddSkill(this.props.inputValue))
  // }

  render() {
    console.log(this.props.value);
    return (
      <div className="new-skill">
        <form className="new-skill--form">
          <input type="text" className="new-skill--input" placeholder="Введите новую цель" value={this.props.value} onChange={e => this.onChangeFunction(e)}/>
          <input type="button" className="new-skill--submit" value="Новая цель" onClick={ e => {this.toAddSkill(e)}}/>
        </form>
      </div>
    );
  }

}

export default connect()(NewSkill);