(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4244937c"],{"31b1":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-one-log"},[n("loading",{attrs:{value:t.isLoading}}),n("v-container",{attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"","pb-2":""}},[0==t.game.rounds.length?[n("v-list",[n("v-subheader",[t._v("\n                            "+t._s(t.$t("noResultsText"))+"\n                            "),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""}},[n("v-icon",{attrs:{slot:"activator"},slot:"activator"},[t._v("help")]),n("span",{domProps:{innerHTML:t._s(t.$t("game.two.explain",[t.game.price,t.game.initShares,t.game.firstWinnings,t.game.secondWinnings,t.game.thirdWinnings]))}})],1)],1)],1)]:t._e(),t._l(t.rounds,function(e){return[n("v-list",{key:e.roundNumber},[n("v-subheader",[n("span",[t._v(t._s(t.$t("game.two.round",[e.roundNumber])))]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""}},[n("v-icon",{attrs:{slot:"activator"},slot:"activator"},[t._v("help")]),n("span",{domProps:{innerHTML:t._s(t.$t("game.two.explain",[t.game.price,t.game.initShares,t.game.firstWinnings,t.game.secondWinnings,t.game.thirdWinnings]))}})],1)],1),n("v-divider"),n("v-list-tile",[n("v-list-tile-avatar",{attrs:{size:"24",color:"red"}},[n("span",[t._v("1")])]),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.firstWinner!=t.account.address?e.firstWinner:t.$t("game.two.selfWinner"))}})],1)],1),n("v-list-tile",[n("v-list-tile-avatar",{attrs:{size:"24",color:"orange"}},[n("span",[t._v("2")])]),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.secondWinner!=t.account.address?e.secondWinner:t.$t("game.two.selfWinner"))}})],1)],1),n("v-list-tile",[n("v-list-tile-avatar",{attrs:{size:"24",color:"blue"}},[n("span",[t._v("3")])]),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.thirdWinner!=t.account.address?e.thirdWinner:t.$t("game.two.selfWinner"))}})],1)],1),n("v-divider")],1)]})],2)],1)],1)],1)},r=[],s=n("3a5e"),a={components:{loading:s["a"]},data(){return{isLoading:!0,account:{address:"0x0000000000000000000000000000000000000000"},roomNumber:this.$route.params.roomNumber>1?this.$route.params.roomNumber:1,game:{roundNumber:0,initShares:0,price:0,firstWinnings:0,secondWinnings:0,thirdWinnings:0,rounds:[]}}},created(){this.$web3.eth.getAccounts((t,e)=>{if(!t){this.$data.account.address=e[0];let t=this.$web3.contractInstance("TGameTwo");t.methods.rooms(this.$data.roomNumber).call((e,n)=>{if(!e){this.$data.game.roundNumber=n.roundNumber,this.$data.game.initShares=n.initShares,this.$data.game.price=this.$web3.utils.fromWei(n.price),this.$data.game.firstWinnings=this.$web3.utils.fromWei(n.winnings)/n.firstWinnerRate,this.$data.game.secondWinnings=this.$web3.utils.fromWei(n.winnings)/n.secondWinnerRate,this.$data.game.thirdWinnings=this.$web3.utils.fromWei(n.winnings)/n.thirdWinnerRate;let e=n.roundNumber>=20?n.roundNumber-10:1;for(let i=e;i<=n.roundNumber;i++)t.methods.rounds(this.$data.roomNumber,i).call((t,e)=>{t||0!=e.unsoldShares||this.$data.game.rounds.push({roundNumber:i,firstWinner:e.firstWinner,secondWinner:e.secondWinner,thirdWinner:e.thirdWinner})});this.$data.isLoading=!1}})}})},computed:{rounds(){return this.$data.game.rounds.sort((t,e)=>{return e.roundNumber-t.roundNumber})}}},o=a,l=n("2877"),d=Object(l["a"])(o,i,r,!1,null,null,null);e["default"]=d.exports},"3a5e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","content-class":"centered-dialog"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-progress-circular",{attrs:{indeterminate:"",size:50,width:5,color:t.progressColor}})],1)],1)],1)},r=[],s={name:"Loading",props:{value:{type:Boolean,default:!1},progressColor:{type:String,default:"purple"}}},a=s,o=(n("53a2"),n("2877")),l=Object(o["a"])(a,i,r,!1,null,null,null);e["a"]=l.exports},"53a2":function(t,e,n){"use strict";var i=n("a6e4"),r=n.n(i);r.a},a6e4:function(t,e,n){}}]);