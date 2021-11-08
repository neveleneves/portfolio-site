import { GET_SKILLS, LOADER_HIDE, LOADER_SHOW } from "../type/skillsTypes";

export function getSkillsList(skillsList) {
  return {
    type: GET_SKILLS,
    payload: skillsList,
  };
}

export function activeLoader(toggle) {
  return {
    type: LOADER_SHOW,
    payload: toggle,
  };
}

export function disableLoader(toggle) {
  return {
    type: LOADER_HIDE,
    payload: toggle,
  };
}