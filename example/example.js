var Vue = require('vue')
var VueClipboard = require('../')

Vue.use(VueClipboard)

new Vue({
  el: '#app',
  data: {
    datacopy: 'https://github.com/xiaokaike/vue-clipboard.git',
    showTips: false,
    arialabel: 'Copied!',
    datacut: 'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.'
  },
  methods: {
    copySucess: function (e){
      console.log('copy sucess')
      this.arialabel = 'Copied!'
      this.showTips = true
    },
    copyError: function (e){
      console.log('copy error')
      this.showTips = true
      this.arialabel = fallbackMessage()
    },
    handlerL: function (){
      this.showTips = false;
    }
  }
})

// Simplistic detection, do not use it in production
function fallbackMessage(action) {
    var actionMsg = '';
    var actionKey = (action === 'cut' ? 'X' : 'C');

    if(/iPhone|iPad/i.test(navigator.userAgent)) {
        actionMsg = 'No support :(';
    }
    else if (/Mac/i.test(navigator.userAgent)) {
        actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
    }
    else {
        actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
    }

    return actionMsg;
}
