<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="https://www.aisantec.co.jp/">ホーム</a></li>
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


        <section id="announcesingle">
          <div class="m_cms_wysiwyg">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <?php the_content(); ?>
            <?php endwhile;
            else: endif; ?>
          </div>
        </section>
        <!-- /#announce -->
      </div>
      <!-- /.column_main column_announce -->

      <?php get_template_part('template/side-ir'); ?>
    </div>
  </div>
  <!-- /#column2 -->

  <!-- #contact -->
  <?php get_template_part('template/contact'); ?>
  <!-- /#contact -->

</div>

<?php get_footer(); ?>