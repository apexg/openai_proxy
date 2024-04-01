import { NextRequest } from "next/server";

import OpenAI from 'openai';

// gets API Key from environment variable OPENAI_API_KEY
// const openai = new OpenAI();




export async function POST(req: NextRequest) {
 
  const apiKey = process.env.OPENAI_API_KEY;
  console.log("Request:", req);

  return fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,      
    },   
    method: req.method,
    body: req.body,
  });
}
