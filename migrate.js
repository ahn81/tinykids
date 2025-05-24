import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Tüm veri kaynaklarını birleştir
const dbData = {
  // Ürünler (örnek format)
  products: [
    {
      id: 1,
      name: "Örnek Ürün",
      price: 99.99,
      category_id: 1
    }
  ],
  
  // Kategoriler (örnek format)
  categories: [
    {
      id: 1,
      name: "Elektronik"
    }
  ],
  
  // Diğer veriler
  users: []
};

// 2. db.json'ı güncelle
try {
  const dbPath = path.join(__dirname, 'db.json');
  fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));
  console.log('Tüm veriler başarıyla db.json\'a aktarıldı!');
} catch (error) {
  console.error('Aktarım hatası:', error);
}
