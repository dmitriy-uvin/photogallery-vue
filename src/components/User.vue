<template>
    <div>
        <h1>This is user with id: {{ userId }}</h1>
    </div>
</template>

<script>
export default {
    name: "User",
    data: () => ({

    }),
    computed: {
        userId() {
            return this.$route.params.id;
        }
    }
}
</script>

<style scoped>

</style>