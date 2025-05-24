# 🧸 Tiny Kids E-Ticaret Sitesi

Modern, responsive ve kullanıcı dostu çocuk ürünleri e-ticaret platformu.

## 🌟 Özellikler

### 🛍️ E-Ticaret Özellikleri
- **Ürün Kataloğu**: Kategorilere göre düzenlenmiş ürün listesi
- **Gelişmiş Arama**: Filtreleme ve sıralama seçenekleri
- **Sepet Yönetimi**: Gerçek zamanlı sepet güncellemeleri
- **Favoriler**: Beğenilen ürünleri kaydetme
- **Ödeme Sistemi**: Güvenli ödeme seçenekleri
- **Sipariş Takibi**: Sipariş durumu ve kargo takibi

### 👤 Kullanıcı Yönetimi
- **Kayıt/Giriş**: E-posta ile hesap oluşturma
- **Profil Yönetimi**: Kişisel bilgi güncelleme
- **Adres Defteri**: Birden fazla adres kaydetme
- **Sipariş Geçmişi**: Geçmiş siparişleri görüntüleme

### 🎨 Tasarım ve UX
- **Responsive Tasarım**: Mobil, tablet ve desktop uyumlu
- **Modern UI**: Çocuk dostu renkler ve animasyonlar
- **Accessibility**: Erişilebilirlik standartlarına uygun
- **Performance**: Hızlı yükleme ve smooth animasyonlar

### 🔧 Admin Paneli
- **Ürün Yönetimi**: CRUD işlemleri
- **Kategori Yönetimi**: Kategori düzenleme
- **Sipariş Yönetimi**: Sipariş durumu güncelleme
- **Kullanıcı Yönetimi**: Müşteri bilgileri
- **Raporlar**: Satış ve analitik raporları

## 🛠️ Teknoloji Stack

### Frontend
- **React 18+** - Modern UI kütüphanesi
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animasyonlar
- **Zustand** - State management
- **React Router v6** - Routing
- **React Hook Form** - Form yönetimi
- **Zod** - Schema validation
- **Lucide React** - İkonlar

### Backend (Planlanan)
- **Node.js + Express.js** - Server framework
- **MongoDB + Mongoose** - Database
- **JWT** - Authentication
- **Multer + Cloudinary** - File upload
- **Joi/Zod** - Validation

### Ödeme ve Kargo
- **İyzico** - Ödeme sistemi
- **Yurtiçi Kargo API** - Kargo entegrasyonu
- **Aras Kargo API** - Alternatif kargo

## 🎨 Renk Paleti

```css
Primary: #FF6B8A (Pembe)
Secondary: #4ECDC4 (Turkuaz)
Accent: #FFE66D (Sarı)
Neutral: #F7F7F7 (Açık Gri)
Dark: #2C3E50 (Koyu Mavi)
Success: #2ECC71 (Yeşil)
Warning: #F39C12 (Turuncu)
Error: #E74C3C (Kırmızı)
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/your-username/tiny-kids-ecommerce.git
cd tiny-kids-ecommerce
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Environment variables ayarlayın**
```bash
cp .env.example .env
```

4. **Development server'ı başlatın**
```bash
npm run dev
```

5. **Tarayıcıda açın**
```
http://localhost:5173
```

## 📁 Proje Yapısı

```
tiny-kids-ecommerce/
├── public/                 # Static files
│   ├── assets/            # Images, icons
│   └── index.html
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # UI components
│   │   ├── layout/       # Layout components
│   │   ├── auth/         # Auth components
│   │   └── admin/        # Admin components
│   ├── pages/            # Page components
│   │   ├── admin/        # Admin pages
│   │   └── ...
│   ├── store/            # Zustand stores
│   ├── types/            # TypeScript types
│   ├── data/             # Mock data
│   ├── utils/            # Helper functions
│   ├── hooks/            # Custom hooks
│   └── styles/           # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.js
```

## 🎯 Önemli Sayfalar

### Müşteri Sayfaları
- **Ana Sayfa** (`/`) - Hero, kategoriler, öne çıkan ürünler
- **Kategori** (`/kategori/:slug`) - Ürün listesi ve filtreler
- **Ürün Detay** (`/urun/:slug`) - Ürün bilgileri ve sepete ekleme
- **Sepet** (`/sepet`) - Sepet içeriği ve güncelleme
- **Ödeme** (`/odeme`) - Checkout süreci
- **Profil** (`/profil`) - Kullanıcı bilgileri ve siparişler

### Admin Sayfaları
- **Dashboard** (`/admin`) - Genel istatistikler
- **Ürünler** (`/admin/urunler`) - Ürün yönetimi
- **Siparişler** (`/admin/siparisler`) - Sipariş yönetimi
- **Kullanıcılar** (`/admin/kullanicilar`) - Müşteri yönetimi

## 🔧 Geliştirme Komutları

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint

# Type checking
npm run type-check

# JSON Server (mock API)
npm run server

# Both dev server and JSON server
npm run dev:all
```

## 🎨 Stil Rehberi

### Tailwind CSS Sınıfları
```css
/* Custom utility classes */
.btn-primary { @apply bg-primary text-white hover:bg-primary/90; }
.btn-secondary { @apply bg-secondary text-white hover:bg-secondary/90; }
.card-hover { @apply hover:shadow-medium hover:-translate-y-1; }
.text-gradient { @apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent; }
```

### Animasyonlar
- **Fade In**: Sayfa geçişleri
- **Hover Effects**: Kartlar ve butonlar
- **Loading States**: Shimmer efektleri
- **Smooth Transitions**: Tüm etkileşimler

## 🔒 Güvenlik

- **HTTPS**: Zorunlu SSL
- **JWT**: Secure token authentication
- **Input Validation**: Tüm form girişleri
- **XSS Protection**: Sanitized inputs
- **CORS**: Configured properly

## 📊 Performance

- **Code Splitting**: Route-based splitting
- **Lazy Loading**: Images ve components
- **Caching**: API responses
- **Optimization**: Bundle size optimization

## 🌐 SEO

- **Meta Tags**: Dynamic meta tags
- **Open Graph**: Social media sharing
- **Structured Data**: Schema.org markup
- **Sitemap**: XML sitemap
- **Page Speed**: Optimized loading

## 📱 PWA (Planlanan)

- **Service Worker**: Offline support
- **App Manifest**: Install prompt
- **Push Notifications**: Order updates
- **Offline Mode**: Basic functionality

## 🧪 Testing (Planlanan)

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Cypress
- **E2E Tests**: Playwright
- **Performance Tests**: Lighthouse CI

## 📈 Analytics (Planlanan)

- **Google Analytics**: User behavior
- **E-commerce Tracking**: Sales data
- **Performance Monitoring**: Core Web Vitals
- **Error Tracking**: Sentry integration

## 🚀 Deployment

### Vercel (Önerilen)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Email**: info@tinykids.com
- **Website**: https://tinykids.com
- **GitHub**: https://github.com/your-username/tiny-kids-ecommerce

## 🙏 Teşekkürler

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) - Demo görseller için

---

**Tiny Kids** - Çocukların mutluluğu için! 🧸✨
