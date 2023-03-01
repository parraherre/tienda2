// quemar una base de datos

export let productos = Array(
    {
        nombre: "Vivobook 15 OLED (K6500ZC, 12th Gen Intel)",
        descripcion: "Sistema Operativo: Windows 11 Home,Procesador: Intel® Core™ i5-12500H Processor 2.5 GHz (18M Cache, up to 4.5 GHz, 4P+8E cores),Tarjeta Gráfica: Intel® Iris Xe Graphics + NVIDIA® GeForce® RTX™ 3050 Laptop GPU 4GB GDDR6,Tarjeta Gráfica: Intel® Iris Xe Graphics + NVIDIA® GeForce® RTX™ 3050 Laptop GPU 4GB GDDR6,Memoria: 16GB LPDDR5 on board,Almacenamiento: 512GB M.2 NVMe™ PCIe® 4.0 Performance SSD,Pantalla: 15.6-inch 2.8K (2880 x 1620) OLED 16:9 aspect ratio,Teclado: Teclado chiclet retroiluminado con tecla numérica,Color: Azul (Quiet Blue),Tecnologías: Wi-Fi 6E (802.11ax) (Dual band) 2*2 + Bluetooth® 5,Garantía: 12 meses",
        fotos: ["https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil1foto1.png?alt=media&token=3e5f3054-3807-408c-99d9-2eed2799e3c7","https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil1foto2.png?alt=media&token=2fe06bb8-77d5-4133-8b66-8ba8f3c34777"],
        precio: 5799000,
        popularidad: 4.2
    },
    {
        nombre: "Zenbook Pro 16X OLED (UX7602, 12th Gen Intel)",
        descripcion: "ZSistema Operativo: Windows 11 Home,Procesador: Intel® Core™ i9-2900H Processor 2.5 GHz (24M Cache, up to 5.0 GHz, 6P+8E cores),Tarjeta Gráfica: Intel® Iris Xe Graphics + NVIDIA® GeForce® RTX™ 3060 Laptop GPU,Memoria: 32GB LPDDR5 on board,Almacenamiento: 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD,Pantalla: 16.0-inch 4K (3840 x 2400) OLED 16:10 aspect ratio,Teclado: Teclado chiclet retroiluminado por tecla RGBW con transferencia de tecla N,Color: Negro (Tech Black),Tecnologías: Wi-Fi 6 (802.11ax) (Dual band) 2*2 + Bluetooth 5, Protección de contraseña de usuario de arranque del BIOS, Sensor de huellas dactilares integrado con Power Key,Incluido en la caja: Morral + Stylus Pen,Garantía: 12 meses",
        fotos: ["https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil2foto1.png?alt=media&token=2a5119c5-f859-443d-b34d-96769b4323aa", "https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil2foto2.png?alt=media&token=3105ce87-a2a2-4f79-b5d5-b8cc8b73b085"],
        precio: 15499000,
        popularidad: 4.2
    },
    {
        nombre: "Vivobook 15 (X1502, 12th Gen Intel)",
        descripcion: "Sistema Operativo: Windows 11 Home,Procesador: Intel® Core™ i5-1240P Processor 1.7 GHz (12M Cache, up to 4.4 GHz, 4P+8E cores),Tarjeta Gráfica: Intel® UHD Graphics,Memoria: 8GB DDR4 on board,Almacenamiento: 512GB M.2 NVMe™ PCIe® 3.0 SSD,Pantalla: 15.6-inch FHD (1920 x 1080) 16:9 aspect ratio,Teclado: Chiclet ,Color: Azul (Quiet Blue),Tecnologías: Wi-Fi 6 (802.11ax) (Dual band) 2*2 + Bluetooth 5.0, Protección de contraseña de usuario de arranque del BIOS, Sensor de huellas dactilares integrado con Touchpad,Garantía: 12 meses",
        fotos: ["https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil3foto1.png?alt=media&token=f3def46e-bd1e-43cb-a624-1689067856df", "https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil3foto2.png?alt=media&token=8b0f6035-dfdb-4d08-b988-4b6ce798ada7"],
        precio: 2899000,
        popularidad: 4.2
    },
    {
        nombre: "Vivobook 14 FHD (M1402IA, AMD Ryzen™ 5 4600H)",
        descripcion: "Sistema Operativo: Windows 11 Home,Procesador: AMD Ryzen™ 5 4600H Mobile Processor (6C/12T, 11MB Cache, 4.0 GHz Max Boost),Tarjeta Gráfica: AMD Radeon™ Graphics,Memoria: 8GB DDR4 on board,Almacenamiento: 512GB M.2 NVMe™ PCIe® 3.0 SSD,Pantalla: 14.0-inch FHD (1920 x 1080) 16:9 aspect ratio,Teclado: Teclado tipo chicle,Color: Azul (Quiet Blue),Tecnologías: Wi-Fi 6 (802.11ax) (Dual band) 2*2 + Bluetooth 5,Incluido en la caja: Ratón óptico con cable (USB) + Mochila,Garantía: 12 meses",
        fotos: ["https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil4foto1.png?alt=media&token=200ba8dc-1c24-476f-adc2-0a29a151bd9c", "https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil4foto2.png?alt=media&token=01c024e9-05e0-4227-894a-bd25428de576"],
        precio:2120000 ,
        popularidad: 4.2
    },
    {

        nombre: "ASUS TUF Dash F15",
        descripcion: "Sistema Operativo: Windows 11 Home,Procesador: Intel® Core™ i5-12450H Processor 2 GHz (12M Cache, up to 4.4 GHz, 8 cores: 4 P-cores and 4 E-cores),Tarjeta Gráfica: Intel® Iris Xᵉ Graphics + NVIDIA® GeForce RTX™ 3050 Laptop GPU,Memoria: 16GB DDR5-4800 SO-DIMM,Almacenamiento: 512GB PCIe® 3.0 NVMe™ M.2 SSD,Pantalla: 15.6-inch FHD (1920 x 1080) 16:9,Teclado: Teclado Chiclet retroiluminado,Color: Negro (Off Black),Tecnologías: Wi-Fi 6 (802.11ax) (Dual band) 2*2 + Bluetooth 5.1, Dolby Atmos,Garantía: 12 meses",
        fotos: ["https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil5foto1.png?alt=media&token=bf047a6e-efbf-480c-9be1-a8233356cc0e", "https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil5foto2.png?alt=media&token=8d1ffde7-c74a-418d-87af-ceaaa7672a15"],
        precio: 5499000,
        popularidad: 4.2
    },
    {
        nombre:"Zenbook 14 OLED 2.8K (UM3402, AMD Ryzen™ 5 5625U)",
        descripcion:"Sistema Operativo: Windows 11 Home,Procesador: AMD Ryzen™ 5 5625U Mobile Processor (6-core/12-thread, 16MB cache, up to 4.3 GHz max boost),Tarjeta Gráfica: AMD Radeon™ Graphics,Memoria: 16GB LPDDR4X on board,Almacenamiento: 512GB M.2 NVMe™ PCIe® 3.0 SSD,Pantalla: 14.0-inch 2.8K (2880 x 1800) OLED 16:10 aspect ratio,Teclado: Teclado chiclet retroiluminado,Color: Negro (Jade Black),Tecnologías: Wi-Fi 6E (802.11ax) (Dual band) 2*2 + Bluetooth® 5,Incluido en la caja: Funda + USB-A to RJ45,Garantía: 12 meses",
        fotos:["https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil6foto1.png?alt=media&token=dcb07fbe-c348-45cd-8c4a-703c928fcbd9","https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil6foto2.png?alt=media&token=f707820a-1027-4071-a478-67dfc4452ade"],
        precio:4999000,
        popularidad:5.0
    },
    {
        nombre:"Zenbook 17.3 FOLD OLED (UX9702, 12th Gen Intel)",
        descripcion:"Sistema Operativo: Windows 11 Home,Procesador: Intel® Core™ i7-1250U Processor 1.1 GHz (12M Cache, up to 4.7 GHz, 2P+8E cores),Tarjeta Gráfica: Intel® Iris Xe Graphics *Intel Iris Xᵉ Graphics is only available in models with Intel® Core™ i5/i7/i9 processors and dual-channel memory.,Memoria: 16GB LPDDR5 on board,Almacenamiento: 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD,Pantalla: 17.3-inch 2560 x 1920 FOLED 4:3 aspect ratio,Teclado: Soft Keyboard,Color: Negro (Tech Black),Tecnologías: Wi-Fi 6E (802.11ax) (Dual band) 2*2 + Bluetooth® 5,Incluido en la caja: Funda,Garantía: 12 meses",
        fotos:["https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil7foto1.png?alt=media&token=85c702da-ede7-4af7-83eb-4f54b65c8b65","https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil7foto2.png?alt=media&token=cc6b75ab-9101-4fbc-9537-a5cb98ff11e7"],
        precio:17999000,
        popularidad:5.0
    },
    {
        nombre:"Zenbook 14X OLED Space Edition (UX5401, 12th Gen Intel)",
        descripcion:"Edición limitada - Referencia exclusiva eShop,Sistema Operativo: Windows 11 Home,Procesador: Intel® Core™ i7-2700H Processor 2.3 GHz (24M Cache, up to 4.7 GHz, 6P+8E cores),Tarjeta Gráfica: Intel Iris Xᵉ Graphics,Memoria: 16GB LPDDR5 on board,Almacenamiento: 512GB M.2 NVMe™ PCIe® 4.0 Performance SSD,Pantalla: 14.0-inch 2.8K (2880 x 1800) OLED 16:10 aspect ratio,Teclado: Teclado Chiclet retroiluminado,Color: Gris (Zero-G Titanium),Tecnologías: Wi-Fi 6E (802.11ax) (Dual band) 2*2 + Bluetooth 5,Incluido en la caja: Funda + USB-A,Garantía: 12 meses",
        fotos:["https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil8foto1.png?alt=media&token=2d48aa8e-1af3-4723-90b9-99ad0ebc5033","https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil8foto2.png?alt=media&token=a44f480f-46c9-4a64-bab0-5f9b9488d309"],
        precio:7999000,
        popularidad:5.0
    },
    {
        nombre:"ROG Zephyrus M16",
        descripcion:"Sistema Operativo: Windows 11 Home,Procesador: Intel® Core™ i7-12700H 12th Gen Processor 2.3 GHz (24M Cache, up to 4.7 GHz, 14 cores: 6 P-cores and 8 E-cores),Tarjeta Gráfica: Intel® UHD Graphics 630 + NVIDIA® GeForce RTX™ 3050 Ti Laptop GPU + ROG Boost: 1745MHz* at 100W (1695MHz Boost Clock+50MHz OC, 80W+20W Dynamic Boost) 4GB GDDR6,Memoria: 8GB DDR5 on board,Almacenamiento: 1TB PCIe® 4.0 NVMe™ M.2 SSD,Pantalla: 16-inch QHD+ 16:10 (2560 x 1600, WQXGA),Teclado: Teclado Chiclet Retroiluminado (1 Zonas RGB),Color: Negro (Off Black),Tecnologías: Wi-Fi 6E(802.11ax) (Triple band) 2*2 + Bluetooth® 5.2 ,Incluido en la caja: Morral ROG + Mouse Gaming ROG Impact,Garantía: 24 meses",
        fotos:["https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil9foto1.png?alt=media&token=069fbbe2-616d-4b29-adc1-d35bf6445b0b","https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/portatil9foto2.png?alt=media&token=8c7c8048-de16-47a1-8cda-88c7ddcc3c1c"],
        precio:9599000,
        popularidad:5.0
    },
    {
        nombre:"Zen AiO 24 M5401",
        descripcion:"Sistema Operativo: Windows 11 Home,Tarjeta Gráfica: AMD Radeon™ Graphics,Almacenamiento: 512GB M.2 NVMe™ PCIe® 3.0 SSD Without HDD,Pantalla: 23.8-inch FHD (1920 x 1080) 16:9,Tecnologías: Wi-Fi 6 (802.11ax) (Dual band) 2*2 + Bluetooth 5.2,Incluido en la caja: Teclado + Mouse,Garantía: 12 meses",
        fotos:["https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/pc10foto1.png?alt=media&token=9d693db9-790e-4ae9-9ad1-895318cf9791","https://firebasestorage.googleapis.com/v0/b/setienda-74e3a.appspot.com/o/pc10foto2.png?alt=media&token=e782eb99-5d3e-4fa6-bb74-61228b30d754"],
        precio:3799000,
        popularidad:3.0
    }

)