<?php

/**
 * Registers the 'treatment' custom post type.
 *
 * @since 1.0.0
 *
 * @return void
 */
function register_treatment_cpt() : void {
	$labels = [
		'name'                  => _x( 'Treatments', 'Post Type General Name', 'chenot' ),
		'singular_name'         => _x( 'Treatment', 'Post Type Singular Name', 'chenot' ),
		'menu_name'             => __( 'Treatments', 'chenot' ),
		'name_admin_bar'        => __( 'Treatments', 'chenot' ),
		'archives'              => __( 'Treatments Archives', 'chenot' ),
		'attributes'            => __( 'Treatments Attributes', 'chenot' ),
		'parent_item_colon'     => __( 'Parent Treatment:', 'chenot' ),
		'all_items'             => __( 'All Treatments', 'chenot' ),
		'add_new_item'          => __( 'Add New Treatment', 'chenot' ),
		'add_new'               => __( 'Add New', 'chenot' ),
		'new_item'              => __( 'New Treatment', 'chenot' ),
		'edit_item'             => __( 'Edit Treatment', 'chenot' ),
		'update_item'           => __( 'Update Treatment', 'chenot' ),
		'view_item'             => __( 'View Treatment', 'chenot' ),
		'view_items'            => __( 'View Treatments', 'chenot' ),
		'search_items'          => __( 'Search Treatments', 'chenot' ),
		'not_found'             => __( 'Treatment Not Found', 'chenot' ),
		'not_found_in_trash'    => __( 'Treatment Not Found in Trash', 'chenot' ),
		'featured_image'        => __( 'Featured Image', 'chenot' ),
		'set_featured_image'    => __( 'Set Featured Image', 'chenot' ),
		'remove_featured_image' => __( 'Remove Featured Image', 'chenot' ),
		'use_featured_image'    => __( 'Use as Featured Image', 'chenot' ),
		'insert_into_item'      => __( 'Insert into Treatment', 'chenot' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Treatment', 'chenot' ),
		'items_list'            => __( 'Treatments List', 'chenot' ),
		'items_list_navigation' => __( 'Treatments List Navigation', 'chenot' ),
		'filter_items_list'     => __( 'Filter Treatments List', 'chenot' ),
	];
	$labels = apply_filters( 'treatment-labels', $labels );

	$args = [
		'label'                 => __( 'Treatment', 'chenot' ),
		'labels'                => $labels,
		'show_ui'               => true,
		'menu_position'         => 21,
		'menu_icon'             => '/wp-content/uploads/2024/03/treatments.svg',
		'show_in_rest'          => true,
        'supports'              => [
			'title',
			'editor',
			'thumbnail',
		],
	];
	$args = apply_filters( 'treatment-args', $args );

	register_post_type( 'treatment', $args );
}
add_action( 'init', 'register_treatment_cpt', 0 );