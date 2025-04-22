import { Component } from '@angular/core';
import { NewsCardComponent } from '../../../components/news-card/news-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-y-hoc',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './y-hoc.component.html',
  styleUrl: './y-hoc.component.scss'
})
export class YHocComponent {
  newsItems = [
    {
      image: '/assets/images/news/yhoc-tam-soat-ung-thu.jpg',
      title: 'Tầm soát ung thư sớm – khi nào là cần thiết?',
      date: '22/04/2025',
      excerpt: 'Bài viết cung cấp thông tin cần thiết về việc tầm soát ung thư để phát hiện sớm và tăng hiệu quả điều trị.',
      link: '/y-hoc/tam-soat-ung-thu'
    },
    {
      image: '/assets/images/news/yhoc-dinh-duong-tre-em.jpg',
      title: 'Chế độ dinh dưỡng hợp lý cho trẻ em thời hiện đại',
      date: '18/04/2025',
      excerpt: 'Dinh dưỡng đóng vai trò quan trọng trong sự phát triển thể chất và trí tuệ của trẻ nhỏ.',
      link: '/y-hoc/dinh-duong-tre-em'
    },
    {
      image: '/assets/images/news/yhoc-huyet-ap.jpg',
      title: 'Hiểu đúng về bệnh huyết áp cao',
      date: '10/04/2025',
      excerpt: 'Huyết áp cao là bệnh lý nguy hiểm, dễ bị bỏ qua trong giai đoạn đầu. Hãy cùng tìm hiểu chi tiết.',
      link: '/y-hoc/huyet-ap'
    },
    {
      image: '/assets/images/news/yhoc-nhay-mui-mua-dong.jpg',
      title: 'Nguyên nhân và cách phòng ngừa viêm xoang tái phát',
      date: '07/04/2025',
      excerpt: 'Viêm xoang mãn tính gây nhiều phiền toái – đây là cách kiểm soát hiệu quả trong mùa lạnh.',
      link: '/y-hoc/viem-xoang'
    },
    {
      image: '/assets/images/news/yhoc-thi-luc.jpg',
      title: '7 cách giúp bảo vệ thị lực khi làm việc máy tính nhiều giờ',
      date: '02/04/2025',
      excerpt: 'Thói quen sinh hoạt ảnh hưởng trực tiếp đến sức khỏe mắt – hãy bảo vệ mắt đúng cách.',
      link: '/y-hoc/bao-ve-mat'
    }
  ];
}

