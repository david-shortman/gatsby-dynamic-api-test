import axios from 'axios';
import { GatsbyNode } from "gatsby";
import path from "path";

type ProductDto = {
    name: string;
}

type ProductsDto = {
    products: Array<ProductDto>
}

export const createPages: GatsbyNode['createPages'] = (async ({ actions }) => {
    const { createPage } = actions;

    const response = await axios.get<ProductsDto>('http://localhost:8001');

    const productTemplate = path.resolve('./src/templates/product.tsx');

    response.data.products.forEach(product => {
        createPage({
            path: `/products/${product.name}`,
            component: productTemplate,
            context: {
                name: product.name
            }
        });
    });
});