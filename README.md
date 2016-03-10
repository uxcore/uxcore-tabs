# uxcore-tabs

--

## TL;DR

tab ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-tabs
$ cd uxcore-tabs
$ npm install
$ gulp server
```

## Usage

```js
var Tabs = require('uxcore-tabs');
var TabPane = Tabs.TabPane;

var callback = function(key){
}

React.render(
  (
    <Tabs defaultActiveKey="2" onChange={callback}>
      <TabPane tab='tab 1' key="1">first</TabPane>
      <TabPane tab='tab 2' key="2">second</TabPane>
      <TabPane tab='tab 3' key="3">third</TabPane>
    </Tabs>
  ),
  document.getElementById('demo'));
```

## demo

见 http://uxcore.github.io/uxcore/components/tabs/

## API
### Tabs
|name|type|default|description|
|----|----|-------|-----------|
|activeKey |String| |current active tabPanel's key|
|defaultActiveKey|	String|	first active tabPanel's key| initial active tabPanel's key if activeKey is absent|
|onChange|	Function|(key)		|called when tabPanel is changed|
|onTabClick|	Function|(key)		|called when tab is clicked|
|destroyInactiveTabPane| Boolean | false | whether destroy inactive tabpane when change tab|
|type|string|large|`large` `small` `filter` `brick`|

### TabPane
|name|type|default|description|
|----|----|-------|-----------|
|key| Object | |corresponding to activeKey|
|tab| String | |current tab's title corresponding to current tabPane|
