<template>
  <div id="app">
<header>
   <div class="container">
     <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container">
      <router-link style="padding-bottom: 8px" class="navbar-brand" v-bind:to="{name: 'Home'}">ShoeSShop</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item active">
                  <router-link class="nav-link" v-bind:to="{name: 'Catalog'}">Каталог</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" v-bind:to="{name: 'Delivery'}">Доставка и оплата</router-link>
                </li>
                <li class="nav-item">
                   <router-link class="nav-link" v-bind:to="{name: 'Contact'}">Контакты</router-link>
                </li>
                <li class="nav-item">
                   <router-link class="nav-link" v-bind:to="{name: 'Info'}">Информация</router-link>
                </li>
              </ul>
              <ul class="navbar-nav">
                  <li class="nav-item">
                     <CartWidget></CartWidget>
                  </li>
                  <li class="nav-item" v-if="user.isAuth()">
                    <router-link class="nav-link" v-bind:to="{name: 'Profile'}">{{user.email}}</router-link>
                  </li>
                  <li class="nav-item" v-else>
                    <router-link class="nav-link" v-bind:to="{name: 'Signin'}">Войти</router-link>
                  </li>
              </ul>
            </div>
    </div>
  </nav>
   </div>
  
</header>

<main>
  <router-view/>

</main>

 <hr class="featurette-divider">

<footer class="container">
  <p class="float-end"><a href="#">Back to top</a></p>
  <p>&copy; 2021 GusevProject, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
</footer>

  </div>
</template>

<script>
import CartWidget from "@/components/cart/CartWidget";
import User from '@/components/user/user'
export default {
  components: {CartWidget},
  data() {
    return {
      user: User
    }
  }
}
</script>
