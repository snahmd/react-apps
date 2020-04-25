import React from 'react';
import faker from 'faker';
import Comment from './Comment';
import Card from './Card';

const App = () => {
  return(
    <div className="ui comments" style={{
      paddingTop: '10px',
      paddingLeft: '15px'
    }}>
      <Card>
      <Comment name="Ahmed San" avatar={faker.image.avatar()} timeAgo="2" star="5" comment="React Super"/>

      </Card>
      <Card>
      <Comment name="John Donne" avatar={faker.image.avatar()} timeAgo="3" star="3" comment="React Wow"/>

      </Card>
    </div>
  )
}

export default App;