import React, { useEffect, useState, useRef } from "react";
import "./header.css";
import "./search.css";
import "../../../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import rightArrow from "../../../assets/images/white-right-arrow.svg";
import USAFlag from "../../../assets/images/usa_flag.svg";
import germanyFlag from "../../../assets/images/germany_flag.svg";
import indiaFlag from "../../../assets/images/india_flag.svg";
import australiaFlag from "../../../assets/images/australia_flag.svg";
import UKFlag from "../../../assets/images/UK_flag.svg";
import norwayFlag from "../../../assets/images/norway_flag.svg";

import "../../../assets/searchIndex.json";

export const TopHeader = () => {
  // modify by naoki --start for search word in current page
  const [searchWord, setSearchWord] = useState("");

  const [elements, setElements] = useState([]);
  const [searchPop, setSearchPop] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const handleClickOutside = (event) => {
    if (event.target.id === "searchButton") {
      return;
    }
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setSearchPop(false);
      setSearchWord("");
    }
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    let id = 0;
    await setSearchWord(e.target.value);

    if (!e.target.value.trim()) {
      setSearchResults([]);
      return;
    }

    // const elements = document.body.getElementsByTagName("*");
    const results = [];
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (
        element.childNodes.length === 1 &&
        element.childNodes[0].nodeType === Node.TEXT_NODE
      ) {
        const text = element.textContent;
        if (text.toLowerCase().includes(e.target.value.toLowerCase())) {
          let href = "";
          if (!element.id) {
            element.id = `search-result-${i}`;
          }
          href = `#${element.id}`;
          if (element.href && element.href !== "#") {
            let hrefs = [];
            hrefs = element.href.split("/");

            href = `/${hrefs[hrefs.length - 1]}`;
          }
          // console.log("hrefe:==>", href);
          results.push({
            href: href,
            text: text.trim(),
          });
        }
      }
    }
    setSearchResults(results);
  };
  // modify by naoki --end for search word in current page

  useEffect(() => {
    const elements = document.body.getElementsByTagName("*");
    setElements([...elements]);
  }, []);

  useEffect(() => {
    // Bind the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="top_header">
      <div className="container">
        <ul className="top_header_list">
          <li className="search_icon relation">
            {/* // modify by naoki --start for search word in current page */}
            {searchPop && (
              <div ref={containerRef}>
                <input
                  id="search"
                  ref={inputRef}
                  type="text"
                  value={searchWord}
                  placeholder="Search.."
                  name="search"
                  className={"custom-search"}
                  onChange={handleSearch}
                />

                <div className="dropdown-search">
                  {searchResults.length > 0 ? (
                    <ul className="dropdown-content">
                      {searchResults.map((item, index) => (
                        <li key={index}>
                          {/* {console.log("item ==> ", item)} */}
                          <a href={item.href} className="d-block line-clamp">
                            {/* {console.log("item :>> ", item.text)} */}
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                  {/* // modify by naoki --end for search word in current page */}
                </div>
              </div>
            )}
            <button
              style={{ color: "white" }}
              id="searchButton"
              onClick={(e) => {
                setSearchPop((prev) => {
                  console.log("preprev", prev);
                  return !prev;
                });
              }}
            >
              <i className="bi bi-search" style={{ color: "white" }}></i>
            </button>
          </li>
          <li className="language_list dropdown">
            <a
              class=" dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faGlobe} />
            </a>
            <ul class="dropdown-menu">
              <li>
                <img src={USAFlag} alt="" />
                USA
              </li>
              <li>
                <img src={germanyFlag} alt="" />
                Germany
              </li>
              <li>
                <img src={indiaFlag} alt="" />
                India
              </li>
              <li>
                <img src={australiaFlag} alt="" />
                AUS
              </li>
              <li>
                <img src={UKFlag} alt="" />
                UK
              </li>
              <li>
                <img src={norwayFlag} alt="" />
                Norway
              </li>
            </ul>
          </li>
          <li className="login_icon">
            <a href="https://webmail.vistaes.com/" target="/blank">
              <i class="bi bi-person-circle"></i>Login
              <img src={rightArrow} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
