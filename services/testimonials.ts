export interface Testimonial {
  client: string;
  message: string;
  role: string;
  clientUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    client: 'Manuel Alcaraz Clemente',
    message:
      'I know Alexandre Moreira since many years. As a contemporary music performer, I can tell that Alexandre is someone you can trust at the performance. He works very efficiently, keeps and transmits calm and finds the best sound for every space. I toured in Spain a program for percussion and electronics with Alexandre. He did a fantastic job as a sound director of the show, adapting every day to a new concert situation and finding always the best solution. He has also done fantastic audio recordings of mine, which pushed a lot my carreer. With the help of his work I have had the opportunity to perform at the Lucerne Festival for several years, Klangspuren Schwaz Festival, among others. His versatility and his profile allow him to work as a sound director in a live performance, in a studio recording, editing, mixing, etc. A great control of the electronic devices but always from a fine musical taste.',
    role: 'Client',
    clientUrl: 'https://manuelalcarazclemente.com/',
  },
  {
    client: 'Emilio Suarez Ardiles',
    message:
      "I've worked with Alexandre for around three years, and it has been a real pleasure. He is attentive, patient and very positive! Everyone knows it takes a lot of energy and focus to create and later record your songs, and with Alex we were really happy. He is motivating and supportive during the process, and we warmly recommend you to work with this pearl from Portugal!",
    role: 'Client',
    clientUrl: 'https://www.facebook.com/EmilioyDavid/',
  },
  {
    client: 'Elia & Danny - Ostura',
    message: `We were very lucky to work with Alexandre during the pre-mixing phase of our 2018 release "The Room". Alexandre edited our tracks to perfection. Not only that, he did it on the move and while he was on vacation to help us meet our deadline. Alexandre saved our asses while delivering spectacular results, all with an unmatched work ethic. We are looking forward to working with him again on the next albums.`,
    role: 'Client',
    clientUrl: 'https://www.facebook.com/osturaband/',
  },
  {
    client: 'Yousef Mekki-Berrada',
    message: `I have had the pleasure of working with Alexandre a few times already. Besides having the comfort of enjoying his broad skillset as both soundtech and musician, it has also been both fun and rewarding to experiment and try new approaches in the studio. Tireless, attentive and yet relaxed, Alexandre is the go-to guy.`,
    role: 'Collaborator',
    clientUrl: 'https://soundcloud.com/ymberrada',
  },
  {
    client: 'Jacques Labouchere',
    message: `Working with Alex as a producer and recording engineer, was an absolute pleasure. It is clear that his patience and professionalism go hand in hand as does his dedication to your music. He truly wants you to be happy with your songs and does his utmost to deliver on the sound you are looking for even if it is not a style of music he is familiar with, but is not afraid to voice his honest opinion if you want to hear it. Working with him on my 4th album was the best recording experience I've ever had!`,
    role: 'Client',
    clientUrl: 'http://jlabouchere.wixsite.com/jlab',
  },
  {
    client: 'Aigua',
    message: `We recorded our first album with Alex, and it was a great experience. Alex doesn't only work fast, he also shows a lot of passion for his profession and is a great person to hang out with.`,
    role: 'Client',
    clientUrl: 'https://aiguamusica.bandcamp.com/music',
  },
  {
    client: 'Riccardo Nicolin',
    message: `When you work and make music with someone who love what they're doing everything becomes simpler and funnier! This is something you can clearly feel when you're playing your instrument while there is Alexandre on the mixing console. I met Alex in Göteborg in 2016. Ever since the first time we worked together there has been chemistry between us. We've always had genuine fun during the recordings and he has a great way of conducting the creative process. He's not scared of trying new ways of recording and playing instruments (and things), he's such a curious and creative person. That's why I love working with Alex and that's why I would definitely recommend him.`,
    role: 'Collaborator',
    clientUrl: 'https://www.instagram.com/riccardino.trottolino/?hl=en',
  },
  {
    client: 'Miguel Moreno',
    message: `One time Alex asked for my help to record some jazz group. He then mixed it and it sounded great. Another time he asked me to record some guitar on a song. He then mixed it and it sounded great. Some other time he asked me to record a vocalist for a song of his. He then mixed it and it sounded great. These are just three times out of countless others.
    
    Work with him. Sound great.`,
    role: 'Collaborator',
    clientUrl: 'https://www.youtube.com/user/MrMnM14',
  },
];

export function getTestimonials(): Testimonial[] {
  return testimonials;
}
