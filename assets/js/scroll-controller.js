class ScrollController {
    constructor() {
        this.isMobile = window.innerWidth <= 767;
        this.config = window.siteConfig?.scrollSnapping || { mobile: false, desktop: true };
        this.init();
    }

    init() {
        this.applyScrollSettings();
        window.addEventListener('resize', () => {
            this.isMobile = window.innerWidth <= 767;
            this.applyScrollSettings();
        });
    }

    applyScrollSettings() {
        const shouldSnap = this.isMobile ? this.config.mobile : this.config.desktop;
        const snapType = shouldSnap ? 'y mandatory' : 'none';
        const snapAlign = shouldSnap ? 'start' : 'none';

        this.setScrollSnap('.snap-container', 'scroll-snap-type', snapType);
        this.setScrollSnap('.chart-container', 'scroll-snap-align', snapAlign);
        
        if (this.isMobile && shouldSnap) {
            this.setScrollSnap('.snap-container', 'scroll-snap-type', 'y proximity');
        }
    }

    setScrollSnap(selector, property, value) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.style.setProperty(property, value, 'important');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ScrollController();
}); 