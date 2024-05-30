<script setup lang="ts">
import type { Post } from '#wpnuxt/types'
import { useWPPosts } from '#wpnuxt'

const { data } = await useWPPosts()
const posts = (data.value?.posts?.nodes || []) as Post[]
</script>

<template>
    <div class="container my-8">
        <h1 class="mb-8 text-3xl font-semibold text-primary">News</h1>
        <div class="my-8 prose max-w-7xl">
            <section class="container grid gap-4 my-24 md:grid-cols-2">
                <NewsPost 
                    v-for="post, i in posts" 
                    :key="i" 
                    :post="post"
                />
            </section>
        </div>
    </div>
</template>