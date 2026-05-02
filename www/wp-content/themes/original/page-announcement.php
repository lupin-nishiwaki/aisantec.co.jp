<?php get_header(); ?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <li>電子公告</li>
      </ul>
    </div>
  </section>
  <!-- /#path -->

  <!-- #column2 -->
  <div id="column2">
    <div class="wrapper m_box_fixed">
      <div class="column_main page-discroure">
        <!-- #page-title -->
        <section id="page-title">
          <h1>電子公告</h1>
        </section>
        <!-- /#page-title -->

        <!-- #electronic_public-notice -->
        <section id="electronic_public-notice">
          <dl>
            <dt><a href="/asset/doc/ir/announcement/announcement-pdf01.pdf" target="_blank">株券の電子化に伴う特別口座開設公告<span>（291KB）</span></a></dt>
            <dd>株式等の取引に係る決済の合理化を図るための社債等の振替に関する法律等の一部を改正する法律<br>附則第8条第1項</dd>
          </dl>

          <dl>
            <dt><a href="/asset/doc/ir/announcement/announcement-pdf02.pdf" target="_blank">第三者割当による自己株式の処分に関する取締役会決議公告<span>（291KB）</span></a></dt>
            <dd>会社法第201条第3項及び第4項</dd>
          </dl>

          <dl>
            <dt><a href="/asset/doc/ir/announcement/announcement-pdf03.pdf" target="_blank">譲渡制限付株式報酬制度の導入に伴う募集株式の発行に関する取締役会決議公告<span>（291KB）</span></a></dt>
            <dd>会社法第201条第3項及び第4項</dd>
          </dl>

          <div class="adobe">
            <a href="https://get.adobe.com/jp/reader/" target="_blank">
              <picture>
                <img src="/asset/img/ir/announcement/adobe.png" alt="アドビアイコン">
              </picture>
            </a>

            <p>
              PDF形式のファイルをご覧になるためにはAdobe Readerが必要です。<br>
              Adobe Readerをお持ちでない場合は、こちらのアイコンからダウンロードして下さい。
            </p>
          </div>
        </section>
        <!-- /#electronic_public-notice -->
      </div>

      <?php get_template_part('inc/side-ir'); ?>
    </div>
  </div>
  <!-- /#column2 -->

  <!-- #contact -->
 <?php get_template_part('inc/contact'); ?>
  <!-- /#contact -->
</div>

<?php get_footer(); ?>
