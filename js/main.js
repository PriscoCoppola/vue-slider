/**************************************
* SLIDER F1
**************************************/

const root = new Vue({
    el: '#root',
    data: {
        logo: './img/logo.png',
        images: [
            './img/car1.jpg',
            './img/car2.jpg',
            './img/car3.jpg',
            './img/car4.jpg',
        ],
        indexPhoto: 0,
        intervalID: 0
    },
    created() {
        this.startLoop();
    },
    methods: {
        nextPhoto() {
            this.indexPhoto++;

            if (this.indexPhoto === this.images.length) {
                this.indexPhoto = 0;
            }
        },
        prevPhoto() {
            this.indexPhoto--;
            
            if (this.indexPhoto < 0) {
                this.indexPhoto = (this.images.length - 1);
            }
        },
        setPhoto(index) {
            this.indexPhoto = index;
        },
        startLoop() {
            this.intervalID = setInterval(() => {
                this.nextPhoto();
            },3000)
        },
        stopLoop() {
            clearInterval(this.intervalID)
        }
    }
})