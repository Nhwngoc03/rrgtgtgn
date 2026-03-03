import React, { useState } from 'react';
import { Gift, ShoppingCart, Star, MapPin, Heart, Zap, ArrowRight, Search, Filter, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface BlindBox {
  id: string;
  name: string;
  price: number;
  originalValue: number;
  image: string;
  farmName: string;
  farmRating: number;
  distance: string;
  savedCount: number;
  items: string[];
  description: string;
  quantity: number;
  sold: number;
}

interface BlindBoxListProps {
  onSelectBlindBox: (id: string) => void;
  onAddToCart?: (id: string) => void;
  onBack?: () => void;
}

const BlindBoxList: React.FC<BlindBoxListProps> = ({ onSelectBlindBox, onAddToCart, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFarm, setSelectedFarm] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [currentPage, setCurrentPage] = useState(1);

  const mockBlindBoxes: BlindBox[] = [
    {
      id: '1',
      name: 'Gói Rau Xanh Bí Ẩn',
      price: 49000,
      originalValue: 85000,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop',
      farmName: 'Vườn Chú Bảy - Đà Lạt',
      farmRating: 4.9,
      distance: '3.5 km',
      savedCount: 234,
      items: ['Xà lách', 'Bắp cải', 'Súp lơ xanh'],
      description: 'Gói rau xanh tươi được lựa chọn ngẫu nhiên từ nông sản dư thừa',
      quantity: 15,
      sold: 340,
    },
    {
      id: '2',
      name: 'Combo Rau Củ Mix',
      price: 59000,
      originalValue: 110000,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop',
      farmName: 'Trang Trại Đất Đỏ',
      farmRating: 4.8,
      distance: '2.1 km',
      savedCount: 187,
      items: ['Cà rốt', 'Khoai tây', 'Hành tây', 'Bắp cải'],
      description: 'Mix các loại rau củ tươi ngon, chất lượng cao',
      quantity: 8,
      sold: 256,
    },
    {
      id: '3',
      name: 'Gói Trái Cây Mùa',
      price: 79000,
      originalValue: 150000,
      image: 'https://images.unsplash.com/photo-1599599810694-ad21baef1133?w=500&h=500&fit=crop',
      farmName: 'Vườn Trái Cây An Lạc',
      farmRating: 4.7,
      distance: '5.2 km',
      savedCount: 421,
      items: ['Cam', 'Chanh', 'Dưa hấu', 'Ổi'],
      description: 'Các loại trái cây tươi mới thuộc mùa hè',
      quantity: 5,
      sold: 198,
    },
    {
      id: '4',
      name: 'Gói Rau Gia Vị Đặc Biệt',
      price: 39000,
      originalValue: 65000,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop',
      farmName: 'Vườn Chú Bảy - Đà Lạt',
      farmRating: 4.9,
      distance: '3.5 km',
      savedCount: 156,
      items: ['Rau thơm', 'Hành lá', 'Tía tô'],
      description: 'Rau gia vị tươi ngon tái tạo từ dư thừa',
      quantity: 20,
      sold: 412,
    },
    {
      id: '5',
      name: 'Combo Tiết Kiệm Đặc Biệt',
      price: 99000,
      originalValue: 200000,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop',
      farmName: 'Trang Trại Đất Đỏ',
      farmRating: 4.8,
      distance: '2.1 km',
      savedCount: 562,
      items: ['Đa loại rau', 'Nhiều loại củ'],
      description: 'Gói tiết kiệm lớn với 10kg nông sản mix đa dạng',
      quantity: 3,
      sold: 89,
    },
    {
      id: '6',
      name: 'Gói Rau Sạch Cao Cấp',
      price: 69000,
      originalValue: 130000,
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&h=500&fit=crop',
      farmName: 'Vườn Trái Cây An Lạc',
      farmRating: 4.7,
      distance: '5.2 km',
      savedCount: 298,
      items: ['Rau mùa', 'Hoa cải'],
      description: 'Rau sạch chứng chỉ VietGAP được chọn lựa',
      quantity: 12,
      sold: 278,
    },
  ];

  const filteredBoxes = mockBlindBoxes.filter(box => {
    const matchesSearch = box.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         box.farmName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFarm = !selectedFarm || box.farmName === selectedFarm;
    const matchesPrice = box.price >= priceRange[0] && box.price <= priceRange[1];
    return matchesSearch && matchesFarm && matchesPrice;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredBoxes.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedBoxes = filteredBoxes.slice(startIdx, startIdx + itemsPerPage);

  const farms = [...new Set(mockBlindBoxes.map(b => b.farmName))];

  return (
    <main className="flex-1 bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Header with Back Button */}
      {onBack && (
        <div className="bg-white border-b border-gray-100 px-4 py-4 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="size-6 text-gray-600" />
              </button>
              <h1 className="text-xl font-black text-gray-900">Quay lại trang chủ</h1>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="size-8" />
            <h1 className="text-4xl font-black uppercase tracking-tight">Gói Mù Nông Sản</h1>
          </div>
          <p className="text-lg text-green-100 mb-4">Những túi quà bí ẩn chứa đầy nông sản tươi ngon chất lượng cao!</p>
          <div className="flex items-center gap-2 text-green-100">
            <Zap className="size-5 fill-current" />
            <span className="font-bold">Tiết kiệm tới 50% so với giá bình thường</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2 block">Tìm kiếm gói mù</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-300" />
                <input
                  type="text"
                  placeholder="Tìm kiếm gói mù..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
                />
              </div>
            </div>

            {/* Farm Filter */}
            <div>
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2 block">Nông trại</label>
              <select
                value={selectedFarm || ''}
                onChange={(e) => {
                  setSelectedFarm(e.target.value || null);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500/20 appearance-none cursor-pointer"
              >
                <option value="">Tất cả nông trại</option>
                {farms.map(farm => (
                  <option key={farm} value={farm}>{farm}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2 block">Giá tối đa</label>
              <input
                type="number"
                placeholder="200000"
                onChange={(e) => {
                  setPriceRange([priceRange[0], parseInt(e.target.value) || 200000]);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 font-medium">Tìm thấy <span className="font-black text-green-600">{filteredBoxes.length}</span> gói mù</span>
            <button className="text-xs text-green-600 font-black uppercase hover:bg-green-50 px-3 py-1 rounded transition-colors">
              <Filter className="size-4 inline mr-2" />
              Đặt lại
            </button>
          </div>
        </div>

        {/* Blind Boxes Grid */}
        {paginatedBoxes.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedBoxes.map((box) => (
                <div
                  key={box.id}
                  onClick={() => {
                    console.log('Blind box clicked:', box.id, box.name);
                    onSelectBlindBox(box.id);
                  }}
                  className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group cursor-pointer active:scale-95"
                >
                  {/* Image */}
                  <div
                    className="relative aspect-square w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden"
                    onClick={() => onSelectBlindBox(box.id)}
                  >
                    <img
                      src={box.image}
                      alt={box.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                    <div className="absolute top-4 left-4 bg-green-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase flex items-center gap-1">
                      <Gift className="size-3 fill-current" /> Mù bí ẩn
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all hover:scale-110 group/heart">
                        <Heart className="size-5 text-gray-300 group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-all" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-red-500 text-white text-xs font-black px-3 py-1.5 rounded-full">
                      -{Math.round(((box.originalValue - box.price) / box.originalValue) * 100)}%
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      onClick={() => onSelectBlindBox(box.id)}
                      className="text-gray-900 font-extrabold text-lg line-clamp-2 group-hover:text-green-600 transition-colors cursor-pointer"
                    >
                      {box.name}
                    </h3>

                    {/* Farm Info */}
                    <div className="flex items-center gap-2 my-3 text-sm">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="size-4 fill-current" />
                        <span className="font-bold text-gray-900">{box.farmRating}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 font-medium">{box.farmName}</span>
                    </div>

                    {/* Mystery Info */}
                    <div className="mb-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-1">🎁 Bí ẩn</p>
                      <p className="text-xs font-bold text-purple-700">
                        Gối quà chứa {box.items.length}-{box.items.length + 2} loại nông sản ngẫu nhiên
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <ShoppingCart className="size-3" />
                        Đã bán {box.sold}
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Heart className="size-3" />
                        {box.savedCount}
                      </div>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex flex-col">
                        <span className="text-gray-400 line-through text-sm">
                          {box.originalValue.toLocaleString('vi-VN')}đ
                        </span>
                        <span className="text-green-600 font-black text-2xl">
                          {box.price.toLocaleString('vi-VN')}đ
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart?.(box.id);
                        }}
                        className="size-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110 active:scale-95"
                      >
                        <ShoppingCart className="size-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mb-12">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <div className="flex gap-1">
                  {[...Array(Math.min(5, totalPages))].map((_, idx) => {
                    const pageNum = Math.max(1, currentPage - 2) + idx;
                    if (pageNum > totalPages) return null;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-lg font-black transition-all ${
                          currentPage === pageNum
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <Gift className="size-16 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Không tìm thấy gói mù nào</p>
            <p className="text-gray-400 text-sm">Hãy thử lại với các điều kiện tìm kiếm khác</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default BlindBoxList;
