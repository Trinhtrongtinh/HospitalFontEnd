import { CommonModule } from "@angular/common"
import { Component, type OnInit, type OnDestroy } from "@angular/core"

@Component({
  selector: "app-home",
  standalone: true,
  imports:[CommonModule],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0
  slideInterval: any

  ngOnInit() {
    this.initSlider()
    this.startSlideInterval()
    this.initBackToTop()
  }

  ngOnDestroy() {
    this.stopSlideInterval()
  }

  initSlider() {
    const prevBtn = document.getElementById("prevBtn")
    const nextBtn = document.getElementById("nextBtn")
    const dots = document.querySelectorAll(".dot")

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => this.changeSlide(-1))
      nextBtn.addEventListener("click", () => this.changeSlide(1))
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const target = e.target as HTMLElement
        const index = Number.parseInt(target.getAttribute("data-index") || "0")
        this.goToSlide(index)
      })
    })
  }

  changeSlide(direction: number) {
    this.stopSlideInterval()

    const totalSlides = document.querySelectorAll(".slide").length
    this.currentSlide = (this.currentSlide + direction + totalSlides) % totalSlides
    this.updateSlider()

    this.startSlideInterval()
  }

  goToSlide(index: number) {
    this.stopSlideInterval()

    this.currentSlide = index
    this.updateSlider()

    this.startSlideInterval()
  }

  updateSlider() {
    const sliderWrapper = document.getElementById("sliderWrapper")
    const dots = document.querySelectorAll(".dot")

    if (sliderWrapper) {
      sliderWrapper.style.transform = `translateX(-${this.currentSlide * 100}%)`
    }

    dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.classList.add("active")
      } else {
        dot.classList.remove("active")
      }
    })
  }

  startSlideInterval() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % document.querySelectorAll(".slide").length
      this.updateSlider()
    }, 5000) // Change slide every 5 seconds
  }

  stopSlideInterval() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval)
    }
  }

  initBackToTop() {
    const backToTopButton = document.getElementById("backToTop")

    if (backToTopButton) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.add("visible")
        } else {
          backToTopButton.classList.remove("visible")
        }
      })

      backToTopButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  }
}
