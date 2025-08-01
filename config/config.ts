// Updated Environment Variables
export const BOT_TOKEN = "7562073845:AAGCAUayfyy0WlW_BkcVEH7kPeSQAvgsitc";
console.log(BOT_TOKEN);

export const IMGBB_UPLOAD_URL = "https://api-integretion-unblocked.vercel.app/imgbb";
export const SUBSCRIPTION_CHECK_BOT_TOKEN = BOT_TOKEN;

export const CHANNEL_USERNAME = "@ROCKERSBACKUP"; // example -> @Private_Bots
export const DEVELOPER_ID = 7855536617;
export const WELCOME_IMAGE_URL = "https://i.imghippo.com/files/GdN9496KmY.jpg";

// Validate required variables
const requiredVars = ["BOT_TOKEN", "CHANNEL_USERNAME"];
requiredVars.forEach((varName) => {
  const value = eval(varName);
  if (!value) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});

if (!CHANNEL_USERNAME.startsWith("@")) {
  throw new Error('Invalid CHANNEL_USERNAME: it must start with "@"');
}

// MongoDB URI with fallback for authMechanism
export const MONGO_URI = (() => {
  const uri = "mongodb+srv://kumari:kumari@cluster0.zo4kzlj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  if (!uri.includes("authMechanism=")) {
    const separator = uri.includes("?") ? "&" : "?";
    return `${uri}${separator}authMechanism=SCRAM-SHA-1`;
  }
  return uri;
})();
console.log(MONGO_URI);

export const USE_DB = Boolean(MONGO_URI);
export const CLEAN_USERNAME = CHANNEL_USERNAME.replace(/@/g, '');
