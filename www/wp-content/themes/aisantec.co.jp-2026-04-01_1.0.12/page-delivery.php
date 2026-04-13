<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
       <li><a href="<?php echo esc_url( home_url( ) ); ?>">ホーム</a></li>
        <li><a href="<?php echo esc_url( home_url( ) ); ?>/ir/">IR・投資家情報</a></li>
        <li>IR情報メール配信サービス</li>
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
          <h1>IR情報メール配信サービス</h1>
        </section>
        <!-- /#page-title -->

        <!-- #faq -->
        <section id="faq" class="js_anim_scroll">

          <iframe frameborder="0" scrolling="auto" src="https://aisantec.form.kintoneapp.com/public/00071c97653dac324018fe08bda4d82eb05b18512290a5c0a75d491f02154f73?iframe=true" title="アイサンテクノロジー　IRメール登録" width="100%" height="1024px"></iframe>
        </section>
        <!-- /#faq  -->
      </div>

           <?php get_template_part('template/side-ir'); ?>
    </div>
  </div>
  <!-- /#column2 -->

  <!-- #contact -->
 <?php get_template_part('template/contact'); ?>
  <!-- /#contact -->

</div>

<?php get_footer(); ?>
