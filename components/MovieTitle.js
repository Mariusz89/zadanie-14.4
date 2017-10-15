var MovieTitle = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('h2', {}, this.props.item.name)
      )
  },
});