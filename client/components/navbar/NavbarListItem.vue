<script setup lang="ts">
import type { Route } from "~/shared/types/common/Route";

defineProps<Route>();
</script>

<template>
  <li class="text-main">
    <nuxt-link
      :to="path"
      class="text-light text-decor-none"
      active-class="text-blue"
    >
      {{ name }}
    </nuxt-link>
  </li>
</template>
