import React from 'react';
import LightSwitchDown from './light-switch-down/LightSwitchDown';
import LightSwitchUp from './light-switch-up/LightSwitchUp';
import './LightSwitchControl.css';

class LightSwitchControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };

        this.onClickLightSwitchDown = this.onClickLightSwitchDown.bind(this);
        this.onClickLightSwitchUp = this.onClickLightSwitchUp.bind(this);
    }

    render() {
        let currentLightSwitchBtn;
        if (this.state.isActive) {
            currentLightSwitchBtn = <LightSwitchDown click={this.onClickLightSwitchDown}/>;
        } else {
            currentLightSwitchBtn = <LightSwitchUp click={this.onClickLightSwitchUp}/>;
        }

        return (
            <div className="light-switch">
                {currentLightSwitchBtn}
            </div>
        );
    }

    onClickLightSwitchDown() {
        this.invertIsActiveState();
    }

    onClickLightSwitchUp() {
        this.invertIsActiveState();
    }


    invertIsActiveState() {
        this.setState((prevState) => {
            return {
                isActive: !prevState.isActive
            };
        });
    }

}

export default LightSwitchControl;