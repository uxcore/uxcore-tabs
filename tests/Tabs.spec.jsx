import expect from 'expect.js';
import React, { PropTypes } from 'react';
import { mount, shallow } from 'enzyme';
import RcTabs from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import Tabs from '../src';

describe('Tabs', () => {
  let instance;
  it('is shallow rendered without error', () => {
    instance = shallow(<Tabs />);
    expect(instance.exists()).to.be(true);
  });

  it('has a correct display name', () => {
    expect(Tabs.displayName).to.be('uxcore-tabs');
  });

  it('has correct propTypes', () => {
    // from api document
    expect(Tabs.propTypes.activeKey).to.be(PropTypes.string);
    expect(Tabs.propTypes.defaultActiveKey).to.be(PropTypes.string);
    expect(Tabs.propTypes.onChange).to.be(PropTypes.func);
    expect(Tabs.propTypes.onTabClick).to.be(PropTypes.func);
    expect(Tabs.propTypes.destroyInactiveTabPane).to.be(PropTypes.bool);
    expect(Tabs.propTypes.type).to.be.ok(); // 暂时无法准确检查 oneOf
    expect(Tabs.propTypes.animated).to.be(PropTypes.bool);
    expect(Tabs.propTypes.tabBarPosition).to.be.ok();
    expect(Tabs.propTypes.extraContent).to.be(PropTypes.element);
    expect(Tabs.propTypes.renderTabBar).to.be(undefined);
    expect(Tabs.propTypes.renderTabContent).to.be(undefined);
  });

  it('has a correct sub component', () => {
    expect(Tabs.TabPane).to.eql(RcTabs.TabPane);
  });

  it('passes props correctly to dependent components', () => {
    const props = {
      onTabClick: () => {},
      extraContent: <div />,
      animated: false,
    };
    instance = mount(<Tabs {...props} />);
    const scrollableInkTabBarProps = instance.find(ScrollableInkTabBar).props();
    let tabContentProps = instance.find(TabContent).props();
    expect(scrollableInkTabBarProps.onTabClick.__reactBoundContext.tabBar.props.onTabClick).to.eql(props.onTabClick); // 因为依赖组件的实现没有immutable props
    expect(scrollableInkTabBarProps.extraContent).to.eql(props.extraContent);
    expect(tabContentProps).to.have.property('animated', props.animated);
    props.animated = true;
    instance = mount(<Tabs {...props} />);
    tabContentProps = instance.find(TabContent).props();
    expect(tabContentProps).to.have.property('animated', props.animated);
  });
});
