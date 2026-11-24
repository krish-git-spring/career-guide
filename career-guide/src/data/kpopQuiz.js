// K-Pop Demon Hunters Quiz — 10 levels of increasing difficulty.
// Format: "Question|Option A|Option B|Option C|Option D|correctIndex(0-3)|level(1-10)"
// NOTE: correct answer is always option A in raw data; the parser shuffles options.
export const kpopQuestionsRaw = `What is the name of the movie?|K-Pop Demon Hunters|Demon Hunters|K-Pop Stars|Hunters of Seoul|0|1
What is the name of the main hunter girl group?|HUNTR/X|Saja Boys|Free Rangers|Moonlight|0|1
What is the name of the demon boy band?|Saja Boys|Huntrix|Gwi-Ma's Guards|Night Stalkers|0|1
Who is the lead singer of HUNTR/X?|Rumi|Mira|Zoey|Celine|0|1
What do the hunters hunt?|Demons|Dragons|Aliens|Robots|0|1
Which studio made the movie?|Sony Pictures Animation|Pixar|DreamWorks|Studio Ghibli|0|1
What color is Rumi's hair?|Black|Blonde|Red|Blue|0|2
Which HUNTR/X member is the youngest (maknae)?|Zoey|Rumi|Mira|Celine|0|2
Which HUNTR/X member is the rapper?|Mira|Rumi|Zoey|Jinu|0|2
Who is the lead singer of the Saja Boys?|Jinu|Mystery|Baby|Abby|0|2
Who is the demon overlord?|Gwi-Ma|Jinu|Mystery|The Hollow King|0|2
What is the Honmoon?|A protective barrier|A sword|A song|A city|0|2
Which song plays during the opening credits?|How It's Done|Golden|Takedown|Your Idol|0|3
Which song is Rumi's solo stage song?|Golden|Takedown|What It Sounds Like|Soda Pop|0|3
Which song do the Saja Boys perform at the finale?|Your Idol|Golden|How It's Done|Free|0|3
Which song do HUNTR/X perform to expose the Saja Boys?|Takedown|Golden|Your Idol|Soda Pop|0|3
Which song is the duet between Rumi and Jinu?|Free|Golden|Takedown|Soda Pop|0|3
Which song does Rumi perform to break Gwi-Ma's trance?|What It Sounds Like|Golden|Your Idol|How It's Done|0|3
Which Saja Boy is the maknae (youngest)?|Baby|Mystery|Romance|Abby|0|4
What is Mystery Saja known for?|Hair covering his face|A golden mask|A guitar|A cape|0|4
Which Saja Boy is known for his romantic charm?|Romance|Baby|Abby|Mystery|0|4
Which Saja Boy is known for his physique?|Abby|Baby|Romance|Mystery|0|4
What is Jinu's role in the Saja Boys?|Lead singer|Rapper|Dancer|Producer|0|4
What does "maknae" mean in K-pop?|Youngest member|Leader|Main singer|Dancer|0|4
What is Zoey's hair color?|Pink|Black|Blonde|Red|0|4
Who voices Rumi in the English version?|Arden Cho|Jennie|Audrey Nuna|Ahn Hyo-seop|0|5
Who voices Jinu in the English version?|Ahn Hyo-seop|Arden Cho|Jennie|Audrey Nuna|0|5
Who voices Gwi-Ma?|Byung Hun Lee|Ahn Hyo-seop|Arden Cho|Alan Lee|0|5
Who voices Mystery Saja?|Alan Lee|Danny Chung|Joel Kim Booster|Sung Won Cho|0|5
Who voices Baby Saja?|Danny Chung|Alan Lee|Joel Kim Booster|Sung Won Cho|0|5
What year was the movie released?|2025|2024|2023|2026|0|5
What is Rumi's heritage?|Half-demon|Full demon|Human|Angel|0|6
Who is Rumi's foster mother and mentor?|Celine|Gwi-Ma|Mira|Zoey|0|6
What did Jinu trade his soul for?|Musical talent and fame|Money|Power over demons|A sword|0|6
What do the Saja Boys drain from fans?|Energy and souls|Money|Time|Memories of home|0|6
Where does the final battle take place?|Namsan Tower|Seoul Tower|The Arena|The Palace|0|6
What powers Rumi's sword at the end?|Jinu's soul|Gwi-Ma's power|The Honmoon|Zoey's voice|0|6
Who directed the movie?|Maggie Kang|Bong Joon-ho|Hayao Miyazaki|Taika Waititi|0|7
Who co-directed the movie with Maggie Kang?|Chris Appelhans|Bong Joon-ho|Hayao Miyazaki|Taika Waititi|0|7
Which song won the Oscar for Best Original Song?|How It's Done|Golden|Takedown|Your Idol|0|7
Which Saja Boy does Zoey destroy at the end?|Mystery|Jinu|Baby|Abby|0|7
What color is the new Honmoon at the end?|Gold and blue|Pure gold|Pure blue|Red|0|7
About how old is Jinu?|Over 400 years old|About 20|About 50|About 100|0|7
What are Rumi's demon marks called?|Patterns|Scars|Tattoos|Runes|0|8
How does Gwi-Ma control his demons?|Voices of shame and sorrow|Magic spells|A contract|Fear of death|0|8
What is the name of the Saja Boys' fandom?|The Pride|Huntrix|The Demons|Saja Stans|0|8
What is the name of HUNTR/X's fandom?|Huntrix|The Pride|The Hunters|X-Fans|0|8
What did Jinu abandon in his past?|His family|His music|His friends|His home country|0|8
Why does Rumi lose her voice?|Her demon nature|A cold|Stage fright|Overuse|0|8
What does "Saja" mean?|Demon|Hunter|Angel|Warrior|0|9
What instrument does Rumi play?|Guitar|Piano|Drums|Violin|0|9
Which HUNTR/X member does Zoey fall for?|Mystery|Jinu|Baby|Abby|0|9
What is Celine's role?|Former hunter|Singer|Demon|Teacher|0|9
Where can you watch the movie?|Netflix|Disney+|Hulu|Prime Video|0|9
What does Jinu give to Rumi before he dies?|His soul|His sword|His voice|His memories|0|9
What is the title of the sequel movie?|KPop Demon Hunters 2|Demon Hunters 2|K-Pop Hunters|Hunters Return|0|9
What genre is the movie?|Musical fantasy|Horror|Romance|Documentary|0|10
What is the running time of the movie?|About 95 minutes|About 60 minutes|About 120 minutes|About 150 minutes|0|10
Which awards did the movie win?|Oscar for Best Original Song|Best Picture|Best Director|Best Animated Feature|0|10
What does Gwi-Ma want to do to humanity?|Erase it|Rule it|Protect it|Ignore it|0|10
How many members are in HUNTR/X?|3|4|5|2|0|10
What do fans' emotions help power?|The Honmoon|The Saja Boys|Gwi-Ma|Nothing|0|10
What is the name of the city where the story takes place?|Seoul|Tokyo|New York|London|0|10
`;

export const kpopLevels = (() => {
  const parsed = kpopQuestionsRaw.split('\n').filter(Boolean).map(line => {
    const parts = line.split('|');
    const options = parts.slice(1, 5);
    const correctText = options[parseInt(parts[5], 10)];
    // Shuffle options so the correct answer isn't always in the same spot
    const shuffled = [...options].sort(() => Math.random() - 0.5);
    return {
      q: parts[0],
      options: shuffled,
      answer: shuffled.indexOf(correctText),
      level: parseInt(parts[6], 10)
    };
  });
  return [
    parsed.filter(q => q.level === 1),
    parsed.filter(q => q.level === 2),
    parsed.filter(q => q.level === 3),
    parsed.filter(q => q.level === 4),
    parsed.filter(q => q.level === 5),
    parsed.filter(q => q.level === 6),
    parsed.filter(q => q.level === 7),
    parsed.filter(q => q.level === 8),
    parsed.filter(q => q.level === 9),
    parsed.filter(q => q.level === 10)
  ];
})();
