import React, { Component } from 'react';
import { connect } from "react-redux";
import { toFinishSkill } from '../actions/index'


class TodoSkills extends Component {
  constructor(props) {
    super(props);
  }

  toFinishSkill(event, index) {
    let newReadySkillsList = [...this.props.readySkills],
        newSkillsList = [...this.props.skills];

    newReadySkillsList = [...newReadySkillsList, this.props.skills[index]];
    newSkillsList.splice(index, 1)
    this.props.dispatch(toFinishSkill(newSkillsList, newReadySkillsList));
  }

  render() {
    return (
      <div className="todo-skills">
        <p>Планируется изучить</p>
        <ul className="todo-skills--list">
          {this.props.skills.map((skill, index) => <li className="todo-skills--item" key={index}>
            {skill}
            <div className="todo-skill--done" onClick={event => this.toFinishSkill(event, index)}></div>
          </li>)}
        </ul>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    skills: state.skills,
    readySkills: state.readySkills,
  };
};

export default connect(mapStateToProps)(TodoSkills);