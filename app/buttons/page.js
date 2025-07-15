"use client"

import { Button } from "@/components/ui/button";
import { ConfirmButton, CancelButton, WarningButton } from "@/components/action-buttons";
import Link from "next/link";

export default function ButtonsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">📘 shadcn/ui Button Bileşeni Rehberi</h1>
          <Link href="/">
            <Button variant="outline" size="sm">← Ana Sayfa</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto p-8 max-w-6xl">
        {/* GİRİŞ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Button Bileşeni Detaylı İnceleme</h2>
          <p className="text-muted-foreground text-lg mb-6">
            shadcn/ui Button bileşeninin tüm özellikleri, özelleştirme yöntemleri ve teknik detayları
          </p>
        </section>

        {/* 1. TEMEL KULLANIM */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Temel Kullanım</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Kod:</h3>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm">{`import { Button } from "@/components/ui/button"

<Button>Varsayılan Button</Button>
<Button variant="secondary">İkincil Button</Button>
<Button variant="destructive">Silme Button</Button>`}</pre>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Sonuç:</h3>
              <div className="space-y-3 p-4 bg-card border rounded-lg">
                <Button>Varsayılan Button</Button>
                <Button variant="secondary">İkincil Button</Button>
                <Button variant="destructive">Silme Button</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TÜM VARIANTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Tüm Variant Türleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Default */}
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">default</h3>
              <Button variant="default" className="w-full mb-2">Default Button</Button>
              <p className="text-sm text-muted-foreground">
                Ana aksiyonlar için kullanılır. Primary renk kullanır.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">variant="default"</code>
            </div>

            {/* Secondary */}
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">secondary</h3>
              <Button variant="secondary" className="w-full mb-2">Secondary Button</Button>
              <p className="text-sm text-muted-foreground">
                İkincil aksiyonlar için. Daha az dikkat çeken stil.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">variant="secondary"</code>
            </div>

            {/* Destructive */}
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">destructive</h3>
              <Button variant="destructive" className="w-full mb-2">Destructive Button</Button>
              <p className="text-sm text-muted-foreground">
                Silme, iptal gibi tehlikeli aksiyonlar için.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">variant="destructive"</code>
            </div>

            {/* Outline */}
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">outline</h3>
              <Button variant="outline" className="w-full mb-2">Outline Button</Button>
              <p className="text-sm text-muted-foreground">
                Kenarlıklı buton. İkincil aksiyonlar için alternatif.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">variant="outline"</code>
            </div>

            {/* Ghost */}
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">ghost</h3>
              <Button variant="ghost" className="w-full mb-2">Ghost Button</Button>
              <p className="text-sm text-muted-foreground">
                Minimal görünüm. Menü öğeleri veya küçük aksiyonlar için.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">variant="ghost"</code>
            </div>

            {/* Link */}
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">link</h3>
              <Button variant="link" className="w-full mb-2">Link Button</Button>
              <p className="text-sm text-muted-foreground">
                Link görünümlü buton. Navigasyon için kullanışlı.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">variant="link"</code>
            </div>

            {/* 🆕 Confirm */}
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">confirm (Yeni!)</h3>
              <Button variant="confirm" className="w-full mb-2">Confirm Button</Button>
              <p className="text-sm text-muted-foreground">
                Onaylama aksiyonları için. Yeşil renk kullanır.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">variant="confirm"</code>
            </div>

            {/* 🆕 Cancel */}
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">cancel (Yeni!)</h3>
              <Button variant="cancel" className="w-full mb-2">Cancel Button</Button>
              <p className="text-sm text-muted-foreground">
                İptal aksiyonları için. Kırmızı renk kullanır.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">variant="cancel"</code>
            </div>

            {/* 🆕 Warning */}
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">warning (Yeni!)</h3>
              <Button variant="warning" className="w-full mb-2">Warning Button</Button>
              <p className="text-sm text-muted-foreground">
                Uyarı aksiyonları için. Sarı/turuncu renk kullanır.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">variant="warning"</code>
            </div>
          </div>
        </section>

        {/* 3. BOYUT SEÇENEKLERİ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Boyut Seçenekleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">Small (sm)</h3>
              <Button size="sm" className="mb-2">Small Button</Button>
              <code className="text-xs bg-muted px-2 py-1 rounded">size="sm"</code>
            </div>

            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">Default</h3>
              <Button size="default" className="mb-2">Default Button</Button>
              <code className="text-xs bg-muted px-2 py-1 rounded">size="default"</code>
            </div>

            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">Large (lg)</h3>
              <Button size="lg" className="mb-2">Large Button</Button>
              <code className="text-xs bg-muted px-2 py-1 rounded">size="lg"</code>
            </div>

            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-medium mb-2">Icon</h3>
              <Button size="icon" className="mb-2">🔥</Button>
              <code className="text-xs bg-muted px-2 py-1 rounded">size="icon"</code>
            </div>
          </div>
        </section>

        {/* 4. TEKNİK DETAYLAR */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Teknik Detaylar - CVA, Slot ve Props</h2>
          
          {/* CVA Açıklaması */}
          <div className="bg-muted p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-lg mb-3">🔧 CVA (Class Variance Authority) Nedir?</h3>
            <p className="mb-4">
              CVA, variant-based styling için kullanılan bir kütüphane. Tailwind class'larını organize etmeyi ve conditional styling yapmayı kolaylaştırır.
            </p>
            <pre className="bg-card p-4 rounded-lg text-sm overflow-x-auto">{`import { cva } from "class-variance-authority"

const buttonVariants = cva(
  // Base classes - her zaman uygulanır
  "inline-flex items-center justify-center rounded-md text-sm",
  {
    // Variants - conditional classes
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
      size: {
        sm: "h-8 px-3",
        default: "h-9 px-4",
      }
    },
    // Varsayılan değerler
    defaultVariants: {
      variant: "default",
      size: "default",
    }
  }
)`}</pre>
          </div>

          {/* Slot Açıklaması */}
          <div className="bg-muted p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-lg mb-3">🎯 Radix UI Slot Nedir?</h3>
            <p className="mb-4">
              Slot, component'in render edeceği HTML elementini değiştirmenizi sağlar. <code>asChild</code> prop'u ile aktif olur.
            </p>
            <pre className="bg-card p-4 rounded-lg text-sm overflow-x-auto">{`// Normal kullanım - <button> render eder
