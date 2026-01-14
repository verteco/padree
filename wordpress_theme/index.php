<?php
/**
 * Main Template File
 *
 * This file loads the React application.
 *
 * @package Padree
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
        <?php wp_title('|', true, 'right'); ?> PADREE
    </title>

    <?php wp_head(); ?>

    <!-- React App Assets -->
    <script type="module" crossorigin
        src="<?php echo get_template_directory_uri(); ?>/assets/index-VIQTUhNC.js"></script>
    <link rel="stylesheet" crossorigin href="<?php echo get_template_directory_uri(); ?>/assets/index-TK1RJXMT.css">
</head>

<body <?php body_class(); ?>>
    <div id="root"></div>

    <?php wp_footer(); ?>
</body>

</html>