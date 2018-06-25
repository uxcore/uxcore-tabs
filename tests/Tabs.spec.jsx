import expect from 'expect.js';
import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RcTabs from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import Tabs from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Tabs', () => {
  it('is shallow rendered without error', () => {
    const wrapper = shallow(<Tabs />);
    expect(wrapper.exists()).to.be(true);
  });

  it('has a correct display name', () => {
    expect(Tabs.displayName).to.be('uxcore-tabs');
  });

  it('has correct propTypes', () => {
    // from api document
    expect(Tabs.propTypes.prefixCls).to.be(PropTypes.string);
    expect(Tabs.propTypes.className).to.be(PropTypes.string);
    // expect(Tabs.propTypes.activeKey).to.be(PropTypes.string);
    // expect(Tabs.propTypes.defaultActiveKey).to.be(PropTypes.string);
    // expect(Tabs.propTypes.onChange).to.be(PropTypes.func);
    expect(Tabs.propTypes.onTabClick).to.be(PropTypes.func);
    // expect(Tabs.propTypes.destroyInactiveTabPane).to.be(PropTypes.bool);
    expect(Tabs.propTypes.type).to.be.ok(); // 暂时无法准确检查 oneOf
    expect(Tabs.propTypes.animated).to.be(PropTypes.bool);
    // expect(Tabs.propTypes.tabBarPosition).to.be.ok();
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
    let wrapper = mount(<Tabs {...props} />);
    const scrollableInkTabBarProps = wrapper.find(ScrollableInkTabBar).props();
    let tabContentProps = wrapper.find(TabContent).props();
    expect(scrollableInkTabBarProps.extraContent).to.eql(props.extraContent);
    expect(tabContentProps).to.have.property('animated', props.animated);
    props.animated = true;
    
    wrapper = mount(<Tabs {...props} />);
    tabContentProps = wrapper.find(TabContent).props();
    expect(tabContentProps).to.have.property('animated', props.animated);
  });
});
