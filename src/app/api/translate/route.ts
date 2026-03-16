export async function POST(request: Request) {
  const { text } = await request.json();

  const response = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: [text],
      target_lang: "EN",
    }),
  });

  if (!response.ok) {
    return Response.json(
      { error: "翻訳に失敗しました" },
      { status: response.status },
    );
  }

  const data = await response.json();
  const translatedText = data.translations[0].text;

  return Response.json({ translatedText });
}
