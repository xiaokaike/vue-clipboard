var Vue = require('vue')
var VueClipboard = require('../')

Vue.use(VueClipboard)

new Vue({
  el: '#app',
  data: {
    datacopy: 'copy data',
    datacut: 'cut data'
  },
  methods: {
    copySucess: function (){
      console.log('copy sucess')
    },
    copyError: function (){
      console.log('copy error')
    }
  }
})
