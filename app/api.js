/**
 * Handle API requests to endpoint
 */
import fetch from 'isomorphic-fetch';


export const baseUrl = 'http://node-hnapi.herokuapp.com';

/**
 * Possible type options: top, new, best
 */
export function getArticles(page = 1) {
  return _fetch(`${baseUrl}/news${page === 1 ? '' : page}`);
}

export function getArticle(itemId) {
  return _fetch(`${baseUrl}/item/${itemId}`);
}

function _fetch(url) {
  return fetch(url).then(res => res.json());
}

export default { getArticles, getArticle };
