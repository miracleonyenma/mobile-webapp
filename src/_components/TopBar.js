
import React, { Component } from 'react';

class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.startIcon);
        return (
            <div className="top_bar">
                <div className="app_name_container">
                    <h2 className="app_name">Converge</h2>
                </div>
                <div className="icons last_at_right">
                    <div className="icon_div">
                        <div className="touch_indicator">
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <div className="touch_indicator">
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <div className="icon_div">
                        <div className="touch_indicator">
                            <div className="menu_bar">
                                <div className="menu_line"></div>
                                <div className="menu_line"></div>
                                <div className="menu_line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar;