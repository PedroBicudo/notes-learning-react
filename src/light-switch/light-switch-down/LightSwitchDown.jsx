import '../LightSwitchControl.css';

function LightSwitchDown(props)  {
    return (
        <button onClick={props.click} className="btn-light-switch btn-light-switch--down" aria-label="Apague a luz"></button>
    );
}

export default LightSwitchDown;