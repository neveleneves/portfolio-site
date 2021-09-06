import { useState, useEffect } from "react";

export const useSetSkills = () => {
  const [usingSkills, setUsingSkills] = useState([]);
  const [learningSkills, setLearningSkills] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    const getSkillList = async () => {
      try {
        if (!isCancelled) {
          const response = await fetch(`/api/main/skills`, {
            method: "GET",
          });
          const skillList = await response.json();

          if (!response.ok) {
            throw new Error(
              skillList.message || "The request was executed incorrectly"
            );
          }

          if (skillList.length) {
            setUsingSkills(
              skillList.filter((item) => item.type === "using_stack")
            );
            setLearningSkills(
              skillList.filter((item) => item.type === "learning_stack")
            );
          }
        }
      } catch (e) {}
    };
    getSkillList();

    return () => {
      isCancelled = true;
    };
  }, []);

  return { usingSkills, learningSkills };
};
