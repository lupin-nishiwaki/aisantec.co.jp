<?php
/**
 * Template Name: IR・投資家情報_株式について_株主総会
 */

get_header();
?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">株式について</a></li>
        <li>株主総会</li>
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
          <h1>株主総会</h1>
        </section>
        <!-- /#page-title -->

        <?php
          $plan04_query = new WP_Query(
            array(
              'post_type'      => 'stock-report', //投稿タイプの指定
              'post_status' => 'publish', // 公開済の投稿を指定
              'posts_per_page' => '1',
              )
            );
            ?>
        <?php if ( $plan04_query->have_posts() ) : ?>
          <?php while ( $plan04_query->have_posts() ) : ?>
            <?php $plan04_query->the_post(); ?>

            <!-- #meeting_stocksingle -->
            <section id="meeting_stocksingle">
              <h2 class="m_txt_h2"><?php the_field('head01'); ?></h2>
              <time> <?php the_field('day'); ?></time>
              <div class="content m_cms_wysiwyg"><?php the_content('content'); ?></div>
              <p class="signature">アイサンテクノロジー株式会社</p>
            </section>
            <!-- /#meeting_stocksingle -->

            <!-- #meeting_overview -->
            <section id="meeting_overview">
              <h2 class="m_txt_h2"><?php the_field('head05'); ?></h2>
              <div class="inner">
                <dl>
                  <?php if( have_rows('overview') ): ?>
                    <?php while ( have_rows('overview') ): ?>
                      <?php the_row(); ?>
                      <dt><?php the_sub_field('overview_menu'); ?></dt>
                      <dd><?php the_sub_field('overview_content'); ?></dd>
                    <?php endwhile; ?>
                  <?php endif; ?>
                </dl>
              </div>
              <p class="scroll">※横にスクロールできます。</p>
            </section>
            <!-- /#meeting_overview -->

            <!-- #meeting_stocksingle02 -->
            <section id="meeting_stocksingle02">
              <h2 class="m_txt_h2"><?php the_field('head02'); ?></h2>

              <ul class="m_list_dot">
                <?php if( have_rows('report') ): ?>
                  <?php while ( have_rows('report') ): ?>
                    <?php the_row(); ?>
                    <?php if(get_sub_field('report_01')): ?>
                      <li><?php the_sub_field('report_01'); ?></li>
                    <?php endif; ?>
                  <?php endwhile; ?>
                <?php endif; ?>
              </ul>

            </section>
            <!-- /#meeting_stocksingle02 -->

            <!-- #meeting_stocksingle03 -->
            <section id="meeting_stocksingle03">
              <h2 class="m_txt_h2"><?php the_field('head03'); ?></h2>

              <?php if( have_rows('resolution') ): ?>
                <?php while ( have_rows('resolution') ): ?>
                  <?php the_row(); ?>
                  <?php if(get_sub_field('resolution_head01')): ?>
                    <dl>
                      <dt><?php the_sub_field('resolution_head01'); ?></dt>
                      <dd><?php the_sub_field('resolution_content01'); ?></dd>
                    </dl>
                  <?php endif; ?>
                <?php endwhile; ?>
              <?php endif; ?>
            </section>
            <!-- /#meeting_stocksingle03 -->

            <!-- #meeting_stocksingle04 -->
            <section id="meeting_stocksingle04">
              <h2 class="m_txt_h2"><?php the_field('head04'); ?></h2>

              <div class="iframe-wrapper">
                <?php echo $embed_code = wp_oembed_get( get_field('youtube_url') ); ?>
              </div>
            </section>
            <!-- /#meeting_stocksingle04 -->

          <?php endwhile; ?>
        <?php endif; ?>
        <?php wp_reset_postdata(); ?>

        <!-- #meeting_stocksingle05 -->
        <section id="meeting_stocksingle05">
          <h2 class="m_txt_h2">株主向け報告書</h2>

          <!-- E-IR Parts -->
          <p class="text">過年度の資料は下記ボタンより事業年度を選択ください。</p>
          <div class="eir" data-area-name="area_meeting_011"></div>
          <script>
          scriptLoader.setSrc(eirPassCore + 'eir_common.js');
          scriptLoader.load(
            function() {
              setParts('file_ir_material_011');
            }, showMaintenanceMessage);
          </script>
          <!-- /E-IR Parts -->
        </section>
        <!-- /#meeting_stocksingle05 -->
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