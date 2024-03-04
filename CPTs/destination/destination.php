<?php

/**
 * Registers the 'destination' custom post type.
 *
 * @since 1.0.0
 *
 * @return void
 */
function register_destination_cpt() : void {
	$labels = [
		'name'                  => _x( 'Destinations', 'Post Type General Name', 'chenot' ),
		'singular_name'         => _x( 'Destination', 'Post Type Singular Name', 'chenot' ),
		'menu_name'             => __( 'Destinations', 'chenot' ),
		'name_admin_bar'        => __( 'Destinations', 'chenot' ),
		'archives'              => __( 'Destinations Archives', 'chenot' ),
		'attributes'            => __( 'Destinations Attributes', 'chenot' ),
		'parent_item_colon'     => __( 'Parent Destination:', 'chenot' ),
		'all_items'             => __( 'All Destinations', 'chenot' ),
		'add_new_item'          => __( 'Add New Destination', 'chenot' ),
		'add_new'               => __( 'Add New', 'chenot' ),
		'new_item'              => __( 'New Destination', 'chenot' ),
		'edit_item'             => __( 'Edit Destination', 'chenot' ),
		'update_item'           => __( 'Update Destination', 'chenot' ),
		'view_item'             => __( 'View Destination', 'chenot' ),
		'view_items'            => __( 'View Destinations', 'chenot' ),
		'search_items'          => __( 'Search Destinations', 'chenot' ),
		'not_found'             => __( 'Destination Not Found', 'chenot' ),
		'not_found_in_trash'    => __( 'Destination Not Found in Trash', 'chenot' ),
		'featured_image'        => __( 'Featured Image', 'chenot' ),
		'set_featured_image'    => __( 'Set Featured Image', 'chenot' ),
		'remove_featured_image' => __( 'Remove Featured Image', 'chenot' ),
		'use_featured_image'    => __( 'Use as Featured Image', 'chenot' ),
		'insert_into_item'      => __( 'Insert into Destination', 'chenot' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Destination', 'chenot' ),
		'items_list'            => __( 'Destinations List', 'chenot' ),
		'items_list_navigation' => __( 'Destinations List Navigation', 'chenot' ),
		'filter_items_list'     => __( 'Filter Destinations List', 'chenot' ),
	];
	$labels = apply_filters( 'destination-labels', $labels );

	$args = [
		'label'                 => __( 'Destination', 'chenot' ),
		'labels'                => $labels,
		'show_ui'               => true,
		'menu_position'         => 21,
		'menu_icon'             => '/wp-content/uploads/2024/03/destinations.svg',
		'show_in_rest'          => true,
        'supports'              => [
			'title',
			'editor',
			'thumbnail',
		],

	];
	$args = apply_filters( 'destination-args', $args );

	register_post_type( 'destination', $args );
}
add_action( 'init', 'register_destination_cpt', 0 );