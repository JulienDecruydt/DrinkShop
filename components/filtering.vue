<template>
  <div class="filter__block">
    <div class="filter__in">
      <div class="filter__price">
        <h3>Price</h3>
        <vue-range-slider max="20" v-model="value"></vue-range-slider>
      </div>
      <div class="filter__category">
        <h3>Category</h3>
        <div class="category__list">
          <div v-for="(c, index) in getCategory" :key="index" class="category">
            <label class="checkbox_rounded">
              <input @change="changeValue(c)" :value="c" type="checkbox">
              <div class="checkbox_hover"></div>
            </label>
            <span>{{ c }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      selectCategory: [],
      value: [0, 20]
    }
  },
  computed: {
    ...mapGetters([
      'getCategory'
    ])
  },
  watch: {
    selectCategory () {
      this.setSelectCategory(this.selectCategory)
    },
    value () {
      this.setPriceRange(this.value)
    }
  },
  methods: {
    ...mapMutations([
      'setSelectCategory',
      'setPriceRange'
    ]),
    changeValue (c) {
      this.setSelectCategory(c)
    }
  }
}
</script>
<style lang="scss" scoped>
.filter__block {
  background: #232344;
  border-radius: 5px;
  .filter__in {
    padding: 20px;
    .filter__price {
      h3 {
        margin-top: 0;
        margin-bottom: 45px;
      }
    }
    .filter__category {
      .category__list {
        margin-left: 5px;
        .category {
          display: flex;
          align-items: center;
          margin: 10px 0;
          span {
            display: block;
            margin-left: 15px;
            text-transform: uppercase;
          }
        }
      }
    }
  }
  .checkbox_rounded {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    input {
      opacity: 1;
      &:checked + .checkbox_hover {
         box-shadow: inset 0 0 0 15px #393073;
      }
    }
    .checkbox_hover {
      position: absolute;
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 50%;
      border: 3px solid white;
    }
  }
}
</style>

<style lang="scss">
  .vue-range-slider.slider-component .slider .slider-process {
    background: white !important;
  }
  .vue-range-slider.slider-component .slider-tooltip-wrap .slider-tooltip {
    border: #7d7dbf !important;
    background-color: #7d7dbf !important;
  }
</style>
