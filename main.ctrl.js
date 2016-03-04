
var handOptions = [
	{ name: 'Raise', value : 1, show: true },
	{ name: 'Call', value : 2, show: true },
	{ name: '3 Bet', value : 3, show: true },
	{ name: '4 Bet', value : 4, show: true },	
	{ name: 'Fold', value : 5, show: false }];

function Player() {	
	this.bet4Perc = 0; 
	this.bet3Perc = 0; 
	this.playPerc = 0; 
	this.raisePerc = 0; 
	this.foldPerc = 0; 
	
	this.bet4 = 0; 
	this.bet3 = 0; 
	this.call = 0; 
	this.raise = 0; 
	this.fold = 0; 	
	this.games = 0; 
	this.playing = false; 
	this.name = ''; 
	this.handOption = 5; 
}

angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.playerCount = 9; 
	vm.handOptions = handOptions; 
	vm.title = 'Poker';
	vm.showButtons = true;
	vm.showMove = false; 
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
	}
	vm.removePlayer = function(index) {
		vm.players[index] = new Player(); 
	}
	vm.addPlayer = function(index) {
		vm.players[index].playing = true; 		
	}
	
	vm.nextHand = function() {
		for(var i = 0; i < vm.players.length; i++)
		{			
			var player = vm.players[i]; 
			if(player.playing) {
			    player.games++; 				 
				switch (player.handOption) {
				  case 1:				
				    player.raise++; 					
					break;
				  case 2:			
					player.call++; 
					break;
				  case 3:			
                    player.bet3++; 				  
					break;
				  case 4:
				    player.bet4++; 
				    break;
				  case 5:
				    player.fold++;
				    break;
				}				
				player.raisePerc = (player.raise/player.games) * 100; 					
				var totalPlays = player.raise + player.call + player.bet3 + player.bet4; 
				player.playPerc = (totalPlays/player.games) * 100; 
				player.bet3Perc = (player.bet3/player.games) * 100; 
				player.bet4Perc = (player.bet4/player.games) * 100; 
			}
			
		
		
		}
	}
	
});
