<template>
    <div>
        <h1>
            This is album with id: {{ albumId }}
        </h1>
    </div>
</template>

<script>
export default {
    name: "Album",
    data: () => ({

    }),
    computed: {
        albumId() {
            return this.$route.params.id;
        }
    }
}
</script>

<style scoped>

</style>