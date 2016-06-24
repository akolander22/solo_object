var arsenal = {
  name: 'Arsenal FC',
  city: 'London',
  countryOfOrigin: 'England',
  leagueTitles: 13,
  formedIn: 1893,
  sport: 'football',
  americanizedSport: 'soccer',
  league: 'English Premier League',
  rival: 'Tottenham',
  teamManager: 'Arsene Wenger',
  yearManagerStarted: 1996,
  yearsSinceSpudsWonLeague: 55,

  printOut: function(){
    console.log('The ' + this.name + ' are a professional ' + this.sport + ' team, that play in the ' + this.league + '. This sport is often called ' + this.americanizedSport + ' which is wrong...' + 'The team was formed in '+ this.formedIn + ' in ' + this.city + ', ' + this.countryOfOrigin + '. The team has been very successful and was won ' + this.leagueTitles + ' league titles in ' + this.countryOfOrigin + '. The team manager '+ this.teamManager + ' has been at the club since ' + this.yearManagerStarted + ', and since then local rivals ' + this.rival + ' have never finished above ' + this.name + '. In fact it has been ' + this.yearsSinceSpudsWonLeague + ' years since ' + this.rival + ' have won the league. Boom.' )
  }
}
arsenal.printOut();
