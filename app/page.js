import { Button } from "@/components/ui/button";
import { ThemeSwitcher, AdvancedThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🎨 shadcn/ui Öğretim Platformu</h1>
          <div className="flex gap-4 items-center">
            <ThemeSwitcher />
            <AdvancedThemeSwitcher />
          </div>
        </div>
      </header>

      <div className="container mx-auto p-8 max-w-6xl">
        {/* GİRİŞ */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">shadcn/ui Bileşen Kütüphanesi</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Modern, özelleştirilebilir ve hibrit renk sistemine sahip UI bileşenleri
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg">Başlayalım</Button>
            <Button variant="outline" size="lg">Dokümantasyon</Button>
            <Button variant="ghost" size="lg">GitHub</Button>
          </div>
        </section>

        {/* BİLEŞENLER GRİDİ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">🧩 Bileşenler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Button Kartı */}
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Button</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Tamamlandı</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Tıklanabilir butonlar. 9 farklı variant, 4 boyut seçeneği, hibrit renk sistemi.
              </p>
              <div className="flex gap-2 mb-4">
                <Button size="sm">Demo</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="confirm" size="sm">Confirm</Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">9 variant • CVA • Slot</span>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/buttons">Detaylar →</Link>
                </Button>
              </div>
            </div>

            {/* Input Kartı - Yakında */}
            <div className="bg-card border rounded-lg p-6 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Input</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Yakında</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Metin giriş alanları. Validation, placeholder, farklı türler.
              </p>
              <div className="flex gap-2 mb-4">
                <div className="h-8 bg-muted rounded w-20"></div>
                <div className="h-8 bg-muted rounded w-16"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Types • Validation • Form</span>
                <Button disabled variant="ghost" size="sm">
                  Yakında
                </Button>
              </div>
            </div>

            {/* Select Kartı - Yakında */}
            <div className="bg-card border rounded-lg p-6 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Select</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Yakında</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Dropdown seçici. Multiple selection, search, custom options.
              </p>
              <div className="flex gap-2 mb-4">
                <div className="h-8 bg-muted rounded w-24"></div>
                <div className="h-8 bg-muted rounded w-20"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Dropdown • Multi • Search</span>
                <Button disabled variant="ghost" size="sm">
                  Yakında
                </Button>
              </div>
            </div>

            {/* Modal Kartı - Yakında */}
            <div className="bg-card border rounded-lg p-6 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Modal</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Yakında</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Overlay popup'lar. Dialog, drawer, alert gibi türler.
              </p>
              <div className="flex gap-2 mb-4">
                <div className="h-8 bg-muted rounded w-16"></div>
                <div className="h-8 bg-muted rounded w-20"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Dialog • Drawer • Alert</span>
                <Button disabled variant="ghost" size="sm">
                  Yakında
                </Button>
              </div>
            </div>

            {/* Form Kartı - Yakında */}
            <div className="bg-card border rounded-lg p-6 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Form</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Yakında</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Form yönetimi. Validation, error handling, submission.
              </p>
              <div className="flex gap-2 mb-4">
                <div className="h-8 bg-muted rounded w-20"></div>
                <div className="h-8 bg-muted rounded w-24"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Validation • Error • Submit</span>
                <Button disabled variant="ghost" size="sm">
                  Yakında
                </Button>
              </div>
            </div>

            {/* Table Kartı - Yakında */}
            <div className="bg-card border rounded-lg p-6 opacity-60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Table</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Yakında</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Veri tabloları. Sorting, filtering, pagination.
              </p>
              <div className="flex gap-2 mb-4">
                <div className="h-8 bg-muted rounded w-full"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Sort • Filter • Pagination</span>
                <Button disabled variant="ghost" size="sm">
                  Yakında
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ÖZELLIKLER */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">✨ Özellikler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">🎨 Hibrit Renk Sistemi</h3>
              <p className="text-sm text-muted-foreground">
                Hem dinamik (tema ile değişen) hem de statik (sabit) renkler aynı anda kullanılabilir.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">🔧 CVA Entegrasyonu</h3>
              <p className="text-sm text-muted-foreground">
                Class Variance Authority ile güçlü variant sistemi ve conditional styling.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">🎯 Radix UI Slot</h3>
              <p className="text-sm text-muted-foreground">
                asChild prop ile component'in render edeceği HTML element'i değiştirilebilir.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">🌙 Dark Mode</h3>
              <p className="text-sm text-muted-foreground">
                Otomatik tema algılama ve localStorage ile tema kalıcılığı.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">📱 Responsive</h3>
              <p className="text-sm text-muted-foreground">
                Tüm cihazlarda mükemmel görünüm ve touch-friendly tasarım.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">♿ Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                ARIA attributes, keyboard navigation ve screen reader desteği.
              </p>
            </div>
          </div>
        </section>

        {/* HIZLI BAŞLAMA */}
        <section className="bg-muted rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-4">🚀 Hızlı Başlama</h2>
          <p className="text-muted-foreground mb-6">
            shadcn/ui bileşenlerini projenizde nasıl kullanacağınızı öğrenin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">1. Kurulum</h3>
              <pre className="bg-card p-4 rounded-lg text-sm overflow-x-auto">
                <code>npm install @radix-ui/react-slot class-variance-authority</code>
              </pre>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">2. Kullanım</h3>
              <pre className="bg-card p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`import { Button } from "@/components/ui/button"

<Button variant="default">Click me</Button>`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-8 border-t">
          <p className="text-muted-foreground">
            shadcn/ui öğretim platformu - Modern UI bileşenlerini öğrenin
          </p>
        </footer>
      </div>
    </div>
  );
}
