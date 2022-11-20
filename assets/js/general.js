const banners = [
  {
    title: " Restaurante Hayubusa",
    description:
      " Vasta variedade com preço acessível, abertos de quarta à domingo!",
    image: "banner1.png",
  },
  {
    title: "Restaurante Mikase",
    description:
      "Vasta variedade com preço acessível, abertos de terça à sábado!",
    image: "banner2.jpg",
  },
  {
    title: "Você sabia?",
    description:
      "Os biscoitos da sorte que ganhamos em restaurantês Chineses, na verdade tem origem Japonesa!",
    image: "sushi.png",
  },
];

const catalogos = [
  {
    image: "sushi.png",
    title: "Sushi Ishii",
    description:
      "Sushi Ishii um dos rodízios de comida japonesa com um dos melhores custo benefício, com barriga de salmão, sashimi de polvo, peixe prego, niguiris, carpaccios, salmão na pedra de sal e muito mais! ",
    video: "https://www.youtube.com/embed/RJ4nRDbycpM",
  },
  {
    image: "sushi2.png",
    title: "AOYAMA",
    description:
      " O tradicional, o melhor da gastronomia japonesa!",
    video: "https://www.youtube.com/embed/HtBh8HKbelE",
  },
  {
    image: "sushi3.png",
    title: "Ryo",
    description:
      " Um sushi com 2 estrelas michelin comandado pelo Chef Edson Yamashita.",
    video: "https://www.youtube.com/embed/n2ioM8JY28I",
  },
  {
    image: "sushi4.png",
    title: "Sumo Sushi",
    description:
      "Nesse rodízio você irá comer até se transformar em um lutador de sumo!",
    video: "https://www.youtube.com/embed/E7RQPzsXvUw",
  },
  {
    image: "sushi5.png",
    title: "HIOTO",
    description:
      " Excelente seleção, e uma  excelente vista para acompanhar!",
    video: "https://www.youtube.com/embed/5AP2fc_NTlA",
  },
  {
    image: "sushi6.png",
    title: "Sushi Saturn",
    description:
      "Na sequência da nossa jornada pelos restaurantes da Europa, dessa vez em Lisboa (Portugal), vamos mostrar nosso restaurante japonês preferido, com rodízio a vontade por 10 euros!!!",
    video: "https://www.youtube.com/embed/yh4sqqIMJEA",
  },
];

const catalogosMiolo = document.querySelector(".catalogos");
const carousel = new Carousel(catalogosMiolo, catalogos);

const mioloCarousel = document.querySelector("#miolo-carousel");
const banner = new Banner(mioloCarousel, banners);

window.addEventListener("load", function() {
  document.querySelector(".loader-body").style.display = "none";
  setTimeout(() => {
    document.querySelector("#banner").removeAttribute("style");
    document.querySelector("#catalogo").removeAttribute("style");
    document.querySelector("#placeholder").style.display = 'none';

    banner.generateBanner();
    carousel.generateCarousel();
    carousel.initCarousel();
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
  $("body").tooltip({ selector: "[data-toggle=tooltip]" });
});
