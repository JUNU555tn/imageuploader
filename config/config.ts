// ✅ Deployment Webhook URL (for reference)
export const WEBHOOK_URL = "https://fast-rabbit-22.deno.dev/";

// ✅ Bot Token
export const BOT_TOKEN = "7562073845:AAGCAUayfyy0WlW_BkcVEH7kPeSQAvgsitc";
console.log("Bot Token:", BOT_TOKEN);

// ✅ IMGBB Upload Proxy
export const IMGBB_UPLOAD_URL = "https://api-integretion-unblocked.vercel.app/imgbb";

// ✅ Subscription Check Bot Token
export const SUBSCRIPTION_CHECK_BOT_TOKEN = BOT_TOKEN;

// ✅ Telegram Channel Username
export const CHANNEL_USERNAME = "@ROCKERSBACKUP"; // Must start with "@"

// ✅ Developer's Telegram ID
export const DEVELOPER_ID = 7855536617;

// ✅ Welcome Image for Bot /start
export const WELCOME_IMAGE_URL = "https://i.imghippo.com/files/GdN9496KmY.jpg";

// ✅ Clean Channel Username (without "@")
export const CLEAN_USERNAME = CHANNEL_USERNAME.replace(/@/g, '');

// ✅ MongoDB URI with automatic authMechanism
export const MONGO_URI = (() => {
  const uri = "mongodb+srv://kumari:kumari@cluster0.zo4kzlj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  if (!uri.includes("authMechanism=")) {
    const separator = uri.includes("?") ? "&" : "?";
    return `${uri}${separator}authMechanism=SCRAM-SHA-1`;
  }
  return uri;
})();
console.log("Mongo URI:", MONGO_URI);

// ✅ Whether to use DB
export const USE_DB = Boolean(MONGO_URI);

// ✅ Validate required constants
const requiredVars = [
  ["BOT_TOKEN", BOT_TOKEN],
  ["CHANNEL_USERNAME", CHANNEL_USERNAME]
];

requiredVars.forEach(([name, value]) => {
  if (!value) {
    throw new Error(`Missing required variable: ${name}`);
  }
});

if (!CHANNEL_USERNAME.startsWith("@")) {
  throw new Error('Invalid CHANNEL_USERNAME: it must start with "@"');
}
" "
