import { handleMcpJsonRpc } from "@/lib/mcp-handler";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Accept, MCP-Protocol-Version, Mcp-Session-Id",
  "Access-Control-Expose-Headers": "MCP-Protocol-Version",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function GET() {
  return Response.json(
    {
      name: "aarjav-infotech",
      transport: "streamable-http",
      protocolVersion: "2025-03-26",
      message:
        "POST JSON-RPC messages to this endpoint. Discover via /.well-known/mcp",
    },
    {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json; charset=utf-8",
        "MCP-Protocol-Version": "2025-03-26",
      },
    },
  );
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      {
        jsonrpc: "2.0",
        id: null,
        error: { code: -32700, message: "Parse error" },
      },
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json; charset=utf-8",
        },
      },
    );
  }

  const messages = Array.isArray(body) ? body : [body];
  const responses = messages
    .map((msg) => handleMcpJsonRpc(msg as never))
    .filter((r) => r !== null);

  if (responses.length === 0) {
    return new Response(null, {
      status: 202,
      headers: corsHeaders,
    });
  }

  const payload = Array.isArray(body) ? responses : responses[0];

  return Response.json(payload, {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
      "MCP-Protocol-Version": "2025-03-26",
    },
  });
}
