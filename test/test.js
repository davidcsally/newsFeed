// import * as actionsArticles from '../src/reducers/reducer-articles';
import { receiveApiArticles, recieveApiTopics, followTopic, unfollowTopic } from '../src/reducers/actions';
import { RECEIVE_API_ARTICLES, RECIEVE_API_TOPICS, FOLLOW_TOPIC, UNFOLLOW_TOPIC } from '../src/reducers/actions';


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

  it('should follow a single topic', () => {
    const topic = {
      name: 'the name of a topic',
      id: 1234,
    };
    const expectedAction = {
      type: FOLLOW_TOPIC,
      data: topic,
    };
    expect(followTopic(topic)).toEqual(expectedAction);
  });

  it('should unfollow a single topic', () => {
    const topic = {
      name: 'the name of a topic',
      id: 1234,
    };
    const expectedAction = {
      type: UNFOLLOW_TOPIC,
      data: topic,
    };
    expect(unfollowTopic(topic)).toEqual(expectedAction);
  });
});
