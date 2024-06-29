import z from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
});

let env = { VITE_API_URL: "" };
try {
  env = envSchema.parse(import.meta.env);
} catch (e) {
  console.error(e);
  env = {
    VITE_API_URL: "http://localhost:3333",
  };
}
export { env };
