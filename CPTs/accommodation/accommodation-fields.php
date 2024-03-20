<?php

add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'      => 'Accommodation Details',
        'post_types' => 'accommodation',
        'fields'     => [
            [
                'name'              => 'Price per night',
                'id'                => 'price-per-night',
                'type'              => 'number',
            ],
            [
                'name'              => 'Beds',
                'id'                => 'beds',
                'type'              => 'number',
            ],
            [
                'name'              => 'Baths',
                'id'                => 'baths',
                'type'              => 'number',
            ],
            [
                'name'              => 'Square meters',
                'id'                => 'square-meters',
                'type'              => 'number',
            ],
        ],
    ];
    return $meta_boxes;
} );