import { getShoppingCart } from "../utilities/fakedb";

const jobLoaders = async() =>{
    const loadedProducts = await fetch('/featuredJobs.json');
    const products = await loadedProducts.json();
    let savedCart = [];
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const savedProduct = products.find(product => product.id == id);
            if (savedProduct) {
                savedCart.push(savedProduct);
            }
        }
    return savedCart;
}

export default jobLoaders;