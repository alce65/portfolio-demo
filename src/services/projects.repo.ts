import { getCollection } from "astro:content";
import type { Project } from "../types/data";

export const getAllProjects = async () => {
  const collection = await getCollection("projects");

  const projects: Project[] = collection.map((project) => ({
    ...project.data,
    startDate: new Date(project.data.startDate),
    endDate: new Date(project.data.endDate),
  }));

  return projects.filter((project) => project.name);
};

export const getAllSkills = async () => {
  const collection = await getCollection("projects");
  const skills: string[] = collection.flatMap(
    (project) => project.data.technologies
  );

  return [...new Set(skills)];
};
