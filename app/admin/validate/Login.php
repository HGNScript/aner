<?php
namespace app\admin\validate;

use think\Validate;

class Login extends Validate
{
    protected $rule = [
        'admin_numBer'  =>  'require',
        'admin_password' =>  'require',
        'verification'=>'require|captcha'
    ];
    protected $message = [
		'admin_numBer.require'=>'请输入账号',
		'admin_password.require'=>'请输入密码',
        'verification.require'=> '请输入验证码',
		'verification.captcha'=>'验证码不正确',
	];

}