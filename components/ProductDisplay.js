app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
        <div class="product-info">
            <h1>{{ title }}</h1>

            <p v-if="inStock">Disponible!!</p>
            <p v-else>Esgotats!!</p>

            <p>Envio: {{ shipping }}</p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }">
            </div>

            <button 
            class="button" 
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
            v-on:click="addToCart">
            Afegeix a la cesta
            </button>

            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
  data() {
    return {
        cart: 0,
        product: 'Auriculars',
        brand: 'EricGonzalez',
        selectedVariant: 0,
        details: ['100% Bluetooth', 'Inalàmbric','Marca JBL'],
        variants: [
            {id: 2234, color: 'black', image: './assets/images/blancos.jpg', quantity: 50 },
            {id: 2235, color: 'pink', image: './assets/images/rosa.jpg', quantity: 0 },
        ],
        reviews: []
    }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
            console.log(index)
        },
        addReview(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premium) {
                return 'Gratis'
            }
            return 47,49
        }
    }
})