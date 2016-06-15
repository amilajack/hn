import React, { Component } from 'react';


export default class SettingsPage extends Component {
  render() {
    return (
      <div class="header-container">
          <header class="header">
              <div class="l-menu"><a href="#" class="back back-home"><span class="icon icon-arrow-left"></span></a></div>
              <h1>Settings</h1>
          </header>
      </div>

      <section class="pagebd-container">
          <div class="bd">
              <h4>Themes</h4>
              <ul class="theme-{theme} list">
                  <li><a href="#" class="change-theme" data-theme="default">Hacker News (default)</a></li>
                  <li><a href="#" class="change-theme" data-theme="dark">Dark</a></li>
              </ul>
              <h4>Font Size</h4>
              <ul class="theme-{theme} list">
                  <li><a href="#" class="change-font-size" data-font-size="small">Small</a></li>
                  <li><a href="#" class="change-font-size" data-font-size="normal">Normal (default)</a></li>
                  <li><a href="#" class="change-font-size" data-font-size="large">Large</a></li>
              </ul>
              <h4>Auto collapse read comments</h4>
              <ul class="read-comment-{status} list">
                  <li><a href="#" class="change-read-comment" data-value="yes">Yes</a></li>
                  <li><a href="#" class="change-read-comment" data-value="no">No</a></li>
              </ul>
              <div class="version">0.1</div>
          </div>
      </section>
    );
  }
}
