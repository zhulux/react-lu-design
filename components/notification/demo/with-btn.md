---
order: 3
title:
  zh-CN: 自定义按钮
  en-US: Custom close button
---

## zh-CN

自定义关闭按钮的样式和文字。

## en-US

To customize the style or font of the close button.

````jsx
import { Button, notification } from 'react-lu-design';

const close = function () {
  console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
};

const openNotification = function () {
  const key = `open${Date.now()}`;
  const btnClick = function () {
    // to hide notification box
    notification.close(key);
  };
  const btn = (
    <Button type="primary" size="small" onClick={btnClick}>
      Confirm
    </Button>
  );
  notification.open({
    message: 'Notification Title',
    description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    onClose: close,
  });
};

ReactDOM.render(
  <div>
    <Button type="primary" onClick={openNotification}>Open the notification box</Button>
  </div>,
mountNode);
````
