import React from 'react';
import Select from 'uxcore-select2';
import Tabs, { TabPane } from '../src/index';

const { Option } = Select;

function callback(key) {
  console.log(key);
}

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'large',
      tabBarPosition: 'top',
    };
  }
  _updateState(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  changeTabPosition(tabBarPosition) {
    this.state.tabBarPosition = tabBarPosition;
    this.setState(this.state);
  }
  render() {
    return (
      <div>
        <h2>大 tab,优先级最高（推荐样式）</h2>
        <Tabs defaultActiveKey="2" onChange={callback} className="test">
          <TabPane tab="tab 1" key="1">选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一选项卡一</TabPane>
          <TabPane tab="tab 2" key="2">选项卡二</TabPane>
          <TabPane tab="tab 3" key="3">选项卡三</TabPane>
        </Tabs>

        <h2>小（局部）tab</h2>
        <Tabs defaultActiveKey="2" type="small" onChange={callback}>
          <TabPane tab="tab 1" key="1">选项卡一</TabPane>
          <TabPane tab="tab 2" key="2">选项卡二</TabPane>
          <TabPane tab="tab 3" key="3">选项卡三</TabPane>
        </Tabs>

        <h2>open: 开放性</h2>
        <Tabs defaultActiveKey="2" type="open" onChange={callback}>
          <TabPane tab="tab 1" key="1">选项卡一</TabPane>
          <TabPane tab="tab 2" key="2">选项卡二</TabPane>
          <TabPane tab="tab 3" key="3">选项卡三</TabPane>
        </Tabs>

        <h2>FILTER：文字型</h2>
        <Tabs defaultActiveKey="2" type="filter" onChange={callback}>
          <TabPane tab="tab 1" key="1">选项卡一</TabPane>
          <TabPane tab="tab 2" key="2">选项卡二</TabPane>
          <TabPane tab="tab 3" key="3">选项卡三</TabPane>
        </Tabs>

        <h2>BRICK：胶囊型</h2>
        <Tabs defaultActiveKey="2" type="brick" onChange={callback}>
          <TabPane tab="tab 1" key="1">选项卡一</TabPane>
          <TabPane tab="tab 2" key="2">选项卡二</TabPane>
          <TabPane tab="tab 3" key="3">选项卡三</TabPane>
        </Tabs>

        <h2>disabled</h2>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="tab 1" key="1">选项卡一</TabPane>
          <TabPane tab="tab 2" disabled key="2">选项卡二</TabPane>
          <TabPane tab="tab 3" key="3">选项卡三</TabPane>
        </Tabs>

        <h2>tab的嵌套</h2>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="tab 1" key="1">
            <Tabs defaultActiveKey="2" type="filter" onChange={callback}>
              <TabPane tab="tab 1" key="1">选项卡一</TabPane>
              <TabPane tab="tab 2" key="2">选项卡二</TabPane>
              <TabPane tab="tab 3" key="3">选项卡三</TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="tab 2" key="2">选项卡二</TabPane>
          <TabPane tab="tab 3" key="3">选项卡三</TabPane>
        </Tabs>

        <h2>tab的嵌套(top 和 left)</h2>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="tab 1" key="1">
            <Tabs defaultActiveKey="2" tabBarPosition="left" onChange={callback}>
              <TabPane tab="tab 1" key="1">选项卡一</TabPane>
              <TabPane tab="tab 2" key="2">选项卡二</TabPane>
              <TabPane tab="tab 3" key="3">选项卡三</TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="tab 2" key="2">选项卡二</TabPane>
          <TabPane tab="tab 3" key="3">选项卡三</TabPane>
        </Tabs>

        <h2>tab的位置</h2>
        <Select
          value={this.state.tabBarPosition}
          style={{ width: 200 }}
          onChange={this.changeTabPosition.bind(this)}
        >
          <Option value="top">top</Option>
          <Option value="bottom">bottom</Option>
          <Option value="left">left</Option>
          <Option value="right">right</Option>
        </Select>
        <div style={{ width: 550, height: 300 }}>
          <Tabs
            defaultActiveKey="2"
            onChange={callback}
            className="test"
            tabBarPosition={this.state.tabBarPosition}
          >
            <TabPane tab="tab 1" key="1">
              选项卡一
              <br /><br /><br /><br /><br /><br /><br /><br /><br />
            </TabPane>
            <TabPane tab="tab 2" key="2">选项卡二</TabPane>
            <TabPane tab="tab 3" key="3">选项卡三</TabPane>
            <TabPane tab="tab 4" key="4">选项卡四</TabPane>
            <TabPane tab="tab 5" key="5">选项卡五</TabPane>
            <TabPane tab="tab 6" key="6">选项卡六</TabPane>
            <TabPane tab="tab 7" key="7">选项卡七</TabPane>
            <TabPane tab="tab 8" key="8">选项卡八</TabPane>
            <TabPane tab="tab 9" key="9">选项卡九</TabPane>
          </Tabs>
        </div>

      </div>
    );
  }
}
