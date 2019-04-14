import { config } from 'dotenv';
config();
console.log(process.env)
const configuration = {
    marketsURL: process.env.REACT_APP_MARKETS_URL,
    userURL: process.env.REACT_APP_USER_URL,
    productsURL: process.env.REACT_APP_PRODUCTS_URL,
}
console.log(configuration);
export default configuration;