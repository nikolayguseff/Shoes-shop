<template>
  <div class="home">
    <Carousel></Carousel>
    <div class="container marketing">
      <div class="row">
        <div class="col-lg-4" v-for="item in items">
          <Product v-bind:product="item"></Product>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </div>
</template>

<script>
import Carousel from "@/components/Carousel"
import Product from "@/components/products/Product"
export default{
  name: 'Home',
  components: {Product, Carousel},
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'adidas Breaknet',
          image: 'https://cdn1.ozone.ru/s3/multimedia-a/wc1200/6032052322.jpg',
          price: 3999
        },
        {
          id: 2,
          name: 'Asics GEL-ROCKET 9',
          image: 'https://cdn1.ozone.ru/s3/multimedia-a/wc1200/6017781490.jpg',
          price: 7909
        },
        {
          id: 3,
          name: 'Reebok Royal Techque T',
          image: 'https://cdn1.ozone.ru/s3/multimedia-s/wc1200/6021866932.jpg',
          price: 4399
        }
      ]
    }
  }
}
</script>
