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


                    <div class="col-xl-1 col-md-1 col-lg-1">
     
                        <div class="ad-logo align-items-center">
               
                        </div>
                    </div>
                    <div class="col-xl-2 col-md-2 col-lg-2">
    
                        <!-- Logo 2 -->
    
                        <div class="ad-logo align-items-center">

                            <a href="img/gaodeng.jpg" target="njhpca-ad"> &nbsp;&nbsp;高登保险</a>
                        </div>
                    </div>

                    <div class="col-xl-2 col-md-2 col-lg-2">
    
                        <!-- Logo 4 -->
                        <div class="ad-logo  align-items-center">
                            <div class="ad-logo align-items-center" target="njhpca-ad">
                                <a href="https://www.uhcasian.com/" target="njhpca-ad">United Healthcare</a>
                            </div>
                        </div>
    
                    </div>
   
                        
            

                    <div class="col-xl-2 col-md-2 col-lg-2">

                        <!-- Logo 5 -->
                        <div class="ad-logo  align-items-center">
                            <div class="ad-logo  align-items-center" target="njhpca-ad">
                                <a href="img/colucci-attorney.jpeg" target="njhpca-ad"> &nbsp;&nbsp;柯奇律师事务所 Colucci Law Firm</a>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-2 col-md-2 col-lg-2">
    
                        <!-- Logo 7 -->
                        <div class="ad-logo  align-items-center">
                        <a href="https://www.youtube.com/channel/UCM98SGQWI07ahZBhsrKtEZw" target="njhpca-ad">
                                Jasmine Tsui徐佳美 保险 房地产</a>    
                      
                    </div>
                    

                    <div class="col-xl-1 col-md-1 col-lg-1">
     
                        <div class="ad-logo align-items-center">
               
                        </div>
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

