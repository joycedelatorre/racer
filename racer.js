$(document).ready(function() {

  var end_of_track = 15;
  var player =
  [{
    position:0,
    keycode:'KeyP',
    location:'0'
  },

  {
    position:0,
    keycode:'KeyQ',
    location:'16'

  }];

  document.addEventListener('keydown', function(event){
    if (event.code == 'KeyP' && player[0].position < end_of_track ){
      remove_player(player[0].location, 'active1');
      var numId = parseInt(player[0].location);
      numId = numId + 1;
      player[0].location = numId;
      // console.log("---> " + player[0].location);
      advance_player(player[0].location, player[0], 'active1');
    } 
    else if  (event.code == 'KeyQ' && player[1].position< end_of_track)
    {
      remove_player(player[1].location, 'active2');
      var numId = parseInt(player[1].location);
      numId = numId + 1;
      player[1].location = numId;
      // console.log("---> " + player[1].location);
      advance_player(player[1].location, player[1], 'active2');
    }
  });
});

function remove_player(player_loc, rmvClass) {
  $("#"+ player_loc).removeClass(rmvClass);
  // console.log(document.getElementById("0"));
}

function advance_player(player_new_loc, player, adClass){
  $("#" + player_new_loc).addClass(adClass);
  player.position = player.position + 1;
  winner(player.position, player);
}

function winner(player_pos, player) {
  if (player_pos > 14) {
    alert("Player " + player.id + " has won!");
  }
 }
