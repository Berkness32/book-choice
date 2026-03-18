import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

const books = [
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    description: "A groundbreaking work of science fiction, The Left Hand of Darkness tells the story of a lone human emissary to Winter, an alien world whose inhabitants spend most of their time without a gender. His goal is to facilitate Winter's inclusion in a growing intergalactic civilization. But to do so he must bridge the gulf between his own views and those of the completely dissimilar culture that he encounters.\n\nEmbracing the aspects of psychology, society, and human emotion on an alien world, The Left Hand of Darkness stands as a landmark achievement in the annals of intellectual science fiction.",
    pitch: "Ursula Le Guin is supposed to be one of the great fantasy writers and this is supposed be one of her best works. Could be cool.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1488213612i/18423.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/18423.The_Left_Hand_of_Darkness?ref=nav_sb_ss_1_13"
  },
  {
    title: "Chain-Gang All-Stars",
    author: "Nana Kwame Adjei-Brenyah",
    description: "Welcome to Chain-Gang All-Stars, the popular and highly controversial programme inside America's prison system. In packed arenas, watched by millions of live-stream viewers, prisoners compete as gladiators for the ultimate prize: their freedom.\n\nFan favourites Loretta Thurwar and Hamara 'Hurricane Staxxx' Stacker are teammates and lovers. Thurwar is nearing the end of her time on the circuit, free in just a few matches, a fact she carries as heavily as her lethal hammer. As she prepares for her final encounters, as protestors gather at the gates, and as the programme's corporate owners stack the odds against her - will the price be simply too high?",
    pitch: "epic action and potentially some good political commentary??",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1682956296i/61190770.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/61190770-chain-gang-all-stars?ref=nav_sb_ss_1_10"
  },
  {
    title: "Jitterbug Perfume",
    author: "Tom Robbins",
    description: "Jitterbug Perfume is an epic, which is to say, it begins in the forests of ancient Bohemia and doesn't conclude until nine o'clock tonight [Paris time]. It is a saga, as well. A saga must have a hero, and the hero of this one is a janitor with a missing bottle. The bottle is blue, very, very old, and embossed with the image of a goat-horned god. If the liquid in the bottle is actually is the secret essence of the universe, as some folks seem to think, it had better be discovered soon because it is leaking and there is only a drop or two left.",
    pitch: "would love to discuss with a group because it’s a weird one",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388607752i/8682.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/8682.Jitterbug_Perfume?ac=1&from_search=true&qid=IUcIbtNTHY&rank=1"
  },
  {
    title: "Alias Grace",
    author: "Margaret Atwood",
    description: "It's 1843, and Grace Marks has been convicted for her involvement in the vicious murders of her employer and his housekeeper and mistress. Some believe Grace is innocent; others think her evil or insane. Now serving a life sentence, Grace claims to have no memory of the murders. \n\nAn up-and-coming expert in the burgeoning field of mental illness is engaged by a group of reformers and spiritualists who seek a pardon for Grace. He listens to her story while bringing her closer and closer to the day she cannot remember. What will he find in attempting to unlock her memories?",
    pitch: "i like the idea of reading classic women that i haven’t read before.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1298545436i/72579.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/72579.Alias_Grace?ref=nav_sb_ss_1_11"
  },
  {
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    description: "On a bitter-cold day, in the December of his junior year at Harvard, Sam Masur exits a subway car and sees, amid the hordes of people waiting on the platform, Sadie Green. He calls her name. For a moment, she pretends she hasn't heard him, but then, she turns, and a game begins: a legendary collaboration that will launch them to stardom. These friends, intimates since childhood, borrow money, beg favors, and, before even graduating college, they have created their first blockbuster, Ichigo. Overnight, the world is theirs. Not even twenty-five years old, Sam and Sadie are brilliant, successful, and rich, but these qualities won't protect them from their own creative ambitions or the betrayals of their hearts.\n\nSpanning thirty years, from Cambridge, Massachusetts, to Venice Beach, California, and lands in between and far beyond, Gabrielle Zevin's Tomorrow, and Tomorrow, and Tomorrow is a dazzling and intricately imagined novel that examines the multifarious nature of identity, disability, failure, the redemptive possibilities in play, and above all, our need to connect: to be loved and to love. Yes, it is a love story, but it is not one you have read before.",
    pitch: "Romance about two long time friends that make a video game together. I've heard this book artfully lets the reader into the process of digital world development",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1636978687i/58784475.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/58784475-tomorrow-and-tomorrow-and-tomorrow?ref=nav_sb_ss_1_8"
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut Jr.",
    description: "Slaughterhouse-Five, an American classic, is one of the world’s great antiwar books. Centering on the infamous World War II firebombing of Dresden, the novel is the result of what Kurt Vonnegut described as a twenty-three-year struggle to write a book about what he had witnessed as an American prisoner of war. It combines historical fiction, science fiction, autobiography, and satire in an account of the life of Billy Pilgrim, a barber’s son turned draftee turned optometrist turned alien abductee. As Vonnegut had, Billy experiences the destruction of Dresden as a POW. Unlike Vonnegut, he experiences time travel, or coming “unstuck in time.”\n\nAn instant bestseller, Slaughterhouse-Five made Kurt Vonnegut a cult hero in American literature, a reputation that only strengthened over time, despite his being banned and censored by some libraries and schools for content and language. But it was precisely those elements of Vonnegut’s writing—the political edginess, the genre-bending inventiveness, the frank violence, the transgressive wit—that have inspired generations of readers not just to look differently at the world around them but to find the confidence to say something about it.",
    pitch: "Classic anti-war novel. Combines historical fiction, science fiction, autobiography, and satire. This seems highly topical now, I've heard that it changes the way one views the world and that Vonnegut's perspective has stayed relevant through the years.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1440319389i/4981.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/4981.Slaughterhouse_Five?ref=nav_sb_ss_1_14"
  },
  {
    title: "White Teeth",
    author: "Zadie Smith",
    description: "At the center of this invigorating novel are two unlikely friends, Archie Jones and Samad Iqbal. Hapless veterans of World War II, Archie and Samad and their families become agents of England’s irrevocable transformation. A second marriage to Clara Bowden, a beautiful, albeit tooth-challenged, Jamaican half his age, quite literally gives Archie a second lease on life, and produces Irie, a knowing child whose personality doesn’t quite match her name (Jamaican for “no problem”). Samad’s late-in-life arranged marriage (he had to wait for his bride to be born), produces twin sons whose separate paths confound Iqbal’s every effort to direct them, and a renewed, if selective, submission to his Islamic faith. Set against London’s racial and cultural tapestry, venturing across the former empire and into the past as it barrels toward the future, White Teeth revels in the ecstatic hodgepodge of modern life, flirting with disaster, confounding expectations, and embracing the comedy of daily existence.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1374739885i/3711.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/3711.White_Teeth?ac=1&from_search=true&qid=yRXhqeyMxv&rank=1"
  },
  {
    title: "A Confederacy of Dunces",
    author: "John Kennedy Toole",
    description: "Set in the French Quarter of 1960s New Orleans, this cult-classic satire follows unforgettable misfit Ignatius J. Reilly as his misadventures ricochet from hot dog carts to Bourbon Street, and collide with the city’s politics, vice, and absurdity.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1562554946i/310612.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/310612.A_Confederacy_of_Dunces?ref=nav_sb_ss_1_10"
  },
  {
    title: "Sunrise on the Reaping",
    author: "Suzanne Collins",
    description: "When you've been set up to lose everything you love, what is there left to fight for?\n\nAs the day dawns on the fiftieth annual Hunger Games, fear grips the districts of Panem. This year, in honor of the Quarter Quell, twice as many tributes will be taken from their homes.\n\nBack in District 12, Haymitch Abernathy is trying not to think too hard about his chances. All he cares about is making it through the day and being with the girl he loves.\n\nWhen Haymitch's name is called, he can feel all his dreams break. He's torn from his family and his love, shuttled to the Capitol with the three other District 12 tributes: a young friend who's nearly a sister to him, a compulsive oddsmaker, and the most stuck-up girl in town. As the Games begin, Haymitch understands he's been set up to fail. But there's something in him that wants to fight . . . and have that fight reverberate far beyond the deadly arena.",
    pitch: "i was just able to read project Hail Mary before seeing the movie and I loved the experience I was able to have because of that. I just saw the trailer for sunrise on the reaping and the hunger games was a favorite of mine in highschool. I’d love to incorporate it into our agenda and then we could go see the movie together and talk about it!",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1729085500i/214331246.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/214331246-sunrise-on-the-reaping?ref=nav_sb_ss_1_7"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "Pride and Prejudice has charmed generations of readers for more than two centuries. Jane Austen's much-adapted novel is famed for its witty, spirited heroine, sensational romances, and deft remarks on the triumphs and pitfalls of social convention. Author Jane Austen (1775-1817) was an English novelist whose works of social realism achieved unprecedented critical and popular success, though Austen herself remained an anonymous writer throughout her life.",
    pitch: "an all time classic I’ve never had the pleasure of reading. I’m sure the book is divine because the movies are my favorite. My pitch is we read this book and at the discussion we get to have a “high tea” of sorts maybe some boiled potatoes and have a giggly ole time.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/129915654-pride-and-prejudice?ref=nav_sb_ss_1_10"
  },
  {
    title: "We Could Have Been Friends, My Father and I: A Palestinian Memoir",
    author: "Raja Shehadeh",
    description: "Aziz Shehadeh was many things: lawyer, activist, and political detainee, he was also the father of bestselling author and activist Raja. In this new and searingly personal memoir, Raja Shehadeh unpicks the snags and complexities of their relationship.\n\nA vocal and fearless opponent, Aziz resists under the British mandatory period, then under Jordan, and, finally, under Israel. As a young man, Raja fails to recognise his father's courage and, in turn, his father does not appreciate Raja's own efforts in campaigning for Palestinian human rights. When Aziz is murdered in 1985, it changes Raja irrevocably.\n\nThis is not only the story of the battle against the various oppressors of the Palestinians, but a moving portrait of a particular father and son relationship.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677429628i/59686816.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/59686816-we-could-have-been-friends-my-father-and-i?from_search=true&from_srp=true&qid=sShaLZsymM&rank=1"
  },
  {
    title: "The Metamorphosis",
    author: "Franz Kafka",
    description: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes.\n\nWith it's startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis. It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing—though absurdly comic—meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosis has taken its place as one of the most widely read and influential works of twentieth-century fiction. As W.H. Auden wrote, Kafka is important to us because his predicament is the predicament of modern man.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1646444605i/485894.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/485894.The_Metamorphosis?ref=nav_sb_ss_1_11"
  },
  {
    title: "The Uncool",
    author: "Cameron Crowe",
    description: "The Uncool is a joyful dispatch from a lost world, the real-life events that became Almost Famous, and a coming-of-age journey filled with characters you won’t soon forget.\n\nCameron Crowe was an unlikely rock and roll insider. Born in 1957 to parents who strictly banned the genre from their house, he dove headfirst into the world of music. By the time he graduated high school at fifteen, Crowe was contributing to Rolling Stone. His parents became believers, uneasily allowing him to interview and tour with legends like Led Zeppelin; Lynyrd Skynyrd; Bob Dylan; Crosby, Stills, Nash, & Young; and Fleetwood Mac.",
    pitch: "The basis for Almost Famous, a memoir that follows journalist Cameron Crowe's experience bringing the rock and roll life to the masses",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1746488823i/224004354.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/224004354-the-uncool?ref=nav_sb_ss_1_10"
  },
  {
    title: "Kakigori Summer",
    author: "Emily Itami",
    description: "Rei, Kiki, and Ai are three sisters divided by distance and circumstance. Ambitious Rei works in finance in London; Kiki is the single mother of a young son, working in a retirement home in Tokyo; and Ai, the youngest, is a peripatetic Japanese music idol. Having lost both parents, one way or another, the sisters rely on each other as family, far-flung as they are.\n\nWhen Ai is embroiled in a scandal, Rei and Kiki pause their own lives to rescue their baby sister. Over the course of a summer spent in their childhood home on the Japanese coast, the sisters will reunite with their sharp-edged grandmother, care for Kiki’s irrepressible son, and silently worry about Ai, all while carefully not talking about the circumstances of their mother’s death fifteen years before. But silence between sisters can only last for so long…",
    pitch: "A story of sisterhood and belonging",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1741504553i/218671811.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/218671811-kakigori-summer?from_search=true&from_srp=true&qid=mTUKuXRlJF&rank=1"
  },
  {
    title: "The House in the Cerulean Sea",
    author: "T.J. Klune",
    description: "A magical island. A dangerous task. A burning secret.\n\nLinus Baker leads a quiet, solitary life. At forty, he lives in a tiny house with a devious cat and his old records. As a Case Worker at the Department in Charge Of Magical Youth, he spends his days overseeing the well-being of children in government-sanctioned orphanages.\n\nWhen Linus is unexpectedly summoned by Extremely Upper Management he's given a curious and highly classified assignment: travel to Marsyas Island Orphanage, where six dangerous children reside: a gnome, a sprite, a wyvern, an unidentifiable green blob, a were-Pomeranian, and the Antichrist. Linus must set aside his fears and determine whether or not they’re likely to bring about the end of days.\n\nBut the children aren’t the only secret the island keeps. Their caretaker is the charming and enigmatic Arthur Parnassus, who will do anything to keep his wards safe. As Arthur and Linus grow closer, long-held secrets are exposed, and Linus must make a choice: destroy a home or watch the world burn.\n\nAn enchanting story, masterfully told, The House in the Cerulean Sea is about the profound experience of discovering an unlikely family in an unexpected place—and realizing that family is yours.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1569514209i/45047384.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/45047384-the-house-in-the-cerulean-sea?ref=nav_sb_ss_1_29"
  },
  {
    title: "The Last House on Needless Street",
    author: "Catriona Ward",
    description: "This is the story of a serial killer. A stolen child. Revenge. Death. And an ordinary house at the end of an ordinary street.\n\nAll these things are true. And yet they are all lies...\n\nYou think you know what's inside the last house on Needless Street. You think you've read this story before. That's where you're wrong.\n\nIn the dark forest at the end of Needless Street, lies something buried. But it's not what you think...",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1603323638i/54621094.jpg",
    goodreadsurl: "https://www.goodreads.com/book/show/54621094-the-last-house-on-needless-street?ref=nav_sb_ss_1_32"
  }
];

function BookCard({ title, author, pitch, description, image, goodreadsurl }) {
  return (
    <div className="book-card">
      <div className="book-top">
        <img src={image} alt={title} className="book-image" />
        <div className="book-info">
          <h2 className="book-title">{title}</h2>
          <h4 className="book-author">{author}</h4>
        </div>
      </div>
      {pitch && <p className="book-pitch">{pitch}</p>}
      <p className="book-description">{description}</p>
      <a href={goodreadsurl} target="_blank" rel="noreferrer" className="goodreads-btn">
        <img src={`${import.meta.env.BASE_URL}goodreads.svg`} alt="View on Goodreads" />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1 className="page-title">Club Choice</h1>
      {books.map((book) => (
        <BookCard key={book.title} {...book} />
      ))}
    </div>
  );
}
