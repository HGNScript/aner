<?php
namespace app\admin\model;

use think\Model;

class User extends Model {

	protected $pk = "user_id";
	protected $table = "user";

	// public function addGoods($data, $id) {
	// 	if ($id) {
	// 		return $this->save($data, ['user_id' => $id]);
	// 	} else {
	// 		return $this->save($data);
	// 	}
	// }

	// public function search($data){
	// 	return $this->where("goods_title like '%$data%' OR goods_abstract like '%$data%'")->order('goods_sendtime desc')->select();
	// }
}