interface Car {
  model: string;
  price: number;
  dynamic_1: Record<string, string>;
  dynamic_2: { [key: string]: string };
  tuple: [string, number, string]; 
}

const car: Car = {
  model: 'Lada Kalina',
  price: 350000,
  dynamic_1: {
    color: 'gray',
    engine: '1.6',
  },
  dynamic_2: {
    owner: 'Egor',
    city: 'Yekaterinburg',
  },
  tuple: ['sedan', 2011, 'manual'],
};

type CarKeys = keyof typeof car;

const carKeys = Object.keys(car) as CarKeys[];

console.log('Список ключей Car:', carKeys);

console.log('model:', car.model);
console.log('price:', car.price);

console.log('dynamic_1.color:', car.dynamic_1.color);
console.log('dynamic_1.engine:', car.dynamic_1.engine);

console.log('dynamic_2.owner:', car.dynamic_2.owner);
console.log('dynamic_2.city:', car.dynamic_2.city);

console.log('tuple:', car.tuple);
console.log('tuple[0]:', car.tuple[0]); 
console.log('tuple[1]:', car.tuple[1]); 
console.log('tuple[2]:', car.tuple[2]); 

function printCarProperty(key: CarKeys): void {
  console.log(`${key}:`, car[key]);
}

printCarProperty('model');
printCarProperty('tuple');


