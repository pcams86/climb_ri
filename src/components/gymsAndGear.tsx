import * as React from "react";
import { Component } from "react";

interface GymsAndGearProps {}

interface GymsAndGearState {}

class GymsAndGear extends React.Component<GymsAndGearProps, GymsAndGearState> {
  state = {};
  render() {
    return (
      <div>
        <h4>Local Rock Gyms and Gear Shops</h4>
        <ul>
          <li>
            <a href="http://carabiners.com/" target="_blank">
              Carabiners New Bedford, MA
            </a>
          </li>
          <li>
            <a href="https://centralrockgym.com/warwick/" target="_blank">
              Central Rock Gym, Warwick
            </a>
          </li>
          <li>
            <a href="https://rockspotclimbing.com/" target="_blank">
              Rock Spot, Lincoln, Peace Dale, Providence
            </a>
          </li>
          <li>
            <a href="https://www.rei.com/stores/cranston.html" target="_blank">
              REI, Cranston
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default GymsAndGear;
