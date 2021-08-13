(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={backdrop:"Modal_backdrop__1tpyE",content:"Modal_content__34mbr"}},26:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),o=a.n(c),i=a(12),s=a(4),l=a(5),u=a(7),m=a(6),h=(a(26),a(0)),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleInput=function(t){e.setState({query:t.target.value})},e.handleFormSubmit=function(t){var a=e.state.query;t.preventDefault(),e.props.onFormSubmit(a),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.handleFormSubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInput,value:this.state.query})]})})}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.onImageClick=function(t){e.props.handleImgClick(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{src:this.props.webformatURL,alt:"",className:"ImageGalleryItem-image",onClick:function(){return e.onImageClick(e.props.largeImageURL)}})})}}]),a}(n.Component),p=function(e){var t=e.images,a=e.handleImgClick;return Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(h.jsx)(g,{handleImgClick:a,largeImageURL:r,webformatURL:n},t)}))})},b=function(e){var t=e.onBtn;return Object(h.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})},j=a(10),f=a.n(j),y=document.querySelector("#modal-root"),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleEscape=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleBackdrop=function(t){t.target===t.currentTarget&&e.props.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscape)}},{key:"render",value:function(){return Object(c.createPortal)(Object(h.jsx)("div",{className:f.a.backdrop,onClick:this.handleBackdrop,children:Object(h.jsx)("div",{className:f.a.content,children:this.props.children})}),y)}}]),a}(n.Component),v=a(21),k=a.n(v),w={fetchImages:function(e){var t=e.currentQuery,a=e.currentPage,n=void 0===a?"1":a;return k.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(n,"&key=22915499-86e114c687af7a9df784d9137&image_type=photo&orientation=horizontal&per_page=12\n")).then((function(e){return e.data.hits}))}},I=(a(46),a(11)),x=a.n(I),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentQuery:"",currentPage:1,images:[],isLoading:!1,showModal:!1},e.onFormSubmit=function(t){e.setState({currentQuery:t,currentPage:1,images:[]})},e.populateImages=function(){e.setState({isLoading:!0});var t=e.state,a=t.currentQuery,n=t.currentPage;w.fetchImages({currentQuery:a,currentPage:n}).then((function(t){e.setState((function(e){return{currentPage:e.currentPage+1,images:[].concat(Object(i.a)(e.images),Object(i.a)(t.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}))))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).finally((function(){e.setState({isLoading:!1})}))},e.handleMoreClick=function(){e.populateImages()},e.handleImgClick=function(t){e.setState({bigImg:t,showModal:!0})},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.currentQuery!==this.state.currentQuery&&this.populateImages()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.showModal,n=e.bigImg;return Object(h.jsxs)("div",{children:[a&&Object(h.jsx)(O,{toggleModal:this.toggleModal,children:Object(h.jsx)("img",{src:n,alt:""})}),Object(h.jsx)(d,{onFormSubmit:this.onFormSubmit}),this.state.images.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{handleImgClick:this.handleImgClick,images:this.state.images}),t?Object(h.jsx)(x.a,{type:"Circles",color:"#bd2745",height:70,width:70,timeout:3e3,className:"Spinner"}):Object(h.jsx)(b,{onBtn:this.handleMoreClick})]}),t&&0===this.state.images.length&&Object(h.jsx)(x.a,{type:"Circles",color:"#bd2745",height:70,width:70,timeout:3e3,className:"Spinner"})]})}}]),a}(n.Component);a(67);o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.2d8629b5.chunk.js.map