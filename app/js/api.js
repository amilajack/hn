/**
 * Handle API requests to endpoint
 */
import fetch from 'isomorphic-fetch';


export const baseUrl = 'https://hacker-news.firebaseio.com/v0';


export function getArticles() {}

export function getArticle(itemId) {
  return fetch(`${baseUrl}/item/${itemId}.json`);
}

export function getArticleContent() {}
export function getArticleComments() {}
export function getArticlesByType() {}
