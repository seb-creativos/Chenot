<?php

/**
 * Registers the 'accommodation' custom post type.
 *
 * @since 1.0.0
 *
 * @return void
 */
function register_accommodation_cpt() : void {
	$labels = [
		'name'                  => _x( 'Accommodations', 'Post Type General Name', 'chenot' ),
		'singular_name'         => _x( 'Accommodation', 'Post Type Singular Name', 'chenot' ),
		'menu_name'             => __( 'Accommodations', 'chenot' ),
		'name_admin_bar'        => __( 'Accommodations', 'chenot' ),
		'archives'              => __( 'Accommodations Archives', 'chenot' ),
		'attributes'            => __( 'Accommodations Attributes', 'chenot' ),
		'parent_item_colon'     => __( 'Parent Accommodation:', 'chenot' ),
		'all_items'             => __( 'All Accommodations', 'chenot' ),
		'add_new_item'          => __( 'Add New Accommodation', 'chenot' ),
		'add_new'               => __( 'Add New', 'chenot' ),
		'new_item'              => __( 'New Accommodation', 'chenot' ),
		'edit_item'             => __( 'Edit Accommodation', 'chenot' ),
		'update_item'           => __( 'Update Accommodation', 'chenot' ),
		'view_item'             => __( 'View Accommodation', 'chenot' ),
		'view_items'            => __( 'View Accommodations', 'chenot' ),
		'search_items'          => __( 'Search Accommodations', 'chenot' ),
		'not_found'             => __( 'Accommodation Not Found', 'chenot' ),
		'not_found_in_trash'    => __( 'Accommodation Not Found in Trash', 'chenot' ),
		'featured_image'        => __( 'Featured Image', 'chenot' ),
		'set_featured_image'    => __( 'Set Featured Image', 'chenot' ),
		'remove_featured_image' => __( 'Remove Featured Image', 'chenot' ),
		'use_featured_image'    => __( 'Use as Featured Image', 'chenot' ),
		'insert_into_item'      => __( 'Insert into Accommodation', 'chenot' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Accommodation', 'chenot' ),
		'items_list'            => __( 'Accommodations List', 'chenot' ),
		'items_list_navigation' => __( 'Accommodations List Navigation', 'chenot' ),
		'filter_items_list'     => __( 'Filter Accommodations List', 'chenot' ),
	];
	$labels = apply_filters( 'accommodation-labels', $labels );

	$args = [
		'label'                 => __( 'Accommodation', 'chenot' ),
		'labels'                => $labels,
		'show_ui'               => true,
		'menu_position'         => 21,
		'menu_icon'             => '/wp-content/uploads/2024/03/accommodations.svg',
		'show_in_nav_menus'     => true,
		'show_in_rest'          => true,
        'publicly_queryable'    => true,
        'supports'              => [
			'title',
			'editor',
			'thumbnail',
		],
	];
	$args = apply_filters( 'accommodation-args', $args );

	register_post_type( 'accommodation', $args );
}
add_action( 'init', 'register_accommodation_cpt', 0 );