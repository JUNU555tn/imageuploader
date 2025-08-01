import { serve } from "https://deno.land/std@0.195.0/http/server.ts";
import { BotController } from "./controllers/bot.controller.ts";

// ✅ Compatible with Deno Deploy (runs on edge)
serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const update = await req.json();
    console.log("📩 Incoming update:", JSON.stringify(update, null, 2)); // Debug log
    return await BotController.handleUpdate(update);
  } catch (error) {
    console.error("❌ Server error:", error);
    return new Response("Internal Error", { status: 500 });
  }
});

console.log("🚀 Bot server running");
