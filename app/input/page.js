"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form Schema - Zod ile validation kuralları
const FormSchema = z.object({
  email: z.string().email({
    message: "Geçerli bir email adresi girin.",
  }),
  password: z.string().min(6, {
    message: "Şifre en az 6 karakter olmalı.",
  }),
  username: z.string().min(2, {
    message: "Kullanıcı adı en az 2 karakter olmalı.",
  }),
});

export default function InputPage() {
  const [formData, setFormData] = useState({
    search: '',
    showPassword: false
  });

  // React Hook Form ile form yönetimi
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  function onSubmit(data) {
    console.log("Form Data:", data);
    alert(`Form başarıyla gönderildi!\nEmail: ${data.email}\nKullanıcı: ${data.username}`);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🔤 shadcn/ui Input Bileşeni Rehberi</h1>
          <Link href="/">
            <Button variant="outline" size="sm">← Ana Sayfa</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto p-8 max-w-6xl">
        {/* GİRİŞ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Input Bileşeni Detaylı İnceleme</h2>
          <p className="text-muted-foreground text-lg mb-6">
            shadcn/ui Input bileşeninin tüm özellikleri, input türleri, validation yöntemleri ve teknik detayları
          </p>
        </section>

        {/* 1. TEMEL KULLANIM */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Temel Kullanım</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Kod:</h3>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm">{`import { Input } from "@/components/ui/input"

<Input placeholder="Adınızı girin" />
<Input type="email" placeholder="Email adresiniz" />
<Input type="password" placeholder="Şifreniz" />`}</pre>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">Sonuç:</h3>
              <div className="space-y-3 p-4 bg-card border rounded-lg">
                <Input placeholder="Adınızı girin" />
                <Input type="email" placeholder="Email adresiniz" />
                <Input type="password" placeholder="Şifreniz" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. INPUT TÜRLERI */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Input Türleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Text Input */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Text Input</h3>
              <Input type="text" placeholder="Metin girin" className="mb-3" />
              <p className="text-sm text-muted-foreground mb-3">
                Varsayılan input türü. Herhangi bir metin girişi için kullanılır.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">type="text"</code>
            </div>

            {/* Email Input */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Email Input</h3>
              <Input type="email" placeholder="email@example.com" className="mb-3" />
              <p className="text-sm text-muted-foreground mb-3">
                Email doğrulama ve klavye optimizasyonu sağlar.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">type="email"</code>
            </div>

            {/* Password Input */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Password Input</h3>
              <Input type="password" placeholder="Şifrenizi girin" className="mb-3" />
              <p className="text-sm text-muted-foreground mb-3">
                Metni gizler ve güvenlik için optimize edilmiştir.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">type="password"</code>
            </div>

            {/* Number Input */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Number Input</h3>
              <Input type="number" placeholder="Sayı girin" min="0" max="100" className="mb-3" />
              <p className="text-sm text-muted-foreground mb-3">
                Sadece sayı girişine izin verir. min/max değerleri destekler.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">type="number"</code>
            </div>

            {/* Date Input */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Date Input</h3>
              <Input type="date" className="mb-3" />
              <p className="text-sm text-muted-foreground mb-3">
                Tarih seçici açar. Tarayıcı native date picker'ı kullanır.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">type="date"</code>
            </div>

            {/* Search Input */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Search Input</h3>
              <Input type="search" placeholder="Arama yapın..." className="mb-3" />
              <p className="text-sm text-muted-foreground mb-3">
                Arama özelliği için optimize edilmiş. Temizleme butonu ekler.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">type="search"</code>
            </div>

            {/* File Input */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">File Input</h3>
              <Input type="file" accept=".jpg,.png,.pdf" className="mb-3" />
              <p className="text-sm text-muted-foreground mb-3">
                Dosya seçimi için. accept ile dosya türü sınırlaması yapılabilir.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">type="file"</code>
            </div>

            {/* URL Input */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">URL Input</h3>
              <Input type="url" placeholder="https://example.com" className="mb-3" />
              <p className="text-sm text-muted-foreground mb-3">
                URL formatı doğrulama ve klavye optimizasyonu sağlar.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">type="url"</code>
            </div>
          </div>
        </section>

        {/* 3. TEKNİK DETAYLAR */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Teknik Detaylar - Props ve Özellikler</h2>
          
          {/* React forwardRef Açıklaması */}
          <div className="bg-muted p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-lg mb-3">🔧 React.forwardRef Nedir?</h3>
            <p className="mb-4">
              Input bileşeni <code>React.forwardRef</code> kullanır. Bu sayede parent component'ler input'a direct referans alabilir.
            </p>
            <pre className="bg-card p-4 rounded-lg text-sm overflow-x-auto">{`const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn("flex h-9 w-full rounded-md border...", className)}
      ref={ref}
      {...props}
    />
  )
})`}</pre>
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
                    <td className="p-2"><code>type</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">"text"</td>
                    <td className="p-2">Input türü (text, email, password, etc.)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>placeholder</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Input içinde gösterilecek ipucu metni</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>value</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Input değeri (controlled component için)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>defaultValue</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Başlangıç değeri (uncontrolled component için)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>onChange</code></td>
                    <td className="p-2">function</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Değer değiştiğinde çalışan fonksiyon</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>onFocus</code></td>
                    <td className="p-2">function</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Input focus aldığında çalışan fonksiyon</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>onBlur</code></td>
                    <td className="p-2">function</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Input focus kaybettiğinde çalışan fonksiyon</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>disabled</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Input'u devre dışı bırak</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>readOnly</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Input'u sadece okunabilir yap</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>required</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Input'u zorunlu alan yap</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">""</td>
                    <td className="p-2">Ek CSS class'ları</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2"><code>ref</code></td>
                    <td className="p-2">React.Ref</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Input element'ine referans</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. VALIDATION ÖRNEKLERİ - Zod + React Hook Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Validation (Doğrulama) - Zod + React Hook Form</h2>
          
          {/* Zod Schema Detaylı Açıklama */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-lg mb-3 text-blue-800 dark:text-blue-200">🛡️ Zod Schema - Detaylı Açıklama</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Zod Nedir?</h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                  Zod, JavaScript ve TypeScript için bir schema validation kütüphanesidir. 
                  Form verilerini kontrol etmek ve hata mesajları göstermek için kullanılır.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Schema Nasıl Çalışır?</h4>
                <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto mb-3">{`const FormSchema = z.object({
  // Bu bir "obje" şeması - form verilerini tanımlar
  
  email: z.string()           // Email bir string olmalı
    .email({                  // Ve email formatında olmalı
      message: "Geçerli bir email adresi girin.",
    }),
  
  password: z.string()        // Şifre bir string olmalı
    .min(6, {                 // Ve minimum 6 karakter olmalı
      message: "Şifre en az 6 karakter olmalı.",
    }),
  
  username: z.string()        // Kullanıcı adı bir string olmalı
    .min(2, {                 // Ve minimum 2 karakter olmalı
      message: "Kullanıcı adı en az 2 karakter olmalı.",
    }),
});`}</pre>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Zod Validation Türleri:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <h5 className="font-medium text-sm mb-1">String Validations</h5>
                    <pre className="text-xs overflow-x-auto">{`z.string()                    // String olmalı
