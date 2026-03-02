
import React, { useState, useEffect, useRef } from 'react';
import { MOCK_PRODUCTS } from '../../constants/index';
import {
  Star,
  MapPin,
  ShoppingCart,
  ArrowRight,
  Zap,
  Award,
  Leaf,
  Utensils,
  Apple,
  LayoutGrid,
  Grape
} from 'lucide-react';
// import { generateProduceStory } from '../../services/geminiService';

interface HomeProps {
  onSelectProduct: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectProduct }) => {
  const [featuredStory, setFeaturedStory] = useState<string>('Nông sản từ vườn đến bàn ăn, giữ trọn hương vị tự nhiên và tâm huyết của người nông dân.');

  const categories = [
    { name: 'Rau ăn lá', icon: Leaf },
    { name: 'Rau gia vị', icon: Utensils },
    { name: 'Rau ăn quả', icon: Apple },
    { name: 'Củ & hạt', icon: LayoutGrid },
    { name: 'Trái cây', icon: Grape },
  ];

  return (
    <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-40 py-8 animate-in fade-in duration-500">
      {/* Hero Section - Matching the Screenshot */}
      <div className="relative h-[520px] w-full rounded-[40px] overflow-hidden mb-12 group shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-16">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#38543a] text-white px-4 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest mb-6">
              TỪ NÔNG TRẠI ĐẾN BÀN ĂN
            </span>
            <h1 className="text-xl md:text-4xl lg:text-3xl font-extrabold text-white leading-tight md:leading-[1.2] tracking-tight max-w-3xl">
              Nông Sản Xấu Mã kết nối những thực phẩm bị từ chối vì ngoại hình
              đến tay gia đình bạn.
              <br className="hidden md:block" />
              Chúng tôi cam kết nguồn nông sản
              <span className="text-[#4fa94d]"> Tươi - Sạch - Minh bạch </span>
              với mức giá tiết kiệm nhất,
              cùng bạn giảm thiểu lãng phí thực phẩm.
            </h1>

            <p className="mt-6 text-xl md:text-2xl font-semibold text-[#4fa94d]">
              Giá trị thật.
            </p>
            <button className="bg-[#38543a] hover:bg-[#2d432e] text-white px-10 py-4 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-black/20">
              Mua sắm ngay
            </button>
          </div>
        </div>
      </div>
    
      {/* Categories Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-20">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center gap-4 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="size-16 bg-green-50/50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <cat.icon className="size-7" />
            </div>
            <span className="text-xs font-black text-gray-800 uppercase tracking-widest">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Product List */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-10 px-2">
          <h2 className="text-3xl font-black uppercase font-display text-gray-900 tracking-tight">Nông sản sạch hôm nay</h2>
          <button className="text-xs font-black text-primary uppercase tracking-widest hover:underline">Xem tất cả</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product.id)}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col cursor-pointer group"
            >
              <div className="relative aspect-[4/3] w-full bg-white flex items-center justify-center overflow-hidden">
                <img className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" src={product.image} alt={product.name} />
                <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black px-2 py-1 rounded-lg uppercase">FRESH</div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-gray-900 font-extrabold text-lg line-clamp-2 group-hover:text-primary transition-colors h-14 overflow-hidden">{product.name}</h3>
                <div className="flex items-center justify-between mb-3 h-6">
                  <div className="flex items-center gap-1.5 text-yellow-500">
                    <Star className="size-4 fill-current" />
                    <span className="text-xs font-bold text-gray-900">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    <MapPin className="size-3" /> {product.distance}
                  </div>
                </div>
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-50">
                  <div className="flex flex-col">
                    <span className="text-primary font-black text-2xl">{product.price.toLocaleString('vi-VN')}đ</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase mt-0.5">Mỗi {product.unit}</span>
                  </div>
                  <button className="size-11 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <ShoppingCart className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Testimonials Section */}
      <div className="my-20 bg-green-50/60 py-4 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-black mb-8 text-gray-800">Khách hàng nói gì về chúng tôi</h2>
          <div className="relative">
            {/* Carousel */}
            <CarouselTestimonials />
          </div>
        </div>
      </div>

      </div>
    </main>
  );
};

const CarouselTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Anh D',
      text: 'Chúng tôi rất hài lòng với sự đa dạng và độ tươi của rau quả. Sản phẩm giữ tươi lâu hơn nhiều so với hàng siêu thị.'
    },
    {
      name: 'Chi C',
      text: 'Giá trị tuyệt vời và chất lượng rất tốt. Chúng tôi so sánh và tiết kiệm đáng kể so với giá siêu thị. Dịch vụ giao hàng cũng rất chuyên nghiệp.'
    },
    {
      name: 'Anh D',
      text: 'Rất ấn tượng với hương vị sản phẩm — thật tuyệt vời! Rất đáng để thử.'
    }
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let nearest = 0;
      let minDist = Infinity;
      children.forEach((c, idx) => {
        const cCenter = c.offsetLeft + c.clientWidth / 2;
        const dist = Math.abs(center - cCenter);
        if (dist < minDist) {
          minDist = dist;
          nearest = idx;
        }
      });
      setCurrent(nearest);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = containerRef.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (child && el) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setCurrent(i);
    }
  };

  return (
    <>
      <div ref={containerRef} className="flex gap-6 overflow-x-auto pb-6 px-2 scroll-smooth">
        {testimonials.map((t, i) => (
          <div key={i} className="min-w-[520px] bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm border border-gray-100">
            <div className="w-20 h-20 rounded-full bg-white border-2 border-purple-800 flex items-center justify-center overflow-hidden">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-black">{t.name.split(' ')[0].charAt(0)}</div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex text-green-500">
                  {[...Array(5)].map((_, k) => <Star key={k} className="size-4 fill-current" />)}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{t.text}</p>
              <div className="font-bold text-gray-900">{t.name}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <div className="flex gap-3 items-center">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`w-6 h-2 rounded-full transition-colors ${current === i ? 'bg-green-900' : 'bg-gray-200'}`} aria-label={`Go to testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
