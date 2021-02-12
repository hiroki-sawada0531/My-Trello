<template>
    <form class = "addcaed" @submit.prevent = "addCardToList">
        <input v-model = "body"
            type = "text"
            class = "text-input"
            placeholder= "Add new card"
            @focussin= "startEditing"
            @forcusout= "finisiEditing"
            />
    <button type = "submit" class = "add-button">
        Add
    </button>
    </form>
</template>

<script>
export default {

    props: {
        listIndex: {
            type: Number,
            required: true,
        }
    },

    data: function() {
        return {
            body:'',
            isEditing:false,
        }
    },

    computed: {
        classList() {
            const classList = ['addcard']
            if(this.isEditing) {
                classList.push('active')
            }
            return classList
        },
    },

    methods: {
        startEditing:function() {
            this.isEditing = true
        },
        finishEditing: function() {
            this.finishEditing = false
        },

        addCardTolist: function() {
            this.$store.dispatch('addCardTolist', { body: this.body, listIndex: this.listIndex })
            this.body = ''
        }
    }
}
</script>
