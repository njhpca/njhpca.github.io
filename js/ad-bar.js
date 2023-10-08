function createAdBar() {
    
    var adBar = document.createElement('div');
    adBar.className = 'ad-bar';
    adBar.innerHTML = `
    <!-- ad info  -->

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <style>
            /* Style for the ad bar */
            .ad-bar {
    
                color: #fff;
                text-align: center;
                padding: 10px 0;
            }
    
            /* Style for each logo in the ad bar */
            .ad-logo {
                display: inline-block;
                margin: 0 10px;
            }
    
            /* Style for the clickable logo images */
            .ad-logo img {
                width: 100px; /* Adjust the width as needed */
                height: auto; /* Maintain aspect ratio */
                cursor: pointer;
            }
    
            /* Style for the links */
            .ad-logo a {
                text-decoration: none;
                color: #000;
                font-size: large;
                font-weight: 800;
            }
        </style>
    </head>
        <div class="service_area">
            <div class="container">
                <div class="row">
    
                    <div class="col-xl-2 col-md-2 col-lg-2">
                    </div>
                    <div class="col-xl-4 col-md-4 col-lg-4">
                        <!-- Logo 1 -->
                        <div class="ad-logo align-items-center">
                            <a href="https://www.qualiaglass.com/" target="njhpca-ad">
                                <img src="img/qualia-logo.png" alt="Qualia Glass">
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 col-lg-4">
    
                        <!-- Logo 2 -->
    
                        <div class="ad-logo align-items-center">
                            <a href="https://youtu.be/65F0kikq-iY?si=vFsLI3F3_26a616q" target="njhpca-ad">
                                高登保险</a>
                        </div>
                    </div>
                    <div class="col-xl-2 col-md-2 col-lg-2">
                    </div>
                </div>
    
                <div class="row">

                    <br>
                </div>
                <div class="row">
    
                    <div class="col-xl-2 col-md-4 col-lg-2">
    
                        <!-- Logo 4 -->
                        <div class="ad-logo  align-items-center">
                            <div class="ad-logo align-items-center" target="njhpca-ad">
                                <a href="https://www.uhcasian.com/" target="njhpca-ad">United Healthcare</a>
                            </div>
                        </div>
    
                    </div>


                    <div class="col-xl-2 col-md-4 col-lg-2">

                        <!-- Logo 5 -->
                        <div class="ad-logo  align-items-center">
                            <div class="ad-logo  align-items-center" target="njhpca-ad">
                                <a href="img/colucci-attorney.jpeg" target="njhpca-ad"> &nbsp;&nbsp;柯奇律师事务所 Colucci Law Firm</a>
                            </div>
                        </div>

                    </div>

                    <div class="col-xl-2 col-md-4 col-lg-2">
    
                        <!-- Logo 6 -->
                        <div class="ad-logo  align-items-center">
                            <a href="img/cricketwireless-ad.png" target="njhpca-ad">
                                <img src="data:image/png;base64,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"
                                     alt="Cricket">
                            </a>
                        </div>
                    </div>

                    <div class="col-xl-2 col-md-4 col-lg-2">
    
                        <!-- Logo 7 -->
                        <div class="ad-logo  align-items-center">
                            <a href="https://www.foursisterswinery.com/" target="njhpca-ad">
                                <img src="img/four-sisters.jpg" alt="Four Sisters Winery" class="rounded-circle" width=120
                                     height=70>
                            </a>
                        </div>
                    </div>
    
    
                    <div class="col-xl-2 col-md-4 col-lg-2">
    
                        <div class="ad-logo  align-items-center">
                            <a href="img/papa-johns-ad.png" target="njhpca-ad">
                                <img src="img/papa-johns.png" alt="Papa Johns">
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-2 col-md-4 col-lg-2">
    
                        <div class="ad-logo  align-items-center">
                            <a href="img/yang-atterney.jpeg" target="njhpca-ad">
                                新泽西杨氏联合律师楼</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Rest of your website content goes here -->
    
    </body>
    
    
    
        <!-- ad info end  -->
    `;
  
    // Find the footer element (you might need to adjust this selector)
    var footer = document.querySelector('footer');
  
    // Insert the ad bar before the footer
    if (footer) {
      footer.parentNode.insertBefore(adBar, footer);
    }
  }
  
  // Call the createAdBar function to generate the ad bar
  createAdBar();
  
  