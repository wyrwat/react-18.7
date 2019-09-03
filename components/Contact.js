

var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        <div className={'contactItem'}>
          <img className={'contactImage'} src={'https://image.flaticon.com/icons/svg/181/181549.svg'}/>
          <p className={'contactLabel'}>
              Name: {this.props.item.firstName}
          </p>
          <a href={'mailto:' + this.props.item.email}>
              {this.props.item.email}
          </a>
        </div>
      );
    }
});
