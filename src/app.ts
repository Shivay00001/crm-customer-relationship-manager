import express from "express";
import cors from "cors";
import helmet from "helmet";
import { DataSource } from "typeorm";
import { Customer } from "./entities/Customer";
import { Lead } from "./entities/Lead";

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Main Data Source
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "crm_db",
    synchronize: true,
    logging: false,
    entities: [Customer, Lead],
});

app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "CRM" });
});

// API Routes
app.post("/customers", async (req, res) => {
    const repo = AppDataSource.getRepository(Customer);
    const customer = repo.create(req.body);
    await repo.save(customer);
    res.status(201).json(customer);
});

app.get("/customers", async (req, res) => {
    const repo = AppDataSource.getRepository(Customer);
    const customers = await repo.find();
    res.json(customers);
});
