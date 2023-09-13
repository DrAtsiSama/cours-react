export default function Button({title, variant}){
    let Component = "button";
    const style = {
        borderRadious: 0,
        color: "black",
        backgroundColor: "white",
        borderColor:"black",
        borderStyle: "solid",
        borderWith: "1px"
    };
    switch(variant){
        case "rounded":
            style.backgroundRadius = "5px";
            break;
        case "circle":
            style.borderRadius = "50%"
            style.width = "50px";
            style.height = "50px";
            style.display = "flex";
            style.justifyContent = "center";
            style.alignItems = "center"
            title = title[0];
            break;
        case "text":
            style.border = "none";
            style.backgroundColor = "transparent";
            style.color = "pink";
            Component = "a";
            break;
    }
    return <Component style={style}>{title}</Component>
}