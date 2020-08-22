export default {
    data() {
        return {
            showUp: false,
            id: ''
        }
    },

    methods: {
        showFucitonItems() {
            const box = document.getElementById(this.id);
            let scrollTop =
                document.documentElement.scrollTop ||
                window.pageYOffset ||
                document.body.scrollTop;
            if (scrollTop + document.body.offsetHeight >= box.offsetTop - 80) {
                this.showUp = true;
            }
        }
    },

    mounted() {
        window.addEventListener("scroll", this.showFucitonItems);
    }
}