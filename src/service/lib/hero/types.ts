export interface SuperHero {
  id: string,
  name: string
}

export interface HeroRecord extends SuperHero {
  createdAt: Date,
  updatedAt: Date,
}
