import Search from './models/Search';

/**
 * Golobal state of the app
 * Search object
 * Current recipe object
 * Shopping list object
 * Liked recipes
 */
const state = {};

const controlSearch = async () => {
  // 1) Get query from view
  const query = 'pizza';

  if (query) {
    // 2) New Search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for results

    // 4) Search for recipes
    await state.search.getResult();

    // 5) Render results on UI
    console.log(state.search.result);

    console.log('Spam');
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
