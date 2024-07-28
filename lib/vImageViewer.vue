<template>
    <div class="image-viewer" :style="inline ? {display: 'inline-block', margin: 0} : {}">
        <img class="hide-image-element" :src="src" alt="">
        <button @click.stop="showImage">{{ alt }}</button>
    </div>
</template>

<script setup lang="ts">
    import 'viewerjs/dist/viewer.min.css'

    withDefaults(defineProps<{
        alt: string
        src: string
        inline?: boolean
    }>(), {
        inline: false
    });

    const showImage = (e: Event) => {
        ((e.target as HTMLElement).previousElementSibling as HTMLElement).click();
    };
</script>

<style scoped lang="css">
    .image-viewer {
        margin: 20px 0;
    }

    .image-viewer img {
        display: none;
    }

    .image-viewer button {
        display: block;
        background-color: #ff6348;
        border-radius: 4px;
        padding: 5px 10px;
        margin: 10px 15px;
        color: white;
    }

    .dark .image-viewer > button {
        background-color: #5d240f;
    }
</style>
