<template>
  <h1>Albuns</h1>
  <div class="div-album" v-for="(album, index) in list" :key="index">
    <img :src="getAlbumImage(getAlbumId(album.url))" />
    {{album.title}}
  </div>
</template>

<script>
import {
  getAlbumList,
  getAlbumImage,
  getAlbumImageURL
} from "../service/album-service.js";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const list = ref([]);
    onMounted(() => {
      getAlbumList().then(resp => {
        // console.log("resp");
        list.value = resp.results;
      });
    });
    const getAlbumId = url =>
      url
        .replace("https://jsonplaceholder.typicode.com/albums/1/photos/", "")
        .repace("/", "");

    const getAlbumImage = id => getAlbumImageURL(id);

    return { list, getAlbumId, getAlbumImage };
  }
};
</script>

<style>
.div-album {
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
  margin: 0.5rem;
  cursor: pointer;
}
</style>