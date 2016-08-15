webpackHotUpdate(0,{

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(177);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(182);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(1);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(183);

	var _index6 = _interopRequireDefault(_index5);

	var _uuid = __webpack_require__(319);

	var _uuid2 = _interopRequireDefault(_uuid);

	var _reactBootstrap = __webpack_require__(321);

	var _AddModal = __webpack_require__(575);

	var _AddModal2 = _interopRequireDefault(_AddModal);

	var _ProductTable = __webpack_require__(576);

	var _ProductTable2 = _interopRequireDefault(_ProductTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _UsersHyeinyooTempProductListerTestNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hyeinyoo/temp/product-lister-test/src/components/Home.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersHyeinyooTempProductListerTestNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hyeinyoo/temp/product-lister-test/src/components/Home.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHyeinyooTempProductListerTestNode_modulesReactTransformHmrLibIndexJs2(_UsersHyeinyooTempProductListerTestNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Home = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'Home',
	  getInitialState: function getInitialState() {
	    try {
	      var items = JSON.parse(localStorage.productlist);
	    } catch (err) {
	      var items = [];
	    }
	    return {
	      productlist: items,
	      restaurant: {},
	      addShow: false,
	      sortName: true,
	      sortPrice: true,
	      totalPrice: 0,
	      totalItems: 0
	    };
	  },
	  totalPrice: function totalPrice() {
	    var price = this.state.productlist.reduce(function (item, next) {
	      return item.price + next.price;
	    }, 0);
	    this.setState({ totalPrice: price });
	  },
	  updateItem: function updateItem(newItem) {
	    this.setState({ menu: newMenu });
	    this.setState({ totalItems: this.state.productlist.length });
	    this.totalPrice();
	  },
	  deleteItem: function deleteItem(id) {
	    this.setState({ productlist: this.state.productlist.filter(function (item) {
	        if (item.id !== id) {
	          return item;
	        }
	      }) });
	    this.setState({ totalItems: this.state.productlist.length });
	    this.totalPrice();
	  },
	  onAdd: function onAdd(item) {
	    item.id = (0, _uuid2.default)();
	    this.setState({ addShow: false });
	    this.setState({ productlist: this.state.productlist.concat(item) });
	    this.setState({ totalItems: this.state.productlist.length });
	    this.totalPrice();
	  },
	  closeAddModal: function closeAddModal() {
	    this.setState({ addShow: false });
	  },
	  openAddModal: function openAddModal(item) {
	    this.setState({ addShow: true });
	  },
	  sortName: function sortName() {
	    //sort the array according to name
	    console.log("sortName:", this.state.sortName);
	    var sortArr = void 0;
	    if (this.state.sortName) {
	      sortArr = this.state.productlist.sort(function (a, b) {
	        return a.name < b.name;
	      });
	      this.setState({ sortName: false });
	    } else {
	      sortArr = this.state.productlist.sort(function (a, b) {
	        return b.name < a.name;
	      });
	    }
	    console.log("sortArr:", sortArr);
	    this.setState({ productlist: sortArr });
	  },
	  sortPrice: function sortPrice() {
	    var sortArr = void 0;
	    if (this.state.sortPrice) {
	      sortArr = this.state.productlist.sort(function (a, b) {
	        return a.price - b.price;
	      });
	      this.setState({ sortPrice: false });
	    } else {
	      sortArr = this.state.productlist.sort(function (a, b) {
	        return b.price - a.price;
	      });
	    }
	    this.setState({ productlist: sortArr });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    localStorage.productlist = JSON.stringify(this.state.productlist);
	  },
	  render: function render() {
	    var _this = this;

	    var smClose = function smClose() {
	      return _this.setState({ addShow: false });
	    };
	    return _react3.default.createElement(
	      'div',
	      null,
	      _react3.default.createElement(
	        'div',
	        { className: 'row' },
	        _react3.default.createElement(
	          'div',
	          { className: 'col-xs-8' },
	          _react3.default.createElement(
	            'h2',
	            null,
	            'Add New Product'
	          )
	        ),
	        _react3.default.createElement(
	          'div',
	          { className: 'col-xs-4' },
	          _react3.default.createElement('br', null),
	          _react3.default.createElement(_reactBootstrap.Button, { onClick: this.openAddModal, className: 'btn-success fa fa-plus-square fa-sm' })
	        )
	      ),
	      _react3.default.createElement(_ProductTable2.default, { productlist: this.state.productlist, update: this.updateItem, 'delete': this.deleteItem, sortName: this.sortName, sortPrice: this.sortPrice }),
	      _react3.default.createElement(_AddModal2.default, { show: this.state.addShow, submit: this.onAdd, onHide: this.closeAddModal })
	    );
	  }
	}));

	exports.default = Home;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(176)(module)))

/***/ }

})