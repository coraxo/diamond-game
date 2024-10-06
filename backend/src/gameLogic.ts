// Temporary ChatGPT descriptions and biomes, our own ones are commented out at the monent

// type Biome = 'forest' | 'mountain'

type Biome = 'forest' | 'mountain' | 'desert' | 'swamp' | 'plains' | 'tundra' | 'jungle' | 'coastline' | 'volcanic' | 'hills' | 'lake'


export type GameRoom = {
  biome: Biome,
  description: string
}

//const biomes: Biome[] = ['forest', 'mountain']

const biomes: Biome[] = [
  'forest',
  'mountain',
  'desert',
  'swamp',
  'plains',
  'tundra',
  'jungle',
  'coastline',
  'volcanic',
  'hills',
  'lake'
]

// const roomDescriptions: Record<Biome, string[]>  = {
//   'forest': [
//     "You are walking on a forest path.",
//     "The forest around you thickens. Progress here is slow and requires significant effort.",
//     "You come across a clearing in the forest. Wild berries grow in the mossy undergrowth. The sun feels warm on your armor."
//   ],
//   'mountain': [
//     'A path leads up the mountain side. You follow the path.'
//   ]
// }

const roomDescriptions: Record<Biome, string[]> = {
  'forest': [
    "You are walking on a forest path. Birds sing high above, hidden in the thick canopy.",
    "The forest around you thickens. Progress here is slow, and the air smells of damp earth.",
    "You come across a clearing in the forest. Wild berries grow in the mossy undergrowth, and shafts of sunlight warm your face.",
    "Tall trees stretch out in every direction, their trunks twisted and ancient, and the sound of wildlife echoes around you."
  ],
  'mountain': [
    'A path leads up the mountain side. Jagged rocks tower above you as you ascend.',
    'The air thins as you climb higher, the cold wind biting at your skin.',
    'You find yourself surrounded by steep cliffs, their surfaces weathered by time and wind.',
    'Snow begins to dust the rocky ground as you climb further, the peak looming above.'
  ],
  'desert': [
    "The sun beats down mercilessly as you step onto the hot, shifting sands of the desert.",
    "Dunes stretch endlessly in all directions, the heat rising in waves from the golden sands.",
    "A distant mirage shimmers on the horizon, and the wind howls through the empty expanse.",
    "The air is dry and parched, and the landscape is barren, with only the occasional cactus or hardy shrub in sight."
  ],
  'swamp': [
    "You wade through murky waters, the air thick with the smell of decay and the buzz of insects.",
    "The ground is soft and treacherous, your feet sinking into the mud with every step.",
    "Twisted trees rise from the swamp, their gnarled roots half-submerged in the stagnant water.",
    "The swamp is eerily quiet, save for the occasional croak of a distant frog or the splash of something unseen beneath the surface."
  ],
  'plains': [
    "The grass sways gently in the breeze, and the plains stretch endlessly towards the horizon.",
    "Wildflowers dot the vast landscape, and the sky above is vast and clear.",
    "The wind whispers through the tall grasses, and distant mountains loom far in the distance.",
    "The plains are open and exposed, with no shelter in sight except for the occasional tree."
  ],
  'tundra': [
    "The tundra is a frozen wasteland, with snow and ice covering every inch of the barren land.",
    "Cold winds whip across the frozen ground, biting at your exposed skin.",
    "The air is deathly still, and the only sound is the crunch of snow beneath your boots.",
    "In the distance, the silhouette of a lone mountain stands stark against the endless white."
  ],
  'jungle': [
    "The air is thick and humid, and the jungle teems with life all around you.",
    "Massive vines hang from towering trees, their leaves forming a dense canopy overhead.",
    "The sound of exotic birds and unseen creatures fills the air as you push through the dense underbrush.",
    "Every step is a challenge in the thick jungle, where the ground is soft and the paths are overgrown."
  ],
  'coastline': [
    "Waves crash against the rocky shore as you walk along the coastline.",
    "The salty breeze fills your lungs as you gaze out at the endless expanse of the sea.",
    "Seabirds call overhead, and the horizon stretches far and wide, with the sun beginning to dip into the water.",
    "The coastline is rugged and wild, with jagged cliffs rising up from the sea below."
  ],
  'volcanic': [
    "The ground beneath you rumbles faintly as you step onto the blackened, volcanic rock.",
    "Sulfur fills the air, and the heat from the molten lava nearby makes it difficult to breathe.",
    "Cracks in the earth glow with a fiery light, and the landscape is harsh and unforgiving.",
    "The sky above is thick with smoke, and the distant rumble of the volcano echoes through the air."
  ],
  'hills': [
    "The gentle rolling hills spread out before you, their grassy slopes dotted with wildflowers.",
    "As you crest the top of a hill, you can see far into the distance, where mountains rise in the distance.",
    "The hills are peaceful and quiet, with only the sound of the wind rustling the tall grass.",
    "In the distance, a herd of wild deer grazes, unaware of your presence."
  ],
  'lake': [
    "The calm surface of the lake reflects the sky above, its waters still and peaceful.",
    "You stand at the edge of the lake, the cool breeze coming off the water refreshing against your skin.",
    "The sound of gentle waves lapping against the shore fills the air as you take in the serene landscape.",
    "Fish dart beneath the surface of the lake, and the distant outline of a mountain is reflected in the water."
  ]
}


