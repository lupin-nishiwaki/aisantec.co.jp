<?php get_header(); ?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/ir">ホーム</a></li>
        <li><a href="/topics/">トピックス</a></li>
        <li><?php the_title(); ?></li>
      </ul>
    </div>
  </section>
  <!-- /#path -->

  <!-- #column2 -->
  <div id="column2">
    <div class="wrapper m_box_fixed">
      <div class="column_main" id="challenge-story-single">
        <!-- #page-title -->
        <section id="page-title">
          <p class="parent">トピックス</p>
          <h1><?php the_title(); ?></h1>
          <p><?php echo get_post_time('Y年n月j日'); ?></p>
        </section>
        <!-- /#page-title -->

        <!-- #announcesingle -->
        <section id="announcesingle" class="js_anim_scroll--">
          <div class="m_cms_wysiwyg">
            <?php if (have_posts()) : ?>
              <?php while (have_posts()) : ?>
                <?php the_post(); ?>
                <?php the_content(); ?>
              <?php endwhile; ?>
            <?php endif; ?>
          </div>
        </section>
        <!-- /#announcesingle -->
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