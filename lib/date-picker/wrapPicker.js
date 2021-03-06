'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports["default"] = wrapPicker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Panel = require('rc-time-picker/lib/Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

var _getLocale = require('../_util/getLocale');

var _getLocale2 = _interopRequireDefault(_getLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getColumns(_ref) {
    var showHour = _ref.showHour,
        showMinute = _ref.showMinute,
        showSecond = _ref.showSecond;

    var column = 0;
    if (showHour) {
        column += 1;
    }
    if (showMinute) {
        column += 1;
    }
    if (showSecond) {
        column += 1;
    }
    return column;
}
function wrapPicker(Picker, defaultFormat) {
    var PickerWrapper = _react2["default"].createClass({
        displayName: 'PickerWrapper',
        getDefaultProps: function getDefaultProps() {
            return {
                format: defaultFormat || 'YYYY-MM-DD',
                transitionName: 'slide-up',
                popupStyle: {},
                onChange: function onChange() {},
                onOk: function onOk() {},
                onOpenChange: function onOpenChange() {},

                locale: {},
                align: {
                    offset: [0, -9]
                },
                prefixCls: 'lud-calendar',
                inputPrefixCls: 'lud-input'
            };
        },

        contextTypes: {
            antLocale: _react.PropTypes.object
        },
        handleOpenChange: function handleOpenChange(open) {
            var _props = this.props,
                onOpenChange = _props.onOpenChange,
                toggleOpen = _props.toggleOpen;

            onOpenChange(open);
            if (toggleOpen) {
                (0, _warning2["default"])(false, '`toggleOpen` is deprecated and will be removed in the future, ' + 'please use `onOpenChange` instead');
                toggleOpen({ open: open });
            }
        },
        render: function render() {
            var _classNames2, _classNames3;

            var props = this.props;
            var prefixCls = props.prefixCls,
                inputPrefixCls = props.inputPrefixCls;

            var pickerClass = (0, _classnames2["default"])((0, _defineProperty3["default"])({}, prefixCls + '-picker', true));
            var pickerInputClass = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-range-picker', true), (0, _defineProperty3["default"])(_classNames2, inputPrefixCls, true), (0, _defineProperty3["default"])(_classNames2, inputPrefixCls + '-lg', props.size === 'large'), (0, _defineProperty3["default"])(_classNames2, inputPrefixCls + '-sm', props.size === 'small'), _classNames2));
            var locale = (0, _getLocale2["default"])(props, this.context, 'DatePicker', function () {
                return require('./locale/zh_CN');
            });
            var timeFormat = props.showTime && props.showTime.format || 'HH:mm:ss';
            var rcTimePickerProps = {
                format: timeFormat,
                showSecond: timeFormat.indexOf('ss') >= 0,
                showMinute: timeFormat.indexOf('mm') >= 0,
                showHour: timeFormat.indexOf('HH') >= 0
            };
            var columns = getColumns(rcTimePickerProps);
            var timePickerCls = (0, _classnames2["default"])((_classNames3 = {}, (0, _defineProperty3["default"])(_classNames3, prefixCls + '-time-picker-1-column', columns === 1), (0, _defineProperty3["default"])(_classNames3, prefixCls + '-time-picker-2-columns', columns === 2), _classNames3));
            var timePicker = props.showTime ? _react2["default"].createElement(_Panel2["default"], (0, _extends3["default"])({}, rcTimePickerProps, props.showTime, { prefixCls: prefixCls + '-time-picker', className: timePickerCls, placeholder: locale.timePickerLocale.placeholder, transitionName: 'slide-up' })) : null;
            return _react2["default"].createElement(Picker, (0, _extends3["default"])({}, props, { pickerClass: pickerClass, pickerInputClass: pickerInputClass, locale: locale, timePicker: timePicker, onOpenChange: this.handleOpenChange }));
        }
    });
    return PickerWrapper;
}
module.exports = exports['default'];