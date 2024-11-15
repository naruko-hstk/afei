import { AppHeader, UContainer, AppFooter } from '../.nuxt/components';
<template>
  <div>
    <AppHeader />
    <UContainer>
      <main>
        <slot />
      </main>
    </UContainer>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
