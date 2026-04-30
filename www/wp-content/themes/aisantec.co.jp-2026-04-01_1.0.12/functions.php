<?php

/*======================================
  アップデートの非表示
======================================*/
// 本体の更新通知を非表示
// add_filter( 'pre_site_transient_update_core', '__return_null' );
// // プラグインの更新通知を非表示
// add_filter( 'pre_site_transient_update_plugins', '__return_null' );
// // テーマの更新通知を非表示
// add_filter( 'pre_site_transient_update_themes', '__return_null' );
// //自動更新を無効にする
// add_filter( 'automatic_updater_disabled', '__return_true' );

/*======================================
  コンテンツ幅
======================================*/

// 必要な場合記述する
// if ( !isset( $content_width ) ) {
// $content_width = 776;
// }

/*======================================
初期設定
タイトル・アイキャッチ画像・CSS・JSを読み込む
======================================*/

function my_theme_setup() {
/*
Titleタグ
----------------------------------- */
add_theme_support('title-tag');
/*
アイキャッチ画像
----------------------------------- */
add_theme_support( 'post-thumbnails' );


}
add_action( 'after_setup_theme', 'my_theme_setup');

/*======================================
スタイルの追加・スクリプトの追加
======================================*/
function my_theme_scripts() {
/*
CSS
----------------------------------- */
// ('分かりやすいハンドル名','読み込みたいcssファイルまでのパス')
// wp_enqueue_style('google-font','https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Outfit:wght@400;700&display=swap');
// wp_enqueue_style('otehr-font','https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp.min.css');
// wp_enqueue_style('my-theme-styleA',get_theme_file_uri() .'/asset/css/admin-style.css');
// wp_enqueue_style('my-theme-styleB',get_theme_file_uri() .'/asset/css/editor-style.css');
// wp_enqueue_style('my-theme-styleC',get_theme_file_uri() .'/asset/css/layout.css');
// wp_enqueue_style('my-theme-styleD',get_theme_file_uri() .'/asset/css/setting.css');
// wp_enqueue_style('my-theme-styleE',get_theme_file_uri() .'/asset/css/style.css');


/*
JS
----------------------------------- */
// ('分かりやすいハンドル名','読み込みたいjsファイルまでのパス')
// wp_enqueue_script( 'my_theme-loader','https://www.gstatic.com/charts/loader.js');
// wp_enqueue_script( 'my_theme-script', get_theme_file_uri() .'/asset/js/app.js',['jquery'], '3.3.1', true );
// wp_enqueue_script( 'my_theme-vender', get_theme_file_uri() .'/asset/js/vender.js' );


}
add_action( 'wp_enqueue_scripts', 'my_theme_scripts' );




// アーカイブページの出力
// function post_has_archive( $args, $post_type ) {

// if ( 'post' == $post_type ) {
// $args['rewrite'] = true;
// $args['has_archive'] = 'buy'; //任意のスラッグ名
// }
// return $args;

// }
// add_filter( 'register_post_type_args', 'post_has_archive', 10, 2 );

// * ----------------------------------------
// * 記事の本文を抜粋
function text_excerpt( $content, $length ){
  $length = ( $length ? $length : 65 );                                           // デフォルトの長さを指定する
  $content = preg_replace( '/<!--more-->.+/is', '', $content );                   // moreタグ以降削除
  $content = strip_shortcodes( $content );                                        // ショートコード削除
  $content = strip_tags( $content );                                              // タグの除去
  $content = str_replace( array('\r\n', '\r', '\n', '&nbsp;'), '', $content );    // スペース・改行を削除
  $content = html_entity_decode( $content, ENT_QUOTES, 'UTF-8' );                 // 特殊文字をデコード
  if( mb_strlen( $content, 'UTF-8' ) > $length ) {
    $content = mb_substr( $content, 0, $length ). '...';                          // 文字列を指定した長さで切り取る
  }else{
    $content = mb_substr( $content, 0, $length );                                 // 文字列を指定した長さで切り取る
  }
  return $content;
}



function shortcode_contactForm(){
  $msg = '

<section id="contact">
  <div class="m_box_fixed">
    <h2>IR・投資家情報に関するお問い合わせ</h2>
    <p class="btn">
      <a href="https://aisantec.form.kintoneapp.com/public/a7449fb50979bebb1da3c12f01ad4a421bb463ec920490722544ff8f79e9a7b9" target="_blank">お問い合わせフォームへ</a>
      </p>
  </div>
</section>

  ';
	return $msg;
}
add_shortcode('contact-form', 'shortcode_contactForm');


function admin_post_type() {
    global $post_type;
    $tmp_js_url = get_template_directory_uri() . '/asset/js/';
    if($post_type === 'page'){
        wp_enqueue_script(
          'custom_html',$tmp_js_url . 'app.js',false,false,false
        );
      }
  }
  add_action( 'admin_enqueue_scripts', 'admin_post_type', 10, 2 );




    // ページネーションで勝手にリダイレクトを起こさない為の処理
    add_filter('redirect_canonical','my_disable_redirect_canonical');
    function my_disable_redirect_canonical( $redirect_url ) {
        if ( is_archive() ){
            $subject = $redirect_url;
            $pattern = '/\/page\//'; // URLに「/page/」があるかチェック
            preg_match($pattern, $subject, $matches);

            if ($matches){
            //リクエストURLに「/page/」があれば、リダイレクトしない。
            $redirect_url = false;
            return $redirect_url;
            }
        }
    }

?>