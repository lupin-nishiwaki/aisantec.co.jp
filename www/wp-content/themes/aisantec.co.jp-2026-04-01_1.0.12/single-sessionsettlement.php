<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="https://www.aisantec.co.jp/">ホーム</a></li>
        <li><a href="<?php echo esc_url(home_url()); ?>/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">IRライブラリ</a></li>
        <li>会社説明会・決算説明会</li>
      </ul>
    </div>
  </section>
  <!-- /#path -->

  <!-- #column2 -->
  <div id="column2">
    <div class="wrapper m_box_fixed">
      <div class="column_main">

        <section id="page-title" class="js_anim_scroll">
          <p class="parent">IRライブラリ</p>
          <h1>会社説明会・決算説明会</h1>
        </section>

        <section id="sessionsettlement" class="js_anim_scroll">
          <div class="yearController s_yearController">
            <?php
            $args = array(
              'post_type' => 'sessionsettlement',
            );
            ?>
            <?php $the_query = new WP_Query($args); ?>
            <select id="selectbox" name="selectbox" class="select s_eirSelect">
              <?php if ($the_query->have_posts()) : ?>
                <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
                  <?php $slug = get_post_field('post_name'); ?>
                  <option value="/sessionsettlement/<?php echo $slug ?>" <?php if (strstr($_SERVER['REQUEST_URI'], $slug)) {
                                                                                                  echo 'selected';
                                                                                                } ?>><?php the_title(); ?></option>
                <?php endwhile; ?>
              <?php endif; ?>

            </select>
            <?php wp_reset_postdata(); ?>
          </div>


          <h2 class="m_txt_h2"><?php the_title(); ?></h2>
          <div class="contents-container">
            <?php if (have_rows('settlement_contents01')): ?>
              <?php while (have_rows('settlement_contents01')) : the_row(); ?>
                <div class="contents-wrap">
                  <div class="contents">
                    <div class="title-wrap">
                      <h3 class="m_txt_h3">
                        <?php the_sub_field('semester'); ?>
                      </h3>
                        <?php
                          // 1. 現在の行（settlement_contents01の現在のループ回）の子要素を取得
                          $child_rows = get_sub_field('settlement_contents02');

                          // 2. 子要素が存在し、かつ1番目の行にday02があるかチェック
                          if (!empty($child_rows) && !empty($child_rows[0]['day02'])) {
                            $first_day02 = $child_rows[0]['day02'];
                            echo '<p class="time">' . esc_html($first_day02) . '</p>';
                          }
                        ?>
                    </div>
                    <ul>
                      <?php if (have_rows('settlement_contents02')): ?>
                        <?php while (have_rows('settlement_contents02')) : the_row(); ?>

                          <li>
                            <?php
                            $select = get_sub_field('select_s'); //フィールド名が「select」のフィールドを取得
                            if ($select == 'select01'): //値（Value）が「select01」だったら
                            ?>

                              <?php
                              $pdf02 = get_sub_field('pdf02');
                              if ($pdf02) ?>
                              <a href="<?php echo $pdf02['url']; ?>" target="_blank" class="pdf-link">
                                <!-- <p class="time"><?php the_sub_field('day02'); ?></p> -->
                                <div class="text"><?php the_sub_field('text01'); ?><span class="pdf"><span class="tag">PDF</span><span class="kb">(<?php the_sub_field('pdf01'); ?>KB)</span></span></div>
                              </a>


                            <?php elseif ($select == 'select02') : ?>

                              <div href="" target="_blank" class="youtube-link">
                                <!-- <p class="time"><?php the_sub_field('day02'); ?></p> -->
                                <div class="text youtube">
                                  <p><?php the_sub_field('text01'); ?></p>
                                  <div class="youtube-wrap">
                                    <?php the_sub_field('youtube'); ?>
                                  </div>
                                </div>
                              </div>
                            <?php else : ?>
                              <div>
                                <!-- <p class="time"><?php the_sub_field('day02'); ?></p> -->
                                <div class="text"><?php the_sub_field('text01'); ?></div>
                              </div>
                            <?php endif; ?>
                          </li>

                        <?php endwhile; ?>
                      <?php endif; ?>

                    </ul>
                  </div>
                  <!-- /.contents -->
                </div>
              <?php endwhile; ?>
            <?php endif; ?>

          </div>

        </section>



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

<script>

</script>