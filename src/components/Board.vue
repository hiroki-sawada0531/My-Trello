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
            : cards= "item.cards"
            :listIndex= "index"
        />
      <list-add/>
      </div>
    </main>
  </div>
</template>

<script>
import List from './List'
import ListAdd from './ListAdd'
import { mapState } from 'vuex'

export default {
  components: { ListAdd, List, },
  computed: {
    ...mapState([
      'lists'
    ]),
  },
}
</script>
