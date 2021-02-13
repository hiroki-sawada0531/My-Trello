<template>
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class= "info-line">All: 0 tasks</p>
      <div class="list-index">
        <list v-for= "(item,index) in lists"
            :key= "item.id"
            :title= "item.title"
            :cards= "item.cards"
            :listIndex= "index"
        />
      <listAdd />
      </div>
    </main>
  </div>
</template>

<script>
import List from './List'
import ListAdd from './ListAdd.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ListAdd,
    List,
    },
  computed: {
    ...mapState([
      'lists'
    ]),
  },
}
</script>
