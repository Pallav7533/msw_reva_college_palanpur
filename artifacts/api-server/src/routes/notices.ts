import { Router } from "express";
import { db } from "@workspace/db";
import { noticesTable } from "@workspace/db";
import { desc } from "drizzle-orm";

const router = Router();

router.get("/notices", async (req, res) => {
  const notices = await db
    .select()
    .from(noticesTable)
    .orderBy(desc(noticesTable.createdAt));
  res.json(notices);
});

router.get("/notices/latest", async (req, res) => {
  const notices = await db
    .select()
    .from(noticesTable)
    .orderBy(desc(noticesTable.createdAt))
    .limit(5);
  res.json(notices);
});

export default router;
