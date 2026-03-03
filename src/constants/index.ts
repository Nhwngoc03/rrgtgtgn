
import { Product, Order, OrderStatus, CookingCombo, ComboDish } from '../types/index';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cà chua Rita Đà Lạt',
    category: 'Rau ăn quả',
    price: 25000,
    originalPrice: 45000,
    unit: '1kg',
    imageLeft: ['https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/612939121_1466151468884181_447711370780675336_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=zo3UJTxbbgYQ7kNvwGI6KVH&_nc_oc=AdlSMGmkLZlNdAYpqURbV8WD0ksX9u38JEokKC7UwxH0PX7znuMa0vTH3BXw5oRjJyo&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=DT93h1dUHiIYJ5pUHkHRGQ&_nc_ss=8&oh=00_Aftcl4UOiw3RBHpuKZL6vugpp_PZKoOSpAv2YM3u6J0n6A&oe=69A8ECF6',
      'https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/612969290_1466151472217514_8463748259141294621_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=JOZuHuoaOF0Q7kNvwGLiMzY&_nc_oc=AdkMCqf_IoekZkZbfdK6bvTGo5A2WZVD4TB14_AtTmgryMWqnVO0dF9YNET53Y2lBdU&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=FJHnoEtHH0wsNUakBmpeXQ&_nc_ss=8&oh=00_AfvxOpofzwWmILKiAdqUMps4d4xcsBdVlEWkAfKnf4-9FQ&oe=69A8D0A8',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/612939121_1466151468884181_447711370780675336_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=zo3UJTxbbgYQ7kNvwGI6KVH&_nc_oc=AdlSMGmkLZlNdAYpqURbV8WD0ksX9u38JEokKC7UwxH0PX7znuMa0vTH3BXw5oRjJyo&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=DT93h1dUHiIYJ5pUHkHRGQ&_nc_ss=8&oh=00_Aftcl4UOiw3RBHpuKZL6vugpp_PZKoOSpAv2YM3u6J0n6A&oe=69A8ECF6',
  'https://cdn.tgdd.vn/2020/12/content/13-800x500-4.jpg'],
    image: 'https://cdn.tgdd.vn/2020/12/CookProduct/10-1200x676-5.jpg',
    farm: 'Vườn Chú Bảy - Đà Lạt',
    distance: '3.5 km',
    rating: 4.9,
    soldCount: 1200,
    stock: 50,
    expiry: '3-5 ngày'
    ,
    tags: ['cà chua vietgap', 'cà chua sạch', 'rau củ đà lạt'],
   description:
      'Cà chua Rita Đà Lạt có vỏ đỏ tươi, thịt dày và vị ngọt nhẹ. Sản phẩm đạt chuẩn VietGAP, thích hợp ăn sống, làm salad, nấu canh hoặc chế biến sốt cà chua.'
  },
  {
    id: '2',
    name: 'Cà Rốt Nhiều Chân Đăk Lăk',
    category: 'Rau ăn lá',
    price: 15000,
    originalPrice: 27000,
    unit: '1kg',
    imageLeft: [
      'https://media.istockphoto.com/id/529667082/vi/anh/c%C3%A0-r%E1%BB%91t-h%E1%BB%AFu-c%C6%A1-x%E1%BA%A5u-x%C3%AD-h%E1%BB%A3p-th%E1%BB%9Di-trang.jpg?s=612x612&w=0&k=20&c=pDesuFT2zcXpmRTjLtdwQxYjSps2vfIzsX03XTeF1ag=',
      'https://media.istockphoto.com/id/1353480236/vi/anh/b%E1%BB%8B-t%E1%BB%AB-ch%E1%BB%91i-v%E1%BB%81-ngo%E1%BA%A1i-h%C3%ACnh-c%C3%A0-r%E1%BB%91t-%C4%91ang-n%E1%BA%B1m-trong-v%C6%B0%E1%BB%9Dn-c%C3%A0-r%E1%BB%91t-h%E1%BB%A3p-nh%E1%BA%A5t-b%E1%BA%A5t-th%C6%B0%E1%BB%9Dng-v%E1%BB%9Bi-nhi%E1%BB%81u-%C4%91u%C3%B4i.jpg?s=612x612&w=0&k=20&c=OX6K30MdtWgOO0AiCixw3p1HTNFZQzl1d_MeSQbRQjM=',
      'https://media.istockphoto.com/id/1214984376/vi/anh/c%C3%A0-r%E1%BB%91t-sai-l%E1%BA%A7m-x%E1%BA%A5u-x%C3%AD-tr%C3%AAn-n%E1%BB%81n-xanh-kh%C3%A1i-ni%E1%BB%87m-kh%C3%B4ng-s%E1%BA%A3n-xu%E1%BA%A5t-ch%E1%BA%A5t-th%E1%BA%A3i-ch%E1%BA%BF-%C4%91%E1%BB%99-xem-tr%C3%AAn-c%C3%B9ng-sao.jpg?s=612x612&w=0&k=20&c=sPMuC524HiskqawSbLzQC7si2xs3jd6rIhEKZ2pYUR8=',
      'https://media.istockphoto.com/id/2239855190/vi/anh/m%E1%BB%99t-g%C3%B3c-nh%C3%ACn-th%C3%BA-v%E1%BB%8B-v%E1%BB%81-c%C3%A0-r%E1%BB%91t-m%E1%BB%9Bi-thu-ho%E1%BA%A1ch-trong-tr%C3%A1i-%C4%91%E1%BA%A5t-t%E1%BB%91i-t%C4%83m-tr%C3%B9-ph%C3%BA.jpg?s=612x612&w=0&k=20&c=gARiEYgvrEjFoMXGjV7KquDG53RYjzCFZhR0CC6I2vM='
    ],
    image: 'https://media.istockphoto.com/id/1343936481/vi/anh/c%C3%A0-r%E1%BB%91t-v%E1%BB%9Bi-r%E1%BB%85-xo%E1%BA%AFn-tr%C3%AAn-b%C3%A0n-g%E1%BB%97.jpg?s=612x612&w=0&k=20&c=9pE4Ar4DC2W4VF9EEVEtVpjl2Hf9L5B9xVE2Q8nKWPA=',
    farm: 'Vườn Chú Tư',
    distance: '1.2 km',
    rating: 4.8,
    soldCount: 850,
    stock: 100,
    expiry: '2 ngày'
    ,
    tags: ['nông sản Dăk Lăk', 'rau củ tươi', 'rau sạch Dăk Lăk'],
     description:
      'Cà rốt Đăk Lăk tươi giòn, vị ngọt tự nhiên và giàu vitamin A. Phù hợp chế biến món xào, nấu canh, ép nước hoặc ăn sống trong salad.'
  },
  {
    id: '3',
    name: 'Khoai tây Bảo Lộc',
    category: 'Trái cây',
    price: 12000,
    originalPrice: 29000,
    unit: 'Quả',
    imageLeft: ['https://media.istockphoto.com/id/1340923255/vi/anh/b%C3%A0n-tay-c%E1%BB%A7a-m%E1%BB%99t-n%C3%B4ng-d%C3%A2n-c%E1%BA%A7m-c%E1%BB%A7-khoai-t%C3%A2y-h%E1%BB%A3p-nh%E1%BA%A5t-tr%C3%AAn-n%E1%BB%81n-c%E1%BB%A7a-m%E1%BB%99t-%C4%91%E1%BB%91ng-c%C3%A2y-tr%E1%BB%93ng-thu-ho%E1%BA%A1ch.jpg?s=612x612&w=0&k=20&c=d8_GNY-TqMw6UK8hDdG-h-h2sSBWU-5r_1_UPf1StLk=',
      'https://media.istockphoto.com/id/2193498800/vi/anh/khoai-t%C3%A2y-c%C3%B3-h%C3%ACnh-d%E1%BA%A1ng-kh%C3%A1c-th%C6%B0%E1%BB%9Dng-n%E1%BA%B1m-tr%C3%AAn-m%E1%BA%B7t-%C4%91%E1%BA%A5t-tr%C3%AAn-n%E1%BB%81n-%C4%91en-kh%C3%A1i-ni%E1%BB%87m-k%E1%BB%B3-l%E1%BA%A1-v%E1%BB%81-rau-ch%E1%BA%BF-%C4%91%E1%BB%99.jpg?s=612x612&w=0&k=20&c=5CwmKdwvpT3sAe0aSko31qYQoXxobb94htjMdy1AaFU=',
      'https://media.istockphoto.com/id/1158435528/vi/anh/k%E1%BB%B3-l%E1%BA%A1-nh%C3%ACn-l%E1%BB%9Bn-x%E1%BA%A5u-x%C3%AD-%C4%91%E1%BB%99t-bi%E1%BA%BFn-khoai-t%C3%A2y-kh%C3%B4ng-%C4%91%E1%BB%93ng-%C4%91%E1%BB%81u-trong-tay-ngo%C3%A0i-tr%E1%BB%9Di-c%E1%BB%8F-xanh-tr%C3%AAn-n%E1%BB%81n.jpg?s=612x612&w=0&k=20&c=xqt5zqxTi6Z7uSieztfwgokbNtUa5ylBKipRBzCiJ9A=',
      'https://media.istockphoto.com/id/2172557449/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-b%C3%A0n-tay-%C4%91eo-g%C4%83ng-tay-xanh-c%E1%BA%A7m-c%E1%BB%A7-khoai-t%C3%A2y-h%E1%BB%AFu-c%C6%A1-h%C3%ACnh-tr%C3%A1i-tim-tr%C3%AAn-n%E1%BB%81n-khoai-t%C3%A2y.jpg?s=612x612&w=0&k=20&c=1IcYInHZvA48yAka2bB35BgthHKeHMEHyNyMfH6sZIs='

    ],
    image: 'https://media.istockphoto.com/id/1692110148/vi/anh/khoai-t%C3%A2y-x%E1%BA%A5u-x%C3%AD.jpg?s=612x612&w=0&k=20&c=4ckaXVqtpG8bec5tLIfiHO_ZTvPBIKd44_LMWSL03Bc=',
    farm: 'Vườn Trái Cây Miền Tây',
    distance: '5.1 km',
    rating: 4.7,
    soldCount: 420,
    stock: 30,
    expiry: '10 ngày'
    ,
    tags: ['khoai tây tươi', 'khoai tây sạch', 'khoai tây lâm đồng'],
   description:
      'Khoai tây Bảo Lộc có củ chắc, bở và thơm nhờ khí hậu cao nguyên. Lý tưởng để chiên giòn, làm khoai nghiền, nấu súp hoặc chế biến món ăn gia đình.'
  },
  {
    id: '4',
    name: 'Cam sành Đà Lạt',
    category: 'Củ & hạt',
    price: 12000,
    originalPrice: 30000,
    unit: '1kg',
    imageLeft: [
      'https://media.istockphoto.com/id/1202770247/vi/anh/ti%E1%BA%BFng-ph%E1%BB%95-th%C3%B4ng.jpg?s=612x612&w=0&k=20&c=BiZN12GgI302kn8eHH1BD-FLOq3d1qVhekJ5sv8K2dQ=',
      'https://media.istockphoto.com/id/1203126772/vi/anh/cam-c%E1%BB%A7a-%C4%91%E1%BA%A3o-jeju-l%C3%A0-hanrabong.jpg?s=612x612&w=0&k=20&c=zUy3vpGlkvGONU7SKeK1WDGKSHYRiBNakQquhGugN-Y=',
      'https://media.istockphoto.com/id/1486548183/vi/anh/qu%E1%BA%A3-cam.jpg?s=612x612&w=0&k=20&c=onlx08poZv5cDMxRXe4Lm_wSl4X8dZkmonaL9k14tbc=',
      'https://media.istockphoto.com/id/471475756/vi/anh/cam-qu%C3%BDt-t%C6%B0%C6%A1i.jpg?s=612x612&w=0&k=20&c=0KInyWiyIyz7xPS9TmvKfE8L5cEhc-N-ZoVF7JLABWc='
    ],
    image: 'https://media.istockphoto.com/id/1034691524/vi/anh/sumo-citrus-ho%E1%BA%B7c-dekopon-mandarin.jpg?s=612x612&w=0&k=20&c=vRIhd0myYYbzCedtV4sHWtIKwoZnCdrt51DuveHcRCc=',
    farm: 'Nhà Vườn Hóc Môn',
    distance: '0.8 km',
    rating: 4.8,
    soldCount: 1560,
    stock: 200,
    expiry: '15 ngày'
    ,
    tags: ['khoai tây tươi', 'khoai lang ngọt', 'Hấp dẫn'],
description:
      'Cam sành Đà Lạt có vỏ xanh, ruột vàng cam, vị ngọt thanh pha chút chua nhẹ. Giàu vitamin C, thích hợp ăn tươi, ép nước và tăng cường sức đề kháng.'
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-5521',
    date: '14:20, 24/10/2023',
    status: OrderStatus.PENDING,
    total: 285000,
    items: [
      { name: 'Xà lách thủy canh', quantity: '2kg', price: 45000 },
      { name: 'Cà rốt hữu cơ', quantity: '3kg', price: 65000 }
    ],
    customer: {
      name: 'Nguyễn Thị Thu Hà',
      phone: '0908 *** 123',
      address: 'Quận 7, TP.HCM'
    }
  }
];

