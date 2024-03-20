<?php

// Dequeue garbage
add_action( 'wp_enqueue_scripts', 'dequeue_garbage' );
function dequeue_garbage() {
	wp_dequeue_style( 'wp-block-library' );
	wp_dequeue_style( 'classic-theme-styles' );
	wp_dequeue_style( 'global-styles' );
}

// Remove WP emojis JS
add_action( 'init', 'disable_emojis' );
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
}

// Remove WP adminbar bump
add_action('get_header', 'remove_adminbar_bump');
function remove_adminbar_bump() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}

// Hide comments from WP side menu
add_action( 'admin_menu', 'remove_sidemenu_items' );
function remove_sidemenu_items() {
    remove_menu_page( 'edit-comments.php' );
}

// Disable native WP images lazyload
add_filter( 'wp_lazy_loading_enabled', '__return_false' );

// Set custom resolution limit for native WP JPG re-scaling to 4K
add_filter( 'big_image_size_threshold', 'set_image_threshold', 10, 4 );
function set_image_threshold( $threshold, $imagesize, $file, $attachment_id ) {
    return 3840;
}