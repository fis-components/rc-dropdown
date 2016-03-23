'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

var _placements = require('./placements');

var _placements2 = _interopRequireDefault(_placements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*

 var MenuItem = Menu.Item;

 var menu = <Menu><MenuItem>1</MenuItem></Menu>;

 <DropDown trigger="click" animationName="" overlay={<>} onSelect={}>
 <button>open</button>
 </DropDown>
 */

var Dropdown = _react2.default.createClass({
  displayName: 'Dropdown',

  propTypes: {
    minOverlayWidthMatchTrigger: _react.PropTypes.bool,
    onVisibleChange: _react.PropTypes.func,
    prefixCls: _react.PropTypes.string,
    children: _react.PropTypes.any,
    transitionName: _react.PropTypes.string,
    overlayClassName: _react.PropTypes.string,
    animation: _react.PropTypes.any,
    align: _react.PropTypes.object,
    overlayStyle: _react.PropTypes.object,
    placement: _react.PropTypes.string,
    trigger: _react.PropTypes.array,
    showAction: _react.PropTypes.array,
    hideAction: _react.PropTypes.array,
    getPopupContainer: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      minOverlayWidthMatchTrigger: true,
      prefixCls: 'rc-dropdown',
      trigger: ['hover'],
      showAction: [],
      hideAction: [],
      overlayClassName: '',
      overlayStyle: {},
      defaultVisible: false,
      onVisibleChange: function onVisibleChange() {},

      placement: 'bottomLeft'
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    if ('visible' in props) {
      return {
        visible: props.visible
      };
    }
    return {
      visible: props.defaultVisible
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if ('visible' in props) {
      this.setState({
        visible: props.visible
      });
    }
  },
  onClick: function onClick(e) {
    var props = this.props;
    var overlayProps = props.overlay.props;
    if (!('visible' in props)) {
      this.setState({
        visible: false
      });
    }
    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  },
  onVisibleChange: function onVisibleChange(v) {
    var props = this.props;
    if (!('visible' in props)) {
      this.setState({
        visible: v
      });
    }
    props.onVisibleChange(v);
  },
  getMenuElement: function getMenuElement() {
    var props = this.props;
    return _react2.default.cloneElement(props.overlay, {
      prefixCls: props.prefixCls + '-menu',
      onClick: this.onClick
    });
  },
  getPopupDomNode: function getPopupDomNode() {
    return this.refs.trigger.getPopupDomNode();
  },
  afterVisibleChange: function afterVisibleChange(visible) {
    if (visible && this.props.minOverlayWidthMatchTrigger) {
      var overlayNode = this.getPopupDomNode();
      var rootNode = _reactDom2.default.findDOMNode(this);
      if (rootNode.offsetWidth > overlayNode.offsetWidth) {
        overlayNode.style.width = rootNode.offsetWidth + 'px';
      }
    }
  },
  render: function render() {
    var _React$createElement;

    var _props = this.props;
    var prefixCls = _props.prefixCls;
    var children = _props.children;
    var transitionName = _props.transitionName;
    var animation = _props.animation;
    var align = _props.align;
    var placement = _props.placement;
    var getPopupContainer = _props.getPopupContainer;
    var showAction = _props.showAction;
    var hideAction = _props.hideAction;
    var overlayClassName = _props.overlayClassName;
    var overlayStyle = _props.overlayStyle;
    var trigger = _props.trigger;

    return _react2.default.createElement(
      _rcTrigger2.default,
      (_React$createElement = {
        prefixCls: prefixCls,
        ref: 'trigger',
        popupClassName: overlayClassName,
        popupStyle: overlayStyle,
        builtinPlacements: _placements2.default,
        action: trigger,
        showAction: showAction
      }, _defineProperty(_React$createElement, 'showAction', showAction), _defineProperty(_React$createElement, 'hideAction', hideAction), _defineProperty(_React$createElement, 'popupPlacement', placement), _defineProperty(_React$createElement, 'popupAlign', align), _defineProperty(_React$createElement, 'popupTransitionName', transitionName), _defineProperty(_React$createElement, 'popupAnimation', animation), _defineProperty(_React$createElement, 'popupVisible', this.state.visible), _defineProperty(_React$createElement, 'afterPopupVisibleChange', this.afterVisibleChange), _defineProperty(_React$createElement, 'popup', this.getMenuElement()), _defineProperty(_React$createElement, 'onPopupVisibleChange', this.onVisibleChange), _defineProperty(_React$createElement, 'getPopupContainer', getPopupContainer), _React$createElement),
      children
    );
  }
});

exports.default = Dropdown;
module.exports = exports['default'];