/**
 * @returns {Promise<{path:string}[]>}
 */
export async function fetchDirs(baseUrl) {
  return fetchDirsAndPics(baseUrl);
}

/**
 * @returns {Promise<{path:string}[]>}
 */
export async function fetchPics(baseUrl, dir) {
  return fetchDirsAndPics(baseUrl, dir);
}

export async function fetchDirsAndPics(...parts) {
  const url = parts.join("");
  const resp = await fetch(url);
  const list = await resp.json();
  list.sort((a, b) => (a.path < b.path ? 1 : -1));
  return list;
}
