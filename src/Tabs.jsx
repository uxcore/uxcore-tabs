import React from 'react';
import RcTabs from 'rc-tabs';
import assign from 'object-assign';
import classnames from 'classnames';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

const prefixCls = 'kuma-tab';
const TYPESUFFIX = {
  large: 'lg',
  small: 'sm',
  filter: 'filter',
  brick: 'brick',
};

class Tabs extends RcTabs {
  componentWillMount() {
    const docEle = document.documentElement;

    this.supportTransition = ['ms', 'moz', 'webkit', ''].some((prefix) => {
      const prop = prefix ? `${prefix}Transition` : 'transition';
      return prop in docEle.style;
    });
  }
  render() {
    const props = this.props;
    const { onTabClick, extraContent, animated } = props;

    return (
      <RcTabs
        {...props}
        className={classnames({
          [`${prefixCls}-${TYPESUFFIX[props.type]}`]: true,
          [props.className]: !!props.className,
          'no-csstransitions no-flexbox': !this.supportTransition,
        })}
        renderTabBar={() => (
          <ScrollableInkTabBar
            extraContent={extraContent}
            onTabClick={onTabClick}
          />
        )}
        renderTabContent={() => <TabContent animated={animated} />}
      />
    );
  }
}


Tabs.displayName = 'uxcore-tabs';
Tabs.defaultProps = assign(RcTabs.defaultProps, {
  prefixCls,
  type: 'large',
  extraContent: null,
  animated: true,
  onTabClick() { },
  renderTabBar() { },
  renderTabContent() { },
});
Tabs.TabPane = RcTabs.TabPane;


export default Tabs;
