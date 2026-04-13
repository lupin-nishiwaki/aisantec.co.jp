<?php

/**
Template Name: business-model
 ***/
?>

<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="<?php echo esc_url(home_url()); ?>">ホーム</a></li>
        <li><a href="<?php echo esc_url(home_url()); ?>/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">経営情報</a></li>
        <li>事業別収益モデル</li>
      </ul>
    </div>
  </section>
  <!-- /#path -->

  <!-- #column2 -->
  <div id="column2" class="business-model">
    <div class="wrapper m_box_fixed">

        <?php
        remove_filter('the_content', 'wpautop');
        the_content();
        add_filter('the_content', 'wpautop');
        ?>

      <?php get_template_part('template/side-ir'); ?>
    </div>
  </div>
  <!-- /#column2 -->

  <!-- #contact -->
  <?php get_template_part('template/contact'); ?>
  <!-- /#contact -->

</div>

<?php get_footer(); ?>