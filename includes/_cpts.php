<?php

// Directory where CPTs are stored
define( 'CPTs_DIR', get_stylesheet_directory() . '/CPTs' );

// Get a list of directories inside the /CPTs directory
$CPTs = array_filter( glob( CPTs_DIR . '/*' ), 'is_dir' );

foreach ( $CPTs as $CPT ) {
    // Include all .php files inside the CPT directory
    foreach ( glob( $CPT . '/*.php' ) as $file ) {
        require_once($file);
    }
}
