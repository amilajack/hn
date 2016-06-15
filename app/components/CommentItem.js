import React, { Component } from 'react';


export default class ListItem extends Component {
  render() {
    return (
      <li>
          <div class="comment-meta">
              <span class="author {opClass}"><span class="icon icon-user"></span><span class="text"> {user}</span></span>
              <time class="time-ago"><span class="icon icon-hourglass"></span><span class="text"> {time_ago}</span></time>
          </div>
          <div class="comment {readClass}">
              {content}
          </div>
          {child_comments}
      </li>
    );
  }
}
