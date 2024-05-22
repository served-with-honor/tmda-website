<?php
/*
 * Plugin Name: Telemedica
 * Description: A custom plugin for stuff and things.
 * Version:     1.0
 * License:     UNLINCESED
 * Author:      Lee Wise, Tim Tran
*/

$frontendUrl = 'https://telemedicallc.com';
$buildWebhookEndpoint = 'https://api.netlify.com/build_hooks/6526d323f21b1300a914d7a1';

add_filter( 'preview_post_link', 'modify_preview_post_link', 10, 2 );
function modify_preview_post_link($preview_link, $post) {
  global $frontendUrl;
  return $frontendUrl . '/blog/preview/' . $post->ID;
}

// Modify the post link to point to the decoupled frontend
add_filter( 'post_link', 'modify_post_link', 10, 3 );
function modify_post_link( $url, $post, $leavename=false ) {
  global $frontendUrl;

	if ( $post->post_type == 'post' ) {
    $url = str_replace(home_url(), $frontendUrl, $url);
	}
  
	return $url;
}

add_filter( 'graphql_connection_query_args', function( $query_args, $connection_resolver ) {

  if ( $connection_resolver instanceof \WPGraphQL\Data\Connection\UserConnectionResolver ) {
  unset( $query_args['has_published_posts'] );
  }
  
  return $query_args;
  
  }, 10, 2 );
  
  add_filter( 'graphql_object_visibility', function( $visibility, $model_name, $data, $owner, $current_user ) {
  
  // only apply our adjustments to the UserObject Model
  if ( 'UserObject' === $model_name ) {
  $visibility = 'public';
  }
  
  return $visibility;
  
  }, 10, 5 );

// Customize the admin top bar menu
add_action( 'admin_bar_menu', 'modify_admin_bar_menu', 80 );
function modify_admin_bar_menu( $wp_admin_bar ) {
  global $frontendUrl;
  $siteName = $wp_admin_bar->get_node('site-name');
  $siteName->title = 'View Frontend';
  $siteName->href = $frontendUrl;
  $wp_admin_bar->add_node($siteName);

  // Remove the dropdown option for "Visit site", it's redundant
  $wp_admin_bar->remove_menu('view-site');

  // Remove the WordPress logo
	$wp_admin_bar->remove_node( 'wp-logo' ); 
  
  // Remove the option for "Page" from the "New" menu
	$wp_admin_bar->remove_node( 'new-page' );

  // Generate a random greeting to replace the default "Howdy"
  $greetings = array(
    "What it do, it's",
    "It's ya boi,",
    "✌️",
    "Ahoy, matey ",
    "So… we meet at last",
    "'Ello, gov'nor",
    "Tip o' the morning to ya",
    "'Ello, comrade",
    "How do you do, fellow kid",
    "What's cookin', good lookin",
    "How you livin', chicken",
    "What's shakin', bacon",
  );
  $greeting = $greetings[array_rand($greetings, 1)];
  $oldText = $wp_admin_bar->get_node( 'my-account' )->title;
  $newText = str_replace( 'Howdy,', $greeting, $oldText );
  $wp_admin_bar->add_node( array(
    'id' => 'my-account',
    'title' => $newText,
  ) );
}

// Customize the admin side menu
add_action( 'admin_menu', 'modify_admin_menu' );
function modify_admin_menu(){
  // Remove the "Pages" menu item
  remove_menu_page('edit.php?post_type=page');
  // Remove the "Themes" menu item
  remove_menu_page('themes.php');
}

// Create custom dashboard widget
add_action('wp_dashboard_setup', 'my_custom_dashboard_widgets');
function my_custom_dashboard_widgets() {
  global $wp_meta_boxes;
  wp_add_dashboard_widget('custom_help_widget', 'Telemedica Custom Website', 'custom_dashboard_help');
}
function custom_dashboard_help() {
  global $frontendUrl;
  $repoUrl = 'https://github.com/VAClaimsInsider/tmda-website';
  $directoryBackendUrl = 'https://servedwithhonor.sanity.studio/';
  $documentationUrl = 'https://app.clickup.com/8500392/v/dc/83d58-37590/83d58-52630';

  echo '<p><img src="https://telemedicallc.com/_next/static/media/logo.7d95e454.svg" width="200" alt="" /></p>';
  echo '<p>
    <a href="'.$directoryBackendUrl.'" target="_blank" class="button button-primary">Manage Directory</a>
    <a href="'.$frontendUrl.'" target="_blank" class="button">View Site</a>
    <a href="'.$repoUrl.'" target="_blank" class="button">Code Repo</a>
  </p>';
  echo '<hr />';
  echo '<p>This site is a custom developed, decoupled, instance of Wordpress.</p>';
  echo '<p>This Wordpress instance is <strong>only</strong> used for articles. The directory for team members and providers is managed within <a href="'.$directoryBackendUrl.'" target="_blank">Sanity</a>. The majority of the website\'s content is contained within the <a href="'.$repoUrl.'" target="_blank">frontend codebase</a>.</p>';
  echo '<p>For more detailed information, you can search the <a href="'.$documentationUrl.'" target="_blank">Telemedica Website Documentation</a>.</p>';
  echo '<hr />';
  echo '<p>Need more help? <a href="mailto:tecth@vaclaimsinsider.com">Contact our tech team</a>.</p>';
}



// function send_webhook($post_id, $post) {
//   global $buildWebhookEndpoint;

//   if ( $post->post_status === 'publish' ) {
//       wp_remote_post($buildWebhookEndpoint);
//   }
// }
// add_action( 'publish_post', 'send_webhook', 10, 2 );