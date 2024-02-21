<?php

add_action('template_redirect', 'restrict_content');
function restrict_content() {
    
    $allowed_content = array(
        'maintenance',
        'site-branding-stylesheet',
    );

    if (!is_user_logged_in() && !is_page($allowed_content)) {
        wp_redirect(home_url());
        exit;
    }
}