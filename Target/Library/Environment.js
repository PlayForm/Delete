import*as e from"dotenv";import{z as t}from"zod";e.config();const r=t.object({Email:t.string().default(""),ID:t.string().default(""),Key:t.string().default("")});export{r as Fn};
