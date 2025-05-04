import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  // ===== HERO SLIDER PROPERTIES =====
  currentSlide = 0;
  slideInterval: any;
  slidesLoaded = 0;
  totalSlides = 0;

  // ===== FACILITIES SLIDER PROPERTIES =====
  facilitiesCurrentSlide = 0;
  facilitiesTotalSlides = 0;
  facilitiesSlideInterval: any;

  // ===== APPOINTMENT SLIDER PROPERTIES =====
  appointmentCurrentSlide = 0;
  appointmentTotalSlides = 0;
  appointmentVisibleSlides = 3;

  // ===== SPECIALTIES SLIDER PROPERTIES =====
  specialtiesCurrentPage = 0;
  specialtiesTotalPages = 0;
  specialtiesItemsPerPage = 5; // Mặc định 5 items per page
  specialtiesTotalItems = 0;
  specialtiesSlideInterval: any;

  // ===== NEWS TAB PROPERTIES =====
  activeNewsTab = 0;

  // ===== INITIALIZATION =====
  ngOnInit() {
    // Preload and initialize slider images first
    this.preloadSliderImages();
    
    // Initialize all sections
    this.initBackToTop();
    this.initFacilitiesSlider();
    this.initAppointmentSlider();
    this.initSpecialtiesSlider();
    this.initNewsTabs();
    
    // Check initial window size for responsive elements
    this.handleWindowResize();
  }

  ngOnDestroy() {
    // Clear all intervals to prevent memory leaks
    this.stopSlideInterval();
    this.stopFacilitiesSlideInterval();
    this.stopSpecialtiesSlideInterval();
    
    // Remove event listeners
    window.removeEventListener('resize', this.handleWindowResize);
  }

  // ===== WINDOW RESIZE HANDLER =====
  @HostListener('window:resize')
  handleWindowResize() {
    // Update responsive elements based on window size
    this.updateAppointmentSliderResponsive();
    this.calculateSpecialtiesItemsPerPage();
  }

  // ===== HERO SLIDER METHODS =====
  preloadSliderImages() {
    const slides = document.querySelectorAll(".slide img");
    this.totalSlides = slides.length - 2; // Exclude duplicate slides

    // Check if there are no slides
    if (slides.length === 0) return;

    slides.forEach((element) => {
      const img = element as HTMLImageElement;

      // If image is already loaded
      if (img.complete) {
        this.handleImageLoaded();
      } else {
        // Add load event listener
        img.addEventListener("load", () => this.handleImageLoaded());
      }

      // Handle error case
      img.addEventListener("error", () => this.handleImageLoaded());
    });
  }

  handleImageLoaded() {
    this.slidesLoaded++;

    // Initialize slider once all images are loaded
    if (this.slidesLoaded === this.totalSlides + 2) {
      this.initSlider();
      this.startSlideInterval();
    }
  }

  initSlider() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = document.querySelectorAll(".dot");

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => this.changeSlide(-1));
      nextBtn.addEventListener("click", () => this.changeSlide(1));
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const index = Number.parseInt(target.getAttribute("data-index") || "0");
        this.goToSlide(index);
      });
    });

    // Set initial slide
    this.updateSlider();
  }

  changeSlide(direction: number) {
    this.stopSlideInterval();

    const totalSlides = this.totalSlides;
    this.currentSlide += direction;

    const sliderWrapper = document.getElementById("sliderWrapper");
    if (sliderWrapper) {
      sliderWrapper.style.transition = "transform 0.5s ease-in-out";
      sliderWrapper.style.transform = `translateX(-${(this.currentSlide + 1) * 100}%)`;
    }

    // Handle infinite loop
    setTimeout(() => {
      if (this.currentSlide === -1) {
        this.currentSlide = totalSlides - 1;
        if (sliderWrapper) {
          sliderWrapper.style.transition = "none";
          sliderWrapper.style.transform = `translateX(-${(this.currentSlide + 1) * 100}%)`;
        }
      } else if (this.currentSlide === totalSlides) {
        this.currentSlide = 0;
        if (sliderWrapper) {
          sliderWrapper.style.transition = "none";
          sliderWrapper.style.transform = `translateX(-${(this.currentSlide + 1) * 100}%)`;
        }
      }
    }, 500); // Match transition duration

    this.updateDots();
    this.startSlideInterval();
  }

  goToSlide(index: number) {
    this.stopSlideInterval();

    this.currentSlide = index;
    this.updateSlider();

    this.startSlideInterval();
  }

  updateSlider() {
    const sliderWrapper = document.getElementById("sliderWrapper");
    if (sliderWrapper) {
      sliderWrapper.style.transition = "transform 0.5s ease-in-out";
      sliderWrapper.style.transform = `translateX(-${(this.currentSlide + 1) * 100}%)`;
    }

    this.updateDots();
  }

  updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  startSlideInterval() {
    this.slideInterval = setInterval(() => {
      this.changeSlide(1);
    }, 5000); // Change slide every 5 seconds
  }

  stopSlideInterval() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  // ===== FACILITIES SLIDER METHODS =====
  initFacilitiesSlider() {
    const facilitiesImages = document.querySelectorAll(".facilities-image");
    const prevBtn = document.querySelector(".facilities-slider .prev") as HTMLButtonElement;
    const nextBtn = document.querySelector(".facilities-slider .next") as HTMLButtonElement;
    const indicators = document.querySelectorAll(".facilities-slider .indicator");
    
    this.facilitiesTotalSlides = facilitiesImages.length;
    if (this.facilitiesTotalSlides === 0) return;
    
    // Add click event listeners to navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener("click", () => this.changeFacilitiesSlide(-1));
    }
    
    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.changeFacilitiesSlide(1));
    }
    
    // Add click event listeners to indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.goToFacilitiesSlide(index));
    });
    
    // Start auto slideshow for facilities
    this.startFacilitiesSlideInterval();
  }
  
  changeFacilitiesSlide(direction: number) {
    // Update current slide index
    this.facilitiesCurrentSlide = (this.facilitiesCurrentSlide + direction + this.facilitiesTotalSlides) % this.facilitiesTotalSlides;
    
    // Update UI
    this.updateFacilitiesSlider();
    
    // Reset auto slideshow
    this.stopFacilitiesSlideInterval();
    this.startFacilitiesSlideInterval();
  }
  
  goToFacilitiesSlide(index: number) {
    this.facilitiesCurrentSlide = index;
    this.updateFacilitiesSlider();
    
    // Reset auto slideshow
    this.stopFacilitiesSlideInterval();
    this.startFacilitiesSlideInterval();
  }
  
  updateFacilitiesSlider() {
    const facilitiesImages = document.querySelectorAll(".facilities-image");
    const indicators = document.querySelectorAll(".facilities-slider .indicator");
    
    // Update active image
    facilitiesImages.forEach((image, index) => {
      if (index === this.facilitiesCurrentSlide) {
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
    });
    
    // Update active indicator
    indicators.forEach((indicator, index) => {
      if (index === this.facilitiesCurrentSlide) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }
  
  startFacilitiesSlideInterval() {
    this.facilitiesSlideInterval = setInterval(() => {
      this.changeFacilitiesSlide(1);
    }, 6000); // Change facilities slide every 6 seconds
  }
  
  stopFacilitiesSlideInterval() {
    if (this.facilitiesSlideInterval) {
      clearInterval(this.facilitiesSlideInterval);
    }
  }

  // ===== APPOINTMENT SLIDER METHODS =====
  initAppointmentSlider() {
    const appointmentCards = document.getElementById('appointmentCards');
    const prevBtn = document.getElementById('appointmentPrev') as HTMLButtonElement;
    const nextBtn = document.getElementById('appointmentNext') as HTMLButtonElement;
    
    if (!appointmentCards) return;
    
    const cardElements = appointmentCards.querySelectorAll('.appointment-card');
    this.appointmentTotalSlides = cardElements.length;
    
    if (this.appointmentTotalSlides === 0) return;
    
    this.updateAppointmentSliderResponsive();
    this.updateAppointmentSlider();
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.changeAppointmentSlide(-1));
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.changeAppointmentSlide(1));
    }
  }

  updateAppointmentSliderResponsive() {
    // Adjust visible slides based on screen width
    if (window.innerWidth < 576) {
      this.appointmentVisibleSlides = 1;
    } else if (window.innerWidth < 992) {
      this.appointmentVisibleSlides = 2;
    } else {
      this.appointmentVisibleSlides = 3;
    }
    
    // Ensure current position is still valid after resize
    this.appointmentCurrentSlide = Math.min(
      this.appointmentCurrentSlide,
      Math.max(0, this.appointmentTotalSlides - this.appointmentVisibleSlides)
    );
    
    this.updateAppointmentSlider();
  }

  changeAppointmentSlide(direction: number) {
    const newPosition = this.appointmentCurrentSlide + direction;
    
    // Validate new position
    if (newPosition >= 0 && newPosition <= this.appointmentTotalSlides - this.appointmentVisibleSlides) {
      this.appointmentCurrentSlide = newPosition;
      this.updateAppointmentSlider();
    }
  }

  updateAppointmentSlider() {
    const appointmentCards = document.getElementById('appointmentCards');
    const prevBtn = document.getElementById('appointmentPrev') as HTMLButtonElement;
    const nextBtn = document.getElementById('appointmentNext') as HTMLButtonElement;
    
    if (appointmentCards) {
      const cardWidth = 100 / this.appointmentVisibleSlides;
      appointmentCards.style.transform = `translateX(-${this.appointmentCurrentSlide * cardWidth}%)`;
    }
    
    if (prevBtn) {
      prevBtn.disabled = this.appointmentCurrentSlide === 0;
    }
    
    if (nextBtn) {
      nextBtn.disabled = this.appointmentCurrentSlide >= this.appointmentTotalSlides - this.appointmentVisibleSlides;
    }
  }

  // ===== SPECIALTIES SLIDER METHODS =====
  initSpecialtiesSlider() {
    setTimeout(() => {
      const specialtiesTrack = document.getElementById('specialtiesTrack');
      const indicatorsContainer = document.getElementById('specialtiesIndicators');
      
      if (!specialtiesTrack || !indicatorsContainer) return;
      
      const specialtyItems = specialtiesTrack.querySelectorAll('.specialty-item');
      this.specialtiesTotalItems = specialtyItems.length;
      
      if (this.specialtiesTotalItems === 0) return;
      
      // Tính số lượng items per page dựa theo kích thước màn hình
      this.calculateSpecialtiesItemsPerPage();
      
      // Xử lý indicators được tạo tĩnh trong HTML
      const indicators = indicatorsContainer.querySelectorAll('.indicator');
      
      // Cập nhật số lượng trang dựa trên số items
      this.specialtiesTotalPages = Math.ceil(this.specialtiesTotalItems / this.specialtiesItemsPerPage);
      
      // Hiển thị đúng số lượng indicators
      this.updateStaticIndicators(indicators);
      
      // Thêm sự kiện click cho các indicators
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          if (index < this.specialtiesTotalPages) {
            this.goToSpecialtiesPage(index);
          }
        });
      });
      
      // Cập nhật slider
      this.updateSpecialtiesSlider();
      
      // Bắt đầu auto slide
      this.startSpecialtiesSlideInterval();
    }, 100);
  }

  calculateSpecialtiesItemsPerPage() {
    const windowWidth = window.innerWidth;
    
    if (windowWidth >= 1200) {
      this.specialtiesItemsPerPage = 5; // 5 items per page on large screens
    } else if (windowWidth >= 992) {
      this.specialtiesItemsPerPage = 4; // 4 items per page on medium-large screens
    } else if (windowWidth >= 768) {
      this.specialtiesItemsPerPage = 3; // 3 items per page on medium screens
    } else if (windowWidth >= 480) {
      this.specialtiesItemsPerPage = 2; // 2 items per page on small screens
    } else {
      this.specialtiesItemsPerPage = 1; // 1 item per page on extra small screens
    }
    
    // Tính lại tổng số trang
    this.specialtiesTotalPages = Math.ceil(this.specialtiesTotalItems / this.specialtiesItemsPerPage);
    
    // Đảm bảo trang hiện tại vẫn hợp lệ
    if (this.specialtiesCurrentPage >= this.specialtiesTotalPages) {
      this.specialtiesCurrentPage = Math.max(0, this.specialtiesTotalPages - 1);
    }
  }

  updateStaticIndicators(indicators: NodeListOf<Element>) {
    // Ẩn/hiện indicators dựa trên số trang
    indicators.forEach((indicator, index) => {
      if (index < this.specialtiesTotalPages) {
        (indicator as HTMLElement).style.display = 'block';
      } else {
        (indicator as HTMLElement).style.display = 'none';
      }
    });
  }

  goToSpecialtiesPage(pageIndex: number) {
    if (pageIndex >= 0 && pageIndex < this.specialtiesTotalPages) {
      this.specialtiesCurrentPage = pageIndex;
      this.updateSpecialtiesSlider();
      
      // Reset auto slide interval
      this.stopSpecialtiesSlideInterval();
      this.startSpecialtiesSlideInterval();
    }
  }

  createSpecialtiesIndicators(container: HTMLElement) {
    // Clear existing indicators
    container.innerHTML = '';
    
    // Create new indicators based on page count
    for (let i = 0; i < this.specialtiesTotalPages; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      if (i === this.specialtiesCurrentPage) {
        indicator.classList.add('active');
      }
      
      // Add click event
      indicator.addEventListener('click', () => {
        this.specialtiesCurrentPage = i;
        this.updateSpecialtiesSlider();
        
        // Reset auto rotation
        this.stopSpecialtiesSlideInterval();
        this.startSpecialtiesSlideInterval();
      });
      
      container.appendChild(indicator);
    }
  }

  navigateSpecialtiesPage(direction: number) {
    const newPage = this.specialtiesCurrentPage + direction;
    
    // Validate new page
    if (newPage >= 0 && newPage < this.specialtiesTotalPages) {
      this.specialtiesCurrentPage = newPage;
      this.updateSpecialtiesSlider();
      
      // Reset auto rotation
      this.stopSpecialtiesSlideInterval();
      this.startSpecialtiesSlideInterval();
    }
  }

  updateSpecialtiesSlider() {
    const specialtiesTrack = document.getElementById('specialtiesTrack');
    const indicators = document.querySelectorAll('#specialtiesIndicators .indicator');
    
    if (specialtiesTrack) {
      // Tính toán độ dịch chuyển
      const itemWidth = 100 / this.specialtiesItemsPerPage;
      const translateValue = this.specialtiesCurrentPage * this.specialtiesItemsPerPage * itemWidth;
      specialtiesTrack.style.transform = `translateX(-${translateValue}%)`;
      
      // Cập nhật width cho các items theo số lượng hiển thị một lúc
      const items = specialtiesTrack.querySelectorAll('.specialty-item');
      items.forEach((item) => {
        const itemElement = item as HTMLElement;
        itemElement.style.flex = `0 0 calc(${itemWidth}% - 20px)`;
        itemElement.style.minWidth = `calc(${itemWidth}% - 20px)`;
      });
    }
    
    // Cập nhật trạng thái của indicators
    indicators.forEach((indicator, index) => {
      if (index < this.specialtiesTotalPages) {
        if (index === this.specialtiesCurrentPage) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      }
    });
  }

  startSpecialtiesSlideInterval() {
    this.specialtiesSlideInterval = setInterval(() => {
      // Tự động chuyển slide
      const nextPage = (this.specialtiesCurrentPage + 1) % this.specialtiesTotalPages;
      this.goToSpecialtiesPage(nextPage);
    }, 5000); // Auto slide mỗi 5 giây
  }

  stopSpecialtiesSlideInterval() {
    if (this.specialtiesSlideInterval) {
      clearInterval(this.specialtiesSlideInterval);
    }
  }

  // ===== NEWS TABS METHODS =====
  initNewsTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content > div');
    
    if (tabButtons.length === 0 || tabContents.length === 0) return;
    
    // Set up click events for tab buttons
    tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.switchTab(index, tabButtons, tabContents);
      });
    });
    
    // Set initial active tab
    this.switchTab(0, tabButtons, tabContents);
  }
  
  switchTab(index: number, tabButtons: NodeListOf<Element>, tabContents: NodeListOf<Element>) {
    // Update active state
    this.activeNewsTab = index;
    
    // Update tab buttons
    tabButtons.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Update tab contents
    tabContents.forEach((content, i) => {
      if (i === index) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }

  // ===== BACK TO TOP FUNCTIONALITY =====
  initBackToTop() {
    const backToTopButton = document.getElementById("backToTop");

    if (!backToTopButton) return;

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}