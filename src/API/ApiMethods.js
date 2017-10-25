import { articlesAPI, topicsAPI, singleArticleAPI } from './API';

export const fetchArticles = async () => {
  try {
    const response = await fetch(articlesAPI);
    const data = await response.json();
    return data;
  }
  catch (e) {
    return console.log('[fetchArticles] Error: ', e);
  }
};

export const fetchTopics = async () => {
  try {
    const response = await fetch(topicsAPI);
    const data = await response.json();
    return data;
  }
  catch (e) {
    return console.log('[FetchTopics] Error: ', e);
  }
};

export const fetchSingleArticle = async (id) => {
  try {
    const url = `${singleArticleAPI}${id}.json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch (e) {
    return console.log('[fetchSingleArticle] Error: ', e);
  }
};
