import cors from 'cors';
import express from 'express';
import path from 'path';
import routes from './routes';
const PORT = process.env.PORT || 4000;

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
