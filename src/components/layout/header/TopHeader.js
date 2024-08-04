import React, { useEffect, useState } from "react";
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
  const [searchWord, setSearchWord] = useState("");
  const [innermostElement, setInnermostElement] = useState([]);

  const [elements, setElements] = useState([]);

  useEffect(() => {
    const elements = document.body.getElementsByTagName("*");
    setElements([...elements]);
  }, []);
  // modify by naoki --start for search word in current page
  const handleSearch = async (e) => {
    e.preventDefault();
    let id = 0;
    setSearchWord(e.target.value);
    if (e.target.value) {
      const searchText = e.target.value.toLowerCase();
      let searchElement = [];
      await elements.filter(async (element) => {
        let text = element.innerHTML + "";
        text = text.toLowerCase();
        if (
          text.includes(searchText) &&
          element.children.length === 0 &&
          element.style.display !== "none"
        ) {
          if (element.hasAttribute("id"))
            searchElement.push({
              element: element,
              id: element.getAttribute("id").toString(),
            });
          else {
            id++;
            element.setAttribute("id", id);
            searchElement.push({ element: element, id: id });
          }
        }
        return await text.includes(searchText);
      });
      await setInnermostElement([...searchElement]);
    } else {
      setInnermostElement([]);
    }
  };
  // modify by naoki --end for search word in current page

  const [searchPop, setSearchPop] = useState(false);

  return (
    <div className="top_header">
      <div className="container">
        <ul className="top_header_list">
          <li className="search_icon relation">
            {/* // modify by naoki --start for search word in current page */}

            <div className="bg-white">
              <input
                type="text"
                value={searchWord}
                placeholder="Search.."
                name="search"
                className="custom-search"
                onChange={handleSearch}
              />
              <i
                class="fa fa-search px-2"
                style={{ color: "#ff0000", outline: "none", border: "none" }}
              ></i>
            </div>
            <div className="dropdown-search">
              {innermostElement.length > 0 ? (
                <div className="dropdown-content">
                  {innermostElement.map((item, index) => (
                    <a
                      href={`#${item.id}`}
                      key={index}
                      className="d-block line-clamp"
                    >
                      {console.log("item :>> ", item.element)}
                      {item.element.innerHTML}
                    </a>
                  ))}
                </div>
              ) : (
                ""
              )}
              {/* <a href="#" onClick={handleSearchClick}>
              <i class="bi bi-search"></i>
            </a> */}
              {/* // modify by naoki --end for search word in current page */}
            </div>
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
