<?php
namespace app\admin\controller;

class Play extends Common {

	public function index() {
		$banner = db('banner')->select();
		$this->assign('banner', $banner);
		return $this->fetch();
	}

	public function upload(){
		$id = input('get.id');
		$file = request()->file('image');
	    // 移动到框架应用根目录/public/uploads/ 目录下
	    if($file){
	        $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');

	        if($info){

	        	$src = '../../'.'uploads'. DS . $info->getSaveName();

	        	$res = db('banner')->where('banner_id', $id)->update(['banner_src' => $src]);
	        	if ($res) {
	            	return json($res = ['valid' => 1, 'msg' => '更换成功']);
	        	} else {
	            	return json($res = ['valid' => 0, 'msg' => '更换失败']);
	        	}

	            // return json($res = ['valid' => 1, 'msg' => $src]);
	        }else{
	            // 上传失败获取错误信息
	            return json($res = ['valid' => 0, 'msg' => $file->getError()]);
	        }
	    }
	}

	// public function sort(){
	// 	$id = input('get.id');
	// 	$sort = input('post.sort');
	// 	$res = db('banner')->where('banner_id', $id)->update(['banner_sort' => $sort]);
	// 	if ($res) {
	// 	 	return json($res = ['valid' => 1, 'msg' => '设置成功']);
	// 	} else {
 //        	return json($res = ['valid' => 0, 'msg' => '设置失败']);
	// 	}
	// }

	public function del(){
		$id = input('get.id');
		$res = db('banner')->where('banner_id', $id)->delete();
		if ($res) {
		 	return json($res = ['valid' => 1, 'msg' => '删除成功']);
		} else {
        	return json($res = ['valid' => 0, 'msg' => '删除失败']);
		}
	}
}