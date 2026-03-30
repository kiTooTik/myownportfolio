import { NextResponse } from "next/server";

// Minimal in-memory rate limiting (simple protection; not persistent across serverless instances).
// Keyed by client IP.
const WINDOW_MS = 60_000;
const MAX_POINTS = 3;
const attemptsByIP = new Map<string, { count: number; firstAt: number; blockedUntil: number }>();

function consumeAttempt(clientIP: string) {
  const now = Date.now();
  const existing = attemptsByIP.get(clientIP);

  if (existing && now < existing.blockedUntil) {
    throw new Error("Too many attempts. Try again later.");
  }

  if (!existing || now - existing.firstAt > WINDOW_MS) {
    attemptsByIP.set(clientIP, { count: 1, firstAt: now, blockedUntil: 0 });
    return;
  }

  const nextCount = existing.count + 1;
  if (nextCount > MAX_POINTS) {
    attemptsByIP.set(clientIP, {
      count: nextCount,
      firstAt: existing.firstAt,
      blockedUntil: now + WINDOW_MS,
    });
    throw new Error("Too many attempts. Try again later.");
  }

  attemptsByIP.set(clientIP, { ...existing, count: nextCount });
}
export async function POST (req: Request){
    const clientIP =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    
    try {
        consumeAttempt(clientIP)

        const body = await req.json()
        const { passkey } = body

        if(passkey === process.env.ADMIN_PASSKEY){
            return NextResponse.json({success:true})
        } else {
            return NextResponse.json({success:false}, {status:401})
        }
    } catch(error){
        console.log(error);
        return NextResponse.json(
            {success:false,message:"Too many attempts. Try again later"},
            {status: 429}
        )
    }
}