// Dish suggestions based on ingredients
export const DISH_SUGGESTIONS: { [key: string]: ComboDish[] } = {
  '1': [ // Cà chua
    {
      id: 'd1',
      name: 'Canh Cà Chua Trứng',
      description: 'Các mặt nước ngọt với cà chua tươi, trứng và nấm',
      ingredients: ['1'],
      image: 'https://picsum.photos/seed/soup/400/400',
      difficulty: 'Dễ',
      cookingTime: '15 phút'
    },
    {
      id: 'd2',
      name: 'Salad Cà Chua Mozzarella',
      description: 'Salad cà chua tươi với phô mai mozzarella và dầu ô liu',
      ingredients: ['1'],
      image: 'https://picsum.photos/seed/salad/400/400',
      difficulty: 'Dễ',
      cookingTime: '5 phút'
    },
    {
      id: 'd3',
      name: 'Cà Chua Nướng Nhân',
      description: 'Cà chua nướng chế biến truyền thống, tươi ngon',
      ingredients: ['1'],
      image: 'https://picsum.photos/seed/roasted/400/400',
      difficulty: 'Vừa',
      cookingTime: '25 phút'
    }
  ],
  '2': [ // Cải bẹ xanh
    {
      id: 'd4',
      name: 'Cải Xanh Xào Tỏi',
      description: 'Cải bẹ xanh xào với tỏi, mềm ngọt',
      ingredients: ['2'],
      image: 'https://picsum.photos/seed/stir-fry/400/400',
      difficulty: 'Dễ',
      cookingTime: '10 phút'
    },
    {
      id: 'd5',
      name: 'Canh Cải Xanh Cua',
      description: 'Canh thanh từ từ với cải xanh tươi và cua biển',
      ingredients: ['2'],
      image: 'https://picsum.photos/seed/soup/400/400',
      difficulty: 'Vừa',
      cookingTime: '20 phút'
    },
    {
      id: 'd6',
      name: 'Cải Xanh Luộc Nước Tương',
      description: 'Cải xanh luộc vàng với nước tương chua ngọt',
      ingredients: ['2'],
      image: 'https://picsum.photos/seed/vegetable/400/400',
      difficulty: 'Dễ',
      cookingTime: '8 phút'
    }
  ],
  '3': [ // Bưởi
    {
      id: 'd7',
      name: 'Salad Bưởi Tôm',
      description: 'Salad bưởi tươi kết hợp với tôm sú, vị chua ngọt hấp dẫn',
      ingredients: ['3'],
      image: 'https://picsum.photos/seed/pomelo-salad/400/400',
      difficulty: 'Vừa',
      cookingTime: '15 phút'
    },
    {
      id: 'd8',
      name: 'Bưởi Xào Gừng',
      description: 'Bưởi xào với gừng, hành tây, vị thơm lạ',
      ingredients: ['3'],
      image: 'https://picsum.photos/seed/stir-fry/400/400',
      difficulty: 'Vừa',
      cookingTime: '12 phút'
    }
  ],
  '4': [ // Khoai lang
    {
      id: 'd9',
      name: 'Khoai Lang Nướng Còi',
      description: 'Khoai lang nướng nguyên vỏ, dẻo ngon',
      ingredients: ['4'],
      image: 'https://picsum.photos/seed/roasted-potato/400/400',
      difficulty: 'Dễ',
      cookingTime: '30 phút'
    },
    {
      id: 'd10',
      name: 'Cơm Chiên Khoai Lang',
      description: 'Cơm chiên với khoai lang, xu hướng ăn lành mạnh',
      ingredients: ['4'],
      image: 'https://picsum.photos/seed/fried-rice/400/400',
      difficulty: 'Vừa',
      cookingTime: '18 phút'
    },
    {
      id: 'd11',
      name: 'Chè Khoai Lang Nước Cốt Dừa',
      description: 'Chè ngọt từ khoai lang với nước cốt dừa thơm',
      ingredients: ['4'],
      image: 'https://picsum.photos/seed/dessert/400/400',
      difficulty: 'Dễ',
      cookingTime: '25 phút'
    }
  ]
};

