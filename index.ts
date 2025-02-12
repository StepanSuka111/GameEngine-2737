```typescript
// Basic Data Processing in TypeScript

// 1. Data Interface
interface Data {
  id: number;
  name: string;
  age: number;
  email: string;
}

// 2. Sample Data
let data: Data[] = [
  { id: 1, name: 'John', age: 25, email: 'john@example.com' },
  { id: 2, name: 'Jane', age: 30, email: 'jane@example.com' },
  { id: 3, name: 'Doe', age: 35, email: 'doe@example.com' },
  // ... add as many data as you want
];

// 3. Data Processing

// Filter data
let filteredData = data.filter(item => item.age > 25);
console.log('Filtered Data: ', filteredData);

// Sort data
let sortedData = data.sort((a, b) => a.age - b.age);
console.log('Sorted Data: ', sortedData);

// Find data
let foundData = data.find(item => item.id === 2);
console.log('Found Data: ', foundData);

// Reduce data
let totalAge = data.reduce((total, item) => total + item.age, 0);
console.log('Total Age: ', totalAge);

// Map data
let mappedData = data.map(item => ({...item, age: item.age + 1}));
console.log('Mapped Data: ', mappedData);

// 4. Advanced Data Processing

// Group data by age
let groupedData = data.reduce((groups, item) => {
  let key = item.age;
  if(!groups[key]) {
    groups[key] = [];
  }
  groups[key].push(item);
  return groups;
}, {});
console.log('Grouped Data: ', groupedData);

// Count data by age
let countData = data.reduce((counts, item) => {
  let key = item.age;
  if(!counts[key]) {
    counts[key] = 0;
  }
  counts[key]++;
  return counts;
}, {});
console.log('Count Data: ', countData);

// Sum data by age
let sumData = data.reduce((sums, item) => {
  let key = item.age;
  if(!sums[key]) {
    sums[key] = 0;
  }
  sums[key] += item.age;
  return sums;
}, {});
console.log('Sum Data: ', sumData);

// Average data by age
let avgData = data.reduce((avgs, item) => {
  let key = item.age;
  if(!avgs[key]) {
    avgs[key] = { sum: 0, count: 0 };
  }
  avgs[key].sum += item.age;
  avgs[key].count++;
  return avgs;
}, {}); 
avgData = Object.keys(avgData).reduce((avgs, key) => {
  avgs[key] = avgData[key].sum / avgData[key].count;
  return avgs;
}, {});
console.log('Average Data: ', avgData);
```
Цей код забезпечує базову обробку даних за допомогою вбудованих методів масиву JavaScript. Ми використовуємо ці методи для фільтрації, сортування, пошуку, зменшення, відображення, групування, підрахунку, суми та обрахунку середнього значення даних.