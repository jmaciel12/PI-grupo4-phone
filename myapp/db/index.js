const celulares = {
  usuario: {
    nombre: "Lautaro Poggi",
    email: "lpoggigamardo@udesa.edu.ar",
    password: "1234", 
    fechaNacimiento: "13/09/2005",
    NDocumento : "46938863",
    imagenPerfil: "/images/users/default-image.png"
  },

  productos: [
    {
      id: 1,
      nombre: "Samsung Galaxy S24 Ultra",
      descripcion:  "La cámara más poderosa y el rendimiento más veloz de Samsung.",
      imagen: "/images/products/s24-ultra.png",
      comentarios: [
        {
          usuario: "Juan García",
          texto: "Muy buen teléfono, lo recomiendo.",
          imagenPerfil: "/images/users/default-image.jpg"

        },
        {
          usuario: "Ana Torres",
          texto: "La batería me dura todo el día.",
          imagenPerfil: "/images/users/default-image.jpg"

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
      nombre: "Samsung Galaxy S22",
      descripcion: "Pantalla Dynamic AMOLED de 6.1 pulgadas",
      imagen: "/images/products/galaxys22.jpg",
      comentarios: [
       
      ]
    },
    {
      id: 3,
      nombre: "Xiaomi Redmi Note 11",
      descripcion: "Gran batería y buen rendimiento por su precio",
      imagen: "/images/products/redmi11.jpg",
      comentarios: []
    },
    {
      id: 4,
      nombre: "Motorola Edge 30",
      descripcion: "Diseño moderno y pantalla fluida",
      imagen: "/images/products/motoedge30.jpg",
      comentarios: []
    },
    {
      id: 5,
      nombre: "iPhone SE",
      descripcion: "Compacto pero potente, ideal para usuarios básicos",
      imagen: "/images/products/iphonese.jpg",
      comentarios: []
    },
    {
      id: 6,
      nombre: "Samsung A52",
      descripcion: "Buen balance entre precio y calidad",
      imagen: "/images/products/a52.jpg",
      comentarios: []
    },
    {
      id: 7,
      nombre: "Google Pixel 6",
      descripcion: "Android puro y excelente cámara",
      imagen: "/images/products/pixel6.jpg",
      comentarios: []
    },
    {
      id: 8,
      nombre: "Realme GT Master",
      descripcion: "Estética moderna y gran rendimiento",
      imagen: "/images/products/realmegt.jpg",
      comentarios: []
    },
    {
      id: 9,
      nombre: "Huawei P40 Pro",
      descripcion: "Hardware excelente, pero sin servicios de Google",
      imagen: "/images/products/p40pro.jpg",
      comentarios: []
    },
    {
      id: 10,
      nombre: "OnePlus Nord 2",
      descripcion: "Rendimiento rápido y buena cámara",
      imagen: "/images/products/nord2.jpg",
      comentarios: []
    }
  ]
};

module.exports = celulares;
