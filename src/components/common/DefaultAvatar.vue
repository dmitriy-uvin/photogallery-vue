<template>
    <div>
        <div class="avatar-bg">
            <span>{{ name[0] }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "DefaultAvatar",
    props: {
        name: {
            required: true
        }
    }
}
</script>

<style scoped>
.avatar-bg {
    width: 100px;
    height: 100px;
    background: orange;
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    margin: 0 auto;
}
.avatar-bg span {
    position: relative;
    top: 20%;
    text-align: center;
    font-size: 45px;
}
</style>