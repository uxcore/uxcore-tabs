import React from 'react';
import Tabs, {TabPane} from '../src/index';

function callback(key) {
  console.log(key);
}

let tabContent = [
  <span><i className="anticon anticon-apple"></i>tab 1</span>,
  <span><i className="anticon anticon-android"></i>tab 2</span>,
  <span><i className="anticon anticon-lock"></i>tab 3</span>,
];

export default class Demo extends React.Component {
    render(){
        return (
            <div>
                <h2>Basic</h2>
                <Tabs defaultActiveKey="2" onChange={callback}>
                  <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                  <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                  <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                </Tabs>
                <h2>Size</h2>
                <Tabs defaultActiveKey="2" size="mini">
                  <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                  <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                  <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                </Tabs>
                <h2>disabled</h2>
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                  <TabPane tab="tab 2" disabled={true} key="2">选项卡二</TabPane>
                  <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                </Tabs>
                <h2>icon</h2>
                <Tabs defaultActiveKey="2" onChange={callback}>
                  <TabPane tab={tabContent[0]} key="1">选项卡一</TabPane>
                  <TabPane tab={tabContent[1]} key="2">选项卡一</TabPane>
                  <TabPane tab={tabContent[2]} key="3">选项卡一</TabPane>
                </Tabs>
                <h2>slide</h2>
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="tab 1" key="1">选项卡一</TabPane>
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
        );
    }
}
