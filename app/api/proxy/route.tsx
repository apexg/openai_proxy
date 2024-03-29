import { NextResponse } from 'next/server';

import OpenAI from 'openai';

// gets API Key from environment variable OPENAI_API_KEY
const openai = new OpenAI();




export async function POST(req: Request) {
  const { url, params = {}, headers = {} } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  console.log("Request:", { url, params, headers });

  return fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,      
    },   
    method: POST,
    body: params,
  });
}
