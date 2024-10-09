"use client";
import {
  getAvailableMonths,
  getTilForMonth,
  monthToNumber,
} from "@/ui/til/_pures/dataUtil";
import { TilCard } from "@/ui/TilCard/Card";
import Link from "next/link";
import { useParams } from "next/navigation";
import { HorizontalContainer } from "../../@latest/default";
import { tilData } from "@/data/postList";

const TilPage = () => {
  const { filter } = useParams();
  const monthList = ["All", ...getAvailableMonths(tilData)];

  const filterMonth = filter ? filter[0] : "All";
  const monthNum = filterMonth ? monthToNumber(filterMonth) : 0;

  if (filterMonth !== "All" && !monthList.includes(filterMonth)) {
    throw new Error("Invalid Filter!");
  }

  const tils = getTilForMonth(tilData, monthNum);

  return (
    <div>
      <h3>This Week I learned</h3>
      <div style={{ gap: "10px", display: "flex" }}>
        {monthList.map((month) => (
          <Link
            key={month}
            href={`/til/${month === "All" ? "" : month}`}
            style={{
              textDecoration: "none",
              color: month === filterMonth ? "inherit" : "gray",
            }}
          >
            {month}
          </Link>
        ))}
      </div>
      <HorizontalContainer>
        {tils.map((til) => (
          <TilCard key={til.id} item={til} />
        ))}
      </HorizontalContainer>
    </div>
  );
};

export default TilPage;
