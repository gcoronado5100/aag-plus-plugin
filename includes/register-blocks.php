<?php

function aa_register_blocks()
{
    $blocks = [
        ['name' => 'aag-page-banner'],
        ['name' => 'aag-card-service'],
        ['name' => 'aag-pdf-block']
    ];

    foreach ($blocks as $block) {
        register_block_type(
            AAG_PLUS_PLUGIN_PATH . 'build/blocks/' . $block['name'],
            isset($block['options']) ? $block['options'] : []
        );
    }
}
