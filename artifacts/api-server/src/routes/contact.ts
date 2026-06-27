import { Router } from "express";
import { db } from "@workspace/db";
import { contactSubmissionsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input", details: parsed.error.issues });
    return;
  }
  const { name, email, phone, subject, message } = parsed.data;
  const [submission] = await db
    .insert(contactSubmissionsTable)
    .values({ name, email, phone, subject: subject ?? null, message })
    .returning();
  res.status(201).json(submission);
});

export default router;
