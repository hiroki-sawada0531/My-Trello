import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    lists: savedLists? JSON.parse(savedLists):[
      {
        title:'Backlog',
        cards:[
          {body:'English'},
          {bidy:'Mathematics'},
        ]
      },
      {
        title:'Todo',
        cards: [
          {body:'Science'}
        ]
      },
      {
        title:'Backlog',
        cards:[]
      }
    ],
  },

  mutations:{
    addlist(state, payload) {
      state.lists.push({title:payload.title,cards:[]})
    },
    removelist(state,payload) {
      state.lists.splice(payload.listindex,1)
    },

    addCardToList(state, payload) {
      state.lists[payload.listindex].cards.push({ body:payload.body})
    },
    removeCardFromList(context,payload) {
      context.commit('removeCardFromList', payload)
    },
  },
  actions:{
    addlist(context, payload){
      context.commit('addlist', payload)
    },

    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    addCardToList(context,payload) {
      context.commit('addCardToList', payload)
    },
  },
  getters:{
  },
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
  })

export default store

// export default new Vuex.Store({
//   state: {
//     lists:[],
//   },
//   mutations: {
//   },
//   actions: {
//     addlist(context,payload) {
//       context.commit('addlist', payload)
//     },
//   },
//   getters: {
//   }
// })
