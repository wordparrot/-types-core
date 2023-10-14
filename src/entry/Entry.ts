import { EntryItem, EntryLink } from ".";
import { RepositoryItem } from "..";
import { Image } from "..";
import { Site } from "..";
import { Category, Subcategory } from "..";
import { Bookmark } from ".";
import { PipelineNode, PipelineJob } from "..";

export interface Entry {
  id: string;
  title: string;
  subtitle?: string;
  content?: string;
  body?: string;
  status: string;
  tags?: string;
  youtubeURL: string;

  site: Site;
  image: Image;
  items: EntryItem[];
  links: EntryLink[];
  category: Category;
  categoryId?: string;
  subcategory: Subcategory;
  subcategoryId?: string;
  bookmarks: Bookmark[];
  pipelineJob: PipelineJob;
  pipelineNode: PipelineNode;
  repositoryItems: RepositoryItem[];

  date: number;
  createdAt: string;
  updatedAt: string;
}
