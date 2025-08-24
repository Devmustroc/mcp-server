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