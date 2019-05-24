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