export const MOCK_COMBOS: CookingCombo[] = [
  {
    id: 'combo-1',
    name: 'Combo Salad Tươi Mát',
    description: 'Bộ combo salad hoàn chỉnh với các rau tươi, tốt cho sức khỏe',
    farm: 'Vườn Chú Bảy - Đà Lạt',
    farmImage: 'https://picsum.photos/seed/farm/100/100',
    selectedIngredients: ['1', '2'],
    suggestedDishes: [
      {
        id: 'd2',
        name: 'Salad Cà Chua Mozzarella',
        description: 'Salad cà chua với phô mai mozzarella',
        ingredients: ['1'],
        image: 'https://picsum.photos/seed/salad/400/400',
        difficulty: 'Dễ',
        cookingTime: '5 phút'
      },
      {
        id: 'd5',
        name: 'Canh Cải Xanh Cua',
        description: 'Canh thanh từ từ với cải xanh tươi',
        ingredients: ['2'],
        image: 'https://picsum.photos/seed/soup/400/400',
        difficulty: 'Vừa',
        cookingTime: '20 phút'
      }
    ],
    price: 95000,
    image: 'https://picsum.photos/seed/combo1/400/400',
    rating: 4.8,
    soldCount: 320,
    createdDate: '2024-01-15'
  }
];

