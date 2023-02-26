import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

interface ClimbingClubsProps {}

interface ClimbingClubsState {}

class ClimbingClubs extends React.Component<
  ClimbingClubsProps,
  ClimbingClubsState
> {
  state = {};
  render() {
    return (
      <div>
        <h4>Local Climbing Clubs</h4>
        <ul>
          <li>
            <a href="http://www.climbri.org/AMC/" target="_blank">
              Appalachian Mountain Club, Narragansett Chapter, Climbing{" "}
            </a>
          </li>
          <li>
            <a href="https://brownoutingclub.com/" target="_blank">
              Brown University Outing Club
            </a>
          </li>
          <li>
            <a href="https://events.uri.edu/group/outing_club" target="_blank">
              University of Rhode Island Outing Club
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ClimbingClubs;
