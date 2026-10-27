// Catálogo do Ateliê America Ribeiro
// Para adicionar um vestido: coloque as fotos/vídeos em media/ e copie um bloco abaixo.
// A primeira mídia é a capa. Depois rode: node gerar-links.js

const WHATSAPP = ''; // número do ateliê com DDI e DDD, só dígitos. Ex.: '5533999998888'

const CATEGORIAS = ['15 anos', 'Festa', 'Casamento', 'Madrinha', 'Festa junina', 'Formatura'];

const VESTIDOS = [
  {
    id: 'rose-floral',
    nome: 'Rosé Floral',
    codigo: 'AR-001',
    categorias: ['15 anos', 'Festa', 'Madrinha'],
    descricao: 'Tule rosé com bordado floral em relevo',
    midias: [
      'media/rose-floral.jpg',
      'media/giro.mp4',
      'media/frente.mp4',
      'media/busto.mp4',
      'media/renda.mp4',
    ],
  },
];
