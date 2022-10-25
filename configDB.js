/*export const config = {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'books',
};*/

import * as dotenv from 'dotenv';
dotenv.config();

console.log(process.env)

export const configDB = {
    host : process.env.MYSQL_HOST = " localhost",
    user : process.env.MYSQL_USERNAME = "cm4hxresf2ug0zcb",
    password : process.env.MYSQL_PASSWORD = "slqnzvi8lvbdx68b",
    database : process.env.MYSQL_DATABASE = "uz71cyzuyhs1e0cg"
};