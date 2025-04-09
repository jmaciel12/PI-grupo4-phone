const celulares = {
  usuario: {
    nombre: "Lautaro Poggi",
    email: "lpoggigamardo@udesa.edu.ar",
    password: "1234",
    fechaNacimiento: "13/09/2005",
    NDocumento: "46938863",
    imagenPerfil: "/images/users/default-image.png"
  },

  productos: [
    {
      id: 1,
      nombre: "Samsung Galaxy S24 Ultra",
      descripcion: "La cámara más poderosa y el rendimiento más veloz de Samsung.",
      imagen: "/images/products/s24-ultra.png",
      comentarios: [
        {
          usuario: "Juan García",
          texto: "Muy buen teléfono, lo recomiendo.",
          imagenPerfil: "/images/users/avatar.svg"
        },
        {
          usuario: "Ana Torres",
          texto: "La batería me dura todo el día.",
          imagenPerfil: "/images/users/avatar.svg"
        },
        {
          usuario: "Luis Fernández",
          texto: "Excelente calidad de cámara, saca fotos increíbles.",
          imagenPerfil: "/images/users/default-image.jpg"
        },
        {
          usuario: "María López",
          texto: "Lo uso para trabajar y va muy rápido, estoy conforme.",
          imagenPerfil: "/images/users/default-image.jpg"
        },
        {
          usuario: "Carlos Méndez",
          texto: "Llegó en tiempo y forma, bien embalado. Muy satisfecho.",
          imagenPerfil: "/images/users/default-image.jpg"
        }
      ]
    },
    {
      id: 2,
      nombre: "Iphone 15 Pro",
      descripcion: "La cámara más poderosa y el rendimiento más veloz de Apple.",
      imagen: "/images/products/iphone-15-pro.png",
      comentarios: []
    },
    {
      id: 3,
      nombre: "Xiaomi Redmi 13 Pro",
      descripcion: "Gran batería y buen rendimiento por su precio",
      imagen: "/images/products/redmi-13-pro-plus.png",
      comentarios: []
    },
    {
      id: 4,
      nombre: "Motorola Edge 40",
      descripcion: "Diseño moderno y pantalla fluida",
      imagen: "/images/products/edge-40-neo.png",
      comentarios: []
    },
    {
      id: 5,
      nombre: "Iphone SE",
      descripcion: "Compacto pero potente, ideal para usuarios básicos",
      imagen: "/images/products/iphone_se.png",
      comentarios: []
    },
    {
      id: 6,
      nombre: "Samsung A52",
      descripcion: "Buen balance entre precio y calidad",
      imagen: "/images/products/samsung-galaxy-a52.png",
      comentarios: []
    },
    {
      id: 7,
      nombre: "Google Pixel 6",
      descripcion: "Android puro y excelente cámara",
      imagen: "/images/products/google-pixel 6.png",
      comentarios: []
    },
    {
      id: 8,
      nombre: "Realme GT Master",
      descripcion: "Estética moderna y gran rendimiento",
      imagen: "/images/products/realme-gt-master.png",
      comentarios: []
    },
    {
      id: 9,
      nombre: "Huawei P40 Pro",
      descripcion: "Hardware excelente, pero sin servicios de Google",
      imagen: "/images/products/huawei-p40-pro.png",
      comentarios: []
    },
    {
      id: 10,
      nombre: "OnePlus Nord 2",
      descripcion: "Rendimiento rápido y buena cámara",
      imagen: "/images/products/one-plus-nord-2.png",
      comentarios: []
    }
  ]
};

module.exports = celulares;