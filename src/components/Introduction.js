import React from 'react';

export default class Introduction extends React.Component {
  render() {
    return (
      <div id="intro">
        <div >
          <img height="250" width="200" src="/img/profile.jpg" alt="" />
        </div>
        <h1>Omid Yousufi</h1>
        <p>Software Engineer -  Toronto, Ontario</p>
        <ul className="icons">
          <li><a href="https://www.linkedin.com/in/omidyousufi/" className="fab fa-linkedin"></a></li>
          <li><a href="https://github.com/youomid" className="fab fa-github-square"></a></li>
          <li><a href="omid_yousufi_resume.pdf" className="fas fa-file"></a></li>
        </ul>
      </div>
  );
  }
}