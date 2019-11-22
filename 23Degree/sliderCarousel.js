class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        // block,
        infinity = false,
        position = 0,
        slidesToShow = 3,
        responsive = []
    }) {
        if (!main || !wrap) {
            console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!');
        }
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        // this.block = document.querySelector(block);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow)
        };
        this.responsive = responsive;

    }
    init() {
        this.addShClass();
        this.addStyle();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }

        if (this.responsive) {
            this.responseInit();
        }
    }

    addShClass() {
        this.main.classList.add('sh-slider');
        this.wrap.classList.add('sh-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('sh-slider__item');
        }
    }

    addStyle() {
        let style = document.getElementById('sliderCarusel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
          .sh-slider {
              overflow: hidden !important;
          }
          .sh-slider__wrap {
              display: flex !important;
              transition: transform 0.5s !important;
              will-change: transform !important;
          }
          .sh-slider__item {
              flex: 0 0 ${this.options.widthSlide}% !important;
              margin: auto 0 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
          }
        `;
        document.head.appendChild(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidesToShow;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
            ++this.options.position;
            if (this.options.position > this.slides.length - this.slidesToShow) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    addArrow() {
        // this.block = document.createElement('div');
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        // this.block.className = 'sh-block';
        this.prev.className = 'sh-slider__prev';
        this.next.className = 'sh-slider__next';

        // this.main.appendChild(this.block);
        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

        const style = document.createElement('style');

        style.textContent = `
          .sh-slider__prev,
          .sh-slider__next {
              width: 0;
              height: 0;
              border-radius: 0;
              margin: 0 10px;
              border: 20px solid transparent;
              background: transparent;
          }
          .sh-slider__next {
              border-left-color: #19b5fe;
          }
          .sh-slider__next:focus, .sh-slider__next:active{
            outline: none;
            background: transparent;
          }
          .sh-slider__prev {
            border-right-color: #19b5fe;
          }
        .sh-slider__prev:focus, .sh-slider__prev:active{
            outline: none;
            background: transparent;
          }
        `;

        document.head.appendChild(style);
    }

    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };

        checkResponse();

        window.addEventListener('resize', checkResponse);
    }
}