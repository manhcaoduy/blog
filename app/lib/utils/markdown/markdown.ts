import { MarkdownData, postDirectory } from '../../../config/config';
import * as fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export async function getMarkdownData(id: string): Promise<MarkdownData> {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath);
  const { content, data } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    id,
    title: data['title'],
    lastUpdate: data['lastUpdate'],
    tags: data['tags'].split(','),
    contentHtml,
  };
}
