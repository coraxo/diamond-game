type Biome = 'forest' | 'mountain';

type GameRoom = {
  biome: Biome,
  description: string
}

const biomes: Biome[] = ['forest', 'mountain']

const roomDescriptions: Record<Biome, string[]>  = {
  'forest': [
    "You are walking on a forest path",
    "The forest around you thickens. Progress here is slow and requires significant effort",
    "You come across a clearing in the forest. Wild berries grow in the mossy undergrowth. The sun feels warm on your armor"
  ],
  'mountain': [
    'A path leads up the mountain side. You follow the path'
  ]
}

const leaveBiomeDescriptions: Record<Biome, string[]> = {
  'forest': [
    'The trees and foliage are getting more sparse. '
  ],
  'mountain': [
    'You notice the ground sloping less. '
  ]
}

const enterBiomeDescriptions: Record<Biome, string[]>  = {
  'forest': [
    'You enter a forest'
  ],
  'mountain': [
    'You come across a mountain'
  ]
}

export const generateRoom = (previousRoom: GameRoom, initial: boolean = false) => {
  if (initial) {
    return {
      biome: 'forest',
      description: "You are standing in a forest."
    }
  } else {
    const biome = chooseBiome(previousRoom.biome)
    return {
      biome: biome,
      description: generateDescription(previousRoom.biome, biome)
    }
  }
}

const chooseBiome = (previousBiome: Biome): Biome => {
  if (Math.random() < .8) {
    return previousBiome
  } else {
    return biomes[Math.floor(Math.random() * biomes.length)]
  }
}

const generateDescription = (previousBiome: Biome, biome: Biome): string => {
  let description = ''

  if (previousBiome !== biome) {
    description += generateBiomeTransition(previousBiome, biome)
  }
  description += roomDescriptions[biome][Math.floor(Math.random() * roomDescriptions[biome].length)]

  return description
}

const generateBiomeTransition = (previousBiome: Biome, biome: Biome): string => {
  return leaveBiomeDescriptions[previousBiome][Math.floor(Math.random() * leaveBiomeDescriptions[previousBiome].length)] 
       + enterBiomeDescriptions[biome][Math.floor(Math.random() * enterBiomeDescriptions[biome].length)]
}