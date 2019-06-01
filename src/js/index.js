
import axios from 'axios'

async function getResult(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const key = 'ff3b8b3b389cebebb0acb5214f3144de';
  const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
  const recipes = res.data.recipes;
  console.log(recipes);
}
getResult('pho');
