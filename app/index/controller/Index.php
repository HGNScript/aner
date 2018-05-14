<?php
namespace app\index\controller;
use think\Controller;

class Index extends Controller {

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
}