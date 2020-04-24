import React from 'react'
import App from './App'


const Comment = ({name,timeAgo,star,comment,avatar}) => {
//const Comment = (props) => {
  //const name=props.name
  //const {name,timeAgo,star,comment}=props;
    return (
      <div className="comment">
        <a className="avatar" href="/">
          <img alt="" src={avatar}/>
        </a>
        <div className="content">
    <a className="author" href="/">{name}</a>
          <div className="metadata">
            <div className="date">{timeAgo} days ago</div>
            <div className="rating">
              <i className="star icon"></i>
              {star} Star
            </div>
          </div>
          <div className="text">
            {comment}
          </div>
        </div>
      </div>
    )
}

  export default Comment;