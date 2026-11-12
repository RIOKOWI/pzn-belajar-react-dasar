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
- [src\button\MyButton.jsx](src\button\MyButton.jsx)

# Event Object
## Event Object
- Saat kita membuat Event Handler Function, kita bisa menambahkan Event Object sebagai parameter di Function tersebut
- React Event Object kompatibel dengan standard DOM Event Object
- [https://react.dev/reference/react-dom/components/common#react-event-object](https://react.dev/reference/react-dom/components/common#react-event-object)
- [https://developer.mozilla.org/en-US/docs/Web/API/Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

contoh di file :
- [src\button\AlertButton.jsx](src\button\AlertButton.jsx)


# Event Propagation
## Event Propagation
- Event di React Component akan selalu disebarkan ke Component yang ada diatasnya (Event Propagation)
- Misal kita memiliki Div dengan Event onClick, lalu didalamnya kita memiliki Button dengan Event onClick
- Ketika Button di klik, maka onClick di Button akan dipicu dan selanjutnya onClick di Div juga akan dipicu
- Kadang mungkin kita tidak ingin hal itu terjadi, maka kita bisa hentikan proses Event Propagation tersebut menggunakan method stopPropagation()
- [https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)


## Prevent Default
- Selain menghentikan Event Propagation, hal yang biasa kita lakukan ketika membuat Event Handler adalah menghentikan default action menggunakan preventDefault()
- [https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault )
- Misal kita membuat Form, ketika di dipicu Event onClick, kita ingin hentikan default action Form Submit


contoh di file :
- [src\form\SearchForm.jsx](src\form\SearchForm.jsx)
- [src\hello-world\main.jsx ](src\hello-world\main.jsx)


# Side Effect
## Side Effect
- Apakah Component boleh memiliki Side Effect (efek samping)? 
- Tentu saja boleh, namun biasanya Side Effect terjadi dikarenakan adanya interaksi dari pengguna melalui Event Handler
- Misal, kita akan membuat Form Say Hello, dimana ketika Button di klik, kita ingin menampilkan Hello + nama pada Text 

## DOM Manipulation
- Kode sebelumnya, kita menggunakan DOM Manipulation untuk mengubah Component di React
- Hal ini sebenarnya tidak terlalu direkomendasikan, terutama jika misal data yang memicu perubahan Element di Component bersumber dari berbagai Event Handler
- Oleh karena itu, hal yang direkomendasikan adalah menggunakan State, yang akan kita bahas di materi selanjutnya


contoh di file :
- [src\form\SayHelloForm.jsx](src\form\SayHelloForm.jsx)
- [src\hello-world\main.jsx](src\hello-world\main.jsx)


# Hooks
## Hooks
- Hooks adalah fitur di React yang bisa digunakan di Component
- Ada banyak sekali fitur yang bisa kita gunakan di React Hooks, dan kita akan bahas secara bertahap
- [https://react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)


# State
## State
- Component kadang perlu untuk berubah dikarenakan interaksi yang dilakukan pengguna
- Misal, input di klik bisa menaikkan data counter. Tombol next bisa mengubah gambar banner yang sedang muncul, dan lain-lain
- Component harus bisa mengingat nilai saat ini, seperti counter saat ini, gambar saat ini, dan lain-lain
- Di React, memori spesific di Component disebut State

## State Menggunakan Local Variable Biasa
- Apakah local variabel biasa di Component bisa digunakan untuk State? Sayangnya hal ini tidak bisa dilakukan
- Ketika React melakukan render Component untuk yang kedua kali dan seterusnya, maka semua kode Component akan dieksekusi ulang, oleh karena itu local variable akan kembali ke nilai awal
- Perubahan di local variable juga, tidak akan memicu render ulang Component

## useState
- Untuk membuat State, kita bisa menggunakan function useState(initial)
- [https://react.dev/reference/react/useState](https://react.dev/reference/react/useState )
- Function useState akan mengembalikan array dengan dua nilai, pertama adalah State-nya, dan kedua ada function untuk mengubah value di State tersebut
- Component yang menggunakan State tersebut, secara otomatis akan di render ulang

## State Terisolasi dan Private
- State merupakan data yang terisolasi dan private secara local terhadap Component yang menggunakan
- Artinya, jika kita me-render Component yang sama berkali-kali, maka State dari tiap Component tersebut akan terpisah satu sama lain


contoh di file :
- [src\form\Counter.jsx](src\form\Counter.jsx)
- [src\hello-world\main.jsx](src\hello-world\main.jsx)

# Render
## Render
- Sebelum Component yang kita buat ditampilkan di layar, Component harus di render oleh React
- Oleh karena itu, kita perlu tahu bagaimana cara kerja proses React ini ketika menampilkan Component yang kita buat
- Terdapat 3 tahapan proses menampilkan Component di React
- Pertama, trigger (memicu) proses render
- Kedua, melakukan proses render Component
- Ketiga, menempatkan hasil render Component ke DOM (Document Object Model)

## Trigger Render
- Pemicu render biasanya terjadi karena dua hal
- Pertama adalah inisialisasi awal Component, yang kita lakukan menggunakan method render()
- Kedua adalah ketika ada pemicu perubahan State
- Setiap terjadi perubahan State, secara otomatis React akan mengirimkan antrian untuk memicu proses render ulang

## Render Component
- Setelah proses Trigger Render terjadi, React akan memanggil Component yang kita buat untuk mencari tahu apa yang harus ditampilkan di layar
- Rendering adalah proses React memanggil Component yang kita buat
- Pada proses inisialisasi awal, React akan memanggil Root Component (paling atas)
- Pada saat proses render ulang, React hanya akan memanggil ulang Component yang state nya berubah
- Setelah proses render selesai, React akan melakukan proses Commit

## Commit Changes
- Setelah proses render selesai, React akan melakukan proses commit changes (menyimpan perubahan) ke DOM
- Untuk inisialisasi awal, karena baru pertama kali, artinya element di DOM belum ada, maka React akan menggunakan appendChild() untuk menambahkan element ke DOM
- Sedangkan untuk proses render ulang, React akan mencoba melakukan perubahan seminimal mungkin untuk menyamakan DOM saat ini dengan hasil rendering
- React hanya akan mengubah element di DOM, jika memang element tersebut berbeda dari hasil rendering

# Snapshot
## Snapshot
- Variable State sekilas mungkin terlihat seperti variable JavaScript biasa
- Tapi sebenarnya, State itu mirip seperti snapshot (kondisi saat itu). Mengubah nilai variable State tidak akan mengubah Snapshot, melainkan akan memicu render ulang untuk membuat Snapshot baru
- Kita mungkin berpikir bahwa tampilan web berubah secara langsung karena response dari event yang dilakukan oleh pengguna, seperti klik tombol
- Namun sebenarnya tidak seperti itu, kita sudah tahu di materi sebelumnya, ketika terjadi perubahan State, itu akan memicu render ulang, sehingga akan membuat Snapshot baru yang ditampilkan di layar


## Kesalahan Mengubah State
- Paham tentang Snapshot ini, akan memberi gambaran cara pandang kita terhadap data di State
- Berikut adalah contoh kesalahan yang biasa dilakukan ketika mengubah State
- Kita berpikir jika mengubah State, saat itu juga data akan berubah, padahal mengubah State sebenarnya hanyalah mentrigger render ulang dengan nilai state yang baru

## Kenapa Counter Tidak Berubah 3x?
- Hal ini dikarenakan, setCounter() tidak akan mengubah data counter yang ada di Snapshot saat ini
- setCounter() hanya akan melakukan render ulang dengan data counter yang baru
- Saat kita memanggil setCounter() sebanyak 3x, bukan berarti React akan melakukan render ulang sebanyak 3x, React akan menunggu sampai Event Handler selesai, jika ada perubahan State, maka akan dilakukan render ulang
- Artinya render ulang akan dilakukan sekali saja, walaupun kita mengubah State berkali-kali

contoh di file :
- [src\form\Counter.jsx](src\form\Counter.jsx)


# State Updates
## State Updates
- Seperti yang sebelumnya dibahas, melakukan update State berkali-kali, tidak akan mengubah data State di Snapshot saat itu, melainkan hanya memicu untuk render ulang dengan data State baru
- Tapi, kadang-kadang, kita memang mungkin ada keperluan untuk mengubah data di State yang sama berkali-kali
- Dan jika kita memang ingin mengubah data di State dengan data yang harapannya sudah diubah sebelumnya (walaupun belum di render ulang)
- Kita bisa menggunakan lambda sebagai parameter ketika memanggil function untuk update data State


contoh di file :
- [src\form\Counter.jsx](src\form\Counter.jsx)


# Object di State
## Object di State
- State bisa menyimpan jenis data JavaScript apapun, termasuk Object
- Tapi kita tidak disarankan untuk mengubah object yang terdapat di State
- Jika kita ingin mengubah object di State, kita disarankan membuat object baru lalu mengubah data di State tersebut dengan object baru

## Immutable Data
- Saat kita membuat data di State, kita harus memperlakukan data di State sebagai Immutable data (tidak bisa berubah)
- Artinya data di State hanya digunakan untuk dibaca (read only)
- Jika kita ingin mengubah data di State, maka kita harus ubah menggunakan data baru, yang artinya data lama tidak dimodifikasi
- Ini adalah praktek yang biasa dilakukan di React. Walaupun pada kenyataannya object di JavaScript tidak immutable
- Hal ini direkomendasikan agar kita tidak salah mengubah data langsung, padahal kita tahu bahwa mengubah data tidak akan memicu proses render ulang
- Untungnya di JavaScript kita bisa menggunakan Spread Syntax untuk membantu meng-copy attribute di Object

## Nested Object
- Kadang ada kasus kita menggunakan Nested Object
- Sama seperti sebelumnya, kita disarankan untuk selalu membuat object baru ketika mengubah State
- Kadang memang menyulitkan ketika Nested Object nya terlalu besar, oleh karena itu disarankan tidak terlalu dalam membuat Nested Object nya

## Immer Library
- Salah satu library yang sering digunakan ketika develop aplikasi menggunakan React adalah Immer
- Immer adalah library yang digunakan untuk membuat immutable object dari object saat ini
- Menggunakan Immer akan lebih mudah dibandingkan menggunakan Spread Syntax, terutama untuk Object yang kompleks dan Nested
- [https://github.com/immerjs/immer](https://github.com/immerjs/immer)

## Cara Kerja Library Immer 
- [immer works](https://docs.google.com/presentation/d/1HmgGmA1LpK78pF3ECQMSDrXEjk6wAgR5yaQxrbR6E18/edit?slide=id.g31cef895ca3_0_1062#slide=id.g31cef895ca3_0_1062)
- [https://immerjs.github.io/immer/](https://immerjs.github.io/immer/)


## Use Immer Library
- Library Immer juga bisa diintegrasikan dengan React State dengan mudah
- Kita bisa menggunakan library Use-Immer
[https://github.com/immerjs/use-immer](https://github.com/immerjs/use-immer)
- Kita cukup mengganti useState() menjadi useImmer()
- Dan untuk mengupdate Object di State, kita bisa menggunakan Function sebagai parameter di Update Method nya

## Menambah Library Immer
```bash
npm install immer use-immer
```

contoh di file :
- [vite.config.js](vite.config.js)
- [src\contact\main.jsx](src\contact\main.jsx)
- [src\contact\ContactForm.jsx](src\contact\ContactForm.jsx)

# Array di State
## Array di State
- Sama seperti Object, Array di State juga harus kita perlakukan sebagai Immutable data
- Artinya operasi menambah data, mengubah atau menghapus data di Array, kita harus buat Array baru untuk di update ke State
- Hal ini memang agak menyulitkan, oleh karena itu dengan bantuan library seperti Immer, hal ini jadi lebih mudah

## Mengubah Array

|             | Hindari            | Gunakan                         |
|-------------|--------------------|---------------------------------|
| Menambah    | `push`, `unshift`   | `concat`, `[...arr]` spread syntax |
| Menghapus   | `pop`, `shift`, `splice` | `filter`, `slice`          |
| Mengubah    | `splice`, `arr[i] = …` | `map`                    |
| Mengurutkan | `reverse`, `sort`   | Buat array baru                  |

contoh di file :
- [vite.config.js](vite.config.js)
- [task.html](task.html)
- [src\task\main.jsx](src\task\main.jsx)
- [src\task\Task.jsx](src\task\Task.jsx)

# Sharing State
## Sharing State
- Kadang, kita ingin membuat State untuk beberapa Component yang selalu berubah bersama-sama, atau sederhananya adalah Sharing (berbagi) State
- Untuk melakukan ini, kita harus mengubah lokasi State dari Component-Component itu, ke Parent Component mereka, lalu kita kirim State nya melalui Props
- Misal, pada Form Task sebelumnya, kita akan buat 2 Child Component, Component untuk TaskForm nya, dan Component untuk TaskList nya
- Kita akan share State nya dari Task ke TaskForm dan TaskList melalui Props

contoh di file :
- [src\task\Task.jsx](src\task\Task.jsx)
- [src\task\TaskList.jsx](src\task\TaskList.jsx)
- [src\task\TaskForm.jsx](src\task\TaskForm.jsx)


# Mempertahankan State
## Mempertahankan State
- State terisolasi antar Component. React melacak State mana yang dimiliki oleh Component berdasarkan tempatnya di struktur UI
- Kita bisa mengatur, kapan kita ingin mempertahankan State, kapan kita akan mereset State
- State sendiri tidak disimpan di dalam Component. State itu disimpan di React, sedangkan ketika kita menggunakan State di Component, maka sebenarnya kita akan menggunakan State yang ada di React
- Cara React bisa tahu State mana yang digunakan oleh Component adalah, melihat posisi Component di struktur UI

contoh di file :
- [vite.config.js](vite.config.js)
- [src\counter\main.jsx](src\counter\main.jsx)
- [src\counter\Counter.jsx](src\counter\Counter.jsx)





