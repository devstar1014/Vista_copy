import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Header } from "../components/layout/header/Header";
import { Footer } from "../components/layout/footer/Footer";
import eventImg from "../assets/images/news-events/event-img.png";

import { NewsListData } from "../components/data/NewsListData";
import { Link, useNavigate } from "react-router-dom";

export const NewsDetail = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />

      {/* Sub banner */}
      <div className="sub_banner">
        <div className="container">
          <div className="banner_content_desc">
            <h5 className="banner_subtitle">News</h5>
            <h1 className="banner_title">
              Stay Updated with VISTA's Latest News
            </h1>
            <div className="breadcrumb_detail">
              <div className="breadcrumb_box_grey">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      News
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="news_detail_inner">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7">
              <div className="event_img">
                <img src={eventImg} alt="" />
              </div>
              <div className="card_body">
                <div className="event_detail">
                  <div className="row gy-4 gx-0 align-items-center">
                    <div className="col-lg-2">
                      <h5 className="news_box_month">April</h5>
                      <h3 className="news_box_date">12</h3>
                    </div>
                    <div className="col-lg-10">
                      <h2 className="event_title">
                        Texas Rangers Finish In Second Place
                      </h2>
                      <h5 className="event_subtitle">
                        By cmsmasters In <span>Match Report</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <p className="event_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mollis nunc a molestie dictum. Mauris venenatis,
                  felis scelerisque aliquet lacinia, nulla nisi venenatis odio,
                  id blandit mauris ipsum id sapien. Vestibulum malesuada orci
                  sit amet pretium facilisis. In lobortis congue augue, a
                  commodo libero tincidunt scelerisque. Donec tempus congue
                  lacinia. Phasellus lacinia felis est, placerat commodo odio
                  tincidunt iaculis. Sed felis magna, iaculis a metus id,
                  ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies
                  posuere porttitor, nisl lacus tincidunt diam, vel feugiat nisi
                  elit id massa. Proin nulla augue, dapibus non justo in,
                  laoreet commodo nunc. Maecenas faucibus neque in nulla mollis
                  interdum. Quisque quis pellentesque enim, vitae pulvinar
                  purus. Quisque vitae suscipit risus. Curabitur scelerisque
                  magna a interdum pretium. Integer sodales metus ut placerat
                  viverra. Curabitur accumsan, odio quis vehicula imperdiet,
                  tellus ex venenatis nisl, a dignissim lectus augue tincidunt
                  arcu.
                </p>
                <p className="event_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mollis nunc a molestie dictum. Mauris venenatis,
                  felis scelerisque aliquet lacinia, nulla nisi venenatis odio,
                  id blandit mauris ipsum id sapien.
                </p>
                <p className="event_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum mollis nunc a molestie dictum. Mauris venenatis,
                  felis scelerisque aliquet lacinia, nulla nisi venenatis odio,
                  id blandit mauris ipsum id sapien. Vestibulum malesuada orci
                  sit amet pretium facilisis. In lobortis congue augue, a
                  commodo libero tincidunt scelerisque.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="search_box mb-3">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div class="input-group ">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="bi bi-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest_news_list">
                <div className="row gy-4">
                  {NewsListData.slice(0, 4).map((item) => {
                    return (
                      <div className="col-lg-12">
                        <div className="latest_news_box">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="card_img">
                                <img src={item.img} alt="" />
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="card_body">
                                <h2 className="card_title">{item.title}</h2>
                                <h5 className="card_subtitle">
                                  By cmsmasters In <span>Match Report</span>
                                </h5>
                                <p className="card_text">{item.text}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-4">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-end mt-5">
                    <li class="page-item">
                      <a class="page-link prev">
                        <i class="bi bi-chevron-left"></i>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link next" href="#">
                        <i class="bi bi-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
