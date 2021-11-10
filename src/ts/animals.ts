const animals: string[] = ['dog', 'cat', 'elephant', 'panda', 'camel']
const dog: string[] = ['Shiba', 'Collie', 'Corgi', 'Schnauzer', 'Chihuahua']

const getRandomElement = (list: string[]): string => {
  return list[Math.floor(Math.random() * list.length)]
}

export default getRandomElement
export const Animals = animals
export const Dog = dog
