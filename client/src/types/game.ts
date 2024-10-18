export interface PlayerData {
  name: string | null,
  diamonds: number | null
}

export interface LocationData {
  biome: string,
  description: string
}

export interface CreatePlayerFormProps {
  playerData: PlayerData,
  setPlayerData: React.Dispatch<React.SetStateAction<PlayerData>>
  setLocationData: React.Dispatch<React.SetStateAction<LocationData>>
}

export interface CreatePlayerFormData {
  name: string
}

export interface DiamondWidgetProps {
  enabled: boolean
}