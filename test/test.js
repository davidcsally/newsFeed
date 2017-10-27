// import * as actionsArticles from '../src/reducers/reducer-articles';
import { receiveApiArticles, recieveApiTopics } from '../src/reducers/actions';
import { RECEIVE_API_ARTICLES, RECIEVE_API_TOPICS } from '../src/reducers/actions';


describe('Articles Reducer', () => {
  it('should save articles into store', () => {
    const articles = [
      { name: 'Article 1', id: 1 },
      { name: 'Article 2', id: 2 },
      { name: 'Article 3', id: 3 },
      { name: 'Article 4', id: 4 },
    ];
    const expectedAction = {
      type: RECEIVE_API_ARTICLES,
      data: articles,
    };
    expect(receiveApiArticles(articles)).toEqual(expectedAction);
  });
});

describe('Topics Reducer', () => {
  it('should save topics into store', () => {
    const topics = [
      { name: 'Topic 1', id: 1 },
      { name: 'Topic 2', id: 2 },
      { name: 'Topic 3', id: 3 },
      { name: 'Topic 4', id: 4 },
    ];
    const expectedAction = {
      type: RECIEVE_API_TOPICS,
      data: topics,
    };
    expect(recieveApiTopics(topics)).toEqual(expectedAction);
  });
});
