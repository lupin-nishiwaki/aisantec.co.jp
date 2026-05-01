<?php get_header(); ?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">株式について</a></li>
        <li>株式事務手続き</li>
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
          <h1>株式事務手続き</h1>
        </section>
        <!-- /#page-title -->

        <!-- #procedure_policy -->
        <section id="procedure_policy">
          <div class="table-cover m_box_table">
            <div class="inner-wrap">
              <div class="inner">
                <picture>
                  <img src="/asset/img/ir/stock/procedure/procedure-image01.png" alt="株式事務手続きの内容">
                </picture>
              </div>
            </div>
            <p class="scroll">※横にスクロールできます。</p>
          </div>

          <div class="box">
            <p>◯ ご注意</p>
            <ul>
              <li>株主様の住所変更、買取請求その他各種お手続きにつきましては、原則、口座を開設されている口座管理機関(証券会社等)で承ることとなっております。口座を開設されている証券会社等にお問い合わせください。株主名簿管理人(三菱UFJ信託銀行)ではお取り扱いできませんのでご注意ください。</li>
              <li>特別口座に記録された株式に関する各種お手続きにつきましては、三菱UFJ信託銀行が口座管理機関となっておりますので、お問い合わせください。なお、三菱UFJ信託銀行全国各支店似てもお取次ぎいたします。</li>
              <li>未受領の配当金につきましては、三菱UFJ信託銀行本支店でお支払いいたします。</li>
            </ul>
          </div>
        </section>
        <!-- /#procedure_policy -->
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
