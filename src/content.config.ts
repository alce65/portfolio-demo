import { file, glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";
import type { InferEntrySchema } from "astro:content";
import { date } from "astro:schema";

const projects = defineCollection({
  loader: file("src/content/projects.json"),
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      name: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      summary: z.string(),
      company: z.string(),
      image: image(),
      urls: z.array(z.string().url()),
      technologies: z.array(z.string()),
      highlights: z.array(z.string()),
      duration: z.object({
        days: z.number(),
        hours: z.number(),
      }),
    }),
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url(),
    }),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/papers" }),
  //type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    // date: z.string().transform((val: string) => new Date(val)),
    // date: z.coerce.date(),
    tags: z.array(z.string()),
    serie: z.object({
      id: z.number(),
      title: z.string(),
    }),
    serieOrder: z.number(),
  }),
});

export type BookDTO = InferEntrySchema<"books">;
export type ProjectDTO = InferEntrySchema<"projects">;

export const collections = {
  projects,
  books,
  papers,
};
