function LightSwitchUp(props)  {
    return (
        <button onClick={props.click} className="btn-light-switch btn-light-switch--up" aria-label="Acenda a luz"></button>
    );
}

export default LightSwitchUp;