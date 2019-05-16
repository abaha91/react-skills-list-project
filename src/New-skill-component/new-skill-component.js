import React, { Component } from 'react';

class NewSkill extends Component {
  render() {
    return (
      <div className="new-skill">
        <form action="post" className="new-skill--form">
          <input type="text" className="new-skill--input" placeholder="Введите новую цель"/>
          <input type="submit" className="new-skill--submit" value="Новая цель"/>
        </form>
      </div>
    );
  }
}

export default NewSkill;