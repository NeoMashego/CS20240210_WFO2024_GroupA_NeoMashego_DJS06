// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//for each combined empty array
const combine = [];

provinces.forEach(i => { console.log(i); });
names.forEach(j => { console.log(j); });

names.forEach((j, i) => {
  combine.push(`${j} (${provinces[i]})`)
})
console.log(combine);

//map capital letters
const capitalLetters = provinces.map(k => k.toUpperCase());
console.log(capitalLetters);

//length of names
const lengthly = names.map(l => l.length);
console.log(lengthly);

//sorting provinces alphabetically
const sorting = provinces.sort();
console.log(sorting);

//filter provinces with word Cape
const filtering = provinces.filter(m => !m.includes(' Cape'));
console.log(filtering);

//Boolean Array
const booleanArray = names.map(n => n.includes('S'));
console.log(booleanArray);

//Object Mapping names and provinces
const nameMapping = names.reduce((o, p, index) => {
  o.push({
    names: p,
    province: provinces[index]
  })
  return o;
}, []);
console.log(nameMapping);

//filter empty
function fill(products){
  return products.filter(c => c.price !== '' && ' ');
}

console.log({
  //log product names
  logProducts: products.map(a => a.product),
  
  //filter by name length
  filterLength: products.filter(b => b.product.length <= 5).map(b => b.product),

  //Price Manipulation
  priceManipulation: fill(products) // Filter out products with invalid prices
  .map(c => ({ ...c, price: +c.price })) // Convert price strings to numbers
  .reduce((total, c) => total + c.price, 0),

  //Concatenate Product Names
  concatenateP: products.reduce((d, e) => d + e.product + ", "),

  //Find Extremes in Prices
  extremeP: (function () {
    const validProducts = fill(products).map(c => ({ ...c, price: Number(c.price) }));
    const highestP = validProducts.reduce((max, p) => p.price > max.price ? p : max);
    const lowestP = validProducts.reduce((min, p) => p.price < min.price ? p : min);
    return `Highest: ${highestP.product}. Lowest: ${lowestP.product}.`;
  })(),

  //object transformation
  transformP: products.reduce((acc, {product, price}) => {
    if(fill){
      acc[product] = {
        name: product,
        cost: Number(price)
      };
      return acc;
    }
  })
});
