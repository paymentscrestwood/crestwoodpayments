import { NextResponse } from "next/server";

/* Receives contact + application submissions.
 *
 * Right now this just validates and logs to the server console so the forms
 * work end-to-end locally. To actually receive leads in production, wire this
 * up to an email service or CRM — e.g. send with Resend, or forward to a
 * Google Sheet / HubSpot. Search for "TODO: deliver lead" below. */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();

  if (!name || !email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Please provide your name and a valid email." },
      { status: 422 },
    );
  }

  // TODO: deliver lead — replace this console.log with a real integration.
  console.log("[lead] new submission:", {
    ...data,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
