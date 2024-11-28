let cars=[
    {model:'Swift',brand:'Maruthi',price:800000,color:'White'},
    {model:'Dzire',brand:'Maruthi',price:600000,color:'Black'},
    {model:'X1',brand:'BMW',price:5800000,color:'White'},
    {model:'Xuv300',brand:'Mahindra',price:1800000,color:'Black'},
    {model:'Creta',brand:'Hundai',price:2800000,color:'Black'},
    {model:'Fortuner',brand:'Toyota',price:3800000,color:'Pink'},
    {model:'Scorpio',brand:'Mahindra',price:1800000,color:'Pink'},
    {model:'Nano',brand:'TATA',price:100000,color:'Yellow'},
    {model:'Nexon',brand:'TATA',price:1200000,color:'Yellow'},
    {model:'Campass',brand:'JEEP',price:2800000,color:'Red'},
    {model:'Roxx',brand:'Mahindra',price:1800000,color:'Green'},
]
//collect all white color cars in to new Array
let whiteCars = cars.filter((car)=>{
    return car.color==='white'
})
console.log(whiteCars);
/*[
    { model: 'Swift', brand: 'Maruthi', price: 800000, color: 'White' },
    { model: 'X1', brand: 'BMW', price: 5800000, color: 'White' }
  ]*/
//collect all cars their prices below 2000000 in to new Array

let carsUnder2Million = cars.filter(car => car.price < 2000000);
console.log(carsUnder2Million);
/*
[
    { model: 'Swift', brand: 'Maruthi', price: 800000, color: 'White' },
    { model: 'Dzire', brand: 'Maruthi', price: 600000, color: 'Black' },
    {
      model: 'Xuv300',
      brand: 'Mahindra',
      price: 1800000,
      color: 'Black'
    },
    {
      model: 'Scorpio',
      brand: 'Mahindra',
      price: 1800000,
      color: 'Pink'
    },
    { model: 'Nano', brand: 'TATA', price: 100000, color: 'Yellow' },
    { model: 'Nexon', brand: 'TATA', price: 1200000, color: 'Yellow' },
    { model: 'Roxx', brand: 'Mahindra', price: 1800000, color: 'Green' }
  ]*/
//collect all Mahandra - cars into new array
let mahindraCars = cars.filter(car => car.brand === 'Mahindra');
console.log(mahindraCars);
/*[
  {
    model: 'Xuv300',
    brand: 'Mahindra',
    price: 1800000,
    color: 'Black'
  },
  {
    model: 'Scorpio',
    brand: 'Mahindra',
    price: 1800000,
    color: 'Pink'
  },
  { model: 'Roxx', brand: 'Mahindra', price: 1800000, color: 'Green' }
] */
//add 5000 Tax to all cars, and collect into new array
let carsWithTax = cars.map(car => {
    return {
        ...car,  // Keep the existing car properties
        price: car.price + 5000  // Add 5000 tax to the price
    };
});
console.log(carsWithTax);
/*[
  { model: 'Swift', brand: 'Maruthi', price: 805000, color: 'White' },
  { model: 'Dzire', brand: 'Maruthi', price: 605000, color: 'Black' },
  { model: 'X1', brand: 'BMW', price: 5805000, color: 'White' },
  {
    model: 'Xuv300',
    brand: 'Mahindra',
    price: 1805000,
    color: 'Black'
  },
  { model: 'Creta', brand: 'Hundai', price: 2805000, color: 'Black' },
  { model: 'Fortuner', brand: 'Toyota', price: 3805000, color: 'Pink' },
  {
    model: 'Scorpio',
    brand: 'Mahindra',
    price: 1805000,
    color: 'Pink'
  },
  { model: 'Nano', brand: 'TATA', price: 105000, color: 'Yellow' },
  { model: 'Nexon', brand: 'TATA', price: 1205000, color: 'Yellow' },
  { model: 'Campass', brand: 'JEEP', price: 2805000, color: 'Red' },
  { model: 'Roxx', brand: 'Mahindra', price: 1805000, color: 'Green' }
] */