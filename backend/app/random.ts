import { faker } from '@faker-js/faker';
import Chance from 'chance'

const GLOBAL_SEED = 1234567890

faker.seed(GLOBAL_SEED) 

export const chanceInstance = new Chance(GLOBAL_SEED)
export const fakerInstance = faker;