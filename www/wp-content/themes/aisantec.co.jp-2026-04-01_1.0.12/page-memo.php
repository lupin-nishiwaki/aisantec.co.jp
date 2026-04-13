<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="<?php echo esc_url( home_url( ) ); ?>">ホーム</a></li>
        <li><a href="<?php echo esc_url( home_url( ) ); ?>/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">株式について</a></li>
        <li>株式メモ</li>
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
          <p class="parent">株式について</p>
          <h1>株式メモ</h1>
        </section>
        <!-- /#page-title -->

        <!-- #information_stockholder -->
        <section id="information_stockholder">


          <div class="inner">
            <dl>
              <dt>上場証券取引所</dt>
              <dd>東京証券取引所　スタンダード市場</dd>
              <dt>事業年度</dt>
              <dd>4月1日~翌年3月31日</dd>
              <dt>定時株主総会 </dt>
              <dd>毎年6月</dd>
              <dt>期末配当金受領株主<br>確定日 </dt>
              <dd>3月31日</dd>
              <dt>中間配当金受領株主<br>確定日 </dt>
              <dd>9月30日（中間配当を実施する場合）</dd>
              <dt>公告の方法 </dt>
              <dd>電子公告により行います。ただし、電子公告によることができない事故、その他のやむを得ない事由が生じたときは、日本経済新聞に公告いたします。
                <a href="/publicnotice">電子公告</a>
              </dd>
              <dt>株主名簿管理人<br>特別口座管理機関</dt>
              <dd>三菱UFJ信託銀行株式会社</dd>
              <dt>同連絡先</dt>
              <dd>三菱UFJ信託銀行株式会社 証券代行部<br>
                東京都府中市日鋼町1-1<br>
                (郵送先)<br>
                〒137-8081 新東京郵便局私書箱第29号<br>
                TEL: 0120-232-711（通話料無料）<br></dd>
            </dl>
          </div>
          <p class="scroll">※横にスクロールできます。</p>
        </section>
        <!-- /#information_stockholder -->


      </div>

      <?php get_template_part('template/side-ir'); ?>
    </div>
  </div>
  <!-- /#column2 -->

  <!-- #contact -->
 <?php get_template_part('template/contact'); ?>
  <!-- /#contact -->

</div>

<?php get_footer(); ?>
