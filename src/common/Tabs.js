import React, { useRef, useState } from 'react';
import ProjectSlide from '../components/ProjectSlide';
import ProjectTile from '../components/ProjectTile';
import "./Tabs.css";

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: -1
        }

        this.changeTabOnClick = this.changeTabOnClick.bind(this);
    }

    changeTabOnClick(index) {
        this.setState({
            activeTab: index
        });
    }

    render() {
        return (
            <div className="tabs-body scroll_anim init_bottom">
                <TabHeader data={this.props.data}
                    click={this.changeTabOnClick}
                    activeId={this.state.activeTab} />
                <TabContent data={this.props.data}
                    activeId={this.state.activeTab} />
            </div>
        )
    }
}

class TabHeader extends React.Component {
    doClick(index, event) {
        this.props.click(index);
    }

    render() {
        let activeClass = this.props.activeId;

        let tabs = this.props.data.map((item, index) => {
            return <div
                key={index}
                className={(activeClass === index ? 'active' : '')}
                onClick={this.doClick.bind(this, index)}>
                <span>{item.title}</span>
            </div>
        });

        return (
            <div className="tabs-header">{tabs}</div>
        )
    }

}

class TabContent extends React.Component {
    render() {
        let activeClass = this.props.activeId;

        let content = this.props.data.map((item, index) => {
            return <div
                className={'tabs-textItem ' + (activeClass === index ? 'show' : '')}
                key={index}
            >
                {
                    <ProjectSlide
                        {...item}
                    >
                    </ProjectSlide>
                }
            </div>
        });

        return (
            <div className="tabs-content">{content}</div>
        );
    }
}

export default Tabs;