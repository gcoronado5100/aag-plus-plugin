<?php

/**
 * Plugin Name:       Aircraft Accessories WP Plugin
 * Plugin URI:        https://gabecode.com
 * Description:       Add estra settings to this website.
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            Gabriel Coronado
 * Author URI:        https://gabecode.com
 * Text Domain:       aag-plus
 * Domain Path:       /languages
 */


if (!function_exists('add_action')) {
    echo '<img src= "https://64.media.tumblr.com/5edf86e8983d3b704030e316e7643074/tumblr_inline_ng1ikyO2Bz1sj4qvu.gif" alt="Where are you going?">';
    exit;
}

//  Constants
define('AAG_PLUS_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('AAG_PLUS_PLUGIN_URL', plugin_dir_url(__FILE__));
define('AAG_PLUS_PLUGIN_VERSION', '1.0.0');

//  Includes
$rootFiles = glob(AAG_PLUS_PLUGIN_PATH . '/includes/*.php');
$subdirectories = glob(AAG_PLUS_PLUGIN_PATH . '/includes/**/*.php');
$allFiles = array_merge($rootFiles, $subdirectories);

foreach ($allFiles as $file) {
    include_once($file);
}

//  Hooks
register_activation_hook(__FILE__, 'aag_activate_plugin');
add_action('wp_enqueue_scripts', 'aag_enqueue_assets');
add_action('init', 'aa_register_blocks');


//  Shortcodes
add_shortcode('aag_parts_swiper', 'aag_parts_swiper');
