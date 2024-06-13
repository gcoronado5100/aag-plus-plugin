<?php

function aag_enqueue_assets()
{
    wp_enqueue_style('aag-parts-carousel-style', AAG_PLUS_PLUGIN_URL . 'assets/css/partsCarousel.css', [], AAG_PLUS_PLUGIN_VERSION);
    wp_enqueue_script('parts-swiper', AAG_PLUS_PLUGIN_URL . 'assets/js/partsSwiper.js', ['jquery', 'aag-swiper-js'], AAG_PLUS_PLUGIN_VERSION, true);
}
