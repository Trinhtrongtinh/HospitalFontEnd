import { Component, type OnInit, type OnDestroy } from "@angular/core"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0
  slideInterval: any
  slidesLoaded = 0
  totalSlides = 3 // Update this if you change the number of slides

  ngOnInit() {
    this.preloadSliderImages()
    this.initBackToTop()
  }

  ngOnDestroy() {
    this.stopSlideInterval()
  }

  preloadSliderImages() {
    const slides = document.querySelectorAll(".slide img")
    this.totalSlides = slides.length

    slides.forEach((element) => {
      const img = element as HTMLImageElement

      // If image is already loaded
      if (img.complete) {
        this.handleImageLoaded()
      } else {
        // Add load event listener
        img.addEventListener("load", () => this.handleImageLoaded())
      }

      // Handle error case
      img.addEventListener("error", () => this.handleImageLoaded())
    })
  }

  handleImageLoaded() {
    this.slidesLoaded++

    // Initialize slider once all images are loaded
    if (this.slidesLoaded === this.totalSlides) {
      this.initSlider()
      this.startSlideInterval()
    }
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

    // Set initial slide
    this.updateSlider()
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
