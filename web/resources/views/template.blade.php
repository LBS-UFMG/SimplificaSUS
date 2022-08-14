<!doctype html>
<html lang="pt-br">

<head>
  <title>@yield('titulo')</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.0-beta1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">

  <link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css">

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link href="{{ url('/css/style.css') }}" rel="stylesheet">
  <!-- <link href="{{ url('/css/dashboard.css') }}" rel="stylesheet"> -->

  <link rel="icon" href="{{ url('/img/favicon.png') }}">
</head>

<body>

  <!-- HEADER -->
  <header>

    <nav class="navbar navbar-expand-md navbar-light bg-light">

      <div class="container-fluid">

        <!-- logo -->
        <a class="navbar-brand" href="#">
          <img style="max-height:40px" src="{{ url('/img/logo/logo_h_color_1.svg') }}">
        </a>
        <!-- fim logo -->

        <!-- botao sanduiche -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu_superior" aria-controls="menu_superior" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- fim botao sanduiche -->

        <div class="collapse navbar-collapse" id="menu_superior">
          <ul class="navbar-nav ms-auto mb-2 mb-xl-0">
            <!-- menu seleção página - lado direito -->
            
            <li class="nav-item dropdown me-4">
              <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Explorar
              </a>
              <ul class="dropdown-menu" style="position:absolute">
              <li><a class="dropdown-item" href="{{ url('/') }}">CoViD-19</a></li>
                <li><a class="dropdown-item" href="{{ url('/vm') }}">Monkeypox</a></li>
                <li><a class="dropdown-item" href="{{ url('/febreamarela') }}">Febrea amarela</a></li>
                <li><a class="dropdown-item" href="{{ url('/dengue') }}">Dengue</a></li>
                <li><a class="dropdown-item" href="{{ url('/zika') }}">Zika</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown me-4"><a class="nav-link" href="#">Detalhes</a></li>

            <li class="nav-item dropdown me-4"><a class="nav-link" href="#">Artigos</a></li>

            <li class="nav-item dropdown me-4"><a class="nav-link" href="#">Estatísticas</a></li>

            <li class="nav-item dropdown me-4"><a class="nav-link" href="#">Análise PLN</a></li>

            <li class="nav-item dropdown me-4"><a class="nav-link" href="#">Sobre</a></li>
            <!-- FIM menu seleção página - lado direito -->
          </ul>
        </div> <!-- fim colapso -->
      </div><!-- fim container -->
    </nav>
  </header>
  <!-- FIM HEADER -->
  
  <!-- MAIN -->
  <main class="container-fluid">
        @yield('conteudo')
  </div>
  <!-- FIM MAIN -->

  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script>

  <script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>


  <script src="{{ url('/js/dashboard.js') }}"></script>

  <script src="{{ url('/js/script.js') }}"></script>

</body>

</html>