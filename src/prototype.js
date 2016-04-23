const React = require('react');
const {Bundle} = require('engine');
const {BoolSetter, TextSetter, ChoiceSetter, JsonSetter, NumberSetter, ListSetter} = require('engine-utils');

module.exports = Bundle.createPrototype({
    title: "标签容器",
    icon: require('../src/logo.svg'),
    category: "*",
    isInline: false,
    isContainer: true,
    canHovering: true,
    canSelecting: true,
    canDraging: true,
    canDroping: 'TabPane',
    canDropto: true,
    initialChildren: [{componentName: "TabPane", props: {key: "1", tab: "标签1"}}, {
        componentName: "TabPane",
        props: {key: "2", tab: "标签2"}
    }],
    configure: [{
        name: "defaultActiveKey",
        title: "默认激活",
        fieldStyle: "inline",
        setter: TextSetter
    }, {
        name: "activeKey",
        title: "激活标签",
        fieldStyle: "inline",
        setter: TextSetter
    }, {
        name: "destroyInactiveTabPane",
        title: "失活销毁",
        fieldStyle: "inline",
        defaultValue: false,
        setter: BoolSetter
    }, {
        name: "type",
        title: "类型",
        defaultValue: "large",
        fieldStyle: "block",
        setter: <ChoiceSetter options={[{value:"large"}, {value:"small"}, {value:"filter"}, {value:"brick"}]}/>
    }, {
        name: "tabs",
        title: "标签项",
        fieldStyle: "block",
        setter: <ListSetter primaryKey="key" titleField="tab" checkField="defaultActived" addData={{tab:"新标签"}} />,
        ignore: true,
        depends: 'defaultActiveKey,activeKey',
        sync: function (value, hotValue) {
            return value;
        },
        accessor: function () {
            let node = this.getNode();
            let children = node.getChildren(),
                activeKey = String(node.getPropValue('activeKey')),
                defaultActiveKey = String(node.getPropValue('defaultActiveKey'));
            return children.map(child => {
                let key = String(child.getPropValue('key')), tab = child.getPropValue('tab');
                let data = {key, tab};
                if (key === activeKey) {
                    data.actived = true;
                }
                if (key === defaultActiveKey) {
                    data.defaultActived = true;
                }
                return data;
            });
        },
        mutator: function (value, hotValue) {
            let node = this.getNode(),
                activeProp = node.getProp('activeKey'),
                defaultActiveProp = node.getProp('defaultActiveKey');
            let map = {};
            if (!Array.isArray(hotValue)) {
                hotValue = [];
            }
            let activeKey = '', defaultActiveKey = '';
            hotValue.forEach(item => {
                map[item.key] = item;
                if (item.actived) {
                    activeKey = String(item.key);
                }
                if (item.defaultActived) {
                    defaultActiveKey = String(item.key);
                }
            });
            activeProp.setValue(activeKey);
            defaultActiveProp.setValue(defaultActiveKey);

            node.mergeChildren((child, index) => {
                let key = String(child.getPropValue('key'));
                if (map.hasOwnProperty(key)) {
                    child.setPropValue('tab', map[key].tab);
                    delete map[key];
                    return false;
                } else {
                    return true;
                }
            }, (children) => {
                let items = [];
                for (let key in map) {
                    if (map.hasOwnProperty(key)) {
                        items.push({componentName: 'TabPane', props: map[key]});
                    }
                }
                return items;
            }, (child1, child2) => {
                let a = hotValue.findIndex(item => item.key == child1.getPropValue('key')),
                    b = hotValue.findIndex(item => item.key == child2.getPropValue('key'));
                return a - b;
            });
        }
    }]
});
