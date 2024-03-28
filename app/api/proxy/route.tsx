import { NextResponse } from 'next/server';

import OpenAI from 'openai';

// gets API Key from environment variable OPENAI_API_KEY
const openai = new OpenAI();




export async function POST(req: Request) {
  const { url, params = {}, headers = {} } = await req.json();

  console.log("Request:", { url, params, headers });

  return fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      "Content-Type": "application/json",
      Authorization: Bearer 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,      
    },
    method: req.method,
    body: params.prompt,
  });
}
