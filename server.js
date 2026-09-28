require('dotenv').config();
const express = require('express');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get('/health', (req, res) => {
  res.json({ ok: true, message: 'StudySnap API is running.' });
});

app.post('/api/study', async (req, res) => {
  const { question, mode } = req.body || {};

  if (!question || !question.trim()) {
    return res.status(400).json({
      error: 'Please enter a question or topic before asking for help.'
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: 'Missing OPENAI_API_KEY. Add it to your .env file.'
    });
  }

  const studyMode = mode || 'Study Guide';

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.7,
      messages: [
        {
          role: 'system',
          content:
            'You are a calm and encouraging study coach. Help students understand concepts step by step. Keep explanations clear, supportive, and focused on learning, not shortcuts.'
        },
        {
          role: 'user',
          content: `Study mode: ${studyMode}\n\nStudent question: ${question}`
        }
      ]
    });

    const answer = completion.choices?.[0]?.message?.content?.trim();

    if (!answer) {
      return res.status(500).json({
        error: 'OpenAI returned an empty response. Please try again.'
      });
    }

    res.json({ answer });
  } catch (error) {
    console.error('OpenAI request failed:', error);

    res.status(500).json({
      error: 'The OpenAI request failed. Please check your API key and try again.'
    });
  }
});

app.listen(port, () => {
  console.log(`StudySnap server running on http://localhost:${port}`);
});
