import * as fs from 'fs';

export const postDirectory = './app/files/posts';

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}
