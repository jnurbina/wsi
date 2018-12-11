<template>
  <section class="home grid-container-y">
    <header>
      <h2 v-html="products.default.id.replace(/\//g, ' > ')" />
    </header>

    <!-- home/shop/new -->
    <section class="shop">
      <section class="product-list grid-container-x">
        <div
          v-for="(product, p) in products.default.groups"
          :key="p"
          class="product-container">
          <div class="product">
            <!-- :style="`background-image: url(`+product.hero.href+`)`" -->
            <img
              class="product__img"
              :src="product.hero.href"
              :alt="product.hero.rel + `image`">
            <div class="product__header">
              <span
                class="subtitle"
                v-html="product.name" />
            </div>
            <div class="product__price">
              <span>${{ p+1 }}.00</span>
            </div>
            <!-- <div class="product__message">
              <span>{{ product.messages[0] }}</span>
            </div> -->
            <div class="product__details">
              <p>Price: ${{ p+1 }}.00</p>
              <p>{{ product.messages[0] }}</p>
              <p>Rank: </p>
              <p>
                <a
                  target="_blank"
                  :href="product.links.www">
                  View Product
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <footer />
  </section>
</template>

<script>
import * as productJSON from '../data/content.json';

/* eslint-disable */
export default {
  name: 'ShopHome',
  props: {
  },
  data() {
    return {
      products: null,
      title: String
    };
  },
  created() {
    this.products = this.getProducts(productJSON);
    this.title = this.products.default.id.replace(/\//, '>');
  },
  methods: {
    getProducts(data) {
      const products = (data);
      console.log('got the products: ', products.default);
      return products;
    },
    formatProducts(unparsed) {
    }
  }
}
</script>
<style lang="scss">
  @import '../styles/_home.scss';
  @import '../styles/_productList.scss';
  @import '../styles/_shop.scss';
</style>

