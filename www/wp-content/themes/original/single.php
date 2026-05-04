<?php get_header(); ?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><?php the_title(); ?></li>
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
          <h1><?php the_title(); ?></h1>
        </section>
        <!-- /#page-title -->

        <!-- #announcesingle -->
        <section id="announcesingle">
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
      <!-- /.column_main column_announce -->

      <?php get_template_part('inc/side-ir'); ?>
    </div>
  </div>
  <!-- /#column2 -->

  <!-- #contact -->
  <?php get_template_part('inc/contact'); ?>
  <!-- /#contact -->
</div>

<?php get_footer(); ?>