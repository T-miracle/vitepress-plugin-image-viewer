<template>
    <div class="image-viewer" :style="inline ? {display: 'inline-block', margin: 0} : {}">
        <img class="hide-image-element" :src="src" alt="">
        <button @click="showImage">{{ alt }}</button>
    </div>
</template>

<script setup lang="ts">
    import setViewer from './viewer';
    import { onMounted } from 'vue';
    import { useRoute } from 'vitepress';

    const route = useRoute()

    const props = withDefaults(defineProps<{
        alt: string
        src: string
        inline: boolean
    }>(), {
        inline: false
    });

    const showImage = (e: Event) => {
        ((e.target as HTMLElement).previousElementSibling as HTMLElement).click();
    };

    onMounted(() => {
        setViewer(route,'.hide-image-element');
    });
</script>

<style scoped lang="scss">
    .image-viewer {
        margin: 20px 0;

        img {
            display: none;
        }

        button {
            display: block;
            background-color: #ff6348;
            border-radius: 4px;
            padding: 5px 10px;
            margin: 10px 15px;
            color: white;
        }
    }

    .dark {
        .image-viewer > button {
            background-color: #5d240f;
        }
    }
</style>
