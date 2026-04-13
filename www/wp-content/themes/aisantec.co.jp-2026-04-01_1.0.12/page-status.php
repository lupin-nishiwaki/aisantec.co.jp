<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="<?php echo esc_url( home_url( ) ); ?>">ホーム</a></li>
        <li><a href="<?php echo esc_url( home_url( ) ); ?>/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">経営情報</a></li>
        <li>株式の状況</li>
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
          <p class="parent">株式について</p>
          <h1>株式の状況</h1>
        </section>
        <!-- /#page-title -->

        <?php
          $plan04_query = new WP_Query(
            array(
              'post_type'      => 'stock_status', //投稿タイプの指定
              'post_status' => 'publish', // 公開済の投稿を指定
              'posts_per_page' => '1'

              )
            );
            ?>

        <?php if ( $plan04_query->have_posts() ) : ?>
        <?php while ( $plan04_query->have_posts() ) : ?>
        <?php $plan04_query->the_post(); ?>


        <!-- #information_status-->
        <section id="information_status">

          <h2 class="m_txt_h2">
            <?php the_field('head05'); ?>
          </h2>
          <div class="inner">
            <dl>
              <dt>発行可能株式総数</dt>
              <dd><?php echo number_format( get_field('number01') ); ?>株</dd>

              <dt>発行済株式の総数</dt>
              <dd><?php  echo number_format( get_field('number02') ); ?>株(うち自己株式<?php  echo number_format( get_field('number05') ); ?>株)</dd>

              <dt>株主数</dt>
              <dd><?php echo number_format( get_field('number03') ) ; ?>名</dd>

              <dt>資本金</dt>
              <dd><?php echo number_format( get_field('money') ); ?>千円</dd>

              <dt>一単元の株式数</dt>
              <dd><?php the_field('number04') ; ?>株
              </dd>

              <dt>上場証券取引所</dt>
              <dd><?php the_field('stock_exchange') ; ?></dd>

              <dt>証券コード</dt>
              <dd><?php the_field('stock_code') ; ?></dd>
            </dl>
          </div>
          <p class="scroll">※横にスクロールできます。</p>
        </section>
        <!-- /#information_status-->

        <?php endwhile; ?>
        <?php endif; ?>
        <?php wp_reset_postdata(); ?>


        <?php
          $plan04_query = new WP_Query(
            array(
              'post_type'      => 'stock_status', //投稿タイプの指定
              'post_status' => 'publish', // 公開済の投稿を指定
              'posts_per_page' => '1'

              )
            );
            ?>

        <?php if ( $plan04_query->have_posts() ) : ?>
        <?php while ( $plan04_query->have_posts() ) : ?>
        <?php $plan04_query->the_post(); ?>
        <!-- #information_statuscompbig-->
        <section id="information_statuscompbig">

          <h2 class="m_txt_h2"><?php the_field('head06'); ?></h2>
          <div class="table-cover m_box_table">
            <div class="inner">
              <table>
                <thead>
                  <tr>
                    <th class="item01">株主名</th>
                    <th class="item02">持株数(数)</th>
                    <th class="item03">持株比率(%)
                    </th>
                  </tr>
                </thead>


                <tbody>

                  <?php if( have_rows( 'stocks_status' ) ): ?>
                  <?php while( have_rows( 'stocks_status' ) ): ?>
                  <?php the_row(); ?>
                  <tr>
                    <th class="th-wh"><?php the_sub_field('name01') ; ?></th>
                    <td><?php echo number_format( get_sub_field('stockholding01') ); ?></td>
                    <td><?php the_sub_field('ratio01') ; ?>%</td>
                  </tr>
                  <?php endwhile; ?>
                  <?php endif; ?>

                </tbody>

              </table>
              <!-- <p class="note">※持株比率は自己株式（<?php  echo number_format( get_field('number05') ); ?>株）を控除して計算しております。</p> -->
            </div>

            <p class="scroll">※横にスクロールできます。</p>
          </div>

        </section>
        <!-- /#information_statuscompbig-->

        <?php endwhile; ?>
        <?php endif; ?>
        <?php wp_reset_postdata(); ?>


        <?php
          $plan04_query = new WP_Query(
            array(
              'post_type'      => 'stock_status', //投稿タイプの指定
              'post_status' => 'publish', // 公開済の投稿を指定
              'posts_per_page' => '1'

              )
            );
            ?>

        <?php if ( $plan04_query->have_posts() ) : ?>
        <?php while ( $plan04_query->have_posts() ) : ?>
        <?php $plan04_query->the_post(); ?>
        <!-- #information_statuscompare-->
        <section id="information_statuscompare">

          <h2 class="m_txt_h2"><?php the_field('head07'); ?></h2>
          <div class="table-cover m_box_table">
            <div class="inner">
              <table>

                <tbody>

                  <?php if( have_rows( 'composition_ratio' ) ): ?>
                  <?php while( have_rows( 'composition_ratio' ) ): ?>
                  <?php the_row(); ?>
                  <tr>
                    <th class="left"><?php the_sub_field('institution') ; ?></th>
                    <td><?php echo number_format( get_sub_field('composition_ratioA') ); ?>株</td>
                    <td><?php the_sub_field('composition_ratioB') ; ?>%</td>
                  </tr>
                  <?php endwhile; ?>
                  <?php endif; ?>


                </tbody>
              </table>
            </div>

            <p class="scroll">※横にスクロールできます。</p>
          </div>
        </section>
        <!-- /#information_statuscompare-->

        <?php endwhile; ?>
        <?php endif; ?>
        <?php wp_reset_postdata(); ?>

      </div>

      <?php get_template_part('template/side-ir');?>
    </div>
  </div>
  <!-- /#column2 -->

  <!-- #contact -->
  <?php get_template_part('template/contact');?>
  <!-- /#contact -->

</div>

<?php get_footer();?>