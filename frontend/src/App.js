import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky category-list">
                <ul className="nav flex-column" id="category-list">
                  <li className="nav-item">
                    <a className="nav-link active" data-id="1">
                      Մրգեր
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link " data-id="2">
                      Բանջարեղեն
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link " data-id="3">
                      Միսեր
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link " data-id="4">
                      Հացամթերք
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link " data-id="5">
                      Կաթնամթերք
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link " data-id="6">
                      Ըմպելիքներ
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <main role="main" className="col-md-10 ms-sm-auto px-4">
              <div className="page-head">
                <div>
                  <h4 id="page-title">Ապրանքներ — Մրգեր</h4>
                  <p className="hint">Ընտրիր կատեգորիա ձախից, ու տեղափոխիր ապրանքը այլ կատեգորիա՝ կոճակով</p>
                </div>
                <span className="badge rounded-pill text-bg-light border" id="count-badge">6 հատ</span>
              </div>

              <div className="product-list" id="product-list">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="product-title">
                      <div className="name">Խնձոր</div>
                      <span className="badge">Ներկա՝ Մրգեր</span>
                    </div>

                    <div className="btn-group-wrap" aria-label="Move buttons">
                      <button className="btn-move" data-pid="1" data-to="2">Բանջարեղեն</button>
                      <button className="btn-move" data-pid="1" data-to="3">Միսեր</button>
                      <button className="btn-move" data-pid="1" data-to="4">Հացամթերք</button>
                      <button className="btn-move" data-pid="1" data-to="5">Կաթնամթերք</button>
                      <button className="btn-move" data-pid="1" data-to="6">Ըմպելիքներ</button>
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="product-title">
                      <div className="name">Բանան</div>
                      <span className="badge">Ներկա՝ Մրգեր</span>
                    </div>

                    <div className="btn-group-wrap" aria-label="Move buttons">
                      <button className="btn-move" data-pid="2" data-to="2">Բանջարեղեն</button>
                      <button className="btn-move" data-pid="2" data-to="3">Միսեր</button>
                      <button className="btn-move" data-pid="2" data-to="4">Հացամթերք</button>
                      <button className="btn-move" data-pid="2" data-to="5">Կաթնամթերք</button>
                      <button className="btn-move" data-pid="2" data-to="6">Ըմպելիքներ</button>
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="product-title">
                      <div className="name">Նարինջ</div>
                      <span className="badge">Ներկա՝ Մրգեր</span>
                    </div>

                    <div className="btn-group-wrap" aria-label="Move buttons">
                      <button className="btn-move" data-pid="3" data-to="2">Բանջարեղեն</button>
                      <button className="btn-move" data-pid="3" data-to="3">Միսեր</button>
                      <button className="btn-move" data-pid="3" data-to="4">Հացամթերք</button>
                      <button className="btn-move" data-pid="3" data-to="5">Կաթնամթերք</button>
                      <button className="btn-move" data-pid="3" data-to="6">Ըմպելիքներ</button>
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="product-title">
                      <div className="name">Դեղձ</div>
                      <span className="badge">Ներկա՝ Մրգեր</span>
                    </div>

                    <div className="btn-group-wrap" aria-label="Move buttons">
                      <button className="btn-move" data-pid="4" data-to="2">Բանջարեղեն</button>
                      <button className="btn-move" data-pid="4" data-to="3">Միսեր</button>
                      <button className="btn-move" data-pid="4" data-to="4">Հացամթերք</button>
                      <button className="btn-move" data-pid="4" data-to="5">Կաթնամթերք</button>
                      <button className="btn-move" data-pid="4" data-to="6">Ըմպելիքներ</button>
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="product-title">
                      <div className="name">Կիվի</div>
                      <span className="badge">Ներկա՝ Մրգեր</span>
                    </div>

                    <div className="btn-group-wrap" aria-label="Move buttons">
                      <button className="btn-move" data-pid="5" data-to="2">Բանջարեղեն</button>
                      <button className="btn-move" data-pid="5" data-to="3">Միսեր</button>
                      <button className="btn-move" data-pid="5" data-to="4">Հացամթերք</button>
                      <button className="btn-move" data-pid="5" data-to="5">Կաթնամթերք</button>
                      <button className="btn-move" data-pid="5" data-to="6">Ըմպելիքներ</button>
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="product-title">
                      <div className="name">Ելակ</div>
                      <span className="badge">Ներկա՝ Մրգեր</span>
                    </div>

                    <div className="btn-group-wrap" aria-label="Move buttons">
                      <button className="btn-move" data-pid="6" data-to="2">Բանջարեղեն</button>
                      <button className="btn-move" data-pid="6" data-to="3">Միսեր</button>
                      <button className="btn-move" data-pid="6" data-to="4">Հացամթերք</button>
                      <button className="btn-move" data-pid="6" data-to="5">Կաթնամթերք</button>
                      <button className="btn-move" data-pid="6" data-to="6">Ըմպելիքներ</button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

      </div>
  );
}

export default App;
