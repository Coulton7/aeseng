<?php
/**
 * @file
 * The primary PHP file for this theme.
 */
function aeseng_preprocess_page(&$vars) {
    // template files called page--contenttype.tpl.php
    if (isset($vars['node']->type)) {
        $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;
    }

	drupal_add_js(drupal_get_path('theme', 'aesbs337').'/js/logoscroll.js');
  drupal_add_js(drupal_get_path('theme', 'aesbs337').'/js/smooth-scroll.js');
	drupal_add_js(drupal_get_path('theme', 'aesbs337').'/js/fade-text.js');
  drupal_add_js(drupal_get_path('theme', 'aesbs337').'/js/contact-icon.js');
  drupal_add_js(drupal_get_path('theme', 'aesbs337').'/js/nav-btn.js');
  drupal_add_js(drupal_get_path('theme', 'aesbs337').'/js/reg-mark.js');
  drupal_add_js(drupal_get_path('theme', 'aesbs337').'/js/prod-enq-bg-img.js');
}

function aeseng_css_alter(&$css){
  $css['sites/all/themes/aeseng/bootstrap/css/bootstrap.min.css']['weight']=11;
  $css['sites/all/themes/aeseng/bootstrap/css/bootstrap-theme.min.css']['weight']=12;
  $css['sites/all/themes/aesbs337/css/fonts-style.css']['weight']=13;
  $css['sites/all/themes/aesbs337/css/regions-style.css']['weight']=14;
  $css['sites/all/themes/aesbs337/css/block-style.css']['weight']=15;
  $css['sites/all/themes/aesbs337/css/field-style.css']['weight']=16;
  $css['sites/all/themes/aesbs337/css/jquery.scrolling-tabs.min.css']['weight']=17;
  $css['sites/all/themes/aeseng/css/global-style.css']['weight']=18;
}

function aeseng_theme(){
	$items=array();

	$items['user_login']=array(
	'render element' => 'form',
	'path'=> drupal_get_path('theme', 'aesbs337').'/templates',
	'template'=>'user_login',
	'preprocess functions'=>array(
	'aesbs337_preprocess_user_login'
	),
	);
	return $items;
}

function aeseng_preprocess_node(&$variables) {
  $node = $variables['node'];
  $date = format_date($node->created, 'custom', 'F j, Y');
  $variables['submitted'] = t('Submitted by !username on !datetime', array('!username' => $variables['name'], '!datetime' => $date));

  // Get a list of all the regions for this theme
  foreach (system_region_list($GLOBALS['theme']) as $region_key => $region_name) {
    // Get the content for each region and add it to the $region variable
    if ($blocks = block_get_blocks_by_region($region_key)) {
      $variables['region'][$region_key] = $blocks;
    }
    else {
      $variables['region'][$region_key] = array();
    }
  }
}

function aeseng_form_alter(&$form, &$form_state, $form_id){
  if($form_id == 'search-api-page-search-form-node-taxonomy-search'){
    $form['search-api-page-search-form-node-taxonomy-search']['#attributes']['placeholder'] = t('Search');

    $form['button']= array(
      '#type' => 'item',
      '#markup' => '<button type= "submit" id="edit-submit-5" name="op" class="btn btn-primary form-submit"><i class="fas fa-search"></i></button>',
      '#weight' => 700,
    );
  }
}

function aeseng_preprocess_maintenance_page(&$variables) {
  if (isset($variables['db_is_active']) && !$variables['db_is_active']) {
// Template suggestion for offline site
    $variables['theme_hook_suggestion'] = 'maintenance_page__offline';
  }
else {
// Template suggestion for live site (in maintenance mode)
    $variables['theme_hook_suggestion'] = 'maintenance_page';
 }
}
