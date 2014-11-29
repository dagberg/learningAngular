(function(){

	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview =  function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			canPurchase: true,
			soldOut: false,
			image: 'Knucklehead crackers.jpg',
			description: 'Dodecahedron is a twelve-sided motherfucker.',
			specifications: 'It takes twelve sides to be a Dodecahedron.',
			reviews: [
				{
					stars: 5,
					body: 'Dodecahedrons are the tits.',
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: 'Dodecahedrons are fucking bullshit, bro.',
					author: "jack@thomas.com"
				},
				{
					stars: 3.5,
					body: "try out this shit, it's legit",
					author: "helmet@hotmail.com"
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			canPurchase: true,
			soldOut: false,
			image: 'Knucklehead crackers.jpeg',
			description: 'Pentagons are a five-sided bitches.',
			specifications: 'It takes five sides to be a pentagon.',
			review: 'Pentagons are all right.',
		}

	]

})();
