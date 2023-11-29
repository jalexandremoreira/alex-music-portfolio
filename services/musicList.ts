export interface Links {
  spotify: string | null;
  bandCamp: string | null;
  appleMusic: string | null;
  coverArt: string | null;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  date: string;
  links: Links;
  description: string;
}

const albums: Album[] = [
  {
    id: 'broken-arrows',
    title: 'By Broken Arrows',
    artist: 'Jacques Labouchere',
    date: 'November 23, 2023',
    links: {
      spotify: null,
      bandCamp: 'https://jacqueslabouchere.bandcamp.com/track/by-broken-arrows',
      appleMusic: null,
      coverArt: 'https://f4.bcbits.com/img/a3160015484_16.jpg',
    },
    description:
      'Written and performed by Jacques Labouchere and band. Produced, recorded and mixed and mastered by Alexandre Moreira.',
  },
  {
    id: 'no-man',
    title: 'No Man’s Gonna Stop Me!',
    artist: 'Jacques Labouchere',
    date: 'September 16, 2023',
    links: {
      spotify:
        'https://open.spotify.com/album/3eSjbpencs07Fn0foBtWDe?si=7WLpbfIWRv-DL1kkam-BaQ',
      bandCamp: null,
      appleMusic:
        'https://music.apple.com/se/album/no-mans-gonna-stop-me-single/1701312128',
      coverArt:
        'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0b/72/a2/0b72a2c4-7970-8d3d-3992-0516947939ac/859776410557_cover.jpg/632x632bb.webp',
    },
    description:
      'Written and performed by Jacques Labouchere and band. Produced, recorded and mixed and mastered by Alexandre Moreira.',
  },
  {
    id: 'slava-ukraini',
    title: 'Slava Ukraini! (Song For The Madman)',
    artist: 'Jacques Labouchere',
    date: 'September 9, 2022',
    links: {
      spotify:
        'https://open.spotify.com/track/6YMzMbjRwkLINiv98SveMY?si=6b8732cbfc184eb9',
      bandCamp:
        'https://jacqueslabouchere.bandcamp.com/track/slava-ukraini-song-for-the-madman',
      appleMusic:
        'https://music.apple.com/se/album/slava-ukraini-song-for-the-madman-single/1640729385',
      coverArt: 'https://f4.bcbits.com/img/a2649818707_16.jpg',
    },
    description:
      'Written and performed by Jacques Labouchere and band, along with a group of Ukrainian refugees. Produced, recorded and mixed and mastered by Alexandre Moreira.',
  },
  {
    id: 'im-doing-this-for-the-money',
    title: `I'm Doing This For the Money`,
    artist: 'Alexandre Moreira',
    date: 'December 24, 2021',
    links: {
      spotify:
        'https://open.spotify.com/album/4FAVmUMLyZtY12NHoRNko6?si=7le51rgLR8q2CMuUkGlosg',
      bandCamp:
        'https://alexandremoreira.bandcamp.com/album/im-doing-this-for-the-money',
      appleMusic:
        'https://music.apple.com/se/album/im-doing-this-for-the-money-ep/1601612415',
      coverArt: 'https://f4.bcbits.com/img/a3730279400_16.jpg',
    },
    description:
      'Does comedy have a place in music? Should artists limit themselves to a single musical style or genre? Are conventions meant to be broken? Am I doing this for the money? Find the answers to these and many more questions! Written, mostly recorded and mixed by Alexandre Moreira. Mastered by José Diogo Neves.',
  },
  {
    id: 'mosquito',
    title: 'Mosquito (single)',
    artist: 'Alexandre Moreira',
    date: 'November 29, 2021',
    links: {
      spotify:
        'https://open.spotify.com/album/1s7eMojyoGdJOWCvRX2XEo?si=pJuGV0djQbWMpJd3R8M5KQ',
      bandCamp: 'https://alexandremoreira.bandcamp.com/track/mosquito',
      appleMusic: 'https://music.apple.com/se/album/mosquito-single/1597118057',
      coverArt: 'https://f4.bcbits.com/img/a2229487081_16.jpg',
    },
    description:
      'Inspired by all manner of buzzing creatures. Synths and vocals: Alexandre Moreira, drums performed and recorded by: Riccardo Nicolin, bass performed and recorded by: Luís Correia, xylophone: Lúcia Viana da Silva. Produced, mixed by Alexandre Moreira. Mastered by José Diogo Neves.',
  },
  {
    id: 'connecting-flights',
    title: 'Connecting Flights',
    artist: 'Jacques Labouchere',
    date: 'June 25, 2021',
    links: {
      spotify:
        'https://open.spotify.com/album/7GNadfKfoLVViITQi5gPNj?si=VZsxXb5nSq2AW5M84MUWpg&dl_branch=1',
      bandCamp:
        'https://jacqueslabouchere.bandcamp.com/album/connecting-flights',
      appleMusic:
        'https://music.apple.com/se/album/connecting-flights/1567162731',
      coverArt: 'https://f4.bcbits.com/img/a3521469695_16.jpg',
    },
    description:
      'Written and performed by Jacques Labouchere and band. Produced, recorded and mixed by Alexandre Moreira. Mastered by José Diogo Neves.',
  },
  {
    id: 'question-mark-in-d',
    title: '? in D',
    artist: 'Jacques Labouchere',
    date: 'January 15, 2021',
    links: {
      spotify:
        'https://open.spotify.com/track/0hKKjFTmok5mj8SyYISrqa?si=9c29b47d75054135',
      bandCamp: 'https://jacqueslabouchere.bandcamp.com/track/in-d',
      appleMusic: 'https://music.apple.com/se/album/in-d-single/1690233791',
      coverArt: 'https://f4.bcbits.com/img/a0253449804_16.jpg',
    },
    description:
      'Written and performed by Jacques Labouchere and band. Produced, recorded and mixed by Alexandre Moreira. Mastered by José Diogo Neves.',
  },
  {
    id: 'can-we-go-out-yet',
    title: 'Can We Go Out Yet?',
    artist: 'Alexandre Moreira',
    date: 'June 12, 2020',
    links: {
      spotify:
        'https://open.spotify.com/album/4jIk779l1gq4PQsGTTOavj?si=Nm6zcUaETXGSnM3eb-bsdA',
      bandCamp: 'https://alexandremoreira.bandcamp.com/album/can-we-go-out-yet',
      appleMusic:
        'https://music.apple.com/se/album/can-we-go-out-yet-single/1516584703',
      coverArt: 'https://f4.bcbits.com/img/a0476157114_16.jpg',
    },
    description: `According to pandemic me: "It's 2020. Shit's crazy. Self-imposed quarantine is getting old. Can we go out yet?"`,
  },
  {
    id: 'baggage',
    title: 'Baggage',
    artist: 'Jacques Labouchere',
    date: 'April 24, 2020',
    links: {
      spotify:
        'https://open.spotify.com/track/4BlK5fNVarFIiDjcQSioyN?si=b39d55fd4efd4de0',
      bandCamp: 'https://jacqueslabouchere.bandcamp.com/track/baggage',
      appleMusic:
        'https://music.apple.com/se/album/baggage/1503127707?i=1503127709',
      coverArt: 'https://f4.bcbits.com/img/a2401120591_16.jpg',
    },
    description:
      'Written and performed by Jacques Labouchere and band. Produced, recorded and mixed by Alexandre Moreira. Mastered by José Diogo Neves.',
  },
  {
    id: 'lost-goals',
    title: 'Lost Goals',
    artist: 'Jacques Labouchere',
    date: 'February 21, 2020',
    links: {
      spotify:
        'https://open.spotify.com/track/28KOUtNofuqqzL3SojXjqL?si=91UaDKswQfOC022NuLHKHQ',
      bandCamp: 'https://jacqueslabouchere.bandcamp.com/track/lost-goals',
      appleMusic:
        'https://music.apple.com/se/album/lost-goals/1494132562?i=1494132566',
      coverArt: 'https://f4.bcbits.com/img/a0729489419_10.jpg',
    },
    description:
      'Written and performed by Jacques Labouchere and band. Produced, recorded and mixed by Alexandre Moreira. Mastered by José Diogo Neves.',
  },
  {
    id: 'mareta',
    title: 'Mareta',
    artist: 'MónDuo/Aigua',
    date: '2018',
    links: {
      spotify:
        'https://open.spotify.com/album/1m6dUEWwcgUZMmM49uUcvm?si=gAVN_BzCTCW4uKSnVNExBQ',
      bandCamp:
        'https://aiguamusica.bandcamp.com/album/mareta?from=search&search_item_id=2656613008&search_item_type=a&search_match_part=%3F&search_page_id=2983386434&search_page_no=1&search_rank=6&search_sig=126df446a39f46bd1c3044b63a40323a',
      appleMusic: null,
      coverArt: 'https://f4.bcbits.com/img/a0103365469_16.jpg',
    },
    description:
      'Written and performed by MónDuo. Recorded, mixed and mastered by Alexandre Moreira',
  },
];

export function getAlbums() {
  return albums;
}

export function getAlbum(id: string): Album {
  return albums.find((a) => a.id === id) as Album;
}
