<?php

function aag_parts_swiper()
{
    ob_start();
?>
    <div id="partsCarousel">
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide part-box">
                <div class="box-overlay">
                    <img src="https://aircraftaccessoriesgroup.com/wp-content/uploads/2024/06/Hoses.png" alt="">
                    <h3>1</h3>
                    <p>Hoses</p>
                </div>
            </div>
            <div class="swiper-slide part-box sm-text">
                <div class="box-overlay">
                    <img src="https://aircraftaccessoriesgroup.com/wp-content/uploads/2024/06/Harnesses.png" alt="">
                    <h3>2</h3>
                    <p>Electrical Engine Harnesses</p>
                </div>
            </div>
            <div class="swiper-slide part-box">
                <div class="box-overlay">
                    <img src="https://aircraftaccessoriesgroup.com/wp-content/uploads/2024/06/Heat-Detectors.png" alt="">
                    <h3>3</h3>
                    <p>Heat Detectors</p>
                </div>
            </div>
            <div class="swiper-slide part-box">
                <div class="box-overlay">
                    <img src="https://aircraftaccessoriesgroup.com/wp-content/uploads/2024/06/Thermocouples.png" alt="">
                    <h3>4</h3>
                    <p>Thermocouples</p>
                </div>
            </div>
            <div class="swiper-slide part-box">
                <div class="box-overlay">
                    <img src="https://aircraftaccessoriesgroup.com/wp-content/uploads/2024/06/Pumps.png" alt="">
                    <h3>5</h3>
                    <p>PUMPS</p>
                </div>
            </div>
            <div class="swiper-slide part-box sm-text">
                <div class="box-overlay">
                    <img src="https://aircraftaccessoriesgroup.com/wp-content/uploads/2024/06/LPT-Cooling-Manifolds.png" alt="">
                    <h3>6</h3>
                    <p>LPT COOLING MANIFOLDS</p>
                </div>
            </div>
            <div class="swiper-slide part-box">
                <div class="box-overlay">
                    <img src="https://aircraftaccessoriesgroup.com/wp-content/uploads/2024/06/Manifolds.png" alt="">
                    <h3>7</h3>
                    <p>MANIFOLDS</p>
                </div>
            </div>
        </div>
        <div class="carousel__controls">
            <div class="col">
                <div class="swiper-pagination"></div>
            </div>
            <div class="col">
                <div class="partsSwiper-button-prev">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </div>
                <div class="partsSwiper-button-next">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
<?php
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
