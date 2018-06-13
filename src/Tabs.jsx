import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import assign from 'object-assign';
import RcTabs from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

const TYPESUFFIX = {
  large: 'lg',
  small: 'sm',
  filter: 'filter',
  brick: 'brick',
  open: 'open',
};


class Tabs extends React.Component {
  constructor() {
    super();
    if (document) {
      const docEle = document.documentElement;

      this.supportTransition = ['ms', 'moz', 'webkit', ''].some((prefix) => {
        const prop = prefix ? `${prefix}Transition` : 'transition';
        return prop in docEle.style;
      });
    } else {
      this.supportTransition = false;
    }
  }

  render() {
    const { props } = this;
    const { onTabClick, extraContent, animated, prefixCls, tabBarStyle, tabContentStyle } = props;
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
            style={tabBarStyle}
          />
        )}
        renderTabContent={() => <TabContent animated={animated} style={tabContentStyle} />}
      />
    );
  }
}

Tabs.propTypes = {
  prefixCls: PropTypes.string,
  onTabClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['large', 'small', 'filter', 'brick', 'open']),
  animated: PropTypes.bool,
  extraContent: PropTypes.element,
  tabBarStyle: PropTypes.object,
  tabContentStyle: PropTypes.object,
};


Tabs.defaultProps = assign({}, RcTabs.defaultProps, {
  prefixCls: 'kuma-tab',
  type: 'large',
  animated: true,
  onTabClick: () => {},
  tabBarStyle: {},
  tabContentStyle: {},
});

Tabs.displayName = 'uxcore-tabs';
Tabs.TabPane = RcTabs.TabPane;

export default Tabs;