// const leaveBiomeDescriptions: Record<Biome, string[]> = {
//   'forest': [
//     'The trees and foliage are getting more sparse. '
//   ],
//   'mountain': [
//     'You notice the ground sloping less. '
//   ]
// }

const leaveBiomeDescriptions: Record<Biome, string[]> = {
  'forest': [
    "The trees and foliage are getting more sparse, revealing patches of open sky. ",
    "The smell of pine fades as the path leads you out of the forest. ",
    "The thick canopy above breaks apart, allowing more sunlight to reach the ground. "
  ],
  'mountain': [
    "You notice the ground sloping less as the rocky path smooths. ",
    "The towering cliffs recede into the distance as you descend the mountain. ",
    "The cold mountain air begins to warm as you leave the heights behind. "
  ],
  'desert': [
    "The endless dunes give way to firmer ground as the sand thins. ",
    "The dry heat begins to wane as the golden sands recede behind you. ",
    "The wind that once howled through the desert quiets as you leave the sandy expanse. "
  ],
  'swamp': [
    "The thick, muddy ground solidifies as the murky waters recede. ",
    "The oppressive stench of the swamp fades as the air becomes fresher. ",
    "The buzzing of insects grows quieter as the wetland disappears behind you. "
  ],
  'plains': [
    "The rolling grasslands blend into the horizon, slowly giving way to new terrain. ",
    "The wind stills as the wide-open plains disappear behind you. ",
    "The endless grass gives way to a more diverse landscape as you leave the plains. "
  ],
  'tundra': [
    "The frozen earth beneath you softens as you step beyond the barren tundra. ",
    "The cold, biting winds lessen as the endless snow fades behind you. ",
    "The crunch of snow underfoot gives way to the softer earth as you leave the tundra. "
  ],
  'jungle': [
    "The thick canopy begins to thin, allowing more sunlight to break through. ",
    "The dense jungle foliage slowly opens up, leading you to clearer paths ahead. ",
    "The constant hum of jungle life fades as you exit the lush wilderness. "
  ],
  'coastline': [
    "The sound of crashing waves becomes distant as the salty air fades. ",
    "The cries of seabirds grow faint as the horizon shifts from sea to land. ",
    "The cool sea breeze weakens as you leave the rugged coastline. "
  ],
  'volcanic': [
    "The scent of sulfur fades as the blackened rocks turn to fertile ground. ",
    "The heat beneath your feet cools as you leave the volcanic terrain behind. ",
    "The rumbling beneath the earth quiets as you step off the volcanic fields. "
  ],
  'hills': [
    "The gentle rise and fall of the hills flattens into even ground. ",
    "The rolling hills grow less steep as the terrain levels out. ",
    "The lush greenery of the hills gives way to a more stable landscape. "
  ],
  'lake': [
    "The shimmering lake water disappears as the shore gives way to open land. ",
    "The cool, crisp air fades as you move further inland from the lake. ",
    "The gentle sound of lapping waves is replaced by the rustle of dry leaves. "
  ]
}

// const enterBiomeDescriptions: Record<Biome, string[]>  = {
//   'forest': [
//     'You enter a forest. '
//   ],
//   'mountain': [
//     'You come across a mountain. '
//   ]
// }

