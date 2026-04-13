<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="<?php echo esc_url(home_url()); ?>">ホーム</a></li>
        <li><a href="<?php echo esc_url(home_url()); ?>/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">経営情報</a></li>
        <li>株主・個人投資家の皆様へ</li>
      </ul>
    </div>
  </section>
  <!-- /#path -->

  <div class="wrapper m_box_fixed" id="page-investors-mv">
    <section id="page-title">
      <h1>株主・個人投資家の皆様へ</h1>
    </section>
  </div>
  <section id="investors-mv" class="">
    <div class="frame-parent">
      <div class="parent">
        <div class="div">「測る」技術で<br class="pc-hide">未来を動かす</div>
        <div class="measuring-technology-drives">Measuring technology drives the future</div>
      </div>
      <ul class="group">
        <li class="div2"><a href="#sec01">アイサンテクノロジーとは</a></li>
        <li class="div2"><a href="#sec03">事業と強み</a></li>
        <li class="div2"><a href="#sec09">数字で語るアイサン</a></li>
        <li class="div2"><a href="#sec10">持続可能な環境への貢献</a></li>
        <li class="div2"><a href="#challenge-story-cal">挑戦と進化のストーリー</a></li>
      </ul>
    </div>
  </section>
  <!-- #column2 -->
  <div id="column2">
    <div class="wrapper m_box_fixed">
      
      <div class="column_main" id="page-investors">
        <!-- #page-title -->

        <?php
        remove_filter('the_content', 'wpautop');
        the_content();
        add_filter('the_content', 'wpautop');
        ?>
      
        <section id="challenge-story-cal" class="js_anim_scroll">
          <div class="frame-parent">
            <div class="parent">
              <div class="div">
                <svg width="92" height="71" viewBox="0 0 92 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.099" d="M46 71L0 0L92 0L46 71Z" fill="#005BAA" />
                </svg>


                <div class="div1">挑戦と進化のストーリー</div>

              </div>
              <div class="div2">社会を支える技術と情熱。<br class="pc-hide">
                その裏側にあるストーリーをご紹介します。</div>
            </div>
            <div class="frame-group">

              <?php
              $args = array(

                'posts_per_page' => 2,        // 取得件数
                'post_type'      => 'challenge-story',
                'orderby'        => 'date',   // 投稿日順
                'order'          => 'DESC',   // 新しい順
              );
              ?>
              <?php $the_query = new WP_Query($args); ?>
              <?php if ($the_query->have_posts()):  while ($the_query->have_posts()):  $the_query->the_post(); ?>


                  <a href="<?php the_permalink(); ?>" class="frame-container">
                    <div class="frame-child">
                      <?php if (has_post_thumbnail()): ?>
                        <img class="gradient-icon1" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                      <?php else: ?>
                        <img class="gradient-icon1" src="<?php echo get_template_directory_uri(); ?>/asset/img/no-image.png" alt="<?php the_title(); ?>">
                      <?php endif; ?>
                    </div>
                    <div class="frame-div">
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


                      <div class="group">
                        <div class="div4">
                          <div class="div5"><?php the_title(); ?></div>
                        </div>
                        <div class="div6"><?php echo get_post_time('Y年n月j日'); ?> </div>
                      </div>
                    </div>
                  </a>



              <?php endwhile;
                wp_reset_postdata();
              endif; ?>
            </div>

            <a class="btn01 js_anim_scroll" href="/challenge-story/"><i></i>すべての記事をよむ</a>
          </div>
        </section>
      </div>


      <?php get_template_part('template/side-ir'); ?>
    </div>
  </div>
  <!-- /#column2 -->

  <!-- #index_menu -->
  <section id="index_menu">
    <div class="m_box_fixed">
      <h2 class="m_txt_h2-icon">
        <img src="/wp-content/themes/aisantec.co.jp/asset/img/ir/menu_h2.svg" alt="IRメニュー">IRメニュー
      </h2>

      <div class="row js_anim_scroll_group">
        <div>
          <div class="inner management">
            <h3>経営情報</h3>
            <ul class="">
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/management/message/">トップメッセージ</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/management/plan/">経営方針</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/management/vision/">中期経営計画</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/management/business/">事業概要</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/management/sustainability/">サステナビリティ</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/management/disclosure/">IR・ディスクロージャーポリシー</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/management/capital-costs-stock-prices/"><small>資本コストや株価を意識した経営</small></a></li><!--  //2024-04-28 更新 -->
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/management/human-management/">人的資本経営</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/management/dx-strategy/">DX戦略</a></li><!--  //2024-04-28 更新 -->
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/management/business-model/">事業別収益モデル</a></li>
            </ul>
          </div>
        </div>

        <div>
          <div class="inner governance">
            <h3>コーポレート・ガバナンス</h3>
            <ul class="">
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/governance/policy/">基本方針・体制</a></li>
              <li><a href="/company/chart/">役員一覧</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/governance/director/">取締役会の構成</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/governance/reward/">役員報酬</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/governance/owned/">政策保有株式</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/governance/management-risk/">リスクマネジメント</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/governance/system/">内部統制システム</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/company/behavioral/">コンプライアンス</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/governance/talk/">株主・投資家との対話</a></li>
            </ul>
          </div>
        </div>

        <div class="investors">
          <div class="inner">
            <h3><a href="<?php echo esc_url(home_url()); ?>/ir/investors/">株主・個人投資家の皆様へ</a></h3>
            <ul class="">
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/investors/#sec01">アイサンテクノロジーとは</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/investors/#sec03">事業と強み</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/investors/#sec09">数字で語るアイサン</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/investors/#sec10">環境に配慮した取り組み</a></li>
            </ul>
          </div>

          <div class="sub-menu">
            <div><a href="<?php echo esc_url(home_url()); ?>/challenge-story/">挑戦と進化のストーリー </a></div>
          </div>
          <div class="sub-menu">
            <div><a href="<?php echo esc_url(home_url()); ?>/topics/">トピックス一覧</a></div>
          </div>
        </div>

        <div>
          <div class="inner library">
            <h3>IRライブラリ</h3>
            <ul>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/library/report-brief/">決算短信・決算説明資料</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/library/report-securities/">有価証券報告書</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/library/sessionsettlement/">会社説明会・決算説明会</a></li>
              <!-- <li><a href="<?php echo esc_url(home_url()); ?>/ir/library/sessioncompany/">会社説明会</a></li> -->
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/library/report/">その他資料</a></li>
            </ul>
          </div>
        </div>

        <div>
          <div class="inner financial">
            <h3>財務ハイライト</h3>
            <ul>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/performance/highligh-linking/">業績ハイライト（連結）</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/performance/segment-single/">業績ハイライト（単体）</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/performance/segment-segment/">セグメント別業績ハイライト</a></li>
            </ul>
          </div>
        </div>

        <div>
          <div class="inner about">
            <h3>株式について</h3>
            <ul>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/stock/memo/">株式メモ</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/stock/meeting/">株主総会</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/stock/return/">株主還元</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/stock/procedure/">株式事務手続き</a></li>
              <li><a href="<?php echo esc_url(home_url()); ?>/ir/stock/status/">株式の状況</a></li>
              <li><a href="https://finance.yahoo.co.jp/quote/4667.T" target="_blank">株価情報</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="sub-menu">
        <div><a href="<?php echo esc_url(home_url()); ?>/ir/calender/">IRカレンダー</a></div>
        <div><a href="<?php echo esc_url(home_url()); ?>/ir/faq/">よくあるご質問</a></div>
        <div><a href="<?php echo esc_url(home_url()); ?>/ir/announcement/">電子公告</a></div>
      </div>
    </div>
  </section>
  <!-- /#index_menu -->
  <!-- #contact -->
  <?php get_template_part('template/contact'); ?>
  <!-- /#contact -->

</div>

<?php get_footer(); ?>