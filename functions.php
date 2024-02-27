<?php
/**
 * Theme functions and definitions.
 *
 * For additional information on potential customization options,
 * read the developers' documentation:
 *
 * https://developers.elementor.com/docs/hello-elementor-theme/
 *
 * @package HelloElementorChild
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Version Control, specify in style.css
if ( ! defined( '_VER' ) ) {
	define( '_VER', wp_get_theme()->get( 'Version' ) );
}

add_action( 'wp_enqueue_scripts', 'enqueue_child_assets' );
function enqueue_child_assets() {
	
	wp_enqueue_style(
        'frontend',
        get_stylesheet_directory_uri() . '/assets/css/frontend.min.css',
        array(), _VER, 'all'
    );

	wp_enqueue_script(
        'frontend',
        get_stylesheet_directory_uri() . '/assets/js/frontend.js',
        array(), _VER, true
    );
}

foreach ( glob( get_stylesheet_directory() . '/includes/_*.php' ) as $file ) {
    require_once $file;
}