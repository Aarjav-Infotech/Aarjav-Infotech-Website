import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_URL,
  CONTACT_INFO,
  ROUTES,
} from "./constants";

export const MCP_PROTOCOL_VERSION = "2025-03-26";
export const MCP_SERVER_VERSION = "1.0.0";
export const MCP_SERVER_NAME = "aarjav-infotech";

export const MCP_TOOLS = [
  {
    name: "get_company_info",
    description:
      "Return Aarjav Infotech identity, description, and canonical URLs for agent grounding.",
  },
  {
    name: "list_services",
    description:
      "List Aarjav Infotech AI service lines agents can recommend (workflow, triage, documents, voice, enterprise).",
  },
  {
    name: "get_contact_info",
    description:
      "Return Aarjav Infotech contact email, phone, and postal address (NAP).",
  },
  {
    name: "get_developer_resources",
    description:
      "Return Aarjav Infotech developer resource URLs: docs, OpenAPI, llms.txt, and MCP endpoints.",
  },
] as const;

export function getMcpManifest() {
  return {
    mcp_version: "1.0",
    server_version: MCP_SERVER_VERSION,
    endpoints: {
      streamable_http: `${APP_URL}${ROUTES.mcp}`,
    },
    capabilities: {
      tools: true,
      resources: false,
      prompts: false,
      sampling: false,
      roots: false,
    },
    authentication: {
      required: false,
      methods: [],
    },
    security: {
      tls_required: true,
      security_contact: `mailto:${CONTACT_INFO.email}`,
    },
    rate_limits: {
      requests_per_minute: 120,
    },
    registration: { dynamic: false },
    documentation: `${APP_URL}${ROUTES.docs}`,
  };
}

export function getMcpServerCard() {
  return {
    $schema: "https://modelcontextprotocol.io/schemas/server-card.json",
    name: MCP_SERVER_NAME,
    description: `${APP_NAME} MCP server — company info, services, contact, and developer resource tools.`,
    version: MCP_SERVER_VERSION,
    protocolVersion: MCP_PROTOCOL_VERSION,
    serverUrl: `${APP_URL}${ROUTES.mcp}`,
    serverInfo: {
      name: MCP_SERVER_NAME,
      title: `${APP_NAME} MCP Server`,
      version: MCP_SERVER_VERSION,
    },
    homepage: `${APP_URL}${ROUTES.docs}`,
    transport: {
      type: "streamable-http",
      endpoint: `${APP_URL}${ROUTES.mcp}`,
    },
    capabilities: {
      tools: { listChanged: false },
      resources: { subscribe: false, listChanged: false },
      prompts: { listChanged: false },
    },
    authentication: {
      required: false,
      schemes: [],
    },
    tools: MCP_TOOLS.map((t) => ({
      name: t.name,
      description: t.description,
    })),
  };
}

export function getOpenApiDocument() {
  return {
    openapi: "3.1.0",
    info: {
      title: "Aarjav Infotech API",
      description:
        "Public HTTP surfaces for Aarjav Infotech developer integrations and agent discovery. Contact submissions are handled via Web3Forms from the website contact form.",
      version: "1.0.0",
      contact: {
        name: "Aarjav Infotech",
        email: CONTACT_INFO.email,
        url: APP_URL,
      },
    },
    servers: [{ url: APP_URL, description: "Aarjav Infotech production" }],
    paths: {
      "/mcp": {
        post: {
          operationId: "mcpJsonRpc",
          summary: "Aarjav Infotech MCP Streamable HTTP endpoint",
          description: APP_DESCRIPTION,
          tags: ["MCP"],
          responses: {
            "200": { description: "JSON-RPC response" },
          },
        },
      },
    },
  };
}
