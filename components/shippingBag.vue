<template>
  <div class="shipping__component">
    <h3>Shipping bag</h3>
    <div class="product__grid">
      <div v-for="(d, i) in getBag" :key="i" class="product">
        <div class="product__in">
          <div class="product__image">
            <img :src="require(`~/assets/${d.image}`)">
          </div>
          <div class="product__infos">
            <div class="product__infos_l">
              <h3>{{ d.name }}</h3>
            </div>
            <div class="product__infos_r">
              <span>{{ d.price }}€</span>
            </div>
          </div>
        </div>
        <div v-on:click="deleteShippingItem(d)" class="product__controller">
          X
        </div>
      </div>
    </div>
    <div class="shipping__bottom">
      <span>Total : </span> {{ calculedTotal.toFixed(2) }}€
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getBag'
    ]),
    calculedTotal () {
      let totalPrice = 0
      this.getBag.forEach(function (x) {
        totalPrice = totalPrice + x.price
      })
      return totalPrice
    }
  },
  methods: {
    ...mapMutations([
      'deleteBagItem'
    ]),
    deleteShippingItem (item) {
      this.deleteBagItem(item)
    }
  }
}
</script>
<style lang="scss" scoped>
.shipping__component {
  position: relative;
  background: #292951;
  height: 100%;
  overflow-y: hidden;
  .shipping__bottom {
    position: absolute;
    bottom: 0px;
    height: 100px;
    width: 100%;
    padding: 0 20px;
    background: #494990;
    display: flex;
    align-items: center;
    span {
      font-weight: bolder;
      display: block;
      margin-right: 10px;
    }
  }
  h3 {
    margin: 0;
    padding: 20px;
  }
  .product__grid {
    margin-top: 25px;
    height: 75%;
    overflow-y: scroll;
    padding: 0 20px;
    &::-webkit-scrollbar{
      width: 4px;
      height: 4px;
    }
    &::-webkit-scrollbar-thumb{
      background: #858585;
      border-radius: 30px;
    }
    &::-webkit-scrollbar-thumb:hover{
      background: #B3AFB3;
    }
    &::-webkit-scrollbar-track{
      background: #F0F0F0;
      border-radius: 0px;
      box-shadow: inset 0px 0px 0px 0px #F0F0F0;
    }
    .product {
      display: flex;
      align-items: center;
      margin: 5px 0;
      .product__in {
        border: 2px solid #232344;
        padding: 10px 0;
        border-radius: 10px;
        width: 90%;
        display: flex;
        align-items: center;
        h3 {
          font-size: 13px;
          padding: 5px;
        }
      }
      .product__controller {
        width:  10%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #B01000;
        cursor:  pointer;
      }
      .product__image {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;

        img {
          height: 30px;
          filter: invert(28%) sepia(43%) saturate(1022%) hue-rotate(204deg) brightness(88%) contrast(83%);
        }
      }

      .product__infos {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        padding: 0 10px;

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
}
</style>
