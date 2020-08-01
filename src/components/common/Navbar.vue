<template>
    <div>
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">Photogallery</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><router-link to="/">Main</router-link></li>
                    <li><router-link to="/users">Users</router-link></li>
                    <li><router-link to="/albums">Albums</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>

</style>