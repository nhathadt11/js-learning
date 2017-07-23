// Chaining prommise

const raw = ['Swiss cheese', 'Oyster', 'Apple', 'Sushi', 'Octopus', 'Pine nuts'];

const taskFirst = () => {
  console.log('Requesting some food from https://some-refridge.com...');
  const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      const random = Math.floor(Math.random() * 10 / 3);
      const result = {data: raw[random]};
      console.log('Received: ' + result.data);
      resolve(result);
    }, 2000);
  });

  return promise;
}

const taskSecond = (passed) => {
  console.log('Boiling ' + passed.data + '...');
  const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      const result = {data: passed.data + ' with salt'};
      console.log('Received: ' + result.data);
      resolve(result);
    }, 2000);
  });
  
  return promise;
}

const taskThird = (passed) => {
  console.log('Baking ' + passed.data + '...');
  const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      const result = {data: passed.data + ' with sugar'};
      console.log('Received: ' + result.data);
      resolve(result);
    }, 2000);
  });
  
  return promise;
}

taskFirst()
  .then(taskSecond)
  .then(taskThird)
  .then((result) => console.log('Yay! We\'ve just got '
      + (/[euioa]/i.test(result.data.charAt(0)) ? 'an ' : 'a ')
      + result.data));
