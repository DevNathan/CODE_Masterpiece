const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users
    (
        id           SERIAL PRIMARY KEY,
        email        VARCHAR(255) UNIQUE NOT NULL,
        password     VARCHAR(255)        NOT NULL,
        role         VARCHAR(50),
        createdTime  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modifiedTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

const createCategoryTables = `
    CREATE TABLE IF NOT EXISTS categoryA
    (
        id   SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS categoryB
    (
        id          SERIAL PRIMARY KEY,
        name        VARCHAR(255) NOT NULL,
        categoryAId INTEGER REFERENCES categoryA (id)
    );

    CREATE TABLE IF NOT EXISTS categoryC
    (
        id          SERIAL PRIMARY KEY,
        name        VARCHAR(255) NOT NULL,
        categoryBId INTEGER REFERENCES categoryB (id)
    );
`;

const createPostsTable = `
    CREATE TABLE IF NOT EXISTS posts
    (
        id           SERIAL PRIMARY KEY,
        title        VARCHAR(255) NOT NULL,
        headContent  TEXT         NOT NULL,
        content      TEXT         NOT NULL,
        userId       INTEGER REFERENCES users (id),
        categoryCId  INTEGER REFERENCES categoryC (id),
        createdTime  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modifiedTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

const createTagsTable = `
    CREATE TABLE IF NOT EXISTS tags
    (
        postId       INTEGER      NOT NULL REFERENCES posts (id) ON DELETE CASCADE,
        name         VARCHAR(255) NOT NULL,
        categoryName VARCHAR(255),
        PRIMARY KEY (name, postId)
    );
`;

export {createUsersTable, createCategoryTables, createPostsTable, createTagsTable};