// pages/api/medium.js
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

// CORS için middleware'i başlat
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST'], // İzin verilen metodlar
    origin: '*', // Tüm kaynaklardan gelen isteklere izin ver
  })
);

export default async function handler(req, res) {
  // CORS middleware'ini çalıştır
  await cors(req, res);

  // API işlemleri burada gerçekleştirilir
  try {
    // API çağrısı ve sonuç işleme
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
