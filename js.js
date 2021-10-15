var count = 0;

var categorias = [
  {
    id: 1,
    nome: "remedios",
    tela: false
  },

  {
    id: 2,
    nome: "alimentacao",
    tela: false
  },

  {
    id: 3,
    nome: "perfumaria",
    tela: false
  },

  {
    id: 4,
    nome: "brinquedos",
    tela: false
  },

  {
    id: 5,
    nome: "roupas",
    tela: false
  },

  {
    id: 6,
    nome: "acessorios",
    tela: false
  }
];

var produtos = [
    {
      tipo: 1,
      nome: "Dipirona",
      id: 1,
      preco: 2.90,
      img: 'https://img.drogaraia.com.br/catalog/product/d/i/dipirona-monoidratada-500mg-com-10-comprimidos-prati-donaduzzi.jpg?width=520&height=520&quality=50&type=resize'
    },
    
    {
      tipo: 1,
      nome: "Aspirina",
      id: 2,
      preco: 5.75,
      img: 'https://drogariasp.vteximg.com.br/arquivos/ids/450725-500-500/89028---analgesico-aspirina-c-400mg-bayer-limao-2-comprimidos.jpg?v=637539290115270000'
    },
    
    {
      tipo: 1,
      nome: "Paracetamol",
      id: 3,
      preco: 11.89,
      img: 'https://cdn.ultrafarma.com.br/static/produtos/814653/large-637057972254402658-814653.jpg'
    },
    
    {
      tipo: 1,
      nome: "Omeoprazol",
      id: 4,
      preco: 12.99,
      img: 'https://d1xdssnpeez8k0.cloudfront.net/Custom/Content/Products/15/29/15295_omeprazol-ems-20mg-caixa-com-28-capsulas-gelatinosas-duras-com-microgranulos-p7896004701967_l1_637217823760307363.jpg'
    },
    
    {
      tipo: 2,
      nome: "Sucrilhos",
      id: 1,
      preco: 16.90,
      img: 'https://static.paodeacucar.com/img/uploads/1/865/13260865.jpg'
    },
    
    {
      tipo: 2,
      nome: "Bis",
      id: 2,
      preco: 4.29,
      img: 'https://casafiesta.fbitsstatic.net/img/p/chocolate-wafer-bis-lacta-preto-126g-62934/229786.jpg?w=420&h=420&v=no-change'
    },
    
    {
      tipo: 2,
      nome: "Bisnaguinha",
      id: 3,
      preco: 6.79,
      img: 'https://panco.com.br/images/produtos/opt-png/paes/BisnaguinhasOriginais.png'
    },
    
    {
      tipo: 2,
      nome: "Doritos",
      id: 4,
      preco: 9.19,
      img: 'https://sadistribuidorajundiai.com.br/wp-content/uploads/2021/07/salgadinho-doritos-nacho-48g-comprar.jpg'
    },
    
    {
      tipo: 2,
      nome: "Chocotone",
      id: 5,
      preco: 14.99,
      img: 'https://casaspedro.vteximg.com.br/arquivos/ids/164293-1000-1000/chocotone-bauducco-500g.jpg?v=637443441966800000'
    },
    
    {
      tipo: 2,
      nome: "Macarrão Espaguete",
      id: 6,
      preco: 4.89,
      img: 'https://static.clubeextra.com.br/img/uploads/1/730/12707730.jpg'
    },
    
    {
      tipo: 3,
      nome: "Quasar",
      id: 1,
      preco: 99.90,
      img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/051/326/products/quasar-clasica1-da67d436358f343e9815511296886160-640-0.jpg'
    },
    
    {
      tipo: 3,
      nome: "Malbec",
      id: 2,
      preco: 68.90,
      img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/B73607/2dcdaf41-e906-4816-9786-36feb27304f5-malbec-desodorante-colonia-100-ml.png'
    },
    
    {
      tipo: 3,
      nome: "212",
      id: 3,
      preco: 230.99,
      img: 'https://static.riachuelo.com.br/RCHLO/12153591001/portrait/7d7daeb00e3b948140b2b275092245dce3d6b181.jpg?imwidth=700'
    },
    
    {
      tipo: 3,
      nome: "La Vie est Belle",
      id: 4,
      preco: 174.00,
      img: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/321565-320-320/30ml.jpg?v=636852426749700000'
    },
    
    {
      tipo: 3,
      nome: "Petit Attitude",
      id: 5,
      preco: 29.79,
      img: 'https://avongroup.vteximg.com.br/arquivos/ids/160838/Petit_Attitude_180.jpg?v=637146004083000000'
    },
    
    {
      tipo: 4,
      nome: "Helicóptero Lego",
      id: 1,
      preco: 299.90,
      img: 'https://m.media-amazon.com/images/I/81Mp3hwKBdL._AC_SL1500_.jpg'
    },
    
    {
      tipo: 4,
      nome: "Polly Pocket",
      id: 2,
      preco: 129.99,
      img: 'https://d2m78g3cfije3s.cloudfront.net/Custom/Content/Products/28/74/2874_boneca-polly-pocket-acessorios-e-coelhinho-000291_m1_637365524892576753.jpg'
    },
    
    {
      tipo: 4,
      nome: "Lhama de Pelúcia",
      id: 3,
      preco: 65.90,
      img: 'https://a-static.mlcdn.com.br/1500x1500/lhama-branco-30cm-pelucia-foffy/footeshoes/pel067/cf8d8d692aa923d588f1f83729406291.jpg'
    },
    
    {
      tipo: 4,
      nome: "Carro de Controle Remoto",
      id: 4,
      preco: 106.59,
      img: 'https://images.colombo.com.br/produtos/4427675/4427675_Carrinho_Controle_Remoto_Radical_Azul_Candide_12264066_z.jpg'
    },
    
    {
      tipo: 4,
      nome: "Banco Imobiliário",
      id: 5,
      preco: 78.99,
      img: 'https://m.media-amazon.com/images/I/910QO41sGRL._AC_SX425_.jpg'
    },
    
    {
      tipo: 4,
      nome: "Boneca Mônica",
      id: 6,
      preco: 80.90,
      img: 'https://m.media-amazon.com/images/I/71BNorkJJfL._AC_SY741_.jpg'
    },

    {
      tipo: 5,
      nome: "All Star",
      id: 1,
      preco: 159.99,
      img: 'https://static.netshoes.com.br/produtos/tenis-converse-all-star-ct-as-core-ox/02/D26-0147-002/D26-0147-002_zoom1.jpg?ts=1587555740&ims=544x'
    },

    {
      tipo: 5,
      nome: "Jaqueta Corta Vento",
      id: 2,
      preco: 124.90,
      img: 'https://decathlonpro.vteximg.com.br/arquivos/ids/2480709/wind-jacket-trail-w-storm-grey-pink-401.jpg?v=637187692813870000'
    },

    {
      tipo: 5,
      nome: "Regata Gola Alta",
      id: 3,
      preco: 32.79,
      img: 'https://img.elo7.com.br/product/zoom/2814B4C/blusa-gola-alta-regata-canelada-gola-alta.jpg'
    },

    {
      tipo: 5,
      nome: "Chinelo",
      id: 4,
      preco: 28.90,
      img: 'https://images.lojanike.com.br/1024x1024/produto/chinelo-nike-kawa-slide-infantil-819352-001-1-11626441063.jpg'
    },

    {
      tipo: 5,
      nome: "Camiseta Polo",
      id: 5,
      preco: 59.99,
      img: 'https://rodeowest.fbitsstatic.net/img/p/camisa-polo-masculina-verde-austin-western-24996-159580/391026.jpg?w=460&h=460&v=no-change'
    },

    {
      tipo: 5,
      nome: "Calça Jogger",
      id: 6,
      preco: 130.00,
      img: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/calca-sarja-feminina-jogger-contatho_323419_1.jpg'
    },

    {
      tipo: 6,
      nome: "Mouse Wireless",
      id: 1,
      preco: 67.90,
      img: 'https://resource.logitech.com/content/dam/logitech/en/products/mice/m171/gallery/m171-gallery-blue-1.png'
    },

    {
      tipo: 6,
      nome: "Teclado Mecânico",
      id: 2,
      preco: 254.00,
      img: 'https://images.tcdn.com.br/img/img_prod/921760/teclado_redragon_kumara_red_brown_249_1_c416840e1c4d90cfbf812d78800e1b65.png'
    },

    {
      tipo: 6,
      nome: "Monitor Ultrawide",
      id: 3,
      preco: 1289.90,
      img: 'https://i.zst.com.br/thumbs/12/20/18/101734309.jpg'
    },

    {
      tipo: 6,
      nome: "Fone de Ouvido Bluetooth",
      id: 4,
      preco: 310.99,
      img: 'https://carrefourbr.vtexassets.com/arquivos/ids/6915807/MP24420216_Fone-Bluetooth-WH-CH510-Preto-SONY_2_Zoom.jpg?v=637347594916600000'
    },

    {
      tipo: 6,
      nome: "Playstation 5",
      id: 5,
      preco: 5999.00,
      img: 'https://images.kabum.com.br/produtos/fotos/238670/console-sony-playstation-5-edicao-digital_1634132113_g.jpg'
    },

    {
      tipo: 6,
      nome: "Macbook Pro",
      id: 6,
      preco: 13990.90,
      img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672894000'
    }
];

$(".nav-link").click(function() 
{
  var categoria = $(this).attr("data-bs-target").split("#")[1];

  $(".tab-pane").each(function()
  {
    var tela = $(this).attr("id");

    for(let cat of categorias)
    {
      if(categoria == cat.nome && tela == cat.nome && !cat.tela)
      {
        for(var prod of produtos)
        {
          if(prod.tipo == cat.id)
          {
            prod.preco = prod.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

            var card = `<div class="col">
                          <div class="card">
                            <img src="${prod.img}" class="card-img-top" alt="${prod.nome}" height="300" width="300">

                            <div class="card-body">
                              <h5 class="card-title">${prod.nome}</h5>

                              <hr>

                              <p class="card-text">${prod.preco}</p>
                              
                              <div class="row">
                                <div class="col-md-8">
                                  <button class="btn botao">
                                    <i class="fas fa-cart-plus"></i>
                                    
                                    Add ao carrinho
                                  </button>
                                </div>

                                <div class="col-md-4">
                                  <input id="qtd" class="form-control" placeholder="Qtd." type="number" onclick="adicionarAoCarrinho();">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`;

            $("." + cat.nome).append(card);

            cat.tela = true;
          }
        }
      }
    }
  });
});