<Button>Click me</Button>

// asChild kullanımı - <a> render eder
<Button asChild>
  <a href="/about">About Page</a>
</Button>

// Next.js Link ile kullanım
<Button asChild>
  <Link href="/products">Products</Link>
</Button>`}</pre>
          </div>

          {/* Props Tablosu */}
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">📋 Tüm Props ve Açıklamaları</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Prop</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Default</th>
                    <th className="text-left p-2">Açıklama</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2"><code>variant</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">"default"</td>
                    <td className="p-2">Button görünüm stili</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>size</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">"default"</td>
                    <td className="p-2">Button boyutu</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>asChild</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Child element'i render et</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">""</td>
                    <td className="p-2">Ek CSS class'ları</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>disabled</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Button'u devre dışı bırak</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. ÖZELLEŞTİRME YÖNTEMLERİ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Özelleştirme Yöntemleri</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* className ile özelleştirme */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">className ile Özelleştirme</h3>
              <div className="space-y-3">
                <Button className="w-full bg-purple-500 hover:bg-purple-600">
                  Mor Button
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
                  Gradient Button
                </Button>
                <Button className="w-full rounded-full">
                  Yuvarlak Button
                </Button>
              </div>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`<Button className="bg-purple-500 hover:bg-purple-600">
  Mor Button
</Button>`}</pre>
            </div>

            {/* Wrapper Component */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Wrapper Component Yöntemi</h3>
              <div className="space-y-3">
                <ConfirmButton>Onaylama Button'u</ConfirmButton>
                <CancelButton>İptal Button'u</CancelButton>
                <WarningButton>Uyarı Button'u</WarningButton>
              </div>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`// Özel component oluştur
