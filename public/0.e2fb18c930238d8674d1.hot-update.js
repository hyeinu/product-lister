webpackHotUpdate(0,{

/***/ 576:
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

	var _reactBootstrap = __webpack_require__(321);

	var _EditModal = __webpack_require__(577);

	var _EditModal2 = _interopRequireDefault(_EditModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _UsersHyeinyooTempProductListerTestNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hyeinyoo/temp/product-lister-test/src/components/ProductTable.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersHyeinyooTempProductListerTestNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hyeinyoo/temp/product-lister-test/src/components/ProductTable.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHyeinyooTempProductListerTestNode_modulesReactTransformHmrLibIndexJs2(_UsersHyeinyooTempProductListerTestNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var ProductTable = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'ProductTable',
	  getInitialState: function getInitialState() {
	    return {
	      list: this.props.productlist,
	      showEditModal: false,
	      editProduct: {}
	    };
	  },
	  deleteMenu: function deleteMenu(item) {
	    this.props.delete(item.id);
	  },
	  showModal: function showModal(item) {
	    this.setState({ editProduct: item });
	    this.setState({ showEditModal: true });
	  },
	  close: function close() {
	    this.setState({ showEditModal: false });
	  },
	  submit: function submit(newItem) {
	    this.props.update(newItem);
	    this.setState({ showEditModal: false });
	  },
	  render: function render() {
	    var _this = this;

	    // let smClose = () => this.setState({ showEditModal: false });
	    var productItems = this.props.productlist.map(function (item) {
	      return _react3.default.createElement(
	        'tr',
	        { key: item.id },
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-2' },
	          item.name
	        ),
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-1' },
	          item.price
	        ),
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-2' },
	          _react3.default.createElement(_reactBootstrap.Image, { src: item.picUrl, rounded: true, responsive: true })
	        ),
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-1' },
	          _react3.default.createElement(_reactBootstrap.Button, { onClick: _this.showModal.bind(null, item), className: 'btn btn-info fa fa-pencil-square-o' })
	        ),
	        _react3.default.createElement(
	          'td',
	          { className: 'col-xs-1' },
	          _react3.default.createElement(_reactBootstrap.Button, { onClick: _this.deleteMenu.bind(null, item), className: 'btn btn-danger fa fa-trash' })
	        )
	      );
	    });
	    return _react3.default.createElement(
	      'div',
	      null,
	      _react3.default.createElement(
	        _reactBootstrap.Table,
	        { className: 'container' },
	        _react3.default.createElement(
	          'thead',
	          null,
	          _react3.default.createElement(
	            'tr',
	            null,
	            _react3.default.createElement(
	              'th',
	              { className: 'col-xs-2' },
	              'Name ',
	              _react3.default.createElement(_reactBootstrap.Button, { className: 'fa fa-sort', onClick: this.props.sortName })
	            ),
	            _react3.default.createElement(
	              'th',
	              { className: 'col-xs-1' },
	              'Price ',
	              _react3.default.createElement(_reactBootstrap.Button, { className: 'fa fa-sort', onClick: this.props.sortPrice })
	            ),
	            _react3.default.createElement(
	              'th',
	              { className: 'col-xs-2' },
	              'Picture'
	            ),
	            _react3.default.createElement(
	              'th',
	              { className: 'col-xs-1' },
	              'Edit'
	            ),
	            _react3.default.createElement(
	              'th',
	              { className: 'col-xs-1' },
	              'Delete'
	            )
	          )
	        ),
	        _react3.default.createElement(
	          'tbody',
	          null,
	          productItems
	        )
	      ),
	      _react3.default.createElement(_EditModal2.default, { show: this.state.showEditModal, onSubmit: this.submit, onHide: this.close, item: this.state.editProduct })
	    );
	  }
	}));

	exports.default = ProductTable;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(176)(module)))

/***/ }

})