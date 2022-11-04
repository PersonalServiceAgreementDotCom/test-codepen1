$(function(){
  $('#vidyagames').tokenInput([
      {id: 7, name: "Super Mario"},
      {id: 11, name: "Battletoads"},
      {id: 13, name: "Pong"},
      {id: 17, name: "The Legend of Zelda"},
      {id: 19, name: "Metroid"},
      {id: 23, name: "Donkey Kong Country"},
      {id: 29, name: "Super Smash Bros."},
      {id: 32, name: "Star Fox"},
      {id: 35, name: "Starcraft"},
      {id: 37, name: "Pokemon"},
      {id: 38, name: "Minecraft"},
      {id: 41, name: "The Sims"},
      {id: 43, name: "Final Fantasy"},
      {id: 44, name: "Resident Evil"},
      {id: 46, name: "Kingdom Hearts"},
      {id: 47, name: "Tetris"},
      {id: 48, name: "Grand Theft Auto"},
      {id: 51, name: "World of Warcraft"},
      {id: 53, name: "Metal Gear Solid"},
      {id: 54, name: "Civilization"},
      {id: 56, name: "Pac-Man"},
      {id: 59, name: "Animal Crossing"},
      {id: 62, name: "Spyro the Dragon"},
      {id: 64, name: "Crash Bandicoot"},
      {id: 65, name: "Sonic the Hedgehog"},
      {id: 72, name: "Tomb Raider"},
      {id: 77, name: "Mortal Kombat"},
      {id: 81, name: "Space Invaders"}
    ], { 
      theme: "facebook",
      hintText: "Know of any cool games?",
      noResultsText: "Nothin' found.",
      searchingText: "Gaming...",
      preventDuplicates: true
  }); 

});
