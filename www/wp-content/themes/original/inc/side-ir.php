<?php $url = $_SERVER['REQUEST_URI']; ?>

<div class="column_sub js_anim_scroll--">
  <!-- #lonav -->
  <section id="lonav">
    <h3><a href="/ir/">IR・投資家情報</a></h3>

    <?php if( strstr($url, '/ir/management/') == true): ?>
    <dl class="js_accordion cur">
      <dt class="is-accordion">経営情報</dt>
      <?php else: ?>
      <dl class="js_accordion">
        <dt>経営情報</dt>
        <?php endif; ?>
        <dd>
          <ul>
            <li <?php if( strstr($url, '/management/message/') == true){ echo 'class="cur"'; } ?>><a href="/ir/management/message/">トップメッセージ</a></li>
            <li <?php if( strstr($url, '/management/plan/') == true){ echo 'class="cur"'; } ?>><a href="/ir/management/plan/">経営方針</a></li>
            <li <?php if( strstr($url, '/management/vision/') == true){ echo 'class="cur"'; } ?>><a href="/ir/management/vision/">中期経営計画</a></li>
            <li <?php if( strstr($url, '/management/business/') == true){ echo 'class="cur"'; } ?>><a href="/ir/management/business/">事業概要</a></li>
            <li <?php if( strstr($url, '/management/sustainability/') == true){ echo 'class="cur"'; } ?>><a href="/ir/management/sustainability/">サステナビリティ</a></li>
            <li <?php if( strstr($url, '/management/disclosure/') == true){ echo 'class="cur"'; } ?>><a href="/ir/management/disclosure/">IR・ディスクロージャーポリシー</a></li>
            <li <?php if( strstr($url, '/management/capital-costs-stock-prices/') == true){ echo 'class="cur"'; } ?>><a href="/ir/management/capital-costs-stock-prices/">資本コストや株価を意識した経営</a></li><!--  //2024-04-28 更新 -->
            <li <?php if( strstr($url, '/management/human-management/') == true){ echo 'class="cur"'; } ?>><a href="/ir/management/human-management/">人的資本経営</a></li>
            <li <?php if( strstr($url, '/management/dx-strategy/') == true){ echo 'class="cur"'; } ?>><a href="/ir/management/dx-strategy/">DX戦略</a></li><!--  //2024-04-28 更新 -->
            <li <?php if( strstr($url, '/management/sbusiness-model') == true){ echo 'class="cur"'; } ?>><a href="/ir/management/business-model/">事業別収益モデル</a></li>
          </ul>
        </dd>
      </dl>

      <?php if( strstr($url, '/ir/governance/') == true): ?>
      <dl class="js_accordion cur">
        <dt class="is-accordion">コーポレート・ガバナンス</dt>
      <?php else: ?>
      <dl class="js_accordion">
          <dt>コーポレート・ガバナンス</dt>
      <?php endif; ?>
          <dd>
            <ul>
              <li <?php if( strstr($url, '/governance/policy/') == true){ echo 'class="cur"'; } ?>><a href="/ir/governance/policy/">基本方針・体制</a></li>
              <li><a href="/company/chart/">役員一覧</a></li>
              <li <?php if( strstr($url, '/governance/director/') == true){ echo 'class="cur"'; } ?>><a href="/ir/governance/director/">取締役会の構成</a></li>
              <li <?php if( strstr($url, '/governance/reward/') == true){ echo 'class="cur"'; } ?>><a href="/ir/governance/reward/">役員報酬</a></li>
              <li <?php if( strstr($url, '/governance/owned/') == true){ echo 'class="cur"'; } ?>><a href="/ir/governance/owned/">政策保有株式</a></li>
              <li <?php if( strstr($url, '/governance/management-risk/') == true){ echo 'class="cur"'; } ?>><a href="/ir/governance/management-risk/">リスクマネジメント</a></li>
              <li <?php if( strstr($url, '/governance/system/') == true){ echo 'class="cur"'; } ?>><a href="/ir/governance/system/">内部統制システム</a></li>
              <li <?php if( strstr($url, '/governance/compliance/') == true){ echo 'class="cur"'; } ?>><a href="/company/behavioral/">コンプライアンス</a></li>
              <li <?php if( strstr($url, '/governance/talk/') == true){ echo 'class="cur"'; } ?>><a href="/ir/governance/talk/">株主・投資家との対話</a></li>
            </ul>
          </dd>
        </dl>


      <?php if( strstr($url, '/ir/investors/') == true): ?>
      <dl class="js_accordion cur">
        <dt class="is-accordion">株主・個人投資家の皆様へ</dt>
      <?php else: ?>
        <dl class="js_accordion">
          <dt><a href="/ir/investors/">株主・個人投資家の皆様へ</a></dt>
      <?php endif; ?>
          <dd>
            <ul>
              <li ><a href="/ir/investors/#sec01">アイサンテクノロジーとは</a></li>
              <li ><a href="/ir/investors/#sec03">事業と強み</a></li>
              <li ><a href="/ir/investors/#sec09">数字で語るアイサン</a></li>
              <li ><a href="/ir/investors/#sec10">環境に配慮した取り組み</a></li>
            </ul>
          </dd>
        </dl>


        <?php if( strstr($url, 'challenge-story') == true): ?>
        <p class="cur"><a href="/challenge-story/">挑戦と進化のストーリー</a></p>
        <?php else: ?>
        <p><a href="/challenge-story/">挑戦と進化のストーリー</a></p>
        <?php endif; ?>


        <?php if( strstr($url, '/ir/information/') == true): ?>
        <p class="cur"><a href="/ir/information/">IRニュース一覧</a></p>
        <?php else: ?>
        <p><a href="/ir/information/">IRニュース一覧</a></p>
        <?php endif; ?>



        <?php if( strstr($url, '/topics/') == true): ?>
        <p class="cur"><a href="/topics/">トピックス一覧</a></p>
        <?php else: ?>
        <p><a href="/topics/">トピックス一覧</a></p>
        <?php endif; ?>

        <!-- <?php if( strstr($url, '/ir/information/') == true): ?>
        <dl class="js_accordion cur">
          <dt class="is-accordion">お知らせ</dt>
          <?php else: ?>
          <dl class="js_accordion">
            <dt>お知らせ</dt>
            <?php endif; ?>
            <dd>
              <ul>
                <li <?php if( strstr($url, '/ir/information/information-all/') == true){ echo 'class="cur"'; } ?>><a href="/ir/information/information-all/">すべて</a></li>
                <li <?php if( strstr($url, '/ir/information/settlement/') == true){ echo 'class="cur"'; } ?>><a href="/ir/information/settlement/">決算・適時開示</a></li>
                <li <?php if( strstr($url, '/ir/information/ducument/') == true){ echo 'class="cur"'; } ?>><a href="/ir/information/ducument/">IR資料</a></li>
                <li <?php if( strstr($url, '/ir/information/news/') == true){ echo 'class="cur"'; } ?>><a href="/ir/information/news/">お知らせ</a></li>
              </ul>
            </dd>
          </dl> -->

        <?php if( strstr($url, '/ir/library/') == true): ?>
        <dl class="js_accordion cur">
          <dt class="is-accordion">IRライブラリ</dt>
          <?php else: ?>
          <dl class="js_accordion">
            <dt>IRライブラリ</dt>
            <?php endif; ?>
            <dd>
              <ul>
                <li <?php if( strstr($url, '/ir/library/report-brief/') == true){ echo 'class="cur"'; } ?>><a href="/ir/library/report-brief/">決算短信・決算説明資料</a></li>
                <!-- <li <?php if( strstr($url, '/ir/library/report-corporate/') == true){ echo 'class="cur"'; } ?>><a href="/ir/library/report-corporate/">コーポレートレポート</a></li> -->
                <li <?php if( strstr($url, '/ir/library/report-securities/') == true){ echo 'class="cur"'; } ?>><a href="/ir/library/report-securities/">有価証券報告書・四半期報告書</a></li>
                <li <?php if( strstr($url, '/ir/library/sessionsettlement/') == true){ echo 'class="cur"'; } ?>><a href="/ir/library/sessionsettlement/">会社説明会・決算説明会</a></li>
                <!-- <li <?php if( strstr($url, '/ir/library/sessioncompany/') == true){ echo 'class="cur"'; } ?>><a href="/ir/library/sessioncompany/">会社説明会</a></li> -->
                <li <?php if( strstr($url, '/ir/library/report/') == true){ echo 'class="cur"'; } ?>><a href="/ir/library/report/">その他資料</a></li>
              </ul>
            </dd>
          </dl>

          <?php if( strstr($url, '/ir/performance/') == true): ?>
          <dl class="js_accordion cur">
            <dt class="is-accordion">財務ハイライト</dt>
            <?php else: ?>
            <dl class="js_accordion">
              <dt>財務ハイライト</dt>
              <?php endif; ?>
              <dd>
                <ul>
                  <li <?php if( strstr($url, '/ir/performance/highligh-linking/') == true){ echo 'class="cur"'; } ?>><a href="/ir/performance/highligh-linking/">業績ハイライト（連結）</a></li>
                  <li <?php if( strstr($url, '/ir/performance/segment-single/') == true){ echo 'class="cur"'; } ?>><a href="/ir/performance/segment-single/">業績ハイライト（単体）</a></li>
                  <li <?php if( strstr($url, '/ir/performance/segment-segment/') == true){ echo 'class="cur"'; } ?>><a href="/ir/performance/segment-segment/">セグメント別業績ハイライト</a></li>
                </ul>
              </dd>
            </dl>

            <?php if( strstr($url, '/ir/stock/') == true): ?>
            <dl class="js_accordion cur">
              <dt class="is-accordion">株式について</dt>
              <?php else: ?>
              <dl class="js_accordion">
                <dt>株式について</dt>
                <?php endif; ?>
                <dd>
                  <ul>
                    <li <?php if( strstr($url, '/ir/stock/memo/') == true){ echo 'class="cur"'; } ?>><a href="/ir/stock/memo/">株式メモ</a></li>
                    <li <?php if( strstr($url, '/ir/stock/meeting/') == true){ echo 'class="cur"'; } ?>><a href="/ir/stock/meeting/">株主総会</a></li>
                    <li <?php if( strstr($url, '/ir/stock/return/') == true){ echo 'class="cur"'; } ?>><a href="/ir/stock/return/">株主還元</a></li>
                    <li <?php if( strstr($url, '/ir/stock/procedure/') == true){ echo 'class="cur"'; } ?>><a href="/ir/stock/procedure/">株式事務手続き</a></li>
                    <li <?php if( strstr($url, '/ir/stock/status/') == true){ echo 'class="cur"'; } ?>><a href="/ir/stock/status/">株式の状況</a></li>
                    <li><a href="https://finance.yahoo.co.jp/quote/4667.T" target="_blank">株価情報</a></li>
                  </ul>
                </dd>
              </dl>

              <?php if( strstr($url, '/ir/calender/') == true): ?>
              <p class="cur"><a href="/ir/calender/">IRカレンダー</a></p>
              <?php else: ?>
              <p><a href="/ir/calender/">IRカレンダー</a></p>
              <?php endif; ?>

              <?php if( strstr($url, '/ir/faq/') == true): ?>
              <p class="cur"><a href="/ir/faq/">よくあるご質問</a></p>
              <?php else: ?>
              <p><a href="/ir/faq/">よくあるご質問</a></p>
              <?php endif; ?>

              <?php if( strstr($url, '/ir/announcement/') == true): ?>
              <p class="cur"><a href="/ir/announcement/">電子公告</a></p>
              <?php else: ?>
              <p><a href="/ir/announcement/">電子公告</a></p>
              <?php endif; ?>
  </section>
  <!-- /#lonav -->

  <!-- #bnr -->
  <section id="bnr">
    <div class="ir-mail">
      <h3>IR情報メール配信サービス</h3>
      <p class="txt">決算情報など、IR関連の最新情報をメールでお届けします。</p>
      <p class="btn m_btn_main wh2">
       <!-- <a href="/ir/delivery/">新規登録はこちら</a> -->
        <a href="https://rims.tr.mufg.jp/?sn=4667" target="_blank">新規登録はこちら</a>
      </p>
    </div>
  </section>
  <!-- /#bnr -->
</div>
