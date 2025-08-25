import {
    McpServer,
    ResourceTemplate
} from "@modelcontextprotocol/sdk/server/mcp";
import { z } from 'zod';

// Create an MCP server
const server = new McpServer({
    name: 'add-server',
    version: '1.0.0',
});

// Add an addition tool
server.registerTool<{
    a: z.ZodNumber;
    b: z.ZodNumber;
}, z.ZodRawShape>(
    "add",
    {
        title: "Addition Tool",
        description: "A tool that adds two numbers",
        inputSchema: { a: z.number(), b: z.number() },
    },
    async ({ a, b }) => ({
        content: [{ type: 'text', text: String(a + b) }],
    })
)