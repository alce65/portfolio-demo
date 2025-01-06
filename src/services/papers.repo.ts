import { getCollection, getEntry } from "astro:content";

export const getAllPapers = async () => {
  const collection = await getCollection("papers");

  const papers = collection.map((paper) => ({
    ...paper.data,
    slug: paper.id,
  }));

  return papers.filter((paper) => paper.title);
};

export const getFullPaper = async (slug: string) => {
  const item = await getEntry("papers", slug);
  return item ?? null;
};
