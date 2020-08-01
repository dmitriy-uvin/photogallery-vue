<template>
    <div class="mainpage">
        <Loader v-if="isLoading"/>
        <h1>Main</h1>
    </div>
</template>

<script>
import Loader from "@/components/common/Loader";

export default {
    name: "Main",
    data: () => ({
        isLoading: false
    }),
    components: {
        Loader
    }
}
</script>

<style scoped>

</style>