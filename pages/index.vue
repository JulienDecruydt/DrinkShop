<template>
  <main>
    <header>
      <div class="logo">
        <span class="nuxt">Nuxt</span>drink Shop
        <span class="responsive">(not responsive)</span>
      </div>
      <div class="shoppping__card">
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 100 125" x="0px" y="0px"><path d="M95.39,20.42a10.5,10.5,0,0,1,1.67,9.32L88.33,59.23A10.54,10.54,0,0,1,78.21,66.8H37.11A10.56,10.56,0,0,1,27,59.17L14.62,16.44a4.08,4.08,0,0,0-3.9-2.93h-5a3.25,3.25,0,0,1,0-6.5h5a10.56,10.56,0,0,1,10.14,7.63L33.21,57.36a4.08,4.08,0,0,0,3.9,2.94h41.1a4.08,4.08,0,0,0,3.89-2.91l8.73-29.5a4.06,4.06,0,0,0-3.9-5.21l-51.7,0a3.25,3.25,0,0,1,0-6.5h0l51.69,0A10.47,10.47,0,0,1,95.39,20.42ZM65.85,82.59A10.4,10.4,0,1,1,76.25,93,10.42,10.42,0,0,1,65.85,82.59Zm6.5,0a3.9,3.9,0,1,0,3.9-3.9A3.91,3.91,0,0,0,72.35,82.59ZM38.24,93a10.4,10.4,0,1,1,10.39-10.4A10.42,10.42,0,0,1,38.24,93Zm0-6.5a3.9,3.9,0,1,0-3.9-3.9A3.91,3.91,0,0,0,38.24,86.49Z"/></svg>
        <div class="number__card" v-if="getBag.length > 0">
          {{ getBag.length }}
        </div>
      </div>
    </header>
    <section class="shop">
      <div class="filter">
        <filtering />
      </div>
      <div class="grid">
        <grid v-if="getData.length > 0" />
        <div class="no__data" v-else>
          Sorry, no product available with your criteria !
        </div>
      </div>
      <div :class="getBag.length > 0 ? '--isActive' : ''" class="shipping__bag">
        <shippingBag />
      </div>
    </section>
  </main>
</template>
<script>
import { mapGetters } from 'vuex'
import grid from '../components/grid.vue'
import filtering from '../components/filtering.vue'
import shippingBag from '../components/shippingBag.vue'
export default {
  components: {
    grid,
    filtering,
    shippingBag
  },
  computed: {
    ...mapGetters([
      'getBag',
      'getData'
    ])
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;600;700&display=swap');
body {
  background: #1A1A33;
  color: white;
  font-family: 'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
header {
  background: #232344;
  width: calc(100% - 40px);
  height: 60px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  .logo {
    width: 100%;
    font-size: 20px;
    font-weight: bolder;
    .nuxt {
      color: #4fc08d;
    }
    .responsive {
      font-size: 10px;
      color: #3e3e3e;
      font-style: italic;
    }
  }
  .shoppping__card {
    position: relative;
    display: flex;
    align-items: center;
    svg {
      height: 40px;
      fill: white;
      margin-top: 10px;
    }
    .number__card {
      position: absolute;
      bottom: 0;
      right: -10px;
      padding: 2px 8px;
      border-radius: 50%;
      background: #4fc08d;
    }
  }
}
.no__data {
  text-align: center;
  font-size: 26px;
}
.shop {
  display: flex;
  align-items: flex-start;
  .filter {
    min-width: 12%;
    padding: 2% 1%;
  }
  .grid {
    width: 100%;
    padding: 2% 1%;
    transition: all 0.3s ease;
  }
  .shipping__bag {
    width: 0%;
    height: calc(100vh - 70px);
    overflow-x: scroll;
    transition: all 0.3s ease;
    &.--isActive {
      width: 20%;
      overflow-x: hidden;
      overflow-y: hidden;
    }
  }
}
</style>
