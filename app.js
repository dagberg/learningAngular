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

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			canPurchase: true,
			soldOut: false,
			image: 'Knucklehead crackers.jpg',
			description: 'Dodecahedron is a twelve-sided motherfucker.',
			specifications: 'It takes twelve sides to be a Dodecahedron.',
			review: 'Dodecahedrons are the tits.',
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
