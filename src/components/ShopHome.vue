<template>
  <section class="home grid-container-y">
    <header>
      <h2 v-html="title" />
    </header>

    <!-- home/shop/new -->
    <section class="shop">
      <section class="product-list grid-container-x">
        <Modal
          v-if="showModal"
          @close="showModal = false">
          <Carousel
            slot="body"
            :modaldata="modaldata" />
        </Modal>
        <div
          class="product-container"
          v-for="(product, p) in products.default.groups"
          :key="p">
          <div
            class="product"
            @mouseover="showFirstThumb = p"
            @mouseout="showFirstThumb = null"
            :refs="p">
            <!-- <img
              v-show="showFirstThumb === p"
              class="product__img--thumb"
              @click="popModal(product.images)"
              :src="product.images[0].href"> -->
            <img
              class="product__img"
              @click="popModal(product.images)"
              :src="showFirstThumb === p ? product.images[0].href : product.hero.href"
              :alt="product.hero.rel + `image`">
            <div class="product__header">
              <span
                class="subtitle"
                v-html="product.name" />
            </div>
            <div class="product__price">
              <span>$ {{ product.priceRange.selling.low }} - {{ product.priceRange.selling.high }}</span>
            </div>
            <div class="product__details">
              <p>
                <a
                  target="_blank"
                  :href="product.links.www">
                  Quicklook
                </a>
              </p>
              <p v-html="product.name" />
              <p>{{ product.messages[0] }}</p>
              <p>$ {{ product.priceRange.selling.low }} - {{ product.priceRange.selling.high }}</p>
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
import Modal from './shared/Modal';
import Carousel from './shared/Carousel';

export default {
  name: 'ShopHome',
  components: {
    Modal,
    Carousel
  },
  data() {
    return {
      products: null,
      title: String,
      showModal: false,
      showFirstThumb: null,
      modaldata: []
    };
  },
  created() {
    this.products = this.getProducts(productJSON);
    this.title = this.products.default.id.replace(/\//g, ' > ');
  },
  methods: {
    getProducts(data) {
      const products = (data);
      return products;
    },
    formatData(data) {
      let urls = [];
      for (let i = 0; i < data.length; i++) {
        const el = data[i];
        if (el.href) {
          urls.push(el.href)
        }
      }
      return urls;
    },
    popModal(imgs) {
      const urls = this.formatData(imgs);
      this.modaldata = urls;
      this.showModal = true;
    }
  }
}
</script>
<style lang="scss">
  @import '../styles/_home.scss';
  @import '../styles/_productList.scss';
  @import '../styles/_shop.scss';
</style>

