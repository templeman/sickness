<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Orphans extends CI_Controller {

  public function index()
  {
    $data['asset_path'] = "orphans";
    $data['js'] = TRUE;
    $this->template
      ->set_layout('default')
      ->set_partial('header', 'partials/header')
      ->title('Directory', 'Sleepytime Sickness Factory')
      ->set_metadata("keywords", "sickness, health")
      ->set_metadata("description", "Please welcome the tiny, beautiful machines.")
      ->set_partial('footer', 'partials/footer')
      ->build('orphans', $data);
  }
}
