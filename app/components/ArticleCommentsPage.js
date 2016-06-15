import React, { Component } from 'react';


export default class ArticleCommentsPage extends Component {
  render() {
    return (
      <div class="header-container">
          <header class="header">
              <div class="l-menu "><a href="#" class="back back-home"><span class="icon icon-arrow-left"></span></a></div>
              <h1>Comments ({comments_count})</h1>
              <ul class="r-menu list-inline menu">
                  <li>
                      <a href="#/article/{id}" class="show-article article-self-{self}" data-id="{id}"><span class="icon icon-newspaper"></span></a>
                  </li>
              </ul>
          </header>
      </div>

      <section class="pagebd-container">
          <div class="bd">
              <div class="article-meta article-self-{self}">
                  <h3 class="title">{title}</h3>
                  <span class="points">{points}</span>
                  <span class="author"> {user}</span>
                  <span class="time-ago">{time_ago}</span>
                  <span class="comments-count"><span class="icon icon-bubble"></span>{comments_count}</span>
                  <a class="url article-url" href="{url}" onclick="window.open('{url}', '_blank'); return false;"><span class="icon icon-export"></span> {url}</a>
                  <a class="url hn-url" href="https://news.ycombinator.com/item?id={id}" onclick="window.open('https://news.ycombinator.com/item?id={id}', '_blank'); return false;">
                  <span class="icon icon-export"></span> news.ycombinator.com/item?id={id}</a>
                  <div class="text op-comment">{content}</div>
              </div>
              <div class="article-comments"><br><div class="show-loading"><div class="circle"></div><br>Loading...</div></div>
          </div>
      </section>
    );
  }
}
