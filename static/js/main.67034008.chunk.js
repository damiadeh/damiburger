(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/chef-burger.54235b09.jpg"},27:function(e,t,a){e.exports=a(96)},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=a(98),o=(a(32),a(3)),s=a(4),u=a(6),d=a(5),m=a(7),h=(a(34),a(99)),p=a(97),b=function(e){return e.children},f=(a(36),a(38),a(23)),E=a.n(f),g=(a(40),function(e){return r.a.createElement("div",{className:"Logo",style:{height:e.height}},r.a.createElement("img",{src:E.a,alt:"burgre logo"}))}),v=(a(42),a(100)),y=(a(44),function(e){return r.a.createElement("li",{className:"NavigationItem"},r.a.createElement(v.a,{activeClassName:"active",exact:!0,to:e.link},e.children))}),k=function(e){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement(y,{link:"/"},"Burger Builder"),r.a.createElement(y,{link:"/orders"},"Orders"))},C=(a(49),function(e){return r.a.createElement("div",{onClick:e.clicked,className:"DrawerToggle"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),O=function(e){return r.a.createElement("header",{className:"Toolbar"},r.a.createElement(C,{clicked:e.drawerToggleClicked}),r.a.createElement(g,{height:"90%"}),r.a.createElement("nav",{className:"DesktopOnly"},r.a.createElement(k,null)))},j=(a(51),a(53),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),w=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),r.a.createElement(b,null,r.a.createElement(j,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement(g,{height:"11%"}),r.a.createElement("nav",{style:{marginTop:"25px"}},r.a.createElement(k,null))))},N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.SideDrawerToggler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerTogglerHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(O,{drawerToggleClicked:this.sideDrawerTogglerHandler}),r.a.createElement(w,{open:this.state.showSideDrawer,closed:this.SideDrawerToggler}),r.a.createElement("main",{className:"Content"},this.props.children))}}]),t}(n.Component),S=a(13),D=a(26),P=(a(55),a(57),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=r.a.createElement("div",{className:"Meat"});break;case"cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"salad":e=r.a.createElement("div",{className:"Salad"});break;case"bacon":e=r.a.createElement("div",{className:"Bacon"});break;default:e=null}return e}}]),t}(n.Component)),H=function(e){var t=Object.keys(e.ingredient).map(function(t){return Object(D.a)(Array(e.ingredient[t])).map(function(e,a){return r.a.createElement(P,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients")),r.a.createElement("div",{className:"Burger"},r.a.createElement(P,{type:"bread-top"}),t,r.a.createElement(P,{type:"bread-bottom"}))},B=(a(59),a(61),function(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{className:"Less",onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:"More",onClick:e.added},"More"))}),T=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],I=function(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("h5",null,"Current Price: ",e.price.toFixed(2)),T.map(function(t){return r.a.createElement(B,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},x=(a(63),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(j,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:"Modal",style:{transform:this.props.show?"transformY(0)":"transformY(-100vh)",display:this.props.show?"block":"none"}},this.props.children))}}]),t}(n.Component)),A=(a(65),function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])});return r.a.createElement(b,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"Your delicious burger has the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement("button",{className:"Button Danger",onClick:e.canceled},"CANCEL"),r.a.createElement("button",{className:"Button Success",onClick:e.continued},"CONTINUE"))}),L=a(25),R=a.n(L).a.create({baseURL:"https://react-burgerbuilder-21b9b.firebaseio.com/"}),M=(a(86),function(e){return r.a.createElement("div",{className:"Loader"},"Loading...")}),U={salad:100,cheese:100,meat:250,bacon:150},Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:400,purchasable:!1,purchasing:!1,loading:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(S.a)({},a.state.ingredients);n[e]=t;var r=U[e],c=a.state.totalPrice+r;a.setState({totalPrice:c,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(S.a)({},a.state.ingredients);r[e]=n;var c=U[e],l=a.state.totalPrice-c;a.setState({totalPrice:l,ingredients:r}),a.updatePurchaseState(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){var e=[];for(var t in a.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(a.state.ingredients[t]));e.push("price="+a.state.totalPrice);var n=e.join("&");a.props.history.push({pathname:"/checkout",search:"?"+n})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(S.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=r.a.createElement(A,{ingredients:this.state.ingredients,canceled:this.purchaseCancelHandler,continued:this.purchaseContinueHandler,price:this.state.totalPrice});return this.state.loading&&(a=r.a.createElement(M,null)),r.a.createElement(b,null,r.a.createElement(x,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),r.a.createElement(H,{ingredient:this.state.ingredients}),r.a.createElement(I,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,ordered:this.purchaseHandler,purchasable:this.state.purchasable}))}}]),t}(n.Component),W=(a(88),function(e){return r.a.createElement("button",{className:"Button "+e.btnType,onClick:e.clicked},e.children)}),F=(a(90),function(e){return r.a.createElement("div",{className:"CheckoutSummary"},r.a.createElement("h1",null,"Our delicacy is just the best"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(H,{ingredient:e.ingredients})),r.a.createElement(W,{btnType:"Danger",clicked:e.CheckoutCancelled},"CANCEL"),r.a.createElement(W,{btnType:"Success",clicked:e.CheckoutContinued},"CONTINUE"))}),J=(a(92),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",address:{street:"",postalCode:""},loading:!1},a.orderHandler=function(e){e.preventDefault(),a.setState({loading:!0});var t={ingredients:a.props.ingredients,price:a.props.price,customer:{name:"Adepoju Damilare",address:{street:"13, Yaba, Lagos",country:"Nigeria"},email:"dami@mail.com",phone:"08012345678"},deliveryMethod:"Ship"};R.post("/orders.json",t).then(function(e){a.setState({loading:!1}),a.props.history.push("/")}).catch(function(e){a.setState({loading:!1})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=r.a.createElement("form",null,r.a.createElement("input",{className:"Input",type:"text",name:"name",placeholder:"Your Name"}),r.a.createElement("input",{className:"Input",type:"email",name:"email",placeholder:"Your email"}),r.a.createElement("input",{className:"Input",type:"text",name:"street",placeholder:"Address"}),r.a.createElement("input",{className:"Input",type:"text",name:"postal",placeholder:"Postal Code"}),r.a.createElement(W,{btnType:"Success",clicked:this.orderHandler},"ORDER"));return this.state.loading&&(e=r.a.createElement(M,null)),r.a.createElement("div",{className:"ContactData"},r.a.createElement("h4",null,"Enter your Contact Details"),e)}}]),t}(n.Component)),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:0},a.CheckoutCancelledHandler=function(){a.props.history.goBack()},a.CheckoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=new URLSearchParams(this.props.location.search),t={},a=0,n=!0,r=!1,c=void 0;try{for(var l,i=e.entries()[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var o=l.value;"price"===o[0]?a=+o[1]:t[o[0]]=+o[1]}}catch(s){r=!0,c=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}this.setState({ingredients:t,totalPrice:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(F,{ingredients:this.state.ingredients,CheckoutCancelled:this.CheckoutCancelledHandler,CheckoutContinued:this.CheckoutContinuedHandler}),r.a.createElement(p.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(J,Object.assign({ingredients:e.state.ingredients,price:e.state.totalPrice},t))}}))}}]),t}(n.Component),$=(a(94),function(e){return r.a.createElement("div",{className:"Order"},r.a.createElement("p",null,"Ingredients: Salad"),r.a.createElement("p",null,"Price:",r.a.createElement("strong",null)," "))}),q=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement($,null))}}]),t}(n.Component),G=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null,r.a.createElement(h.a,null,r.a.createElement(p.a,{path:"/",exact:!0,component:Y}),r.a.createElement(p.a,{path:"/checkout",component:z}),r.a.createElement(p.a,{path:"/orders",component:q}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=r.a.createElement(i.a,{basename:"/burgerbuilder"},r.a.createElement(G,null));l.a.render(K,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.67034008.chunk.js.map