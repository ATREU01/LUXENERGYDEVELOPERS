import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
export const runtime = "edge"
const Lead = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  zip: z.string().optional(),
  notes: z.string().optional()
})
export async function POST(req: NextRequest){
  const data = await req.json().catch(()=>null)
  const parse = Lead.safeParse(data)
  if(!parse.success){
    return NextResponse.json({ ok:false, error: parse.error.flatten() }, { status: 400 })
  }
  // Optional: email via Resend (set env vars and uncomment)
  // const { Resend } = await import("resend")
  // const resend = new Resend(process.env.RESEND_API_KEY!)
  // await resend.emails.send({
  //   from: "LUX <noreply@luxbuildingventures.com>",
  //   to: process.env.TO_EMAIL!,
  //   subject: "New Quote Request",
  //   text: JSON.stringify(parse.data,null,2)
  // })
  return NextResponse.json({ ok:true })
}

