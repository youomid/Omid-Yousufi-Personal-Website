import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <img height="250" width="200" src="/img/profile.jpg"/>
          </Link>
        </header>
        <div>{this.props.children}</div>
        <footer>
          <p>
            This is Omid Yousufi's personal website using <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
    );
  }
}