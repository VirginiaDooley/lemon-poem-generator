import express from 'express';
import chatCompletion from './services/openai.js';

const app = express();

app.use(express.static('docs'));

app.get(
    '/get-poem',
    async (req, res) => {
        const response = await chatCompletion(
            "Write a short, expressive poem about lemons, as if you are hungry, but sprinkle it with lyrics from Beyonce songs. Just four lines!"
        );
        res.send({ poem: response });
    }
);

app.get(
    '/test',
    async (req, res) => {
        const response = await chatCompletion("Provide an amusing sentence.");
        res.send(response);
    }
);

export default app;