import React from "react";

export default  function Image(props) {
    const {
        url,
        altText,
        className
    } = props;


    return React.createElement(
        'img',
        {
            src: url,
            className: className,
            alt: altText
        },
    );
}
