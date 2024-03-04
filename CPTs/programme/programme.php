<?php

/**
 * Registers the 'programme' custom post type.
 *
 * @since 1.0.0
 *
 * @return void
 */
function register_programme_cpt() : void {
	$labels = [
		'name'                  => _x( 'Programmes', 'Post Type General Name', 'chenot' ),
		'singular_name'         => _x( 'Programme', 'Post Type Singular Name', 'chenot' ),
		'menu_name'             => __( 'Programmes', 'chenot' ),
		'name_admin_bar'        => __( 'Programmes', 'chenot' ),
		'archives'              => __( 'Programmes Archives', 'chenot' ),
		'attributes'            => __( 'Programmes Attributes', 'chenot' ),
		'parent_item_colon'     => __( 'Parent Programme:', 'chenot' ),
		'all_items'             => __( 'All Programmes', 'chenot' ),
		'add_new_item'          => __( 'Add New Programme', 'chenot' ),
		'add_new'               => __( 'Add New', 'chenot' ),
		'new_item'              => __( 'New Programme', 'chenot' ),
		'edit_item'             => __( 'Edit Programme', 'chenot' ),
		'update_item'           => __( 'Update Programme', 'chenot' ),
		'view_item'             => __( 'View Programme', 'chenot' ),
		'view_items'            => __( 'View Programmes', 'chenot' ),
		'search_items'          => __( 'Search Programmes', 'chenot' ),
		'not_found'             => __( 'Programme Not Found', 'chenot' ),
		'not_found_in_trash'    => __( 'Programme Not Found in Trash', 'chenot' ),
		'featured_image'        => __( 'Featured Image', 'chenot' ),
		'set_featured_image'    => __( 'Set Featured Image', 'chenot' ),
		'remove_featured_image' => __( 'Remove Featured Image', 'chenot' ),
		'use_featured_image'    => __( 'Use as Featured Image', 'chenot' ),
		'insert_into_item'      => __( 'Insert into Programme', 'chenot' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Programme', 'chenot' ),
		'items_list'            => __( 'Programmes List', 'chenot' ),
		'items_list_navigation' => __( 'Programmes List Navigation', 'chenot' ),
		'filter_items_list'     => __( 'Filter Programmes List', 'chenot' ),
	];
	$labels = apply_filters( 'programme-labels', $labels );

	$args = [
		'label'                 => __( 'Programme', 'chenot' ),
		'labels'                => $labels,
		'show_ui'               => true,
		'menu_position'         => 21,
		'menu_icon'             => '/wp-content/uploads/2024/03/programmes.svg',
		'show_in_nav_menus'     => true,
		'show_in_rest'          => true,
        'publicly_queryable'    => true,
        'supports'              => [
			'title',
			'editor',
			'thumbnail',
		],
	];
	$args = apply_filters( 'programme-args', $args );

	register_post_type( 'programme', $args );
}
add_action( 'init', 'register_programme_cpt', 0 );