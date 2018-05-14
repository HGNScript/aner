<?php
namespace app\admin\model;

use think\Model;

class Goods extends Model {

	protected $pk = "goods_id";
	protected $table = "goods";

	public function addGoods($data, $id) {
		if ($id) {
			return $this->save($data, ['goods_id' => $id]);
		} else {
			return $this->save($data);
		}
	}

	public function search($data){
		return $this->where("goods_title like '%$data%' OR goods_abstract like '%$data%'")->order('goods_sendtime desc')->select();
	}
}