app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Comentaris:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} ha donat {{ review.rating }} estrelles
                <br/>
                "{{ review.review }}"
            </li>
        </ul>
    </div>
    `
})