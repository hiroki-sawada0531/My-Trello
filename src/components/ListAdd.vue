<template>
    <form class="addlist" @submit.prevent="addList">
        <input v-module = "title"
            type = "text"
            class = "text-input"
            placeholder = "Add new list"
        >
        <button type="submit" class="add-button">
            Add
        </button>
    </form>
</template>

<script>
</script>