export function ConfirmButton({ children, ...props }) {
  return (
    <Button variant="confirm" {...props}>
      {children}
    </Button>
  )
}`}</pre>
            </div>
          </div>
        </section>

        {/* 6. GELİŞMİŞ ÖRNEKLER */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Gelişmiş Kullanım Örnekleri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Loading State */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Loading State</h3>
              <Button disabled className="w-full">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Yükleniyor...
              </Button>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`<Button disabled className="w-full">
  <svg className="animate-spin -ml-1 mr-2 h-4 w-4">
    {/* loading spinner SVG */}
  </svg>
  Yükleniyor...
</Button>`}</pre>
            </div>

            {/* Icon Buttons */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Icon Kullanımı</h3>
              <div className="flex gap-2">
                <Button size="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`<Button size="icon">
  <svg>...</svg>
</Button>
<Button variant="outline" size="icon">
  <svg>...</svg>
</Button>
<Button variant="ghost" size="icon">
  <svg>...</svg>
</Button>`}</pre>
            </div>

            {/* Button Group */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Button Group</h3>
              <div className="flex">
                <Button variant="outline" className="rounded-r-none">Birinci</Button>
                <Button variant="outline" className="rounded-none border-l-0">İkinci</Button>
                <Button variant="outline" className="rounded-l-none border-l-0">Üçüncü</Button>
              </div>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`<div className="flex">
  <Button variant="outline" className="rounded-r-none">
    Birinci
  </Button>
  <Button variant="outline" className="rounded-none border-l-0">
    İkinci
  </Button>
  <Button variant="outline" className="rounded-l-none border-l-0">
    Üçüncü
  </Button>
</div>`}</pre>
            </div>

            {/* asChild Örneği */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">asChild ile Link</h3>
              <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>💡 asChild Neden Önemli?</strong><br/>
                  • asChild olmadan: <code>&lt;button&gt;&lt;a&gt;&lt;/a&gt;&lt;/button&gt;</code> (hatalı HTML)<br/>
                  • asChild ile: <code>&lt;a&gt;&lt;/a&gt;</code> (doğru HTML + accessibility)
                </p>
              </div>
              <Button asChild variant="outline">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub'a Git →
                </a>
              </Button>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`<Button asChild variant="outline">
  <a href="https://github.com" target="_blank">
    GitHub'a Git →
  </a>
</Button>

// Next.js ile:
<Button asChild>
  <Link href="/about">About</Link>
</Button>`}</pre>
            </div>
          </div>
        </section>

        {/* 7. EN İYİ PRATİKLER */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. En İyi Pratikler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-lg">
              <h3 className="font-medium mb-3 text-green-800 dark:text-green-200">✅ Doğru Kullanımlar</h3>
              <ul className="space-y-2 text-sm">
                <li>• Ana aksiyonlar için <code>variant="default"</code></li>
                <li>• Tehlikeli işlemler için <code>variant="destructive"</code></li>
                <li>• Form submit için <code>type="submit"</code> ekle</li>
                <li>• Loading durumunda <code>disabled</code> kullan</li>
                <li>• Link için <code>asChild</code> + Link component</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
              <h3 className="font-medium mb-3 text-red-800 dark:text-red-200">❌ Kaçınılması Gerekenler</h3>
              <ul className="space-y-2 text-sm">
                <li>• Çok fazla custom className kullanmak</li>
                <li>• Link için sadece onClick kullanmak</li>
                <li>• Tema sistemini bozan hard-coded renkler</li>
                <li>• Çok küçük touch target (mobil için)</li>
                <li>• Accessibility attribute'larını unutmak</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ÖZET */}
        <section className="mb-12 bg-card border rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">📚 Özet</h2>
          <p className="text-muted-foreground mb-4">
            shadcn/ui Button bileşeni, CVA ile güçlendirilmiş, Radix UI Slot desteğine sahip, 
            tamamen özelleştirilebilir modern bir button component'idir.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button variant="confirm">Confirm</Button>
            <Button variant="cancel">Cancel</Button>
            <Button variant="warning">Warning</Button>
          </div>
        </section>
      </div>
    </div>
  );
}