import React from "react";
import MaiShopOffer from "./MaiShopOffer";
import Offer from "./Offer";
import Search from "./Search";

const SearchHeader = () => {
  return (
    <div className="px-md-5 pt-md-4">
      <div className="container-fluid">
        <div className="row gx-2">
          <div className="col-md-3 d-none d-md-block">
            <MaiShopOffer />
          </div>

          <div className="col-md-6 px-md-2 mt-5 mt-md-0">
            <Search />
          </div>

          <div className="col-md-3 d-none d-md-block">
            <Offer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
