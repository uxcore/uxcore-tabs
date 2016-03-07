import React from 'react';
import ReactDOM from 'react-dom';
import RcTabs from 'rc-tabs';
import assign from 'object-assign';

const prefixCls = 'kuma-tab';
const STYLESUFFIX = [
	'underline',
	'line',
	'topline',
	'brick'
];
const SIZESUFFIX = {
	normal: '',
	mini: 'sm',
	large: 'lg'
};

class Tabs extends RcTabs {
	render(){
		let props = this.props;
		let cls = [];
		if (SIZESUFFIX[props.size]) {
			cls.push([prefixCls, SIZESUFFIX[props.size]].join('-'));
		}
		if (STYLESUFFIX.indexOf(props.tabStyle) !== -1) {
			cls.push([prefixCls, props.tabStyle].join('-'));
		}
		cls = cls.join(' ');
		return <RcTabs {...props} className={cls} />;
	}
}
Tabs.displayName = 'uxcore-tabs';
Tabs.defaultProps = assign(RcTabs.defaultProps, {
	prefixCls: prefixCls,
	tabStyle: 'underline',
	size: 'normal'
});
Tabs.TabPane = RcTabs.TabPane;

export default Tabs;
