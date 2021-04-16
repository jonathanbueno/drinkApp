const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

const ENDPOINTS = {
  SEARCH_BY_NAME: BASE_URL + "search.php?s=",
  SEARCH_BY_INGREDIENT: BASE_URL + "search.php?i=",
  SEARCH_RANDOM_DRINK: BASE_URL + "random.php",
  FILTER_BY_CATEGORY: BASE_URL + "filter.php?c=",
  LIST_CATEGORIES: BASE_URL + "list.php?c=list",
  LIST_GLASSES: BASE_URL + "list.php?g=list",
  LIST_INGREDIENTS: BASE_URL + "list.php?i=list",
  LIST_ALCOHOLIC: BASE_URL + "list.php?a=list",
};

export default ENDPOINTS;
