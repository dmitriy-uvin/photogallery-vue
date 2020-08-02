<template>
    <div class="loader-block">
        <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Loader"
}
</script>

<style scoped>
.loader-block {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
    z-index: 99;
}
.loader-block > div {
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>