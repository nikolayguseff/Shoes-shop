<template>
    <div class="row">
        <div class="col-md-3">
            <div class="filter">
                <h5>Гендер, возраст</h5>
                <ul class="list-unstyled">
                    <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="customRadio1">{{filter.subspecies[0]}}</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="customRadio2">{{filter.subspecies[1]}}</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                        <label class="custom-control-label" for="customRadio3">{{filter.subspecies[2]}}</label>
                    </div>
                </ul>
                <hr>
            </div>
            <div class="filter">
                <h5>Бренд</h5>
                <ul class="list-unstyled">
                    <li v-for="company in filter.companies">
                        <label>
                            <input type="checkbox"> {{company}}
                        </label>
                    </li>
                </ul>
                <hr>
            </div>
            <div class="filter">
                <h5>Размер</h5>
                <ul class="list-unstyled">
                     <li v-for="size in filter.sizes">
                        <label>
                            <input type="checkbox"> {{size}}
                        </label>
                    </li>
                </ul>
                <hr>
            </div>
            <div class="filter">
                <h5>Стоимость</h5>
                <div class="d-flex">
                    <input type="number" class="form-control" placeholder="от">
                    <input type="number" class="form-control" placeholder="до">
                </div>
                <hr>
            </div>
        </div>
        <div class="col-md-9">
            <div class="row">
                <div class="col-lg-4" v-for="item in items">
                <Product v-bind:product="item"></Product>
            </div><!-- /.col-lg-4 -->
            </div>
        </div>
    </div>
</template>

<script>
    import Product from "@/components/products/Product";

    export default {
        name: "ProductList",
        components: {Product},
        data() {
            return {
                filter: {
                    companies: ['Adidas', 'Asics', 'Reebok', 'Nike', 'Puma'],
                    sizes: [38, 39, 40, 41, 41.5, 42, 43, 43.5, 44, 45],
                    subspecies: ['Мужская', 'Женская', 'Детская']
                },
                 items: [
                    {
                    id: 1,
                    name: 'Adidas Breaknet',
                    url: 'adidas-breaknet',
                    image: 'https://cdn1.ozone.ru/s3/multimedia-a/wc1200/6032052322.jpg',
                    price: 11000
                    },
                    {
                    id: 2,
                    name: 'Asics GEL-ROCKET 9',
                    url: 'asics-gel-rocket-9',
                    image: 'https://cdn1.ozone.ru/s3/multimedia-a/wc1200/6017781490.jpg',
                    price: 8000
                    },
                    {
                    id: 3,
                    name: 'Reebok ROYAL CL JOG',
                    url: 'reebok-royal-cl-jog',
                    image: 'https://cdn1.ozone.ru/s3/multimedia-s/wc1200/6021866932.jpg',
                    price: 45000
                    },
                    {
                    id: 4,
                    name: 'Nike React Escape Run',
                    url:  'nike-react-escape-run',
                    image: 'https://cdn1.ozone.ru/s3/multimedia-z/wc1200/6021536963.jpg',
                    price: 14639
                    },
                    {
                    id: 5,
                    name: 'Asics GEL-ROCKET 6',
                    url: 'asics-gel-rocket-6',
                    image: 'https://cdn1.ozone.ru/s3/multimedia-v/wc1200/6030238447.jpg',
                    price: 9000
                    },
                    {
                    id: 6,
                    name: 'Puma Run Escape',
                    url: 'puma-run-escape',
                    image: 'https://cdn1.ozone.ru/s3/multimedia-3/wc1200/6032115711.jpg',
                    price: 7000
                    }
                ]
            }
        }
    }
</script>