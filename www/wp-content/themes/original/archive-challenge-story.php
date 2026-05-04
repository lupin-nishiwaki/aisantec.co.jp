<?php get_header(); ?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <li>挑戦と進化のストーリー </li>
      </ul>
    </div>
  </section>
  <!-- /#path -->

  <!-- #column2 -->
  <div id="column2">
    <div class="wrapper m_box_fixed">
      <div class="column_main" id="challenge-story-archive">
        <!-- #challenge-story-mv -->
        <section id="challenge-story-mv">
          <div class="frame-parent ">
            <div class="m_box_fixed ">
              <div class="parent">
                <h1 class="div">挑戦と進化のストーリー</h1>
                <div class="measuring-technology-drives">A story of challenge and evolution</div>
              </div>

              <img class="gradient-icon1" src="/asset/img/ir/challenge-story.webp" alt="挑戦と進化のストーリー">
            </div>
          </div>
        </section>
        <!-- /#challenge-story-mv -->

        <!-- #challenge-story-srchive -->
        <section id="challenge-story-srchive">
          <div class="newsTypeController s_newsTypeController">
            <ul class="s_eirTab">
              <li class="activeTarget active" data-eir-ctrl="0"><a href="/challenge-story/#column2">すべて</a></li>
              <li class="activeTarget" data-eir-ctrl="1"><a href="/story_category/category_interview/#column2">インタビュー</a></li>
              <li class="activeTarget" data-eir-ctrl="2"><a href="/story_category/project/#column2">事業・プロジェクト</a></li>
              <li class="activeTarget" data-eir-ctrl="3"><a href="/story_category/development/#column2">技術開発・研究</a></li>
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
                            <?php $terms = get_the_terms(get_the_ID(), 'story_category'); ?>
                            <?php if (is_array($terms)): ?>
                              <?php foreach ($terms as $term): ?>
                                <p href="<?php echo get_term_link($term); ?>" class="wrapper">
                                  <b class="div3">
                                    <?php echo $term->name; ?>
                                  </b>
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
        <!-- /#challenge-story-srchive -->
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