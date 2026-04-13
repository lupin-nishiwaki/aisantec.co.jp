<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="https://www.aisantec.co.jp/">ホーム</a></li>
        <li><a href="<?php echo esc_url( home_url( ) ); ?>/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">IRライブラリ</a></li>
        <li>会社説明会</li>
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
          <p class="parent">IRライブラリ</p>
          <h1>会社説明会</h1>
        </section>
        <!-- /#page-title -->

        <!-- #sessionsettlement -->
        <?php
        $args = array(
          'post_type' => 'session',
         );
         ?>
        <?php $the_query = new WP_Query( $args ); ?>
        <?php if( $the_query->have_posts() ): ?>
        <?php while( $the_query->have_posts() ): ?>
        <?php $the_query->the_post(); ?>

        <section id="sessioncompany" class="js_anim_scroll">

          <div class="yearController">
            <select>
              <option value="">2022年3月期</option>
            </select>
          </div>

          <div class="contents-container">

            <?php if( have_rows('settlement_contents03') ): ?>
            <?php while ( have_rows('settlement_contents03') ) : the_row();?>
            <div class="contents-wrap">

              <h2 class="m_txt_h2">
                <?php the_sub_field( 'heading02' ); ?>
              </h2>
              <div class="contents">
                <div class="title-wrap">
                  <h3><?php the_sub_field( 'semester02' ); ?></h3>
                  <time><?php the_sub_field( 'day03' ); ?></time>
                </div>
                <ul>
                  <?php if( have_rows('settlement_contents04') ): ?>
                  <?php while ( have_rows('settlement_contents04') ) : the_row();?>

                  <li>
                    <?php
                  $select = get_sub_field('select_c'); //フィールド名が「select」のフィールドを取得
                  if( $select == 'select01' ): //値（Value）が「select01」だったら
                  ?>

                    <?php
                     $pdf02 = get_sub_field('pdf04');
                     if ($pdf04) ?>
                    <a href="<?php echo $pdf04['url']; ?>" target="_blank" class="pdf-link">
                      <p class="time"><?php the_sub_field( 'day04' ); ?></p>
                      <div class="text"><?php the_sub_field( 'text02' ); ?><span class="pdf"><span class="tag">PDF</span><span class="kb">(<?php the_sub_field( 'pdf03' ); ?>KB)</span></span></div>
                    </a>


                    <?php elseif( $select == 'select02') : ?>

                    <div href="" target="_blank" class="youtube-link">
                      <p class="time"><?php the_sub_field( 'day04' ); ?></p>
                      <div class="text youtube">
                        <p><?php the_sub_field( 'text02' ); ?></p>
                        <div class="youtube-wrap">
                          <?php the_sub_field( 'youtube02' ); ?>
                        </div>
                      </div>
                    </div>
                    <?php else : ?>
                    <div>
                      <p class="time"><?php the_sub_field( 'day04' ); ?></p>
                      <div class="text"><?php the_sub_field( 'text02' ); ?></div>
                    </div>
                    <?php endif; ?>
                  </li>

                  <?php endwhile; ?>
                  <?php endif; ?>

                </ul>
              </div>
              <!-- /.contents -->
            </div>
            <!-- /.contents-wrap -->
            <?php endwhile; ?>
            <?php endif; ?>


          </div>
          <!-- /.contents-contaier -->

        </section>
        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>
        <?php endif; ?>


        <!-- /#sessionsettlement -->

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