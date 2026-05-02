<?php get_header(); ?>

<div id="page_ir">
  <!-- #path -->
  <section id="path">
    <div class="m_box_fixed">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/ir/">IR・投資家情報</a></li>
        <li><a class="nolink">コーポレートガバナンス</a></li>
        <li>政策保有株式</li>
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
          <p class="parent">コーポレートガバナンス</p>
          <h1>政策保有株式</h1>
        </section>
        <!-- /#page-title -->

        <!-- #owned_investment -->
        <section id="owned_investment" class="js_anim_scroll">
          <h2 class="m_txt_h2">投資株式の区分の基準及び考え方</h2>
          <p class="m_txt_body">当社は、保有目的が純投資目的である投資株式と純投資目的以外の目的である投資株式の区分について、<br>その株式の価値の変動または、株式に係る配当によって利益を受けることを目的とする銘柄を純投資目的である投資株式、それ以外の目的で保有する株式を純投資目的以外の目的である投資株式と区分しております。</p>
        </section>
        <!-- /#owned_investment -->

        <!-- #owned_policy -->
        <section id="owned_policy" class="js_anim_scroll">
          <h2 class="m_txt_h2">政策保有株式に対する考え方</h2>
          <p class="m_txt_body">
            政策保有株式については、「関係会社株式でなく、かつ純投資目的以外の目的で保有する株式(子会社株式及び関連会社株式を除く保有株式のうち、保有目的が純投資以外の目的である株式）」と位置づけており、原則として政策保有株式は保有しません。<br>
            <span class="adjust">ただし、当社は、当社の事業戦略上の必要性や取引・協業関係の維持・強化を保有の目的として、顧客や取引先等の株式を保有することで、当社グループと政策保有先の持続的な成長を想定できる銘柄については、総合的な検討を進め保有の有無を判断します。</span><br>
            保有する株式銘柄や株式数および保有比率等については、毎年、その合理性を確認し、取締役会に報告しています。<br>
            <span class="adjust">政策保有株式に係る議決権行使については、株主価値が大きく毀損される事態やコーポレート・ガバナンス上に重大な懸念事項が生じている場合などを除き、当社の議決権行使基準に従い、代表取締役社長が議長を務め、取締役と各審議事項の起案者をもって構成される経営会議で決定した行使内容に沿って行使しております。</span>
          </p>
        </section>
        <!-- /#owned_policy -->

        <!-- /#owned_brand -->
        <section id="owned_brand" class="js_anim_scroll">
          <h2 class="m_txt_h2">株式の保有状況(2021年3月31日現在)</h2>

          <div class="table-cover m_box_table">
            <div class="inner">
              <table>
                <thead>
                  <tr>
                    <th class="item01">銘柄</th>
                    <th class="item02">株式数(株)</th>
                    <th class="item03">貸借対照表計上額(千円)</th>
                    <th class="item04">保有目的</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th class="item01">（株）名古屋銀行</th>
                    <td class="right">2,000</td>
                    <td class="right">6,300</td>
                    <td>資金調達等金融取引の円滑化等取引関係の維持強化を目的に保有。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="scroll">※横にスクロールできます。</p>
          </div>

          <p class="text">保有目的が純投資目的以外の目的である投資株式の保有区分、銘柄、株式数、賃借対照表計上額及び保有目的</p>
        </section>
        <!-- /#owned_brand -->
      </div>

      <?php get_template_part('inc/side-ir'); ?>
    </div>
  </div>
  <!-- /#column2 -->

  <!-- #contact -->
 <?php get_template_part('inc/contact'); ?>
  <!-- /#contact -->
</div>

<?php get_footer(); ?>
