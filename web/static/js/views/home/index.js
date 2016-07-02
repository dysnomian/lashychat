import React                from 'react';
import { connect }          from 'react-redux';
import classnames           from 'classnames';
import Chat                 from '../chat';

import { setDocumentTitle } from '../../utils';

// var Chat = React.createClass({
//   render: function() {
//     return (
//       <div id='chat'>
//         Look, a chat!
//       </div>
//     );
//   }
// });
//
var Hello = React.createClass({
  render: function() {
    return (
      <div id='chat'>
        Hello, world!
      </div>
    );
  }
});

class HomeIndexView extends React.Component {
  componentDidMount() {
    setDocumentTitle('Home');
  }

  render() {
    return (
      <div className='view-container home index'>
        <Hello />
        <Chat />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  state
);

export default connect(mapStateToProps)(HomeIndexView);
