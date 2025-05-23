
import express, { Application } from 'express';
import { logRequest, logResponseBody } from "@/middleware/logger";

// import { v1Router } from '@/routes';
// import { OllamaLLMManager } from '@/llm/ollama-client-manager';

export function initServer(): Application {
    const app = express();
    app.use(express.json({ limit: '10mb' }));

    app.use(logRequest);
    app.use(logResponseBody);
    
    return app;
}