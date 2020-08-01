<template>
    <div id="app">
        <Navbar />
        <div class="container">

            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";

export default {
    name: 'App',
    components: {
        Navbar
    },
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
