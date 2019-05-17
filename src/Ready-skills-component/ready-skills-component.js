import React, { Component } from 'react';
import { removeTodo } from '../actions/index';


class ReadySkills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      skills: this.props.skills,
    }
  }

  render() {
    return (
      <div className="ready-skills">
        <ul className="ready-skills--list">
          {this.props.skills.map((skill, index) => <li key={index} className="ready-skills--item">{skill}</li>)}
        </ul>
      </div>
    );
  }
}

export default ReadySkills;