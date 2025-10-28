import { drizzleDb } from "."
import { postsTable } from "./schemas"
//npx drizzle-kit push
(async () => {
  const posts = await drizzleDb.select().from(postsTable)
  console.log(posts)
})();
