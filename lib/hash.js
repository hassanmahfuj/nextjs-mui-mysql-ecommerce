import { createHmac } from "crypto";

export default function hash(password) {
  return createHmac("sha256", process.env.HASH_SECRET)
    .update(password)
    .digest("hex");
}
