# ReactJS Dasar
[https://docs.google.com/presentation/d/1HmgGmA1LpK78pF3ECQMSDrXEjk6wAgR5yaQxrbR6E18/edit](https://docs.google.com/presentation/d/1HmgGmA1LpK78pF3ECQMSDrXEjk6wAgR5yaQxrbR6E18/edit)

# Pengenalan
## Kenapa Butuh Framework?
- Mungkin menjadi pertanyaan, kenapa kita butuh framework untuk membuat web Frontend?
- Salah satu alasannya adalah agar ada standarisasi saat membuat project terutama ketika bekerja dalam tim
- Tanpa adanya Framework, maka setiap orang akan membuat kode dengan gaya masing-masing

## Sejarah ReactJS
- FaxJS mulai dikembangkan di Facebook sekitar tahun 2010 untuk menangani masalah update halaman feed / timeline di Facebook tanpa harus refresh
- Tahun 2011, FaxJS diintegrasikan dengan XHP (pengembangan PHP di Facebook), yang akhirnya dinamai ReactJS
- Tahun 2013, Facebook merilis ReactJS ke umum sebagai OpenSource Tool pada saat JavaScript Conference
- Saat ini, ReactJS menjadi salah satu Frontend Framework yang paling populer, dan orang banyak memanggilnya dengan React
- [https://github.com/facebook/react](https://github.com/facebook/react)
- [https://react.dev/](https://react.dev/)


## Component
- Saat belajar React, kita harus terbiasa dengan istilah Component
- Component adalah kumpulan kode yang bisa digunakan secara independen
- Component bisa berisikan satu atau lebih HTML Element, kode JavaScript dan CSS
- Tidak ada aturan harus seberapa kecil atau besar sebuah Component
- Anggap saja seperti membuat Function, kita bisa membuat Function yang besar, atau kecil, karena tujuan Function adalah agar bisa digunakan secara berulang-ulang, begitu juga tujuan dari Component
- Struktur Component mirip seperti DOM (Document Object Model), dimana kita bisa membuat Component di dalam Component lain

## JSX
- React menggunakan JSX ketika membuat Component
- JSX (JavaScript XML atau JavaScript Syntax Extension), adalah kombinasi kode JavaScript dan XML (HTML), dimana kita bisa membuat Component dengan mudah menggunakan kode XML dan JavaScript dalam satu file
- JSX diperkenalkan oleh Facebook di React, namun saat ini JSX sudah banyak diadopsi oleh banyak Framework JavaScript lainnya

# Membuat Project
## Membuat Project
- Untuk membuat project React, kita akan menggunakan Vite sebagai build tool nya
- Kita bisa membuat project React menggunakan beberapa perintah
- Untuk membuat project React menggunakan JavaScript :
```bash
npm create vite@latest nama-aplikasi -- --template react
```
- Untuk membuat project React menggunakan TypeScript :
```bash
npm create vite@latest nama-aplikasi -- --template react-ts
```
- [https://vite.dev/guide/#scaffolding-your-first-vite-project](https://vite.dev/guide/#scaffolding-your-first-vite-project)

## Update versi ReactJS
- Pastikan menggunakan ReactJS yang terbaru
- [https://www.npmjs.com/package/react](https://www.npmjs.com/package/react)
- [https://www.npmjs.com/package/react-dom](https://www.npmjs.com/package/react-dom)

# Hello World
## Hello World
- Seperti biasa, hal yang biasa kita buat ketika belajar adalah membuat aplikasi Hello World
- Sekarang kita akan buat halaman Hello World menggunakan React

## Membuat Component
- Biasanya, Component akan dibuat dalam satu file JSX dengan nama sesuai dengan nama komponen nya
- Misal kita akan membuat Component bernama HelloWorld
- Maka kita bisa membuat file HelloWorld.jsx
- Selanjutnya, kita perlu membuat default function dengan nama Component nya, yaitu HelloWorld
- Return dari function tersebut adalah element UI yang akan ditampilkan

## Menampilkan Component
- Untuk menampilkan Component, diperlukan instance dari React Root
- Kita bisa membuat React Root menggunakan method createRoot(element)
- [https://react.dev/reference/react-dom/client/createRoot](https://react.dev/reference/react-dom/client/createRoot)
- Selanjutnya untuk menampilkan Component di React Root, kita bisa gunakan method render(component)
- Untuk membantu mencari masalah saat development, React menyediakan component StrictMode, kita bisa menggunakan StrictMode untuk menampilkan komponen di Root
- [https://react.dev/reference/react/StrictMode](https://react.dev/reference/react/StrictMode)

## Command
```bash
# untuk build production
npm run build

# untuk development hot reload
npm run dev
```

contoh di file :
- [src/hello-world/HelloWorld.jsx](src/hello-world/HelloWorld.jsx)
- [src/hello-world/main.jsx](src/hello-world/main.jsx)
- [hello-world.html](hello-world.html)
- [vite.config.js](vite.config.js)

# Component
## Component
- React Component mendukung semua elemen HTML dan SVG
- Jadi kita tidak perlu khawatir ketika membuat Component, karena semua elemen pasti didukung
- [https://react.dev/reference/react-dom/components](https://react.dev/reference/react-dom/components)

## Multiple Component
- Sebelumnya kita membuat satu file JSX untuk satu Component
- Walaupun itu adalah praktek yang baik, tapi bukan berarti itu wajib dilakukan
- Component sebenarnya hanyalah sebuah function yang mengembalikan React Element, oleh karena itu jika kita ingin membuat Component, kita hanya cukup membuat function yang mengembalikan React Element

contoh di file :
- [src/hello-world/HelloWorld.jsx](src/hello-world/HelloWorld.jsx)


# JSX
## Kenapa JSX
- Web dibuat menggunakan HTML, CSS dan JavaScript. Biasanya kita akan menyimpan konten di HTML, desain di CSS dan logika aplikasi di JavaScript. Dan biasanya kita akan simpan di file-file yang terpisah
- Tapi saat ini, Web sudah lebih interaktif, seringnya konten HTML ditampilkan berdasarkan logika aplikasi di JavaScript
- Oleh karena itu, React melakukan logika aplikasi dan membuat konten di satu tempat yang sama, JSX

## Mengubah HTML ke JSX
- Saat mengubah kode HTML ke JSX, kita tidak bisa lakukan semudah Copy Paste kodenya
- JSX memiliki aturan yang lebih ketat dibanding HTML, contohnya saat menggunakan tag element, wajib menggunakan tag tutup
- Misal kita tidak bisa menggunakan 
```html
<img src=””>
```
- Kita harus gunakan tag tutup ketika menggunakan JSX
```html
<img src=”” />
```
- Beberapa attribute di tag element pun berbeda. Kita akan bahas secara bertahap

## Aturan JSX
- Component hanya boleh mengembalikan satu element, jika kita ingin mengembalikan beberapa element, kita harus bungkung dalam parent element
- Wajib menutup semua tag element
- Attribute menggunakan camelCase. Attribute di element JSX akan dikonversi ke variable JavaScript, oleh karena itu nama attribute harus mengikuti cara pembuatan nama variable di JavaScript, yaitu tidak bisa menggunakan - (strip). Karena keterbatasan ini, kebanyakan attribute di element JSX akan menggunakan camelCase, contoh className (bukan class-name)

## JSX Converter
- Jika misal kita sudah punya kode HTML, dan ingin mengkonversi ke JSX
- Disarankan menggunakan Converter sehingga kita tidak perlu lakukan secara manual lagi
- [https://transform.tools/html-to-jsx](https://transform.tools/html-to-jsx)


# JavaScript di JSX
## JavaScript di JSX
- Kadang-kadang, kita kasus dimana kita ingin mengakses kode JavaScript di JSX
- Pada kasus ini, kita bisa menggunakan kurung kurawal untuk mengakses kode JavaScript di JSX

## Kurung Kurawal di JSX
- Penggunaan kurung kurawal di JSX hanya bisa dilakukan pada dua lokasi
- Sebagai teks, seperti pada contoh sebelumnya
- Sebagai nilai atribut pada tag element, misal <img src={location} />

## Kurung Kurawal Double pada JSX
- Pada beberapa attribute, contohnya style. Kita bisa menggunakan JavaScript Object sebagai parameter
- Oleh karena itu, kadang sekilas terlihat seperti kurung kurawal double, padahal sebenarnya hanya satu - kurung kurawal, dan datanya adalah JavaScript Object


contoh di file :
- [src/hello-world/HelloWorld.jsx](src/hello-world/HelloWorld.jsx)


# Props
## Props
- React Component menggunakan Props untuk berkomunikasi
- Parent Component bisa mengirim informasi ke Child Component dengan menggunakan Props
- Props itu mirip seperti attribute di HTML Element, tapi kita bisa mengirim nilai JavaScript seperti object, array, function atau yang lainnya


## Menambah Props
- Untuk menambahkan Props pada Component, kita hanya perlu menambahkan parameter object pada function di Component
- Parameter Props tersebut merupakan JavaScript Object, sehingga kita bisa mengakses detail attribute yang dikirim dari parent melalui Props

## Destructuring Props
- Salah satu yang biasa dilakukan oleh programmer React adalah, melakukan destructuring parameter pada Props
- Hal ini untuk mempermudah ketika membaca, sehingga kita tahu attribute apa yang tersedia pada Component tersebut
- Karena Props adalah JavaScript Object, jadi kita juga bisa menambahkan fitur seperti Default Value pada Props

## Mengirim Props
- Untuk mengirim Props, kita bisa menggunakan atribut seperti HTML Element ketika menggunakan Component

## Spread Syntax
- Kadang-kadang, mengirim Props dari Parent Component ke Child Component sangat merepotkan
- Jika kita hanya ingin melakukan forward semua Props ke Child Component, kita bisa menggunakan Spread Syntax di JavaScript


contoh di file :
- [src/hello-world/HelloWorld.jsx](src/hello-world/HelloWorld.jsx)


# Nested Component
## Nested Component
- JSX mendukung pembuatan Nested Component
- Hal ini memungkinkan kita bisa membuat Component yang di dalamnya bisa ditambahkan Component lain secara dinamis
- Agar component bisa memiliki Component lain didalamnya, kita bisa menggunakan attribute children pada Props
- Misal sekarang kita akan membuat Component bernama Container, dan didalamnya kita bisa berisi Component lainnya


contoh di file :
- [src\container\container.jsx](src\container\container.jsx)
- [src/hello-world/main.jsx](src/hello-world/main.jsx)


# Style
## Style
- Sampai saat ini, kita hanya baru membahas HTML dan JavaScript di JSX, bagaimana dengan CSS?
- CSS sendiri bukan bagian dari JSX, jika kita ingin membuat style CSS, maka kita perlu buat dalam file - CSS, atau langsung di attribute style menggunakan kurung kurawal double yang pernah dicontohkan sebelumnya
- Namun sekarang kita akan coba dalam file CSS
- Menggunakan Style pada JSX, tidak menggunakan atribut class, melainkan className
- [https://react.dev/reference/react-dom/components/common#applying-css-styles](https://react.dev/reference/react-dom/components/common#applying-css-styles)

contoh di file :
- [src\hello-world\HelloWorld.css](src\hello-world\HelloWorld.css)
- [src\hello-world\HelloWorld.jsx](src\hello-world\HelloWorld.jsx)

# Conditional
## Conditional
- Saat kita membuat halaman Web, sering sekali kita menampilkan tampilan berbeda pada kondisi tertentu
- Hal ini juga bisa dilakukan di JSX
- Kita bisa menambahkan kondisi menggunakan JavaScript, dan mengembalikan Component yang berbeda berdasarkan kondisi yang diinginkan
- Contoh kita akan membuat halaman TodoList, dan jika Todo nya susah selesai, kita akan coret element teks nya

## Null Component
- Pada kasus tertentu, mungkin ada kondisi dimana kita ingin mengembalikan Component, atau tidak ingin mengembalikan Component apapun
- Kita bisa mengembalikan null untuk menandai bahwa tidak ada Component yang kita kembalikan

## Ternary Operator
- Kadang pada kasus yang lebih sederhana, kita bisa menggunakan Ternary Operator JavaScript di JSX

## Logical AND
- Di beberapa kasus yang lebih sederhana, kadang di JSX sering memanfaatkan Logical AND di JavaScript
- Misal jika kondisi terpenuhi maka akan menampilkan, jika tidak maka tidak menampilkan

contoh di file :
- [src\todolist\Todo.jsx](src\todolist\Todo.jsx)
- [src\todolist\TodoList.jsx](src\todolist\TodoList.jsx)
- [src\hello-world\main.jsx](src\hello-world\main.jsx)


# Collection Component
## Collection Component
- Kita pasti akan sering menampilkan Component yang sama berkali-kali sesuai koleksi data. JSX sendiri tidak memiliki fitur perulangan
- Untuk menampilkan multiple Component, sama seperti Conditional, kita akan memanfaatkan JavaScript
- Kita bisa menggunakan JavaScript Array untuk mengubah data Array menjadi Component, misal menggunakan method map() pada Array
- Misal sekarang kita akan coba ubah data TodoList yang sebelumnya kita buat menjadi array 

## Component Key
- Jika kita perhatikan di Text Editor, mungkin kita akan melihat pesan peringatan : “Missing key prop for element in iterator”
- Saat membuat Collection Component, tiap Component diperlukan id (unique, string atau number) menggunakan attribute key
- Kenapa butuh Component Key? Hal ini agar React bisa mengenali Component ketika berubah, seperti posisinya diubah, dihapus atau ditambahkan pada Collection
- Biasanya, Component Key akan diambil dari data, sehingga lebih konsisten


*note : jsx tidak mempunyai fitur perulangan

contoh di file :
- [src\todolist\TodoList.jsx](src\todolist\TodoList.jsx)


# Pure Component
## Pure Function
- Dalam pemrograman, kita mengenal yang namanya Pure Function
- [https://en.wikipedia.org/wiki/Pure_function](https://en.wikipedia.org/wiki/Pure_function)
- Sebuah Function kita sebut sebagai Pure Function jika memenuhi dua kriteria berikut :
- Function akan mengembalikan nilai yang sama untuk nilai parameter yang sama
- Function tidak memiliki efek samping, tidak ada perubahan pada variable non local (variable yang berada diluar function)

```js
// contoh pure function
export function double(num){
    return num * 2
}

// contoh tidak pure function
let counter = 0;
export function increment() {
    counter++
    return counter;
}
```

## Pure Component
- React mengasumsikan bahwa setiap Component yang kita buat adalah Pure Function. 
- Ini berarti bahwa React Component yang kita buat harus selalu mengembalikan JSX yang sama dengan input yang sama
- Walaupun sebenarnya kita bisa saja membuat React Component yang tidak Pure, tapi sangat tidak disarankan, karena setiap memanggil Component dengan input sama bisa menghasilkan nilai yang tidak konsisten
- Kita akan coba membuat contoh React Component yang tidak Pure

## Membuat Pure Component
- Lantas bagaimana acara Component Row dan Table menjadi Pure Component?
- Kita harus menghapus efek samping dari Component, contohnya kita bisa pindahkan variable counter menjadi local variable di Table, dan gunakan Props sebagai counter nya


## Dimana bisa melakukan efek samping?
- React menyediakan tempat khusus jika kita ingin membuat Component yang bisa menghasilkan efek samping
- Efek samping dari Component biasanya ditempatkan di Event Handler, yaitu aksi yang terjadi ketika kita berinteraksi dengan Component
- Atau ketika misal Component tergantung dengan external system (misal API), maka React menyediakan function useEffect()
- [https://react.dev/reference/react/useEffect](https://react.dev/reference/react/useEffect)
- Semua ini akan kita bahas di materinya masing-masing


contoh di file :
- [src\hello-world\main.jsx](src\hello-world\main.jsx)
- [src\table\Table.jsx](src\table\Table.jsx)
- [src\table\Row.jsx](src\table\Row.jsx)


# Event Handler
## Event Handler
- Seperti yang sudah kita tahu bahwa di HTML Element, kita bisa menambahkan Event Handler
- Sama juga dengan React Component, kita bisa menambahkan Event Handler pada Element di React Component
- Ada banyak sekali jenis Event Handler yang bisa kita tambahkan, kita bisa lihat di halaman Reference React Component
- [https://react.dev/reference/react-dom/components/common](https://react.dev/reference/react-dom/components/common)

## Menambah Event Handler
- Untuk menambah Event Handler, biasanya kita akan tambahkan Function sebagai Handler nya
- Bisa dalam bentuk Anonymous Function, Arrow Function atau membuat Function terlebih dahulu di dalam scope Component nya
- Nama Function untuk Handler biasanya diawali dengan nama “handle” dan diikuti dengan jenis Event Handler, misal handleClick(), handleMouseEnter(), dan lain-lain
- Sekarang kita akan coba membuat Component untuk Alert Button

## Membaca Props di Event Handler
- Salah satu keuntungan membuat Function Event Handler di dalam Component adalah, kita bisa membaca Props yang digunakan oleh Component tersebut

## Event Handler sebagai Props
- Seperti yang di materi Props dibahas, Props sebenarnya adalah JavaScript Object
- Kita tahu bahwa JavaScript Object bisa memiliki attribute dengan tipe Function
- Oleh karena itu, kita juga bisa membuat Event Handler di Props
- Saat membuat attribute di Props yang berisikan Event Handler, biasanya nama attribute nya akan diawali dengan “on”, misal “onSmash”, “onHit” dan lain-lain






contoh di file :
- [src\hello-world\main.jsx](src\hello-world\main.jsx)
- [src\button\AlertButton.jsx](src\button\AlertButton.jsx)