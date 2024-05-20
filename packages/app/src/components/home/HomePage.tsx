import {
  HomePageStarredEntities,
  WelcomeTitle,
  CustomHomepageGrid,
} from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';
import React from 'react';

// This is the default configuration that is shown to the user
// when first arriving to the homepage.
const defaultConfig = [
  {
    component: 'HomePageSearchBar',
    x: 0,
    y: 0,
    width: 12,
    height: 5,
  },
  {
    component: 'HomePageStarredEntities',
    x: 0,
    y: 2,
    width: 6,
    height: 12,
  },
  {
    component: 'WelcomeTitle',
    x: 6,
    y: 2,
    width: 6,
    height: 16,
  },
];

export const HomePage = () => (
  <CustomHomepageGrid config={defaultConfig} rowHeight={10}>
    // Insert the allowed widgets inside the grid. User can add, organize and //
    remove the widgets as they want.
    <HomePageSearchBar />
    <WelcomeTitle />
    <HomePageStarredEntities />
  </CustomHomepageGrid>
);
