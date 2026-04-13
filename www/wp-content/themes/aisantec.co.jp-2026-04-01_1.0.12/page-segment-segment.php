<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="<?php echo esc_url( home_url( ) ); ?>">ホーム</a></li>
        <li><a href="<?php echo esc_url( home_url( ) ); ?>/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">財務ハイライト</a></li>
        <li>セグメント別業績ハイライト</li>
      </ul>
    </div>
  </section>
  <!-- /#path -->

  <!-- #column2 -->
  <div id="column2">
    <div class="wrapper m_box_fixed">

      <!-- <div class="column_main page-discroure">

        <section id="page-title">
          <p class="parent">財務ハイライト</p>
          <h1>セグメント別業績ハイライト</h1>
        </section>


      </div> -->

      <!-- E-IR Parts -->
      <div class="column_main page-discroure">
        <!-- #page-title -->
        <section id="page-title">
          <p class="parent">財務ハイライト</p>
          <h1>セグメント別業績ハイライト（公共セグメント）</h1>
        </section>
        <!-- /#page-title -->

        <div class="qir" data-qir-area="area_highlight_010"></div>

        <section id="page-title">
          <h1>セグメント別業績ハイライト（モビリティ・DXセグメント）</h1>
        </section>
        <div class="qir" data-qir-area="area_highlight_013"></div>

        <script type="text/javascript">
        scriptLoader.setSrc('https://ssl4.eir-parts.net/Custom/public/material/v5qir/1.4.0/common.js');
        scriptLoader.load(function() {
          qir.load();
        });
        </script>

      </div>
      <!-- /E-IR Parts -->

      <?php get_template_part('template/side-ir'); ?>
    </div>
  </div>
  <!-- /#column2 -->

  <!-- #contact -->
 <?php get_template_part('template/contact'); ?>
  <!-- /#contact -->

</div>

<?php get_footer(); ?>
