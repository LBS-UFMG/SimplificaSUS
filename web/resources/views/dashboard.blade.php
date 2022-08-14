@extends('template')
@section('titulo', 'SimplificaSUS - Painel de Evidências Científicas COVID-19')
@section('conteudo')

<!-- <h2 class="mt-5 ps-2"><label class="badge bg-azul-escuro">CoViD-19</label> Painel de Evidências Científicas</h2> -->

<div class="position-relative overflow-hidden p-3 p-md-5 text-center bg-white">
    <div class="col-md-5 p-lg-4 mx-auto my-5">
      <h3 class="display-5 fw-normal">Painel de Evidências Científicas <label class="badge bg-azul-escuro">CoViD-19</label></h3>
      <p class="lead fw-normal">O painel SimplificaSUS apresenta uma série de métricas para avaliação de artigos científicos em áreas específicas.</p>
      <a href="#artigos" class="btn btn-primary bg-verde-escuro btn-lg border-0" type="button">Listar artigos</a>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
    
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-4">

  <div class="row g-3 container-fluid mt-1 mb-5 text-muted">

    <!-- cada card -->
    <div class="col">
      <div class="card shadow border-azul-escuro">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 col-12 text-center">
              <h5 class="card-title display-4 text-azul-escuro"><i class="bi bi-file-earmark-text-fill"></i></h5>
              <h6 class="card-subtitle mb-2 text-azul-escuro"><b>Artigos</b></h6>
            </div>
            <div class="col-md-6 col-12">
              <p class="display-5 pt-3">2147</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- cada card -->
    <div class="col">
      <div class="card shadow border-verde-escuro">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 col-12 text-center">
              <h5 class="card-title display-4 text-verde-escuro"><i class="bi bi-award-fill"></i></h5>
              <h6 class="card-subtitle mb-2 text-verde-escuro"><b>Qualis A</b></h6>
            </div>
            <div class="col-md-6 col-12">
              <p class="display-5 pt-3">652</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- cada card -->
    <div class="col">
      <div class="card shadow border-verde-claro">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 col-12 text-center">
              <h5 class="card-title display-4 text-verde-claro"><i class="bi bi-slash-circle-fill"></i></h5>
              <h6 class="card-subtitle mb-2 text-verde-claro"><b>Tecnologias</b></h6>
            </div>
            <div class="col-md-6 col-12">
              <p class="display-5 pt-3">564</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- cada card -->
    <div class="col">
      <div class="card shadow border-azul-claro">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 col-12 text-center">
              <h5 class="card-title display-4 text-azul-claro" title="PLN: Processamento de Linguagem Natural"><i class="bi bi-chat-square-quote-fill"></i></h5>
              <h6 class="card-subtitle mb-2 text-azul-claro" title="PLN: Processamento de Linguagem Natural"><b>PLN</b></h6>
            </div>
            <div class="col-md-6 col-12">
              <p class="display-5 pt-3">72</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <h3 class="mt-4 pt-5 ps-2 text-muted" id="artigos"><label class="badge bg-azul-escuro me-2">Artigos</label>Resumos e metadados</h3>

    <div class="table-responsive mb-4 pt-1 p-4">
      <table id="minha_tabela" class="table table-hover table-sm table-striped small display">
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>

    <!-- MODAL detalhes do artigo -->
    <div class="modal fade" id="detalhes-artigo" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <strong>
              <em>
                <h6 class="modal-title">Detalhes do artigo</h6>
              </em>
            </strong>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <em><span class="small" id="abstract"></span></em>
              <br><br><h6 class="btn btn-info">Tradução automática</h6>
              <strong><span id="titulo_traduzido"></span></strong><br>
              <span id="resumo"></span>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
            <a id="doi" href="#" class="btn btn-primary" target="_blank">Ler artigo completo</a>
          </div>
        </div>
      </div>
    </div>
    <!-- FIM MODAL detalhes do artigo -->

    <div class="row mt-5">
      <h3 class="mb-4 ps-2 text-muted"><label class="badge bg-azul-escuro me-2">Estatísticas</label>Metadados de artigos</h3>

      <!-- ABAS GRÁFICOS -->
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">

          <button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#grafico1" role="tab">Publicações</button>
          <button class="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#grafico2" role="tab">Qualis e Fator de Impacto</button>
          <button class="nav-link" id="tab3" data-bs-toggle="tab" data-bs-target="#grafico3" role="tab">Citações</button>
          <button class="nav-link" id="tab4" data-bs-toggle="tab" data-bs-target="#grafico4" role="tab">Tecnologias</button>

        </div>
      </nav>
      <!-- FIM ABAS GRÁFICOS -->
      <!-- CONTÊINER DOS GRÁFICOS -->
      <div class="tab-content" id="nav-tabContent">

        <div class="tab-pane fade show active" id="grafico1" role="tabpanel" tabindex="0">
          <div class="row">
            <!-- grafico -->
            <div class="col-12 my-2 col-xl-6 p-4">
              <h4>Publicações por data (n = 2147)</h4>
              <p class="text-muted small">Este gráfico apresenta a quantidade de artigos coletados por data de publicação. Dados foram coletados no <a href="https://infoms.saude.gov.br/extensions/evidencias_covid/evidencias_covid.html">Painel de Evidências Científicas sobre Tratamento Farmacológico e Vacinas - COVID-19</a>.</p>
              <canvas class="my-4 w-100" id="g1" width="900" height="450"></canvas>
            </div>

            <!-- grafico -->
            <div class="col-12 my-2 col-xl-6 p-4">
              <h4>Relevância das publicações</h4>
              <p class="text-muted small">Este gráfico apresenta a distribuição de artigos avaliados no painel com base nos periódicos de publicação. Aqui podemos ver que boa parte dos dados utilizados nessa base veio de meios de publicação sem grande impacto científico.</p>
              <canvas class="my-4 w-100" id="g15" width="900" height="450"></canvas>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="grafico2" role="tabpanel" tabindex="0">
          <!-- grafico -->
          <div class="row">
            <div class="col-12 my-2 col-xl-6 p-4">
              <h4>Publicações por Qualis (652/2147)</h4>
              <p class="text-muted small">Este gráfico apresenta a distribuição de artigos avaliados no painel com base nos periódicos de publicação. Aqui podemos ver a distruição dos periódicos com base nos estratos Qualis (para mais informações acesse o site da <a href="https://sucupira.capes.gov.br/sucupira/public/consultas/coleta/veiculoPublicacaoQualis/listaConsultaGeralPeriodicos.jsf">CAPES</a>). <strong>[MELHOR] <= A1, A2, A3, A4, B1, B2, B3, B4, C=> [PIOR]</strong></p>
              <canvas class="my-4 w-100" id="g2" width="900" height="450"></canvas>
            </div>

            <!-- grafico -->
            <div class="col-12 my-2 col-xl-6 p-4">
              <h4>Publicações por fator de impacto (1145/2147)</h4>
              <p class="text-muted small">Este gráfico apresenta a distribuição de artigos avaliados no painel com base nos periódicos de publicação. Aqui podemos ver a distruição dos periódicos com base na pontuação JCR - Journal Citation Reports (para mais informações acesse o site da <a href="https://clarivate.com/webofsciencegroup/solutions/journal-citation-reports/">JCR Clarivate</a>). <strong>Quanto maior, melhor</strong>.</p>
              <canvas class="my-4 w-100" id="g3" width="900" height="450"></canvas>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="grafico3" role="tabpanel" tabindex="0">

          <div class="row">
            <!-- grafico -->
            <div class="col-12 my-2 col-xl-6 p-4">
              <h4>Publicações por média de citações (últimos 3 anos)</h4>
              <p class="text-muted small">Este gráfico apresenta a distribuição de artigos avaliados no painel com base nos periódicos de publicação. Aqui podemos ver a distruição dos periódicos com base na média de citações dos últimos três anos (para mais informações acesse o site da <a href="https://clarivate.com/webofsciencegroup/solutions/journal-citation-reports/">JCR Clarivate</a>).<strong>Quanto maior, melhor</strong>.</p>
              <canvas class="my-4 w-100" id="g35" width="900" height="450"></canvas>
            </div>

            <!-- grafico -->
            <div class="col-12 my-2 col-xl-6 p-4">
              <h4>Publicações por h-index (1145/2147)</h4>
              <p class="text-muted small">Este gráfico apresenta a distribuição de artigos avaliados no painel com base nos periódicos de publicação. Aqui podemos ver a distruição dos artigos com base h-index da revista (para mais informações acesse o site da <a href="https://clarivate.com/webofsciencegroup/solutions/journal-citation-reports/">JCR Clarivate</a>).</p>
              <canvas class="my-4 w-100" id="g4" width="900" height="450"></canvas>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="grafico4" role="tabpanel" tabindex="0">
          <div class="row">
            <!-- grafico -->
            <div class="col-12 my-2 col-xl-6 p-4">
              <h4>Tecnologias mais citadas (20)</h4>
              <p class="text-muted small">Este gráfico apresenta as "tecnologias" mais citadas com base nas informações disponíveis no <a href="https://infoms.saude.gov.br/extensions/evidencias_covid/evidencias_covid.html">Painel de Evidências Científicas sobre Tratamento Farmacológico e Vacinas</a>.</p>
              <canvas class="my-4 w-100" id="g5" width="900" height="450"></canvas>
            </div>

            <div class="col-12 my-2 col-xl-6 p-4">
              <h4>Tecnologias em artigos com impacto (20)</h4>
              <p class="text-muted small">Este gráfico apresenta as "tecnologias" mais citadas com base nas informações disponíveis no <a href="https://infoms.saude.gov.br/extensions/evidencias_covid/evidencias_covid.html">Painel de Evidências Científicas sobre Tratamento Farmacológico e Vacinas</a>. Foram filtradas apenas artigos publicados em periódicos.</p>
              <canvas class="my-4 w-100" id="g6" width="900" height="450"></canvas>
            </div>
          </div>
        </div>
      </div>
      <!-- FIM CONTÊINER DOS GRÁFICOS -->
    </div>
    <div class="my-4">
      <!-- grafico -->
      <div class="col-12 my-2 col-xl-12">
        <h3 class="mb-4 ps-2 text-muted"><label class="badge bg-azul-escuro me-2">PLN</label>Análise do processamento de linguagem natural (72)</h3>

        <p>
          <span style="background:red" class="p-1 px-3 m-2 rounded"> </span> Tendência desfavorável/neutro
          <span style="background:#1e90ff" class="p-1 px-3 m-2 rounded"> </span> Tendência favorável
        </p>
        <p class="text-muted small">Esta análise indica tendências os resultados das análises de sentimento obtidas das técnicas de processamento de linguagem natural (PLN) dos artigos. Barras laranjas indicam tendências negativas/neutras, enquanto as azuis indicam positivas.</p>
        <canvas class="my-4 p-4 w-100" id="g8" width="900" height="450"></canvas>
      </div>
    </div>
  </div>
</div>
@endsection