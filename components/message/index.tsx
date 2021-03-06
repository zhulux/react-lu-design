import React from 'react';
import Notification from 'rc-notification';
import Icon from '../icon';

let defaultDuration = 1.5;
let defaultTop;
let messageInstance;
let key = 1;
let prefixCls = 'lud-message';

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance({
    prefixCls,
    transitionName: 'move-up',
    style: { top: defaultTop }, // 覆盖原来的样式
  });
  return messageInstance;
}

type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';

function notice(
  content: React.ReactNode,
  duration: number = defaultDuration,
  type: NoticeType,
  onClose?: () => void) {
  let iconType = ({
    info: 'infocircle',
    success: 'checkcircle',
    error: 'closecircle',
    warning: 'exclamationcircle',
    loading: 'loading',
  })[type];

  let instance = getMessageInstance();
  instance.notice({
    key,
    duration,
    style: {},
    content: (
      <div className={`${prefixCls}-custom-content ${prefixCls}-${type}`}>
        <Icon type={iconType} />
        <span>{content}</span>
      </div>
    ),
    onClose,
  });
  return (function () {
    let target = key++;
    return function () {
      instance.removeNotice(target);
    };
  }());
}

type ConfigContent = React.ReactNode | string;
type ConfigDuration = number;
export type ConfigOnClose = () => void;

export interface ConfigOptions {
  top?: number;
  duration?: number;
  prefixCls?: string;
}

export default {
  info(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'info', onClose);
  },
  success(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'success', onClose);
  },
  error(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'error', onClose);
  },
  // Departed usage, please use warning()
  warn(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'warning', onClose);
  },
  warning(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'warning', onClose);
  },
  loading(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'loading', onClose);
  },

  config(options: ConfigOptions) {
    if (options.top !== undefined) {
      defaultTop = options.top;
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};
