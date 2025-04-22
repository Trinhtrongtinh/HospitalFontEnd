import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../../../components/news-card/news-card.component';

@Component({
  selector: 'app-hoi-thao',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './hoi-thao.component.html',
  styleUrl: './hoi-thao.component.scss'
})
export class HoiThaoComponent {
  newsItems = [
    {
      image: '/assets/images/news/hoi-thao-tim-mach.jpg',
      title: 'Hội thảo \"Cập nhật chẩn đoán và điều trị bệnh lý tim mạch 2025\"',
      date: '20/04/2025',
      excerpt: 'Bệnh viện phối hợp với Hội Tim mạch VN tổ chức hội thảo cập nhật kiến thức chuyên môn.',
      link: '/hoi-thao/tim-mach-2025'
    },
    {
      image: '/assets/images/news/hoi-thao-nhi-khoa.jpg',
      title: 'Hội thảo \"Xử trí bệnh lý hô hấp ở trẻ em\"',
      date: '15/04/2025',
      excerpt: 'Chuyên đề tập trung vào các bệnh hô hấp thường gặp và phác đồ điều trị mới.',
      link: '/hoi-thao/nhi-khoa'
    },
    {
      image: '/assets/images/news/hoi-thao-san-phu-khoa.jpg',
      title: 'Hội thảo \"Sàng lọc ung thư cổ tử cung\"',
      date: '10/04/2025',
      excerpt: 'Nâng cao nhận thức cộng đồng về phòng ngừa ung thư phụ khoa.',
      link: '/hoi-thao/ung-thu-co-tu-cung'
    },
    {
      image: '/assets/images/news/hoi-thao-dinh-duong.jpg',
      title: 'Hội thảo \"Dinh dưỡng cho bệnh nhân đái tháo đường\"',
      date: '05/04/2025',
      excerpt: 'Tư vấn chế độ ăn phù hợp với từng giai đoạn bệnh tiểu đường.',
      link: '/hoi-thao/dinh-duong-tieu-duong'
    },
    {
      image: '/assets/images/news/hoi-thao-covid.jpg',
      title: 'Hội thảo \"Hậu COVID-19: Quản lý di chứng kéo dài\"',
      date: '25/03/2025',
      excerpt: 'Cập nhật các phương pháp kiểm soát di chứng phổ biến sau COVID-19.',
      link: '/hoi-thao/hau-covid'
    }
  ];
}  

