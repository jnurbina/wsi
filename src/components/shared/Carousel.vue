<template>
  <div class="carousel-view">
    <TransitionGroup
      v-if="modaldata.length > 0"
      class="carousel"
      tag="div">
      <div
        v-for="(url, u) in carouselOrder"
        class="slide"
        :key="u">
        <img :src="url">
      </div>
    </TransitionGroup>
    <div class="carousel-controls">
      <button
        class="carousel-controls__button"
        @click="previous">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="icon"
          data-icon="chevron-left"
          data-prefix="fas"
          role="img"
          viewBox="0 0 320 512">
          <path
            fill="currentColor"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
        </svg>
      </button>
      <button
        class="carousel-controls__button"
        @click="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="icon"
          data-icon="chevron-right"
          data-prefix="fas"
          role="img"
          viewBox="0 0 320 512">
          <path
            fill="currentColor"
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modaldata: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data() {
    return {
      carouselOrder: []
    }
  },
  mounted() {
    if (this.modaldata.length <= 2) {
      this.modaldata.push(this.modaldata[0]);
      this.modaldata.sort();
    }
    this.carouselOrder = this.modaldata;
  },
  methods: {
    next() {
      if (this.carouselOrder[1] === this.carouselOrder[2]) {
        this.carouselOrder.splice(1, 1, this.carouselOrder[0]);
      } else {
        const first = this.carouselOrder.shift();
        this.carouselOrder = this.carouselOrder.concat([first]);
      }
    },
    previous() {
      if (this.carouselOrder[1] === this.carouselOrder[0]) {
        this.carouselOrder.splice(1, 1, this.carouselOrder[2]);
      } else {
        const last = this.carouselOrder.pop();
        this.carouselOrder = [last].concat(this.carouselOrder);
      }
    }
  }
}
</script>
<style lang="scss">
  @import '../../styles/carousel.scss';
</style>
