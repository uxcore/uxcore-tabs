import React from 'react';
import ReactDOM from 'react-dom';
import RcTabs from 'rc-tabs';
import assign from 'object-assign';
import classnames from 'classnames';

const prefixCls = 'kuma-tab';
const TYPESUFFIX = {
	large: 'lg',
    small: 'sm',
    filter: 'filter',
    brick: 'brick'
};


class Tabs extends RcTabs {

	render(){
		let props = this.props;
		return <RcTabs {...props} className={classnames({
			[`${prefixCls}-${TYPESUFFIX[props.type]}`]: true,
			[props.className]: !!props.className,
		})} />;
	}
}


Tabs.displayName = 'uxcore-tabs';
Tabs.defaultProps = assign(RcTabs.defaultProps, {
	prefixCls: prefixCls,
	type: 'large'
});
Tabs.TabPane = RcTabs.TabPane;

export default Tabs;