z.string().min(5)             // Min 5 karakter
z.string().max(20)            // Max 20 karakter
z.string().email()            // Email formatı
z.string().url()              // URL formatı
z.string().regex(/^[A-Z]+$/)  // Sadece büyük harf`}</pre>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <h5 className="font-medium text-sm mb-1">Number Validations</h5>
                    <pre className="text-xs overflow-x-auto">{`z.number()                    // Sayı olmalı
z.number().min(0)             // Min 0
z.number().max(100)           // Max 100
z.number().int()              // Tam sayı
z.number().positive()         // Pozitif sayı`}</pre>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <h5 className="font-medium text-sm mb-1">Boolean & Date</h5>
                    <pre className="text-xs overflow-x-auto">{`z.boolean()                   // true/false
z.date()                      // Tarih objesi
z.date().min(new Date())      // Bugünden sonra`}</pre>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <h5 className="font-medium text-sm mb-1">Optional & Default</h5>
                    <pre className="text-xs overflow-x-auto">{`z.string().optional()        // Opsiyonel alan
z.string().default("test")    // Varsayılan değer
z.string().nullable()         // null olabilir`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* React Hook Form Detaylı Açıklama */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-lg mb-3 text-green-800 dark:text-green-200">📋 React Hook Form - Detaylı Açıklama</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-green-800 dark:text-green-200">React Hook Form Nedir?</h4>
                <p className="text-green-700 dark:text-green-300 text-sm mb-3">
                  React Hook Form, minimal re-render ile performanslı form yönetimi sağlar. 
                  Geleneksel form yönetiminden çok daha hızlı çalışır ve daha az kod yazmanızı sağlar.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-green-800 dark:text-green-200">useForm Hook'u - Her Parametre Açıklaması</h4>
                <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto mb-3">{`const form = useForm({
  // resolver: Validation için hangi kütüphane kullanılacak
  resolver: zodResolver(FormSchema),
  
  // defaultValues: Form açıldığında inputlarda ne yazacak
  defaultValues: {
    email: "",           // Email input'u boş başlasın
    password: "",        // Password input'u boş başlasın
    username: "",        // Username input'u boş başlasın
  },
  
  // mode: Ne zaman validation yapılacak
  mode: "onChange",      // Her değişiklikte validate et
  // mode: "onSubmit",   // Sadece submit'te validate et
  // mode: "onBlur",     // Input'tan çıkıldığında validate et
  
  // reValidateMode: Hata var iken nasıl validation yapılacak
  reValidateMode: "onChange", // Hata varken her değişiklikte kontrol et
});`}</pre>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-green-800 dark:text-green-200">useForm'dan Dönen Değerler:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <h5 className="font-medium text-sm mb-1">Form Kontrolü</h5>
                    <pre className="text-xs overflow-x-auto">{`form.control          // Form kontrolü (FormField için)
