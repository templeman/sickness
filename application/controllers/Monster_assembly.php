<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Monster_assembly extends CI_Controller {

  public function index()
  {
    $this->template
      ->set_layout('default')
      ->set_partial('header', 'partials/header')
      ->title('Directory', 'Sleepytime Sickness Factory')
      ->set_metadata("keywords", "sickness, health")
      ->set_metadata("description", "Please welcome the tiny, beautiful machines.")
      ->set_partial('footer', 'partials/footer')
      ->build('monster_assembly');
  }
}

/* End of file monster_assembly.php */
/* Location: ./application/controllers/monster_assembly.php */
