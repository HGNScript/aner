<?php
namespace app\admin\controller;

class Company extends Common {

	protected $company;
	protected function _initialize() {
		parent::_initialize();
		$this->company = new \app\admin\model\Company();
	}

	public function index() {
		$info = db('company')->order('company_id')->limit(1)->find();
		if ($info) {
			$this->assign('info', $info);
		} else {
			$this->assign('info', null);
		}
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

	public function editInfo(){
		$data = input('post.');
		$id = input('get.id');

		$suc =$this->company->editInfo($data, $id);
		return json($suc);

	}

}