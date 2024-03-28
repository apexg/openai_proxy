import { NextResponse } from 'next/server';

import OpenAI from 'openai';

// gets API Key from environment variable OPENAI_API_KEY
const openai = new OpenAI();




export async function POST(req: Request) {
  const { url, params = {}, headers = {} } = await req.json();

  console.log("Request:", { url, params, headers });

  try {  

    const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: params.prompt }],
      stream: true,
     });

    console.log("Response:", response .choices[0]?.message?.content);

    return NextResponse.json(response .choices[0]?.message?.content);
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({ message: error.message });
  }
}
