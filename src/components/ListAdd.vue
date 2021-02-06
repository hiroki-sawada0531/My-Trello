<template>
    <form class="addlist" @submit.prevent="addList">
        <input v-model="title"
            type="text"
            class="text-input"
            placeholder="Add new list"
            @focusin="startEditing"
            @focusout="finishEditing"
        >
        <button type="submit" class="add-button">
        Add
        </button>
    </form>
</template>

<script>
export default {
    data: function() {
        return {
        title:'',
        isEditing: false,
        }
    },

    methods: {
    addList:function() {
        this.$store.dispatch('addlist',{title: this.title})
        this.title=''
    },

    startEditing() {
        this.isEditing = true
    },
    finishEditing() {
        this.isEditing = false
    },
}

}
</script>

