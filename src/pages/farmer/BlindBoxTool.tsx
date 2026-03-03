
import React, { useState } from 'react';
import { Sparkles, Info, ArrowRight, Package, Box, Zap, Gift, Trash2, Sprout, Plus } from 'lucide-react';

const BlindBoxTool: React.FC = () => {
  const [selectedBoxType, setSelectedBoxType] = useState<'small' | 'medium' | 'large'>('medium');
  const [price, setPrice] = useState(124000);
  const [selectedItems, setSelectedItems] = useState<number[]>([1, 2, 3]);
  const [isPublic, setIsPublic] = useState(true);
  const [runningBoxes, setRunningBoxes] = useState([
    { id: 1, name: 'Gói Đất Đỏ', price: 124000, sold: 12, createdDate: '2024-01-15' },
  ]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const boxTypes = {
    small: {
      label: 'Box 2-3kg',
      weight: '2-3kg',
      priceMin: 99000,
      priceMax: 149000,
      kitbag: '50k/kg',
      description: 'Phù hợp khách hàng nhỏ lẻ như sinh viên và công nhân. Vừa vặn để treo trên xe máy, hoặc để trong cốp xe',
      items: '3 - 5 loại nông sản'
    },
    medium: {
      label: 'Box 5-7kg',
      weight: '5-7kg',
      priceMin: 199000,
      priceMax: 299000,
      kitbag: '40k/kg',
      description: 'Phù hợp khách hàng là hộ gia đình. Tạo cảm giác đầy đặn, mở hộp ra thấy nhiều loại quả khác nhau, tiết kiệm chi phí',
      items: '5 - 8 loại nông sản'
    },
    large: {
      label: 'Box 10-12kg',
      weight: '10-12kg',
      priceMin: 399000,
      priceMax: 499000,
      kitbag: '40k/kg',
      description: 'Gói tiết kiệm tối ưu. Phù hợp cho các hộ gia đình lớn hoặc nhóm mua chung',
      items: '8 - 12 loại nông sản'
    }
  };

  const currentBoxType = boxTypes[selectedBoxType];

  const items = [
    { id: 1, name: 'Bắp cải', image: 'https://picsum.photos/seed/cabbage/100/100', surplus: '15kg' },
    { id: 2, name: 'Cà chua', image: 'https://picsum.photos/seed/tomato/100/100', surplus: '8kg' },
    { id: 3, name: 'Khoai tây', image: 'https://picsum.photos/seed/potato/100/100', surplus: '20kg' },
    { id: 4, name: 'Cà rốt', image: 'https://picsum.photos/seed/carrot/100/100', surplus: '5kg' },
  ];

  const toggleItemSelection = (id: number) => {
    setSelectedItems(prevItems => 
      prevItems.includes(id) 
        ? prevItems.filter(item => item !== id)
        : [...prevItems, id]
    );
  };

  const handleCreateBox = () => {
    if (selectedItems.length === 0) {
      alert('Vui lòng chọn ít nhất một sản phẩm');
      return;
    }
    
    const newBox = {
      id: runningBoxes.length + 1,
      name: `Gói ${items[selectedItems[0] - 1]?.name || 'Mix'}`,
      price: price,
      sold: 0,
      createdDate: new Date().toISOString().split('T')[0]
    };
    
    setRunningBoxes([...runningBoxes, newBox]);
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 3000);
  };

  const deleteBox = (id: number) => {
    setRunningBoxes(runningBoxes.filter(box => box.id !== id));
  };

  return (
    <div className="flex flex-col gap-8 p-8 animate-in fade-in duration-500 pb-20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black font-display text-gray-900">Blind Box Surplus Tool</h2>
          <p className="text-gray-400 font-medium text-sm mt-1">Giải cứu nông sản dư thừa bằng cách tạo các túi quà bí ẩn hấp dẫn.</p>
        </div>
        <div className="bg-primary/10 text-primary px-4 py-2 rounded-xl border border-primary/20 flex items-center gap-2">
           <Zap className="size-4 fill-primary" />
           <span className="text-xs font-black uppercase tracking-widest">Tiết kiệm rác thải: 42kg tháng này</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="size-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Box className="size-5" />
              </div>
              <h4 className="font-black text-gray-800 uppercase tracking-tight">Bước 1: Chọn nông sản dư thừa</h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
               {items.map((item) => (
                 <div key={item.id} className="flex flex-col gap-3 group cursor-pointer" onClick={() => toggleItemSelection(item.id)}>
                    <div className={`relative aspect-square rounded-[32px] overflow-hidden border-2 transition-all shadow-sm ${selectedItems.includes(item.id) ? 'border-primary bg-primary/5' : 'border-transparent'}`}>
                       <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                       <div className={`absolute inset-0 ${selectedItems.includes(item.id) ? 'bg-primary/10' : 'bg-black/10 group-hover:bg-transparent'} transition-all`} />
                       <div className="absolute top-3 right-3 bg-white/90 backdrop-blur size-6 rounded-full flex items-center justify-center border border-gray-100 shadow-sm">
                          <input type="checkbox" checked={selectedItems.includes(item.id)} onChange={() => {}} className="size-3 accent-primary" />
                       </div>
                    </div>
                    <div className="text-center">
                       <p className="text-xs font-black text-gray-800 uppercase">{item.name}</p>
                       <p className="text-[10px] text-primary font-bold">Dư: {item.surplus}</p>
                    </div>
                 </div>
               ))}
               <button className="aspect-square rounded-[32px] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-2 text-gray-300 hover:border-primary/20 hover:text-primary transition-all">
                  <span className="material-symbols-outlined text-3xl">add_circle</span>
                  <span className="text-[10px] font-black uppercase">Thêm món</span>
               </button>
            </div>
          </div>

          <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="size-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Sparkles className="size-5" />
              </div>
              <h4 className="font-black text-gray-800 uppercase tracking-tight">Bước 2: Thiết lập combo</h4>
            </div>

            <div className="space-y-12">
               {/* Box Type Selection */}
               <div className="flex flex-col gap-6">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Chọn loại túi mù</label>
                  <div className="grid grid-cols-3 gap-4">
                     {Object.entries(boxTypes).map(([key, boxType]) => (
                        <button
                           key={key}
                           onClick={() => {
                              setSelectedBoxType(key as 'small' | 'medium' | 'large');
                              setPrice(Math.floor((boxType.priceMin + boxType.priceMax) / 2));
                           }}
                           className={`p-5 rounded-[24px] border-2 transition-all text-left ${
                              selectedBoxType === key
                                 ? 'border-primary bg-primary/5 shadow-lg'
                                 : 'border-gray-100 bg-white hover:border-primary/30'
                           }`}
                        >
                           <div className="flex items-start justify-between gap-2 mb-2">
                              <div>
                                 <p className="text-xs font-black text-gray-800">{boxType.label}</p>
                                 <p className="text-[10px] text-gray-400 font-bold">{boxType.weight}</p>
                              </div>
                              <div className={`size-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedBoxType === key ? 'border-primary bg-primary' : 'border-gray-200'}`}>
                                 {selectedBoxType === key && <div className="size-2 bg-white rounded-full" />}
                              </div>
                           </div>
                           <p className="text-[9px] text-gray-500 font-medium leading-tight line-clamp-2">{boxType.description}</p>
                           <p className="text-[11px] font-black text-primary mt-2 uppercase">{boxType.kitbag}</p>
                        </button>
                     ))}
                  </div>
               </div>

               {/* Price Range Slider */}
               <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                     <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Mức giá túi mù ({currentBoxType.weight})</label>
                     <span className="text-3xl font-black text-primary">{price.toLocaleString('vi-VN')}đ</span>
                  </div>
                  <input 
                    type="range" 
                    min={currentBoxType.priceMin}
                    max={currentBoxType.priceMax}
                    step={1000}
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-full appearance-none accent-primary cursor-pointer" 
                  />
                  <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase">
                     <span>{currentBoxType.priceMin.toLocaleString('vi-VN')}đ</span>
                     <span>{currentBoxType.priceMax.toLocaleString('vi-VN')}đ</span>
                  </div>
               </div>

               {/* Public Status */}
               <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Trạng thái công khai</label>
                  <div className="flex items-center gap-2">
                     <button onClick={() => setIsPublic(!isPublic)} className="relative inline-block w-12 h-6 rounded-full transition-all" style={{ backgroundColor: isPublic ? 'rgb(var(--primary))' : 'rgb(222, 222, 226)' }}>
                        <div className={`absolute top-1 size-4 bg-white rounded-full transition-all ${isPublic ? 'translate-x-6' : 'translate-x-1'}`} />
                     </button>
                     <span className="text-xs font-bold text-gray-600">Hiển thị ngay trên cửa hàng</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
           <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-10 flex flex-col gap-8">
              <div className="size-20 bg-primary/5 rounded-[32px] flex items-center justify-center mx-auto text-primary">
                 <Gift className="size-10" />
              </div>
              <div className="text-center">
                 <h4 className="text-xl font-black text-gray-900 mb-2">Xem trước túi mù</h4>
                 <p className="text-[11px] text-gray-400 font-medium">Khách hàng sẽ thấy túi này như một hộp quà bất ngờ.</p>
              </div>

              <div className="p-6 bg-gray-50/50 rounded-[32px] border border-gray-100 flex flex-col gap-4">
                 <div className="flex justify-between items-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <span>Cửa hàng:</span>
                    <span className="text-gray-900">Nông Trại Xanh</span>
                 </div>
                 <div className="flex justify-between items-center text-sm font-black text-gray-900">
                    <span>Loại túi:</span>
                    <span className="text-primary">{currentBoxType.label}</span>
                 </div>
                 <div className="flex justify-between items-center text-sm font-black text-gray-900">
                    <span>Giá niêm yết:</span>
                    <span className="text-primary">{price.toLocaleString('vi-VN')}đ</span>
                 </div>
                 <div className="flex justify-between items-center text-[11px] font-bold text-gray-500 italic">
                    <span>Gồm:</span>
                    <span>{currentBoxType.items}</span>
                 </div>
                 <div className="pt-3 border-t border-gray-200">
                    <p className="text-[9px] text-gray-600 font-medium leading-tight">{currentBoxType.description}</p>
                 </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-[32px] border border-primary/10 flex items-start gap-3">
                 <Info className="size-4 text-primary shrink-0 mt-1" />
                 <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
                   Thuật toán sẽ tự động phân phối nông sản dựa trên số lượng tồn kho của bạn để đảm bảo không món nào bị hư hỏng.
                 </p>
              </div>

              <button onClick={handleCreateBox} className="w-full py-5 bg-primary text-white font-black rounded-[32px] flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all transform active:scale-[0.98]">
                 <Sparkles className="size-5" /> TẠO COMBO RANDOM
              </button>
           </div>

           <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-8 flex flex-col gap-6">
              <h5 className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Túi đang chạy ({runningBoxes.length})</h5>
              <div className="space-y-4">
                 {runningBoxes.map((box) => (
                    <div key={box.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-primary/20 transition-all">
                       <div className="flex items-center gap-3">
                          <Sprout className="size-5 text-primary" />
                          <div>
                             <p className="text-xs font-black text-gray-800 uppercase">{box.name}</p>
                             <p className="text-[10px] text-gray-400 font-bold">Giá: {box.price.toLocaleString('vi-VN')}đ • Đã bán: {box.sold}</p>
                          </div>
                       </div>
                       <button onClick={() => deleteBox(box.id)} className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-600">
                          <Trash2 className="size-4" />
                       </button>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-[40px] p-8 flex flex-col items-center gap-4 shadow-2xl max-w-sm animate-in scale-in-95 duration-300">
            <div className="size-16 bg-green-500/10 rounded-[32px] flex items-center justify-center text-green-500">
              <Sparkles className="size-8" />
            </div>
            <h4 className="text-lg font-black text-gray-900">Tạo combo thành công!</h4>
            <p className="text-sm text-gray-600 text-center">Combo túi mù của bạn đã được tạo và sẵn sàng phục vụ khách hàng.</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Add fix: Export default
export default BlindBoxTool;
