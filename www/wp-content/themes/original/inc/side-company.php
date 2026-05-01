<?php $url = $_SERVER['REQUEST_URI']; ?>

<div class="column_sub">
  <!-- #lonav -->
  <section id="lonav">
    <h3><a href="/company/">企業情報</a></h3>

    <ul>
      <?php if (strstr($url, '/company/company-message/') == true) : ?>
      <p class="cur"><a href="/company/company-message/">トップメッセージ</a></p><?php else : ?>
      <p><a href="/company/company-message/">トップメッセージ</a></p>
      <?php endif; ?>

      <?php if (strstr($url, '/company/outline/') == true) : ?>
      <p class="cur"><a href="/company/outline/">会社概要</a></p>
      <?php else : ?>
      <p><a href="/company/outline/">会社概要</a></p>
      <?php endif; ?>

      <?php if (strstr($url, '/company/chart/') == true) : ?>
      <p class="cur"><a href="/company/chart/">役員一覧と組織図</a></p>
      <?php else : ?>
      <p><a href="/company/chart/">役員一覧と組織図</a></p>
      <?php endif; ?>

      <?php if (strstr($url, '/company/hub/') == true) : ?>
      <p class="cur"><a href="/company/hub/">拠点一覧</a></p>
      <?php else : ?>
      <p><a href="/company/hub/">拠点一覧</a></p>
      <?php endif; ?>

      <?php if (strstr($url, '/company/group/') == true) : ?>
      <p class="cur"><a href="/company/group/">アイサングループ</a></p>
      <?php else : ?>
      <p><a href="/company/group/">アイサングループ</a></p>
      <?php endif; ?>

      <?php if (strstr($url, '/company/history/') == true) : ?>
      <p class="cur"><a href="/company/history/">沿革</a></p>
      <?php else : ?>
      <p><a href="/company/history/">沿革</a></p>
      <?php endif; ?>


      <?php if (strstr($url, '/company/reconstruction/') == true) : ?>
      <p class="cur"><a href="/company/reconstruction/">災害復興への取り組み</a></p>
      <?php else : ?>
      <p><a href="/company/reconstruction/">災害復興への取り組み</a></p>
      <?php endif; ?>

      <?php if (strstr($url, '/company/behavioral/') == true) : ?>
      <p class="cur"><a href="/company/behavioral/">行動指針</a></p>
      <?php else : ?>
      <p><a href="/company/behavioral/">行動指針</a></p>
      <?php endif; ?>

      <?php if (strstr($url, '/company/protection/') == true) : ?>
      <p class="cur"><a href="/company/protection/">ソフトウェアライセンス製品の<br>著作権保護方針</a></p>
      <?php else : ?>
      <p><a href="/company/protection/">ソフトウェアライセンス製品の<br>著作権保護方針</a></p>
      <?php endif; ?>
    </ul>

  </section>
  <!-- /#lonav -->


</div>