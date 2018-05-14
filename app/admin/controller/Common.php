<?php

namespace app\admin\controller;
use think\Controller;
use think\Request;

class Common extends Controller {
    public function __construct ( Request $request = null ) {
		parent::__construct( $request );
		if(!session('admin.admin_id')) {
			$this->redirect('admin/Login/index');
		}
	}

	public function page($curr, $limit, $data){
		if ($curr) {
			$star = ($curr-1)*$limit;
			$data = array_slice($data,$star,$limit);
			return $data;
		} else {
			return sizeof($data);
		}
	}
}