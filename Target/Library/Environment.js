import{z as t}from"zod";import*as n from"dotenv";const o=t.object({Email:t.string().default(""),ID:t.string().default(""),Key:t.string().default("")});export{n as Environment,o as Fn};
