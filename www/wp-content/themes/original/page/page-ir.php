<?php
/**
 * Template Name: IR・投資家情報
 */

get_header();
?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li>IR・投資家情報</li>
      </ul>
    </div>
  </section>
  <!-- /#path -->

  <!-- #page-title -->
  <section id="page-title">
    <div class="m_box_fixed">
      <h1>IR・投資家情報</h1>
    </div>
  </section>
  <!-- /#page-title -->

  <!-- #index_main-img -->
  <section id="index_main-img">
    <div class="wrapper">
      <img class="logo --01" src="/asset/img/ir/main-img-logo.svg" alt="">
      <img class="logo --02" src="/asset/img/ir/main-img-logo.svg" alt="">
      <img class="logo --03" src="/asset/img/ir/main-img-logo.svg" alt="">
      <img class="logo --04" src="/asset/img/ir/main-img-logo.svg" alt="">
      <img class="logo --05" src="/asset/img/ir/main-img-logo.svg" alt="">
      <img class="logo --06" src="/asset/img/ir/main-img-logo.svg" alt="">
      <img class="logo --07" src="/asset/img/ir/main-img-logo.svg" alt="">
      <img class="logo --08" src="/asset/img/ir/main-img-logo.svg" alt="">
      <img class="text-01 --01 active" src="/asset/img/ir/main-img-text-01.svg" alt="">
      <img class="text-01 --01-02 active" src="/asset/img/ir/main-img-text-01.svg" alt="">
      <img class="text-01 --02" src="/asset/img/ir/main-img-text-01.svg" alt="">
      <img class="text-01 --03" src="/asset/img/ir/main-img-text-01.svg" alt="">
      <img class="text-01 --04" src="/asset/img/ir/main-img-text-01.svg" alt="">
      <img class="text-02 --01" src="/asset/img/ir/main-img-text-02.svg" alt="">
      <img class="text-02 --02" src="/asset/img/ir/main-img-text-02.svg" alt="">
      <img class="text-02 --03" src="/asset/img/ir/main-img-text-02.svg" alt="">
      <img class="text-02 --04" src="/asset/img/ir/main-img-text-02.svg" alt="">
    </div>
  </section>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const images = document.querySelectorAll(".wrapper img:not(.text-01)");

      // 直近で操作した要素を記録
      const cooldown = new Map(); // img要素 → 最後に変化させた時刻

      function toggleRandomImage() {
        const now = Date.now();

        // 3秒以内に操作した要素は候補から除外
        const candidates = Array.from(images).filter(img => {
          return !cooldown.has(img) || now - cooldown.get(img) > 3000;
        });

        if (candidates.length === 0) return; // 全部クールタイム中なら何もしない

        // ランダムに1つ選択
        const randomIndex = Math.floor(Math.random() * candidates.length);
        const img = candidates[randomIndex];

        // クラス切り替え
        if (img.classList.contains("active")) {
          img.classList.remove("active");
          img.classList.add("hide");
        } else {
          img.classList.remove("hide");
          img.classList.add("active");
        }

        // 操作時刻を記録
        cooldown.set(img, now);
      }

      // 2〜4秒ごとにランダム切り替え
      setInterval(toggleRandomImage, 600 + Math.random() * 300);
    });
  </script>
  <!-- /#index_main-img -->

  <?php
    $args = array(
      'post_type' => 'sessionsettlement',
      'p' => 332
    );
    $the_query = new WP_Query($args);
  ?>
  <?php if ($the_query->have_posts()): ?>
    <?php while ($the_query->have_posts()): ?>
      <?php $the_query->the_post(); ?>

      <?php if (have_rows('important_a') || have_rows('important_b')): ?>
        <!-- #index_essential -->
        <section id="index_essential">
          <div class="slide js_slide_essential">
            <?php if (have_rows('important_a')): ?>
              <?php while (have_rows('important_a')): ?>
                <?php the_row(); ?>

                <div class="item" style="background: #b63a68;">
                  <div class="wrap m_box_fixed">
                    <h3><?php the_sub_field('heading'); ?></h3>

                    <?php if (get_sub_field('link')): ?>
                      <?php if (strpos(get_sub_field('link'), 'https://aisan-corp.com/') === false): ?>
                        <a href="<?php the_sub_field('link'); ?>" target="_blank">
                      <?php else: ?>
                        <a href="<?php the_sub_field('link'); ?>">
                      <?php endif; ?>

                    <?php else: ?>
                      <span>
                    <?php endif; ?>

                      <p class="day"><?php the_sub_field('day'); ?></p>
                      <p class="ttl pc"><?php echo text_excerpt(get_sub_field('title'), 50); ?></p>
                      <p class="ttl sp"><?php echo text_excerpt(get_sub_field('title'), 20); ?></p>
                      <p class="ttl tb"><?php echo text_excerpt(get_sub_field('title'), 30); ?></p>

                    <?php if (get_sub_field('link')): ?>
                      </a>

                    <?php else: ?>
                      </span>
                    <?php endif; ?>
                  </div>
                </div>

              <?php endwhile; ?>
            <?php endif; ?>

            <?php if (have_rows('important_b')): ?>
              <?php while (have_rows('important_b')): ?>
                <?php the_row(); ?>

                <div class="item" style="background: #005bac;">
                  <div class="wrap m_box_fixed">
                    <h3><?php the_sub_field('heading'); ?></h3>

                    <?php if (get_sub_field('link')): ?>
                      <?php if (strpos(get_sub_field('link'), 'https://aisan-corp.com/') === false): ?>
                        <a href="<?php the_sub_field('link'); ?>" target="_blank">
                      <?php else: ?>
                        <a href="<?php the_sub_field('link'); ?>">
                      <?php endif; ?>

                    <?php else: ?>
                      <span>
                    <?php endif; ?>

                      <p class="day"><?php the_sub_field('day'); ?></p>
                      <p class="ttl pc"><?php echo text_excerpt(get_sub_field('title'), 50); ?></p>
                      <p class="ttl sp"><?php echo text_excerpt(get_sub_field('title'), 20); ?></p>
                      <p class="ttl tb"><?php echo text_excerpt(get_sub_field('title'), 30); ?></p>

                    <?php if (get_sub_field('link')): ?>
                      </a>
                    <?php else: ?>
                      </span>
                    <?php endif; ?>
                  </div>
                </div>

              <?php endwhile; ?>
            <?php endif; ?>
          </div>
        </section>
        <!-- /#index_essential -->
      <?php endif; ?>

    <?php endwhile; ?>
    <?php wp_reset_postdata(); ?>
  <?php endif; ?>

  <!-- #page-title02 -->
  <section id="page-title02">
    <div class="m_box_fixed">
      <h2 class="catch">未来の社会インフラを<br class="pc-hide">創造する</h2>

      <div class="txt">
        <p>街、都市、国土。</p>

        <p>
          人々が生活するうえで欠かすことのできない社会インフラ。<br class="sp-hide">
          それらの整備は「測る」ことから始まります。
        </p>

        <p>
          アイサンテクノロジーは、時代の最先端システムを融合した<br class="sp-hide">
          ソリューションテクノロジーのアップデートをもって「測る」を支え、<br class="sp-hide">
          未来の社会インフラの創造に貢献します。
        </p>
      </div>

      <p class="m_btn_main wh btn">
        <a href="/ir/management/business/">アイサンテクノロジーの事業を知る</a>
      </p>
    </div>
  </section>
  <!-- /#page-title02 -->

  <!-- #index_pickup -->
  <section id="index_pickup">
    <div class="m_box_fixed">
      <h2 class="m_txt_h2-icon js_anim_scroll">
        <img src="/asset/img/ir/pickup_h2.svg" alt="ピックアップ">ピックアップ
      </h2>

      <div class="row js_anim_scroll_group">
        <div>
          <a href="<?php echo esc_url(home_url('/ir/management/message/')); ?>" class="message">
            <p class="link-txt">トップメッセージ</p>
          </a>
        </div>

        <div>
          <a href="<?php echo esc_url(home_url('/ir/investors/')); ?>" class="investors">
            <p class="link-txt">株主・個人投資家の皆様へ </p>
          </a>
        </div>

        <div>
          <a href="<?php echo esc_url(home_url('/ir/management/plan/')); ?>" class="plan">
            <p class="link-txt">経営方針</p>
          </a>
        </div>

        <div>
          <a href="<?php echo esc_url(home_url('/ir/management/vision/')); ?>" class="vision">
            <p class="link-txt">中期経営計画</p>
          </a>
        </div>

        <div class="">
          <a href="<?php echo esc_url(home_url('/ir/management/sustainability/')); ?>" class="sustainability">
            <p class="link-txt">サステナビリティ</p>
          </a>
        </div>

        <div class="">
          <a href="<?php echo esc_url(home_url('/challenge-story')); ?>" class="challenge-story">
            <p class="link-txt">挑戦と進化のストーリー </p>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- /#index_pickup -->

  <!-- #index_news -->
  <section id="index_news" class="js_anim_scroll">
    <div class="m_box_fixed">
      <div class="newsbox_01">
        <h2 class="m_txt_h2-icon">
          <img src="/asset/img/ir/news_h2.svg" alt="IRニュース">IRニュース
        </h2>

        <a href="/ir/information/" class="link-type01 sp-hide">
          IRニュースの一覧へ
        </a>

        <!-- E-IR Parts -->
        <div class="eir" data-area-name="area_top_001"></div>
        <script>
          scriptLoader.setSrc(eirPassCore + 'eir_common.js');
          scriptLoader.load(
            function() {
              setParts('file_irlibrary_015');
            }, showMaintenanceMessage);
        </script>
        <!-- /E-IR Parts -->
      </div>

      <div class="newsbox_02">
        <!-- E-IR Parts -->
        <div class="w50 document">
          <div class="wrap">
            <div class="inner">
              <h3>
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24.3867" cy="24.3848" r="24.3867" fill="#005BAC" />
                  <path d="M16.2072 25.9106C15.954 25.9106 15.75 25.7053 15.75 25.4533C15.75 25.2014 15.954 24.9961 16.2072 24.9961H27.0085C27.2605 24.9961 27.4658 25.2001 27.4658 25.4533C27.4658 25.7066 27.2605 25.9106 27.0085 25.9106H16.2072Z" fill="white" />
                  <path d="M16.2072 21.4975C15.954 21.4975 15.75 21.2935 15.75 21.0403C15.75 20.787 15.954 20.583 16.2072 20.583H27.0085C27.2605 20.583 27.4658 20.7883 27.4658 21.0403C27.4658 21.2922 27.2605 21.4975 27.0085 21.4975H16.2072Z" fill="white" />
                  <path d="M16.2072 30.0317C15.954 30.0317 15.75 29.8264 15.75 29.5744C15.75 29.3225 15.954 29.1172 16.2072 29.1172H27.0085C27.2605 29.1172 27.4658 29.3225 27.4658 29.5744C27.4658 29.8264 27.2605 30.0317 27.0085 30.0317H16.2072Z" fill="white" />
                  <path d="M21.4729 17.3735C21.2209 17.3735 21.0156 17.1682 21.0156 16.9162C21.0156 16.6643 21.2209 16.459 21.4729 16.459H27.0082C27.2601 16.459 27.4654 16.6643 27.4654 16.9162C27.4654 17.1682 27.2601 17.3735 27.0082 17.3735H21.4729Z" fill="white" />
                  <path d="M32.1455 11.0293L36.9555 11.8152C37.2585 11.8645 37.513 12.0401 37.6795 12.2821C37.8378 12.5144 37.9154 12.8095 37.8722 13.1137C36.6849 21.4823 35.0982 30.4119 34.236 38.7482L34.2273 38.7914C34.1715 39.073 34.0198 39.3127 33.8132 39.4757C33.5896 39.6514 33.3015 39.739 33.0038 39.6967C27.808 38.9383 22.5556 37.9893 17.3637 37.1402H12.0464C11.7373 37.1402 11.4584 37.0069 11.2578 36.792C11.0652 36.5845 10.9453 36.3016 10.9453 35.9938V16.8959L10.9466 16.8946V16.8711L10.9479 16.865V16.8589L10.9492 16.8528V16.8493L10.9505 16.8467V16.8406L10.9519 16.8379V16.834L10.9532 16.8292V16.8266L10.9545 16.8227L10.9558 16.8166V16.8153L10.9571 16.8118L10.9584 16.8057V16.8044L10.9597 16.7996L10.961 16.7948V16.7935L10.9623 16.7887L10.9636 16.7826H10.9627L10.9654 16.7778L10.9667 16.7717H10.9662L10.9675 16.7669L10.9702 16.7621V16.7608L10.9715 16.756L10.9741 16.7512V16.7499L10.9767 16.7451L10.978 16.7416L10.9806 16.7342L10.9819 16.7303L10.9832 16.729L10.9858 16.7229L10.9872 16.7203L10.9885 16.7176L10.9911 16.7128L10.9924 16.7102L10.9959 16.7015L10.9972 16.7002L10.9985 16.6963L11.0011 16.6915L11.0024 16.6902L11.005 16.6863L11.0076 16.6815V16.6802L11.0103 16.6767L11.0142 16.6719V16.6706L11.0168 16.6671L11.0203 16.6623L11.0229 16.6575L11.0268 16.6527L11.0294 16.6479L11.0329 16.644L11.0368 16.6392L11.0395 16.6357V16.6344L11.043 16.6296L11.0456 16.627L11.0469 16.6257L11.0504 16.6209L11.053 16.6183L11.0543 16.6169L11.0582 16.6122L11.0608 16.6095L11.0621 16.6069L11.0661 16.603L11.0674 16.6004L11.07 16.5991L11.0735 16.5943L11.0761 16.593L11.0787 16.5904L11.0822 16.5869L11.0835 16.5856L11.0861 16.5821L11.0896 16.5782L11.0909 16.5768L11.0948 16.5742L18.0476 9.10793C18.1318 9.00419 18.2591 8.9375 18.4033 8.9375H31.0458C31.3535 8.9375 31.6325 9.07219 31.833 9.28708C32.0257 9.49326 32.1455 9.77658 32.1455 10.0852V11.0293ZM22.9379 37.1411C26.3356 37.7082 29.7386 38.2753 33.135 38.7931C33.1747 38.7979 33.2152 38.7844 33.2488 38.7587C33.2871 38.7277 33.3181 38.6807 33.3303 38.6253C34.4993 30.0789 35.7569 21.5311 36.9691 12.9895C36.9791 12.918 36.9616 12.8487 36.9259 12.7968C36.8963 12.7537 36.8544 12.7227 36.8086 12.7153L32.1455 11.9543V35.9952C32.1455 36.3029 32.0257 36.5858 31.833 36.7933C31.6329 37.0082 31.3535 37.1415 31.0458 37.1415H22.9379V37.1411ZM11.8598 17.3641V35.9943C11.8598 36.0649 11.886 36.1277 11.9252 36.1708C11.9574 36.2053 12.0006 36.2266 12.0464 36.2266H31.0458C31.0902 36.2266 31.1334 36.2057 31.1657 36.1708C31.2053 36.1277 31.231 36.0645 31.231 35.9943V10.0852C31.231 10.0146 31.2062 9.95181 31.1657 9.90866C31.1334 9.87422 31.0902 9.85286 31.0458 9.85286H18.8606V16.9068C18.8606 17.1601 18.6553 17.3641 18.4033 17.3641H11.8598ZM17.9461 10.5551L12.4526 16.45H17.9461V10.5551Z" fill="white" />
                </svg>
                最新決算資料ダウンロード
              </h3>

              <ul>
                <li><div class="eir" data-area-name="area_irlibraryhub_015"></div></li>
                <li><div class="eir" data-area-name="area_irlibraryhub_016"></div></li>
                <li><div class="eir" data-area-name="area_irlibraryhub_017"></div></li>
              </ul>

              <p class="m_btn_main btn">
                <a class="eirAttrTarget_zipDownloadUrl">
                  一括ダウンロード（ZIP）<small>（<span class="eirTarget_zipDownloadSize"></span>KB）</small>
                </a>
              </p>

              <a href="/ir/library/report-brief/" class="link-type01">
                決算短信・決算説明資料へ
              </a>
            </div>
          </div>

          <p class="m_btn_main wh btn">
            <a href="/ir/calender/">IRカレンダーへ</a>
          </p>
        </div>
        <!-- /E-IR Parts -->
      </div>
    </div>
  </section>
  <!-- /#index_news -->

  <!-- #topics -->
  <section id="topics">
    <div class="m_box_fixed">
      <div class="topics_inner">
        <h2 class="m_txt_h2-icon js_anim_scroll">
          <img src="/asset/img/ir/topics_h2.svg" alt="IRニュース">トピックス
        </h2>

        <a href="/topics" class="link-type01 sp-hide">
          トピックス一覧へ
        </a>

        <div class="link-parent js_anim_scroll_group">
          <?php
          $args2 = array(
            'post_type'      => 'topics',
            'posts_per_page' => 3,
            'orderby'        => 'date',
            'order'          => 'DESC',
          );
          $the_query2 = new WP_Query($args2);
          ?>
          <?php if ($the_query2->have_posts()): ?>
            <?php while ($the_query2->have_posts()): ?>
              <?php $the_query2->the_post(); ?>

              <a href="<?php the_permalink(); ?>" class="link">
                <?php if (has_post_thumbnail()): ?>
                  <img class="gradient-icon1" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                <?php else: ?>
                  <img class="gradient-icon1" src="<?php echo get_template_directory_uri(); ?>/asset/img/no-image.png" alt="<?php the_title(); ?>">
                <?php endif; ?>

                <div class="frame-container">
                  <div class="background-parent">
                    <div class="time-202508081"><?php echo get_post_time('Y.n.j'); ?></div>
                    <?php $terms = get_the_terms(get_the_ID(), 'topics_category'); ?>
                    <?php if (is_array($terms)): ?>
                      <?php foreach ($terms as $term): ?>
                        <p href="<?php echo get_term_link($term); ?>" class="background1">
                          <b class="b3"><?php echo $term->name; ?></b>
                        </p>
                      <?php endforeach; ?>
                    <?php endif; ?>
                  </div>

                  <div class="wrapper">
                    <div class="div2"><?php the_title(); ?></div>
                  </div>
                </div>
              </a>

            <?php endwhile; ?>
          <?php endif; ?>
          <?php wp_reset_postdata(); ?>
        </div>
      </div>
    </div>
  </section>
  <!-- /#topics -->

  <!-- #investors -->
  <section id="investors">
    <div class="rectangle-parent">
      <div class="frame-child"></div>

      <div class="frame-wrapper">
        <div class="frame-parent">
          <div class="heading-2-parent js_anim_scroll_group">
            <div class="heading-2">
              <b class="b">株主・個人投資家の皆様へ</b>
              <b class="b1">私たちの事業と未来</b>
            </div>

            <div class="div">
              <p class="p">私たちアイサンテクノロジーは、測量・空間情報技術のパイオニアとして、公共・モビリティの2つの領域で社会課題に挑み続けています。</p>
              <p class="p">持続可能な未来の都市・移動インフラの構築に、技術と情熱で挑み続けます。</p>
            </div>
          </div>

          <div class="group-parent js_anim_scroll_group">
            <div class="frame-group">
              <a href="/ir/investors/#sec01" class="vector-parent">
                <svg class="vector-icon" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.601562L4.57778 4.18712L1 7.77267" stroke="white" stroke-width="1.08889" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>
                <b class="b2">アイサンテクノロジーとは</b>
              </a>

              <a href="/ir/investors/#sec03" class="vector-group">
                <svg class="vector-icon" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.601562L4.57778 4.18712L1 7.77267" stroke="white" stroke-width="1.08889" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>
                <b class="b2">事業と強み</b>
              </a>

              <a href="/ir/investors/#sec09" class="vector-container">
                <svg class="vector-icon" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.601562L4.57778 4.18712L1 7.77267" stroke="white" stroke-width="1.08889" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>
                <b class="b2">数字で語るアイサン</b>
              </a>

              <a href="/ir/investors/#sec10" class="frame-div">
                <svg class="vector-icon" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.601562L4.57778 4.18712L1 7.77267" stroke="white" stroke-width="1.08889" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>
                <b class="b2">環境に配慮した取り組み</b>
              </a>
            </div>

            <a href="/ir/investors" class="link">
              <div class="union-parent">
                <b class="b6">株主・個人投資家の皆様へ</b>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /#investors -->

  <!-- #challenge-story -->
  <section id="challenge-story">
    <div class="section-parent">
      <div class="section">
        <div class="frame-parent">
          <div class="heading-2-parent">
            <div class="heading-2">
              <b class="b">挑戦と進化のストーリー </b>
            </div>
          </div>

          <div class="div js_anim_scroll_group">社会を支える技術と情熱。その裏側にあるストーリーをご紹介します。</div>
        </div>

        <div class="section-list-parent js_anim_scroll_group">
          <div class="section-list">
            <?php
            // 先頭用（固定フラグがある最新1件）
            $args1 = array(
              'post_type'      => 'challenge-story',
              'posts_per_page' => 1,
              'meta_query'     => array(
                array(
                  'key'     => 'pin_to_top',
                  'value'   => '1',
                  'compare' => '='
                )
              ),
              'orderby' => 'date',
              'order'   => 'DESC',
            );
            $the_query = new WP_Query($args1);

            // ピン付き記事が無ければ通常の最新記事を取得
            if (!$the_query->have_posts()) {
              $args1_fallback = array(
                'post_type'      => 'challenge-story',
                'posts_per_page' => 1,
                'orderby'        => 'date',
                'order'          => 'DESC',
              );
              $the_query = new WP_Query($args1_fallback);
            }
            ?>

            <?php if ($the_query->have_posts()): ?>
              <?php while ($the_query->have_posts()): ?>
                <?php $the_query->the_post(); ?>

                <a href="<?php the_permalink(); ?>" class="gradient-parent">
                  <?php if (has_post_thumbnail()): ?>
                    <img class="gradient-icon" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                  <?php else: ?>
                    <img class="gradient-icon" src="<?php echo get_template_directory_uri(); ?>/asset/img/no-image.png" alt="<?php the_title(); ?>">
                  <?php endif; ?>

                  <div class="gradient"></div>
                </a>

                <div class="frame-group">
                  <div class="background-parent">
                    <?php $terms = get_the_terms(get_the_ID(), 'story_category'); ?>
                    <?php if (is_array($terms)): ?>
                      <?php foreach ($terms as $term): ?>
                        <a href="<?php echo get_term_link($term); ?>" class="background">
                          <b class="b2"><?php echo $term->name; ?></b>
                        </a>
                      <?php endforeach; ?>
                    <?php endif; ?>
                    <div class="time-20250808"><?php echo get_post_time('Y.n.j'); ?></div>
                  </div>

                  <div class="div1"><?php the_title(); ?></div>
                </div>
              <?php endwhile; ?>
            <?php endif; ?>
            <?php wp_reset_postdata(); ?>
          </div>

          <div class="link-parent">
            <?php
            // 除外する記事IDを取得
            $exclude_ids = $the_query->have_posts() ? wp_list_pluck($the_query->posts, 'ID') : array();

            // 残り3件（先頭記事を除いた最新3件）
            $args2 = array(
              'post_type'      => 'challenge-story',
              'posts_per_page' => 3,
              'post__not_in'   => $exclude_ids,
              'orderby'        => 'date',
              'order'          => 'DESC',
            );
            $the_query2 = new WP_Query($args2);
            ?>

            <?php if ($the_query2->have_posts()): ?>
              <?php while ($the_query2->have_posts()): ?>
                <?php $the_query2->the_post(); ?>

                <a href="<?php the_permalink(); ?>" class="link">
                  <?php if (has_post_thumbnail()): ?>
                    <img class="gradient-icon1" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                  <?php else: ?>
                    <img class="gradient-icon1" src="<?php echo get_template_directory_uri(); ?>/asset/img/no-image.png" alt="<?php the_title(); ?>">
                  <?php endif; ?>

                  <div class="frame-container">
                    <div class="background-parent">
                      <?php $terms = get_the_terms(get_the_ID(), 'story_category'); ?>
                      <?php if (is_array($terms)): ?>
                        <?php foreach ($terms as $term): ?>
                          <p href="<?php echo get_term_link($term); ?>" class="background1">
                            <b class="b3"><?php echo $term->name; ?></b>
                          </p>
                        <?php endforeach; ?>
                      <?php endif; ?>

                      <div class="time-202508081"><?php echo get_post_time('Y.n.j'); ?></div>
                    </div>

                    <div class="wrapper">
                      <div class="div2"><?php the_title(); ?></div>
                    </div>
                  </div>
                </a>

              <?php endwhile; ?>
            <?php endif; ?>
            <?php wp_reset_postdata(); ?>

            <p class="m_btn_main wh btn">
              <a href="/challenge-story/">
                すべての記事をよむ
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /#challenge-story -->

  <!-- #index_menu -->
  <section id="index_menu">
    <div class="m_box_fixed">
      <h2 class="m_txt_h2-icon">
        <img src="/asset/img/ir/menu_h2.svg" alt="IRメニュー">IRメニュー
      </h2>

      <div class="row js_anim_scroll_group">
        <div>
          <div class="inner management">
            <h3>経営情報</h3>
            <ul class="">
              <li><a href="/ir/management/message/">トップメッセージ</a></li>
              <li><a href="/ir/management/plan/">経営方針</a></li>
              <li><a href="/ir/management/vision/">中期経営計画</a></li>
              <li><a href="/ir/management/business/">事業概要</a></li>
              <li><a href="/ir/management/sustainability/">サステナビリティ</a></li>
              <li><a href="/ir/management/disclosure/">IR・ディスクロージャーポリシー</a></li>
              <li><a href="/ir/management/capital-costs-stock-prices/"><small>資本コストや株価を意識した経営</small></a></li><!--  //2024-04-28 更新 -->
              <li><a href="/ir/management/human-management/">人的資本経営</a></li>
              <li><a href="/ir/management/dx-strategy/">DX戦略</a></li><!--  //2024-04-28 更新 -->
              <li><a href="/ir/management/business-model/">事業別収益モデル</a></li>
            </ul>
          </div>
        </div>

        <div>
          <div class="inner governance">
            <h3>コーポレート・ガバナンス</h3>
            <ul class="">
              <li><a href="/ir/governance/policy/">基本方針・体制</a></li>
              <li><a href="/company/chart/">役員一覧</a></li>
              <li><a href="/ir/governance/director/">取締役会の構成</a></li>
              <li><a href="/ir/governance/reward/">役員報酬</a></li>
              <li><a href="/ir/governance/owned/">政策保有株式</a></li>
              <li><a href="/ir/governance/management-risk/">リスクマネジメント</a></li>
              <li><a href="/ir/governance/system/">内部統制システム</a></li>
              <li><a href="/company/behavioral/">コンプライアンス</a></li>
              <li><a href="/ir/governance/talk/">株主・投資家との対話</a></li>
            </ul>
          </div>
        </div>

        <div class="investors">
          <div class="inner">
            <h3><a href="/ir/investors/">株主・個人投資家の皆様へ</a></h3>
            <ul class="">
              <li><a href="/ir/investors/#sec01">アイサンテクノロジーとは</a></li>
              <li><a href="/ir/investors/#sec03">事業と強み</a></li>
              <li><a href="/ir/investors/#sec09">数字で語るアイサン</a></li>
              <li><a href="/ir/investors/#sec10">環境に配慮した取り組み</a></li>
            </ul>
          </div>

          <div class="sub-menu">
            <div><a href="/challenge-story/">挑戦と進化のストーリー </a></div>
          </div>

          <div class="sub-menu">
            <div><a href="/topics/">トピックス一覧</a></div>
          </div>
        </div>

        <div>
          <div class="inner library">
            <h3>IRライブラリ</h3>
            <ul>
              <li><a href="/ir/library/report-brief/">決算短信・決算説明資料</a></li>
              <li><a href="/ir/library/report-securities/">有価証券報告書</a></li>
              <li><a href="/ir/library/sessionsettlement/">会社説明会・決算説明会</a></li>
              <li><a href="/ir/library/report/">その他資料</a></li>
            </ul>
          </div>
        </div>

        <div>
          <div class="inner financial">
            <h3>財務ハイライト</h3>
            <ul>
              <li><a href="/ir/performance/highligh-linking/">業績ハイライト（連結）</a></li>
              <li><a href="/ir/performance/segment-single/">業績ハイライト（単体）</a></li>
              <li><a href="/ir/performance/segment-segment/">セグメント別業績ハイライト</a></li>
            </ul>
          </div>
        </div>

        <div>
          <div class="inner about">
            <h3>株式について</h3>
            <ul>
              <li><a href="/ir/stock/memo/">株式メモ</a></li>
              <li><a href="/ir/stock/meeting/">株主総会</a></li>
              <li><a href="/ir/stock/return/">株主還元</a></li>
              <li><a href="/ir/stock/procedure/">株式事務手続き</a></li>
              <li><a href="/ir/stock/status/">株式の状況</a></li>
              <li><a href="https://finance.yahoo.co.jp/quote/4667.T" target="_blank">株価情報</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="sub-menu">
        <div><a href="/ir/calender/">IRカレンダー</a></div>
        <div><a href="/ir/faq/">よくあるご質問</a></div>
        <div><a href="/ir/announcement/">電子公告</a></div>
      </div>
    </div>
  </section>
  <!-- /#index_menu -->

  <?php get_template_part('inc/contact'); ?>
</div>

<?php get_footer(); ?>