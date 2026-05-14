/** Catálogo de marcas: descripciones y enlaces desde info marcas - Sheet1.csv */
(function () {
  'use strict';
  window.EXCELON_BRAND_CATEGORIES = ["Snacks", "Bebidas", "Té, Café & Infusiones", "Aceites, Salsas & Condimentos", "Pastas, Arroz & Despensa", "Vinos & Licores", "Cuidado Personal & Bienestar"];
  window.EXCELON_BRAND_TAG_OPTIONS = ["Orgánico", "Plant-based", "Vegano", "Sin gluten", "Keto-friendly", "Sin azúcar añadida", "Ingredientes naturales", "Clean label", "Sin preservantes", "Sin sabores artificiales", "Comercio justo", "Agricultura sostenible", "Reduce desperdicio", "Empaque responsable", "Bebida vegetal", "Agua de coco", "Agua con gas", "Snacks horneados", "Chips", "Pasta", "Arroz", "Aceite de oliva", "Salsa", "Té", "Desayuno", "Snack", "Cocina diaria", "Coctelería", "Lonchera", "Wellness"];
  window.EXCELON_BRANDS = [
  {
    "id": "artisana-organics",
    "name": "Artisana Organics",
    "description": "Artisana Organics se especializa en mantequillas y alimentos orgánicos elaborados con procesos mínimos y ingredientes puros. La marca utiliza técnicas artesanales para preservar el sabor y valor nutricional de nueces y semillas seleccionadas. Sus productos destacan por ser orgánicos, naturales y libres de ingredientes artificiales o innecesarios.",
    "link": "https://artisanaorganics.com",
    "category": "Aceites, Salsas & Condimentos",
    "tags": [
      "Orgánico",
      "Clean label",
      "Ingredientes naturales",
      "Cocina diaria"
    ],
    "logo": "/images/brands/Excelon_ARTISANA.svg"
  },
  {
    "id": "baked-in-brooklyn",
    "name": "Baked in Brooklyn",
    "description": "Fundada hace más de 80 años, Baked in Brooklyn comenzó elaborando pan pita artesanal en Nueva York. Con el tiempo, la marca expandió su línea a flatbreads, sticks y snacks horneados utilizando ingredientes seleccionados y recetas tradicionales. Sus productos son reconocidos por su sabor auténtico, textura crujiente y por no contener grasas trans ni preservantes artificiales.",
    "link": "https://www.bakedinbrooklyn.com",
    "category": "Snacks",
    "tags": [
      "Snacks horneados",
      "Sin preservantes",
      "Ingredientes naturales",
      "Lonchera",
      "Snack"
    ],
    "logo": "/images/brands/Excelon_BAKED IN BROOKLYN.svg"
  },
  {
    "id": "bodegas-gallegas",
    "name": "Bodegas Gallegas",
    "description": "Bodegas Gallegas es una bodega española con tradición en la producción de vinos que reflejan la autenticidad y riqueza de sus regiones vitivinícolas. La marca combina experiencia enológica y tecnología moderna para crear vinos equilibrados y expresivos. Sus etiquetas destacan por mantener calidad, tradición y carácter español.",
    "link": "https://www.bodegasgallegas.com",
    "category": "Vinos & Licores",
    "tags": [
      "Agricultura sostenible"
    ],
    "logo": "/images/brands/Excelon_BODEGAS GALLEGAS.svg"
  },
  {
    "id": "casal-da-coelheira",
    "name": "Casal da Coelheira",
    "description": "Casal da Coelheira es una reconocida bodega portuguesa ubicada en la región de Ribatejo, con tradición en la producción de vinos de alta calidad. La marca combina técnicas modernas con herencia vitivinícola portuguesa para crear vinos equilibrados y expresivos. Sus etiquetas reflejan autenticidad, terroir y pasión por la vinicultura.",
    "link": "https://casaldacoelheira.pt",
    "category": "Vinos & Licores",
    "tags": [
      "Agricultura sostenible"
    ],
    "logo": "/images/brands/Excelon_CASAL DA COELHEIRA.svg"
  },
  {
    "id": "clipper-tea",
    "name": "Clipper Tea",
    "description": "Clipper Tea fue fundada en Inglaterra en 1984 con la filosofía de producir tés de alta calidad de manera ética y natural. La marca se convirtió en pionera en el uso de ingredientes orgánicos y comercio justo dentro de la industria del té. Actualmente ofrece una amplia variedad de infusiones y tés elaborados sin sabores artificiales, manteniendo un fuerte compromiso con la sostenibilidad.",
    "link": "https://www.clipper-teas.com",
    "category": "Té, Café & Infusiones",
    "tags": [
      "Té",
      "Orgánico",
      "Comercio justo",
      "Sin sabores artificiales",
      "Desayuno"
    ],
    "logo": "/images/brands/Excelon_CLIPPER.svg"
  },
  {
    "id": "cocoxim",
    "name": "CocoXim",
    "description": "Originaria de Vietnam, CocoXim se especializa en agua de coco orgánica elaborada con cocos cultivados en la región de Ben Tre, reconocida mundialmente por su calidad. La marca se enfoca en procesos naturales, sin azúcar añadida ni concentrados, manteniendo el sabor fresco y auténtico del coco. Actualmente, CocoXim exporta sus productos a decenas de países y destaca por su compromiso con la sostenibilidad y la producción responsable.",
    "link": "https://cocoxim.com",
    "category": "Bebidas",
    "tags": [
      "Agua de coco",
      "Orgánico",
      "Sin azúcar añadida",
      "Ingredientes naturales",
      "Agricultura sostenible"
    ],
    "logo": "/images/brands/Excelon_COCO XIM.svg"
  },
  {
    "id": "dash-water",
    "name": "Dash Water",
    "description": "Creada en el Reino Unido, Dash Water nació con la misión de combatir el desperdicio alimentario utilizando frutas “imperfectas” para saborizar agua con gas natural. La marca elabora bebidas sin azúcar, endulzantes ni calorías, ofreciendo sabores frescos y naturales. Dash combina bienestar y sostenibilidad en una propuesta moderna enfocada en ingredientes simples y consumo consciente.",
    "link": "https://dash-water.com",
    "category": "Bebidas",
    "tags": [
      "Agua con gas",
      "Sin azúcar añadida",
      "Reduce desperdicio",
      "Ingredientes naturales",
      "Wellness"
    ],
    "logo": "/images/brands/Excelon_DASH WATER.svg"
  },
  {
    "id": "dr-jacobs",
    "name": "Dr. Jacobs",
    "description": "Dr. Jacobs Naturals desarrolla productos enfocados en bienestar y cuidado personal utilizando ingredientes naturales y fórmulas limpias. La marca busca combinar ciencia y naturaleza para ofrecer opciones saludables y responsables. Sus productos destacan por priorizar calidad, sostenibilidad y bienestar integral.",
    "link": "https://www.drjacobsnaturals.com",
    "category": "Té, Café & Infusiones",
    "tags": [
      "Té",
      "Wellness",
      "Ingredientes naturales",
      "Clean label"
    ],
    "logo": "/images/brands/Excelon_DR JACOBS.svg"
  },
  {
    "id": "feridies",
    "name": "Feridies",
    "description": "Feridies fue fundada en Virginia y es reconocida por producir maní gourmet y snacks premium utilizando recetas familiares tradicionales. La marca comenzó con cacahuates horneados y salados artesanalmente y hoy ofrece una amplia línea de frutos secos y mezclas. Sus productos destacan por su calidad, frescura y sabor auténtico.",
    "link": "https://feridies.com",
    "category": "Snacks",
    "tags": [
      "Snack",
      "Ingredientes naturales"
    ],
    "logo": "/images/brands/Excelon_FERIDIES.svg"
  },
  {
    "id": "fryaway",
    "name": "FryAway",
    "description": "Fundada por Laura Lady, FryAway nació con la misión de resolver uno de los problemas más comunes al cocinar: cómo desechar correctamente el aceite usado. La marca desarrolla un polvo vegetal y no tóxico que transforma el aceite líquido en un sólido fácil de desechar, ayudando a reducir daños en tuberías y el impacto ambiental. Sus productos combinan practicidad, sostenibilidad e innovación para hacer que cocinar sea más limpio y responsable.",
    "link": "https://fryaway.co/",
    "category": "Aceites, Salsas & Condimentos",
    "tags": [
      "Plant-based",
      "Ingredientes naturales",
      "Reduce desperdicio",
      "Cocina diaria",
      "Clean label"
    ],
    "logo": "/images/brands/Excelon_FRYAWAY.svg"
  },
  {
    "id": "hutchinson-acres",
    "name": "Hutchinson Acres",
    "description": "Hutchinson Acres es una marca enfocada en productos agrícolas y alimentos naturales cultivados con altos estándares de calidad. Inspirada en tradiciones familiares y producción responsable, la marca ofrece productos seleccionados que resaltan ingredientes frescos y auténticos. Su enfoque combina sabor artesanal, origen confiable y prácticas sostenibles.",
    "link": "https://hutchinsonacres.com",
    "category": "Aceites, Salsas & Condimentos",
    "tags": [
      "Ingredientes naturales",
      "Agricultura sostenible",
      "Cocina diaria"
    ],
    "logo": "/images/brands/Excelon_HUTCHINSONS.svg"
  },
  {
    "id": "isola-bio",
    "name": "Isola Bio",
    "description": "Isola Bio nació en Italia con el objetivo de producir alimentos orgánicos de origen vegetal inspirados en la dieta mediterránea. La marca ofrece bebidas vegetales, cereales y productos naturales elaborados con ingredientes orgánicos certificados. Su propuesta combina tradición italiana, sostenibilidad y nutrición consciente en productos simples y de alta calidad.",
    "link": "https://www.isolabio.com",
    "category": "Pastas, Arroz & Despensa",
    "tags": [
      "Orgánico",
      "Plant-based",
      "Bebida vegetal",
      "Desayuno",
      "Ingredientes naturales"
    ],
    "logo": "/images/brands/Excelon_ISOLA BIO.svg"
  },
  {
    "id": "lundberg",
    "name": "Lundberg",
    "description": "Lundberg Family Farms fue fundada en California en 1937 y se ha convertido en una referencia en arroz orgánico y agricultura sostenible. La empresa familiar produce arroz, snacks y productos derivados utilizando métodos regenerativos y prácticas responsables con el medio ambiente. Sus productos son reconocidos por su calidad, sabor y compromiso con la sostenibilidad agrícola.",
    "link": "https://www.lundberg.com",
    "category": "Pastas, Arroz & Despensa",
    "tags": [
      "Arroz",
      "Orgánico",
      "Agricultura sostenible",
      "Desayuno",
      "Snack"
    ],
    "logo": "/images/brands/Excelon_LUNDBERG.svg"
  },
  {
    "id": "madegood",
    "name": "MadeGood",
    "description": "Fundada en Canadá, MadeGood produce snacks orgánicos pensados para familias que buscan opciones saludables y prácticas. La marca utiliza ingredientes libres de alérgenos comunes y añade nutrientes provenientes de vegetales ocultos en sus recetas. Hoy ofrece barras, granolas y galletas elaboradas con ingredientes orgánicos certificados y un enfoque en inclusión y sostenibilidad.",
    "link": "https://www.madegoodfoods.com",
    "category": "Snacks",
    "tags": [
      "Orgánico",
      "Sin gluten",
      "Snacks horneados",
      "Lonchera",
      "Desayuno",
      "Clean label"
    ],
    "logo": "/images/brands/Excelon_MADEGOOD.svg"
  },
  {
    "id": "muddlers",
    "name": "Muddlers",
    "description": "Muddlers es una marca enfocada en mixers y bebidas artesanales inspiradas en coctelería clásica y sabores naturales. Sus productos buscan ofrecer opciones premium elaboradas con ingredientes seleccionados y perfiles de sabor auténticos. La marca destaca por combinar creatividad, calidad y una experiencia moderna alrededor de bebidas y entretenimiento.",
    "link": "https://muddlers.com",
    "category": "Bebidas",
    "tags": [
      "Coctelería",
      "Ingredientes naturales",
      "Agua con gas"
    ],
    "logo": "/images/brands/Excelon_M.svg"
  },
  {
    "id": "oatly",
    "name": "Oatly",
    "description": "Fundada en Suecia en la década de 1990, Oatly revolucionó el mercado de bebidas vegetales al desarrollar productos a base de avena enfocados en sabor, nutrición y sostenibilidad. La marca comenzó a partir de investigaciones universitarias y hoy ofrece leches vegetales, helados y productos alternativos lácteos reconocidos mundialmente. Oatly se caracteriza por su comunicación disruptiva y su compromiso con reducir el impacto ambiental de la industria alimentaria.",
    "link": "https://www.oatly.com",
    "category": "Bebidas",
    "tags": [
      "Bebida vegetal",
      "Plant-based",
      "Vegano",
      "Sin sabores artificiales",
      "Agricultura sostenible"
    ],
    "logo": "/images/brands/Excelon_OATLY.svg"
  },
  {
    "id": "paranice",
    "name": "Paranice",
    "description": "Paranice desarrolla snacks y productos funcionales enfocados en ingredientes naturales y bienestar. La marca combina sabor y nutrición en recetas pensadas para consumidores que buscan opciones más saludables y prácticas. Sus productos destacan por mantener perfiles limpios y una propuesta moderna orientada al estilo de vida consciente.",
    "link": "https://paranice.com",
    "category": "Snacks",
    "tags": [
      "Snack",
      "Wellness",
      "Ingredientes naturales",
      "Clean label"
    ],
    "logo": "/images/brands/Excelon_PN.svg"
  },
  {
    "id": "pur",
    "name": "PUR",
    "description": "PUR Gum nació con la misión de ofrecer chicles y mentas sin azúcar elaborados con ingredientes más limpios y naturales. La marca utiliza xilitol en lugar de azúcar y evita el uso de aspartame y otros ingredientes artificiales. Hoy en día, PUR es reconocida globalmente por crear productos refrescantes enfocados en bienestar y consumo consciente.",
    "link": "https://purgum.com",
    "category": "Cuidado Personal & Bienestar",
    "tags": [
      "Sin azúcar añadida",
      "Wellness",
      "Clean label",
      "Sin sabores artificiales"
    ],
    "logo": "/images/brands/Excelon_PUR.svg"
  },
  {
    "id": "rude-health",
    "name": "Rude Health",
    "description": "Fundada en Londres en 2005 por Nick y Camilla Barnard, Rude Health nació con la idea de hacer que la alimentación saludable fuera más deliciosa y menos complicada. La marca comenzó con un muesli artesanal preparado en una mesa de cocina y hoy ofrece bebidas vegetales, cereales y snacks elaborados con ingredientes simples y naturales. Sus productos destacan por evitar aditivos artificiales y por mantener un enfoque en sabor, calidad y sostenibilidad.",
    "link": "https://rudehealth.com",
    "category": "Bebidas",
    "tags": [
      "Plant-based",
      "Orgánico",
      "Sin sabores artificiales",
      "Bebida vegetal",
      "Desayuno",
      "Agricultura sostenible"
    ],
    "logo": "/images/brands/Excelon_RUDE HEALTH.svg"
  },
  {
    "id": "rustichella",
    "name": "Rustichella d'Abruzzo",
    "description": "Fundada en Italia en 1924, Rustichella d'Abruzzo es reconocida mundialmente por producir pasta artesanal utilizando trigo de alta calidad y moldes de bronce tradicionales. La marca mantiene métodos clásicos de secado lento para lograr una textura y sabor auténticos. Hoy ofrece una amplia variedad de pastas premium apreciadas por chefs y amantes de la gastronomía italiana.",
    "link": "https://www.rustichella.it",
    "category": "Pastas, Arroz & Despensa",
    "tags": [
      "Pasta",
      "Ingredientes naturales",
      "Cocina diaria"
    ],
    "logo": "/images/brands/Excelon_RUSTICHELLA.svg"
  },
  {
    "id": "seed-ranch",
    "name": "Seed Ranch",
    "description": "Seed Ranch Flavor Co. desarrolla salsas y condimentos elaborados con ingredientes vegetales y sabores intensos inspirados en cocina artesanal. La marca se enfoca en recetas limpias, naturales y llenas de carácter, incluyendo opciones veganas y orgánicas. Sus productos combinan creatividad culinaria, picante balanceado y un fuerte enfoque en calidad.",
    "link": "https://www.seedranchflavor.com",
    "category": "Aceites, Salsas & Condimentos",
    "tags": [
      "Salsa",
      "Vegano",
      "Orgánico",
      "Ingredientes naturales",
      "Coctelería"
    ],
    "logo": "/images/brands/Excelon_SEED RANCH.svg"
  },
  {
    "id": "sip-margs",
    "name": "sipMargs",
    "description": "sipMargs es una marca enfocada en margaritas listas para tomar, creadas para ofrecer una experiencia refrescante y práctica inspirada en coctelería premium. Sus bebidas combinan sabores naturales y perfiles modernos diseñados para momentos sociales y entretenimiento. La marca destaca por su estilo vibrante y enfoque en conveniencia sin perder calidad.",
    "link": "https://sipmargs.com",
    "category": "Bebidas",
    "tags": [
      "Coctelería",
      "Ingredientes naturales"
    ],
    "logo": "/images/brands/Excelon_SIP MARGS.svg"
  },
  {
    "id": "sonoma-creamery",
    "name": "Sonoma Creamery",
    "description": "Sonoma Creamery fue fundada en California y se especializa en snacks elaborados a base de queso real y ingredientes naturales. La marca combina tradición quesera artesanal con innovación en productos como crisps y bites ricos en proteína. Sus productos son reconocidos por su sabor intenso, textura crujiente y enfoque clean label.",
    "link": "https://sonomacreamery.com",
    "category": "Snacks",
    "tags": [
      "Snack",
      "Clean label",
      "Ingredientes naturales"
    ],
    "logo": "/images/brands/Excelon_SONOMA.svg"
  },
  {
    "id": "strait-narrow",
    "name": "Strait & Narrow",
    "description": "Strait & Narrow es una marca de bebidas listas para tomar inspiradas en cocteles clásicos y sabores naturales. Sus productos buscan ofrecer una experiencia sofisticada y refrescante con ingredientes cuidadosamente seleccionados. La marca combina conveniencia, diseño moderno y perfiles de sabor equilibrados para consumidores contemporáneos.",
    "link": "https://www.straitandnarrow.com",
    "category": "Bebidas",
    "tags": [
      "Coctelería",
      "Ingredientes naturales"
    ],
    "logo": "/images/brands/Excelon_STRAIT NARROW.svg"
  },
  {
    "id": "tates-bake-shop",
    "name": "Tate's Bake Shop",
    "description": "Tate’s Bake Shop comenzó como una pequeña panadería en Southampton, Nueva York, fundada por Kathleen King cuando era adolescente. La marca ganó reconocimiento por sus galletas delgadas, crujientes y elaboradas con recetas tradicionales e ingredientes de calidad. Hoy en día, Tate’s ofrece una línea de productos horneados reconocidos por su sabor casero y textura distintiva.",
    "link": "https://www.tatesbakeshop.com",
    "category": "Snacks",
    "tags": [
      "Snacks horneados",
      "Ingredientes naturales",
      "Lonchera",
      "Snack"
    ],
    "logo": "/images/brands/Excelon_TATE'S.svg"
  },
  {
    "id": "uglies",
    "name": "Uglies",
    "description": "Uglies nació en Estados Unidos como una propuesta para reducir el desperdicio alimentario utilizando papas con imperfecciones estéticas que normalmente serían descartadas. Lanzada por Dieffenbach’s Snacks en 2017, la marca produce kettle chips con ingredientes simples y un enfoque sostenible. Además de combatir el desperdicio de alimentos, Uglies dona parte de sus ganancias a iniciativas contra el hambre, combinando sabor artesanal con impacto social.",
    "link": "https://www.ugliessnacks.com",
    "category": "Snacks",
    "tags": [
      "Chips",
      "Reduce desperdicio",
      "Ingredientes naturales",
      "Snack",
      "Agricultura sostenible"
    ],
    "logo": "/images/brands/Excelon_UGLIES.svg"
  },
  {
    "id": "virtue-drinks",
    "name": "Virtue Drinks",
    "description": "Virtue Drinks fue creada en el Reino Unido como una alternativa saludable a las gaseosas tradicionales, ofreciendo bebidas sin azúcar ni endulzantes artificiales. Inspirada en ingredientes naturales y sabores ligeros, la marca utiliza infusiones de frutas y extractos vegetales para crear bebidas refrescantes. Virtue se enfoca en bienestar, simplicidad y consumo consciente.",
    "link": "https://www.virtuedrinks.com",
    "category": "Bebidas",
    "tags": [
      "Sin azúcar añadida",
      "Wellness",
      "Agua con gas",
      "Sin sabores artificiales"
    ],
    "logo": "/images/brands/Excelon_VIRTUE.svg"
  },
  {
    "id": "yo-mamas",
    "name": "Yo Mama's",
    "description": "Yo Mama’s Foods nació en Estados Unidos con la idea de reinventar las salsas y condimentos utilizando recetas simples y ingredientes naturales. La marca produce salsas para pasta, aderezos y productos keto-friendly sin azúcar añadida ni preservantes artificiales. Sus productos destacan por ofrecer sabores caseros y etiquetas limpias enfocadas en bienestar y calidad.",
    "link": "https://yomamasfoods.com",
    "category": "Aceites, Salsas & Condimentos",
    "tags": [
      "Salsa",
      "Keto-friendly",
      "Sin azúcar añadida",
      "Sin preservantes",
      "Cocina diaria",
      "Clean label"
    ],
    "logo": "/images/brands/Excelon_YO MAMAS.svg"
  },
  {
    "id": "searo",
    "name": "Searo",
    "description": "Searo es una marca enfocada en crear vasos hechos de aluminio infinitamente reciclable y reutilizable, ofreciendo una alternativa más sostenible y moderna para el consumo diario. Sus productos destacan por combinar funcionalidad, diseño y conciencia ambiental, promoviendo hábitos más responsables sin sacrificar estilo ni practicidad.",
    "link": "",
    "category": "Cuidado Personal & Bienestar",
    "tags": [
      "Empaque responsable",
      "Reduce desperdicio",
      "Wellness"
    ],
    "logo": "/images/brands/Excelon_SEARO.svg"
  },
  {
    "id": "2-sisters-salsa",
    "name": "2 Sisters Salsa",
    "description": "Fundada en el corazón de Louisiana, 2 Sisters Salsa nació como un proyecto familiar inspirado en recetas cajún perfeccionadas en casa durante años. Hoy en día producen salsas artesanales elaboradas con ingredientes frescos, sin preservantes ni azúcares añadidos. Sus productos combinan tradición, sabor auténtico y una fuerte conexión con la cocina familiar sureña.",
    "link": "https://www.2sisterssalsa.com/",
    "category": "Aceites, Salsas & Condimentos",
    "tags": [
      "Salsa",
      "Sin preservantes",
      "Sin azúcar añadida",
      "Ingredientes naturales",
      "Cocina diaria"
    ],
    "logo": "/images/brands/Excelon_2 SISTERS.svg"
  },
  {
    "id": "perfectted",
    "name": "PerfectTed",
    "description": "Fundada por un grupo de amigos en el Reino Unido, PerfectTed nació con la idea de ofrecer energía más limpia y equilibrada a través del matcha. La marca desarrolla bebidas energéticas y productos a base de té matcha ceremonial, buscando brindar energía sostenida sin el choque típico del café o las bebidas tradicionales. Sus productos destacan por ingredientes naturales, enfoque wellness y una identidad moderna y vibrante.",
    "link": "https://www.perfectted.com/",
    "category": "Bebidas",
    "tags": [
      "Té",
      "Wellness",
      "Ingredientes naturales",
      "Plant-based"
    ],
    "logo": "/images/brands/Excelon_PERFECT TED.svg"
  }
];
})();