export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const response = await fetch(process.env.N8N_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) throw new Error();

    return res.status(200).json({ ok: true });

  } catch (error) {
    return res.status(500).json({ error: 'Erro ao enviar' });
  }
}
