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
固定ページをクラシックエディタにする
======================================*/
add_filter('use_block_editor_for_post_type', function($use_block_editor, $post_type) {
  if ($post_type === 'page') {
    return false; // 固定ページだけクラシックエディタ
  }
  return $use_block_editor;
}, 10, 2);

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
記事の本文を抜粋
======================================*/
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

/*======================================
コンタクトフォームのショートコード作成
======================================*/
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

function shortcode_ir_investors() {
  ob_start();
  ?>
  <div class="frame-group">
    <?php
    $args = array(
      'posts_per_page' => 2,
      'post_type'      => 'challenge-story',
      'orderby'        => 'date',
      'order'          => 'DESC',
    );

    $the_query = new WP_Query($args);
    ?>

    <?php if ($the_query->have_posts()): ?>
      <?php while ($the_query->have_posts()): $the_query->the_post(); ?>

        <a href="<?php the_permalink(); ?>" class="frame-container">
          <div class="frame-child">
            <?php if (has_post_thumbnail()): ?>
              <img class="gradient-icon1" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title_attribute(); ?>">
            <?php else: ?>
              <img class="gradient-icon1" src="<?php echo get_template_directory_uri(); ?>/asset/img/no-image.png" alt="<?php the_title_attribute(); ?>">
            <?php endif; ?>
          </div>

          <div class="frame-div">
            <?php $terms = get_the_terms(get_the_ID(), 'story_category'); ?>
            <?php if (!empty($terms) && !is_wp_error($terms)): ?>
              <?php foreach ($terms as $term): ?>
                <p class="wrapper">
                  <b class="div3"><?php echo esc_html($term->name); ?></b>
                </p>
              <?php endforeach; ?>
            <?php endif; ?>

            <div class="group">
              <div class="div4">
                <div class="div5"><?php the_title(); ?></div>
              </div>
              <div class="div6"><?php echo get_the_date('Y年n月j日'); ?></div>
            </div>
          </div>
        </a>

      <?php endwhile; ?>
    <?php endif; ?>

    <?php wp_reset_postdata(); ?>
  </div>
  <?php

  return ob_get_clean();
}
add_shortcode('ir_investors', 'shortcode_ir_investors');


/*======================================
コンタクトフォームのショートコード作成
恐らく不要だと思う。。
======================================*/
// function admin_post_type() {
//   global $post_type;
//   $tmp_js_url = get_template_directory_uri() . '/asset/js/';
//   if($post_type === 'page'){
//     wp_enqueue_script(
//       'custom_html',$tmp_js_url . 'app.js',false,false,false
//     );
//   }
// }
// add_action( 'admin_enqueue_scripts', 'admin_post_type', 10, 2 );


/*======================================
ページネーションで勝手にリダイレクトを起こさない為の処理
======================================*/
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