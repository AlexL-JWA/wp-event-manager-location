<?php
/**
 * Created 16.06.2020
 * Version 1.0.0
 * Last update
 * Author: Alex L
 *
 */

$id            = get_the_ID();
$location_name = get_post_meta( $id, '_location', true );
$locationID    = get_post_meta( $id, '_id_location', true );

if ( $location_name ):
	?>
	<div class="location-part-url">
		<h3 class="wpem-heading-text"><?php echo __( 'Location Page', 'wp-event-manager-location' ) ?></h3>
		<div class="location">
			<p><a href="<?php the_permalink( $locationID ); ?>"><?php echo $location_name; ?></a></p>
		</div>
	</div>
<?php endif; ?>