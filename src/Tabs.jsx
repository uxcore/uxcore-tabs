import React, { PropTypes } from 'react';
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
};


class Tabs extends React.Component {
  componentWillMount() {
    if (document) {
      const docEle = document.documentElement;

      this.supportTransition = ['ms', 'moz', 'webkit', ''].some((prefix) => {
        const prop = prefix ? `${prefix}Transition` : 'transition';
        return prop in docEle.style;
      });
    } else {
      this.supportTransition = [];
    }
  }

  render() {
    const props = this.props;
    const { onTabClick, extraContent, animated, prefixCls } = props;
    return (
      <RcTabs
        {...props}
        className={classnames({
          [`${prefixCls}-${TYPESUFFIX[props.type]}`]: true,
          [props.className]: !!props.className,
          'no-csstransitions no-flexbox': this.supportTransition.length === 0,
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

Tabs.propTypes = assign({}, RcTabs.propTypes, {
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  onChange: PropTypes.func,
  onTabClick: PropTypes.func,
  destroyInactiveTabPane: PropTypes.bool,
  type: PropTypes.oneOf(['large', 'small', 'filter', 'brick']),
  animated: PropTypes.bool,
  tabBarPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  extraContent: PropTypes.element,
});

Tabs.defaultProps = assign({}, RcTabs.defaultProps, {
  prefixCls: 'kuma-tab',
  type: 'large',
  animated: true,
  onTabClick: () => {},
});

Tabs.displayName = 'uxcore-tabs';
Tabs.TabPane = RcTabs.TabPane;

export default Tabs;
