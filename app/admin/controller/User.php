<?php
namespace app\admin\controller;

class User extends Common {

	protected $comment;
	protected function _initialize() {
		parent::_initialize();
		$this->comment = new \app\admin\model\User();
	}

	public function index() {
		if (request()->isAjax()) {
			$user = db('user')->order('user_sendtime desc')->select();

			foreach ($user as $key => $value) {
				$str = $user[$key]['user_comment'];
				$str = mb_substr(strip_tags($str),0,15,'utf-8');
				$user[$key]['user_comment'] = $str;
			}

			foreach ($user as $key => $value) {
				$user[$key]['user_sendtime'] = date('Y-m-d',$value['user_sendtime']);
			}

			$curr = input('get.curr');
			$limit = input('get.limit');
			$suc = $this->page($curr, $limit, $user);
			return json($suc);
		}

		// $this->assign('goods', $goods);
		return $this->fetch();
	}

	public function del(){
		$id = input('post.');
		$src = db('user')->delete($id);
		if ($src) {
            return json($res = ['valid' => 1, 'msg' => '删除成功']);
    	} else {
            return json($res = ['valid' => 0, 'msg' => '删除失败']);
    	}
	}

	public function userInfo(){
		$id = input('get.id');
		$userinfo = db('user')->where('user_id', $id)->find();

		$this->assign('userinfo', $userinfo);
		return $this->fetch();
	}
}