<?php get_header(); ?>

<div id="page_ir">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="https://www.aisantec.co.jp/">ホーム</a></li>
        <li><a href="<?php echo esc_url( home_url( ) ); ?>/ir/">IR・投資家情報</a></li>
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
        <!-- #page-title -->
        <section id="page-title" class="js_anim_scroll">
          <p class="parent">IRライブラリ</p>
          <h1>会社説明会・決算説明会</h1>
        </section>
        <!-- /#page-title -->

        <!-- #sessionsettlement -->

        <section id="sessionsettlement" class="js_anim_scroll">

          <div class="yearController">
            <select id="selectbox" name="selectbox">
              <option value="">2022年3月期</option>
              <option value="https://test.aisan-corp.com/ir/library/sessionsettlement/">2023年3月期</option>

            </select>
          </div>

          <div class="contents-container">

            <div class="contents-wrap">

              <h2 class="m_txt_h2">
                2022年3月期              </h2>
              <div class="contents">
                <div class="title-wrap">
                  <h3>期末決算</h3>
                  <time></time>
                </div>
                <ul>

                  <li>

                    <a href="https://test.aisan-corp.com/wp-content/uploads/2022/05/220524開催　2022年3月期決算説明会_プレゼンテーション資料2-1.pdf" target="_blank" class="pdf-link">
                      <p class="time">2022.05.24</p>
                      <div class="text">プレゼンテーション資料<span class="pdf"><span class="tag">PDF</span><span class="kb">(9,035KB)</span></span></div>
                    </a>


                  </li>


                  <li>

                    <div href="" target="_blank" class="youtube-link">
                      <p class="time">2022.05.24</p>
                      <div class="text youtube">
                        <p>アーカイブ映像</p>
                        <div class="youtube-wrap">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/NdnWOvqORAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>


                  <li>

                    <a href="https://test.aisan-corp.com/wp-content/uploads/2022/05/20223月期決算説明会　質疑録.pdf" target="_blank" class="pdf-link">
                      <p class="time">2022.05.24</p>
                      <div class="text">質疑応答資料<span class="pdf"><span class="tag">PDF</span><span class="kb">(249KB)</span></span></div>
                    </a>


                  </li>


                </ul>
              </div>
              <!-- /.contents -->
            </div>
            <!-- /.contents-wrap -->


          </div>
          <!-- /.contents-contaier -->

        </section>

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