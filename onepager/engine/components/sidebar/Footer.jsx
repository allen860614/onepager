const React     = require('react');
const PureMixin = require('react/lib/ReactComponentWithPureRenderMixin');
const Tab                 = require('./Tab.jsx');
const ODataStore          = require('../../stores/ODataStore.js');

require('./footer.less');

let Footer = React.createClass({
  mixins: [PureMixin],
  
  propTypes: {
    id: React.PropTypes.string,
    icon: React.PropTypes.string,
    title: React.PropTypes.string
  },

  getDefaultProps(){
    return {
      disabled: false,
      active: ''
    };
  },

  render() {
    return (
      <div className="footer flex flex-space-between">
          <a href={ODataStore.disable}><span className="fa fa-adjust"></span> Live Mode</a>
          <a href="http://docs.getonepager.com" target="_blank"><span className="fa fa-video-camera"></span> Video Tutorial</a>
      </div>
    );
  }
});

module.exports = Footer;