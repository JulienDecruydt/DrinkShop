/* eslint-disable */
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      bag: [],
      selectCategory: [],
      priceRange: [0, 20],
      data: [
          {
              "id": 0,
              "image": "beer.svg",
              "name": "DrinkBeer",
              "category": "beer",
              "price": 6.0
          },
          {
              "id": 1,
              "image": "wine.svg",
              "name": "St Gustave",
              "category": "wine",
              "price": 12.0
          },
          {
              "id": 2,
              "image": "juice.svg",
              "name": "Apple Juice",
              "category": "juice",
              "price": 3.50
          },
          {
              "id": 3,
              "image": "soda.svg",
              "name": "Cola Cola",
              "category": "soda",
              "price": 4.0
          },
          {
              "id": 4,
              "image": "beer.svg",
              "name": "Fresh can",
              "category": "beer",
              "price": 6.0
          },
          {
              "id": 5,
              "image": "cocktail.svg",
              "name": "Madison",
              "category": "cocktail",
              "price": 7.70
          },
          {
              "id": 6,
              "image": "juice.svg",
              "name": "Tomato Juice",
              "category": "juice",
              "price": 2.50
          },
          {
              "id": 7,
              "image": "cold-drink.svg",
              "name": "Whisky",
              "category": "cocktail",
              "price": 7.70
          },
          {
              "id": 8,
              "image": "soda.svg",
              "name": "Fanda",
              "category": "soda",
              "price": 4.0
          },
          {
              "id": 9,
              "image": "wine.svg",
              "name": "White wine",
              "category": "wine",
              "price": 11.0
          },
          {
              "id": 10,
              "image": "cocktail.svg",
              "name": "Mojito",
              "category": "cocktail",
              "price": 6.50
          }
      ]
    },
    mutations: {
      setSelectCategory: (state, vals) => {
        if(state.selectCategory.includes(vals) === true) {
          state.selectCategory.splice(state.selectCategory.indexOf(vals), 1)
          return state.selectCategory
        }
        state.selectCategory.push(vals)
      },
      setPriceRange: (state, vals) => {
        state.priceRange = vals
      },
      setBag: (state, vals) => {
        state.bag.push(vals)
      },
      deleteBagItem: (state, vals) => {
        state.bag.splice(state.bag.indexOf(vals), 1)
      },
      resetBag: (state, vals) => {
        state.bag = []
      }
    },
    getters: {
      getBag: (state) => {
        return state.bag
      },
      getData: (state) => {
        let filterByPrice = state.data.filter(function (x) {
          return x.price >= state.priceRange[0] && x.price <= state.priceRange[1]
        })
        if(state.selectCategory.length === 0) {
          return filterByPrice
        }
        let filterByCategory = filterByPrice.filter(function (x) {
          return state.selectCategory.includes(x.category) === true
        })
        return [...new Set([...filterByCategory])]
      },
      getSelectCategory: (state, vals) => {
        return state.selectCategory
      },
      getPriceRange: (state) => {
        return state.priceRange
      },
      getCategory : (state) => {
        // get by axios
        var category = [];
        state.data.map(x => {
          if (category.indexOf(x.category) == -1) category.push(x.category)
        })
        return category       
      }
    }
  })
}

export default createStore
