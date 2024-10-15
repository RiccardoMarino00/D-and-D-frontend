<script>
import axios from 'axios';
import CharacterCard from './CharacterCard.vue';

export default {
  components: {
    CharacterCard,
  },
  data() {
    return {
      characters: [],
      currentPage: 1,
      lastPage: null,
    }
  },
  methods: {
    fetchCharacters(currentPage, perPage) {
      axios.get("http://127.0.0.1:8000/api/characters", {
        params: {
          page: currentPage,
          perPage
        }
      })
        .then((response) => {
          this.characters = response.data.characters.data
          this.currentPage = response.data.characters.current_page
          this.lastPage = response.data.characters.last_page
        })
    }
  },
  created() {
    this.fetchCharacters(1, 3);
  }
}

</script>

<template>

  <main>
    <section class="d-flex flex-column justify-content-between align-items-center h-100">
      <div class="container pt-5 flex-grow-1">
        <div class="row h-100">
          <div v-for="character in characters" class="col-4 p-3">
            <CharacterCard :item="character"></CharacterCard>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<style></style>