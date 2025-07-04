import { Rating } from "@mui/material";
import React from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const PackageCard = ({ packageData }) => {
  return (
    <Link to={`/package/${packageData._id}`} className="w-full">
      <div className="w-full bg-white border flex flex-col items-center p-3 rounded shadow-md overflow-hidden">
        <div className="relative w-full h-[220px] overflow-hidden">
          <img
            className="w-full h-full object-contain rounded border hover:scale-110 transition-all duration-300"
            src={packageData.packageImages[0]}
            alt="Package Image"
          />
        </div>
        <div className="w-full flex flex-col my-2">
          <p className="font-semibold text-lg capitalize w-[90%] xsm:w-[250px] truncate">
            {packageData.packageName}
          </p>
          <p className="text-green-700 text-lg capitalize">
            {packageData.packageDestination}
          </p>
          {(+packageData.packageDays > 0 || +packageData.packageNights > 0) && (
            <p className="flex text-lg items-center gap-2">
              <FaClock />
              {+packageData.packageDays > 0 &&
                (+packageData.packageDays > 1
                  ? packageData.packageDays + " Days"
                  : packageData.packageDays + " Day")}
              {+packageData.packageDays > 0 &&
                +packageData.packageNights > 0 &&
                " - "}
              {+packageData.packageNights > 0 &&
                (+packageData.packageNights > 1
                  ? packageData.packageNights + " Nights"
                  : packageData.packageNights + " Night")}
            </p>
          )}
          <div className="flex flex-wrap justify-between">
            {packageData.packageTotalRatings > 0 && (
              <p className="flex items-center text-lg">
                <Rating
                  value={packageData.packageRating}
                  size="medium"
                  readOnly
                  precision={0.1}
                />
                ({packageData.packageTotalRatings})
              </p>
            )}
            {packageData.offer && packageData.packageDiscountPrice ? (
              <p className="flex gap-1">
                <span className="line-through text-gray-700">
                  INR {packageData.packagePrice}
                </span>
                -
                <span className="font-medium text-green-700">
                  INR {packageData.packageDiscountPrice}
                </span>
              </p>
            ) : (
              <p className="font-medium text-green-700">
                INR {packageData.packagePrice}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;