var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(MoviesList, {items: moviesList}, {})
      )
    );
  }
});


