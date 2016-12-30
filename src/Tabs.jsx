import React, { PropTypes } from 'react';
import classnames from 'classnames';
import assign from 'object-assign';
import RcTabs from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

const prefixCls = 'kuma-tab';
const TYPESUFFIX = {
  large: 'lg',
  small: 'sm',
  filter: 'filter',
  brick: 'brick',
};

export default class Tabs extends RcTabs {

  static propTypes = assign(RcTabs.propTypes, {
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onChange: PropTypes.func,
    onTabClick: PropTypes.func,
    destroyInactiveTabPane: PropTypes.bool,
    type: PropTypes.oneOf(['large','small', 'filter', 'brick']),
    animated: PropTypes.bool,
    tabBarPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    extraContent: PropTypes.element,
  });

  static defaultProps = assign(RcTabs.defaultProps, {
    prefixCls,
    type: 'large',
    animated: true,
    onTabClick: () => {},
  });

  static displayName = 'uxcore-tabs';
  static TabPane = RcTabs.TabPane;

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
