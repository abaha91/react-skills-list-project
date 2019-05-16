import React, { Component } from 'react';

class TodoSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      skills: this.props.skills,
    }
  }

  render() {
    return (
      <div className="todo-skills">
        <ul className="todo-skills--list">
          {this.state.skills.map((skill, index) => <li key={index} className="todo-skills--item">{skill}</li>)}
        </ul>
      </div>
    );
  }
}

export default TodoSkills;