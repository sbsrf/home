<template>
    <div class="max-width-wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MaxWidthWrapper',
}
</script>

<style scoped>
.max-width-wrapper {
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
    overflow: hidden;
}
</style>
