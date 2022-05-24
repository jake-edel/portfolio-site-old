import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({
    isExternal,
    to,
    children,
    target
}) => {
    if(!isExternal){
        return(
            <Link to={to} target={target}>{children}</Link>
        )
    }
    return (
        <a href={to} target={target}>{children}</a>
    )
};

export default CustomLink;
