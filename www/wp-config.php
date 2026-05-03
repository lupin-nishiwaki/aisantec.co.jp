<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link https://ja.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'aisan_corporate' );

/** MySQL データベースのユーザー名 */
define( 'DB_USER', 'root' );

/** MySQL データベースのパスワード */
define( 'DB_PASSWORD', '' );

/** MySQL のホスト名 */
define( 'DB_HOST', 'localhost' );

/** データベースのテーブルを作成する際のデータベースの文字セット */
define( 'DB_CHARSET', 'utf8mb4' );

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define( 'DB_COLLATE', '' );

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'lKv?/Vz_<:s51!YDD@oMpkpm`ni=I*!lK6oNSYNO;2t;piDjm$J@.57/Jwc lrZ!' );
define( 'SECURE_AUTH_KEY',  '`,mhlKGHE>U!Oe$d<!lpY;kr<d}(k7ylt1wHFAKiu4aBxiz<+kSI*VUgpN^^KOLC' );
define( 'LOGGED_IN_KEY',    'f9IeE~u.zU#@Zk)ie_nZN+w4R2C=:IS;)l!Vmc:z]BFQhGzSL(_rn?3A=yIQzA^V' );
define( 'NONCE_KEY',        'jpb)ck3oM8vkv`62975*PQR/VCUwLDewCoaLHMu!UkMm51u6d:qOE:05TlpdnTex' );
define( 'AUTH_SALT',        '+,Xc3<-K3BLJ$_?v@C~>8* Y,(pi;u4,0&l9P!qA( 2)pRxVmkc/AGm6Af:U_!^L' );
define( 'SECURE_AUTH_SALT', 'zXec$:p#.c?`tuOmL[*Y7Dj.q5]VRH?VGl_8QpLn,oSx],U,bJbs>;~%(irSFh}W' );
define( 'LOGGED_IN_SALT',   'k7`L K8;t8K|>aR]3CWeSc^s2+:,lMtY-;b,oll+x_0r{$.#V}X= [(FFF$w|k=A' );
define( 'NONCE_SALT',       'v<){hkiul=1;gydp&KD4&|B~@^8R|ZwMf/ctPZq4}bnF. 1i[ip7N(d*6]EgB#r:' );

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数についてはドキュメンテーションをご覧ください。
 *
 * @link https://ja.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* カスタム値は、この行と「編集が必要なのはここまでです」の行の間に追加してください。 */

/** 記事のリビジョンの上限を5件までにする */
define( 'WP_POST_REVISIONS', 5 );



/* 編集が必要なのはここまでです ! WordPress でのパブリッシングをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';