<template>
  <div class="shipping__component">
    <div class="shipping__header">
      <h3>Your Drink<span>BAG</span></h3>
      <div class="clear__bag" v-on:click="resetBag()">
        Clear bag
      </div>
      <div class="alert">
        <p>All your ordered glasses will be served at table, don't worry!</p>
      </div>
    </div>
    <div class="product__grid">
      <div v-for="(d, i) in getBag" :key="i" class="product">
        <div class="product__in">
          <div class="product__image">
            <img :src="require(`~/assets/${d.image}`)">
          </div>
          <div class="product__infos">
            <h3>{{ d.name }}</h3>
            <span>{{ d.price }}€</span>
          </div>
        </div>
        <div v-on:click="deleteShippingItem(d)" class="product__controller">
          <font-awesome-icon :icon="['fas', 'times']"  />
        </div>
      </div>
    </div>
    <div class="shipping__bottom">
      <div class="shipping__total">
        <span>Total : </span> {{ calculedTotal.toFixed(2) }}€
      </div>
      <div class="shipping__payment">
        <font-awesome-icon :icon="['fas', 'lock']"  /> Payement
      </div>
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
      'deleteBagItem',
      'resetBag'
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
  overflow-x: hidden;
  .shipping__header {
    h3 {
      margin: 0;
      padding: 20px;
      span {
        color: #4fc08d;
      }
    }
    .alert {
      padding: 0 20px;
      font-size: 12px;
      color: #7a7a7a;
    }
    .clear__bag {
      width: calc(100% - 40px);
      background: #a74239;
      padding: 10px 20px;
      text-align: center;
      cursor: pointer;
    }
  }
  .product__grid {
    height: 80%;
    overflow-y: scroll;
    padding: 0 10px;
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
        padding: 10px 0;
        border-radius: 10px;
        width: 90%;
        display: flex;
        align-items: center;
        h3 {
          font-size: 13px;
          padding: 5px;
          width: 100%;
        }
      }
      .product__controller {
        width:  10%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #d76459;
        cursor: pointer;
        font-size: 18px;
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
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        width: 90%;
        h3 {
          margin: 0;
          width: 80%;
        }
        span {
          display: block;
          width: 20%;
          text-align: right;
        }
      }
    }
  }
  .shipping__bottom {
    position: absolute;
    bottom: 0px;
    width: 100%;
    .shipping__total {
      width: 100%;
      font-weight: bolder;
      display: block;
      margin-right: 10px;
      background: #494990;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      span {
        display: block;
        margin-right: 10px;
        font-weight: normal;
      }
    }
    .shipping__payment {
      text-align: center;
      background: #4fc08d;
      padding: 20px;
    }
  }
}
</style>
