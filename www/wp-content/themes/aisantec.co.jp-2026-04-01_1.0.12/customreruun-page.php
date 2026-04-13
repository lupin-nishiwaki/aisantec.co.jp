<?php
/*
Template Name: カスタムir-株主還元
*/
?>


<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">株式について</a></li>
        <li>株主還元</li>
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
          <h1>株主還元</h1>
        </section>
        <!-- /#page-title -->

        <!-- #meeting_policy -->
        <section id="reduction_policy">
          <h2 class="m_txt_h2">
            配当方針
          </h2>

          <p class="lead">株主還元策の基本方針</p>


          <p class="text">当社は、株主の皆様への利益還元を経営における最重要課題として位置づけております。従来は、業績に応じた安定的な配当を基本とし、連結配当性向30％以上を目標としてまいりました。しかし、さらなる株主還元の充実を図る観点から、方針を見直し、累進的な配当方針として、株主資本配当率（DOE）を導入いたしました。今後は、単年度の業績変動の影響を受けにくい株主資本配当率（DOE）を基準に、「株主様に対して、安定的かつ継続的な配当を行うとともに、内部留保の拡充と有効活用によって企業競争力と株主価値を向上させる」ことを基本方針といたします。配当金については、当面の間、株主資本配当率（DOE）３％前後を目標といたします。</p>
        </section>
        <!-- /#reduction_policy -->


        <!-- #reduction_information -->
        <section id="reduction_information">
          <h2 class="m_txt_h2">
            配当情報
          </h2>


          <h3 class="m_txt_h3">配当予想</h3>

          <?php the_content(); ?>


          <h3 class="m_txt_h3 title-margin">配当実績</h3>
          <!-- E-IR Parts -->
          <div class="qir" data-qir-area="area_dividend_012"></div>

          <script type="text/javascript">
          scriptLoader.setSrc('https://ssl4.eir-parts.net/Custom/public/material/v5qir/1.4.0/common.js');
          scriptLoader.load(function() {
            qir.load();
          });
          </script>
          <!-- /E-IR Parts -->


        </section>
        <!-- /#reduction_information -->


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