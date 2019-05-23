import React, { Component } from 'react';
import { connect } from "react-redux";

class TodoSkills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(2);
    return (
      <div className="todo-skills">
        <ul className="todo-skills--list">
          {this.props.skills.map((skill, index) => <li className="todo-skills--item">{skill}</li>)}
        </ul>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  console.log(1);
  return {
    skills: state.skills
  };
};

export default connect(mapStateToProps)(TodoSkills);