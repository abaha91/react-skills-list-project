import React, { Component } from 'react';
import { toRemoveSkill } from '../actions/index';
import { connect } from 'react-redux';

class ReadySkills extends Component {

  constructor(props) {
    super(props);
  }

  removeSkill(event, index) {
    let newReadySkillsList = [...this.props.readySkills];
    newReadySkillsList.splice(index, 1);
    this.props.dispatch(toRemoveSkill(newReadySkillsList));
  }

  render() {
    return (
      <div className="ready-skills">
        <p className="ready-skills--title">Есть опыт работы</p>
        <ul className="ready-skills--list">
          {this.props.readySkills.map((skill, index) => <li key={index} className="ready-skills--item">
            {skill}
            <div className="ready-skill--delete" onClick={event => this.removeSkill(event, index)}></div>
          </li>)}
        </ul>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    readySkills: state.readySkills,
  }
}

export default connect(mapStateToProps)(ReadySkills);