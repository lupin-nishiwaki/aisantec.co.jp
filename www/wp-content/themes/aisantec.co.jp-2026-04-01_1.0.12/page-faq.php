<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <li>よくあるご質問</li>
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

          <h1>よくあるご質問</h1>
        </section>
        <!-- /#page-title -->

        <!-- #faq -->
        <section id="faq" class="js_anim_scroll">

          <div class="js_tab">
            <div class="box">
              <ul class="js_tab_btn">
                <!-- <li><a href="">すべて</a></li> -->
                <li class="is-tab"><span>企業情報に関するご質問</span></li>
                <li><span>事業に関するご質問</span></li>
                <li><span>決算・財務に関するご質問</span></li>
                <li><span>株式に関するご質問</span></li>
              </ul>
            </div>


            <div class="js_tab_content">


              <div class="inner is-tab" id="info">

                <?php
                $args = array(
                  'post_type' => 'question',
                );
                ?>
                <?php $the_query = new WP_Query( $args ); ?>


                <?php if( $the_query->have_posts() ): ?>
                <?php while( $the_query->have_posts() ): ?>
                <?php $the_query->the_post(); ?>

                <?php if( have_rows('corporate_question') ): ?>
                <?php while ( have_rows('corporate_question') ) : the_row();
                  ?>
                <dl class="js_accordion">
                  <dt><?php the_sub_field('c_question'); ?></dt>
                  <dd>
                    <?php the_sub_field('c_answer'); ?>

                    <?php if( get_sub_field('link') ): ?>
                    <?php if( strpos(get_sub_field('link'),'https://aisan-corp.com/') === false  ): ?>
                    <br><a href="<?php the_sub_field('link'); ?>" class="link" target="_blank"><?php the_sub_field('link_title'); ?></a>
                    <?php else: ?>
                    <br><a href="<?php the_sub_field('link'); ?>" class="link"><?php the_sub_field('link_title'); ?></a>
                    <?php endif; ?>


                    <?php endif; ?>
                  </dd>
                </dl>

                <?php endwhile; ?>
                <?php endif; ?>


                <?php endwhile; ?>
                <?php endif; ?>
                <?php wp_reset_postdata(); ?>


              </div>


              <div class="inner" id="business">


                <?php
                $args = array(
                  'post_type' => 'question',
                );
                ?>
                <?php $the_query = new WP_Query( $args ); ?>


                <?php if( $the_query->have_posts() ): ?>
                <?php while( $the_query->have_posts() ): ?>
                <?php $the_query->the_post(); ?>

                <?php if( have_rows('business_question') ): ?>
                <?php while ( have_rows('business_question') ) : the_row();
                  ?>
                <dl class="js_accordion">
                  <dt><?php the_sub_field('b_question'); ?></dt>
                  <dd>
                    <?php the_sub_field('b_answer'); ?>
                    <?php if( get_sub_field('link') ): ?>
                    <a href="/ir/<?php the_sub_field('link'); ?>" class="link"><?php the_sub_field('link_title'); ?></a>
                    <?php endif; ?>
                  </dd>
                </dl>

                <?php endwhile; ?>
                <?php endif; ?>


                <?php endwhile; ?>
                <?php endif; ?>
                <?php wp_reset_postdata(); ?>


              </div>


              <div class="inner" id="finance">


                <?php
                $args = array(
                  'post_type' => 'question',
                );
                ?>
                <?php $the_query = new WP_Query( $args ); ?>


                <?php if( $the_query->have_posts() ): ?>
                <?php while( $the_query->have_posts() ): ?>
                <?php $the_query->the_post(); ?>

                <?php if( have_rows('settlement_question') ): ?>
                <?php while ( have_rows('settlement_question') ) : the_row();
                  ?>
                <dl class="js_accordion">
                  <dt><?php the_sub_field('s_question'); ?></dt>
                  <dd><?php the_sub_field('s_answer'); ?>
                    <?php if( get_sub_field('link') ): ?>
                    <a href="/ir/<?php the_sub_field('link'); ?>" class="link"><?php the_sub_field('link_title'); ?></a>
                    <?php endif; ?>
                  </dd>
                </dl>

                <?php endwhile; ?>
                <?php endif; ?>


                <?php endwhile; ?>
                <?php endif; ?>
                <?php wp_reset_postdata(); ?>


              </div>

              <div class="inner" id="stock">


                <?php
                $args = array(
                  'post_type' => 'question',
                );
                ?>
                <?php $the_query = new WP_Query( $args ); ?>


                <?php if( $the_query->have_posts() ): ?>
                <?php while( $the_query->have_posts() ): ?>
                <?php $the_query->the_post(); ?>

                <?php if( have_rows('stock_question') ): ?>
                <?php while ( have_rows('stock_question') ) : the_row();
                  ?>
                <dl class="js_accordion">
                  <dt><?php the_sub_field('t_question'); ?></dt>
                  <dd><?php the_sub_field('t_answer'); ?>
                    <?php if( get_sub_field('link') ): ?>
                    <a href="/ir/<?php the_sub_field('link'); ?>" class="link"><?php the_sub_field('link_title'); ?></a>
                    <?php endif; ?>
                  </dd>
                </dl>

                <?php endwhile; ?>
                <?php endif; ?>


                <?php endwhile; ?>
                <?php endif; ?>
                <?php wp_reset_postdata(); ?>


              </div>

            </div>
          </div>


          <!-- <div class="inner other">


            <dl class="js_accordion">
              <dt>
              </dt>
              <dd>
              </dd>
            </dl>

          </div> -->


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