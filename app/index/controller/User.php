<?php
namespace app\index\controller;
use think\Controller;

class User extends Controller {

	public function index(){
		$banner = db('banner')->select();
		$goods = db('goods')->select();
		$comment = db('user')->select();
		$company = db('company')->find();


		$this->assign('banner', $banner);
		$this->assign('comment', $comment);
		$this->assign('goods', $goods);
		$this->assign('company', $company);
		return $this->fetch();
	}

	public function add(){
		$data = input('post.');

		$validate = validate('Comment');

		if(!$validate->check($data)) {
			return json($res = ['valid' => 0, 'msg' => $validate->getError()]);
		} else {
			$data['user_sendtime'] = time();
			$suc = db('user')->insert($data);
			if ($suc) {
				return json($res = ['valid' => 1, 'msg' => '提交成功']);
			} else{
				return json($res = ['valid' => 0, 'msg' => '提交失败']);
			}
		}

	}
}