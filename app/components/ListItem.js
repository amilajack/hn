import React, { Component } from 'react';


export default class ListItem extends Component {

  render() {
    return (
      <li data-id="{id}" class="">
        <a href="#/article/{id}" class="story {visitedArticle}" data-hn="{self}">
          <h3>{title}</h3>
          <span class="points">{points}</span>
          <span class="author">{user}</span>
          <span class="time-ago">{time_ago}</span>
          <span class="url">{urlTitle}</span>
        </a>
        <a href="#/comments/{id}" class=" comments {visitedComments}">
          <span class="icon icon-bubble"></span>{comments_count}
        </a>
      </li>
    );
  }
}
