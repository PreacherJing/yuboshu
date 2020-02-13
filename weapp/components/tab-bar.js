"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    labels: Array,
    selectedIndex: {
      type: Number,
      "default": 0
    },
    extClass: {
      type: String,
      "default": ''
    }
  },
  data: {
    left: 51
  },
  watch: {
    selectedIndex: function selectedIndex(index) {
      this.change(index);
    }
  },
  methods: {
    change: function change(index) {
      this.left = index * (100 + 19) + 51;
    },
    tabTap: function tabTap(index) {
      this.selectedIndex = index;
      this.change(index);
      this.$emit('change', index);
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'64-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.tabTap(index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'64-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.tabTap(index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'64-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.tabTap(index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'64-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.tabTap(index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'64-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.tabTap(index)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'64-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.tabTap(index)
      })();
    
  }}}, models: {} });