import jsonServer from 'json-server';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Özel upload endpointi
server.post('/upload', (req, res) => {
  // Burada resim yükleme işlemlerini gerçekleştirin
  res.json({ success: true, message: 'Dosya başarıyla yüklendi' });
});

server.use('/api', router);
server.listen(3004, () => {
  console.log('JSON Server 3004 portunda çalışıyor');
});
