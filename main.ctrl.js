function Player() {	
	this.bet4 = 0; 
	this.bet3 = 0; 
	this.call = 0; 
	this.raise = 0; 
}

angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.playerCount = 9; 
	vm.title = 'Poker';
	vm.showButtons = true;
	vm.isMoving = true; 
	vm.seats = []; 
	vm.players = []; 
	for (var i = 0; i < vm.playerCount; i++) {
	  var player = new Player(i);   
	  vm.players.push(player);   
	  vm.seats.push(i+1); 
	}
	
	vm.call = function(i) {
		var player = vm.players[i]; 
		player.call++; 		
	};
	
	vm.raise = function(i) {
		var player = vm.players[i]; 
		player.raise++; 		
	};
	vm.bet3 = function(i) {
		var player = vm.players[i]; 
		player.bet3++; 		
	};
	vm.bet4 = function(i) {
		var player = vm.players[i]; 
		player.bet4++; 		
	};
	vm.moveSeat = function(i, seat) {
		var index = seat-1; 
		var other = vm.players[index]; 
		var player = vm.players[i]; 
		vm.players[i] = other; 
		vm.players[index] = player; 	
		delete seat; 
	}
	
	
});
