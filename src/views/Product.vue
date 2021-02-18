<template>
    <div class="container product">
        <h1>{{product.name}}</h1>
        <p>
            <img style="max-width: 400px height: 800" v-bind:src="product.image">
        </p>
        <!-- <p>URL: {{product.url}}</p> -->
    </div>
</template>

<script>

export default {
    name: "Product",
    data() {
        return {
            product: {}
        }
    },
    created() {
        const url = this.$route.params.url
        const name = this.$route.params.name
        const image = this.$route.params.img
        const result = {
                    id: 1,
                    url: url,
                    name: name,
                    image: image,
                    // price: 88000
        }

        this.product = result
    }
}
</script>