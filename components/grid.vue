<template>
  <div class="product__grid">
    <div v-for="(d, i) in drink" :key="i" v-on:click="setToBag(d)" class="product">
      <div class="product__image">
        <img :src="require(`~/assets/${d.image}`)">
      </div>
      <div class="product__infos">
        <div class="product__infos_l">
          <h3>{{ d.name }}</h3>
          <span>{{ d.category }}</span>
        </div>
        <div class="product__infos_r">
          <span>{{ d.price }}€</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'grid',
  data () {
    return {
      drink: []
    }
  },
  computed: {
    ...mapGetters([
      'getData',
      'getSelectCategory',
      'getPriceRange'
    ])
  },
  watch: {
    getSelectCategory () {
      this.drink = this.getData
    },
    getPriceRange () {
      this.drink = this.getData
    }
  },
  methods: {
    ...mapMutations([
      'setBag'
    ]),
    setToBag (drink) {
      this.setBag(drink)
    }
  },
  created () {
    this.drink = this.getData
  }
}
</script>
<style lang="scss" scoped>
.product__grid {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 30px;

  .product {
    border: 2px solid #232344;
    padding: 10px 0;
    min-width: calc(20% - 4px - 30px);
    max-width: calc(20% - 4px - 30px);
    border-radius: 10px;
    cursor:  pointer;
    .product__image {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;

      img {
        height: 60px;
        filter: invert(28%) sepia(43%) saturate(1022%) hue-rotate(204deg) brightness(88%) contrast(83%);
      }
    }

    .product__infos {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 20px;
      padding: 0 20px;

      h3 {
        margin: 0;
      }

      .product__infos_l {
        span {
          display: block;
          margin-top: 5px;
          color: #494990;
        }
      }

      .product__infos_r {
        span {
          display: block;
          margin-top: 3px;
        }
      }
    }
  }
}

</style>
