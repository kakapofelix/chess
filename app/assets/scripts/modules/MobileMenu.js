class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".header__menu-icon")
        this.menuContent = document.querySelector (".header-navbar")
        this.header = document.querySelector(".header-navbar__title")
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle("header-navbar--is-visible")
        this.header.classList.toggle(".header-navbar__title--is-expanded")
        this.menuIcon.classList.toggle("header__menu-icon--close-x")
    }
}

export default MobileMenu;