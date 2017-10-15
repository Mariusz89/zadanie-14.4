var MoviesList = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var moviesList = this.props.items.map(function(movie) {
        return React.createElement(Movie, {item: movie, key: movie.id});
    });

    return (
      React.createElement('ul', {className: 'moviesList'}, moviesList)
    );
  }
});


var moviesList = [
{ 
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      img: 'https://cdn.pixabay.com/photo/2017/10/06/16/50/bird-2823763__340.jpg'
    },
    { 
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      img: 'https://cdn.pixabay.com/photo/2017/10/06/16/50/pine-cones-2823765__340.jpg'
    },
    { 
      id: 3,
      title: 'The Shawshank Redemption',
      desc: 'Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.',
      img: 'https://cdn.pixabay.com/photo/2017/10/02/17/49/mushroom-2809620__340.jpg'
    },
    { 
      id: 4,
      title: 'Intouchables',
      desc: 'Sparaliżowany milioner zatrudnia do opieki młodego chłopaka z przedmieścia, który właśnie wyszedł z więzienia.',
      img: 'https://cdn.pixabay.com/photo/2017/10/05/22/16/katz-2821316__340.jpg'
    }
    ];  



