import { useState, useEffect } from "react";

export const useGetProjects = () => {
  const [projects, setProjectsList] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    const getProjectList = async () => {
      try {
        if (!isCancelled) {
          const response = await fetch(`/api/main/projects`, {
            method: "GET",
          });
          const projectList = await response.json();

          if (!response.ok) {
            throw new Error(
              projectList.message || "The request was executed incorrectly"
            );
          }

          if (projectList.length) setProjectsList(projectList);
        }
      } catch (e) {
        console.warn("The request was executed incorrectly: ", e.message);
      }
    };
    getProjectList();

    return () => {
      isCancelled = true;
    };
  }, []);

  return {projects};
};