form.handleSubmit     // Form submit handler
form.reset()          // Formu sıfırla
form.setValue()       // Input değerini set et
form.getValues()      // Tüm form değerlerini al`}</pre>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <h5 className="font-medium text-sm mb-1">Form Durumu</h5>
                    <pre className="text-xs overflow-x-auto">{`form.formState.errors      // Hata mesajları
form.formState.isValid     // Form geçerli mi?
form.formState.isSubmitting // Submit ediliyor mu?
form.formState.isDirty     // Form değişti mi?
form.formState.isLoading   // Yükleniyor mu?`}</pre>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-green-800 dark:text-green-200">zodResolver Nedir?</h4>
                <p className="text-green-700 dark:text-green-300 text-sm mb-3">
                  zodResolver, Zod schema'sını React Hook Form ile birleştiren bir adapter'dir. 
                  Bu sayede Zod validation kuralları React Hook Form tarafından kullanılabilir.
                </p>
                <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">{`import { zodResolver } from "@hookform/resolvers/zod"

// Zod schema'sını React Hook Form'a bağla
const form = useForm({
  resolver: zodResolver(FormSchema), // Zod + React Hook Form birleşimi
});`}</pre>
              </div>
            </div>
          </div>

          {/* shadcn/ui Form Bileşenleri Açıklaması */}
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-lg mb-3 text-purple-800 dark:text-purple-200">🎨 shadcn/ui Form Bileşenleri</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-purple-800 dark:text-purple-200">Form Bileşenleri Nedir?</h4>
                <p className="text-purple-700 dark:text-purple-300 text-sm mb-3">
                  shadcn/ui, React Hook Form ile uyumlu hazır form bileşenleri sunar. 
                  Bu bileşenler accessibility, styling ve validation'u otomatik olarak handle eder.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-purple-800 dark:text-purple-200">Her Bileşenin Görevi:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <h5 className="font-medium text-sm mb-1">Form Yapısı</h5>
                    <pre className="text-xs overflow-x-auto">{`<Form {...form}>           // Form provider
  <form onSubmit={...}>    // HTML form element
    <FormField             // Her input için wrapper
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>         // Input container
          <FormLabel>      // Label element
          <FormControl>    // Input wrapper
          <FormDescription> // Yardım metni
          <FormMessage />  // Hata mesajı
        </FormItem>
      )}
    />
  </form>
</Form>`}</pre>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <h5 className="font-medium text-sm mb-1">Props Açıklamaları</h5>
                    <pre className="text-xs overflow-x-auto">{`// Form
{...form}              // useForm'dan dönen tüm props

