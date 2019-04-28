let sitesMap = null;
let polygons = null;
const sites = [
  {
    id: 1,
    name: 'Khauki',
    area: '',
    center: [62.338199, 32.241964],
    points: [
      [62.3615, 32.2400],
      [62.3420, 32.2640],
      [62.3330, 32.2420],
      [62.3210, 32.2520],
      [62.3120, 32.2400],
      [62.3210, 32.2240],
      [62.3600, 32.2240],
      [62.3615, 32.2400]
    ],
    deposits: [
      {
        id: '1',
        name: 'Khauki-1',
        depositName: 'Block granite (gabbro-diabase)',
        area: '1.2 km2',
        center: [62.3555, 32.2345],
        points: [
          [62.3620, 32.2351],
          [62.3540, 32.2440],
          [62.3540, 32.2253],
          [62.3600, 32.2253]
        ]
      },
      {
        id: '2',
        name: 'Khauki-2',
        depositName: 'Block granite (gabbro-diabase)',
        area: '0.38 km2',
        center: [62.3450, 32.2540],
        points: [
          [62.3505, 32.2532],
          [62.3440, 32.2604],
          [62.3434, 32.2554],
          [62.3452, 32.2500]
        ]
      },
      {
        id: '3',
        name: 'Khauki-3',
        depositName: 'Block granite (gabbro-diabase)',
        area: '0.63 km2',
        center: [62.3420, 32.2605],
        points: [
          [62.3435, 32.2611],
          [62.3416, 32.2638],
          [62.3353, 32.2520],
          [62.3421, 32.2539]
        ]
      },
      {
        id: '4',
        name: 'Khauki-4',
        depositName: 'Block granite (gabbro-diabase)',
        area: '0.62 km2',
        center: [62.3400, 32.2330],
        points: [
          [62.3415, 32.2253],
          [62.3420, 32.2220],
          [62.3345, 32.2410],
          [62.3340, 32.2330]
        ]
      },
      {
        id: '5',
        name: 'Khauki-5',
        depositName: 'Block granite (gabbro-diabase)',
        area: '',
        center: [],
        points: [
          [62.3356, 32.2231],
          [62.3404, 32.2257],
          [62.3339, 32.2322],
          [62.3333, 32.2243]
        ]
      },
      {
        id: '6',
        name: 'Khauki-6',
        depositName: 'Block granite (gabbro-diabase)',
        area: '',
        center: [],
        points: [
          [62.3328, 32.2245],
          [62.3339, 32.2336],
          [62.3313, 32.2336],
          [62.3313, 32.2245]
        ]
      },
      {
        id: '7',
        name: 'Khauki-7',
        depositName: 'Block granite (gabbro-diabase)',
        area: '',
        center: [],
        points: [
          [62.3250, 32.2240],
          [62.3250, 32.2320],
          [62.3210, 32.2320],
          [62.3230, 32.2240]
        ]
      },
      {
        id: '8',
        name: 'Khauki-8',
        depositName: 'Block granite (gabbro-diabase)',
        area: '0.76 km2',
        center: [62.3238, 32.2350],
        points: [
          [62.3300, 32.2324],
          [62.3300, 32.2400],
          [62.3230, 32.2410],
          [62.3210, 32.2410],
          [62.3210, 32.2340]
        ]
      },
      {
        id: '9',
        name: 'Khauki-9',
        depositName: 'Block granite (gabbro-diabase)',
        area: '',
        center: [],
        points: [
          [62.3310, 32.2409],
          [62.3310, 32.2442],
          [62.3330, 32.2452],
          [62.3220, 32.2420]
        ]
      },
      {
        id: '10',
        name: 'Khauki-10',
        depositName: 'Block granite (gabbro-diabase)',
        area: '',
        center: [],
        points: [
          [62.3155, 32.2350],
          [62.3150, 32.2440],
          [62.3120, 32.2400],
          [62.3135, 32.2340]
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Helga',
    depositName: 'Block granite (gabbro-diabase)',
    area: '0.62 km2',
    center: [],
    points: [
      [62.3530, 32.2507],
      [62.3530, 32.2600],
      [62.3500, 32.2620],
      [62.3450, 32.2600]
    ],
    deposits: []
  }
];

function drawMap() {
  sitesMap = new ymaps.Map("map", {
    center: sites[0].center,
    zoom: 13
  });
  drawSites();
}

function drawSites() {
  polygons = [];
  sites.forEach((site) => {
    addSite(site);
    site.deposits.forEach((deposite) => {
      addSite(deposite);
    })
  });
}

function addSite(site) {
  const myPolygon = new ymaps.GeoObject({
    geometry: {
      // Тип геометрии - "Многоугольник".
      type: "Polygon",
      // Указываем координаты вершин многоугольника.
      coordinates: [
        [...site.points]
      ],
      // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
      fillRule: "nonZero",
    },
    properties: {
      balloonContent: "Многоугольник"
    },
  }, {
    // Описываем опции геообъекта.
    // Цвет заливки.
    fillColor: '#FFFFFF',
    // Цвет обводки.
    strokeColor: '#0000FF',
    // Общая прозрачность (как для заливки, так и для обводки).
    opacity: 0.5,
    // Ширина обводки.
    strokeWidth: 5,
    // Стиль обводки.
    strokeStyle: 'shortdash'
  });
  polygons.push(myPolygon);
  sitesMap.geoObjects.add(myPolygon);
}

ymaps.ready(drawMap);

/*
// Создаем многоугольник, используя вспомогательный класс Polygon.
    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [55.75, 37.50],
            [55.80, 37.60],
            [55.75, 37.70],
            [55.70, 37.70],
            [55.70, 37.50]
        ],
        // Координаты вершин внутреннего контура.
        [
            [55.75, 37.52],
            [55.75, 37.68],
            [55.65, 37.60]
        ]
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Многоугольник"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF0088',
        // Ширина обводки.
        strokeWidth: 5
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myPolygon);
 */