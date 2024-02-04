customElements.define('solution-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/solution.css"/>
  <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  </head>
    
  <!-- 
  - #Solutions
-->

<section id="speakers">
<div class="container" data-aos="fade-up">
  <div class="section-header">
    <h2>We Provide Solitions for Wide Range of Bussiness Scenarios.</h2>
    <p>Here are some of our solutions</p>
  </div>

  <div class="row">
    <div class="col-lg-4 col-md-6">
      <div class="speaker" data-aos="fade-up" data-aos-delay="100">
        <img src="assets/img/speakers/1.jpg" alt="Speaker 1" class="img-fluid">
        <div class="details">
          <h3 style="padding: 7px 0px;"><a href="speaker-details.html">Brenden Legros</a></h3>
          
          <div class="social">
            <a href="">ReadMore</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="speaker" data-aos="fade-up" data-aos-delay="200">
        <img src="assets/img/speakers/2.jpg" alt="Speaker 2" class="img-fluid">
        <div class="details">
          <h3 style="padding: 7px 0px;"><a href="speaker-details.html">Hubert Hirthe</a></h3>
          
          <div class="social">
            <a href="">ReadMore</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="speaker" data-aos="fade-up" data-aos-delay="300">
        <img src="assets/img/speakers/3.jpg" alt="Speaker 3" class="img-fluid">
        <div class="details">
          <h3 style="padding: 7px 0px;"><a href="speaker-details.html">Cole Emmerich</a></h3>
          <div class="social">
          <a href="">ReadMore</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="speaker" data-aos="fade-up" data-aos-delay="100">
        <img src="assets/img/speakers/4.jpg" alt="Speaker 4" class="img-fluid">
        <div class="details">
          <h3 style="padding: 7px 0px;"><a href="speaker-details.html">Jack Christiansen</a></h3>
          <div class="social">
          <a href="">ReadMore</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="speaker" data-aos="fade-up" data-aos-delay="200">
        <img src="assets/img/speakers/5.jpg" alt="Speaker 5" class="img-fluid">
        <div class="details">
          <h3 style="padding: 7px 0px;"><a href="speaker-details.html">Alejandrin Littel</a></h3>
          <div class="social">
          <a href="">ReadMore</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <div class="speaker" data-aos="fade-up" data-aos-delay="300">
        <img src="assets/img/speakers/6.jpg" alt="Speaker 6" class="img-fluid">
        <div class="details">
          <h3 style="padding: 7px 0px;"><a href="speaker-details.html">Willow Trantow</a></h3>
          <div class="social">
          <a href="">ReadMore</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</section>
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});

customElements.define('clients-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/solution.css"/>
  <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  </head>
    
  
  <!-- ======= Supporters Section ======= -->
  <section id="supporters" class="section-with-bg">

    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Clients</h2>
      </div>

      <div class="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="supporter-logo">
            <img src="assets/img/supporters/1.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="supporter-logo">
            <img src="assets/img/supporters/2.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="supporter-logo">
            <img src="assets/img/supporters/3.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="supporter-logo">
            <img src="assets/img/supporters/4.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="supporter-logo">
            <img src="assets/img/supporters/5.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="supporter-logo">
            <img src="assets/img/supporters/6.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="supporter-logo">
            <img src="assets/img/supporters/7.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="supporter-logo">
            <img src="assets/img/supporters/8.png" class="img-fluid" alt="">
          </div>
        </div>

      </div>

    </div>

  </section><!-- End Sponsors Section -->
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});
customElements.define('reviews-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/reviews.css"/>
  <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  </head>
    
  <!-- ======= Rviews Section ======= -->
    <div class="reviews-area">
      <div class="row g-0">
        <div class="col-lg-6">
          <img src="assets/img/about/2.jpg" alt="" class="img-fluid">
        </div>
        <div class="col-lg-6 work-right-text d-flex align-items-center">
          <div class="px-5 py-5 py-lg-0">
            <h2>working with us</h2>
            <h5>Web Design, Ready Home, Construction and Co-operate Outstanding Buildings.</h5>
            <a href="#contact" class="ready-btn scrollto">Contact us</a>
          </div>
        </div>
      </div>
    </div><!-- End Rviews Section -->

  
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});
customElements.define('flattern-client-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/flattern.css"/>
  <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  </head>
    
  <!-- ======= Our Clients Section ======= -->
  <section id="clients" class="clients">
    <div class="container">

      <div class="section-title" data-aos="fade-up">
        <h2>Our <strong>Clients</strong></h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row no-gutters clients-wrap clearfix" data-aos="fade-up">

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="client-logo">
            <img src="assets/img/clients/client-1.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="client-logo">
            <img src="assets/img/clients/client-2.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="client-logo">
            <img src="assets/img/clients/client-3.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="client-logo">
            <img src="assets/img/clients/client-4.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="client-logo">
            <img src="assets/img/clients/client-5.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="client-logo">
            <img src="assets/img/clients/client-6.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="client-logo">
            <img src="assets/img/clients/client-7.png" class="img-fluid" alt="">
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-xs-6">
          <div class="client-logo">
            <img src="assets/img/clients/client-8.png" class="img-fluid" alt="">
          </div>
        </div>

      </div>

    </div>
  </section><!-- End Our Clients Section -->
  
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});
customElements.define('services-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/flexor.css"/>
  <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="./assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="./assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  </head>
    
  <!-- ======= Values Section ======= -->
    <section id="values" class="values">
      <div class="container">

        <div class="row">
          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div class="card" style="background-image: url(assets/img/values-1.jpg);">
              <div class="card-body">
                <h5 class="card-title"><a href="">Our Mission</a></h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="100">
            <div class="card" style="background-image: url(assets/img/values-2.jpg);">
              <div class="card-body">
                <h5 class="card-title"><a href="">Our Plan</a></h5>
                <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>

          </div>
          <div class="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card" style="background-image: url(assets/img/values-3.jpg);">
              <div class="card-body">
                <h5 class="card-title"><a href="">Our Vision</a></h5>
                <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card" style="background-image: url(assets/img/values-4.jpg);">
              <div class="card-body">
                <h5 class="card-title"><a href="">Our Care</a></h5>
                <p class="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Values Section -->

 
  
  
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }


}
});
customElements.define('-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/solution.css"/>
  <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  </head>
    
  
  
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});