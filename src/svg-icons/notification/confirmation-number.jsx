let React = require('react');
let SvgIcon = require('../../svg-icon');

let NotificationConfirmationNumber = React.createClass({

  render() {
    return (
      <SvgIcon {...this.props}>
        <defs><path id="a" d="M0 0h24v24H0z"/></defs><clipPath id="b"><use  overflow="visible"/></clipPath><path d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z" clip-path="url(#b)"/>
      </SvgIcon>
    );
  }

});

module.exports = NotificationConfirmationNumber;