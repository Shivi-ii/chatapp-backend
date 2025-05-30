const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://chatapp-frontend-ten-sage.vercel.app",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
