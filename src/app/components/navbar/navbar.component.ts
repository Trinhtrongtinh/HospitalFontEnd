import { CommonModule } from "@angular/common"
import { Component, type OnInit } from "@angular/core"

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    this.initMobileMenu()
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
