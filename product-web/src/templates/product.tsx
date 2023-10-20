import React from 'react';
import {PageProps} from "gatsby";

const ProductTemplate: React.FC<PageProps<{name: string}>> = ({ pageContext: { name } }) => {
    return (
        <div>
            <h1>Product: {name}</h1>
            <pre>This is an awesome product page!</pre>
        </div>
    );
};

export default ProductTemplate;