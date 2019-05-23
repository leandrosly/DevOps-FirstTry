var app = new Vue({
    el: '#app',
    data: {
        message: 'Docker Vue Test!'
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
    }
})