import React, { Component } from 'react';
import { connect } from "react-redux";

class TodoSkills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-skills">
        <p>Планируется изучить</p>
        <ul className="todo-skills--list">
          {this.props.skills.map((skill, index) => <li className="todo-skills--item" key={index}>{skill}</li>)}
        </ul>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  console.log(2);
  return {
    skills: state.skills
  };
};

export default connect(mapStateToProps)(TodoSkills);