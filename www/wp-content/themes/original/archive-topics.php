<?php get_header(); ?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <li>トピックス一覧</li>
      </ul>
    </div>
  </section>
  <!-- /#path -->

  <!-- #column2 -->
  <div id="column2">
    <div class="wrapper m_box_fixed">
      <div class="column_main" id="challenge-story-archive">
        <!-- #page-title -->
        <section id="page-title" class="js_anim_scroll">
          <p class="parent">経営情報</p>
          <h1>トピックス一覧</h1>
        </section>
        <!-- /#page-title -->

        <!-- #topics-archive -->
        <section id="topics-archive">
          <div class="newsTypeController s_newsTypeController">
            <ul class="s_eirTab">
              <li class="activeTarget active" data-eir-ctrl="0"><a href="/challenge-topics/#column2">すべて</a></li>
              <li class="activeTarget <?php if (strpos($_SERVER['REQUEST_URI'], 'project') !== false) { ?>active<?php } ?>" data-eir-ctrl="1"><a href="/topics_category/project/#column2">事業・プロジェクト</a></li>
              <li class="activeTarget <?php if (strpos($_SERVER['REQUEST_URI'], 'management') !== false) { ?>active<?php } ?>" data-eir-ctrl="2"><a href="/topics_category/management/#column2">経営・サステナビリティ</a></li>
              <li class="activeTarget <?php if (strpos($_SERVER['REQUEST_URI'], 'news') !== false) { ?>active<?php } ?>" data-eir-ctrl="3"><a href="/topics_category/news/#column2">お知らせ</a></li>
            </ul>
          </div>

          <?php if (have_posts()): ?>
            <div class="container">
              <div class="content">
                <ul class="s__list-flex">
                  <?php while (have_posts()): ?>
                    <?php the_post(); ?>
                    <a href="<?php the_permalink(); ?>" class="frame-container">
                      <div class="frame-child">
                        <?php if (has_post_thumbnail()): ?>
                          <img loading="lazy" class="gradient-icon1" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                        <?php else: ?>
                          <img loading="lazy" class="gradient-icon1" src="<?php echo get_template_directory_uri(); ?>/asset/img/no-image.png" alt="<?php the_title(); ?>">
                        <?php endif; ?>
                      </div>

                      <div class="frame-div">
                        <div class="group">
                          <div class="div4">
                            <?php $terms = get_the_terms(get_the_ID(), 'topics_category'); ?>
                            <?php if (is_array($terms)): ?>
                              <?php foreach ($terms as $term): ?>
                                <p href="<?php echo get_term_link($term); ?>" class="wrapper">
                                  <b class="div3"><?php echo $term->name; ?></b>
                                </p>
                              <?php endforeach; ?>
                            <?php endif; ?>

                            <div class="div6"><?php echo get_post_time('Y.n.j'); ?> </div>
                          </div>

                          <div class="div5"><?php the_title(); ?></div>
                        </div>
                      </div>
                    </a>
                  <?php endwhile; ?>
                </ul>

                <div class="s_list-pagination">
                  <?php if (function_exists('wp_pagenavi')) { wp_pagenavi(); } ?>
                </div>
              </div>
            </div>
            <?php wp_reset_postdata(); ?>
          <?php endif; ?>
        </section>
        <!-- /#topics-archive -->
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