export const changeValue = text => ({
  type: 'CHANGE_VALUE',
  text: text,
});

export const toAddSkill = skillsList => ({
  type: 'TO_ADD_SKILL',
  skillsList: skillsList,
});

export const toRemoveSkill = readySkillsList => ({
  type: 'TO_REMOVE_SKILL',
  readySkills: readySkillsList,
});

export const toFinishSkill = (skills, readySkills) => ({
  type: 'TO_FINISH_SKILL',
  skills: skills,
  readySkills: readySkills,
});