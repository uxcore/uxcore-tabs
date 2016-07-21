import React from 'react';
import Tabs, {TabPane} from '../src/index';

function callback(key) {
  console.log(key);
}

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: 'large'
        };
    }
    _updateState(e){
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    render(){
        return (
            <div>
                <h2>大 tab,优先级最高（推荐样式）</h2>
                <Tabs defaultActiveKey="2" onChange={callback} className="test">
                  <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                  <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                  <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                </Tabs>
                
                <h2>小（局部）tab</h2>
                <Tabs defaultActiveKey="2" type="small" onChange={callback}>
                  <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                  <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                  <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                </Tabs>
                
                <h2>FILTER</h2>
                <Tabs defaultActiveKey="2" type="filter" onChange={callback}>
                  <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                  <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                  <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                </Tabs>
                
                <h2>BRICK</h2>
                <Tabs defaultActiveKey="2" type="brick" onChange={callback}>
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
            </div>
        );
    }
}
