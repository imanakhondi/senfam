<?php

require_once __DIR__ . '/Helper/MessageHelper.php';

return [
    'user_not_found' => 'نام کاربری یا کلمه عبور اشتباه است.',
    'email_not_found' => 'کاربری با این پست الکترونیک یافت نشد.',
    'username_required' => $requiredMessage('نام کاربری'),
    'username_min' => $minStringMessage('نام کاربری', 6),
    'username_max' => $maxStringMessage('نام کاربری', 50),
    'username_unique' => 'این نام کاربری قبلا ثبت نام کرده است.',
    'email_required' => $requiredMessage('پست الکترونیک'),
    'email_min' => $minStringMessage('پست الکترونیک', 5),
    'email_max' => $maxStringMessage('پست الکترونیک', 50),
    'email_unique' => 'این پست الکترونیک قبلا ثبت‌نام کرده است.',
    'password_required' => $requiredMessage('کلمه عبور'),
    'password_min' => $minStringMessage('کلمه عبور', 6),
    'password_max' => $maxStringMessage('کلمه عبور', 50),
    'password_confirmed' => 'کلمه عبور با تاییدیه اش مطابقت نمی کند.',
    'new_password_required' => $requiredMessage('کلمه عبور'),
    'new_password_min' => $minStringMessage('کلمه عبور', 6),
    'new_password_max' => $maxStringMessage('کلمه عبور', 50),
    'new_password_confirmed' => 'کلمه عبور با تاییدیه اش مطابقت نمی کند.',
    'password_error' => 'کلمه عبور اشتباه است.',
    'name_required' => $requiredMessage('نام'),
    'name_min' => $minStringMessage('نام', 2),
    'name_max' => $maxStringMessage('نام', 50),
    'family_required' => $requiredMessage('نام خانوادگی'),
    'family_min' => $minStringMessage('نام خانوادگی', 2),
    'family_max' => $maxStringMessage('نام خانوادگی', 50),
    'name_family_max' => $maxStringMessage('نام / نام خانوادگی', 50),
    'national_no_required' => $requiredMessage('شماره ملی'),
    'national_no_digits' => $digitsMessage('شماره ملی',11),
    'national_no_max_digits' => $maxDigitsMessage('شماره ملی', 10),
    'not_authorized' => 'شما مجوز ورود به این قسمت را ندارید.',
    'name' => 'کاربر',
    'mobile_required' => $requiredMessage('شماره همراه'),
    'mobile_digits' => $digitsMessage('شماره همراه', 11),
];
