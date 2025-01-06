import { Social } from "./social";

type Url = string;
type stringDate = string;

type Experience = {
  name: string;
  startDate: Date;
  endDate: Date;
  summary: string;
  company: string;
  urls: Url[];
};

export type Project = Experience & {
  id: number;
  image: ImageMetadata | string;
  technologies: string[];
  highlights: string[];
  duration: {
    days: number;
    hours: number;
  };
};

export type Work = Experience & {
  position: string;
  projects?: Partial<Project>[];
};

// DTOs for JSON / md files

export type WorkDTO = {
  name: string;
  startDate: stringDate;
  endDate: stringDate;
  summary: string;
  company: string;
  urls: Url[];
  position: string;
  projects?: Partial<ProjectDTO>[];
};

// Not used in the demo

export type Education = {
  institution: string;
  area: string;
  studyType: string;
  startDate: stringDate;
  endDate: stringDate;
  gpa: string;
  courses: string[];
};

export type Skill = {
  name: string;
  level: string;
  keywords: string[];
};

export type Basics = {
  name: string;
  label: string;
  picture: Url;
  email: string;
  phone: string;
  website: Url;
  summary: string;
  location: {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
  };
  profiles: Social[];
};
