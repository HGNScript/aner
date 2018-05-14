<?php
namespace app\admin\controller;
use think\Controller;

class Login extends  Controller{

	public function index() {
		if (request()->isAjax()) {
			$data = input('post.');

			$validate = validate('Login');

			if(!$validate->check($data)){

				$res = ['valid' => 0, 'msg' => $validate->getError()];

			} else {

			    $info =  Db('admin')->where('admin_numBer', $data['admin_numBer'])

			    ->where('admin_password', md5($data['admin_password']))->find();

			    if ($info) {
			    	session('admin', ['admin_id' => $info['admin_id'], 'admin_name' => $info['admin_name']]);

			    	$res = ['valid' => 1, 'msg' => '登录成功!'];

			    } else {

			    	$res = ['valid' => 0, 'msg' => '账号或密码不正确!'];

			    }
			}
			return json($res);

		}
		return $this->fetch();
	}
}