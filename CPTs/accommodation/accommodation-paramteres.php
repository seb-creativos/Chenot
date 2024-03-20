<?php

// Posts per Page
add_action( 'pre_get_posts', 'proyecto_archive_posts_per_page' );
function proyecto_archive_posts_per_page( $query ) {
    if ( ! is_admin() && $query->is_main_query() && is_post_type_archive( 'accommodation' ) ) {
        $query->set( 'posts_per_page', -1 );
    }
}