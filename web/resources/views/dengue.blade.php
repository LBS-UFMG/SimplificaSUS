<!doctype html>
<html lang="pt-br">

<head>
  <title>@yield('titulo')</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.0-beta1 -->
  <link rel="stylesheet" href="{{ url('/css/bootstrap.min.css') }}">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  <link href="{{ url('/css/dashboard.css') }}" rel="stylesheet">
</head>

<body>

  <header class="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">

    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="{{ url('/') }}">
      <img src="{{ url('/img/logo.svg') }}" style="max-width:220px"></a>

    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
<!-- 
    <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Buscar" aria-label="Search" id="buscar" style="placeholder{color:white}"> -->
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <!-- <a class="nav-link px-3" href="#">Sair</a> -->

        <li class="nav-item dropdown me-5">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mudar página
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown" style="position:absolute">
          <li><a class="dropdown-item" href="{{ url('/') }}">CoViD-19</a></li>
            <li><a class="dropdown-item" href="{{ url('/vm') }}">Varíola</a></li>
            <li><a class="dropdown-item" href="{{ url('/febreamarela') }}">Febrea amarela</a></li>
            <li><a class="dropdown-item" href="{{ url('/dengue') }}">Dengue</a></li>
            <li><a class="dropdown-item" href="{{ url('/zika') }}">Zika</a></li>
          </ul>
        </li>

      </div>
    </div>
  </header>
  <main class="container-fluid">
       

  <h1 class="m-4"><label class="badge bg-danger">Dengue</label> EM DESENVOLVIMENTO</h1>

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <!-- <h1 class="h2">Painel SUS</h1>
  <div class="btn-toolbar mb-2 mb-md-0">
    <div class="btn-group me-2">
      <button type="button" class="btn btn-sm btn-outline-secondary">Compartilhar</button>
      <button type="button" class="btn btn-sm btn-outline-secondary">Exportar</button>
    </div>
    <!-- <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
      <span data-feather="calendar" class="align-text-bottom"></span>
      This week
    </button> 
  </div></div> -->

  <div class="row g-3 container-fluid my-4 text-muted">

    <!-- cada card -->
    <div class="col">
      <div class="card shadow" style="border-left:5px #007bb1 solid">
        <div class="card-body">
          <div class="row">
            <div class="col-6 text-center">
              <h5 class="card-title display-4" style="color:#007bb1"><i class="bi bi-file-earmark-text-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#007bb1"><b>Artigos</b></h6>
            </div>
            <div class="col-6">
              <p class="display-5 pt-3">-</p>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- cada card -->
     <div class="col">
      <div class="card shadow" style="border-left:5px #ff7925 solid">
        <div class="card-body">
          <div class="row">
            <div class="col-6 text-center">
              <h5 class="card-title display-4" style="color:#ff7925"><i class="bi bi-award-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#ff7925"><b>Qualis A</b></h6>
            </div>
            <div class="col-6">
              <p class="display-5 pt-3">-</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- cada card -->
    <div class="col">
      <div class="card shadow" style="border-left:5px #009e39 solid">
        <div class="card-body">
          <div class="row">
            <div class="col-6 text-center">
              <h5 class="card-title display-4" style="color:#009e39"><i class="bi bi-motherboard-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#009e39"><b>Tecnologias</b></h6>
            </div>
            <div class="col-6">
              <p class="display-5 pt-3">-</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- cada card -->
    <div class="col">
      <div class="card shadow" style="border-left:5px #e21a2a solid">
        <div class="card-body">
          <div class="row">
            <div class="col-6 text-center">
              <h5 class="card-title display-4" style="color:#e21a2a"><i class="bi bi-chat-square-quote-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#e21a2a"><b>PLN</b></h6>
            </div>
            <div class="col-6">
              <p class="display-5 pt-3">-</p>
            </div>
          </div>
        </div>
      </div>
    </div>

<div class="row mt-5">

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Publicações por data  (n = 2147)</h4>
    <canvas class="my-4 w-100" id="g1" width="900" height="450"></canvas>
  </div>

 <!-- grafico -->
 <div class="col-6 my-2 col-xxl-6">
    <h4>Relevância das publicações</h4>
    <canvas class="my-4 w-100" id="g15" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Publicações por Qualis (652/2147)</h4>
    <canvas class="my-4 w-100" id="g2" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Publicações por fator de impacto (1145/2147)</h4>
    <canvas class="my-4 w-100" id="g3" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Publicações por média de citações (últimos 3 anos)</h4>
    <canvas class="my-4 w-100" id="g35" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-4 my-6 col-xxl-6">
    <h4>Publicações por h-index (1145/2147)</h4>
    <canvas class="my-4 w-100" id="g4" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Tecnologias mais citadas (20)</h4>
    <canvas class="my-4 w-100" id="g5" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Tecnologias em artigos com impacto (20)</h4>
    <canvas class="my-4 w-100" id="g6" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-12 my-2 col-xxl-12">
    <h4>Análise do processamento de linguagem natural (72)</h4>
    <p>
      <span style="background:#ffa500" class="p-1 px-3 m-2 rounded"> </span> Tendência desfavorável/neutro
      <span style="background:#1e90ff" class="p-1 px-3 m-2 rounded"> </span> Tendência favorável
    </p>
    <canvas class="my-4 w-100" id="g8" width="900" height="450"></canvas>
  </div>

</div>

<h2>Tabela</h2>
<div class="table-responsive">
  <table id="minha_tabela" class="table table-hover table-sm table-striped">
    <thead></thead>
    <tbody></tbody>
  </table>
</div>

  </div>

  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script>

  <script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>


  <script src="{{ url('/js/dashboard_DG.js') }}"></script>

  <script src="{{ url('/js/script.js') }}"></script>

</body>

</html>