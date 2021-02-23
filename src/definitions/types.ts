export type Character = {
  ability: {
    agility: number
    presence: number
    strength: number
    toughness: number
  }
  actions: string[]
  class: string
  equipment: {
    armor: string
    shield: boolean
    weapon: string
  }
  habits: string
  health: number
  inventory: string[]
  money: number
  name: string
  omens: {
    notation: string
    total: number
  }
  scrolls: string[]
  tales: string
  traits: string
}

/*

  EXAMPLE:

  character = {
      ability: {
          agility: 0,
          presence: 0,
          strength: 1,
          toughness: 0
      },
      actions: ['Hamfund the Squire', 'Poltroon the Court Jester'],
      class: 'Wretched Royalty',
      equipment: {
          armor: 'Fur armor',
          shield: true,
          weapon: 'Femur'
      },
      habits: 'Prone to substance abuse and lazy.',
      health: 3,
      money: 168,
      name: 'Börda',
      inventory: ['Waterskin', 'Femur', 'Fur armor', 'Sling', 'Backpack', 'Silver crucifix', 'Tent'],
      omens: {
          notation: 'd2',
          total: 2
      },
      scrolls: ['Whispers Pass the Gate'],
      tales: 'Your earliest memories are of following an army in eastern Wästland.',
      traits: 'You have thirty or so friends who never let you down: YOUR TEETH.'
  }

*/
