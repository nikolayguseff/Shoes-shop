/**
 * Работа с пользователем.
 */
export default {
    name: null,
    email: null,
    accessToken: null,
    isAuth() {
        let data = localStorage.getItem('user')

        if (data === null) {
            return false
        }

        data = JSON.parse(data)
        this.name = data.name
        this.email = data.email
        this.accessToken = data.accessToken

        return true
        this.load()
        return this.accessToken !== null
    },
    login(data) {
        localStorage.setItem('user', JSON.stringify(data))
        this.name = data.name
        this.email = data.email
        this.accessToken = data.accessToken
        // localStorage.setItem('user', JSON.stringify({
        //     email: this.email,
        //     accessToken: this.accessToken,
        // }))
    },
    logout() {
        localStorage.removeItem('user')
        this.name = null
        this.email = null
        this.accessToken = null
        localStorage.removeItem('user')
    },
    load() {
        let data = localStorage.getItem('user')
        if (data !== null && data !== '') {
            data = JSON.parse(data)
            this.name = data.name
            this.email = data.email
            this.accessToken = data.accessToken
        }
    }
}
