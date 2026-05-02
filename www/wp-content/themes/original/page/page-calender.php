<?php get_header(); ?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <li>IRカレンダー</li>
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
          <h1>IRカレンダー</h1>
        </section>
        <!-- /#page-title -->

        <?php
          $args = array( 'post_type' => 'calendar01', );
          $the_query = new WP_Query($args);
        ?>
        <?php if ( $the_query->have_posts() ) : ?>
          <?php while ( $the_query->have_posts() ) : ?>
            <?php $the_query->the_post(); ?>

              <!-- #calendar -->
              <section id="calendar" class="js_anim_scroll">
                <div class="table-cover m_box_table">
                  <div class="inner-wrap">
                    <div class="inner">
                      <picture>
                        <img src="<?php the_field('image') ; ?>">
                      </picture>
                    </div>
                  </div>
                  <p class="scroll">※横にスクロールできます。</p>
                </div>
              </section>
              <!-- /#calendar -->

              <!-- #calendar-schedule-this -->
              <section id="calendar-schedule-this" class="js_anim_scroll">
                <h2 class="m_txt_h2">
                  <?php the_field('head') ; ?>
                </h2>

                <div class="table-cover m_box_table">
                  <p>※将来の日程は予定となりますので変更することもございます。予めご了承願います。</p>

                  <div class="inner-wrap">
                    <div class="inner">
                      <dl>
                        <?php if( have_rows('calendar01') ): ?>
                          <?php while ( have_rows('calendar01') ) : the_row(); ?>

                          <dt><?php the_sub_field('calendar_day01'); ?></dt>
                          <dd><?php the_sub_field('calendar_content01'); ?></dd>

                          <?php endwhile; ?>
                        <?php endif; ?>
                      </dl>
                    </div>
                  </div>

                  <p class="scroll">※横にスクロールできます。</p>
                </div>
              </section>
              <!-- /#calendar-schedule-this -->

              <!-- #calendar-schedule -->
              <section id="calendar-schedule" class="js_anim_scroll">
                <h2 class="m_txt_h2">
                  過去のスケジュール
                </h2>

                <?php if( have_rows('calendar_old') ): ?>
                  <?php while ( have_rows('calendar_old') ) : the_row(); ?>
                    <h3 class="m_txt_h3"><?php the_sub_field('head03') ; ?></h3>

                    <div class="table-cover m_box_table">
                      <div class="inner-wrap">
                        <div class="inner">
                          <dl>
                            <?php if( have_rows('calendar02') ): ?>
                              <?php while ( have_rows('calendar02') ) : the_row(); ?>
                                <dt><?php the_sub_field('calendar_day02'); ?></dt>
                                <dd><?php the_sub_field('calendar_content02'); ?></dd>
                              <?php endwhile; ?>
                            <?php endif; ?>
                          </dl>
                        </div>
                      </div>

                      <p class="scroll">※横にスクロールできます。</p>
                    </div>
                  <?php endwhile; ?>
                <?php endif; ?>
              </section>
              <!-- /#calendar-schedule -->

            <?php endwhile; ?>
          <?php endif; ?>
          <?php wp_reset_postdata(); ?>
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