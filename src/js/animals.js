const animals = ['dog', 'cat', 'elephant', 'panda', 'camel'];
const dog = ['Shiba', 'Collie', 'Corgi', 'Schnauzer', 'Chihuahua'];

const getAnimals = () => {
  return animals[Math.floor(Math.random() * animals.length)];
};

export default getAnimals;
export const Animals = animals;
export const Dog = dog;
