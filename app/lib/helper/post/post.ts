import * as fs from 'fs';
import { getMarkdownData, MarkdownData } from '../markdown/markdown';
import { postDirectory } from './post.const';

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getAllMarkdownData() {
  const postIds = getAllPostIds();
  const posts: MarkdownData[] = [];
  for (const postId of postIds) {
    const markdownData = await getMarkdownData(postId);
    posts.push(markdownData);
  }
  return posts;
}
