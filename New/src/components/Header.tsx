import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const handleAdminClick = () => {
    if (isAdmin) {
      navigate('/admin');
    } else {
      navigate('/admin-login');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <img 
<<<<<<< HEAD
        src="../assets/header-request.jpg"
=======
        src="https://raw.githubusercontent.com/yosfgfx/MeetRoomBooking/main/New/assets/header-request.jpg"
>>>>>>> be0b7ce9a796b9c85aa7ea79a65a5b9ac4c3cca8
        alt="Header" 
        className="w-full h-48 object-cover rounded-2xl mb-4"
      />
      <div className="glass-effect rounded-2xl p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white font-['SSTArabic-Bold']">
            إدارة الحجوزات
          </h1>
          <p className="text-white/80 mt-1">
<<<<<<< HEAD
            تسجيل الدخول المسؤول لادارة الحجوزات
=======
            حجز قاعة الاجتماعات
>>>>>>> be0b7ce9a796b9c85aa7ea79a65a5b9ac4c3cca8
          </p>
        </div>
        <button
          onClick={handleAdminClick}
          className="button-primary"
        >
          {isAdmin ? 'لوحة التحكم' : 'دخول مدير النظام'}
        </button>
      </div>
    </div>
  );
};