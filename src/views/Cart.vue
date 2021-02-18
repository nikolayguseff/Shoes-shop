<template>
    <div class="container cart-page">
        <h1>Наши товары</h1>
        <div class="cart-empty" v-if="cart.total === 0">
            Корзина пуста
        </div>
        <div class="cart-table" v-if="cart.total > 0">
             <table class="table table-bordered">
            <thead>
                <th>Товар</th>
                <th>Стоимость</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="product in cart.products">
                    <td width="150">
                        <img class="cart-image" v-bind:src="product.image">
                        <br>
                        {{product.name}}
                    </td>
                    <td>{{product.price}} ₽</td>
                    <td>
                        <button class="btn btn-danger btn-sm" v-on:click="remove(product)">Удалить</button>
                    </td>
                </tr>
                <tr>
                    <td><b>Итого</b></td>
                    <td colspan="2"><b>{{cart.total}} ₽</b></td>
                </tr>
            </tbody>
        </table>
        </div>
       
    </div>
</template>

<script>
    import CartData from '@/components/cart/cart'
    export default {
        name: "Cart",
        data() {
            return {
                cart: CartData
            }
        },
        methods: {
            remove(item) {
                this.cart.remove(item)
            }
        }
    }
</script>