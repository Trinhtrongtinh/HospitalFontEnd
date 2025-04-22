import { Component } from '@angular/core';
import { NewsCardComponent } from '../../../components/news-card/news-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-su-kien',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './su-kien.component.html',
  styleUrl: './su-kien.component.scss'
})
export class SuKienComponent {
  newsItems = [
    {
      image: '/assets/images/news/sukien-tet-thieu-nhi.jpg',
      title: 'Sự kiện mừng Quốc tế Thiếu nhi tại bệnh viện',
      date: '01/06/2025',
      excerpt: 'Nhiều hoạt động vui chơi và tặng quà cho bệnh nhi nhân dịp Quốc tế Thiếu nhi.',
      link: '/su-kien/quoc-te-thieu-nhi'
    },
    {
      image: '/assets/images/news/sukien-hien-mau.jpg',
      title: 'Ngày hội Hiến máu nhân đạo 2025',
      date: '12/05/2025',
      excerpt: 'Chương trình thu hút hàng trăm cán bộ nhân viên và người dân tham gia hiến máu.',
      link: '/su-kien/hien-mau-2025'
    },
    {
      image: '/assets/images/news/sukien-nhan-su.jpg',
      title: 'Lễ bổ nhiệm cán bộ mới tại các chuyên khoa',
      date: '05/05/2025',
      excerpt: 'Bệnh viện tổ chức lễ bổ nhiệm và ra mắt ban lãnh đạo các khoa trọng điểm.',
      link: '/su-kien/bo-nhiem'
    },
    {
      image: '/assets/images/news/sukien-thiet-bi-moi.jpg',
      title: 'Tiếp nhận thiết bị MRI hiện đại từ Nhật Bản',
      date: '28/04/2025',
      excerpt: 'Bệnh viện đầu tư thêm hệ thống máy MRI thế hệ mới giúp tăng độ chính xác trong chẩn đoán.',
      link: '/su-kien/mri-moi'
    },
    {
      image: '/assets/images/news/sukien-tri-an.jpg',
      title: 'Lễ tri ân đội ngũ bác sĩ nhân ngày Thầy thuốc Việt Nam',
      date: '27/02/2025',
      excerpt: 'Chương trình đặc biệt tri ân đội ngũ y bác sĩ vì những cống hiến cho cộng đồng.',
      link: '/su-kien/tri-an-27-2'
    }
  ];
}
