# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.destroy_all
Anime.destroy_all
User.destroy_all

@admin = User.create!(username: 'penguino', email: 'penguino@email.com', password: '123456')

@slice_of_life = Category.create!(name: 'Slice of Life')
@isekai = Category.create!(name: 'Isekai')
@sports = Category.create!(name: 'Sports')
@shoujo = Category.create!(name: 'Shoujo')
@shounen = Category.create!(name: 'Shounen')
@comedy = Category.create!(name: 'Comedy')
@romance = Category.create!(name: 'Romance')
@fantasy = Category.create!(name: 'Fantasy')
@mystery = Category.create!(name: 'Mystery')
@drama = Category.create!(name: 'Drama')
@supernatural = Category.create!(name: 'Supernatural')


Anime.create!(
  name: 'Seirei Gensouki: Spirit Chronicles',
  description: "His past life and current life are intersecting--a boy with memories of two lives faces his destiny!\n\nAfter his mother was killed at an early age, the orphaned Rio fought his hardest to survive in the slums.\n\nOne day, he awakens to the memories of Haruto Amakwa, who died in an accident while dreaming of being reunited with his childhood friend, and Rio realizing he has reincarnated in a world of swords and sorcery.\n\nNot only that, but after helping stop an attempt to kidnap a princess that he stumbled upon, he finds himself enrolled in a famous school where the children of the nobility gather...\n\nAs Rio attempts to rise up from the bottom of a hierarchical society, he will have new counters and say many goodbyes, as he fights to overcome fate.",
  img_url: "https://u.livechart.me/anime/10238/poster_image/4f98457af2ea7201365d624469058b86.png?style=large&format=jpg",
  watch_link: "https://www.crunchyroll.com/series/G0XHWM380",
  category: @isekai,
  user: @admin ,
)
Anime.create!( 
  name: "The Detective is Already Dead",
  description: "During an airplane hijacking, a boy is suddenly pulled into becoming a girl detective’s assistant in order to resolve the incident. For the next couple years, he experiences adventures as the detective pursues a mysterious organization. However, this is all in the past. After the detective’s death, he is approached by a strange girl, who seems weirdly familiar, with a mysterious request. The detective is already dead, but something about her--and her mission--lives on.",
  img_url: "https://u.livechart.me/anime/10355/poster_image/81244b9405d7915c8063d5896bb87c5d.png?style=large&format=jpg",
  watch_link: "https://www.funimation.com/shows/the-detective-is-already-dead/",
  category: @mystery,
  user: @admin,
)
Anime.create!(
name: "To Your Eternity",
  description: "An epic fantasy saga of an immortal hero’s quest to understand what it is to live...\n\nIn the beginning, an \"orb\" is cast unto Earth.\n\n\"It\" can do two things: change into the form of the thing that stimulates \"it\"; and come back to life after death. \"It\" morphs from orb to rock, then to wolf, and finally to boy, but roams about like a newborn who knows nothing.\n\nAs a boy, \"it\" becomes Fushi.\n\nThrough encounters with human kindness, Fushi not only gains survival skills, but grows as a \"person\". But his journey is darkened by the inexplicable and destructive enemy Nokker, as well as cruel partings with the people he loves. Fushi continues his eternal quest, bearing the pain of living with the fortitude of someone who chooses his own path.",
  img_url: "https://u.livechart.me/anime/9762/poster_image/d524b732b143a30f073f61b5be993c97.jpg?style=large&format=jpg",
  watch_link: "https://www.crunchyroll.com/series/GG5H5XMWV",
  category: @supernatural,
  user: @admin,
  )
  Anime.create!(
    name: "Welcome to Demon School! Iruma-kun",
    description: "Iruma Suzuki, human, 14, one day finds himself sold to the devil. To add to his predicament, his doting owner and self-appointed \"Grandpa\" is the principal at his new school. Now Iruma must deal with a haughty student who challenges him to a duel, a girl with adjustment issues, and so many more scary beings! Can this ultimate pacifist dodge the slings and arrows that are flung his way? As he struggles frantically, Iruma's innate kindness begins to win over enemies.",
    img_url: "https://u.livechart.me/anime/9215/poster_image/fa375adc062cea4399cde9bf04af00c3.png?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/G6NVG970Y",
    category: @comedy,
    user: @admin,
  )
  Anime.create!(
    name: "Tokyo Revengers",
    description: "Takemichi Hanagaki is a freelancer that's reached the absolute pits of despair in his life. He finds out that the only girlfriend he ever had in his life that he dated in middle school, Hinata Tachibana, had been killed by the ruthless Tokyo Manji Gang.\n\nThe day after hearing about her death, he's standing on the station platform and ends up being pushed over onto the tracks by a herd of people. He closes his eyes thinking he's about to die, but when he opens his eyes back up, he somehow had gone back in time 12 years.\n\nNow that he's back living the best days of his life, Takemichi decides to get revenge on his life by saving his girlfriend and changing himself that he'd been running away from.",
    img_url: "https://u.livechart.me/anime/10019/poster_image/85625eb2a5bc249021890255f24e63bd.png?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/G3KHEVMN1",
    category: @drama,
    user: @admin,
  )
  Anime.create!(
    name: "Log Horizon",
    description: "Elder Tales is a global phenomenon, immersing millions of players in its online fantasy world. However, something goes wrong with the 12th expansion pack. Veteran gamer Shiroe and 30,000 other players suddenly find themselves trapped in the game! Except it’s not exactly the game they knew. Even the former Non-Player-Characters are now self-aware. This collision of the Elder Tales people and players with seemingly impossible skills, abilities, and knowledge promises to be cataclysmic.",
    img_url: "https://u.livechart.me/anime/64/poster_image/8ae6d877ac9a7ad74e60e98e06b2c950.png?style=large&format=jpg",
    watch_link: "https://www.funimation.com/shows/log-horizon/",
    category: @isekai,
    user: @admin,
  )
  Anime.create!(
    name: "My Next Life as a Villainess: All Routes Lead to Doom!",
    description: "Wealthy heiress Catarina Claes is hit in the head with a rock and recovers the memories of her past life. It turns out the world she lives in is the world of the game Fortune Lover, an otome game she was obsessed with in her past life... but she's been cast as the villain character who tries to foil the protagonist's romances! The best ending the game has for Catarina is exile, and the worst, death! She'll have to find a way to avoid triggering the flags of doom, and make her own happy future! The misunderstanding-based screwball love comedy now begins!",
    img_url: "https://u.livechart.me/anime/3563/poster_image/f9a75945a65b7a6a304e7a9301e07ee9.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/my-next-life-as-a-villainess-all-routes-lead-to-doom",
    category: @romance,
    user: @admin,
  )
  Anime.create!(
    name: "Attack on titan",
    description: "After humanity is nearly eliminated and the survivors retreat to the safety of fortified cities, Eren Yeager witnesses horrors that alter his destiny.",
    img_url: "https://u.livechart.me/anime/9491/poster_image/71a31556e1a91348654ca39b1612c763.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/attack-on-titan",
    category: @fantasy,
    user: @admin,
  )
  Anime.create!(
    name: "How a Realist Hero Rebuilt the Kingdom",
    description: "Suddenly summoned to a fantasy world and betrothed to the princess, Kazuya Souma is crowned the new king after providing the royal family with impressive advice. To rule the kingdom, he's taking the nontraditional (and very human) route of administrative reform. In a realm of dragons and elves, will this revolutionary's unique path prove effective?",
    img_url: "https://u.livechart.me/anime/9892/poster_image/e26c309c63007dbe5c92c9442557c135.jpg?style=large&format=jpg",
    watch_link: "https://www.funimation.com/shows/how-a-realist-hero-rebuilt-the-kingdom/",
    category: @isekai,
    user: @admin,
  )
  Anime.create!(
    name: "The Duke of Death and His Maid",
    description: "Cursed by a witch as a child, a young duke kills every living thing he touches. Shunned by the people around him, he is forced to live in solitude in a mansion deep within a forest.",
    img_url: "https://u.livechart.me/anime/10391/poster_image/e0ed70a0509d8ca2b3ae6d9463844444.jpg?style=large&format=jpg",
    watch_link: "https://www.funimation.com/shows/the-duke-of-death-and-his-maid/",
    category: @comedy,
    user: @admin,
  )
  Anime.create!( 
    name: "Bottom-tier Character Tomozaki",
    description: "Expert gamer Tomozaki Fumiya doesn’t exactly fit in, but he wishes he did. With no written rules for success and gameplay that doesn’t work in his favor, the real world seems impossible for someone like him. But, like any noob, all he really needs are some strategies and a seasoned player like Aoi Hinami to help him. Hopefully with her guidance, Tomozaki will gain the experience he needs.",
    img_url: "https://u.livechart.me/anime/9638/poster_image/c59b8fedb7861fecb638f7f852982a03.jpg?style=large&format=jpg",
    watch_link: "https://www.funimation.com/shows/bottom-tier-character-tomozaki/",
    category: @drama,
    user: @admin,
  )
  Anime.create!(
      name: "Kemono Jihen",
      description: "Special detective Kohachi Inugami is sent to investigate a grisly phenomenon involving animal corpses near a remote mountain village. But after meeting a strange boy who agrees to help, he discovers cursed supernatural forces at work. Little by little, Inugami uncovers the truth behind the killings and the boy who may not even be human.",
      img_url: "https://u.livechart.me/anime/9731/poster_image/7583fb025847f1c887a7381742a3a7bc.webp?style=large&format=jpg",
      watch_link: "https://www.funimation.com/shows/kemono-jihen/",
      category: @shounen,
      user: @admin,
  )
  Anime.create!(
      name: "Dr. STONE",
      description: "Several thousand years after a mysterious phenomenon that turns all of humanity to stone, the extraordinarily intelligent, science-driven boy, Senku Ishigami, awakens.\n\nFacing a world of stone and the total collapse of civilization, Senku makes up his mind to use science to rebuild the world. Starting with his super strong childhood friend Taiju Oki, who awakened at the same time, they will begin to rebuild civilization from nothing...\n\nDepicting two million years of scientific history from the Stone Age to present day, the unprecedented crafting adventure story is about to begin!",
      img_url: "https://u.livechart.me/anime/8349/poster_image/def6f7be1f244f9744a6fd65ea54e142.png?style=large&format=jpg",
      watch_link: "https://www.crunchyroll.com/series/GYEXQKJG6",
      category: @shounen,
      user: @admin,
  )
  Anime.create!(
    name: "JUJUTSU KAISEN",
    description: "A boy fights... for \"the right death.\"\n\nHardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What's more, the Curses can only be exorcised by another Curse.\n\nItadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojo Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.",
    img_url: "https://u.livechart.me/anime/9680/poster_image/28f487fe3996b4e4cc119edccd9d71da.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GRDV0019R",
    category: @supernatural,
    user: @admin,
  )
  Anime.create!(
    name: "The King's Avatar",
    description: "In the multiplayer online game Glory, Ye Xiu is regarded as a textbook and a top-tier pro-player. However, due to a myriad of reasons, he is kicked from the team. After leaving the pro scene, he finds work in an Internet Cafe as a manager. When Glory launches its tenth server, he throws himself in to the game once more. Possessing ten years of experience, the memories of his past, and an incomplete, self-made weapon, his return along the road to the summit begins!",
    img_url: "https://u.livechart.me/anime/2651/poster_image/712a51f45bcf7e659af8ed22994457d2.jpg?style=large&format=jpg",
    watch_link: "https://www.youtube.com/playlist?list=PLMX26aiIvX5ocv2xksC-w-YQrqlixhIRA",
    category: @shounen,
    user: @admin,
  )
  Anime.create!(
    name: "Ikebukuro West Gate Park",
    description: "Crime-ridden Ikebukuro is a haven for violent gangs, the Yakuza, and home to Makoto Majima. To protect his friends, this charismatic troubleshooter mediates disputes among the warring factions—even fixing problems the police can’t.\n\nBut when a rising tide of violence results in Makoto losing a loved one, can he ride out the storm, or will he drown in all the spilled blood that floods his streets?",
    img_url: "https://u.livechart.me/anime/9581/poster_image/9ba7e3bbf54afbff77206c9f2a5ca0cc.jpg?style=large&format=jpg",
    watch_link: "https://www.funimation.com/shows/ikebukuro-west-gate-park/",
    category: @drama,
    user: @admin,
  )
  Anime.create!(
    name: "Our Last Crusade or the Rise of a New World",
    description: "\"The Empire\" is a mechanized utopia with highly developed science and technology. \"The Nebulis Sovereignty\" is a nation feared as the \"Land of the Witches\" whose people use paranormal power. The two countries have been constantly at war for more than one hundred years, but now two heroes have appeared in their respective lands.",
    img_url: "https://u.livechart.me/anime/9651/poster_image/80dbcad7d18ca9932f3803219df2da35.png?style=large&format=jpg",
    watch_link: "https://www.funimation.com/shows/our-last-crusade-or-the-rise-of-a-new-world/",
    category: @fantasy,
    user: @admin,
  )
  Anime.create!(
    name: "Noblesse",
    description: "Raizel awakens from his 820-year slumber. He holds the special title of Noblesse, a pure-blooded Noble and protector of all other Nobles. In an attempt to protect Raizel, his servant Frankenstein enrolls him at Ye Ran High School, where Raizel learns the simple and quotidian routines of the human world through his classmates.",
    img_url: "https://u.livechart.me/anime/9809/poster_image/c2f343d7920a0f2a49d589c535baca1e.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/G64G2VDPR",
    category: @supernatural,
    user: @admin
  )
  Anime.create!(
    name: "HAIKYUU!!",
    description: "Shoyo Hinata isn't a large guy, but he's got huge ambitions: to become the next big thing in high school volleyball. Unfortunately, his junior high team was trashed in their first and only match. But now that he's enrolled in a high school with a top volleyball program, things are going to be different. There's just one problem: Tobio Kageyama, whose team beat Hinata's and is already considered a star player, is attending the same school. Can a kid out of nowhere hold his own against the King of the Court? Or could the rivalry and competition actually be the best thing for both of them? Get ready for a knock-down, throw-down, ultimate showdown barrage of volleys, spikes, and blocks as two rivals face off!",
    img_url: "https://u.livechart.me/anime/251/poster_image/9db023f75218fdf036be07e5adeb2ed7.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GY8VM8MWY",
    category: @sports,
    user: @admin,
  )
  Anime.create!(
    name: "TONIKAWA: Over The Moon For You",
    description: "Nasa Yuzaki falls in love at first sight after an encounter with the mysterious Tsukasa. When Nasa earnestly confesses his feelings, she replies, \"I'll date you, but only if we're married.\" Nasa and Tsukasa's cute and precious newlywed life of love is about to begin!",
    img_url: "https://u.livechart.me/anime/9818/poster_image/ebbf2dd2ac39f381e6d1025ff786d817.png?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GRWMGGQ86",
    category: @romance,
    user: @admin,
  )
  Anime.create!(
    name: "GOBLIN SLAYER",
    description: "\"I'm not saving the world. I just kill goblins.\"\n\nRumor has it that, in a certain guild in the middle of nowhere, there is an extraordinary man who has climbed all the way to the Silver rank just by killing goblins. At the same guild, a priestess who's just become a new adventurer has formed her first party... and the man who ends up rescuing that party when they get into trouble is none other than the Goblin Slayer.",
    img_url: "https://u.livechart.me/anime/3109/poster_image/e5bd02dc196ba4d272be864e478c01c7.png?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/G6VDMN306",
    category: @fantasy,
    user: @admin,
  )
  Anime.create!(
    name: "Fire Force",
    description: "Terror has paralyzed the clockwork metropolis of Tokyo! Possessed by demons, people have begun to burst into flame, leading to the establishment of a special firefighting team: the Fire Force, ready to roll on a moment's notice to fight spontaneous combustion anywhere it might break out. The team is about to get a very unique addition: Shinra, a boy who possesses the unique power to run at the speed of a rocket, leaving behind the famous \"devil's footprints\" (and destroying his shoes in the process). Can the Fire Force discover the source of this strange phenomenon and put a stop to it? Or will the city burn to ashes first?\n\n",
    img_url: "https://u.livechart.me/anime/8355/poster_image/126f6a0010959b794cbc55addc2b41c9.png?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GYQWNXPZY",
    category: @supernatural,
    user: @admin,
  )
  Anime.create!( 
    name: "The God of High School",
    description: "Jin Mori has proclaimed himself the strongest high schooler.\n\nHis life changes when he's invited to participate in \"God of High School,\" a tournament to determine the strongest high schooler of all.\n\nHe's told that if he wins, any wish he makes will be granted...\n\nAll the participants are powerful contenders who fight their hardest for their own wishes.\n\nWhat awaits them at the end of the tournament?\n\nA chaotic battle between unbelievably strong high school students is about to begin!",
    img_url: "https://u.livechart.me/anime/9808/poster_image/e30946cc663db3b086045c1ad7a08e6a.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GRVD0ZDQR",
    category: @supernatural,
    user: @admin,
  )
  Anime.create(
    name: "Kakushigoto",
    description: "The story follows a lonely mangaka, Kakushi Goto, who draws vulgar manga. The twist? Well, he has to hide the fact that this is his work so that his young daughter, Hime, isn’t exposed to its mature content.\n\nThis slice-of-life comedy will explore the relationship between father and daughter, and the plight of an adult manga creator.",
    img_url: "https://u.livechart.me/anime/9673/poster_image/0496983a34e49a52d26f54ad582febd5.jpg?style=large&format=jpg",
    watch_link: "https://www.funimation.com/shows/kakushigoto/",
    category: @slice_of_life,
    user: @admin,
  )
  Anime.create!(
    name: "Tower of God",
    description: "Reach the top, and everything will be yours.\n\nAt the top of the tower exists everything in this world, and all of it can be yours.\n\nYou can become a god.\n\nThis is the story of the beginning and the end of Rachel, the girl who climbed the tower so she could see the stars, and Bam, the boy who needed nothing but her.",
    img_url: "https://u.livechart.me/anime/9793/poster_image/ca9ac841e5b168da82bec31046bdccec.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/G6J0G49DR",
    category: @fantasy,
    user: @admin ,
  )
  Anime.create!(
      name: "Smile Down the Runway",
      description: "Runway de Waratte starts with the story of Fujito Chiyuki, an aspiring fashion model and daughter of a fledgling Modeling Agency, Mille Neige. Ever since she was little, Chiyuki's dream was to be the star model of her dad's agency and perform at Paris Fashion Week. With great looks and a gifted environment, it seemed like she was on the right track to fulfill her dream, but she soon found herself faced with a seemingly insurmountable wall when her height stopped growing at 158 cm; too short to be a professional model.",
      img_url: "https://u.livechart.me/anime/9587/poster_image/f248106591b081b5b3da3cea9403a2d7.jpg?style=large&format=jpg",
      watch_link: "https://www.funimation.com/shows/smile-down-the-runway/",
      category: @slice_of_life,
      user: @admin,
  )
  Anime.create!(
    name: "Demon Slayer",
    description: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself.\n\nThough devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
    img_url: "https://u.livechart.me/anime/3311/poster_image/a20390ce67f1eef621b1b66be2723676.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GY5P48XEY",
    category: @shounen,
    user: @admin,
  )
  Anime.create!(
    name: "The Helpful Fox Senko-san",
    description: "Sometimes the cure to a hard day’s work is the tender love and care of…a fox girl?! Salaryman Nakano’s stressful life is suddenly intruded upon by the fox, Senko-san, who is eager to help him heal his exhaustion. Whether she’s cooking, cleaning, or finding other ways to care for Nakano, she’s there to take away his stress!\n\n",
    img_url: "https://u.livechart.me/anime/8375/poster_image/c8b7340b8c552126e22edf63f965fcde.png?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GR4PXWK1Y",
    category: @slice_of_life,
    user: @admin,
  )
  Anime.create!(
    name: "The Rising of the Shield Hero",
    description: "Iwatani Naofumi, a run-of-the-mill otaku, finds a book in the library that summons him to another world. He is tasked with joining the sword, spear, and bow as one of the Four Cardinal Heroes and fighting the Waves of Catastrophe as the Shield Hero.\n\nExcited by the prospect of a grand adventure, Naofumi sets off with his party. However, merely a few days later, he is betrayed and loses all his money, dignity, and respect. Unable to trust anyone anymore, he employs a slave named Raphtalia and takes on the Waves and the world.\n\nBut will he really find a way to overturn this desperate situation?\n\nThe curtain rises on a fantasy adventure about the rise of a man who has lost it all.",
    img_url: "https://u.livechart.me/anime/2757/poster_image/d58e5ee888124ef8305faf3661d34830.png?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/G6W4QKX0R",
    category: @fantasy,
    user: @admin,
  )
  Anime.create!(
    name: "The Quintessential Quintuplets",
    description: "Uesugi Fuutarou, a high school second-year from a poor family, receives a highly appealing offer to work part-time as a tutor... but his students turn out to be girls from his own class! What's more, they're quintuplets... and all five are beautiful, but happen to be problem students who have borderline grades and hate studying! Looks like his first assignment will be to win all the sisters' trust?! Every day is a wild party in this rom-com centering around the quintuplet sisters of the Nakano household!",
    img_url: "https://u.livechart.me/anime/3448/poster_image/45abfad4537800472bea7ebe4a9f2e67.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GY4PD7Z06",
    category: @slice_of_life,
    user: @admin,
  )
  Anime.create!(
    name: "Black Clover",
    description: "In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any. At the age of fifteen, both receive grimoires, magic books that amplify their holder’s magic. Asta’s is a rare Grimoire of Anti-Magic that negates and repels his opponent’s spells. Being opposite but good rivals, Yuno and Asta are ready for the hardest of challenges to achieve their common dream: to be the Wizard King. Giving up is never an option!",
    img_url: "https://u.livechart.me/anime/2478/poster_image/f4518e517e6a56b52973852f67635e38.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/black-clover",
    category: @fantasy,
    user: @admin,
  )
  Anime.create!(
    name: "That Time I Got Reincarnated as a Slime",
    description: "Lonely thirty-seven-year-old Satoru Mikami is stuck in a dead-end job, unhappy with his mundane life, but after dying at the hands of a robber, he awakens to a fresh start in a fantasy realm...as a slime monster! As he acclimates to his goopy new existence, his exploits with the other monsters set off a chain of events that will change his new world forever!",
    img_url: "https://u.livechart.me/anime/3132/poster_image/669ca4195a78adff2c88ae6593809cf4.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GYZJ43JMR",
    category: @fantasy,
    user: @admin,
  )
  Anime.create!(
    name: "DARLING in the FRANXX",
    description: "The distant future: Humanity established the mobile fort city, Plantation, upon the ruined wasteland and civilization flourished. Within the city were pilot quarters called Mistilteinn, otherwise known as the “Birdcage.” That is where the children live... Not knowing anything of the outside world, and unaware of the vast sky. Their only mission in life was the fight.",
    img_url: "https://u.livechart.me/anime/2773/poster_image/27388e42848ab7b7c556a0a76c8ed6d5.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GY8VEQ95Y",
    category: @fantasy,
    user: @admin,
  )
  Anime.create!(
    name: "JUNI TAISEN：ZODIAC WAR",
    description: "The 12th Twelve Tournament that gets held every twelve years… Twelve brave warriors who bear the names of the signs of the zodiac fight each other for the lives and souls. The participants are twelve very strange warriors: “Rat,” “Ox,” “Tiger,” “Rabbit,” “Dragon,” “Snake,” “Horse,” “Goat,” Monkey,” “Rooster,” “Dog,” and “Pig.”\n\nThe victor of this tournament gets to have one wish granted, whatever the wish may be. The one wish they want granted",
    img_url: "https://u.livechart.me/anime/2576/poster_image/84bfb65cef1982e09772f0a4174eb10c.png?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/G6K51X9GY",
    category: @fantasy,
    user: @admin,
  )
  Anime.create!(
    name: "Chronos Ruler",
    description: "Chronos Rulers (Jikan no Shihaisha) are those who fight the time-eating demons that appear when people wish they could turn back time. The Chronos Rulers fight a time-manipulation battle against these demons.\n\n",
    img_url: "https://u.livechart.me/anime/2474/poster_image/3763f93185bfc7449cd15ecf92784808.png?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GR2P942JR",
    category: @shounen,
    user: @admin,
  )
  Anime.create!(
      name: "New Game!!",
      description: "After graduating from high school, Suzukaze Aoba starts work at the game company, Eagle Jump where she ends up working on the third installment of the game she loved as a child, “Fairies’ Story.” Aoba then meets Yagami Ko, who inspired her to become a character designer in the first place, and other senpai at her new job who help her grow along the way.",
      img_url: "https://u.livechart.me/anime/2548/poster_image/76faee7af23572032b348ad3135a09d7.png?style=large&format=jpg",
      watch_link: "https://www.crunchyroll.com/series/GRWE2PQQR",
      category: @slice_of_life,
      user: @admin,
  )
  Anime.create!( 
    name: "Naruto: Shippuuden",
    description: "Naruto: Shippuuden is the continuation of the original animated TV series Naruto. The story revolves around an older and slightly more matured Uzumaki Naruto and his quest to save his friend Uchiha Sasuke from the grips of the snake-like Shinobi, Orochimaru. After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as he has amassed a few (more dangerous) enemies, in the likes of the shinobi organization; Akatsuki.",
    img_url: "https://u.livechart.me/anime/316/poster_image/5e1b029ef037349f641c392af0ec4217.jpg?style=large&format=jpg",
    watch_link: "https://www.crunchyroll.com/series/GYQ4MW246",
    category: @shounen,
    user: @admin,
  )

  puts "created #{User.count} categories"
  puts "created #{Anime.count} categories"
puts "created #{Category.count} categories"