const enterBiomeDescriptions: Record<Biome, string[]> = {
  'forest': [
    "As you step into the forest, the tall trees create a natural cathedral, their leaves whispering secrets above. ",
    "You find yourself in a vibrant green world, where the sunlight filters through the foliage, casting enchanting patterns on the ground. ",
    "The air is filled with the scent of damp earth and blooming wildflowers, as you venture deeper into the enchanting woodland. ",
    "A chorus of birdsong greets you, echoing through the trees as you take your first steps into this verdant sanctuary. "
  ],
  'mountain': [
    "You approach the majestic mountains, their rocky peaks piercing the sky, a realm untouched by time. ",
    "The path winds upward, revealing breathtaking views of the valley below, with clouds swirling around the high cliffs. ",
    "With each step, the air grows crisp and invigorating, filling your lungs with the essence of the wild. ",
    "As you reach the foothills, the sound of distant waterfalls cascades through the air, inviting you to explore further. "
  ],
  'desert': [
    "You step into the vast desert, where endless dunes of golden sand stretch as far as the eye can see, glimmering under the sun. ",
    "The heat envelops you like a warm blanket, and the air shimmers with heatwaves in the distance. ",
    "Cacti stand tall, their silhouettes casting long shadows in the late afternoon sun, as the desert reveals its serene beauty. ",
    "A gentle breeze stirs the sand, whispering tales of ancient travelers who have crossed this barren expanse. "
  ],
  'swamp': [
    "You enter the swamp, where the air is thick with humidity, and the ground squelches beneath your feet. ",
    "Gnarled trees loom overhead, their roots creeping through the murky waters, creating a labyrinth of nature. ",
    "The croaking of frogs and the buzz of insects surround you, an orchestra of life hidden within the shadows. ",
    "A sense of mystery pervades the air as you push through the dense underbrush, your curiosity piqued by the hidden wonders. "
  ],
  'plains': [
    "You find yourself on the vast plains, where rolling grasslands stretch endlessly under the wide-open sky. ",
    "The wind dances through the tall grasses, carrying with it the sweet scent of wildflowers that dot the landscape. ",
    "In the distance, gentle hills rise and fall, inviting exploration and discovery on this serene terrain. ",
    "The horizon stretches far and wide, a canvas painted with the warm hues of the setting sun. "
  ],
  'tundra': [
    "You step onto the frozen tundra, where the ground is a patchwork of snow and hardy vegetation, resilient against the cold. ",
    "The chill bites at your cheeks as you take in the stark beauty of the landscape, vast and untouched. ",
    "In the distance, mountains loom, their peaks dusted with snow, standing sentinel over this wild expanse. ",
    "A herd of caribou grazes peacefully, their silhouettes contrasting against the bright white snow. "
  ],
  'jungle': [
    "You enter the lush jungle, where the air is thick with humidity and the sounds of exotic creatures fill your ears. ",
    "Vibrant flowers bloom in every direction, their colors a feast for the eyes as you push through the dense foliage. ",
    "Towering trees stretch high above, their trunks entwined with vines and moss, creating a natural tapestry of life. ",
    "The vibrant calls of tropical birds echo overhead, a symphony of sound that accompanies your every step. "
  ],
  'coastline': [
    "You step onto the rugged coastline, where the salty breeze refreshes your spirit as waves crash against the rocks. ",
    "The ocean stretches endlessly before you, its deep blue contrasting with the golden sands at your feet. ",
    "Seagulls cry out overhead, their silhouettes dancing against the bright sky as you take in the breathtaking view. ",
    "Distant cliffs rise dramatically from the shore, their rugged beauty beckoning you to explore their heights. "
  ],
  'volcanic': [
    "You enter the volcanic landscape, where the ground feels warm beneath your feet, hinting at the power within. ",
    "Steam rises from the earth, and the air is thick with the smell of sulfur, a reminder of nature's raw energy. ",
    "The ground is a patchwork of blackened rocks and glowing lava flows, a stark contrast to the vibrant flora around. ",
    "In the distance, you can see an active volcano, smoke billowing from its peak, a powerful sight that commands respect. "
  ],
  'hills': [
    "You walk into the rolling hills, their gentle slopes covered in lush grass that sways with the wind. ",
    "The landscape undulates around you, creating a peaceful rhythm that invites you to wander. ",
    "From the top of a hill, you gaze at the horizon, where the sun dips low, painting the sky in hues of orange and pink. ",
    "A gentle breeze carries the sweet scent of wildflowers, enhancing the tranquility of this idyllic setting. "
  ],
  'lake': [
    "You approach the shimmering shores of a lake, its surface still and reflective, mirroring the sky above. ",
    "The cool air is filled with the sound of water lapping gently against the shore, a soothing melody. ",
    "Birds flit over the surface, their reflections dancing in the water as you take in the serene beauty. ",
    "In the distance, majestic mountains stand guard, their outlines perfectly mirrored in the calm lake. "
  ]
}

export const generateRoom = (previousRoom: GameRoom, initial: boolean = false) => {
  console.log("We here")
  if (initial) {
    return {
      biome: 'forest',
      description: "You are standing in a forest. "
    }
  } else {
    const biome = chooseBiome(previousRoom.biome)
    return {
      biome: biome,
      description: generateDescription(previousRoom, biome)
    }
  }
}

const chooseBiome = (previousBiome: Biome): Biome => {
  if (Math.random() < .65) {
    return previousBiome
  } else {
    const filteredBiomes = biomes.filter(biome => biome !== previousBiome)
    return filteredBiomes[Math.floor(Math.random() * filteredBiomes.length)]
  }
}

const generateDescription = (previousRoom: GameRoom, biome: Biome): string => {
  let description = ''

  if (previousRoom.biome !== biome) {
    description += generateBiomeTransition(previousRoom.biome, biome)
  }
  const filteredDescriptions = roomDescriptions[biome].filter(description => description !== previousRoom.description);
  description += filteredDescriptions[Math.floor(Math.random() * filteredDescriptions.length)]

  return description
}

const generateBiomeTransition = (previousBiome: Biome, biome: Biome): string => {
  return leaveBiomeDescriptions[previousBiome][Math.floor(Math.random() * leaveBiomeDescriptions[previousBiome].length)] 
       + enterBiomeDescriptions[biome][Math.floor(Math.random() * enterBiomeDescriptions[biome].length)]
}