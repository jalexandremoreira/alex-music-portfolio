export interface Gear {
  name: string;
  amount: number | 'various';
}

const instruments: Gear[] = [
  {
    name: `1960's Pearl drumkit`,
    amount: 1,
  },
  {
    name: `1980's Yamaha/Tama drumkit`,
    amount: 1,
  },
  {
    name: `Vintage children's drumkit`,
    amount: 2,
  },
  {
    name: 'Assortment of cymbals',
    amount: 'various',
  },
  {
    name: 'Harley Benton electric bass',
    amount: 2,
  },
  {
    name: 'Harley Benton electric guitar',
    amount: 1,
  },
  {
    name: 'Acoustic guitar',
    amount: 1,
  },
  {
    name: 'Vintage vertical piano',
    amount: 1,
  },
  {
    name: `Orange Micro Terror guitar amp`,
    amount: 1,
  },
];

const recordingGear: Gear[] = [
  {
    name: 'Shure SM57',
    amount: 2,
  },
  {
    name: 'Shure SM7B',
    amount: 1,
  },
  {
    name: 'Warm Audio WA-47jr',
    amount: 1,
  },
  {
    name: 'Oktava MK 012-01 MSP2',
    amount: 2,
  },
  {
    name: 'MXL V67g',
    amount: 1,
  },
  {
    name: 'Electro-Voice DS35 (Vintage)',
    amount: 1,
  },
  {
    name: 'Electro-Voice N/D 257 (Vintage)',
    amount: 1,
  },
  {
    name: 'Antelope Edge Solo',
    amount: 1,
  },
  {
    name: 'Golden Age R1 active Mk3',
    amount: 1,
  },
  {
    name: 'Focusrite Scarlett 18i20 3rd Gen',
    amount: 1,
  },
  {
    name: 'Antelope Discrete 4 Synergy Core',
    amount: 1,
  },
  {
    name: 'Microphone cables & stands',
    amount: 'various',
  },
  {
    name: 'Studio headphones',
    amount: 'various',
  },
];

export function getInstruments() {
  return instruments;
}

export function getRecGear() {
  return recordingGear;
}
