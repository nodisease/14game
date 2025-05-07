<template>
    <div class="zoomable-image" @click="toggleZoom">
        <img :src="src" :alt="alt" :style="{ cursor: 'zoom-in' }" />
        <div v-if="isZoomed" class="zoom-overlay" @click="closeZoom">
            <button class="close-button" @click.stop="closeZoom">×</button>
            <div class="zoom-container" @wheel.prevent="handleWheel">
                <img :src="src" :alt="alt" class="zoomed-image" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: ''
    }
})

const isZoomed = ref(false)
const scale = ref(1)

const toggleZoom = () => {
    if (!isZoomed.value) {
        isZoomed.value = true
        document.body.style.overflow = 'hidden'
        scale.value = 1
    }
}

const closeZoom = () => {
    isZoomed.value = false
    document.body.style.overflow = ''
    scale.value = 1
}

const handleWheel = (e) => {
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    const newScale = Math.max(0.5, Math.min(3, scale.value + delta))
    scale.value = newScale
}
</script>

<style scoped>
.zoomable-image {
    display: inline-block;
}

.zoom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    cursor: zoom-out;
}

.zoom-container {
    position: relative;
    transition: transform 0.1s ease;
    transform-origin: center;
    transform: scale(v-bind(scale));
}

.zoomed-image {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    user-select: none;
    -webkit-user-drag: none;
    cursor: zoom-out;
}

.close-button {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
    z-index: 1001;
}

.close-button:hover {
    background: rgba(255, 255, 255, 0.3);
}
</style>