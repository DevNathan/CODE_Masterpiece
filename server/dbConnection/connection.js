import dotenv from 'dotenv';
import pkg from 'pg';
import {createCategoryTables, createPostsTable, createTagsTable, createUsersTable} from "./createQueries.js";

const {Client} = pkg;

dotenv.config();

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});

/*
* db 연결.
* */
const connect = async () => {
    try {
        await client.connect();
        console.log(`DB Connected successfully; name: ${process.env.DB_NAME}`);
    } catch (e) {
        console.error("DB Connection failed: ", e);
    }
};

/*
* 테이블 생성용 쿼리
* */
const createTables = async () => {
    try {
        await connect();

        await client.query(createUsersTable);
        console.log("Table 'users' created successfully");

        await client.query(createCategoryTables);
        console.log("Category tables created successfully");

        await client.query(createPostsTable);
        console.log("Table 'posts' created successfully");

        await client.query(createTagsTable);
        console.log("Table 'tags' created successfully");
    } catch (e) {
        console.error("DB Connection or table creation failed: ", e);
    } finally {
        await client.end();
    }
}

export {connect, createTables};
