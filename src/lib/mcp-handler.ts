import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_URL,
  CONTACT_INFO,
  HOME_SSR_COPY,
  ROUTES,
} from "./constants";
import { MCP_TOOLS } from "./mcp";

type JsonRpcId = string | number | null;

type JsonRpcRequest = {
  jsonrpc?: string;
  id?: JsonRpcId;
  method?: string;
  params?: Record<string, unknown>;
};

function result(id: JsonRpcId | undefined, payload: unknown) {
  return {
    jsonrpc: "2.0",
    id: id ?? null,
    result: payload,
  };
}

function error(id: JsonRpcId | undefined, code: number, message: string) {
  return {
    jsonrpc: "2.0",
    id: id ?? null,
    error: { code, message },
  };
}

function toolText(data: unknown) {
  return {
    content: [
      {
        type: "text",
        text: typeof data === "string" ? data : JSON.stringify(data, null, 2),
      },
    ],
  };
}

function callTool(name: string) {
  switch (name) {
    case "get_company_info":
      return toolText({
        name: APP_NAME,
        description: APP_DESCRIPTION,
        url: APP_URL,
        summary: HOME_SSR_COPY.lead,
        llmsTxt: `${APP_URL}${ROUTES.llms}`,
      });
    case "list_services":
      return toolText({
        services: [
          "AI Workflow Automation",
          "Support Triage & Ticketing",
          "AI Document Processing",
          "AI Voice Agents",
          "Enterprise AI Ecosystem",
        ],
        docs: `${APP_URL}${ROUTES.services}`,
      });
    case "get_contact_info":
      return toolText({
        email: CONTACT_INFO.email,
        phone: CONTACT_INFO.phone,
        address: {
          streetAddress: CONTACT_INFO.streetAddress,
          addressLocality: CONTACT_INFO.addressLocality,
          addressRegion: CONTACT_INFO.addressRegion,
          postalCode: CONTACT_INFO.postalCode,
          addressCountry: CONTACT_INFO.addressCountry,
        },
        contactPage: `${APP_URL}${ROUTES.contact}`,
      });
    case "get_developer_resources":
      return toolText({
        docs: `${APP_URL}${ROUTES.docs}`,
        apiDocs: `${APP_URL}${ROUTES.docsApi}`,
        openApi: `${APP_URL}${ROUTES.openApi}`,
        llmsTxt: `${APP_URL}${ROUTES.llms}`,
        mcp: `${APP_URL}${ROUTES.mcp}`,
        mcpManifest: `${APP_URL}/.well-known/mcp`,
        mcpServerCard: `${APP_URL}/.well-known/mcp/server-card.json`,
      });
    default:
      return null;
  }
}

export function handleMcpJsonRpc(body: JsonRpcRequest) {
  const method = body.method ?? "";
  const id = body.id;

  switch (method) {
    case "initialize":
      return result(id, {
        protocolVersion: "2025-03-26",
        capabilities: { tools: {} },
        serverInfo: {
          name: "aarjav-infotech",
          version: "1.0.0",
        },
        instructions:
          "Use Aarjav Infotech tools for company grounding, services, contact NAP, and developer resource URLs.",
      });
    case "notifications/initialized":
      return null;
    case "ping":
      return result(id, {});
    case "tools/list":
      return result(id, {
        tools: MCP_TOOLS.map((tool) => ({
          name: tool.name,
          description: tool.description,
          inputSchema: {
            type: "object",
            properties: {},
            additionalProperties: false,
          },
        })),
      });
    case "tools/call": {
      const name =
        typeof body.params?.name === "string" ? body.params.name : "";
      const payload = callTool(name);
      if (!payload) {
        return error(id, -32601, `Unknown tool: ${name}`);
      }
      return result(id, payload);
    }
    default:
      return error(id, -32601, `Method not found: ${method}`);
  }
}
