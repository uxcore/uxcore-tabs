# uxcore-tabs

--

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-tabs.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-tabs
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-tabs.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-tabs
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-tabs.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-tabs?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-tabs.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-tabs
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-tabs.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-tabs#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-tabs.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-tabs.svg
[sauce-url]: https://saucelabs.com/u/uxcore-tabs

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
|type|string|large|`large` `small` `filter` `brick` `open`|
|animated|boolean|true|whether have animation effect when switch tab |
|tabBarPosition|string|top|`top` `bottom` `left` `right` |
|extraContent|ReactNode|null|the extra content on tab bar |
|tabBarStyle|object|{}|TabBar's style |
|tabContentStyle|object|{}|TabContent's style |



### TabPane
|name|type|default|description|
|----|----|-------|-----------|
|key| Object | |corresponding to activeKey|
|tab| String | |current tab's title corresponding to current tabPane|

