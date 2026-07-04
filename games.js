const teamBadges = {
  "DSHS SnowTrex Köln": {
    "short": "DSK",
    "color": "#0D6FB8",
    "text": "#FFFFFF"
  },
  "Eintracht Spontent Düsseldorf": {
    "short": "ESD",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "ESA Grimma Volleys": {
    "short": "EGV",
    "color": "#C3C3C3",
    "text": "#111111"
  },
  "BayerVolleys Leverkusen": {
    "short": "BVL",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "NawaRo Straubing": {
    "short": "STR",
    "color": "#EE7101",
    "text": "#FFFFFF"
  },
  "Neuseenland-Volleys Markkleeberg": {
    "short": "NVM",
    "color": "#65B32E",
    "text": "#FFFFFF"
  },
  "Sparkassen Wildcats Stralsund": {
    "short": "SWS",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "TV Planegg-Krailling": {
    "short": "TVP",
    "color": "#A4CFA1",
    "text": "#111111"
  },
  "TV Waldgirmes": {
    "short": "TVW",
    "color": "#3898CF",
    "text": "#FFFFFF"
  },
  "VCO Dresden": {
    "short": "VCO",
    "color": "#009CD0",
    "text": "#FFFFFF"
  },
  "VfL Oythe": {
    "short": "OYT",
    "color": "#E31825",
    "text": "#FFFFFF"
  },
  "Rote Raben Vilsbiburg": {
    "short": "RRV",
    "color": "#E20010",
    "text": "#FFFFFF"
  },
  "BBSC Berlin": {
    "short": "BER",
    "color": "#D70079",
    "text": "#FFFFFF"
  },
  "TV Dingolfing": {
    "short": "TVD",
    "color": "#E0B187",
    "text": "#111111"
  },
  "TV Hörde": {
    "short": "TVH",
    "color": "#111111",
    "text": "#FFFFFF"
  }
};

const teamProfileUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308895",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776311815",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308803",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308933",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308823",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309559",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309386",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309673",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309795",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309105",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308853",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309082",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308987",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309004",
  "TV Hörde": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309275"
};

const teamLogoUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/uploads/9d7057ef-e7c8-4d41-9c70-3efce1b653a3/DSHS+SnowTrex+K%C3%B6ln.png",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/uploads/131fc503-06e0-4f69-a475-84adf278b0d9/BBSC+Berlin.png",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/uploads/bb11fe67-9f40-49ed-a42f-1e99316dadf9/Bayer+Leverkusen.png",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/uploads/e1c6edbd-64a5-4055-8f01-28c03e70f558/ESA+Grimma+Volleys_kreis.png",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/uploads/11eb6af6-6268-4767-8c60-813b6161d2fc/Eintracht+Spontent_Kreis.png",
  "TV Hörde": "https://www.volleyball-bundesliga.de/uploads/0a049112-a6b6-49b9-8e9d-38f09c907cb7/TV+H%C3%B6rde.png",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/uploads/10c17d7b-d082-4d7d-a4e0-f1d800544ff8/oythe.png",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/uploads/825c2558-e734-45c0-a93d-261df75fb4c3/Straubing.png",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/uploads/befce1b4-d568-4ffd-928a-d351be3301eb/Neuseenland-Volleys+Markkleeberg.png",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/uploads/19de3821-7526-4e46-a0b9-9cd60bf0535e/Vilsbiburg.png",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/uploads/edc53223-6279-497b-8f0c-a3b2bf93eed8/Sparkassen+Wildcats+Stralsund.png",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/uploads/b87f5e38-7eb4-4966-84a1-be0e4839f151/TV+Dingolfing.png",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/uploads/c44d2e47-3206-4312-ac8e-067faff3ac85/Planegg-Krailling_Kreis.png",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/uploads/89cb6afe-a0c8-4c30-a4c6-34cbe79176aa/TV_Waldgirmes_kreis.png",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/uploads/33ebca47-ee88-4505-80a3-8f625a651bdc/Dresden.png"
};

const youtubeViewsDate = "27.06.2026";

const youtubeViews = {
  "3197": 1637,
  "3189": 4150,
  "3194": 2006,
  "3186": 1438,
  "3195": 1483,
  "3205": 2688,
  "3207": 952,
  "3198": 2052,
  "3202": 1369,
  "3204": 1855,
  "3206": 819,
  "3196": 1466,
  "3201": 1742,
  "3199": 2218,
  "3184": 1481,
  "3192": 820,
  "3209": 648,
  "3200": 1263,
  "3188": 1404,
  "3193": 1345,
  "3183": 1207,
  "3208": 2001,
  "3190": 1715,
  "3187": 977,
  "3210": 1357,
  "3191": 1227,
  "3203": 2042,
  "3185": 839
};

const finalStandingsSource = "VBL-Tabelle, Stand 06.05.2026";

const finalStandings = {
  "overall": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 28,
      "wins": 26,
      "sets": "80:11",
      "balls": "2215:1651",
      "points": 79
    },
    {
      "rank": 2,
      "team": "NawaRo Straubing",
      "played": 28,
      "wins": 24,
      "sets": "76:28",
      "balls": "2439:1973",
      "points": 72
    },
    {
      "rank": 3,
      "team": "VfL Oythe",
      "played": 28,
      "wins": 24,
      "sets": "75:32",
      "balls": "2485:2184",
      "points": 69
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 28,
      "wins": 22,
      "sets": "71:30",
      "balls": "2327:2023",
      "points": 63
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 28,
      "wins": 17,
      "sets": "65:45",
      "balls": "2422:2341",
      "points": 52
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 28,
      "wins": 15,
      "sets": "56:52",
      "balls": "2357:2400",
      "points": 45
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 28,
      "wins": 15,
      "sets": "55:53",
      "balls": "2358:2293",
      "points": 44
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 28,
      "wins": 14,
      "sets": "54:49",
      "balls": "2258:2248",
      "points": 42
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 28,
      "wins": 13,
      "sets": "49:59",
      "balls": "2282:2309",
      "points": 35
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 28,
      "wins": 11,
      "sets": "49:63",
      "balls": "2332:2464",
      "points": 35
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 28,
      "wins": 9,
      "sets": "43:67",
      "balls": "2284:2456",
      "points": 27
    },
    {
      "rank": 12,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 28,
      "wins": 7,
      "sets": "34:70",
      "balls": "2128:2386",
      "points": 21
    },
    {
      "rank": 13,
      "team": "TV Dingolfing",
      "played": 28,
      "wins": 5,
      "sets": "32:75",
      "balls": "2134:2493",
      "points": 18
    },
    {
      "rank": 14,
      "team": "TV Hörde",
      "played": 28,
      "wins": 4,
      "sets": "26:77",
      "balls": "2067:2405",
      "points": 16
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 28,
      "wins": 4,
      "sets": "24:78",
      "balls": "1968:2430",
      "points": 12
    }
  ],
  "home": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 14,
      "sets": "42:3",
      "balls": "1108:803",
      "points": 42
    },
    {
      "rank": 2,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 13,
      "sets": "41:10",
      "balls": "1229:1000",
      "points": 40
    },
    {
      "rank": 3,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1215:1018",
      "points": 35
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "34:15",
      "balls": "1121:975",
      "points": 31
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 8,
      "sets": "32:24",
      "balls": "1243:1190",
      "points": 24
    },
    {
      "rank": 6,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 8,
      "sets": "31:26",
      "balls": "1245:1165",
      "points": 24
    },
    {
      "rank": 7,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 8,
      "sets": "28:24",
      "balls": "1143:1119",
      "points": 23
    },
    {
      "rank": 8,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 7,
      "sets": "29:28",
      "balls": "1205:1241",
      "points": 21
    },
    {
      "rank": 9,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1162:1199",
      "points": 20
    },
    {
      "rank": 10,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1201:1165",
      "points": 19
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 5,
      "sets": "25:30",
      "balls": "1196:1187",
      "points": 18
    },
    {
      "rank": 12,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 5,
      "sets": "20:33",
      "balls": "1078:1210",
      "points": 14
    },
    {
      "rank": 13,
      "team": "TV Hörde",
      "played": 14,
      "wins": 4,
      "sets": "17:35",
      "balls": "1093:1199",
      "points": 13
    },
    {
      "rank": 14,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 4,
      "sets": "16:34",
      "balls": "1023:1145",
      "points": 11
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:38",
      "balls": "983:1195",
      "points": 7
    }
  ],
  "away": [
    {
      "rank": 1,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 13,
      "sets": "39:13",
      "balls": "1224:955",
      "points": 37
    },
    {
      "rank": 2,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 12,
      "sets": "38:8",
      "balls": "1107:848",
      "points": 37
    },
    {
      "rank": 3,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1206:1048",
      "points": 32
    },
    {
      "rank": 4,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 11,
      "sets": "34:22",
      "balls": "1256:1184",
      "points": 29
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 9,
      "sets": "33:21",
      "balls": "1179:1151",
      "points": 28
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 8,
      "sets": "29:24",
      "balls": "1195:1201",
      "points": 25
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 7,
      "sets": "24:27",
      "balls": "1113:1128",
      "points": 20
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 6,
      "sets": "26:25",
      "balls": "1115:1129",
      "points": 19
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 6,
      "sets": "22:31",
      "balls": "1081:1144",
      "points": 16
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 4,
      "sets": "20:35",
      "balls": "1127:1223",
      "points": 14
    },
    {
      "rank": 11,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 3,
      "sets": "18:36",
      "balls": "1105:1241",
      "points": 10
    },
    {
      "rank": 12,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 4,
      "sets": "18:37",
      "balls": "1088:1269",
      "points": 9
    },
    {
      "rank": 13,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:40",
      "balls": "985:1235",
      "points": 5
    },
    {
      "rank": 14,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 0,
      "sets": "12:42",
      "balls": "1056:1283",
      "points": 4
    },
    {
      "rank": 15,
      "team": "TV Hörde",
      "played": 14,
      "wins": 0,
      "sets": "9:42",
      "balls": "974:1206",
      "points": 3
    }
  ]
};

