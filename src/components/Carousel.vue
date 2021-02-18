<template>
      <b-carousel
      :interval="4000"
      controls
      indicators>
    <b-carousel-slide
        img-src="https://e-news.su/uploads/posts/2018-12/1545575664_e-news.su_340599ab.jpg"
    ></b-carousel-slide>
     <b-carousel-slide
        img-src="https://images.wallpaperscraft.ru/image/nogi_krossovki_luzha_156325_3840x2400.jpg"
    ></b-carousel-slide>
  </b-carousel> 
</template>

<script>
export default {
    name: "Carousel"
}
</script>