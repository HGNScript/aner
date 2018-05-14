<?php
namespace app\admin\controller;

class Goods extends Common {

	protected $goods;
	protected function _initialize() {
		parent::_initialize();
		$this->goods = new \app\admin\model\Goods();
	}

	public function index() {
		if (request()->isAjax()) {
			$search = input('post.search');
			if ($search) {
				$goods = $this->goods->search($search);
			} else{
				$goods = db('goods')->order('goods_sendtime desc')->select();
			}

			foreach ($goods as $key => $value) {
				$goods[$key]['goods_sendtime'] = date('Y-m-d',$value['goods_sendtime']);
			}

			$curr = input('get.curr');
			$limit = input('get.limit');
			$suc = $this->page($curr, $limit, $goods);
			return json($suc);
		}

		// $this->assign('goods', $goods);
		return $this->fetch();
	}

	public function addGoods(){
		$id = input('get.id');
		if ($id) {
			$goods = db('goods')->where('goods_id', $id)->find();
		} else {
			$goods = null;
		}

		if (request()->isAjax()) {
			$data = input('post.');
			$id = input('get.id');

			$validate = validate('Goods');

			if(!$validate->check($data)){
			    return json($res = ['valid' => 0, 'msg' => $validate->getError()]);
			} else {
				$data['goods_sendtime'] = time();
				$suc = $this->goods->addGoods($data, $id);
				if ($suc) {
					if (!$id) {
			            return json($res = ['valid' => 1, 'msg' => '添加成功']);
					} else {
			            return json($res = ['valid' => 1, 'msg' => '编辑成功']);
					}
	        	} else {
	        		if (!$id) {
			            return json($res = ['valid' => 0, 'msg' => '添加失败']);
					} else {
			            return json($res = ['valid' => 0, 'msg' => '编辑失败']);
					}
	        	}
			}
		}
		$this->assign('goods', $goods);
		$this->assign('goods_id', $id);
		return $this->fetch();
	}

	public function upload(){
		$file = request()->file('image');
	    // 移动到框架应用根目录/public/uploads/ 目录下
	    if($file){
	        $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');

	        if($info){

	        	$src = '../../'.'uploads'. DS . $info->getSaveName();

	        	if ($src) {
		            return json($res = ['valid' => 1, 'msg' => '添加成功', 'src' => $src]);
	        	} else {
		            return json($res = ['valid' => 0, 'msg' => '添加失败']);
	        	}

	            // return json($res = ['valid' => 1, 'msg' => $src]);
	        }else{
	            // 上传失败获取错误信息
	            return json($res = ['valid' => 1, 'msg' => $file->getError()]);
	        }
	    }
	}

	public function del(){
		$id = input('post.');
		$src = db('goods')->delete($id);
		if ($src) {
            return json($res = ['valid' => 1, 'msg' => '删除成功']);
    	} else {
            return json($res = ['valid' => 0, 'msg' => '删除失败']);
    	}
	}
}