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
  var end_of_track = 15;
  
  function advancePlayer(keyCode) {

    players.forEach(function(player){
      if (keyCode == player.keycode && players[0].position < end_of_track && players[1].position < end_of_track) {
        move_player(player.location);
        player.position++;
        winner(player.position, player.id);
      }
    });
  }

  $(document).keyup(function(e) {
    advancePlayer(e.keyCode);
  });
});

function move_player(strip) {
  $(strip).find('td.active').removeClass('active').next().addClass('active');
}

function winner(player, num) {
  if (player > 14) {
    alert("Player " + num + " has won!");
  }
