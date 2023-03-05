# Piton-Assignment

### İlk önce projeyi inceledim figmadan tasarım bakış acısında bulundum, ve bana gerekli olan kütüphaneleri not aldım ve araştırdım , nextjs başlıyalım yaklaşık 3 hafta filan oldu ve tamamıyla hakim değildim , sonra gerekli araştırmalarımı yaparak bana gerekli materyalleri bitirdim ve projeye başladım .

# projeyi başlatma

```jsx
 npx create-next-app@latest
```

## ve bu işlemden sonra gerekli olan kütüphaneleri indirmeye geldi sıra

```jsx
npm i @reduxjs/toolkit react-redux formik yup react-icons tailwindcss ...
```

### İndirmiş olduğum bu kütüphaneleri anlatamak gerekirse

- redux : state management
- formik , yup : form control
- react-icons : iconlar
- tailwindcss : style

### Projemde ilk gereksiz dosyaları temizledim sonra hiyerarşik yapıyı kurgulamaya başladım , öncelikle giriş yapma ve kayıt olma sayfaları yaptım sonrasında ise redux yapısını kurguladım ve kategorileri ve onlara ait ürünleri çektim. Tabi bu biraz sıkıntıylı çünkü ürünleri listeleyemedim bunun için alternatif çözümler ürettim ve ilk fetch işlemini yaptıkdan sonra category datasında gelen category.idleri aldim ve her bir ürüne categoryId ekledim . sonrasinda ise <code>filter()</code> array fonksiyonu kullanarak eşleştirme yaptım ve veriyi düzenli ve güzel bir şekilde elde ettim .
