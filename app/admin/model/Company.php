<?php
namespace app\admin\model;

use think\Model;

class Company extends Model {

	protected $pk = "company_id";
	protected $table = "company";

	public function editInfo($data, $id){
		if ($id) {
			$edit = $this->save($data, ['company_id' => $id]);
			if ($edit) {
				return $res = ['valid' => 1, 'msg' => '更新成功'];
			} else {
				return $res = ['valid' => 0, 'msg' => '更新失败'];
			}
		} else {
			$add = $this->save($data);
			if ($add) {
				return $res = ['valid' => 1, 'msg' => '更新成功'];
			} else {
				return $res = ['valid' => 0, 'msg' => '更新失败'];
			}
		}
	}
}