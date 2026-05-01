<?php get_header(); ?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">お知らせ</a></li>
        <li>IR資料</li>
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
          <h1>IR資料</h1>
        </section>
        <!-- /#page-title -->

        <!-- #information_all -->
        <section id="information_all">
          <div class="information_year">
            <select name="information_year">
              <option value="2022年">2022年</option>
              <option value="2021年">2021年</option>
              <option value="2020年">2020年</option>
              <option value="2019年">2019年</option>
              <option value="2018年">2018年</option>
            </select>
          </div>

          <ul>
            <li class="cur"><a href="">すべて</a></li>
            <li><a href="">決算・適宜開示</a></li>
            <li><a href="">IR資料</a></li>
            <li><a href="">お知らせ</a></li>
          </ul>
        </section>
        <!-- /#information_all -->
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