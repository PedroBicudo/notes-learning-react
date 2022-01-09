const FlexRow = (props) => {
    return (
        <Flex direction="row" align={props.align} justify={props.justify} gap={props.gap}>
            {props.children}
        </Flex>
    );
}

const FlexColumn = (props) => {
    return (
        <Flex direction="column" align={props.align} justify={props.justify} gap={props.gap}>
            {props.children}
        </Flex>
    );
}

const Flex = (props) => {
    return (
        <div style={{
            "display": "flex",
            flexDirection: props.direction,
            justifyContent: props.justify,
            alignItems: props.align,
            "gap": props.gap
        }}>
            {props.children}
        </div>
    );
}


export {Flex, FlexRow, FlexColumn};
