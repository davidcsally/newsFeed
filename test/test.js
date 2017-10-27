import {
  receiveApiArticles,
  requestApiArticles,
  recieveApiTopics,
  followTopic,
  unfollowTopic,
} from '../src/reducers/action-creators';

import {
  RECEIVE_API_ARTICLES,
  REQUEST_API_ARTICLES,
  RECIEVE_API_TOPICS,
  FOLLOW_TOPIC,
  UNFOLLOW_TOPIC,
} from '../src/reducers/constants';

  // TODO test reducers

// *********************
// ** ACTION CREATORS **
// *********************
describe('Action Creators', () => {
  it('should create an action to request articles ', () => {
    const expectedAction = { type: REQUEST_API_ARTICLES };
    expect(requestApiArticles()).toEqual(expectedAction);
  });

  it('should create an action to recieve articles ', () => {
    const articles = [{ name: 'Article 1', id: 1 }];
    const expectedAction = {
      type: RECEIVE_API_ARTICLES,
      data: articles,
    };
    expect(receiveApiArticles(articles)).toEqual(expectedAction);
  });

  it('should create an action to recieve topics ', () => {
    const topics = [{ name: 'Topic 1', id: 1 }];
    const expectedAction = {
      type: RECIEVE_API_TOPICS,
      data: topics,
    };
    expect(recieveApiTopics(topics)).toEqual(expectedAction);
  });

  it('should create an action to follow a single topic', () => {
    const topic = {
      name: 'topic1',
      id: 1,
    };
    const expectedAction = {
      type: FOLLOW_TOPIC,
      data: topic,
    };
    expect(followTopic(topic)).toEqual(expectedAction);
  });

  it('should create an action to unfollow a single topic', () => {
    const topic = {
      name: 'topic1',
      id: 1,
    };
    const expectedAction = {
      type: UNFOLLOW_TOPIC,
      data: topic,
    };
    expect(unfollowTopic(topic)).toEqual(expectedAction);
  });
});

// **************
// ** REDUCERS **
// **************
