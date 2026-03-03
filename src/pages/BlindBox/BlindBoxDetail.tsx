import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, ArrowLeft, MapPin, Award, Leaf, Plus, Minus, Info, Zap, Gift } from 'lucide-react';

interface BlindBoxDetailProps {
  blindBoxId: string;
  onBack: () => void;
  onAddToCart?: (id: string) => void;
}

const BlindBoxDetail: React.FC<BlindBoxDetailProps> = ({ blindBoxId, onBack, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data - trong thực tế sẽ lấy từ props hoặc API
  const mockBlindBoxes: any = {
    '1': {
      id: '1',
      name: 'Gói Rau Xanh Bí Ẩn',
      price: 49000,
      originalValue: 85000,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop',
      farmName: 'Vườn Chú Bảy - Đà Lạt',
      farmRating: 4.9,
      farmImage: 'https://picsum.photos/seed/farm1/100/100',
      distance: '3.5 km',
      savedCount: 234,
      items: ['Xà lách', 'Bắp cải', 'Súp lơ xanh'],
      description: 'Gói rau xanh tươi được lựa chọn ngẫu nhiên từ nông sản dư thừa. Sản phẩm đảm bảo chất lượng cao, tươi ngon, an toàn cho sức khỏe gia đình bạn.',
      quantity: 15,
      sold: 340,
      reviews: 128,
      rating: 4.8,
      benefits: [
        'Tiết kiệm đến 50% so với giá thường',
        'Nông sản tươi mới, được lựa chọn kỹ',
        'Giao hàng nhanh chóng, miễn phí trong 3km',
        'Hỗ trợ đổi trả nếu không hài lòng'
      ],
      details: {
        origin: 'Đà Lạt',
        weight: '3-5kg',
        expiry: '3-5 ngày',
        packaging: 'Hộp carton thân thiện với môi trường'
      }
    },
    '2': {
      id: '2',
      name: 'Combo Rau Củ Mix',
      price: 59000,
      originalValue: 110000,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop',
      farmName: 'Trang Trại Đất Đỏ',
      farmRating: 4.8,
      farmImage: 'https://picsum.photos/seed/farm2/100/100',
      distance: '2.1 km',
      savedCount: 187,
      items: ['Cà rốt', 'Khoai tây', 'Hành tây', 'Bắp cải'],
      description: 'Mix các loại rau củ tươi mới, đa dạng và chất lượng cao. Hoàn hảo cho gia đình muốn tìm hiểu các loại rau khác nhau.',
      quantity: 8,
      sold: 256,
      reviews: 95,
      rating: 4.7,
      benefits: [
        'Tiết kiệm đến 46% so với giá thường',
        'Mix đa dạng các loại rau củ',
        'Giao hàng nhanh, chất lượng đảm bảo',
        'Hoàn tiền nếu không hài lòng'
      ],
      details: {
        origin: 'Tây Nguyên',
        weight: '4-6kg',
        expiry: '4-6 ngày',
        packaging: 'Hộp carton bảo vệ tối ưu'
      }
    },
    '3': {
      id: '3',
      name: 'Gói Trái Cây Mùa',
      price: 79000,
      originalValue: 150000,
      image: 'https://images.unsplash.com/photo-1599599810694-ad21baef1133?w=800&h=800&fit=crop',
      farmName: 'Vườn Trái Cây An Lạc',
      farmRating: 4.7,
      farmImage: 'https://picsum.photos/seed/farm3/100/100',
      distance: '5.2 km',
      savedCount: 421,
      items: ['Cam', 'Chanh', 'Dưa hấu', 'Ổi'],
      description: 'Các loại trái cây tươi mới thuộc mùa hè. Chọn lựa tỉ mỉ từ những vườn trồng organic.',
      quantity: 5,
      sold: 198,
      reviews: 76,
      rating: 4.9,
      benefits: [
        'Tiết kiệm đến 47% so với giá thường',
        'Trái cây ngon, tươi mới',
        'Được kiểm tra kỹ lưỡng',
        'Giao nhanh, đóng gói cẩn thận'
      ],
      details: {
        origin: 'Tiền Giang',
        weight: '5-7kg',
        expiry: '5-7 ngày',
        packaging: 'Thùng carton chuyên dụng cho trái cây'
      }
    }
  };

  const box = mockBlindBoxes[blindBoxId] || mockBlindBoxes['1'];

  return (
    <div className="w-full bg-white pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="size-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-black text-gray-900">Chi tiết gói mù</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Image */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
              <img
                src={box.image}
                alt={box.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-black text-xs flex items-center gap-2">
                <Gift className="size-4 fill-current" /> Mù bí ẩn
              </div>
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
                >
                  <Heart
                    className={`size-6 transition-all ${
                      isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-300'
                    }`}
                  />
                </button>
              </div>
              <div className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-black text-sm">
                -{Math.round(((box.originalValue - box.price) / box.originalValue) * 100)}%
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-black text-gray-900 mb-4">{box.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${
                        i < Math.floor(box.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-gray-900">{box.rating}</span>
                <span className="text-gray-500">({box.reviews} đánh giá)</span>
                <span className="text-gray-500">• {box.sold} đã bán</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mbpy-4">{box.description}</p>
            </div>

            {/* Mystery Info */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <p className="text-xs font-black text-purple-600 uppercase tracking-widest mb-3">
                🎁 Hộp quà bí ẩn
              </p>
              <p className="text-2xl font-black text-purple-700 mb-2">
                {box.items.length}-{box.items.length + 2} loại nông sản
              </p>
              <p className="text-sm text-purple-600">
                Khám phá những bất ngờ thú vị! Hãy mở gói quà để biết bên trong có những nông sản tươi ngon nào.
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-gray-400 line-through text-lg">
                {box.originalValue.toLocaleString('vi-VN')}đ
              </span>
              <span className="text-5xl font-black text-green-600">
                {box.price.toLocaleString('vi-VN')}đ
              </span>
            </div>

            {/* Farm Info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                  <img src={box.farmImage} alt={box.farmName} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900">{box.farmName}</h3>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{box.farmRating}</span>
                    <span className="text-gray-500">•</span>
                    <MapPin className="size-4 text-gray-400" />
                    <span className="text-gray-600">{box.distance}</span>
                  </div>
                </div>
              </div>
              <button className="w-full py-3 bg-green-50 text-green-700 font-black rounded-lg hover:bg-green-100 transition-colors">
                💬 Liên hệ nông trại
              </button>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="size-5 text-gray-600" />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center font-bold outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="size-5 text-gray-600" />
                </button>
              </div>
              <button
                onClick={() => onAddToCart?.(box.id)}
                className="flex-1 py-4 bg-green-600 hover:bg-green-700 text-white font-black rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
              >
                <ShoppingCart className="size-6" />
                Thêm vào giỏ
              </button>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 rounded-lg p-4 flex gap-3 border border-blue-200">
              <Info className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-700">
                Gói bí ẩn được chuẩn bị tự động & giao hàng trong vòng 24h. Nếu không hài lòng, bạn có thể hoàn trả nếu sản phẩm còn nguyên vẹn.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {box.benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">
                {idx === 0 && '💰'}
                {idx === 1 && '✨'}
                {idx === 2 && '🚚'}
                {idx === 3 && '↩️'}
              </div>
              <p className="font-bold text-gray-900">{benefit}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Thông tin sản phẩm</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Xuất xứ</p>
              <p className="text-lg font-bold text-gray-900">{box.details.origin}</p>
            </div>
            <div>
              <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Trọng lượng</p>
              <p className="text-lg font-bold text-gray-900">{box.details.weight}</p>
            </div>
            <div>
              <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Hạn sử dụng</p>
              <p className="text-lg font-bold text-gray-900">{box.details.expiry}</p>
            </div>
            <div>
              <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Đóng gói</p>
              <p className="text-lg font-bold text-gray-900">{box.details.packaging}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindBoxDetail;
