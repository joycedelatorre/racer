
  var end_of_track = 15;
  var players =[
	{
		id:1,
		position:0,
		keycode:80,
		location:'player1'
	},

	{
		id:2,
		position:0,
		keycode:81,
		location:'player2'

	}
]
$(document).ready(function() {

  $(document).keypress(function(event) {
    advancePlayer(event.keyCode);
  });
});

function advancePlayer(keyCode) {
		console.log("hello");
  	for(var i = 0; i < players.length; i++){
  		if (keyCode == players[i].keycode && players[0].position < end_of_track && players[1].position < end_of_track) {
        move_player(players.location);
        players.position++;
        winner(players.position, players.id);
      }
  	}
 }

function move_player(strip) {
  $(strip).find('td.active').removeClass('active').next().addClass('active');
}

function winner(player, num) {
  if (player > 14) {
    alert("Player " + num + " has won!");
  }
 }
