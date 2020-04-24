import React from 'react'
import App from './App'
import faker from 'faker';

const Comment = () => {
    return (
      <div className="comment">
        <a className="avatar" href="/">
          <img alt="" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a className="author" href="/">Ahmed San</a>
          <div className="metadata">
            <div className="date">2 days ago</div>
            <div className="rating">
              <i className="star icon"></i>
              5 Faves
            </div>
          </div>
          <div className="text">
            React Try
          </div>
        </div>
      </div>
    )
}

  export default Comment;