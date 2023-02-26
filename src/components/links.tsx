import * as React from "react";
import { Component } from "react";

interface LinksProps {}

interface LinksState {}

class Links extends React.Component<LinksProps, LinksState> {
  state = {};
  render() {
    return (
      <div>
        <h4>Regional</h4>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/search/top/?q=connecticut%20climbers%20and%20mountaineers"
              target="_blank"
            >
              Connecticut Climbers and Mountaineers{" "}
            </a>
          </li>
          <li>
            <a href="http://www.ctxguide.com/ctxguide_004.htm" target="_blank">
              Connecticut Explorer's Guide (Rock Climbing)
            </a>
          </li>
          <li>
            <a
              href="http://maps.google.com/maps/ms?ie=UTF8&oe=UTF-8&client=firefox-a&cd=1&t=h&lr=lang_en&hl=en&msa=0&msid=108142139671512140910.00045f2e2403a4479a534&ll=41.632397,-72.828032&spn=0.040584,0.020771&source=embed"
              target="_blank"
            >
              Connecticut Crags on Google Earth
            </a>
          </li>
          <li>
            <a href="http://www.cragvt.org/" target="_blank">
              Crag Vermont
            </a>
          </li>
          <li>
            <a href="https://gunksclimbers.org/" target="_blank">
            Gunks Climber's Coalition
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1cfnLglZVVmR8F-nv7OY84kNOZWkM-iBO/view" target="_blank">
            Hanging Mountain Guide
            </a>
          </li>
          <li>
            <a href="http://www.rgrjr.com/climbing/directions.html" target="_blank">
            Massachusetts Top-Rope Directions
            </a>
          </li>
          <li>
            <a href="http://www.mountwashingtonavalanchecenter.org/" target="_blank">
            MT Washington Avalanche Conditions
            </a>
          </li>
          <li>
            <a href="http://www.newenglandbouldering.com/" target="_blank">
            New England Bouldering
            </a>
          </li>
          <li>
            <a href="http://www.neclimbs.com/" target="_blank">
            New England Climbs
            </a>
          </li>
          <li>
            <a href="http://www.neice.com/" target="_blank">
            New England Ice
            </a>
          </li>
          <li>
            <a href="http://www.raggedmtn.org/" target="_blank">
            Ragged Mountain Foundation
            </a>
          </li>
          <li>
            <a href="http://www.climbrumney.com/" target="_blank">
            Rumney Climber's Association
            </a>
          </li>
          <li>
            <a href="http://www.climbgneiss.org/index.php/" target="_blank">
            Western Massachusetts Climber's Coalition
            </a>
          </li>
        </ul>
        <h4>National</h4>
        <h4>International</h4>
      </div>
    );
  }
}

export default Links;
