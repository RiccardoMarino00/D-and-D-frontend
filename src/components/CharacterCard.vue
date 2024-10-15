<script>

export default {
  components: {
  },
  data() {
    return {
      hover: false
    }
  },
  props: {
    item: Object
  }
}

</script>

<template>

  <div class="card h-100">

    <div class="card-header text-center">
      <h3 class="fs-5">{{ item.name }}</h3>
    </div>

    <div class="card-body text-center"
      :style="{ backgroundImage: 'url(https://i0.wp.com/nerdarchy.com/wp-content/uploads/2021/06/the-undead-warlock-5E-DD-van-richtens-guide-to-ravenloft.png?fit=800%2C1470&ssl=1)' }"
      @mouseover="hover = true" @mouseleave="hover = false">
      <div class="my-overlay" :class="hover === true ? 'my-active' : ''">
        <div>
          <ul class="list-unstyled">
            <li>{{ item.type.name }}</li>
            <li>{{ item.life }} <font-awesome-icon :icon="['fas', 'heart']" /></li>
            <li>{{ item.attack }} <font-awesome-icon :icon="['fas', 'hand-fist']" /></li>
            <li>{{ item.defence }} <font-awesome-icon :icon="['fas', 'shield']" /></li>
            <li>{{ item.speed }} <font-awesome-icon :icon="['fas', 'bolt']" /></li>
          </ul>
        </div>
        <p class="position-absolute bottom-0">{{ item.description }}</p>
      </div>
    </div>


    <div class="card-footer">
      <div class="row">
        <div class="col-auto">
          <span>{{ item.id }}</span>
        </div>
        <div class="col-auto">
          <span v-for="weapon in item.weapons" class="badge me-1 text-bg-danger">{{
            weapon.name }}</span>
        </div>
      </div>
    </div>

  </div>




</template>

<style scoped>
.card-body {
  background-size: cover;
  background-position: top center;
  padding: 0 !important;
  position: relative;
}

.my-overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.my-active {
  opacity: 1;
}
</style>