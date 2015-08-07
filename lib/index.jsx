import React from 'react';
import RcTabs from 'rc-tabs';
import assign from 'object-assign';

class Tabs extends RcTabs {
	constructor(props){
		super(props);
	}
}
Tabs.displayName = 'uxcore-tabs';
Tabs.defaultProps = assign(RcTabs.defaultProps, {
	prefixCls: 'kuma-tabs'
});

export default Tabs;
