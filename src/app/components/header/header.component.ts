import { CommonModule } from "@angular/common"
import { Component, type OnInit, HostListener } from "@angular/core"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  topHeaderHeight = 0;

  ngOnInit() {
    this.initMobileMenu();
    this.setupScrollHandler();
  }

  // Thêm hàm để xử lý scroll
  setupScrollHandler() {
    // Tính chiều cao của top header sau khi render
    setTimeout(() => {
      const topHeader = document.querySelector('.top-header') as HTMLElement;
      if (topHeader) {
        this.topHeaderHeight = topHeader.offsetHeight;
        // Kiểm tra vị trí scroll ban đầu
        this.handleScroll();
      }
    }, 100);
  }

  // Sử dụng HostListener để lắng nghe sự kiện scroll
  @HostListener('window:scroll', [])
  handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const mainNav = document.querySelector('.main-nav') as HTMLElement;
    const body = document.body;

    if (mainNav) {
      if (scrollPosition > this.topHeaderHeight) {
        // Đã scroll qua top header
        mainNav.style.transform = 'translateY(0)';
        mainNav.classList.add('with-shadow');
        body.classList.add('scrolled');
      } else {
        // Vẫn ở trong vùng top header
        mainNav.style.transform = `translateY(${this.topHeaderHeight - scrollPosition}px)`;
        mainNav.classList.remove('with-shadow');
        body.classList.remove('scrolled');
      }
    }
  }

  initMobileMenu() {
    const mobileMenuToggle = document.getElementById("mobileMenuToggle")
    const navMenu = document.getElementById("navMenu")
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay")
    const dropdownItems = document.querySelectorAll(".has-dropdown > a")

    // Toggle mobile menu
    if (mobileMenuToggle && navMenu && mobileMenuOverlay) {
      mobileMenuToggle.addEventListener("click", () => {
        mobileMenuToggle.classList.toggle("active")
        navMenu.classList.toggle("active")

        if (navMenu.classList.contains("active")) {
          mobileMenuOverlay.style.display = "block"
          document.body.style.overflow = "hidden" // Prevent scrolling
        } else {
          mobileMenuOverlay.style.display = "none"
          document.body.style.overflow = "" // Allow scrolling
        }
      })

      // Close menu when clicking overlay
      mobileMenuOverlay.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active")
        navMenu.classList.remove("active")
        mobileMenuOverlay.style.display = "none"
        document.body.style.overflow = "" // Allow scrolling
      })
    }

    // Handle dropdown toggles on mobile
    dropdownItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        // Only apply this behavior on mobile
        if (window.innerWidth <= 992) {
          e.preventDefault()

          const parent = (item as HTMLElement).parentElement

          // Close all other dropdowns
          document.querySelectorAll(".has-dropdown").forEach((dropdown) => {
            if (dropdown !== parent) {
              dropdown.classList.remove("active")
            }
          })

          // Toggle current dropdown
          parent?.classList.toggle("active")
        }
      })
    })

    // Close mobile menu on window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 992 && navMenu?.classList.contains("active")) {
        mobileMenuToggle?.classList.remove("active")
        navMenu.classList.remove("active")
        mobileMenuOverlay!.style.display = "none"
        document.body.style.overflow = "" // Allow scrolling

        // Reset all dropdowns
        document.querySelectorAll(".has-dropdown").forEach((dropdown) => {
          dropdown.classList.remove("active")
        })
      }
    })
  }
}
