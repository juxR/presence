<?php

class BaseController extends Controller {

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */

	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);
		}
		if(!Session::has('user'))
		{
			Auth::logout();
			return Redirect::to('index')
			->with('message','Votre session à expirée, reconnectez-vous.');
		}
	}

	public static function dateEu( $date ){

		$dateExplode = explode('-',$date);

		return $dateExplode[2].'/'. $dateExplode[1].'/'.$dateExplode[0];
	}

}