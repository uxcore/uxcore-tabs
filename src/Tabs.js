import React from 'react';
import ReactDOM from 'react-dom';
import RcTabs from 'rc-tabs';
import assign from 'object-assign';

const prefixCls = 'kuma-tab';
const TYPESUFFIX = {
	large: 'lg',
    small: 'sm',
    filter: 'filter',
    brick: 'brick'
};


class Tabs extends RcTabs {

	aaa() {
		
	}

	render(){
		let props = this.props;
		let cls = [];
		if (TYPESUFFIX[props.type]) {
			cls.push([prefixCls, TYPESUFFIX[props.type]].join('-'));
		}
		cls = cls.join(' ');
		return <RcTabs {...props} className={cls} />;
	}
}


Tabs.displayName = 'uxcore-tabs';
Tabs.defaultProps = assign(RcTabs.defaultProps, {
	prefixCls: prefixCls,
	type: 'large'
});
Tabs.TabPane = RcTabs.TabPane;

export default Tabs;
