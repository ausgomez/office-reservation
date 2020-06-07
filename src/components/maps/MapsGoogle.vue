<template>
  <gmaps-map>
    <gmaps-marker v-for="(item, i) in items" :key="i" :options="item.options" />
  </gmaps-map>
</template>

<script>
import { gmapsMap, gmapsMarker } from "x5-gmaps";

export default {
  components: { gmapsMap, gmapsMarker },
  data: () => ({
    items: [
      { options: { position: { lat: -27.41, lng: 153.01 } } },
      { options: { position: { lat: -27.42, lng: 153.02 } } },
      { options: { position: { lat: -27.48, lng: 153.08 } } },
      { options: { position: { lat: -27.49, lng: 153.09 } } },
    ],
  }),
};
</script>
