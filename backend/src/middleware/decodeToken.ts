const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
});


export const decodeToken = (token: string | undefined) => {
    const data = jwt.decode(token,process.env.JWT_PRIVATE_KEY);
    return data;
};
