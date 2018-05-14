<?php
namespace app\index\validate;

use think\Validate;

class Comment extends Validate
{
    protected $rule = [
        'user_name'  =>  'require',
        'user_email' =>  'require|email',
        'user_phone'=>'require',
        'user_comment'=>'require',
    ];
    protected $message = [
        'user_name.require'=>'请输入用户名称',
        'user_email.require'=>'请输入邮箱地址',
		'user_email.email'=>'请输入合适的邮箱地址',
		'user_phone.require'=>'请输入联系电话',
        'user_comment.require'=> '请输入留言',
	];

}