const playerProfileUrls = {
  "Carlotta Strube": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761",
  "Valbona Ismaili": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=158916735",
  "Marian Mischo": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=685843413",
  "Georgia McGovern": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895387",
  "Charlotte Kerscher": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=767528985",
  "Lilly Roßberg": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982472",
  "Pia Fernau": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889",
  "Sophia Minlend": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=752329376",
  "Mille Kjosaas": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=778013892",
  "Amber de Tant": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=751749162",
  "Franziska Nitsche": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921",
  "Theresa Barner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=750792046",
  "Maja Löcker": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=750736056",
  "Maia Rackel": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028",
  "Zoe Albert": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233",
  "Julia Ziegler": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=742449977",
  "Emelie Siegner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70748100",
  "Franziska Finke": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=45496772",
  "Katherine Konkle": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=777954769",
  "Marie Dreblow": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=70141787",
  "Maria Petkova": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895333",
  "Jette Hippel": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554134",
  "Delaney Elizabeth Hogan": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=777743932",
  "Paula Reinisch": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=13394655",
  "Paula Gürsching": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=742778846",
  "Gesa Brandstrup": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=752329134",
  "Leonie Amann": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234",
  "Elisabeth Kettenbach": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=59149633",
  "Annika Stenchly": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70003721",
  "Franziska Koob": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854",
  "Emma Neukirchen": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=771345481",
  "Sophie Dreblow": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
};

const gameSummaries = {};

