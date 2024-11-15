<template>
  <NuxtLayout :name="layout"><NuxtPage /></NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const layout = route.path.startsWith("dashboard", 1) ? "dashboard" : "default"
</script>
