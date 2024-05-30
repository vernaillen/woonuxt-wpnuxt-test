<script setup lang="ts">
import type { Post } from '#wpnuxt/types'

const props = defineProps<{
    post: Post
}>();
const featuredImage = useFeaturedImage(props.post)
</script>

<template>
    <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
        <img v-if="featuredImage" :src="featuredImage" width="60" height="60" loading="lazy" />
        <NuxtLink :to="post.uri" class="no-underline">
            <h3 class="text-xl font-semibold">{{ post.title }}</h3>
            <p class="text-sm" v-html="post.excerpt" />
        </NuxtLink>
    </div>
</template>