// FormField
control={form.control} // Form kontrolü
name="username"        // Input adı (schema'daki key)
render={({ field }) => // Input'u render et
  
// field objesi içinde:
field.onChange         // Input değiştiğinde çağrıl
field.onBlur           // Input'tan çıkıldığında
field.value            // Input'un mevcut değeri
field.name             // Input'un adı
field.ref              // Input'a referans`}</pre>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-purple-800 dark:text-purple-200">Adım Adım Form Yapısı:</h4>
                <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">{`// 1. Form Provider - Bütün form'u sarar
<Form {...form}>

  // 2. HTML Form Element - Submit eventi yakalar
  <form onSubmit={form.handleSubmit(onSubmit)}>

    // 3. Form Field - Her input için tekrar eder
    <FormField
      control={form.control}        // Form kontrolü
      name="username"               // Zod schema'daki alan adı
      render={({ field }) => (      // Input'u render et
      
        // 4. Form Item - Input container
        <FormItem>
        
          // 5. Form Label - Input etiketi
          <FormLabel>Kullanıcı Adı</FormLabel>
          
          // 6. Form Control - Input wrapper
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          
          // 7. Form Description - Yardım metni
          <FormDescription>
            Bu sizin herkese açık görünen adınız.
          </FormDescription>
          
          // 8. Form Message - Hata mesajı
          <FormMessage />
          
        </FormItem>
      )}
    />
    
    // 9. Submit Button
    <Button type="submit">Gönder</Button>
    
  </form>
</Form>`}</pre>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-medium mb-4">📝 Çalışan Form Örneği</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kullanıcı Adı</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        Bu sizin herkese açık görünen adınız.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        Bu email adresiniz ile giriş yapacaksınız.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Şifre</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="En az 6 karakter" {...field} />
                      </FormControl>
                      <FormDescription>
                        Güvenli bir şifre seçin.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">Gönder</Button>
              </form>
            </Form>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Tam Kod Örneği:</h4>
              <pre className="text-xs overflow-x-auto">{`import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Geçerli bir email adresi girin.",
  }),
  password: z.string().min(6, {
    message: "Şifre en az 6 karakter olmalı.",
  }),
})

export function InputForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`}</pre>
            </div>
          </div>
        </section>

        {/* 5. GELİŞMİŞ ÖRNEKLER */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Gelişmiş Kullanım Örnekleri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Disabled Input */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Disabled Input</h3>
              <Input placeholder="Bu input disabled" disabled className="mb-3" />
              <Input value="Değer var ama disabled" disabled className="mb-3" />
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">{`<Input placeholder="Bu input disabled" disabled />
<Input value="Değer var ama disabled" disabled />`}</pre>
            </div>

            {/* ReadOnly Input */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">ReadOnly Input</h3>
              <Input value="Bu sadece okunabilir" readOnly className="mb-3" />
              <Input value="Kopyalanabilir ama düzenlenemez" readOnly className="mb-3" />
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">{`<Input value="Bu sadece okunabilir" readOnly />
<Input value="Kopyalanabilir ama düzenlenemez" readOnly />`}</pre>
            </div>

            {/* Custom Styling */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Özel Styling</h3>
              <Input placeholder="Büyük input" className="h-12 text-lg mb-3" />
              <Input placeholder="Renkli border" className="border-blue-500 focus:border-blue-600 mb-3" />
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">{`<Input 
  placeholder="Büyük input" 
  className="h-12 text-lg" 
/>
<Input 
  placeholder="Renkli border" 
  className="border-blue-500 focus:border-blue-600" 
/>`}</pre>
            </div>

            {/* Input with Label */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Label ile Kullanım</h3>
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium">
                  Kullanıcı Adı
                </label>
                <Input id="username" placeholder="Kullanıcı adınızı girin" />
              </div>
              <pre className="mt-3 bg-muted p-3 rounded text-xs overflow-x-auto">{`<label htmlFor="username" className="block text-sm font-medium">
  Kullanıcı Adı
</label>
<Input id="username" placeholder="Kullanıcı adınızı girin" />`}</pre>
            </div>
          </div>
        </section>

        {/* 6. ICON VE BUTON İLE ÖZEL KULLANIMLAR */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Icon ve Buton ile Özel Kullanımlar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Input with Icon */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Search Input + Icon</h3>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <Input 
                  type="search" 
                  placeholder="Arama yapın..." 
                  className="pl-10" 
                />
              </div>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`<div className="relative">
  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground">
    {/* search icon */}
  </svg>
  <Input 
    type="search" 
    placeholder="Arama yapın..." 
    className="pl-10" 
  />
</div>`}</pre>
            </div>

            {/* Email Input with Validation */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Email Input + Validation</h3>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <Input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="pl-10"
                  onChange={(e) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const isValid = emailRegex.test(e.target.value);
                    e.target.style.borderColor = isValid ? '#22c55e' : '#ef4444';
                  }}
                />
              </div>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`<div className="relative">
  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4">
    {/* email icon */}
  </svg>
  <Input 
    type="email" 
    placeholder="email@example.com" 
    className="pl-10"
    onChange={(e) => {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      const isValid = emailRegex.test(e.target.value);
      e.target.style.borderColor = isValid ? '#22c55e' : '#ef4444';
    }}
  />
