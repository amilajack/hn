/* eslint no-unused-vars: 0, no-unused-expressions: 0 */

import { expect } from 'chai';
import API from '../app/api';


const testingArticleId = '3338485';

describe('API', () => {
  it('should get single article', async (done) => {
    try {
      const result = await API.getArticle(testingArticleId);
      expect(result).to.be.an('object');
      expect(result).to.have.property('comments').that.is.an('array');
      assertArticleHasProperties(result);
      done();
    } catch (err) {
      done(err);
    }
  });

  it('should get multiple articles by page number', async (done) => {
    try {
      const results = await Promise.all([
        API.getArticles(1),
        API.getArticles(2)
      ]);

      for (const result of results) {
        expect(result).to.be.an('array');
        assertArticleHasProperties(result[0]);
      }

      done();
    } catch (err) {
      done(err);
    }
  });
});

function assertArticleHasProperties(result) {
  expect(result).to.be.an('object');
  expect(result).to.have.property('id').that.exists;
  expect(result).to.have.property('title').that.exists;
  expect(result).to.have.property('points').that.exists;
  expect(result).to.have.property('user').that.exists;
  expect(result).to.have.property('time_ago').that.exists;
  expect(result).to.have.property('comments_count').that.exists;
  expect(result).to.have.property('type').that.exists;
  expect(result).to.have.property('url').that.exists;
}
