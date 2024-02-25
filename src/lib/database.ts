let data = [
  {
    slug: "three-body-problem",
    title: "Three body problem",
    author: "Cixin Liu",
    description:
      "The Three-Body Problem (Chinese: 三体; lit. 'Three-Body') is a novel by Chinese science fiction author Liu Cixin, the first in the Remembrance of Earth's Past trilogy—though the series as a whole is often referred to as The Three-Body Problem, or simply as Three-Body. The series portrays a fictional past, present and future wherein Earth encounters an alien civilization from a nearby system of three sun-like stars orbiting one another, in an example of the three-body problem in orbital mechanics.\n\nIt was originally serialized in Science Fiction World in 2006, and published as a standalone book in 2008. In 2006 it received the Yinhe [Galaxy] Award for Chinese science fiction, and in 2012 was described as one of the genre's most successful novels of the previous two decades. By 2015, a Chinese film adaptation of the same name was in production. The English translation by Ken Liu was published by Tor Books in 2014. The translation became the first Asian novel ever to win a Hugo Award for Best Novel and was nominated for the Nebula Award for Best Novel.",
    image: "/images/three-body-problem.jpeg",
  },
  {
    slug: "dune",
    title: "Dune",
    author: "Frank Herbert",
    description:
      "Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials (1963-64 novel 'Dune World' and 1965 novel 'Prophet of Dune') in Analog magazine. It tied with Roger Zelazny's This Immortal for the Hugo Award for Best Novel and won the inaugural Nebula Award for Best Novel in 1966. It is the first installment of the Dune Chronicles. It is one of the world's best-selling science fiction novels of all time.",
    image: "/images/dune.jpeg",
  },
  {
    slug: "foundation",
    title: "Foundation",
    author: "Isaac Asimov",
    description:
      "Foundation is a science fiction novel by American writer Isaac Asimov. It is the first published in his Foundation Trilogy (later expanded into the Foundation series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the early story of the Foundation, an institute founded by psychohistorian Hari Seldon to preserve the best of galactic civilization after the collapse of the Galactic Empire.\n\nOn August 1, 1941, Isaac Asimov proposed to John W. Campbell of Astounding Science Fiction that he write a short story set in a slowly declining Galactic Empire, based on the fall of the Western Roman Empire. Campbell liked the idea, and by the end of a two-hour meeting Asimov planned to write a series of stories depicting the fall of the first Galactic Empire and the rise of the second.",
    image: "/images/foundation.jpeg",
  },
  {
    slug: "project-hail-mary",
    title: "Project Hail Mary",
    author: "Andy Weir",
    description:
      "Project Hail Mary is a science fiction novel by novelist Andy Weir. Set in the near future, it centers on junior high (middle) school-teacher-turned-astronaut Ryland Grace, who wakes up from a coma afflicted with amnesia. He gradually remembers that he was sent to the Tau Ceti solar system, 12 light-years from Earth, to find a means of reversing a solar dimming event that could cause the extinction of humanity.",
    image: "/images/project-hail-mary.jpg",
  },
  {
    slug: "recursion",
    title: "Recursion",
    author: "Blake Crouch",
    description:
      "Memory makes reality.\n\nThat's what NYC cop Barry Sutton is learning, as he investigates the devastating phenomenon the media has dubbed False Memory Syndrome—a mysterious affliction that drives its victims mad with memories of a life they never lived.\n\nThat's what neuroscientist Helena Smith believes. It's why she's dedicated her life to creating a technology that will let us preserve our most precious memories. If she succeeds, anyone will be able to re-experience a first kiss, the birth of a child, the final moment with a dying parent.",
    image: "/images/recursion.jpg",
  },
  {
    slug: "snow-crash",
    title: "Snow Crash",
    author: "Neal Stephenson",
    description:
      "Snow Crash is a science fiction novel by the American writer Neal Stephenson, published in 1992. Like many of Stephenson's novels, its themes include history, linguistics, anthropology, archaeology, religion, computer science, politics, cryptography, memetics, and philosophy.\n\nIn his 1999 essay \"In the Beginning... Was the Command Line\", Stephenson explained the title of the novel as his term for a particular software failure mode on the early Macintosh computer. Stephenson wrote about the Macintosh \"When the computer crashed and wrote gibberish into the bitmap, the result was something that looked vaguely like static on a broken television set—a 'snow crash'\". Stephenson has also mentioned that Julian Jaynes' book The Origin of Consciousness in the Breakdown of the Bicameral Mind was one of the main influences on Snow Crash.",
    image: "/images/snow-crash.jpg",
  },
  {
    slug: "the-martian",
    title: "The Martian",
    author: "Andy Weir",
    description:
      "The Martian is a 2011 science fiction debut novel written by Andy Weir. The book was originally self-published on Weir's blog, in a serialized format. In 2014, the book was re-released after Crown Publishing Group purchased the exclusive publishing rights. The story follows an American astronaut, Mark Watney, as he becomes stranded alone on Mars in 2035 and must improvise in order to survive.\n\nA film adaptation, The Martian, directed by Ridley Scott and starring Matt Damon, was released in October 2015.",
    image: "/images/the-martian.jpg",
  },
];

export type Book = (typeof data)[number];

export const books = {
  findBySlug: async (slug: string) => {
    return data.find((book) => book.slug === slug) as Book;
  },
  all: async () => {
    return data;
  },
};
