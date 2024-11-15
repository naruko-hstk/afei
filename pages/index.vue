<template>
  <div>
    <UButton label="Show toast" @click="toast.add({ title: 'Hello world!' })" />
  </div>
</template>

<script lang="ts" setup>
const toast = useToast()
</script>

<style></style>
