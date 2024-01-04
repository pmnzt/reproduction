<script setup>
const { data } = await useAsyncData("home", () =>
  queryContent("blog").limit(5).find()
);

console.log(data);
</script>

<template>
  <ContentList path="/blog" v-slot="{ list }">
    <div
      v-for="article in list"
    >
      <h1>{{ article.title }}</h1>
    </div>
  </ContentList>
</template>