const games = [
  {
    "number": 3197,
    "matchId": 777354574,
    "weekday": "Samstag",
    "date": "04.10.2025",
    "time": "16:00",
    "home": "TV Waldgirmes",
    "away": "VCO Dresden",
    "score": "1:3",
    "ballPoints": "83:97",
    "sets": [
      "25:22",
      "18:25",
      "22:25",
      "18:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/b38d05d0-1744-4477-8398-c6957afa4a55/3197",
    "venue": "Sporthalle der Lahntalschule Atzbach",
    "spectators": 50,
    "duration": 91,
    "mvps": [
      {
        "team": "TV Waldgirmes",
        "name": "Emma Carlotta Dogu",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=685275014"
      },
      {
        "team": "VCO Dresden",
        "name": "Lena Olliges",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010"
      }
    ],
    "rankAfter": 8,
    "articleUrl": "https://www.giessener-allgemeine.de/sport/lokalsport/sieg-und-niederlage-93974740.html",
    "summary": [
      "Dresden führte zunächst 9:3, doch Waldgirmes stabilisierte Annahme und Abwehr und holte den ersten Satz mit 25:22. Danach übernahm der VCO wieder die Kontrolle, glich mit 25:18 aus und entschied auch die beiden folgenden Sätze mit 25:22 und 25:18 zum 3:1-Auswärtssieg für sich. Die MVP-Auszeichnungen gingen an Emma Carlotta Dogu (TV Waldgirmes) und Lena Olliges (VCO Dresden)."
    ],
    "videoUrl": "https://www.youtube.com/live/acwPxPbJXro?si=iYZ0WwHHOvlWhHb5",
    "articleTitle": "Sieg und Niederlage",
    "articleOrigin": "TVW"
  },
  {
    "number": 3189,
    "matchId": 777354454,
    "weekday": "Samstag",
    "date": "01.11.2025",
    "time": "16:00",
    "home": "VCO Dresden",
    "away": "Eintracht Spontent Düsseldorf",
    "score": "3:0",
    "ballPoints": "78:70",
    "sets": [
      "25:23",
      "25:21",
      "28:26"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/b91174ef-fd31-43b6-9f22-d0a82cf8fe16/3189",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 72,
    "duration": 75,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Zoe Albert",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233"
      },
      {
        "team": "Eintracht Spontent Düsseldorf",
        "name": "Carlotta Strube",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      }
    ],
    "rankAfter": 9,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779021406",
    "summary": [
      "Dresden geriet im ersten Heimspiel früh mit 1:7 in Rückstand, kämpfte sich aber mit stärkerem Block und stabilerem Sideout zurück und gewann den Auftaktsatz 25:23. Danach kontrollierte der VCO den zweiten Durchgang und behielt auch im umkämpften dritten Satz die Nerven: Nach drei abgewehrten Düsseldorfer Satzbällen verwandelte Jette Hippel zum 28:26 und 3:0. Die MVP-Auszeichnungen gingen an Zoe Albert (VCO Dresden) und Carlotta Strube (Eintracht Spontent Düsseldorf)."
    ],
    "videoUrl": "https://www.youtube.com/watch?v=ewv0bt6wZO4",
    "youtubeViews": 4150,
    "articleTitle": "VCO Dresden siegt 3:0 nach Achterbahnfahrt",
    "articleOrigin": "VCO"
  },
  {
    "number": 3194,
    "matchId": 777354478,
    "weekday": "Sonntag",
    "date": "02.11.2025",
    "time": "16:00",
    "home": "VCO Dresden",
    "away": "Rote Raben Vilsbiburg",
    "score": "1:3",
    "ballPoints": "76:88",
    "sets": [
      "18:25",
      "25:13",
      "15:25",
      "18:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/54eb5226-dca5-474c-8df2-cc8129b633b3/3194",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 105,
    "duration": 83,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Anni Tändler",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767229487"
      },
      {
        "team": "Rote Raben Vilsbiburg",
        "name": "Crystal Burk",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=771634116"
      }
    ],
    "rankAfter": 10,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779021483",
    "summary": [
      "Nach einem schwachen Start und dem 18:25 im ersten Satz reagierte Dresden eindrucksvoll: Mit mehr Aufschlagdruck und mutigem Angriffsspiel dominierte der VCO den zweiten Durchgang 25:13. Vilsbiburg steigerte anschließend Feldabwehr und Angriff, ließ Dresden kaum noch Lösungen und entschied die folgenden Sätze mit 25:15 und 25:18 zum 3:1. Die MVP-Auszeichnungen gingen an Anni Tändler (VCO Dresden) und Crystal Burk (Rote Raben Vilsbiburg)."
    ],
    "videoUrl": "https://www.youtube.com/live/DsDAhU_xwak?si=KeI8T0KR2PrN8Xxx",
    "youtubeViews": 2006,
    "articleTitle": "Niederlage gegen starke Vilsbiburger",
    "articleOrigin": "VCO"
  },
  {
    "number": 3186,
    "matchId": 777354436,
    "weekday": "Samstag",
    "date": "15.11.2025",
    "time": "18:00",
    "home": "VCO Dresden",
    "away": "TV Planegg-Krailling",
    "score": "2:3",
    "ballPoints": "111:112",
    "sets": [
      "25:27",
      "27:25",
      "26:28",
      "25:17",
      "8:15"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/c7ca8403-c2d7-4ab3-9be4-71f3aa7aedd2/3186",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 55,
    "duration": 123,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Lena Olliges",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010"
      },
      {
        "team": "TV Planegg-Krailling",
        "name": "Julia Ziegler",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=742449977"
      }
    ],
    "rankAfter": 10,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779294785",
    "summary": [
      "Dresden führte im ersten Satz lange, musste ihn nach einer engen Schlussphase aber 25:27 abgeben. Der VCO glich mit 27:25 aus, verlor den dritten Durchgang wiederum knapp 26:28 und erzwang mit einem klaren 25:17 den Tie-Break; dort setzte sich Planegg mit stabiler Block-Abwehr-Arbeit 15:8 durch. Die MVP-Auszeichnungen gingen an Lena Olliges (VCO Dresden) und Julia Ziegler (TV Planegg-Krailling)."
    ],
    "videoUrl": "https://www.youtube.com/live/doviBxEJPao?si=s3PJThvOnp9SdhaD",
    "youtubeViews": 1438,
    "articleTitle": "VCO unterliegt Planegg-Krailling mit 2:3",
    "articleOrigin": "VCO"
  },
  {
    "number": 3195,
    "matchId": 777354484,
    "weekday": "Sonntag",
    "date": "16.11.2025",
    "time": "16:00",
    "home": "VCO Dresden",
    "away": "TV Dingolfing",
    "score": "3:2",
    "ballPoints": "109:100",
    "sets": [
      "22:25",
      "22:25",
      "25:22",
      "25:17",
      "15:11"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/1c530309-4677-4430-aa98-e881c12a9c23/3195",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 73,
    "duration": 116,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Johanna Röhner",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554183"
      },
      {
        "team": "TV Dingolfing",
        "name": "Nina Herbe",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=744887457"
      }
    ],
    "rankAfter": 9,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779286009",
    "summary": [
      "Dingolfing gewann die ersten beiden Sätze jeweils mit 25:22. Dresden schlug mit 25:22 und 25:17 zurück und drehte anschließend auch den Tie-Break: Nach einem 6:8-Rückstand beim Seitenwechsel entschied der VCO den fünften Satz mit 15:11 und damit das Spiel mit 3:2 für sich. Die MVP-Auszeichnungen gingen an Johanna Röhner (VCO Dresden) und Nina Herbe (TV Dingolfing)."
    ],
    "videoUrl": "https://www.youtube.com/live/02SjsmXoQkM?si=mgD-MUOeCo_tvPFc",
    "articleTitle": "Nur ein Punkt aus Sachsen mitgenommen",
    "articleOrigin": "TVD"
  },
  {
    "number": 3205,
    "matchId": 777354538,
    "weekday": "Mittwoch",
    "date": "19.11.2025",
    "time": "15:00",
    "home": "ESA Grimma Volleys",
    "away": "VCO Dresden",
    "score": "3:2",
    "ballPoints": "92:96",
    "sets": [
      "25:22",
      "25:18",
      "11:25",
      "16:25",
      "15:6"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/251ee324-8cf0-4a0f-b9cf-c91d8660e2f9/3205",
    "venue": "Muldentalhalle",
    "spectators": 460,
    "duration": 94,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Sandra Seyfferth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=6325"
      },
      {
        "team": "VCO Dresden",
        "name": "Jette Hippel",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554134"
      }
    ],
    "rankAfter": 9,
    "summary": [
      "Grimma bestimmte die ersten beiden Sätze und führte nach 25:22 und 25:18 mit 2:0. Dresden steigerte sich deutlich, glich mit 25:11 und 25:16 aus, geriet im Tie-Break aber früh ins Hintertreffen; Grimma entschied ihn vor 460 Zuschauern mit 15:6. Die MVP-Auszeichnungen gingen an Sandra Seyfferth (ESA Grimma Volleys) und Jette Hippel (VCO Dresden)."
    ],
    "videoUrl": "https://www.youtube.com/live/75vU1v6kMrA?si=B6m6AR16s6L5x90S",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779325732",
    "articleTitle": "SACHSENDERBY in Grimma",
    "articleOrigin": "EGV"
  },
  {
    "number": 3207,
    "matchId": 777354550,
    "weekday": "Samstag",
    "date": "22.11.2025",
    "time": "19:30",
    "home": "TV Hörde",
    "away": "VCO Dresden",
    "score": "0:3",
    "ballPoints": "67:77",
    "sets": [
      "22:25",
      "25:27",
      "20:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/ce1f0e80-009a-454c-85f3-55df3dbb9127/3207",
    "venue": "Sporthalle Phoenix (Hörde III)",
    "spectators": 150,
    "duration": 80,
    "mvps": [
      {
        "team": "TV Hörde",
        "name": "Frauke Böcker",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=8173"
      },
      {
        "team": "VCO Dresden",
        "name": "Milla-Sophie Schilling",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894307"
      }
    ],
    "rankAfter": 9,
    "summary": [
      "Dresden setzte sich in den beiden umkämpften ersten Sätzen mit 25:22 und 27:25 durch. Im dritten Durchgang blieb der VCO konsequent und vollendete mit 25:20 den 3:0-Auswärtssieg in Dortmund. Die MVP-Auszeichnungen gingen an Frauke Böcker (TV Hörde) und Milla-Sophie Schilling (VCO Dresden)."
    ],
    "videoUrl": "https://www.youtube.com/live/OpYNxohtt9E?si=V-5N7vji5EN6qDE0",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779337845",
    "articleTitle": "Talentschmiede zu Gast in der Festung",
    "articleOrigin": "TVH"
  },
  {
    "number": 3198,
    "matchId": 777354496,
    "weekday": "Sonntag",
    "date": "23.11.2025",
    "time": "18:00",
    "home": "DSHS SnowTrex Köln",
    "away": "VCO Dresden",
    "score": "2:3",
    "ballPoints": "98:96",
    "sets": [
      "25:14",
      "25:17",
      "21:25",
      "14:25",
      "13:15"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/abf1bd5b-bd2e-4d08-9f5c-b24bd7b87959/3198",
    "venue": "Deutsche Sporthochschule Köln, Halle 22",
    "spectators": 151,
    "duration": 102,
    "mvps": [
      {
        "team": "DSHS SnowTrex Köln",
        "name": "Annika Stenchly",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70003721"
      },
      {
        "team": "VCO Dresden",
        "name": "Johanna Röhner",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554183"
      }
    ],
    "rankAfter": 7,
    "articleUrl": "https://www.dshs-snowtrex-koeln.de/dshs-snowtrex-koeln-mit-sieg-und-niederlage-am-doppelheimspielwochenende/",
    "galleryUrl": "https://www.flickr.com/photos/88608964@N07/albums/72177720330563314",
    "videoUrl": "https://www.youtube.com/watch?v=9C5l5mNIDkk",
    "summary": [
      "Köln führte nach zwei klaren Sätzen bereits 2:0, doch Dresden stabilisierte sich und drehte die Partie mit 25:21 und 25:14. Im Tie-Break blieb der VCO nach dem großen Comeback nervenstark und entschied den fünften Satz knapp mit 15:13 zum 3:2-Auswärtssieg. Die MVP-Auszeichnungen gingen an Annika Stenchly (DSHS SnowTrex Köln) und Johanna Röhner (VCO Dresden)."
    ],
    "youtubeViews": 2051,
    "articleTitle": "DSHS SnowTrex Köln mit Sieg und Niederlage am Doppelheimspielwochenende",
    "articleOrigin": "DSK"
  },
  {
    "number": 3202,
    "matchId": 777354520,
    "weekday": "Samstag",
    "date": "29.11.2025",
    "time": "19:00",
    "home": "NawaRo Straubing",
    "away": "VCO Dresden",
    "score": "3:1",
    "ballPoints": "102:72",
    "sets": [
      "27:29",
      "25:11",
      "25:13",
      "25:19"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/020f1071-7be5-44f6-bcd7-f528f1111f74/3202",
    "venue": "turmair Volleyballarena",
    "spectators": 150,
    "duration": 86,
    "mvps": [
      {
        "team": "NawaRo Straubing",
        "name": "Maia Rackel",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=771986028"
      },
      {
        "team": "VCO Dresden",
        "name": "Zoe Albert",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233"
      }
    ],
    "rankAfter": 9,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779472358",
    "summary": [
      "Dresden entschied den umkämpften ersten Satz mit 29:27 für sich. Danach spielte Straubing seine Überlegenheit konsequent aus, erhöhte besonders im Aufschlag und Angriff den Druck und gewann die folgenden drei Durchgänge deutlich mit 25:11, 25:13 und 25:19 zum 3:1-Heimsieg. Die MVP-Auszeichnungen gingen an Maia Rackel (NawaRo Straubing) und Zoe Albert (VCO Dresden)."
    ],
    "videoUrl": "https://www.youtube.com/live/6k_iE3Cvrk4?si=MGwl6zkUojmUdTxv",
    "youtubeViews": 1369,
    "articleTitle": "Fünfter Streich in Folge!",
    "articleOrigin": "STR"
  },
  {
    "number": 3204,
    "matchId": 777354532,
    "weekday": "Samstag",
    "date": "06.12.2025",
    "time": "17:00",
    "home": "Sparkassen Wildcats Stralsund",
    "away": "VCO Dresden",
    "score": "1:3",
    "ballPoints": "91:98",
    "sets": [
      "25:21",
      "20:25",
      "25:27",
      "21:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/30f29201-1e98-4729-8cf3-45f37086a38e/3204",
    "venue": "Diesterweg-Sporthalle",
    "spectators": 354,
    "duration": 101,
    "mvps": [
      {
        "team": "Sparkassen Wildcats Stralsund",
        "name": "Gesa Brandstrup",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=752329134"
      },
      {
        "team": "VCO Dresden",
        "name": "Lena Olliges",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010"
      }
    ],
    "rankAfter": 7,
    "summary": [
      "Nach dem 21:25 im ersten Satz stabilisierte Dresden sein Spiel und glich mit 25:20 aus. Den engen dritten Satz gewann der VCO mit 27:25 und machte den 3:1-Auswärtssieg anschließend mit 25:21 perfekt. Die MVP-Auszeichnungen gingen an Gesa Brandstrup (Sparkassen Wildcats Stralsund) und Lena Olliges (VCO Dresden)."
    ],
    "videoUrl": "https://www.youtube.com/live/jkfIhbfX7Zk?si=bjvTOrzqFm3CxoG1",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779553826",
    "articleTitle": "Spricht der Heimvorteil für Stralsund?",
    "articleOrigin": "SWS"
  },
  {
    "number": 3206,
    "matchId": 777354544,
    "weekday": "Samstag",
    "date": "13.12.2025",
    "time": "18:00",
    "home": "BBSC Berlin",
    "away": "VCO Dresden",
    "score": "0:3",
    "ballPoints": "65:75",
    "sets": [
      "21:25",
      "21:25",
      "23:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/61cbfa5a-2004-44f1-b679-32b72533edc2/3206",
    "venue": "Sporthalle Hämmerlingstraße",
    "spectators": 102,
    "duration": 68,
    "mvps": [
      {
        "team": "BBSC Berlin",
        "name": "Sophia Minlend",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=752329376"
      },
      {
        "team": "VCO Dresden",
        "name": "Esenia Fomenko",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554881"
      }
    ],
    "rankAfter": 7,
    "summary": [
      "Dresden kontrollierte die ersten beiden Sätze und gewann sie jeweils mit 25:21. Berlin führte im dritten Durchgang bereits 15:9, doch der VCO erhöhte wieder den Druck, drehte den Satz zum 25:23 und sicherte sich den 3:0-Auswärtssieg. Die MVP-Auszeichnungen gingen an Sophia Minlend (BBSC Berlin) und Esenia Fomenko (VCO Dresden)."
    ],
    "videoUrl": "https://www.youtube.com/live/QbIKyK6vKys?si=lo922THyi4Y4DfE4",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779707597",
    "articleTitle": "BBSC gegen VCO Dresden ohne Erfolg",
    "articleOrigin": "BER"
  },
  {
    "number": 3196,
    "matchId": 777354490,
    "weekday": "Sonntag",
    "date": "14.12.2025",
    "time": "15:00",
    "home": "VCO Dresden",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:1",
    "ballPoints": "97:90",
    "sets": [
      "25:19",
      "20:25",
      "27:25",
      "25:21"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/e2ae312a-52f7-4b71-a5fd-d3998fa8efe0/3196",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 132,
    "duration": 94,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Lena Olliges",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Emily Langguth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=11646493"
      }
    ],
    "rankAfter": 4,
    "summary": [
      "Im Sachsenderby gewann Dresden den ersten Satz mit 25:19, musste danach aber den Ausgleich hinnehmen. Ein umkämpftes 27:25 im dritten Durchgang brachte den VCO wieder in Führung; mit 25:21 machte Dresden den 3:1-Sieg perfekt. Die MVP-Auszeichnungen gingen an Lena Olliges (VCO Dresden) und Emily Langguth (Neuseenland-Volleys Markkleeberg)."
    ],
    "videoUrl": "https://www.youtube.com/live/zc4zA6CpoTk?si=Iu6GjYMr05WqR5Ce",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779750624",
    "articleTitle": "Spektakulärer Derbysieg",
    "articleOrigin": "VCO"
  },
  {
    "number": 3201,
    "matchId": 777354514,
    "weekday": "Freitag",
    "date": "19.12.2025",
    "time": "20:00",
    "home": "BayerVolleys Leverkusen",
    "away": "VCO Dresden",
    "score": "0:3",
    "ballPoints": "61:75",
    "sets": [
      "20:25",
      "19:25",
      "22:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/2c8cac03-ed21-456f-84db-9bb9f926256d/3201",
    "venue": "Ostermann-Arena",
    "spectators": 235,
    "duration": 73,
    "mvps": [
      {
        "team": "BayerVolleys Leverkusen",
        "name": "Svenja Enning",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=29160657"
      },
      {
        "team": "VCO Dresden",
        "name": "Maja Felber",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=765149933"
      }
    ],
    "rankAfter": 3,
    "videoUrl": "https://www.youtube.com/watch?v=4qbE9sDecPA",
    "summary": [
      "Dresden setzte Leverkusen von Beginn an unter Druck und gewann die ersten beiden Sätze mit 25:20 und 25:19. Auch im dritten Durchgang blieb der VCO stabil und vollendete mit 25:22 den glatten 3:0-Auswärtssieg. Die MVP-Auszeichnungen gingen an Svenja Enning (BayerVolleys Leverkusen) und Maja Felber (VCO Dresden)."
    ],
    "youtubeViews": 1742,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780084669",
    "articleTitle": "Köln vor schwerer Aufgabe in Dresden",
    "articleOrigin": "DSK"
  },
  {
    "number": 3199,
    "matchId": 777354502,
    "weekday": "Samstag",
    "date": "20.12.2025",
    "time": "18:00",
    "home": "VfL Oythe",
    "away": "VCO Dresden",
    "score": "3:1",
    "ballPoints": "99:76",
    "sets": [
      "25:18",
      "24:26",
      "25:17",
      "25:15"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/072c55b8-4674-4164-a1f8-f0f731cd95ef/3199",
    "venue": "SH Gymnasium Antonianum Vechta",
    "spectators": 223,
    "duration": 96,
    "mvps": [
      {
        "team": "VfL Oythe",
        "name": "Georgia McGovern",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895387"
      },
      {
        "team": "VCO Dresden",
        "name": "Lena Olliges",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010"
      }
    ],
    "rankAfter": 4,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779774674",
    "summary": [
      "Oythe gewann den ersten Satz 25:18, ehe Dresden einen engen zweiten Durchgang mit 26:24 zum Ausgleich nutzte. Danach übernahm der VfL wieder die Kontrolle, setzte sich mit 25:17 und 25:15 durch und stoppte mit dem 3:1-Erfolg die Dresdner Siegesserie. Die MVP-Auszeichnungen gingen an Georgia McGovern (VfL Oythe) und Lena Olliges (VCO Dresden)."
    ],
    "videoUrl": "https://www.youtube.com/live/LRHf6PeQbZ8?si=TTEEo3wZWm_VYKiO",
    "youtubeViews": 2218,
    "articleTitle": "Jahresabschluss mit Heim-Doppelpack",
    "articleOrigin": "OYT"
  },
  {
    "number": 3184,
    "matchId": 777354424,
    "weekday": "Samstag",
    "date": "17.01.2026",
    "time": "16:00",
    "home": "VCO Dresden",
    "away": "DSHS SnowTrex Köln",
    "score": "1:3",
    "ballPoints": "90:95",
    "sets": [
      "25:17",
      "26:28",
      "16:25",
      "23:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/2c28bcd9-a5b2-4ddb-a491-7b5ebbf57bf5/3184",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 73,
    "duration": 98,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Emilia Schaarschmidt",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767229256"
      },
      {
        "team": "DSHS SnowTrex Köln",
        "name": "Hannah Mörke",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70203755"
      }
    ],
    "rankAfter": 6,
    "articleUrl": "https://www.dshs-snowtrex-koeln.de/ein-sechs-punkte-wochenende-in-sachsen-fuer-dshs-snowtrex-koeln/",
    "videoUrl": "https://www.youtube.com/watch?v=Ok2_wA9qLdc&t=4694s",
    "summary": [
      "Dresden bestimmte den ersten Satz mit hohem Aufschlagdruck und Präsenz am Netz und gewann 25:17. Ein Kölner Doppelwechsel brachte im zweiten Durchgang die Wende; die Gäste holten den engen Satz 28:26, spielten danach befreiter und brachten den 3:1-Auswärtssieg trotz einer Dresdner Aufholjagd im vierten Satz konzentriert ins Ziel. Die MVP-Auszeichnungen gingen an Emilia Schaarschmidt (VCO Dresden) und Hannah Mörke (DSHS SnowTrex Köln)."
    ],
    "youtubeViews": 1481,
    "articleTitle": "Ein Sechs-Punkte-Wochenende in Sachsen für DSHS SnowTrex Köln",
    "articleOrigin": "DSK"
  },
  {
    "number": 3192,
    "matchId": 777354466,
    "weekday": "Sonntag",
    "date": "18.01.2026",
    "time": "15:00",
    "home": "VCO Dresden",
    "away": "BBSC Berlin",
    "score": "3:0",
    "ballPoints": "75:47",
    "sets": [
      "25:10",
      "25:14",
      "25:23"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/c21a5db9-3d6f-4dcc-a65f-b5ad59436e91/3192",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 78,
    "duration": 64,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Lena Olliges",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010"
      },
      {
        "team": "BBSC Berlin",
        "name": "Hanna Christin Lengkey",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=772060842"
      }
    ],
    "rankAfter": 6,
    "summary": [
      "Nach ausgeglichenem Beginn zog Dresden im ersten Satz mit einer starken Aufschlagserie davon und gewann 25:10. Der VCO dominierte auch den zweiten Satz mit 25:14 und behielt im engeren dritten Durchgang bis zum 25:23 die Kontrolle. Die MVP-Auszeichnungen gingen an Lena Olliges (VCO Dresden) und Hanna Christin Lengkey (BBSC Berlin)."
    ],
    "videoUrl": "https://www.youtube.com/live/uoAivaJcR-Q?si=k2MqriUS3RLvIqJq",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780142445",
    "articleTitle": "VCO Dresden sichert sich souveränen Sieg",
    "articleOrigin": "VCO"
  },
  {
    "number": 3209,
    "matchId": 777354562,
    "weekday": "Samstag",
    "date": "24.01.2026",
    "time": "19:00",
    "home": "TV Dingolfing",
    "away": "VCO Dresden",
    "score": "1:3",
    "ballPoints": "70:95",
    "sets": [
      "18:25",
      "25:20",
      "13:25",
      "14:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/54f0a40d-8a4b-4504-bd6e-2b8e91b8e34b/3209",
    "venue": "Sporthalle Höll-Ost",
    "spectators": 200,
    "duration": 87,
    "mvps": [
      {
        "team": "TV Dingolfing",
        "name": "Franziska Koob",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854"
      },
      {
        "team": "VCO Dresden",
        "name": "Johanna Röhner",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554183"
      }
    ],
    "rankAfter": 6,
    "summary": [
      "Dresden gewann den Auftaktsatz in Dingolfing mit 25:18, musste nach einem 20:25 aber den Ausgleich hinnehmen. Danach dominierte der VCO mit 25:13 und 25:14 und nahm mit dem 3:1-Erfolg drei Punkte mit. Die MVP-Auszeichnungen gingen an Franziska Koob (TV Dingolfing) und Johanna Röhner (VCO Dresden)."
    ],
    "videoUrl": "https://www.youtube.com/live/zphQgCEukqw?si=qHFvzBHPyvzmgP5L",
    "articleUrl": "https://women.volleybox.net/tv-dingolfing-vco-dresden-c314819",
    "articleTitle": "TV Dingolfing gegen VCO Dresden",
    "articleOrigin": "TVD",
    "statsUnavailable": true
  },
  {
    "number": 3200,
    "matchId": 777354508,
    "weekday": "Sonntag",
    "date": "25.01.2026",
    "time": "15:00",
    "home": "TV Planegg-Krailling",
    "away": "VCO Dresden",
    "score": "3:2",
    "ballPoints": "103:101",
    "sets": [
      "22:25",
      "25:15",
      "25:23",
      "16:25",
      "15:13"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/a2bd474a-c383-48ef-8b26-8212dc1d0d7d/3200",
    "venue": "Feodor-Lynen-Gymnasium",
    "spectators": 145,
    "duration": 108,
    "mvps": [
      {
        "team": "TV Planegg-Krailling",
        "name": "Elisabeth Kettenbach",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=59149633"
      },
      {
        "team": "VCO Dresden",
        "name": "Zoe Albert",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233"
      }
    ],
    "rankAfter": 5,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780216656",
    "summary": [
      "Dresden gewann den ausgeglichenen Auftaktsatz 25:22, während Planegg im zweiten Durchgang mit stabiler Abwehr klar antwortete. Nach dem knappen 23:25 erzwang der VCO mit einem starken 25:16 den Tie-Break, holte dort einen frühen Rückstand beinahe auf, musste sich aber 13:15 und insgesamt 2:3 geschlagen geben. Die MVP-Auszeichnungen gingen an Elisabeth Kettenbach (TV Planegg-Krailling) und Zoe Albert (VCO Dresden)."
    ],
    "videoUrl": "https://www.youtube.com/live/ehyu1eW9vmQ?si=d96MMdX1eBh6X5jV",
    "youtubeViews": 1263,
    "articleTitle": "Unglückliche 2:3 Niederlage des VCO",
    "articleOrigin": "VCO"
  },
  {
    "number": 3188,
    "matchId": 777354448,
    "weekday": "Samstag",
    "date": "31.01.2026",
    "time": "19:00",
    "home": "VCO Dresden",
    "away": "NawaRo Straubing",
    "score": "1:3",
    "ballPoints": "78:94",
    "sets": [
      "25:19",
      "12:25",
      "23:25",
      "18:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/2b75f4a7-2739-4a79-a694-9ba3006fd922/3188",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 86,
    "duration": 84,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Jette Hippel",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554134"
      },
      {
        "team": "NawaRo Straubing",
        "name": "Delaney Elizabeth Hogan",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=777743932"
      }
    ],
    "rankAfter": 5,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780313502",
    "summary": [
      "Dresden gewann einen hochklassigen ersten Satz mit variablem Angriffsspiel und starkem Aufschlag 25:19. Straubing antwortete deutlich mit 25:12, entschied den engen dritten Durchgang 25:23 und setzte sich anschließend mit stabiler Blockarbeit im vierten Satz 25:18 zum 3:1-Auswärtssieg durch. Die MVP-Auszeichnungen gingen an Jette Hippel (VCO Dresden) und Delaney Elizabeth Hogan (NawaRo Straubing)."
    ],
    "videoUrl": "https://www.youtube.com/live/gegbzNtsa8c?si=kph__Bc1EAaqqqe5",
    "youtubeViews": 1404,
    "articleTitle": "Spannendes Spitzenspiel",
    "articleOrigin": "VCO"
  },
  {
    "number": 3193,
    "matchId": 777354472,
    "weekday": "Sonntag",
    "date": "01.02.2026",
    "time": "15:00",
    "home": "VCO Dresden",
    "away": "TV Hörde",
    "score": "3:2",
    "ballPoints": "106:94",
    "sets": [
      "25:15",
      "15:25",
      "26:28",
      "25:16",
      "15:10"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/41f3e4b8-047b-4ea7-9350-b540d38771aa/3193",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 68,
    "duration": 102,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Jette Hippel",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554134"
      },
      {
        "team": "TV Hörde",
        "name": "Emma Neukirchen",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=771345481"
      }
    ],
    "rankAfter": 5,
    "summary": [
      "Dresden gewann den ersten Satz klar, verlor danach aber den Rhythmus und geriet mit 1:2 nach Sätzen in Rückstand. Mit Umstellungen stabilisierte sich der VCO, erzwang den Tie-Break und entschied diesen mit 15:10 zum 3:2-Heimsieg. Die MVP-Auszeichnungen gingen an Jette Hippel (VCO Dresden) und Emma Neukirchen (TV Hörde)."
    ],
    "videoUrl": "https://www.youtube.com/live/frThIXe_Q3c?si=Npgm5_tpech4Lc_m",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780313519",
    "articleTitle": "VCO gewinnt gegen Hörde",
    "articleOrigin": "VCO",
    "statsUnavailable": true
  },
  {
    "number": 3183,
    "matchId": 777354418,
    "weekday": "Sonntag",
    "date": "08.02.2026",
    "time": "15:00",
    "home": "VCO Dresden",
    "away": "TV Waldgirmes",
    "score": "3:1",
    "ballPoints": "97:92",
    "sets": [
      "25:20",
      "21:25",
      "26:24",
      "25:23"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/54d96b56-eee2-45ef-8032-283ecbdcbd22/3183",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 83,
    "duration": 97,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Jette Hippel",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554134"
      },
      {
        "team": "TV Waldgirmes",
        "name": "Yva Cesar",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=69788235"
      }
    ],
    "rankAfter": 5,
    "summary": [
      "Nach einem 25:20 zum Auftakt glich Waldgirmes mit 25:21 aus. Dresden drehte im dritten Satz einen deutlichen Rückstand noch zum 26:24 und spielte den vierten Durchgang anschließend kontrolliert zum 25:23 und 3:1-Heimsieg zu Ende. Die MVP-Auszeichnungen gingen an Jette Hippel (VCO Dresden) und Yva Cesar (TV Waldgirmes)."
    ],
    "videoUrl": "https://www.youtube.com/live/Vm6rasmd99Y?si=uLMpf8_1DUzlumFb",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780403317",
    "articleTitle": "VCO Dresden gewinnt 3:1 gegen Waldgirmes",
    "articleOrigin": "VCO"
  },
  {
    "number": 3208,
    "matchId": 777354556,
    "weekday": "Samstag",
    "date": "14.02.2026",
    "time": "19:00",
    "home": "Rote Raben Vilsbiburg",
    "away": "VCO Dresden",
    "score": "3:0",
    "ballPoints": "75:50",
    "sets": [
      "25:11",
      "25:20",
      "25:19"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/96046c21-30f4-4961-933e-6eb293d02933/3208",
    "venue": "Ballsporthalle Vilsbiburg",
    "spectators": 889,
    "duration": 56,
    "mvps": [
      {
        "team": "Rote Raben Vilsbiburg",
        "name": "Anne Marie Hatch",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=778056897"
      },
      {
        "team": "VCO Dresden",
        "name": "Zoe Albert",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233"
      }
    ],
    "rankAfter": 5,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780468170",
    "summary": [
      "Vilsbiburg setzte Dresden von Beginn an mit starken Aufschlägen und konsequenter Blockarbeit unter Druck und gewann den ersten Satz in nur 16 Minuten 25:11. Im zweiten Durchgang hielt der VCO länger dagegen, doch die Raben entschieden die Schlussphase mit zwei Blocks; auch im dritten Satz blieben sie souverän und vollendeten nach 56 Minuten das 3:0. Die MVP-Auszeichnungen gingen an Anne Marie Hatch (Rote Raben Vilsbiburg) und Zoe Albert (VCO Dresden)."
    ],
    "videoUrl": "https://www.youtube.com/live/HIaulpJkzcY?si=i75dTgYYJRwZ_tib",
    "youtubeViews": 2001,
    "articleTitle": "Rote Raben siegen souverän gegen VCO",
    "articleOrigin": "RRV"
  },
  {
    "number": 3190,
    "matchId": 777353293,
    "weekday": "Samstag",
    "date": "21.02.2026",
    "time": "13:30",
    "home": "VCO Dresden",
    "away": "Sparkassen Wildcats Stralsund",
    "score": "3:0",
    "ballPoints": "75:64",
    "sets": [
      "25:22",
      "25:23",
      "25:19"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/ac3b9327-cdfb-4d08-b8a0-9b9de8694c0c/3190",
    "venue": "Margon Arena",
    "spectators": 653,
    "duration": 78,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Lena Olliges",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010"
      },
      {
        "team": "Sparkassen Wildcats Stralsund",
        "name": "Amelie Grawert",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=70817295"
      }
    ],
    "rankAfter": 5,
    "summary": [
      "Vor rund 600 Zuschauern gewann Dresden trotz mehrerer Nationalmannschaftsabstellungen mit 3:0. Die ersten beiden Sätze blieben lange eng, ehe der VCO jeweils die Schlussphase beherrschte; im dritten Durchgang setzte sich Dresden ab der Satzmitte klarer durch. Die MVP-Auszeichnungen gingen an Lena Olliges (VCO Dresden) und Amelie Grawert (Sparkassen Wildcats Stralsund)."
    ],
    "videoUrl": "https://www.youtube.com/live/jt0_nVokeSw?si=9hvzonxvQHacgZdT",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780581484",
    "articleTitle": "VCO Dresden feiert 3:0 Erfolg",
    "articleOrigin": "VCO"
  },
  {
    "number": 3187,
    "matchId": 777354442,
    "weekday": "Sonntag",
    "date": "22.02.2026",
    "time": "15:00",
    "home": "VCO Dresden",
    "away": "BayerVolleys Leverkusen",
    "score": "1:3",
    "ballPoints": "77:93",
    "sets": [
      "25:18",
      "16:25",
      "18:25",
      "18:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/e2c2d566-adbd-473a-97d2-9d5242bbace1/3187",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 63,
    "duration": 86,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Emilia Schaarschmidt",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767229256"
      },
      {
        "team": "BayerVolleys Leverkusen",
        "name": "Marian Mischo",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=685843413"
      }
    ],
    "rankAfter": 5,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780588221",
    "videoUrl": "https://www.youtube.com/watch?v=0z3HJ2ygdMQ",
    "summary": [
      "Dresden startete stark und gewann den ersten Satz 25:18. Leverkusen blieb ruhig, erhöhte den Druck und nutzte seine Angriffe anschließend konsequenter; mit drei klaren Satzgewinnen zu 16, 18 und 18 drehten die BayerVolleys die Partie und schlossen ihr erfolgreiches Auswärtswochenende mit einem 3:1 ab. Die MVP-Auszeichnungen gingen an Emilia Schaarschmidt (VCO Dresden) und Marian Mischo (BayerVolleys Leverkusen)."
    ],
    "youtubeViews": 977,
    "articleTitle": "Marian Mischo führt Volleys zu zwei Siegen",
    "articleOrigin": "BVL",
    "statsUnavailable": true
  },
  {
    "number": 3210,
    "matchId": 777354568,
    "weekday": "Sonntag",
    "date": "08.03.2026",
    "time": "15:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "VCO Dresden",
    "score": "0:3",
    "ballPoints": "58:75",
    "sets": [
      "21:25",
      "23:25",
      "14:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/29fb259c-5a4a-4dd0-9fd1-001275542fd7/3210",
    "venue": "Neuseenlandhalle",
    "spectators": 270,
    "duration": 66,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Emily Langguth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=11646493"
      },
      {
        "team": "VCO Dresden",
        "name": "Esenia Fomenko",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554881"
      }
    ],
    "rankAfter": 5,
    "summary": [
      "Dresden setzte sich im ersten Satz ab der Anfangsphase ab und gewann 25:21. Markkleeberg glich im zweiten Satz noch zum 23:23 aus, doch der VCO holte die entscheidenden Punkte und dominierte anschließend den dritten Durchgang mit 25:14. Die MVP-Auszeichnungen gingen an Emily Langguth (Neuseenland-Volleys Markkleeberg) und Esenia Fomenko (VCO Dresden)."
    ],
    "videoUrl": "https://www.youtube.com/live/IJzx7DRGS9E?si=UgCkw9GF6XIqeONa",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780755888",
    "articleTitle": "(Zu)starke DSC-Talente",
    "articleOrigin": "NVM"
  },
  {
    "number": 3191,
    "matchId": 777354460,
    "weekday": "Sonntag",
    "date": "22.03.2026",
    "time": "15:00",
    "home": "VCO Dresden",
    "away": "ESA Grimma Volleys",
    "score": "3:0",
    "ballPoints": "75:51",
    "sets": [
      "25:12",
      "25:18",
      "25:21"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/b24ebf2d-b93b-4c2e-b159-b8ae07e00bc3/3191",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 182,
    "duration": 66,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Zoe Albert",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233"
      },
      {
        "team": "ESA Grimma Volleys",
        "name": "Sophie Dreblow",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=383895"
      }
    ],
    "rankAfter": 5,
    "summary": [
      "Trotz sieben Abstellungen für einen Nationalmannschaftslehrgang trat Dresden im Sachsenderby geschlossen auf. Nach dem klaren 25:12 kontrollierte der VCO auch den zweiten Satz und entschied den engeren dritten Durchgang mit einem Block zum 25:21. Die MVP-Auszeichnungen gingen an Zoe Albert (VCO Dresden) und Sophie Dreblow (ESA Grimma Volleys)."
    ],
    "videoUrl": "https://www.youtube.com/live/fcH49xt8wx4?si=MqOKyr1z__rsoxUd",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780944030",
    "articleTitle": "VCO Dresden gewinnt 3:0 gegen ESA Grimma",
    "articleOrigin": "VCO"
  },
  {
    "number": 3203,
    "matchId": 777354526,
    "weekday": "Samstag",
    "date": "11.04.2026",
    "time": "19:00",
    "home": "Eintracht Spontent Düsseldorf",
    "away": "VCO Dresden",
    "score": "1:3",
    "ballPoints": "87:96",
    "sets": [
      "19:25",
      "19:25",
      "25:20",
      "24:26"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/177b3409-eafa-497f-b0e4-44ba86de4c0e/3203",
    "venue": "DH Brinckmannstraße, Hulda Pankok",
    "spectators": 105,
    "duration": 87,
    "mvps": [
      {
        "team": "Eintracht Spontent Düsseldorf",
        "name": "Carlotta Strube",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      },
      {
        "team": "VCO Dresden",
        "name": "Lena Olliges",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010"
      }
    ],
    "rankAfter": 5,
    "videoUrl": "https://www.youtube.com/watch?v=LKSHHuIzHec&pp=ygUuRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBWQ08gRHJlc2Rlbg%3D%3D",
    "summary": [
      "Dresden bestimmte die ersten beiden Sätze und gewann jeweils mit 25:19. Düsseldorf verkürzte mit 25:20, doch der VCO behielt im umkämpften vierten Durchgang die Nerven und sicherte sich mit 26:24 den 3:1-Auswärtssieg. Die MVP-Auszeichnungen gingen an Carlotta Strube (Eintracht Spontent Düsseldorf) und Lena Olliges (VCO Dresden)."
    ],
    "youtubeViews": 2041,
    "articleUrl": "https://women.volleybox.net/eintracht-spontent-dusseldorf-vco-dresden-c314830",
    "articleTitle": "Eintracht Spontent Düsseldorf gegen VCO Dresden",
    "articleOrigin": "ESD",
    "statsUnavailable": true
  },
  {
    "number": 3185,
    "matchId": 777354430,
    "weekday": "Sonntag",
    "date": "26.04.2026",
    "time": "15:00",
    "home": "VCO Dresden",
    "away": "VfL Oythe",
    "score": "2:3",
    "ballPoints": "99:100",
    "sets": [
      "25:19",
      "23:25",
      "25:16",
      "19:25",
      "7:15"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/fbc80550-59c6-4cb7-96bf-55ded3ac52e0/3185",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 153,
    "duration": 104,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Zoe Albert",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=771894233"
      },
      {
        "team": "VfL Oythe",
        "name": "Mariele Meyer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=770100665"
      }
    ],
    "rankAfter": 5,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781304355",
    "summary": [
      "Dresden gewann beim letzten Heimspiel den ersten Satz 25:19 und holte sich nach Oythes knappem Ausgleich auch den dritten Durchgang klar 25:16. Der VfL erzwang mit 25:19 den Tie-Break und setzte sich dort 15:7 durch; trotz der 2:3-Niederlage verabschiedete sich der VCO mit einer kämpferischen Leistung von seinem Heimpublikum. Die MVP-Auszeichnungen gingen an Zoe Albert (VCO Dresden) und Mariele Meyer (VfL Oythe)."
    ],
    "videoUrl": "https://www.youtube.com/live/DhxtRl6W5HE?si=5LP4mwm1nWmej7Ho",
    "youtubeViews": 839,
    "articleTitle": "Emotionaler Heimabschluss",
    "articleOrigin": "VCO"
  }
];

games.forEach((game) => {
  const views = youtubeViews[String(game.number)];
  if (Number.isFinite(views)) game.youtubeViews = views;
});
