/**
 * File system utilities for MDX processing
 */

import fs from 'node:fs/promises';

/**
 * Check if a path is a directory
 */
export async function isDirectory(directoryPath: string): Promise<boolean> {
  try {
    const stat = await fs.stat(directoryPath);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

/**
 * Check if a path exists
 */
export async function exists(path: string): Promise<boolean> {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

/**
 * Supported MDX and MD extensions
 */
export const MDX_EXTENSIONS = ['.mdx', '.md'] as const;

/**
 * Check if a file is an MDX or MD file
 */
export function isMdxFile(fileName: string): boolean {
  return MDX_EXTENSIONS.some((extension) => fileName.endsWith(extension));
}
