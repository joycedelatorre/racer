$(document).ready(function() {

  var end_of_track = 15;
  var player =[
  {
    id:1,
    position:0,
    keycode:'KeyP',
    location:'0'
  },

  {
    id:2,
    position:0,
    keycode:'KeyQ',
    location:'16'

  }
];

  document.addEventListener('keydown', function(event){
    if (event.code == 'KeyP' && player[0].position < end_of_track ){
      console.log('jeo');
      remove_player(player[0].location);

      var numId = parseInt(player[0].location);
      numId = numId + 1;
      player[0].location = numId;
      console.log("---> " + player[0].location);
      advance_player(player[0].location, player[0]);
    }
  });
});

function remove_player(player_loc) {
  console.log(player_loc);
  $("#"+ player_loc).removeClass('active');
  console.log(document.getElementById("0"));
}

function advance_player(player_new_loc, player){
  console.log("new location " + player_new_loc);
  $("#" + player_new_loc).addClass('active');
  player.position = player.position + 1;
  console.log("Player position " + player.position);
  winner(player.position, player);
}

function winner(player_pos, player) {
  if (player_pos > 14) {
    alert("Player " + player.id + " has won!");
  }
 }
