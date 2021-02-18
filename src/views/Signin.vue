<template>
<div class="container sign-in">
    <h1>Авторизация</h1>
    <div class="my-form col-md-5">
        <form class="login-form" @submit="Signin">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="email">
                <div class="error text-danger">{{errors.email}}</div>
            </div>
            <div class="form-group">
                <label for="password">Пароль</label>
                <input type="password" class="form-control" id="password" v-model="password">
                <div class="error text-danger">{{errors.password}}</div>
            </div>
            <div class="form-group pb-3">
                <button type="submit" class="btn btn-secondary">Войти</button>
            </div>
        </form>
    </div>
</div>
    
</template>

<script>
import User from '@/components/user/user'
export default {
    name: "Signin",
    data() {
        return {
            email: '',
            password: '',
            errors: {}
        }
    },
    methods: {
        Signin(e){
            
            if (this.validate()) {
                console.log(this.email, this.password)
                const result = {
                    name: 'Дмитрий Карамазов',
                    email: 'Kharamazov@ya.ru',
                    accessToken: 'asdkk33434344!#5454'
                }
                User.login(result)
            }
            e.preventDefault()
        },
        validate() {
            this.errors = {}

            if (this.email.trim().length === 0) {
                this.errors.email = 'Заполните Email'
            }
            if (this.password.trim().length === 0) {
                this.errors.password = 'Заполните Пароль'
            }

            return Object.keys(this.errors).length === 0
        }
    }
}
</script>