<?php
namespace app\admin\validate;

use think\Validate;

class Goods extends Validate
{
    protected $rule = [
        'goods_title'  =>  'require',
        'goods_abstract' =>  'require',
        'goods_src'=>'require'
    ];
    protected $message = [
		'goods_title.require'=>'请输入商品名称',
		'goods_abstract.require'=>'请输入商品简介',
        'goods_src.require'=> '请上传商品缩略图',
	];

}