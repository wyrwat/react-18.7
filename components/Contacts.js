var Contacts = React.createClass({
    propTypes: {
      items: React.PropTypes.array.isRequired,
    },
  
    render: function() {
      var contacts = this.props.items.map(function(contact) {
          return (Contact, {item: contact, key: contact.id});
      });
  
      return (
        <div className = {'contactList'}> {contacts} </div>
      );
    }
  });