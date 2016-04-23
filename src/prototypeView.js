const React = require('react');

class Tab extends React.Component {
    render() {
        return <div className={'kuma-tab-tabpane' + (this.props.actived ? '' : ' kuma-tab-tabpane-hidden')}>
            {this.props.children}
        </div>;
    }
}

class View extends React.Component {
    componentDidMount() {
        this.adaptInkbar();
    }

    componentDidUpdate() {
        this.adaptInkbar();
    }

    adaptInkbar() {
        let inkbar = this.refs.inkbar;
        if (!inkbar) return;
        if (inkbar.getDOMNode) {
            inkbar = inkbar.getDOMNode();
        }
        let nav = inkbar.parentNode,
            cur = nav.querySelector('.kuma-tab-tab-active');
        if (!cur) {
            inkbar.style.cssText = 'width:0';
            return;
        }

        let r1 = cur.getBoundingClientRect(), r2 = nav.getBoundingClientRect();

        inkbar.style.cssText = `left:${r1.left - r2.left}px;width:${r1.width}px`;
    }

    render() {
        let defaultActiveIndex = 0;
        let activeIndex = this.props.tabs.findIndex((tab, index) => {
            if (tab.key == this.props.defaultActiveKey || tab.defaultActived) {
                defaultActiveIndex = index;
            }
            return tab.actived || tab.key == this.props.activeKey;
        });
        console.info(this.props.defaultActiveKey, this.props.tabs);

        if (activeIndex < 0) {
            activeIndex = defaultActiveIndex;
        }
        let activeKeyProp = this.props.store.getProp('activeKey');
        let tabNav = this.props.tabs.map((tab, i) => {
            let className = "kuma-tab-tab" + (tab.disabled ? " kuma-tab-tab-disabled" : (activeIndex === i ? ' kuma-tab-tab-active' : ''));
            return <div key={tab.key} className={className} onClick={() => {
                activeKeyProp.setValue(tab.key);
            }}>
                <div className="kuma-tab-tab-inner">{tab.tab}</div>
            </div>;
        });
        let children = React.Children.map(this.props.children, (child, i) => {
            return <Tab key={this.props.tabs[i].key} actived={activeIndex === i}>{child}</Tab>;
        });
        let styles = {
            "large": "kuma-tab-lg",
            "small": "kuma-tab-sm",
            "filter": "kuma-tab-filter",
            "brick": "kuma-tab-brick"
        };
        let type = this.props.type || "large";
        if (!(type in styles)) {
            type = "large";
        }
        return <div className={"kuma-tab kuma-tab-top " + styles[type]}>
            <div className="kuma-tab-bar">
                <div className="kuma-tab-nav-container">
                    <div className="kuma-tab-nav-wrap">
                        <div className="kuma-tab-nav-scroll">
                            <div className="kuma-tab-nav">
                                <div className="kuma-tab-ink-bar" ref="inkbar" />
                                {tabNav}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="kuma-tab-content">{children}</div>
        </div>;
    }
}

module.exports = View;