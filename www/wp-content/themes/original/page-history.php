<?php get_header(); ?>

<div id="page_company">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/company/">企業情報</a></li>
        <li>沿革</li>
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
          <p class="parent">企業情報</p>
          <h1>沿革</h1>
        </section>
        <!-- /#page-title -->

        <?php
          $args = array( 'post_type' => 'sessionsettlement', );
          $the_query = new WP_Query($args);
        ?>
        <?php if ($the_query->have_posts()) : ?>
          <?php while ($the_query->have_posts()) : ?>
            <?php $the_query->the_post(); ?>

            <!-- #history -->
            <section id="history" class="js_anim_scroll">
              <div class="tab-wrap js_tab">
                <ul class="tab js_tab_btn">
                  <li class="is-tab"><span>事業・経営の歩み</span></li>
                  <li><span>製品・技術の歩み</span></li>
                </ul>

                <div class="js_tab_content">
                  <!-- 事業・経営の歩み -->
                  <div class="business is-tab">
                    <div class="table-cover">
                      <p class="scroll">横にスクロールできます。</p>
                      <div class="inner-wrap">
                        <div class="inner">
                          <?php if( have_rows('contents') ): ?>
                            <?php while ( have_rows('contents') ): ?>
                              <?php the_row(); ?>

                              <div>
                                <?php if( have_rows('content') ): ?>
                                  <?php while ( have_rows('content') ): ?>
                                    <?php the_row(); ?>

                                    <dl>
                                      <dt><?php the_sub_field('year'); ?></dt>

                                      <?php if( get_sub_field('image') ): ?>
                                        <dd class="image-wrap">
                                          <span><?php the_sub_field('text'); ?></span>
                                          <picture><img src="<?php the_sub_field('image'); ?>" alt=""></picture>
                                        </dd>

                                      <?php else : ?>
                                        <dd><?php the_sub_field('text'); ?></dd>

                                      <?php endif; ?>
                                    </dl>

                                  <?php endwhile; ?>
                                <?php endif; ?>
                              </div>

                            <?php endwhile; ?>
                          <?php endif; ?>
                        </div>

                        <p class="scroll">横にスクロールできます。</p>
                      </div>
                    </div>
                  </div>
                  <!-- /事業・経営の歩み -->

                  <!-- 製品・技術の歩み -->
                  <div class="product">
                    <div class="table-cover">
                      <p class="scroll">横にスクロールできます。</p>
                      <div class="inner-wrap">
                        <div class="inner">
                          <?php if( have_rows('contents02') ): ?>
                          <?php while ( have_rows('contents02') ): ?>
                            <?php the_row(); ?>

                            <div>
                              <?php if( have_rows('content02') ): ?>
                                <?php while ( have_rows('content02') ): ?>
                                  <?php the_row(); ?>

                                  <dl>
                                    <dt><?php the_sub_field('year02'); ?></dt>

                                    <?php if( get_sub_field('image02') ): ?>
                                      <dd class="image-wrap">
                                        <span><?php the_sub_field('text02'); ?></span>
                                        <picture><img src="<?php the_sub_field('image02'); ?>" alt=""></picture>
                                      </dd>

                                    <?php else : ?>
                                      <dd><?php the_sub_field('text02'); ?></dd>

                                    <?php endif; ?>
                                  </dl>

                                <?php endwhile; ?>
                              <?php endif; ?>
                            </div>

                          <?php endwhile; ?>
                          <?php endif; ?>
                        </div>

                        <p class="scroll">横にスクロールできます。</p>
                      </div>
                    </div>
                  </div>
                  <!-- /製品・技術の歩み -->
                </div>
              </div>
            </section>
            <!-- /#history -->

          <?php endwhile; ?>
        <?php endif; ?>
        <?php wp_reset_postdata(); ?>
      </div>

      <?php get_template_part('inc/side-company'); ?>
    </div>
  </div>
  <!-- /#column2 -->
</div>

<?php get_footer(); ?>