import axios from 'axios'

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResult() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'ff3b8b3b389cebebb0acb5214f3144de';
    const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
    this.result = res.data.recipes;
  }
}
