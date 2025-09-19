// app/api/debug/connections/route.js
import mongoose from "mongoose";

export const runtime = "nodejs";

export async function GET() {
  // لا نحتاج لإعادة الاتصال هنا — نفترض أن بعض الراوتات نادَت mongoose.connect بالفعل
  const details = {
    total: mongoose.connections.length,
    readyState: mongoose.connection.readyState,
    connections: mongoose.connections.map((c, i) => ({
      index: i,
      readyState: c.readyState,
      host: c.host,
      port: c.port,
      name: c.name,
    })),
  };

  return new Response(JSON.stringify(details), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
