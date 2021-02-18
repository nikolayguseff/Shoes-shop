<template>
<div class="container catalog">
    <h1>Каталог товаров</h1>
    <ProductList></ProductList>
</div>
    
</template>

<script>
import ProductList from '../components/products/ProductList.vue'
    export default {
        components: { ProductList },
        name: "Catalog"
    }
</script>