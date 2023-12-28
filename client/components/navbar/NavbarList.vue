<script setup lang="ts">
import { navbarRoutes } from "~/routes/navbar-routes.";
</script>

<template>
  <ul class="flex ai-center gap-40 list-style-none">
    <navbar-list-item
      v-for="(route, i) of navbarRoutes"
      :key="i"
      :name="route.name"
      :path="route.path"
    />
  </ul>
</template>
