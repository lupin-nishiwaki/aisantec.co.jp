<?php get_header(); ?>


<!-- 固定ページコンテンツ記載につき
↓このコードはダッシュボードへ移植前提 -->
<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="https://www.aisantec.co.jp/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">経営情報</a></li>
        <li>経営方針</li>
      </ul>
    </div>
  </section>
  <!-- /#path -->

  <!-- #column2 -->
  <div id="column2">
    <div class="wrapper m_box_fixed">
      <div class="column_main">
        <!-- #page-title -->
        <section id="page-title" class="js_anim_scroll">
          <p class="parent">経営情報</p>
          <h1>経営方針</h1>
        </section>
        <!-- /#page-title -->

        <!-- #plan_motto -->
        <section id="plan_motto" class="js_anim_scroll">
          <h2 class="m_txt_h2">
            社是
          </h2>

          <div class="row">
            <div>
              <img src="/wp-content/themes/aisantec.co.jp/asset/img/ir/management/plan/motto01.png" alt="知恵">
              <h3>知恵</h3>
              <p class="txt">それは無限の資産</p>
            </div>

            <div>
              <img src="/wp-content/themes/aisantec.co.jp/asset/img/ir/management/plan/motto02.png" alt="実行">
              <h3>実行</h3>
              <p class="txt">知恵は実行して実を結ぶ</p>
            </div>

            <div>
              <img src="/wp-content/themes/aisantec.co.jp/asset/img/ir/management/plan/motto03.png" alt="貢献">
              <h3>貢献</h3>
              <p class="txt">実を結んで社会に貢献</p>
            </div>
          </div>
        </section>
        <!-- /#plan_motto -->

        <!-- #plan_philosophy -->
        <section id="plan_philosophy" class="js_anim_scroll">
          <h2 class="m_txt_h2">
            経営理念
          </h2>

          <p class="m_txt_body">
            知恵で地理空間情報のイノベーションを実行し社会資本の豊かな発展に貢献する。
          </p>
        </section>
        <!-- /#plan_philosophy -->

        <!-- #plan_guidelines -->
        <section id="plan_guidelines" class="js_anim_scroll">
          <h2 class="m_txt_h2">
            行動指針
          </h2>

          <div class="row">
            <div>
              <dl>
                <dt>お客様</dt>
                <dd>顧客満足度の追求</dd>
              </dl>
            </div>

            <div>
              <dl>
                <dt>社員</dt>
                <dd>豊かな創造力と自主性の発揮</dd>
              </dl>
            </div>

            <div>
              <dl>
                <dt>株主</dt>
                <dd>バランス経営による安定した利益還元</dd>
              </dl>
            </div>

            <div>
              <dl>
                <dt>地域社会</dt>
                <dd>事業と雇用創出及び納税</dd>
              </dl>
            </div>
          </div>
        </section>
        <!-- /#plan_guidelines -->

      </div>

      [xyz-ips snippet="ir-sidebar"]
      <!--?php get_template_part('template/side-ir'); ?-->
    </div>
  </div>
  <!-- /#column2 -->

  <!-- #contact -->
  [contact-form]
  <!--?php get_template_part('template/contact'); ?-->
  <!-- /#contact -->

</div>
<!-- 移植必要部ここまで -->

<?php get_footer(); ?>