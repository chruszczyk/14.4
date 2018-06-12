var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		image: 'https://ae01.alicdn.com/kf/HTB1TQnaaHsrBKNjSZFpq6AXhFXao/Nowy-styl-Harry-Potter-Plakat-Klienta-Plakat-Na-P-tnie-Sztuki-Dekoracji-Wn-trz-Wall-Poster.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		image: 'https://images-na.ssl-images-amazon.com/images/I/51Q0R48W6PL._SX335_BO1,204,203,200_.jpg'
	},
	{
		id: 3,
		title: 'Braveheart',
		desc: 'Film o szkockim powstaniu',
		image: 'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
	},
	{
		id: 4,
		title: 'Pianista',
		desc: 'Film o Szpilmanie',
		image: 'https://ocdn.eu/pulscms-transforms/1/KvzktkpTURBXy9kNzA3MzY0ZjU1YjYzMzlhMTZkMGZhMDg1YWU3NTVmOS5wbmeRkwXNBADNAj8'
	}
];

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render : function() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDesc, {desc: this.props.movie.desc}),
				React.createElement(MovieImage, {img: this.props.movie.image})
			)
		)
	}
});

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render : function() {
		return React.createElement('p', {}, this.props.desc)
	}
})

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title)
	}
})

var MovieImage = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('img', {src: this.props.img})
	}
})

var moviesElements = movies.map(function(movie) {
	return (
		React.createElement(Movie, {key:movie.id, movie: movie})

	)
});

var MovieList = React.createClass({

	render: function() {
		return (
			
			React.createElement('ul', {}, moviesElements)
		)
	}
});



var element = React.createElement('div', {}, 
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement(MovieList, {})
);
		

ReactDOM.render(element, document.getElementById('app'));