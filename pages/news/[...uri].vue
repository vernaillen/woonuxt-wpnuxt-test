<script setup lang="ts">
import { useWPPostByUri, useFeaturedImage } from '#imports'
import type { Post } from '#wpnuxt/types'

const route = useRoute();
const uri = route.params.uri

const { data } = await useWPPostByUri({ uri: uri[0] })
const post = data.value?.nodeByUri as Post
if (post?.title) {
    useHead({
        title: post.title
    })
}
const featuredImage = useFeaturedImage(post)
</script>

<template>
    <div class="container my-8">
        <div v-if="post" class="pt-10 prose max-w-7xl">
            <img
                v-if="featuredImage" 
                :src="featuredImage" 
                class="object-cover rounded-xl w-24 imgTransition"
                height="200px"
            />
            <h1 class="text-4xl">{{ post.title }}</h1>
            <div class="mt-5 postContent">
                <BlockRenderer v-if="post.editorBlocks" :blocks="post.editorBlocks"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.post h1 {
    view-transition-name: post;
}
.post img.imgTransition {
    view-transition-name: featured-image;
}

</style>
