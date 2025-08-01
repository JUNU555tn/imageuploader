import { serve } from "https://deno.land/std@0.195.0/http/server.ts";
import { BotController } from "./controllers/bot.controller.ts";

console.log("🚀 Bot server starting...");

serve(async (req) => {
  if (req.method !== "POST") {
    console.log("❌ Invalid request method:", req.method);
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const update = await req.json();
    console.log("📥 Incoming update:", JSON.stringify(update, null, 2));
    return await BotController.handleUpdate(update);
  } catch (error) {
    console.error("❗ Server error:", error);
    return new Response("Internal Error", { status: 500 });
  }
});

console.log("🚀 Bot server running and ready to receive updates...");  
// Restart trigger
