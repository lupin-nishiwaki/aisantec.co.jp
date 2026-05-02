<?php get_header(); ?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <!-- <li><a class="nolink">お知らせ</a></li> -->
        <li>ニュース一覧</li>
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
          <p class="parent">経営方針</p>
          <h1>ニュース一覧</h1>
        </section>
        <!-- /#page-title -->

        <!-- E-IR Parts -->
        <div class="eir" data-area-name="area_news_002"></div>
        <script>
          scriptLoader.setSrc(eirPassCore + 'eir_common.js');
          scriptLoader.load(
          function() {
            setParts('file_news_002');
          }, showMaintenanceMessage);
        </script>
        <!-- /E-IR Parts -->
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