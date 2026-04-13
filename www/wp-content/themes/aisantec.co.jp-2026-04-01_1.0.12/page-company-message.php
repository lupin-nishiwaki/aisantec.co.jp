<?php get_header(); ?>

<div id="page_company">

  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="<?php echo esc_url( home_url( ) ); ?>">ホーム</a></li>
        <li><a href="<?php echo esc_url( home_url( ) ); ?>/company/">企業情報</a></li>
        <li>トップメッセージ</li>
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
          <p class="parent">企業情報</p>
          <h1>トップメッセージ</h1>
        </section>
        <!-- /#page-title -->

        <!-- #message -->
        <section id="message" class="js_anim_scroll">
          <picture class="president">
            <img src="/wp-content/themes/aisantec.co.jp/asset/img/company/message/message01.jpg" alt="代表取締役社長 加藤淳">
          </picture>

          <div class="message m_txt_body">
            <p>
             アイサングループは、本日から第53期の事業年度に臨んでまいります。<br>
             昨年度は、一昨年から拡大を続けておりました新型コロナウイルス感染が、秋口から落ち着きを見せ始めようやく鎮静化に向かうと期待されました。<br>
             しかし、本年早々オミクロン株の出現によって、それが打ち砕かれる格好となり、いささか厭戦気分も漂う状況が記憶に新しいところです。<br>
             １年延期された東京2020オリンピック・パラリンピックの開催は、賛否両論が存在しながらも、日本の持つあらゆるリソースをフル活用しながら何とか成功に導けたことは、一人の国民として誇りに思っております。<br>
             一方、市場の状況といたしましては、建設関連産業におけるＤＸが進展すると共に、自動運転の社会実装への期待は更なる高まりをみせております。<br>
             <br>
             しかし、世界的な半導体不足の影響は他人事とはいえず、時間の経過と共に当社グループのビジネスに遅延を与え始めており、そのコントロールに腐心した次第です。<br>
             そのような状況の中、第52期は「Investment & Innovation」のスローガンを掲げた中期経営計画の初年度にあたり、特に人財確保と教育、そして新機軸となる商流創出に努力しました結果、及第点に近い業績と判断しております。<br>
             第53期におきましても、中期経営計画２事業年度目の業績達成とアイサングループのミッション実現に向け「知恵・実行・貢献」の社是の下、より強固な引き続き変わらぬONE TEAMで挑んでいきます。<br>
             ステークホルダーの皆様におかれましては、本年度も変わらぬアイサングループへの応援のほど、宜しくお願いいたします。
            </p>
          </div>

          <dl>
            <dt>2022年4月1日</dt>
            <dd>代表取締役社長<img class="katou" src="/wp-content/themes/aisantec.co.jp/asset/img/ir/management/message/katou.svg" alt="加藤 淳"></dd>
          </dl>
        </section>
        <!-- /#message -->
      </div>
      <?php get_template_part('template/side-company'); ?>
    </div>
  </div>
  <!-- /#column2 -->


</div>

<?php get_footer(); ?>