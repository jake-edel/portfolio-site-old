import React from "react";
import CustomLink from "./CustomLink";

const PortfolioListItem = ( {
    to,
    linkText,
    linkDescription
} ) => {
    return (
      <li className="portfolio-list-item">
        <CustomLink 
            to={to} 
            isExternal={true} 
            target='_blank'>{linkText}
        </ CustomLink>
         {linkDescription} 
      </li>
    )
}

export default PortfolioListItem