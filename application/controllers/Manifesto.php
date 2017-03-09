<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Manifesto extends CI_Controller {

  public function index()
  {
    $this->template
      ->set_layout('default')
      ->set_partial('header', 'partials/header')
      ->title('Manifesto', 'Sleepytime Sickness Factory')
      ->set_metadata("keywords", "sickness, health")
      ->set_metadata("description", "Please welcome the tiny, beautiful machines.")
      ->set_partial('footer', 'partials/footer')
      ->build('manifesto');
  }
}

/* End of file manifesto.php */
/* Location: ./application/controllers/manifesto.php */
