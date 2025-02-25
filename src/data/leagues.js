const leagues = [
  // premier league
  {
    id: "epl",
    name: "English Premier League",
    logo: require("../assets/EPL.jfif"),
    link: "https://www.premierleague.com/stats",
    questions: [
      {
        id: 1,
        question: "Who won the Premier League in 2023?",
        options: ["Manchester City", "Liverpool", "Arsenal", "Chelsea"],
        answer: "Manchester City",
        explanation:
          "Manchester City won the Premier League in 2023, finishing at the top of the table.",
      },
      {
        id: 2,
        question: "Who is the all-time top scorer in the Premier League?",
        options: [
          "Wayne Rooney",
          "Alan Shearer",
          "Sergio Agüero",
          "Harry Kane",
        ],
        answer: "Alan Shearer",
        explanation:
          "Alan Shearer holds the record for most goals in the Premier League with 260 goals.",
      },
      {
        id: 3,
        question:
          "Which of these clubs has the most Premier League title wins?",
        options: [
          "Manchester City",
          "Liverpool",
          "Arsenal",
          "Manchester United",
        ],
        answer: "Manchester United",
        explanation:
          "Manchester United have won 13 titles, which were achieved in the following seasons: 1992/93, 1993/94, 1995/96, 1996/97, 1998/99, 1999/00, 2000/01, 2002/03, 2006/07, 2007/08, 2008/09, 2010/11, and 2012/13.",
      },
      {
        id: 4,
        question: "The club with the most consecutive PL home wins is?",
        options: [
          "Manchester City",
          "Liverpool",
          "Arsenal",
          "Manchester United",
        ],
        answer: "Liverpool",
        explanation:
          "Liverpool held the record for 24 matches from 9 February 2019 to 11 July 2020.",
      },
      {
        id: 5,
        question: "Fewest PL defeats in a season?",
        options: ["Manchester City", "Liverpool", "Arsenal", "Chelsea"],
        answer: "Arsenal",
        explanation:
          "Arsenal went the entire 2003/04 season unbeaten, earning them the nickname 'The Invincibles.'",
      },
      {
        id: 6,
        question: "Fewest PL goals conceded in a season?",
        options: ["Manchester City", "Liverpool", "Arsenal", "Chelsea"],
        answer: "Chelsea",
        explanation: "Chelsea conceded only 15 goals in the 2004/05 season.",
      },
      {
        id: 7,
        question: "Who has the most PL appearances?",
        options: [
          "Wayne Rooney",
          "Gareth Barry",
          "Jamie Carragher",
          "Frank Lampard",
        ],
        answer: "Gareth Barry",
        explanation: "Gareth Barry made 653 PL appearances.",
      },
      {
        id: 8,
        question: "Which of these players has the most PL assists?",
        options: [
          "Cesc F\u00E0bregas",
          "Kevin De Bruyne",
          "Dennis Bergkamp",
          "Ryan Giggs",
        ],
        answer: "Ryan Giggs",
        explanation:
          "Ryan Giggs holds the record for the most assists with 162.",
      },
      {
        id: 9,
        question:
          "Which club holds the record for the most yellow cards in a single season?",
        options: ["Manchester City", "Liverpool", "Arsenal", "Chelsea"],
        answer: "Chelsea",
        explanation: " Chelsea received 105 yellow cards in the 2023/24 season",
      },
      {
        id: 10,
        question: "Which manager has managed the most PL clubs?",
        options: ["Roy Hodgson", "David Moyes", "Sam Allardyce", "Sean Dyche"],
        answer: "Sam Allardyce",
        explanation:
          "Sam Allardyce has managed 9 clubs, namely: Bolton Wanderers, Newcastle United, Blackburn Rovers, West Ham United, Sunderland, Crystal Palace, Everton, West Bromwich Albion, and Leeds United(2001/02 - 2022/23)",
      },
    ],
  },

  //spanish la liga
  {
    id: "laliga",
    name: "LaLiga EA Sports",
    logo: require("../assets/la-liga.png"),
    link: "https://en.wikipedia.org/wiki/La_Liga_records_and_statistics",
    questions: [
      {
        id: 1,
        question:
          "Which of these clubs has the record for the biggest win in a season?",
        options: [
          "Real Madrid",
          "Atlético Madrid",
          "Athletic Bilbao",
          "Barcelona",
        ],
        answer: "Athletic Bilbao",
        explanation:
          " Athletic Bilbao 12-1 Barcelona (8 February 1931) is the record for the biggest win in a La Liga season.",
      },
      {
        id: 2,
        question: "Player(s) with the most La Liga appeareances?",
        options: [
          "Lionel Messi",
          "Joaquín & Andoni Zubizarreta",
          "Sergio Ramos & Iker Casillas",
          "Raúl",
        ],
        answer: "Joaquín & Andoni Zubizarreta",
        explanation: "They both made 622 appearances in La Liga.",
      },
      {
        id: 3,
        question: "Which club has won the most league titles?",
        options: ["Barcelona", "Atlético Madrid", "Villarreal", "Real Madrid"],
        answer: "Real Madrid",
        explanation: "Real Madrid has won 36 league titles.",
      },
      {
        id: 4,
        question: "Most points in a season at home?",
        options: ["Barcelona", "Atlético Madrid", "Villarreal", "Real Madrid"],
        answer: "Barcelona",
        explanation:
          "Barcelona amassed 55 points in both the 2009-10 and 2012-13 seasons.",
      },
      {
        id: 5,
        question: "Most consecutive league games without a loss?",
        options: ["Granada CF", "Atlético Madrid", "Barcelona", "Real Madrid"],
        answer: "Barcelona",
        explanation:
          "Barcelona held the record for 43 games, from 8 April 2017 to 13 May 2018.",
      },
      {
        id: 6,
        question: "Which club has the most consecutive league titles?",
        options: ["Granada CF", "Real Sociedad", "Barcelona", "Real Madrid"],
        answer: "Real Madrid",
        explanation:
          "Real Madrid holds the record with 5 consecutive league titles, achieved twice: from 1961 to 1965 and from 1986 to 1990.",
      },
      {
        id: 7,
        question: "The player with the most goals in La Liga?",
        options: [
          "Telmo Zarra",
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Karim Benzema",
        ],
        answer: "Lionel Messi",
        explanation:
          "Lionel Messi, with 474 goals in 520 appearances, holds the record for the most goals scored.",
      },
      {
        id: 8,
        question: "Who is the fastest player to reach 300 La Liga goals?",
        options: [
          "Telmo Zarra",
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Karim Benzema",
        ],
        answer: "Cristiano Ronaldo",
        explanation:
          "On matchday 27, 3 March 2018,during the 2017-18 season, Cristiano Ronaldo reached the milestone in 286 games.",
      },

      {
        id: 9,
        question:
          "Which of these players holds the record for the fastest hat-trick in La Liga?",
        options: [
          "Bebeto",
          "Lionel Messi",
          "Cristiano Ronaldo",
          "Antoine Griezmann",
        ],
        answer: "Bebeto",
        explanation:
          "Bebeto holds the record for the fastest hat-trick in La Liga, scoring 3 goals in just 4 minutes and 43 seconds for Deportivo La Coruña against Albacete in 1995.",
      },
      {
        id: 10,
        question: "Which coach has managed the most matches?",
        options: [
          "José Mourinho",
          "Miguel Muñoz",
          "Pep Guardiola",
          "Luis Aragonés",
        ],
        answer: "Luis Aragonés",
        explanation:
          "Luis Aragonés holds the record, having managed 756 matches from 1974 to 2004.",
      },
    ],
  },
  // french ligue 1
  {
    id: "ligue-1",
    name: "French Ligue 1",
    logo: require("../assets/ligue-1.png"),
    link: "https://en.wikipedia.org/wiki/List_of_Ligue_1_records_and_statistics",
    questions: [
      {
        id: 1,
        question: "Which of these clubs has the most titles?",
        options: [
          "Paris Saint-Germain",
          "Saint-Étienne",
          "Monaco",
          "Marseille",
        ],
        answer: "Paris Saint-Germain",
        explanation:
          "Paris Saint-Germain has won the most titles, 12 in number.",
      },
      {
        id: 2,
        question:
          "Which club holds the record for the most consecutive league titles?",
        options: ["Paris Saint-Germain", "Lyon", "Montpellier", "Nantes"],
        answer: "Lyon",
        explanation: "Lyon won 7 consecutive league titles from 2002-2008.",
      },
      {
        id: 3,
        question: "Player(s) with the most titles?",
        options: [
          "Presnel Kimpembe",
          "Grégory Coupet & Juninho",
          "Marco Verratti & Marquinhos",
          "Jean-Michel Larqué",
        ],
        answer: "Marco Verratti & Marquinhos",
        explanation:
          "Marco Verratti and Marquinhos both have 9 titles to their names while playing for PSG.",
      },
      {
        id: 4,
        question: "The player with the most goals in Ligue 1?",
        options: [
          "Mickaël Landreau",
          "Delio Onnis",
          "Hervé Revelli",
          "Roger Courtois",
        ],
        answer: "Delio Onnis",
        explanation: "Delio Onnis scored a total of 299 goals in 449 games.",
      },
      {
        id: 5,
        question: "Player with the most ligue 1 appearances?",
        options: [
          "Mickaël Landreau",
          "Delio Onnis",
          "Hervé Revelli",
          "Roger Courtois",
        ],
        answer: "Mickaël Landreau",
        explanation:
          "Mickaël Landreau made 618 appearances between 1997 and 2014.",
      },
      {
        id: 6,
        question:
          "Which of these players holds the record for the fastest hat-trick in Ligue 1?",
        options: [
          "Delio Onnis",
          "Hervé Revelli",
          "Jérémy Ménez",
          "Loïs Openda",
        ],
        answer: "Loïs Openda",
        explanation:
          "Loïs Openda holds the record for the fastest hat-trick in Ligue 1, scoring 3 goals in just 4 minutes and 30 seconds for Lens against Clermont Foot on 12 March 2023.",
      },
      {
        id: 7,
        question: "Fewest losses in a single season?",
        options: ["Paris Saint-Germain", "Lyon", "Montpellier", "Nantes"],
        answer: "Nantes",
        explanation: "Nantes had 1 loss in the 1994-95 season.",
      },
      {
        id: 8,
        question: "Manager with the most matches managed?",
        options: [
          "Jacky Novi",
          "Patrick Battiston",
          "Guy Roux",
          "Alain Giresse",
        ],
        answer: "Guy Roux",
        explanation:
          "Guy Roux managed the most matches, with 894 in total: 890 for Auxerre (1961-2000, 2001-2005) and 4 for Lens (2007-2008).",
      },
      {
        id: 9,
        question:
          "Which of these clubs has the record for the biggest win in a season?",
        options: ["Nantes", "Lyon", "Montpellier", "Sochaux"],
        answer: "Sochaux",
        explanation:
          "Sochaux recorded the biggest win with a 12-1 victory over Valenciennes on 1 July 1935.",
      },
      {
        id: 10,
        question:
          "Which player holds the record for the most goals scored in a single season?",
        options: [
          "Jacky Novi",
          "Patrick Battiston",
          "Loïs Openda",
          "Josip Skoblar",
        ],
        answer: "Josip Skoblar",
        explanation:
          "Josip Skoblar scored 44 goals in 1971, earning him the European Golden Shoe.",
      },
    ],
  },
  //italian serie a
  {
    id: "serie-a",
    name: "Italian Serie A",
    logo: require("../assets/serie-a.png"),
    link: "https://en.wikipedia.org/wiki/Football_records_and_statistics_in_Italy",
    questions: [
      {
        id: 1,
        question: "Which of these clubs has won the most league championships?",
        options: ["Lazio", "Juventus", "AC Milan", "Inter Milan"],
        answer: "Juventus",
        explanation: "Juventus holds the record with 36 league titles.",
      },
      {
        id: 2,
        question: "Which club holds the record for the most consecutive wins?",
        options: ["Lazio", "Juventus", "AC Milan", "Inter Milan"],
        answer: "Inter Milan",
        explanation:
          "Inter Milan holds the record with 17 consecutive wins, achieved during the 2006-07 season.",
      },
      {
        id: 3,
        question: "Which player has won the most championships?",
        options: [
          "Paolo Maldini",
          "Giorgio Chiellini",
          "Gianluigi Buffon",
          "Franco Baresi",
        ],
        answer: "Gianluigi Buffon",
        explanation:
          "Gianluigi Buffon won 10 league championships, all with Juventus.",
      },
      {
        id: 4,
        question: "The player with the most Serie A appearances?",
        options: [
          "Paolo Maldini",
          "Giorgio Chiellini",
          "Gianluigi Buffon",
          "Franco Baresi",
        ],
        answer: "Gianluigi Buffon",
        explanation:
          "Gianluigi Buffons made 657 appearances between 1995 and 2021.",
      },
      {
        id: 5,
        question: "The player with the most goals in Serie A?",
        options: [
          "Francesco Totti",
          "Antonio Di Natale",
          "Silvio Piola",
          "Roberto Baggio",
        ],
        answer: "Silvio Piola",
        explanation: "Silvio Piola scored 274 goals in 537 appearances.",
      },
      {
        id: 6,
        question: "Who holds the record for the fastest goal in Serie A?",
        options: [
          "Francesco Totti",
          "Antonio Di Natale",
          "Rafael Leão",
          "Zlatan Ibrahimović",
        ],
        answer: "Rafael Leão",
        explanation:
          "Rafael Leão scored the fastest goal in Serie A, taking just 6.2 seconds on 20 December 2020, during Sassuolo vs. AC Milan (1-2).",
      },
      {
        id: 7,
        question: "Who is the oldest scorer in Serie A history?",
        options: [
          "Francesco Totti",
          "Antonio Di Natale",
          "Rafael Leão",
          "Zlatan Ibrahimović",
        ],
        answer: "Zlatan Ibrahimović",
        explanation:
          "Zlatan Ibrahimović became the oldest scorer at 41 years and 166 days on 18 March 2023, during Udinese vs. AC Milan (3-1).",
      },
      {
        id: 8,
        question: "Player(s) with the most goals in a single Serie A season?",
        options: [
          "Rafael Leão",
          "Francesco Totti & Antonio Di Natale ",
          "Zlatan Ibrahimović",
          "Gonzalo Higuaín & Ciro Immobile",
        ],
        answer: "Gonzalo Higuaín & Ciro Immobile",
        explanation:
          "Gonzalo Higuaín (2015-16) and Ciro Immobile (2019-20) share the record, each scoring 36 goals in a single season.",
      },
      {
        id: 9,
        question: "Which of these players has the most Serie A assists?",
        options: [
          "Francesco Totti",
          "Marek Hamšík",
          "Alessandro Del Piero",
          "Andrea Pirlo",
        ],
        answer: "Francesco Totti",
        explanation:
          "Francesco Totti holds the record for the most assists with 188 in 619 appearances.",
      },
      {
        id: 10,
        question: "Which manager holds the record for the most Serie A titles?",
        options: [
          "Fabio Capello",
          "Giovanni Trapattoni",
          "Massimiliano Allegri",
          "Antonio Conte",
        ],
        answer: "Giovanni Trapattoni",
        explanation:
          "Giovanni Trapattoni holds the record with 7 Serie A titles.",
      },
    ],
  },
  // german bundesliga
  {
    id: "bundesliga",
    name: "German Bundesliga",
    logo: require("../assets/bundesliga.png"),
    link: "https://www.bundesliga.com/en/faq/10-things-on-the-bundesliga/bundesliga-records-goals-titles-attendances-for-players-and-clubs-10555",
    questions: [
      {
        id: 1,
        question: "The All-time top goalscorer in Bundesliga is?",
        options: [
          "Gerd Müller",
          "Robert Lewandowski",
          "Thomas Müller",
          "Jupp Heynckes",
        ],
        answer: "Gerd Müller",
        explanation:
          "Gerd Müller scored 365 goals for Bayern Munich between 1964 and 1979.",
      },
      {
        id: 2,
        question: "The All-time top non-German goalscorer in Bundesliga is?",
        options: [
          "Gerd Müller",
          "Robert Lewandowski",
          "Thomas Müller",
          "Jupp Heynckes",
        ],
        answer: "Robert Lewandowski",
        explanation:
          "Robert Lewandowski scored 312 goals for Bayern Munich and Borussia Dortmund between 2010 and 2022.",
      },
      {
        id: 3,
        question:
          "Which of these clubs went through an entire league campaign unbeaten?",
        options: [
          "Bayern Munich",
          "Borussia Dortmund",
          "Bayer Leverkusen",
          "Borussia Mönchengladbach",
        ],
        answer: "Bayer Leverkusen",
        explanation:
          " Xabi Alonso's Bayer Leverkusen team of 2023/24 became the first and so far only to go an entire campaign without defeat (34 games).",
      },
      {
        id: 4,
        question:
          "Who holds the record for the most clean sheets in a single season by a goalkeeper?",
        options: ["Oliver Kahn", "Kevin Trapp", "Jens Lehmann", "Manuel Neuer"],
        answer: "Manuel Neuer",
        explanation:
          "Manuel Neuer kept 21 in 34 appearances for Bayern Munich in 2015/16.",
      },
      {
        id: 5,
        question: "The player with the most Bundesliga appearances?",
        options: [
          "Manuel Neuer",
          "Gerd Müller",
          "Thomas Müller",
          "Karl-Heinz 'Charly' Körbel",
        ],
        answer: "Karl-Heinz 'Charly' Körbel",
        explanation:
          " Karl-Heinz 'Charly' Körbel made a total of 602 Bundesliga appearances. And just to make that feat all the more impressive - he achieved it with just one club: Eintracht Frankfurt.",
      },
      {
        id: 6,
        question:
          "Which of these clubs has the record for the biggest win in a season??",
        options: [
          "Eintracht Frankfurt",
          "Bayer Leverkusen",
          "Borussia Mönchengladbach",
          "VfB Stuttgart",
        ],
        answer: "Borussia Mönchengladbach",
        explanation:
          "Borussia Mönchengladbach beat Borussia Dortmund 12-0 on the final matchday of the 1977/78 season, losing out on the title by three goals.",
      },
      {
        id: 7,
        question:
          "Most assists in a single season (since data collection began in 1992/93)?",
        options: [
          "Sepp Maier",
          "Thomas Müller",
          "Claudio Pizarro",
          "Xabi Alonso",
        ],
        answer: "Thomas Müller",
        explanation: "Thomas Müller set up 21 goals for Bayern in 2019/20.",
      },
      {
        id: 8,
        question: "Youngest goalscorer in the Bundesliga?",
        options: [
          "Youssoufa Moukoko",
          "Gerd Müller",
          "Robert Lewandowski",
          "Thomas Müller",
        ],
        answer: "Youssoufa Moukoko",
        explanation:
          " Youssoufa Moukoko was just 16 years and 28 days when he found the target for the first time in Dortmund's 2-1 loss away at Union Berlin in December 2020.",
      },
      {
        id: 9,
        question: "Most titles as a coach?",
        options: [
          "Jupp Heynckes",
          "Pep Guardiola",
          "Udo Lattek",
          "Jürgen Klopp",
        ],
        answer: "Udo Lattek",
        explanation:
          "Udo Lattek guided teams to the title on 8 occasions (6 with Bayern Munich, 2 with Borussia Mönchengladbach).",
      },
      {
        id: 10,
        question:
          "Who is the goalkeeper that holds the record for the most penalties saved?",
        options: ["Oliver Kahn", "Kevin Trapp", "Rudi Kargus", "Jens Lehmann"],
        answer: "Rudi Kargus",
        explanation:
          " Rudi Kargus denied opponents from 12 yards on 23 occasions, repelling almost a third of the 76 penalties he faced.",
      },
    ],
  },
];

export default leagues;
