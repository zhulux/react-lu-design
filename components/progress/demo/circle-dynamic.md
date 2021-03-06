---
order: 4
title:
  zh-CN: 进度圈动态展示
  en-US: Dynamic circular progress bar
---

## zh-CN

会动的进度条才是好进度条。

## en-US

A dynamic progress bar is better.

````jsx
import { Progress, Button } from 'react-lu-design';
const ButtonGroup = Button.Group;

const MyProgress = React.createClass({
  getInitialState() {
    return {
      percent: 0,
    };
  },
  increase() {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  },
  decline() {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  },
  render() {
    return (
      <div>
        <Progress type="circle" percent={this.state.percent} />
        <ButtonGroup>
          <Button type="ghost" onClick={this.decline} icon="minus" />
          <Button type="ghost" onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  },
});

ReactDOM.render(<MyProgress />, mountNode);
````
