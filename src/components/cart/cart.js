export default{
    products: [],
    count: 0,
    total: 0,
    add(item){
        // обновление корзины
        this.load()

        this.products.push(item)
        this.count++
        this.total += item.price

        this.save()
    },
    remove(item){
        this.load()
        const index = this.products.map((elem) =>{
            return elem.id
        }).indexOf(item.id)

        this.products.splice(index, 1)
        this.count--
        this.total -= item.price

        this.save()
    },
    load(){
        let data = localStorage.getItem('cart')
        if (data !== null) {
            data = JSON.parse(data)// приводим data к формату JSON
            this.products = data.products
            this.count = data.count
            this.total = data.total
        }
    },
    save(){
        localStorage.setItem('cart', JSON.stringify({
            products: this.products,
            count: this.count,
            total: this.total,
        }))
    }
}