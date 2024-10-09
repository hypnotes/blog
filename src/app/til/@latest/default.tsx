"use client";

import { tilData } from "@/data/postList";
import { TilCard } from "@/ui/TilCard/Card";
import { getLatestNTil } from "@ui/til/_pures/dataUtil";
import styled from "styled-components";

const LatestPage = () => {
  const latestCount = 4;
  const latestTil = getLatestNTil(tilData, latestCount);
  return (
    <>
      <h2>Latest</h2>
      <HorizontalContainer>
        {latestTil.map((til) => (
          <TilCard key={til.id} item={til} />
        ))}
      </HorizontalContainer>
    </>
  );
};

export default LatestPage;

export const HorizontalContainer = styled.div`
  margin-top: 24px;
  display: flex;
  max-width: 80vw;
  overflow-x: auto;
  gap: 16px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1); /* Light background for the track */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4); /* Darker thumb for the scrollbar */
    border-radius: 4px;
  }

  scrollbar-width: thin; /* Firefox scrollbar width */
  scrollbar-color: rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.1); /* Thumb and track colors */
`;
