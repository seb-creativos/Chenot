<?php

/**
 * Registers the 'destination-category' taxonomy.
 * 
 * @since 1.0.0
 * 
 * @return void
 */
function register_destination_category_tax() : void {
	$labels = [
		'name'                  => _x( 'Destination Categories', 'Taxonomy Name', 'chenot' ),
		'singular_name'         => _x( 'Destination Category', 'Taxonomy Singular Name', 'chenot' ),
		'menu_name'             => __( 'Destination Categories ', 'chenot' ),
		'all_items'             => __( 'All Destination Categories ', 'chenot' ),
		'parent_item'           => __( 'Parent Destination Category ', 'chenot' ),
		'parent_item_colon'     => __( 'Parent Destination Category: ', 'chenot' ),
		'new_item_name'         => __( 'New Destination Category ', 'chenot' ),
		'add_new_item'          => __( 'Add New Destination Category ', 'chenot' ),
		'edit_item'             => __( 'Edit Destination Category ', 'chenot' ),
		'update_item'           => __( 'Update Destination Category ', 'chenot' ),
		'view_item'             => __( 'View Destination Category ', 'chenot' ),
		'add_or_remove_items'   => __( 'Add or Remove Destination Categories ', 'chenot' ),
		'choose_from_most_used' => __( 'Choose from most used Destination Categories ', 'chenot' ),
		'popular_items'         => __( 'Popular Destination Categories ', 'chenot' ),
		'search_items'          => __( 'Search Destination Categories ', 'chenot' ),
		'not_found'             => __( 'Not Found ', 'chenot' ),
		'no_terms'              => __( 'No Destination Categories ', 'chenot' ),
		'items_list'            => __( 'Destination Categories List ', 'chenot' ),
		'items_list_navigation' => __( 'Destination Categories List Navigation ', 'chenot' ),
	];

	$args = [
		'labels'        => $labels,
		'hierarchical'  => true,
		'show_in_rest'  => true,
	];

	register_taxonomy( 'destination-category', ['destination'], $args );
}
add_action( 'init', 'register_destination_category_tax' );