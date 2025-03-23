import { createJWT } from "@/lib/auth";

export async function POST(request) {
  const { username, password } = await request.json();

  if (username == "elxan" && password == "elxan123") {
    const token = await createJWT({ username });

    return new Response(JSON.stringify({ message: "logged in :)" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=3600`,
      },
    });
  }

  return new Response(
    JSON.stringify({ message: "Invalid username or password" }),
    {
      status: 401,
    }
  );
}
