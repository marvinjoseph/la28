// LA 2028 Olympic Games Competition Schedule Data
// Extracted from official PDF v3.0 (As of March 16, 2026)
// All times are Pacific Time (PT) using 24-hour format
// Dates are in 2028

const SCHEDULE_DATA = [
  // 3x3 Basketball
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK301", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "14:00", end: "16:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK302", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "17:30", end: "19:30" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK303", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "21:00", end: "23:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK304", date: "2028-07-17", day: 3, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "14:00", end: "16:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK305", date: "2028-07-17", day: 3, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "17:30", end: "19:30" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK306", date: "2028-07-17", day: 3, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "21:00", end: "23:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK307", date: "2028-07-18", day: 4, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "14:00", end: "16:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK308", date: "2028-07-18", day: 4, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "17:30", end: "19:30" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK309", date: "2028-07-18", day: 4, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "21:00", end: "23:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK310", date: "2028-07-19", day: 5, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "14:00", end: "16:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK311", date: "2028-07-19", day: 5, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "17:30", end: "19:30" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK312", date: "2028-07-19", day: 5, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "21:00", end: "23:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK313", date: "2028-07-20", day: 6, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "14:00", end: "16:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK314", date: "2028-07-20", day: 6, type: "Preliminary", desc: "Men's Pool Round / Women's Pool Round", start: "17:30", end: "19:30" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK315", date: "2028-07-20", day: 6, type: "Preliminary", desc: "Men's Play-In / Women's Pool Round", start: "21:00", end: "23:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK316", date: "2028-07-21", day: 7, type: "Preliminary", desc: "Men's Play-In / Women's Play-In", start: "14:00", end: "16:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK317", date: "2028-07-21", day: 7, type: "Quarterfinal", desc: "Men's Quarterfinal / Women's Quarterfinal", start: "17:30", end: "19:30" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK318", date: "2028-07-21", day: 7, type: "Quarterfinal", desc: "Men's Quarterfinal / Women's Quarterfinal", start: "21:00", end: "23:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK319", date: "2028-07-22", day: 8, type: "Semifinal", desc: "Men's Semifinal / Women's Semifinal", start: "17:00", end: "19:00" },
  { sport: "3x3 Basketball", venue: "Valley Complex 3", zone: "Valley", code: "BK320", date: "2028-07-22", day: 8, type: "Final", desc: "Bronze & Gold Medal Games", start: "21:00", end: "23:30" },

  // Archery
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC01", date: "2028-07-19", day: 5, type: "Preliminary", desc: "Women's Compound / Men's Recurve Qualification", start: "9:30", end: "12:00" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC02", date: "2028-07-19", day: 5, type: "Preliminary", desc: "Men's Compound / Women's Recurve Qualification", start: "13:30", end: "16:30" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC03", date: "2028-07-21", day: 7, type: "Final", desc: "Compound Mixed Team", start: "19:30", end: "23:15" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC04", date: "2028-07-22", day: 8, type: "Preliminary", desc: "Recurve Individual 1/32 Elimination Round", start: "9:30", end: "12:35" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC05", date: "2028-07-22", day: 8, type: "Preliminary", desc: "Recurve Individual Elimination Rounds", start: "20:00", end: "22:35" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC06", date: "2028-07-23", day: 9, type: "Preliminary", desc: "Recurve Individual Elimination Rounds", start: "9:30", end: "12:35" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC07", date: "2028-07-23", day: 9, type: "Preliminary", desc: "Recurve Individual Elimination Rounds", start: "20:00", end: "22:35" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC08", date: "2028-07-24", day: 10, type: "Preliminary", desc: "Recurve Individual Elimination Rounds", start: "10:30", end: "12:40" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC09", date: "2028-07-24", day: 10, type: "Final", desc: "Recurve Men's Team", start: "19:30", end: "23:10" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC10", date: "2028-07-25", day: 11, type: "Preliminary", desc: "Recurve Individual 1/16 Elimination", start: "10:30", end: "12:40" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC11", date: "2028-07-25", day: 11, type: "Final", desc: "Recurve Women's Team", start: "19:30", end: "23:10" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC12", date: "2028-07-26", day: 12, type: "Preliminary", desc: "Recurve Mixed Team 1/8 Elimination", start: "10:30", end: "13:05" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC13", date: "2028-07-26", day: 12, type: "Final", desc: "Recurve Mixed Team", start: "20:00", end: "23:10" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC14", date: "2028-07-27", day: 13, type: "Preliminary", desc: "Recurve Men's Individual 1/8 Elimination", start: "10:30", end: "12:15" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC15", date: "2028-07-27", day: 13, type: "Final", desc: "Recurve Men's Individual Medal Matches", start: "20:30", end: "22:50" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC16", date: "2028-07-28", day: 14, type: "Preliminary", desc: "Recurve Women's Individual 1/8 Elimination", start: "9:30", end: "11:15" },
  { sport: "Archery", venue: "Carson Stadium", zone: "Carson", code: "ARC17", date: "2028-07-28", day: 14, type: "Final", desc: "Recurve Women's Individual Medal Matches", start: "20:30", end: "22:50" },

  // Artistic Gymnastics
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Men's Qualification 1", start: "11:30", end: "14:00" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR02", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Men's Qualification 2", start: "15:30", end: "18:00" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR03", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Men's Qualification 3", start: "19:30", end: "22:00" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR04", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Women's Qualification 1 and 2", start: "9:45", end: "13:35" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR05", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Women's Qualification 3", start: "15:05", end: "16:45" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR06", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Women's Qualification 4", start: "18:15", end: "19:55" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR07", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Women's Qualification 5", start: "21:25", end: "23:05" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR08", date: "2028-07-17", day: 3, type: "Final", desc: "Men's Team Final", start: "17:15", end: "20:30" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR09", date: "2028-07-18", day: 4, type: "Final", desc: "Women's Team Final", start: "18:00", end: "20:30" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR10", date: "2028-07-19", day: 5, type: "Final", desc: "Men's All-Around Final", start: "18:00", end: "20:30" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR11", date: "2028-07-20", day: 6, type: "Final", desc: "Women's All-Around Final", start: "18:00", end: "20:30" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR12", date: "2028-07-22", day: 8, type: "Final", desc: "Men's/Women's Apparatus Finals", start: "11:30", end: "14:15" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR13", date: "2028-07-23", day: 9, type: "Final", desc: "Men's/Women's Apparatus Finals", start: "11:00", end: "13:45" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR14", date: "2028-07-24", day: 10, type: "Final", desc: "Men's/Women's Apparatus Finals", start: "11:00", end: "14:30" },
  { sport: "Artistic Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GAR15", date: "2028-07-25", day: 11, type: "Final", desc: "Mixed Team Final", start: "16:00", end: "18:30" },

  // Artistic Swimming
  { sport: "Artistic Swimming", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "SWA01", date: "2028-07-25", day: 11, type: "Preliminary", desc: "Women's Duet Technical", start: "11:00", end: "13:00" },
  { sport: "Artistic Swimming", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "SWA02", date: "2028-07-26", day: 12, type: "Final", desc: "Women's Duet Free", start: "11:00", end: "13:15" },
  { sport: "Artistic Swimming", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "SWA03", date: "2028-07-27", day: 13, type: "Preliminary", desc: "Open Team Technical", start: "11:00", end: "12:30" },
  { sport: "Artistic Swimming", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "SWA04", date: "2028-07-28", day: 14, type: "Preliminary", desc: "Open Team Free", start: "11:00", end: "12:30" },
  { sport: "Artistic Swimming", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "SWA05", date: "2028-07-29", day: 15, type: "Final", desc: "Open Team Acrobatic", start: "10:45", end: "12:30" },

  // Athletics (Track & Field)
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "100m Preliminary, 5000m, Shot Put, Pole Vault, Hammer Throw, 800m", start: "9:00", end: "13:30" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH02", date: "2028-07-15", day: 1, type: "Final", desc: "400m Hurdles, High Jump, Discus, Triple Jump, 100m Semi, Shot Put Final, 10000m Final, 100m Final", start: "17:00", end: "20:15" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH03", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Decathlon 100m, Discus, Shot Put, Long Jump, 4x400m Relay, 800m Repechage", start: "9:00", end: "12:00" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH04", date: "2028-07-16", day: 2, type: "Final", desc: "Decathlon High Jump, Shot Put Final, 1500m, 100m Semi, Hammer Throw Final, 4x400m Relay Final, 100m Final", start: "15:15", end: "18:55" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH05", date: "2028-07-17", day: 3, type: "Final", desc: "110m Hurdles, Steeplechase, 400m, Triple Jump Final, 400m Hurdles Repechage", start: "9:00", end: "14:00" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH06", date: "2028-07-17", day: 3, type: "Final", desc: "Pole Vault Final, Javelin, 4x100m Relay, 1500m Repechage, 800m Semi, 4x100m Relay Final, 1500m Final", start: "16:30", end: "19:30" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH07", date: "2028-07-18", day: 4, type: "Preliminary", desc: "Pole Vault Qual, Steeplechase, 400m, Triple Jump Qual, 110m Hurdles", start: "9:30", end: "12:10" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH08", date: "2028-07-18", day: 4, type: "Final", desc: "200m, High Jump Final, Discus Final, 5000m Final, 400m Hurdles Semi, 800m Final", start: "15:50", end: "18:50" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH09", date: "2028-07-19", day: 5, type: "Final", desc: "Hammer Throw Qual, 400m Repechage, Long Jump Qual, 200m Repechage, 3000m Steeplechase Final", start: "9:35", end: "12:00" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH10", date: "2028-07-19", day: 5, type: "Final", desc: "110m Hurdles Repechage, Discus Final, 1500m, Long Jump Final, 200m, 1500m Final, 400m Hurdles Final", start: "16:00", end: "18:40" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH11", date: "2028-07-20", day: 6, type: "Final", desc: "Javelin Throw Qual, High Jump Qual, 800m, 3000m Steeplechase Final", start: "9:30", end: "12:00" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH12", date: "2028-07-20", day: 6, type: "Final", desc: "Pole Vault Final, 1500m Repechage, Hammer Throw Final, 400m Semi, 110m Hurdles Semi, 200m Semi, 400m Hurdles Final", start: "15:30", end: "19:30" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH13", date: "2028-07-21", day: 7, type: "Final", desc: "Heptathlon Hurdles, 5000m, Heptathlon High Jump, 100m Hurdles, Triple Jump Final, 800m Repechage", start: "9:35", end: "12:25" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH14", date: "2028-07-21", day: 7, type: "Final", desc: "Heptathlon Shot Put, Javelin Qual, 1500m Semi, 200m Semi, Heptathlon 200m, 10000m Final, 200m Final", start: "16:15", end: "19:20" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH15", date: "2028-07-22", day: 8, type: "Final", desc: "Heptathlon Long Jump/Javelin, 800m Semi, Long Jump Final, 4x100m Relay, 400m Final, Heptathlon 800m Final, 200m Final", start: "14:05", end: "18:15" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH16", date: "2028-07-23", day: 9, type: "Final", desc: "4x400m Relay, High Jump Final, Javelin Final, 4x100m Relay, 800m Final, 1500m Final, 4x100m Relay Final", start: "15:40", end: "18:15" },
  { sport: "Athletics (Track & Field)", venue: "LA Memorial Coliseum", zone: "Exposition Park", code: "ATH17", date: "2028-07-24", day: 10, type: "Final", desc: "Javelin Final, 4x100m Relay Final, 5000m Final, 100m Hurdles Final, 4x400m Relay Final", start: "16:25", end: "19:05" },
  { sport: "Athletics (Race Walk)", venue: "TBD", zone: "TBD", code: "ATH18", date: "2028-07-27", day: 13, type: "Final", desc: "Half-Marathon Race Walk", start: "7:30", end: "11:35" },
  { sport: "Athletics (Marathon)", venue: "Venice Beach Boardwalk", zone: "Venice", code: "ATH19", date: "2028-07-29", day: 15, type: "Final", desc: "Women's Marathon", start: "7:15", end: "10:15" },
  { sport: "Athletics (Marathon)", venue: "Venice Beach Boardwalk", zone: "Venice", code: "ATH20", date: "2028-07-30", day: 16, type: "Final", desc: "Men's Marathon", start: "7:15", end: "10:15" },

  // Badminton
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Group Play Stage (All Events)", start: "8:00", end: "12:15" },
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM02", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Group Play Stage (All Events)", start: "14:00", end: "16:35" },
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM03", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Group Play Stage (All Events)", start: "18:30", end: "23:05" },
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM13", date: "2028-07-19", day: 5, type: "Quarterfinal", desc: "Mixed Doubles QF / Singles Group Play", start: "8:00", end: "11:45" },
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM16", date: "2028-07-20", day: 6, type: "Semifinal", desc: "Mixed Doubles Semifinal / Doubles QF", start: "8:00", end: "12:25" },
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM19", date: "2028-07-21", day: 7, type: "Final", desc: "Mixed Doubles Medal Matches / Doubles Semifinal", start: "8:00", end: "13:05" },
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM20", date: "2028-07-21", day: 7, type: "Semifinal", desc: "Singles Quarterfinal / Doubles Semifinal", start: "16:00", end: "23:05" },
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM21", date: "2028-07-22", day: 8, type: "Final", desc: "Women's Doubles Gold / Men's Doubles Bronze", start: "8:00", end: "10:45" },
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM22", date: "2028-07-22", day: 8, type: "Quarterfinal", desc: "Women's Singles Quarterfinal", start: "18:30", end: "23:15" },
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM23", date: "2028-07-23", day: 9, type: "Final", desc: "Men's Doubles Gold / Men's Singles Semifinal", start: "8:00", end: "11:35" },
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM25", date: "2028-07-24", day: 10, type: "Final", desc: "Men's/Women's Singles Gold & Bronze", start: "8:00", end: "10:45" },
  { sport: "Badminton", venue: "Galen Center", zone: "Exposition Park", code: "BDM26", date: "2028-07-24", day: 10, type: "Final", desc: "Women's/Men's Singles Bronze & Gold", start: "20:30", end: "23:15" },

  // Baseball
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB01", date: "2028-07-13", day: -1, type: "Preliminary", desc: "Men's Opening Round", start: "11:00", end: "14:00" },
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB02", date: "2028-07-13", day: -1, type: "Preliminary", desc: "Men's Opening Round", start: "19:00", end: "22:00" },
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB03", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Men's Opening Round", start: "11:00", end: "14:00" },
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB04", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Men's Opening Round", start: "19:00", end: "22:00" },
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB05", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Men's Opening Round", start: "11:00", end: "14:00" },
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB06", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Men's Opening Round", start: "19:00", end: "22:00" },
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB07", date: "2028-07-17", day: 3, type: "Preliminary", desc: "Men's Quarterfinal", start: "11:00", end: "14:00" },
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB08", date: "2028-07-17", day: 3, type: "Preliminary", desc: "Men's Quarterfinal", start: "19:00", end: "22:00" },
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB09", date: "2028-07-18", day: 4, type: "Semifinal", desc: "Men's Semifinal", start: "11:00", end: "14:00" },
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB10", date: "2028-07-18", day: 4, type: "Semifinal", desc: "Men's Semifinal", start: "19:00", end: "22:00" },
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB11", date: "2028-07-19", day: 5, type: "Final", desc: "Men's Bronze Medal Game", start: "11:00", end: "14:00" },
  { sport: "Baseball", venue: "Dodger Stadium", zone: "DTLA", code: "BSB12", date: "2028-07-19", day: 5, type: "Final", desc: "Men's Gold Medal Game", start: "19:00", end: "22:30" },

  // Basketball
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB01", date: "2028-07-12", day: -2, type: "Preliminary", desc: "Women's Group Phase", start: "12:00", end: "16:15" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB07", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Men's Group Phase", start: "12:00", end: "18:15" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB28", date: "2028-07-22", day: 8, type: "Quarterfinal", desc: "Women's Quarterfinal", start: "13:00", end: "15:00" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB29", date: "2028-07-22", day: 8, type: "Quarterfinal", desc: "Women's Quarterfinal", start: "20:00", end: "22:00" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB32", date: "2028-07-24", day: 10, type: "Quarterfinal", desc: "Men's Quarterfinal", start: "20:00", end: "22:00" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB36", date: "2028-07-26", day: 12, type: "Semifinal", desc: "Women's Semifinal", start: "16:00", end: "18:00" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB37", date: "2028-07-26", day: 12, type: "Semifinal", desc: "Women's Semifinal", start: "21:30", end: "23:30" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB38", date: "2028-07-27", day: 13, type: "Semifinal", desc: "Men's Semifinal", start: "16:00", end: "18:30" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB39", date: "2028-07-27", day: 13, type: "Semifinal", desc: "Men's Semifinal", start: "21:30", end: "23:30" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB40", date: "2028-07-28", day: 14, type: "Final", desc: "Women's Bronze Medal Game", start: "16:00", end: "18:00" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB41", date: "2028-07-29", day: 15, type: "Final", desc: "Men's Bronze Medal Game", start: "12:00", end: "14:00" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB42", date: "2028-07-29", day: 15, type: "Final", desc: "Women's Gold Medal Match", start: "16:00", end: "18:15" },
  { sport: "Basketball", venue: "Intuit Dome", zone: "Inglewood", code: "BKB43", date: "2028-07-30", day: 16, type: "Final", desc: "Men's Gold Medal Game", start: "12:45", end: "15:00" },

  // Beach Volleyball
  { sport: "Beach Volleyball", venue: "Alamitos Beach Stadium", zone: "Long Beach", code: "VBV01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Preliminaries (3 Matches)", start: "9:00", end: "12:00" },
  { sport: "Beach Volleyball", venue: "Alamitos Beach Stadium", zone: "Long Beach", code: "VBV02", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Preliminaries (4 Matches)", start: "14:00", end: "18:00" },
  { sport: "Beach Volleyball", venue: "Alamitos Beach Stadium", zone: "Long Beach", code: "VBV03", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Preliminaries (3 Matches)", start: "20:00", end: "23:00" },
  { sport: "Beach Volleyball", venue: "Alamitos Beach Stadium", zone: "Long Beach", code: "VBV32", date: "2028-07-25", day: 11, type: "Quarterfinal", desc: "Quarterfinals", start: "13:00", end: "15:00" },
  { sport: "Beach Volleyball", venue: "Alamitos Beach Stadium", zone: "Long Beach", code: "VBV33", date: "2028-07-25", day: 11, type: "Quarterfinal", desc: "Quarterfinals", start: "20:00", end: "22:00" },
  { sport: "Beach Volleyball", venue: "Alamitos Beach Stadium", zone: "Long Beach", code: "VBV36", date: "2028-07-27", day: 13, type: "Semifinal", desc: "Semifinals", start: "13:00", end: "15:00" },
  { sport: "Beach Volleyball", venue: "Alamitos Beach Stadium", zone: "Long Beach", code: "VBV37", date: "2028-07-27", day: 13, type: "Semifinal", desc: "Semifinals", start: "20:00", end: "22:00" },
  { sport: "Beach Volleyball", venue: "Alamitos Beach Stadium", zone: "Long Beach", code: "VBV38", date: "2028-07-28", day: 14, type: "Final", desc: "Women's Bronze & Gold Medal Match", start: "15:30", end: "18:30" },
  { sport: "Beach Volleyball", venue: "Alamitos Beach Stadium", zone: "Long Beach", code: "VBV39", date: "2028-07-29", day: 15, type: "Final", desc: "Men's Bronze & Gold Medal Match", start: "19:00", end: "22:00" },

  // BMX Freestyle
  { sport: "BMX Freestyle", venue: "Valley Complex 1", zone: "Valley", code: "BMF01", date: "2028-07-28", day: 14, type: "Preliminary", desc: "Men's/Women's Park Qualification", start: "10:30", end: "13:30" },
  { sport: "BMX Freestyle", venue: "Valley Complex 1", zone: "Valley", code: "BMF02", date: "2028-07-29", day: 15, type: "Final", desc: "Men's/Women's Park Final", start: "10:30", end: "13:50" },

  // BMX Racing
  { sport: "BMX Racing", venue: "Valley Complex 4", zone: "Valley", code: "BMX01", date: "2028-07-15", day: 1, type: "Quarterfinal", desc: "Men's/Women's Quarterfinal & Last Chance", start: "10:30", end: "12:50" },
  { sport: "BMX Racing", venue: "Valley Complex 4", zone: "Valley", code: "BMX02", date: "2028-07-16", day: 2, type: "Final", desc: "Men's/Women's Semifinal & Final", start: "10:30", end: "13:00" },

  // Boxing - Preliminary Stages
  { sport: "Boxing", venue: "Peacock Theater", zone: "DTLA", code: "BOX01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Round of 32 (Multiple Weight Classes)", start: "12:00", end: "14:30" },
  { sport: "Boxing", venue: "Peacock Theater", zone: "DTLA", code: "BOX02", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Round of 32 (Multiple Weight Classes)", start: "19:00", end: "21:30" },
  { sport: "Boxing", venue: "Peacock Theater", zone: "DTLA", code: "BOX07", date: "2028-07-18", day: 4, type: "Quarterfinal", desc: "Round of 32 / Quarterfinal", start: "12:00", end: "15:00" },
  { sport: "Boxing", venue: "Peacock Theater", zone: "DTLA", code: "BOX15", date: "2028-07-22", day: 8, type: "Semifinal", desc: "Quarterfinal / Semifinal (Multiple Classes)", start: "12:00", end: "15:00" },
  { sport: "Boxing", venue: "Peacock Theater", zone: "DTLA", code: "BOX16", date: "2028-07-22", day: 8, type: "Semifinal", desc: "Quarterfinal / Semifinal (Multiple Classes)", start: "19:00", end: "22:00" },
  { sport: "Boxing", venue: "DTLA Arena", zone: "DTLA", code: "BOX18", date: "2028-07-27", day: 13, type: "Final", desc: "Women's 51kg/54kg Semi, Women's 70kg Final, Men's 90kg Semi", start: "12:00", end: "14:00" },
  { sport: "Boxing", venue: "DTLA Arena", zone: "DTLA", code: "BOX19", date: "2028-07-27", day: 13, type: "Final", desc: "Women's 54kg Semi, Men's 55kg/70kg Final, Men's 80kg Semi", start: "18:00", end: "20:00" },
  { sport: "Boxing", venue: "DTLA Arena", zone: "DTLA", code: "BOX20", date: "2028-07-28", day: 14, type: "Final", desc: "Women's 60kg Semi, Men's 60kg Semi, Men's +90kg Final", start: "12:00", end: "13:30" },
  { sport: "Boxing", venue: "DTLA Arena", zone: "DTLA", code: "BOX22", date: "2028-07-29", day: 15, type: "Final", desc: "Women's 57kg/65kg Final, Men's 90kg Final", start: "12:00", end: "13:30" },
  { sport: "Boxing", venue: "DTLA Arena", zone: "DTLA", code: "BOX23", date: "2028-07-29", day: 15, type: "Final", desc: "Women's 54kg/60kg Final, Men's 60kg/80kg Final", start: "18:00", end: "20:00" },
  { sport: "Boxing", venue: "DTLA Arena", zone: "DTLA", code: "BOX24", date: "2028-07-30", day: 16, type: "Final", desc: "Women's 57kg/75kg Final, Men's 65kg/70kg Final", start: "12:00", end: "14:00" },

  // Canoe Slalom
  { sport: "Canoe Slalom", venue: "OKC Whitewater Center", zone: "OKC", code: "CSL01", date: "2028-07-14", day: 0, type: "Preliminary", desc: "Kayak/Canoe Single Heats", start: "9:00", end: "12:10" },
  { sport: "Canoe Slalom", venue: "OKC Whitewater Center", zone: "OKC", code: "CSL02", date: "2028-07-15", day: 1, type: "Final", desc: "Women's/Men's Kayak Single Final", start: "10:00", end: "13:10" },
  { sport: "Canoe Slalom", venue: "OKC Whitewater Center", zone: "OKC", code: "CSL09", date: "2028-07-22", day: 8, type: "Final", desc: "Kayak Cross Finals", start: "9:00", end: "11:20" },

  // Canoe Sprint
  { sport: "Canoe Sprint", venue: "Marine Stadium", zone: "Long Beach", code: "CSP01", date: "2028-07-25", day: 11, type: "Quarterfinal", desc: "Multiple Heats & Quarterfinals", start: "9:00", end: "12:30" },
  { sport: "Canoe Sprint", venue: "Marine Stadium", zone: "Long Beach", code: "CSP02", date: "2028-07-26", day: 12, type: "Final", desc: "Multiple Finals (500m, 1000m)", start: "9:00", end: "12:40" },
  { sport: "Canoe Sprint", venue: "Marine Stadium", zone: "Long Beach", code: "CSP03", date: "2028-07-27", day: 13, type: "Quarterfinal", desc: "Multiple Heats & Quarterfinals", start: "9:00", end: "13:30" },
  { sport: "Canoe Sprint", venue: "Marine Stadium", zone: "Long Beach", code: "CSP04", date: "2028-07-28", day: 14, type: "Final", desc: "Multiple Finals", start: "9:00", end: "12:40" },
  { sport: "Canoe Sprint", venue: "Marine Stadium", zone: "Long Beach", code: "CSP05", date: "2028-07-29", day: 15, type: "Final", desc: "All Remaining Finals", start: "9:00", end: "12:55" },

  // Climbing
  { sport: "Climbing", venue: "Long Beach Climbing Theater", zone: "Long Beach", code: "CLB01", date: "2028-07-24", day: 10, type: "Semifinal", desc: "Men's Boulder Semifinal", start: "9:30", end: "11:40" },
  { sport: "Climbing", venue: "Long Beach Climbing Theater", zone: "Long Beach", code: "CLB02", date: "2028-07-24", day: 10, type: "Preliminary", desc: "Men's/Women's Speed Qualification", start: "13:45", end: "15:25" },
  { sport: "Climbing", venue: "Long Beach Climbing Theater", zone: "Long Beach", code: "CLB03", date: "2028-07-25", day: 11, type: "Semifinal", desc: "Women's Boulder Semifinal", start: "9:15", end: "11:25" },
  { sport: "Climbing", venue: "Long Beach Climbing Theater", zone: "Long Beach", code: "CLB05", date: "2028-07-26", day: 12, type: "Final", desc: "Speed Finals (All Events)", start: "9:00", end: "10:30" },
  { sport: "Climbing", venue: "Long Beach Climbing Theater", zone: "Long Beach", code: "CLB07", date: "2028-07-27", day: 13, type: "Final", desc: "Men's Boulder Final", start: "9:00", end: "10:55" },
  { sport: "Climbing", venue: "Long Beach Climbing Theater", zone: "Long Beach", code: "CLB08", date: "2028-07-28", day: 14, type: "Final", desc: "Women's Boulder Final", start: "9:00", end: "10:55" },
  { sport: "Climbing", venue: "Long Beach Climbing Theater", zone: "Long Beach", code: "CLB09", date: "2028-07-28", day: 14, type: "Final", desc: "Men's Lead Final", start: "13:45", end: "15:00" },
  { sport: "Climbing", venue: "Long Beach Climbing Theater", zone: "Long Beach", code: "CLB10", date: "2028-07-29", day: 15, type: "Final", desc: "Women's Lead Final", start: "9:30", end: "10:45" },

  // Cricket
  { sport: "Cricket", venue: "Fairgrounds Cricket Stadium", zone: "Pomona", code: "CKT01", date: "2028-07-12", day: -2, type: "Preliminary", desc: "Women's Group Stage First Round", start: "9:00", end: "12:30" },
  { sport: "Cricket", venue: "Fairgrounds Cricket Stadium", zone: "Pomona", code: "CKT14", date: "2028-07-20", day: 6, type: "Final", desc: "Women's Gold Medal Match", start: "9:00", end: "13:00" },
  { sport: "Cricket", venue: "Fairgrounds Cricket Stadium", zone: "Pomona", code: "CKT27", date: "2028-07-28", day: 14, type: "Final", desc: "Men's Bronze Medal Match", start: "9:00", end: "12:30" },
  { sport: "Cricket", venue: "Fairgrounds Cricket Stadium", zone: "Pomona", code: "CKT28", date: "2028-07-29", day: 15, type: "Final", desc: "Men's Gold Medal Match", start: "9:00", end: "13:00" },

  // Cycling Road
  { sport: "Cycling Road (Time Trial)", venue: "TBD", zone: "TBD", code: "CRD01", date: "2028-07-19", day: 5, type: "Final", desc: "Men's/Women's Individual Time Trial", start: "10:30", end: "14:35" },
  { sport: "Cycling Road (Road Race)", venue: "Venice Beach Boardwalk", zone: "Venice", code: "CRD02", date: "2028-07-22", day: 8, type: "Final", desc: "Women's Road Race", start: "11:30", end: "16:15" },
  { sport: "Cycling Road (Road Race)", venue: "Venice Beach Boardwalk", zone: "Venice", code: "CRD03", date: "2028-07-23", day: 9, type: "Final", desc: "Men's Road Race", start: "9:00", end: "16:15" },

  // Cycling Track
  { sport: "Cycling Track", venue: "Carson Velodrome", zone: "Carson", code: "CTR01", date: "2028-07-25", day: 11, type: "Preliminary", desc: "Team Sprint Qualifying", start: "9:00", end: "10:00" },
  { sport: "Cycling Track", venue: "Carson Velodrome", zone: "Carson", code: "CTR02", date: "2028-07-25", day: 11, type: "Final", desc: "Team Sprint/Pursuit Finals", start: "12:00", end: "15:00" },
  { sport: "Cycling Track", venue: "Carson Velodrome", zone: "Carson", code: "CTR05", date: "2028-07-27", day: 13, type: "Final", desc: "Omnium, Keirin, Sprint Finals", start: "11:00", end: "16:05" },
  { sport: "Cycling Track", venue: "Carson Velodrome", zone: "Carson", code: "CTR07", date: "2028-07-28", day: 14, type: "Final", desc: "Sprint Finals, Madison Final", start: "13:00", end: "15:15" },

  // Diving
  { sport: "Diving", venue: "Rose Bowl Aquatics Center", zone: "Pasadena", code: "DIV01", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Women's 3m Springboard Preliminary", start: "10:00", end: "12:30" },
  { sport: "Diving", venue: "Rose Bowl Aquatics Center", zone: "Pasadena", code: "DIV02", date: "2028-07-17", day: 3, type: "Semifinal", desc: "Women's 3m Springboard Semifinal", start: "10:00", end: "12:00" },
  { sport: "Diving", venue: "Rose Bowl Aquatics Center", zone: "Pasadena", code: "DIV03", date: "2028-07-17", day: 3, type: "Final", desc: "Women's 3m Springboard Final", start: "15:30", end: "18:45" },
  { sport: "Diving", venue: "Rose Bowl Aquatics Center", zone: "Pasadena", code: "DIV06", date: "2028-07-19", day: 5, type: "Final", desc: "Men's 3m Springboard Final", start: "15:30", end: "18:45" },
  { sport: "Diving", venue: "Rose Bowl Aquatics Center", zone: "Pasadena", code: "DIV09", date: "2028-07-21", day: 7, type: "Preliminary", desc: "Men's 10m Platform Preliminary", start: "10:00", end: "12:30" },
  { sport: "Diving", venue: "Rose Bowl Aquatics Center", zone: "Pasadena", code: "DIV10", date: "2028-07-21", day: 7, type: "Final", desc: "Women's 10m Platform Final", start: "15:30", end: "18:45" },
  { sport: "Diving", venue: "Rose Bowl Aquatics Center", zone: "Pasadena", code: "DIV12", date: "2028-07-22", day: 8, type: "Final", desc: "Men's 10m Platform Final", start: "15:30", end: "18:45" },
  { sport: "Diving", venue: "Rose Bowl Aquatics Center", zone: "Pasadena", code: "DIV13", date: "2028-07-25", day: 11, type: "Final", desc: "Women's Synchronized 3m Springboard Final", start: "11:30", end: "12:30" },
  { sport: "Diving", venue: "Rose Bowl Aquatics Center", zone: "Pasadena", code: "DIV14", date: "2028-07-26", day: 12, type: "Final", desc: "Men's Synchronized 3m Springboard Final", start: "14:00", end: "15:00" },
  { sport: "Diving", venue: "Rose Bowl Aquatics Center", zone: "Pasadena", code: "DIV15", date: "2028-07-27", day: 13, type: "Final", desc: "Women's Synchronized 10m Platform Final", start: "14:00", end: "15:00" },
  { sport: "Diving", venue: "Rose Bowl Aquatics Center", zone: "Pasadena", code: "DIV16", date: "2028-07-28", day: 14, type: "Final", desc: "Men's Synchronized 10m Platform Final", start: "16:00", end: "17:00" },

  // Equestrian
  { sport: "Equestrian", venue: "Santa Anita Park", zone: "Arcadia", code: "EQU01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Eventing Dressage & Individual Day 1", start: "9:00", end: "11:30" },
  { sport: "Equestrian", venue: "Santa Anita Park", zone: "Arcadia", code: "EQU05", date: "2028-07-18", day: 4, type: "Final", desc: "Eventing Jumping Team/Individual Final", start: "16:30", end: "22:00" },
  { sport: "Equestrian", venue: "Santa Anita Park", zone: "Arcadia", code: "EQU10", date: "2028-07-22", day: 8, type: "Final", desc: "Dressage Grand Prix Special Team Final Session 1", start: "9:00", end: "11:45" },
  { sport: "Equestrian", venue: "Santa Anita Park", zone: "Arcadia", code: "EQU12", date: "2028-07-24", day: 10, type: "Final", desc: "Dressage Grand Prix Freestyle Individual Final", start: "8:30", end: "12:00" },
  { sport: "Equestrian", venue: "Santa Anita Park", zone: "Arcadia", code: "EQU14", date: "2028-07-26", day: 12, type: "Final", desc: "Jumping Team Final", start: "9:00", end: "11:10" },
  { sport: "Equestrian", venue: "Santa Anita Park", zone: "Arcadia", code: "EQU16", date: "2028-07-29", day: 15, type: "Final", desc: "Jumping Individual Final", start: "9:00", end: "11:00" },

  // Fencing
  { sport: "Fencing", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "FEN01", date: "2028-07-15", day: 1, type: "Quarterfinal", desc: "Epee/Sabre Individual", start: "9:00", end: "15:40" },
  { sport: "Fencing", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "FEN02", date: "2028-07-15", day: 1, type: "Final", desc: "Epee/Sabre Individual Medal Bouts", start: "18:30", end: "22:20" },
  { sport: "Fencing", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "FEN03", date: "2028-07-16", day: 2, type: "Quarterfinal", desc: "Epee/Foil Individual", start: "9:00", end: "16:20" },
  { sport: "Fencing", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "FEN04", date: "2028-07-16", day: 2, type: "Final", desc: "Epee/Foil Individual Medal Bouts", start: "18:30", end: "22:40" },
  { sport: "Fencing", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "FEN07", date: "2028-07-18", day: 4, type: "Semifinal", desc: "Women's Epee Team", start: "9:00", end: "14:30" },
  { sport: "Fencing", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "FEN08", date: "2028-07-18", day: 4, type: "Final", desc: "Women's Epee Team Medal Matches", start: "17:30", end: "19:40" },
  { sport: "Fencing", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "FEN18", date: "2028-07-23", day: 9, type: "Final", desc: "Women's Sabre Team Gold Medal Match", start: "18:30", end: "21:40" },

  // Flag Football
  { sport: "Flag Football", venue: "Exposition Park Stadium", zone: "Exposition Park", code: "FFB01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Preliminaries (3 Games)", start: "14:00", end: "17:15" },
  { sport: "Flag Football", venue: "Exposition Park Stadium", zone: "Exposition Park", code: "FFB11", date: "2028-07-20", day: 6, type: "Semifinal", desc: "Men's Semifinal (2 Games)", start: "14:00", end: "16:10" },
  { sport: "Flag Football", venue: "Exposition Park Stadium", zone: "Exposition Park", code: "FFB12", date: "2028-07-21", day: 7, type: "Semifinal", desc: "Women's Semifinal (2 Games)", start: "13:30", end: "15:40" },
  { sport: "Flag Football", venue: "Exposition Park Stadium", zone: "Exposition Park", code: "FFB13", date: "2028-07-21", day: 7, type: "Final", desc: "Men's Bronze & Gold Medal Games", start: "17:30", end: "20:40" },
  { sport: "Flag Football", venue: "Exposition Park Stadium", zone: "Exposition Park", code: "FFB14", date: "2028-07-22", day: 8, type: "Final", desc: "Women's Bronze & Gold Medal Games", start: "12:30", end: "15:40" },

  // Football (Soccer) - select key matches
  { sport: "Football (Soccer)", venue: "Rose Bowl Stadium", zone: "Pasadena", code: "FBL52", date: "2028-07-24", day: 10, type: "Semifinal", desc: "Men's Semifinal", start: "20:30", end: "23:30" },
  { sport: "Football (Soccer)", venue: "Rose Bowl Stadium", zone: "Pasadena", code: "FBL54", date: "2028-07-25", day: 11, type: "Semifinal", desc: "Women's Semifinal", start: "20:30", end: "23:30" },
  { sport: "Football (Soccer)", venue: "Rose Bowl Stadium", zone: "Pasadena", code: "FBL57", date: "2028-07-28", day: 14, type: "Final", desc: "Men's Gold Medal Match", start: "18:00", end: "21:00" },
  { sport: "Football (Soccer)", venue: "Rose Bowl Stadium", zone: "Pasadena", code: "FBL58", date: "2028-07-29", day: 15, type: "Final", desc: "Women's Gold Medal Match", start: "12:30", end: "15:30" },

  // Golf
  { sport: "Golf", venue: "Riviera Country Club", zone: "Riviera", code: "GLF01", date: "2028-07-19", day: 5, type: "Preliminary", desc: "Men's Individual Stroke Play Round 1", start: "9:00", end: "18:00" },
  { sport: "Golf", venue: "Riviera Country Club", zone: "Riviera", code: "GLF04", date: "2028-07-22", day: 8, type: "Final", desc: "Men's Individual Stroke Play Round 4", start: "9:00", end: "18:30" },
  { sport: "Golf", venue: "Riviera Country Club", zone: "Riviera", code: "GLF05", date: "2028-07-23", day: 9, type: "Preliminary", desc: "Mixed Team Preliminary Round", start: "10:00", end: "18:55" },
  { sport: "Golf", venue: "Riviera Country Club", zone: "Riviera", code: "GLF06", date: "2028-07-24", day: 10, type: "Final", desc: "Mixed Team Final Round", start: "8:00", end: "14:00" },
  { sport: "Golf", venue: "Riviera Country Club", zone: "Riviera", code: "GLF07", date: "2028-07-26", day: 12, type: "Preliminary", desc: "Women's Individual Stroke Play Round 1", start: "9:00", end: "18:00" },
  { sport: "Golf", venue: "Riviera Country Club", zone: "Riviera", code: "GLF10", date: "2028-07-29", day: 15, type: "Final", desc: "Women's Individual Stroke Play Round 4", start: "9:00", end: "18:30" },

  // Handball
  { sport: "Handball", venue: "Long Beach Arena", zone: "Long Beach", code: "HBL07", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Men's Preliminary Round (2 Matches)", start: "9:00", end: "12:30" },
  { sport: "Handball", venue: "Long Beach Arena", zone: "Long Beach", code: "HBL39", date: "2028-07-25", day: 11, type: "Semifinal", desc: "Men's Semifinal", start: "9:30", end: "11:30" },
  { sport: "Handball", venue: "Long Beach Arena", zone: "Long Beach", code: "HBL40", date: "2028-07-25", day: 11, type: "Semifinal", desc: "Men's Semifinal", start: "13:00", end: "15:00" },
  { sport: "Handball", venue: "Long Beach Arena", zone: "Long Beach", code: "HBL43", date: "2028-07-27", day: 13, type: "Final", desc: "Men's Bronze Medal Match", start: "9:30", end: "11:30" },
  { sport: "Handball", venue: "Long Beach Arena", zone: "Long Beach", code: "HBL44", date: "2028-07-27", day: 13, type: "Final", desc: "Men's Gold Medal Match", start: "13:00", end: "15:30" },
  { sport: "Handball", venue: "Long Beach Arena", zone: "Long Beach", code: "HBL45", date: "2028-07-28", day: 14, type: "Final", desc: "Women's Bronze Medal Match", start: "9:30", end: "11:30" },
  { sport: "Handball", venue: "Long Beach Arena", zone: "Long Beach", code: "HBL46", date: "2028-07-28", day: 14, type: "Final", desc: "Women's Gold Medal Match", start: "13:00", end: "15:30" },

  // Hockey
  { sport: "Hockey", venue: "Carson Field", zone: "Carson", code: "HOC01", date: "2028-07-12", day: -2, type: "Preliminary", desc: "Men's Pool (2 Matches)", start: "9:00", end: "14:00" },
  { sport: "Hockey", venue: "Carson Field", zone: "Carson", code: "HOC27", date: "2028-07-26", day: 12, type: "Semifinal", desc: "Men's Semifinal", start: "9:00", end: "11:00" },
  { sport: "Hockey", venue: "Carson Field", zone: "Carson", code: "HOC28", date: "2028-07-26", day: 12, type: "Semifinal", desc: "Men's Semifinal", start: "20:00", end: "22:00" },
  { sport: "Hockey", venue: "Carson Field", zone: "Carson", code: "HOC31", date: "2028-07-28", day: 14, type: "Final", desc: "Women's Bronze Medal Match", start: "10:30", end: "12:30" },
  { sport: "Hockey", venue: "Carson Field", zone: "Carson", code: "HOC32", date: "2028-07-28", day: 14, type: "Final", desc: "Men's Gold Medal Match", start: "21:00", end: "23:30" },
  { sport: "Hockey", venue: "Carson Field", zone: "Carson", code: "HOC33", date: "2028-07-29", day: 15, type: "Final", desc: "Women's Bronze Medal Match", start: "10:30", end: "12:30" },
  { sport: "Hockey", venue: "Carson Field", zone: "Carson", code: "HOC34", date: "2028-07-29", day: 15, type: "Final", desc: "Women's Gold Medal Match", start: "21:00", end: "23:30" },

  // Judo
  { sport: "Judo", venue: "LA Convention Center Hall 2", zone: "DTLA", code: "JUD01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Women's -48kg / Men's -60kg Elimination", start: "10:00", end: "14:00" },
  { sport: "Judo", venue: "LA Convention Center Hall 2", zone: "DTLA", code: "JUD02", date: "2028-07-15", day: 1, type: "Final", desc: "Women's -48kg / Men's -60kg Finals", start: "16:00", end: "19:00" },
  { sport: "Judo", venue: "LA Convention Center Hall 2", zone: "DTLA", code: "JUD15", date: "2028-07-22", day: 8, type: "Semifinal", desc: "Mixed Team Elimination & Semifinal", start: "8:00", end: "14:00" },
  { sport: "Judo", venue: "LA Convention Center Hall 2", zone: "DTLA", code: "JUD16", date: "2028-07-22", day: 8, type: "Final", desc: "Mixed Team Final", start: "16:00", end: "19:00" },

  // Lacrosse
  { sport: "Lacrosse", venue: "Exposition Park Stadium", zone: "Exposition Park", code: "LAC01", date: "2028-07-24", day: 10, type: "Preliminary", desc: "Men's Qualifying Round (3 Games)", start: "11:30", end: "15:00" },
  { sport: "Lacrosse", venue: "Exposition Park Stadium", zone: "Exposition Park", code: "LAC11", date: "2028-07-28", day: 14, type: "Final", desc: "Men's Bronze & Gold Medal Game", start: "13:30", end: "18:15" },
  { sport: "Lacrosse", venue: "Exposition Park Stadium", zone: "Exposition Park", code: "LAC12", date: "2028-07-29", day: 15, type: "Final", desc: "Women's Bronze & Gold Medal Game", start: "20:30", end: "23:15" },

  // Modern Pentathlon
  { sport: "Modern Pentathlon", venue: "Valley Complex 2", zone: "Valley", code: "MPN01", date: "2028-07-15", day: 1, type: "Semifinal", desc: "Women's Individual Semifinal", start: "9:00", end: "13:30" },
  { sport: "Modern Pentathlon", venue: "Valley Complex 2", zone: "Valley", code: "MPN02", date: "2028-07-16", day: 2, type: "Semifinal", desc: "Men's Individual Semifinal", start: "9:00", end: "11:00" },
  { sport: "Modern Pentathlon", venue: "Valley Complex 2", zone: "Valley", code: "MPN03", date: "2028-07-17", day: 3, type: "Final", desc: "Women's Individual Final", start: "9:00", end: "11:00" },
  { sport: "Modern Pentathlon", venue: "Valley Complex 2", zone: "Valley", code: "MPN04", date: "2028-07-18", day: 4, type: "Final", desc: "Men's Individual Final", start: "9:00", end: "11:00" },

  // Mountain Bike
  { sport: "Mountain Bike", venue: "Industry Hills MTB Course", zone: "City of Industry", code: "MTB01", date: "2028-07-17", day: 3, type: "Final", desc: "Men's Cross-Country", start: "11:00", end: "13:30" },
  { sport: "Mountain Bike", venue: "Industry Hills MTB Course", zone: "City of Industry", code: "MTB02", date: "2028-07-18", day: 4, type: "Final", desc: "Women's Cross-Country", start: "11:00", end: "13:30" },

  // Open Water Swimming
  { sport: "Open Water Swimming", venue: "Belmont Shore", zone: "Long Beach", code: "OWS01", date: "2028-07-17", day: 3, type: "Final", desc: "Women's 10km", start: "13:30", end: "16:30" },
  { sport: "Open Water Swimming", venue: "Belmont Shore", zone: "Long Beach", code: "OWS02", date: "2028-07-18", day: 4, type: "Final", desc: "Men's 10km", start: "13:30", end: "16:30" },

  // Rhythmic Gymnastics
  { sport: "Rhythmic Gymnastics", venue: "Galen Center", zone: "Exposition Park", code: "GRY01", date: "2028-07-27", day: 13, type: "Preliminary", desc: "Individual All-Around Qualification 1 of 2", start: "12:30", end: "15:45" },
  { sport: "Rhythmic Gymnastics", venue: "Galen Center", zone: "Exposition Park", code: "GRY02", date: "2028-07-27", day: 13, type: "Preliminary", desc: "Individual All-Around Qualification 2 of 2", start: "17:30", end: "20:45" },
  { sport: "Rhythmic Gymnastics", venue: "Galen Center", zone: "Exposition Park", code: "GRY03", date: "2028-07-28", day: 14, type: "Preliminary", desc: "Group All-Around Qualification", start: "13:00", end: "15:45" },
  { sport: "Rhythmic Gymnastics", venue: "Galen Center", zone: "Exposition Park", code: "GRY04", date: "2028-07-28", day: 14, type: "Final", desc: "Individual All-Around Final", start: "18:00", end: "20:45" },
  { sport: "Rhythmic Gymnastics", venue: "Galen Center", zone: "Exposition Park", code: "GRY05", date: "2028-07-29", day: 15, type: "Final", desc: "Group All-Around Final", start: "13:00", end: "14:45" },

  // Rowing
  { sport: "Rowing", venue: "Marine Stadium", zone: "Long Beach", code: "ROW01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Single/Double Sculls Heats, Pair Heats", start: "12:00", end: "13:50" },
  { sport: "Rowing", venue: "Marine Stadium", zone: "Long Beach", code: "ROW05", date: "2028-07-19", day: 5, type: "Final", desc: "Single Sculls Finals, Four Finals", start: "8:00", end: "10:10" },
  { sport: "Rowing", venue: "Marine Stadium", zone: "Long Beach", code: "ROW07", date: "2028-07-21", day: 7, type: "Final", desc: "Single Sculls Finals, Eight Finals", start: "10:00", end: "11:30" },
  { sport: "Rowing", venue: "Marine Stadium", zone: "Long Beach", code: "ROW08", date: "2028-07-22", day: 8, type: "Final", desc: "Single Sculls Finals, Eight Finals", start: "10:30", end: "11:50" },

  // Rugby Sevens
  { sport: "Rugby Sevens", venue: "Carson Stadium", zone: "Carson", code: "RUJ01", date: "2028-07-12", day: -2, type: "Preliminary", desc: "Women's Pool Play (6 Matches)", start: "10:00", end: "13:00" },
  { sport: "Rugby Sevens", venue: "Carson Stadium", zone: "Carson", code: "RUJ05", date: "2028-07-15", day: 1, type: "Semifinal", desc: "Women's Placing/Semifinal", start: "13:00", end: "16:00" },
  { sport: "Rugby Sevens", venue: "Carson Stadium", zone: "Carson", code: "RUJ06", date: "2028-07-15", day: 1, type: "Final", desc: "Women's Bronze & Gold Medal Match", start: "19:00", end: "21:30" },
  { sport: "Rugby Sevens", venue: "Carson Stadium", zone: "Carson", code: "RUJ11", date: "2028-07-18", day: 4, type: "Semifinal", desc: "Men's Placing/Semifinal", start: "13:00", end: "16:00" },
  { sport: "Rugby Sevens", venue: "Carson Stadium", zone: "Carson", code: "RUJ12", date: "2028-07-18", day: 4, type: "Final", desc: "Men's Bronze & Gold Medal Match", start: "19:00", end: "21:30" },

  // Sailing
  { sport: "Sailing (Windsurfing & Kite)", venue: "Belmont Shore", zone: "Long Beach", code: "SAL01", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Kite/Windsurfing Qualification Day 1", start: "14:00", end: "20:00" },
  { sport: "Sailing (Windsurfing & Kite)", venue: "Belmont Shore", zone: "Long Beach", code: "SAL05", date: "2028-07-20", day: 6, type: "Final", desc: "Windsurfing/Kite Finals", start: "14:00", end: "17:00" },
  { sport: "Sailing (Dinghy, Skiff & Multihull)", venue: "Port of Los Angeles", zone: "Port of Los Angeles", code: "SAL06", date: "2028-07-23", day: 9, type: "Preliminary", desc: "Dinghy/Skiff Qualification Day 1", start: "14:00", end: "20:00" },
  { sport: "Sailing (Dinghy, Skiff & Multihull)", venue: "Port of Los Angeles", zone: "Port of Los Angeles", code: "SAL11", date: "2028-07-28", day: 14, type: "Final", desc: "Skiff/Dinghy/Multihull Finals", start: "14:00", end: "17:00" },

  // Shooting (Rifle & Pistol)
  { sport: "Shooting (Rifle & Pistol)", venue: "Long Beach Target Shooting Hall", zone: "Long Beach", code: "SHO01", date: "2028-07-15", day: 1, type: "Final", desc: "10m Air Rifle/Pistol Qualification & Finals", start: "13:45", end: "21:00" },
  { sport: "Shooting (Rifle & Pistol)", venue: "Long Beach Target Shooting Hall", zone: "Long Beach", code: "SHO02", date: "2028-07-16", day: 2, type: "Final", desc: "10m Air Pistol Qualification & Finals", start: "13:45", end: "21:00" },
  { sport: "Shooting (Rifle & Pistol)", venue: "Long Beach Target Shooting Hall", zone: "Long Beach", code: "SHO04", date: "2028-07-17", day: 3, type: "Final", desc: "Mixed Team 10m Air Rifle/Pistol Finals", start: "15:00", end: "21:00" },

  // Shooting (Shotgun)
  { sport: "Shooting (Shotgun)", venue: "Whittier Narrows Clay Shooting Center", zone: "Whittier Narrows", code: "SHO03", date: "2028-07-17", day: 3, type: "Preliminary", desc: "Men's/Women's Skeet Qualification Day 1", start: "9:30", end: "14:30" },
  { sport: "Shooting (Shotgun)", venue: "Whittier Narrows Clay Shooting Center", zone: "Whittier Narrows", code: "SHO05", date: "2028-07-18", day: 4, type: "Final", desc: "Skeet Qualification Day 2 & Finals", start: "9:30", end: "17:15" },
  { sport: "Shooting (Shotgun)", venue: "Whittier Narrows Clay Shooting Center", zone: "Whittier Narrows", code: "SHO12", date: "2028-07-24", day: 10, type: "Final", desc: "Mixed Team Trap Final", start: "9:30", end: "16:45" },

  // Skateboarding
  { sport: "Skateboarding (Street)", venue: "Valley Complex 1", zone: "Valley", code: "SKB01", date: "2028-07-18", day: 4, type: "Preliminary", desc: "Women's Street Preliminary", start: "17:00", end: "20:10" },
  { sport: "Skateboarding (Street)", venue: "Valley Complex 1", zone: "Valley", code: "SKB02", date: "2028-07-19", day: 5, type: "Preliminary", desc: "Men's Street Preliminary", start: "10:30", end: "13:40" },
  { sport: "Skateboarding (Street)", venue: "Valley Complex 1", zone: "Valley", code: "SKB03", date: "2028-07-19", day: 5, type: "Final", desc: "Women's Street Final", start: "20:30", end: "22:00" },
  { sport: "Skateboarding (Street)", venue: "Valley Complex 1", zone: "Valley", code: "SKB04", date: "2028-07-20", day: 6, type: "Final", desc: "Men's Street Final", start: "20:30", end: "22:00" },
  { sport: "Skateboarding (Park)", venue: "Valley Complex 2", zone: "Valley", code: "SKB05", date: "2028-07-25", day: 11, type: "Preliminary", desc: "Men's Park Preliminary", start: "10:30", end: "13:30" },
  { sport: "Skateboarding (Park)", venue: "Valley Complex 2", zone: "Valley", code: "SKB06", date: "2028-07-25", day: 11, type: "Preliminary", desc: "Women's Park Preliminary", start: "20:00", end: "23:00" },
  { sport: "Skateboarding (Park)", venue: "Valley Complex 2", zone: "Valley", code: "SKB07", date: "2028-07-26", day: 12, type: "Final", desc: "Men's Park Final", start: "20:00", end: "21:15" },
  { sport: "Skateboarding (Park)", venue: "Valley Complex 2", zone: "Valley", code: "SKB08", date: "2028-07-27", day: 13, type: "Final", desc: "Women's Park Final", start: "20:00", end: "21:15" },

  // Squash
  { sport: "Squash", venue: "Comcast Squash Center at Universal Studios", zone: "Universal City", code: "SQU01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Round of 16 (4 Matches)", start: "19:30", end: "23:15" },
  { sport: "Squash", venue: "Comcast Squash Center at Universal Studios", zone: "Universal City", code: "SQU05", date: "2028-07-19", day: 5, type: "Quarterfinal", desc: "Men's/Women's Quarterfinal (4 Matches)", start: "19:30", end: "23:15" },
  { sport: "Squash", venue: "Comcast Squash Center at Universal Studios", zone: "Universal City", code: "SQU08", date: "2028-07-22", day: 8, type: "Semifinal", desc: "Men's Semifinal (2 Matches)", start: "20:30", end: "23:15" },
  { sport: "Squash", venue: "Comcast Squash Center at Universal Studios", zone: "Universal City", code: "SQU09", date: "2028-07-23", day: 9, type: "Final", desc: "Women's Bronze & Gold Medal Match", start: "20:30", end: "23:30" },
  { sport: "Squash", venue: "Comcast Squash Center at Universal Studios", zone: "Universal City", code: "SQU10", date: "2028-07-24", day: 10, type: "Final", desc: "Men's Bronze & Gold Medal Match", start: "20:30", end: "23:30" },

  // Surfing
  { sport: "Surfing", venue: "Trestles State Beach", zone: "Trestles Beach", code: "SRF01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Men's/Women's Round 1", start: "7:00", end: "16:30" },
  { sport: "Surfing", venue: "Trestles State Beach", zone: "Trestles Beach", code: "SRF02", date: "2028-07-16", day: 2, type: "Preliminary", desc: "Men's/Women's Round 2", start: "7:00", end: "16:30" },
  { sport: "Surfing", venue: "Trestles State Beach", zone: "Trestles Beach", code: "SRF03", date: "2028-07-17", day: 3, type: "Preliminary", desc: "Men's/Women's Round 3", start: "7:00", end: "16:30" },
  { sport: "Surfing", venue: "Trestles State Beach", zone: "Trestles Beach", code: "SRF04", date: "2028-07-18", day: 4, type: "Final", desc: "Quarterfinals through Gold Medal Matches", start: "7:00", end: "17:30" },

  // Swimming
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM01", date: "2028-07-22", day: 8, type: "Preliminary", desc: "100m Butterfly/Freestyle/Backstroke/Breaststroke Heats", start: "9:30", end: "11:30" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM02", date: "2028-07-22", day: 8, type: "Final", desc: "400m Freestyle/Butterfly/Backstroke Finals & Relay", start: "18:00", end: "20:00" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM03", date: "2028-07-23", day: 9, type: "Preliminary", desc: "100m Breaststroke/Freestyle Heats, 400m IM Heats", start: "9:30", end: "11:30" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM04", date: "2028-07-23", day: 9, type: "Final", desc: "100m Butterfly/Breaststroke Final, 400m IM Final, Backstroke Final", start: "18:00", end: "20:00" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM05", date: "2028-07-24", day: 10, type: "Preliminary", desc: "400m IM Heats, 200m Freestyle Heats, Backstroke/Butterfly Heats", start: "9:30", end: "11:30" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM06", date: "2028-07-24", day: 10, type: "Final", desc: "100m Freestyle/Backstroke/Breaststroke Finals, 400m IM Final", start: "18:00", end: "20:00" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM07", date: "2028-07-25", day: 11, type: "Preliminary", desc: "200m Freestyle/Breaststroke Heats, 1500m Heats", start: "9:30", end: "11:30" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM08", date: "2028-07-25", day: 11, type: "Final", desc: "200m Freestyle/Breaststroke/Backstroke/Butterfly Finals", start: "18:00", end: "20:00" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM09", date: "2028-07-26", day: 12, type: "Preliminary", desc: "200m IM Heats, 50m Butterfly Heats, 4x200m Relay Heats", start: "9:30", end: "11:30" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM10", date: "2028-07-26", day: 12, type: "Final", desc: "200m Freestyle/Backstroke/Breaststroke Finals, 4x200m Relay Final", start: "18:00", end: "20:00" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM15", date: "2028-07-29", day: 15, type: "Preliminary", desc: "50m Freestyle Heats, 800m Heats, 4x100m Medley Relay Heats", start: "9:30", end: "11:30" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM16", date: "2028-07-29", day: 15, type: "Final", desc: "50m Freestyle Final, 800m Final, 4x100m Mixed Medley Final", start: "18:00", end: "20:00" },
  { sport: "Swimming", venue: "2028 Stadium", zone: "Inglewood", code: "SWM17", date: "2028-07-30", day: 16, type: "Final", desc: "50m Freestyle/200m Butterfly/800m Freestyle Final, 4x100m Medley Relay Final", start: "15:00", end: "16:30" },

  // Table Tennis
  { sport: "Table Tennis", venue: "LA Convention Center Hall 3", zone: "DTLA", code: "TTE01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Singles Round of 64, Mixed Doubles Round of 16", start: "10:00", end: "13:00" },
  { sport: "Table Tennis", venue: "LA Convention Center Hall 3", zone: "DTLA", code: "TTE09", date: "2028-07-17", day: 3, type: "Final", desc: "Mixed Doubles Bronze & Gold Medal Match", start: "21:00", end: "23:15" },
  { sport: "Table Tennis", venue: "LA Convention Center Hall 3", zone: "DTLA", code: "TTE23", date: "2028-07-22", day: 8, type: "Final", desc: "Women's Singles Bronze & Gold Medal Match", start: "14:00", end: "16:00" },
  { sport: "Table Tennis", venue: "LA Convention Center Hall 3", zone: "DTLA", code: "TTE25", date: "2028-07-23", day: 9, type: "Final", desc: "Men's Singles Bronze & Gold Medal Match", start: "21:00", end: "23:15" },
  { sport: "Table Tennis", venue: "LA Convention Center Hall 3", zone: "DTLA", code: "TTE37", date: "2028-07-29", day: 15, type: "Final", desc: "Mixed Team Gold Medal Match", start: "20:00", end: "22:45" },

  // Taekwondo
  { sport: "Taekwondo", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "TKW01", date: "2028-07-26", day: 12, type: "Preliminary", desc: "Women's -49kg / Men's -58kg Round", start: "9:00", end: "13:00" },
  { sport: "Taekwondo", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "TKW03", date: "2028-07-26", day: 12, type: "Final", desc: "Women's -49kg / Men's -58kg Medal Contests", start: "19:30", end: "23:00" },
  { sport: "Taekwondo", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "TKW06", date: "2028-07-27", day: 13, type: "Final", desc: "Women's -57kg / Men's -68kg Medal Contests", start: "19:30", end: "23:00" },
  { sport: "Taekwondo", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "TKW09", date: "2028-07-28", day: 14, type: "Final", desc: "Women's -67kg / Men's -80kg Medal Contests", start: "19:30", end: "23:00" },
  { sport: "Taekwondo", venue: "LA Convention Center Hall 1", zone: "DTLA", code: "TKW12", date: "2028-07-29", day: 15, type: "Final", desc: "Women's +67kg / Men's +80kg Medal Contests", start: "19:30", end: "23:00" },

  // Tennis
  { sport: "Tennis", venue: "Carson Center Court", zone: "Carson", code: "TEN01", date: "2028-07-19", day: 5, type: "Preliminary", desc: "Mixed Doubles Round 1 (3 Matches)", start: "11:00", end: "18:30" },
  { sport: "Tennis", venue: "Carson Center Court", zone: "Carson", code: "TEN06", date: "2028-07-20", day: 6, type: "Semifinal", desc: "Mixed Doubles Semifinal (2 Matches)", start: "11:00", end: "16:30" },
  { sport: "Tennis", venue: "Carson Center Court", zone: "Carson", code: "TEN10", date: "2028-07-20", day: 6, type: "Final", desc: "Mixed Doubles Bronze & Gold Medal Match", start: "18:30", end: "0:00" },
  { sport: "Tennis", venue: "Carson Center Court", zone: "Carson", code: "TEN31", date: "2028-07-25", day: 11, type: "Semifinal", desc: "Singles Semifinal, Doubles Semifinal", start: "11:00", end: "16:30" },
  { sport: "Tennis", venue: "Carson Center Court", zone: "Carson", code: "TEN38", date: "2028-07-27", day: 13, type: "Final", desc: "Women's Singles Bronze & Gold Medal Match", start: "11:00", end: "16:30" },
  { sport: "Tennis", venue: "Carson Center Court", zone: "Carson", code: "TEN39", date: "2028-07-27", day: 13, type: "Final", desc: "Men's Doubles Gold / Men's Singles Bronze", start: "18:30", end: "0:00" },
  { sport: "Tennis", venue: "Carson Center Court", zone: "Carson", code: "TEN40", date: "2028-07-28", day: 14, type: "Final", desc: "Men's Singles Gold Medal Match", start: "11:00", end: "16:00" },
  { sport: "Tennis", venue: "Carson Center Court", zone: "Carson", code: "TEN41", date: "2028-07-28", day: 14, type: "Final", desc: "Women's Doubles Bronze & Gold Medal Match", start: "18:30", end: "0:00" },

  // Trampoline Gymnastics
  { sport: "Trampoline Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GTR01", date: "2028-07-21", day: 7, type: "Final", desc: "Men's Qualification & Final", start: "12:30", end: "15:15" },
  { sport: "Trampoline Gymnastics", venue: "DTLA Arena", zone: "DTLA", code: "GTR02", date: "2028-07-21", day: 7, type: "Final", desc: "Women's Qualification & Final", start: "20:00", end: "22:45" },

  // Triathlon
  { sport: "Triathlon", venue: "Venice Beach", zone: "Venice", code: "TRI01", date: "2028-07-15", day: 1, type: "Final", desc: "Women's Individual", start: "7:30", end: "10:10" },
  { sport: "Triathlon", venue: "Venice Beach", zone: "Venice", code: "TRI02", date: "2028-07-16", day: 2, type: "Final", desc: "Men's Individual", start: "7:30", end: "10:00" },
  { sport: "Triathlon", venue: "Venice Beach", zone: "Venice", code: "TRI03", date: "2028-07-20", day: 6, type: "Final", desc: "Mixed Relay", start: "8:00", end: "10:00" },

  // Volleyball
  { sport: "Volleyball", venue: "Honda Center", zone: "Anaheim", code: "VVO01", date: "2028-07-15", day: 1, type: "Preliminary", desc: "Men's Preliminary", start: "9:00", end: "11:30" },
  { sport: "Volleyball", venue: "Honda Center", zone: "Anaheim", code: "VVO37", date: "2028-07-24", day: 10, type: "Quarterfinal", desc: "Men's Quarterfinal", start: "9:00", end: "11:30" },
  { sport: "Volleyball", venue: "Honda Center", zone: "Anaheim", code: "VVO45", date: "2028-07-26", day: 12, type: "Semifinal", desc: "Men's Semifinal", start: "11:00", end: "13:30" },
  { sport: "Volleyball", venue: "Honda Center", zone: "Anaheim", code: "VVO47", date: "2028-07-27", day: 13, type: "Semifinal", desc: "Women's Semifinal", start: "11:00", end: "13:30" },
  { sport: "Volleyball", venue: "Honda Center", zone: "Anaheim", code: "VVO49", date: "2028-07-28", day: 14, type: "Final", desc: "Men's Bronze Medal Match", start: "20:30", end: "23:00" },
  { sport: "Volleyball", venue: "Honda Center", zone: "Anaheim", code: "VVO50", date: "2028-07-29", day: 15, type: "Final", desc: "Men's Gold Medal Match", start: "10:00", end: "13:15" },
  { sport: "Volleyball", venue: "Honda Center", zone: "Anaheim", code: "VVO51", date: "2028-07-29", day: 15, type: "Final", desc: "Women's Bronze Medal Match", start: "14:45", end: "17:15" },
  { sport: "Volleyball", venue: "Honda Center", zone: "Anaheim", code: "VVO52", date: "2028-07-30", day: 16, type: "Final", desc: "Women's Gold Medal Match", start: "10:00", end: "13:00" },

  // Water Polo
  { sport: "Water Polo", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "WP001", date: "2028-07-12", day: -2, type: "Preliminary", desc: "Men's Preliminary (2 Matches)", start: "10:00", end: "13:00" },
  { sport: "Water Polo", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "WP023", date: "2028-07-21", day: 7, type: "Semifinal", desc: "Men's Semifinal (2 Matches)", start: "11:30", end: "14:30" },
  { sport: "Water Polo", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "WP024", date: "2028-07-21", day: 7, type: "Semifinal", desc: "Women's Semifinal (2 Matches)", start: "17:00", end: "20:00" },
  { sport: "Water Polo", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "WP025", date: "2028-07-22", day: 8, type: "Final", desc: "Men's Bronze Medal Match", start: "11:30", end: "13:00" },
  { sport: "Water Polo", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "WP026", date: "2028-07-22", day: 8, type: "Final", desc: "Men's Gold Medal Match", start: "15:00", end: "17:00" },
  { sport: "Water Polo", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "WP027", date: "2028-07-23", day: 9, type: "Final", desc: "Women's Bronze Medal Match", start: "11:30", end: "13:00" },
  { sport: "Water Polo", venue: "Long Beach Aquatics Center", zone: "Long Beach", code: "WP028", date: "2028-07-23", day: 9, type: "Final", desc: "Women's Gold Medal Match", start: "15:00", end: "17:00" },

  // Weightlifting
  { sport: "Weightlifting", venue: "Peacock Theater", zone: "DTLA", code: "WLF01", date: "2028-07-25", day: 11, type: "Final", desc: "Men's 55kg", start: "16:50", end: "19:00" },
  { sport: "Weightlifting", venue: "Peacock Theater", zone: "DTLA", code: "WLF02", date: "2028-07-25", day: 11, type: "Final", desc: "Women's 53kg", start: "20:50", end: "23:00" },
  { sport: "Weightlifting", venue: "Peacock Theater", zone: "DTLA", code: "WLF03", date: "2028-07-26", day: 12, type: "Final", desc: "Women's 61kg / Women's 55kg", start: "14:10", end: "19:00" },
  { sport: "Weightlifting", venue: "Peacock Theater", zone: "DTLA", code: "WLF04", date: "2028-07-26", day: 12, type: "Final", desc: "Men's 75kg", start: "20:50", end: "23:00" },
  { sport: "Weightlifting", venue: "Peacock Theater", zone: "DTLA", code: "WLF05", date: "2028-07-27", day: 13, type: "Final", desc: "Men's 85kg / Men's 95kg", start: "14:10", end: "19:00" },
  { sport: "Weightlifting", venue: "Peacock Theater", zone: "DTLA", code: "WLF06", date: "2028-07-27", day: 13, type: "Final", desc: "Women's 77kg", start: "20:50", end: "23:00" },
  { sport: "Weightlifting", venue: "Peacock Theater", zone: "DTLA", code: "WLF07", date: "2028-07-28", day: 14, type: "Final", desc: "Women's 88kg", start: "16:50", end: "19:00" },
  { sport: "Weightlifting", venue: "Peacock Theater", zone: "DTLA", code: "WLF08", date: "2028-07-28", day: 14, type: "Final", desc: "Men's 110kg", start: "16:50", end: "19:00" },
  { sport: "Weightlifting", venue: "Peacock Theater", zone: "DTLA", code: "WLF09", date: "2028-07-29", day: 15, type: "Final", desc: "Men's +110kg", start: "16:50", end: "19:00" },
  { sport: "Weightlifting", venue: "Peacock Theater", zone: "DTLA", code: "WLF10", date: "2028-07-29", day: 15, type: "Final", desc: "Women's +96kg", start: "20:50", end: "23:00" },

  // Wrestling
  { sport: "Wrestling", venue: "LA Convention Center Hall 2", zone: "DTLA", code: "WRE01", date: "2028-07-24", day: 10, type: "Quarterfinal", desc: "Greco-Roman 60kg/130kg, Freestyle 50kg Round of 16", start: "11:00", end: "13:00" },
  { sport: "Wrestling", venue: "LA Convention Center Hall 2", zone: "DTLA", code: "WRE02", date: "2028-07-24", day: 10, type: "Semifinal", desc: "Greco-Roman 60kg/130kg Semifinal, Freestyle 50kg Semifinal", start: "19:00", end: "20:00" },
  { sport: "Wrestling", venue: "LA Convention Center Hall 2", zone: "DTLA", code: "WRE04", date: "2028-07-25", day: 11, type: "Final", desc: "Greco-Roman 60kg Gold, 130kg Gold, Freestyle 50kg Gold", start: "19:00", end: "22:45" },
  { sport: "Wrestling", venue: "LA Convention Center Hall 2", zone: "DTLA", code: "WRE06", date: "2028-07-26", day: 12, type: "Final", desc: "Greco-Roman 77kg Gold, 87kg Gold, Freestyle 53kg Gold", start: "19:00", end: "22:45" },
  { sport: "Wrestling", venue: "LA Convention Center Hall 2", zone: "DTLA", code: "WRE10", date: "2028-07-28", day: 14, type: "Final", desc: "Freestyle 57kg/86kg Gold, 62kg Gold", start: "19:00", end: "22:45" },
  { sport: "Wrestling", venue: "LA Convention Center Hall 2", zone: "DTLA", code: "WRE12", date: "2028-07-29", day: 15, type: "Final", desc: "Freestyle 74kg/125kg/65kg/68kg Gold", start: "19:00", end: "22:45" },
  { sport: "Wrestling", venue: "LA Convention Center Hall 2", zone: "DTLA", code: "WRE13", date: "2028-07-30", day: 16, type: "Final", desc: "Freestyle 85kg/97kg/65kg/76kg Gold", start: "11:00", end: "14:30" },
];

// Derive unique sports list
const SPORTS = [...new Set(SCHEDULE_DATA.map(s => s.sport))].sort();

// Derive unique session types
const SESSION_TYPES = [...new Set(SCHEDULE_DATA.map(s => s.type))].sort();