</div>`}</pre>
            </div>

            {/* Password Input with Show/Hide */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Password + Show/Hide Button</h3>
              <div className="relative">
                <Input 
                  type={formData.showPassword ? "text" : "password"}
                  placeholder="Şifrenizi girin"
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }))}
                >
                  {formData.showPassword ? (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`const [showPassword, setShowPassword] = useState(false);

<div className="relative">
  <Input 
    type={showPassword ? "text" : "password"}
    placeholder="Şifrenizi girin"
    className="pr-10"
  />
  <button
    type="button"
    className="absolute right-3 top-1/2 transform -translate-y-1/2"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
  </button>
</div>`}</pre>
            </div>

            {/* Search with Clear Button */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Search + Clear Button</h3>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <Input 
                  type="search" 
                  placeholder="Arama yapın..." 
                  className="pl-10 pr-10"
                  value={formData.search}
                  onChange={(e) => setFormData(prev => ({ ...prev, search: e.target.value }))}
                />
                {formData.search && (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setFormData(prev => ({ ...prev, search: '' }))}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`<div className="relative">
  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4">
    {/* search icon */}
  </svg>
  <Input 
    type="search" 
    placeholder="Arama yapın..." 
    className="pl-10 pr-10"
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
  />
  {searchValue && (
    <button
      type="button"
      className="absolute right-3 top-1/2 transform -translate-y-1/2"
      onClick={() => setSearchValue('')}
    >
      <XIcon />
    </button>
  )}
</div>`}</pre>
            </div>

            {/* Input with Action Button */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Input + Action Button</h3>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Email adresinizi girin" 
                  className="flex-1"
                />
                <Button type="button" onClick={() => alert('Email gönderildi!')}>
                  Gönder
                </Button>
              </div>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`<div className="flex gap-2">
  <Input 
    type="email" 
    placeholder="Email adresinizi girin" 
    className="flex-1"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <Button type="button" onClick={handleSubmit}>
    Gönder
  </Button>
</div>`}</pre>
            </div>

            {/* Input Group with Prefix */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium mb-3">Input Group + Prefix</h3>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                  https://
                </span>
                <Input 
                  type="url" 
                  placeholder="www.example.com" 
                  className="rounded-l-none"
                />
              </div>
              <pre className="mt-4 bg-muted p-3 rounded text-xs overflow-x-auto">{`<div className="flex">
  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
    https://
  </span>
  <Input 
    type="url" 
    placeholder="www.example.com" 
    className="rounded-l-none"
  />
</div>`}</pre>
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
                <li>• Her input için açıklayıcı <code>placeholder</code> kullan</li>
                <li>• Doğru <code>type</code> seç (email, password, etc.)</li>
                <li>• Gerekli alanlar için <code>required</code> attribute ekle</li>
                <li>• Label'ları <code>htmlFor</code> ile input'lara bağla</li>
                <li>• Validation mesajlarını kullanıcı dostu yap</li>
                <li>• Keyboard navigation desteği sağla</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
              <h3 className="font-medium mb-3 text-red-800 dark:text-red-200">❌ Kaçınılması Gerekenler</h3>
              <ul className="space-y-2 text-sm">
                <li>• Çok küçük input alanları (touch için)</li>
                <li>• Belirsiz placeholder metinleri</li>
                <li>• Validation olmadan form submit etme</li>
                <li>• Çok fazla zorunlu alan</li>
                <li>• Tema sistemini bozan custom renkler</li>
                <li>• Accessibility attribute'larını unutmak</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ÖZET */}
        <section className="mb-12 bg-card border rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">📚 Özet</h2>
          <p className="text-muted-foreground mb-4">
            shadcn/ui Input bileşeni, React.forwardRef ile güçlendirilmiş, 
            tüm HTML input özelliklerini destekleyen, tamamen özelleştirilebilir modern bir input component'idir.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Input placeholder="Text input" className="w-48" />
            <Input type="email" placeholder="Email input" className="w-48" />
            <Input type="password" placeholder="Password input" className="w-48" />
            <Input type="number" placeholder="Number input" className="w-48" />
          </div>
        </section>
      </div>
    </div>
  );
}