import { Router, type IRouter } from "express";

const router: IRouter = Router();

const APPS_SCRIPT_URL =
  process.env["GOOGLE_SHEETS_WEBHOOK_URL"] ||
  "https://script.google.com/macros/s/AKfycbzD2vpizAM4hzm1SY340sLfYl8abrgZh4tbYc82Fwukm4GBCj-vxBo10DpzpM9vUQwaIA/exec";

router.post("/waitlist", async (req, res) => {
  const { email } = req.body as { email?: string };

  if (!email || typeof email !== "string" || !email.includes("@")) {
    res.status(400).json({ success: false, error: "Valid email required" });
    return;
  }

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      req.log.warn({ status: response.status }, "Apps Script returned non-OK status");
    }

    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to forward waitlist submission to Google Sheets");
    res.status(500).json({ success: false, error: "Failed to record submission" });
  }
});

export default router;
