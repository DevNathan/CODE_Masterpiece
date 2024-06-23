const rootCategory = [
    {title: 'IDE', items: ['vscode', 'intellij']},
    {title: 'LANGUAGE', items: ['java', 'javascript', 'typescript', 'html', 'css']},
    {title: 'VCS', items: ['git', 'github']},
    {title: 'LIBRARY', items: ['lombok', 'jquery', 'querydsl', 'summernote']},
    {title: 'DBMS', items: ['oracle', 'mysql', 'mariadb', 'postgresql', 'redis', 'mongodb', 'h2database']},
    {title: 'API', items: ['bootpay', 'coolsms', 'oauth', 'openai']},
    {title: 'FRAMEWORK', items: ['spring', 'springjpa', 'springsecurity', 'hibernate']},
    {title: 'CLIENT', items: ['thymeleaf', 'react', 'vuejs']},
];

const techCategory = {
    // ide
    vscode: {name: "VSCode", link: "/tech/vscode", file: "/ide/VSCode"},
    intellij: {name: "Intellij", link: "/tech/intellij", file: "/ide/Intellij"},
    // language
    java: {name: "JAVA", link: "/tech/java", file: "/lan/JAVA"},
    javascript: {name: "JavaScript", link: "/tech/javascript", file: "/lan/JavaScript"},
    typescript: {name: "TypeScript", link: "/tech/typescript", file: "/lan/TypeScript"},
    html: {name: "HTML", link: "/tech/html", file: "/lan/HTML"},
    css: {name: "CSS", link: "/tech/css", file: "/lan/CSS"},
    // vcs
    git: {name: "GIT", link: "/tech/git", file: "/vcs/GIT"},
    github: {name: "GITHUB", link: "/tech/github", file: "/vcs/GITHUB"},
    // library
    lombok: {name: "Lombok", link: "/tech/lombok"},
    jquery: {name: "JQuery", link: "/tech/jquery", file: "/lib/JQuery"},
    querydsl: {name: "QueryDSL", link: "/tech/querydsl", file: "/lib/QueryDSL"},
    summernote: {name: "Summernote", link: "/tech/summernote", file: "/lib/Summernote"},
    // DBMS
    oracle: {name: "Oracle", link: "/tech/oracle", file: "/dbms/Oracle"},
    mysql: {name: "MySQL", link: "/tech/mysql", file: "/dbms/MySQL"},
    mariadb: {name: "MariaDB", link: "/tech/mariadb", file: "/dbms/MariaDB"},
    postgresql: {name: "PostgreSQL", link: "/tech/postgresql", file: "/dbms/PostgreSQL"},
    redis: {name: "Redis", link: "/tech/redis", file: "/dbms/Redis"},
    mongodb: {name: "MongoDB", link: "/tech/mongodb", file: "/dbms/MongoDB"},
    h2database: {name: "H2 Database", link: "/tech/h2database"},
    // api
    bootpay: {name: "bootpay", link: "/tech/bootpay"},
    coolsms: {name: "coolSMS", link: "/tech/coolsms"},
    oauth: {name: "OAuth2.0", link: "/tech/oauth"},
    openai: {name: "OpenAI", link: "/tech/openai"},
    // framework
    spring: {name: "Spring", link: "/tech/spring", file: "/framework/Spring"},
    springjpa: {name: "Spring JPA", link: "/tech/springjpa", file: "/framework/Spring"},
    springsecurity: {name: "Spring Security", link: "/tech/springsecurity", file: "/framework/SpringSecurity"},
    hibernate: {name: "Hibernate", link: "/tech/hibernate", file: "/framework/Hibernate"},
    // Client
    thymeleaf: {name: "ThymeLeaf", link: "/tech/thymeleaf", file: "/client/ThymeLeaf"},
    react: {name: "React", link: "/tech/react", file: "/client/React"},
    vuejs: {name: "Vue.js", link: "/tech/vuejs", file: "/client/VueJS"},
};

export {rootCategory, techCategory};