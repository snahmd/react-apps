import React from 'react';
import faker from 'faker';
import Comment from './Comment'

const App = () => {
  return(
    <div className="ui comments">
      <Comment name="Ahmed San" avatar={faker.image.avatar()} timeAgo="2" star="5" comment="React Super"/>
      <Comment name="John Donne" avatar={faker.image.avatar()} timeAgo="3" star="3" comment="React Wow"/>
    </div>
  )
}

export default App;