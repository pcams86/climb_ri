import * as React from "react";
import { Component } from "react";
import "../index.css";

interface AboutProps {}

interface AboutState {}

class About extends React.Component<AboutProps, AboutState> {
  state = {};
  render() {
    return (
      <div>
        <h4 className="title">Welcome to Rhode Island Climbing!</h4>
        <p className="indented-paragraph">
          The ClimbRI website was started in 1995 to promote the sport of
          climbing by providing information on where Rhode Islanders can rock
          climb in the Ocean State and nearby Connecticut and Massachusetts.
          Please email me with suggestions, additions, and corrections. To meet
          other area climbers and to keep up with climbing meetups you should
          join the ClimbRI email group. There are over 250 climbers in the group
          from RI, CT, and MA and there are always people arranging climbing in
          all seasons.
        </p>
        <p>
          Climbing in "Little Rhody" means climbing on diminutive cliffs or
          peeble wrestling on boulders. In the climbing community the state is
          only known for bouldering, primarily in Lincoln Woods. This web site
          does not include bouldering, only climbing. I defer to boulderers to
          cover that and recommend Mountain Project as a source. There is a joke
          among locals that the best Rhode Island climbing areas just happen to
          be in Connecticut. The two main climbing areas for Rhode Islanders are
          Ross Rocks, which is four miles from the RI border, and Lantern Hill
          which is eight miles from the border. Considering that Rhode Island is
          only 35 miles wide these areas are closer to Rhode Island than most
          climbers in Connecticut.
        </p>
        <h4 className="title">History of Rhode Island Climbing</h4>
        <p>
          This history page is a work-in-progress. I am adding to it as I gather
          information. If you have any knowledge of the history of climbing in
          Rhode Island, especially first ascents, I will appreciate it if you
          email me.
        </p>
        <h5>Early Years</h5>
        <p>
          Organized rock climbing started in Rhode Island in the 1930s when the
          Appalachian Mountain Club (AMC) Narragansett Chapter organized climbs
          to local cliffs. This early history is documented in a 1935 Appalachia
          article entitled Rhode Island, the Rock Climbers' Paradise.
        </p>
        <p>
          I have little information on Rhode Island climbing in the 1940s
          through 1960s although the old pitons still in place at Pettaquamscutt
          Rock, Fox Den, and Ross Rocks could have come from this era. The old
          soft iron pitons (Italian and Austrian Stubai ring pitons) at Diamond
          Hill were put in by Albrecht (Al) Hofmann and Ray Fletcher in roughly
          the period 1962-1966.
        </p>
        <h5>1970's and 80's</h5>
        <p>
          In the 1970s and 80s there was a flurry of activity with climbers
          adopting local cliffs and writing guidebooks. Gary Peterson produced
          the Rock Climbing Guide to southern Rhode Island in 1978 and is
          republished here with the permission of the author. Ron Rocha and
          Allan Li published A Climber's Guide to DIAMOND HILL Cumberland, R.I.
          in 1980 and is republished here with the permission of the author. Ed
          Sewall wrote ROCK CLIMBS OF SNAKE DEN STATE PARK JOHNSTON, RHODE
          ISLAND in 1987 (published in 1991) and is republished here with the
          permission of the author. There was a climbing magazine published in
          Rhode Island by Paul Baird called North American Climber. It was short
          lived with only four issues being produced from 1975 to 1977..
        </p>
        <p>
          This was the era of the "Rhodey Loadies." They were Rhode Island's
          equivalent of the Vulgarians at the Gunks. Like the Vulgarians they
          were a loosely knit group known as much for their partying as their
          climbing. The Rhodey Loadies and the Ozone Alpine Club from South
          County were the pioneers of modern day climbing in Rhode Island
          establishing many of the routes throughout the State in the 1970s and
          80s. Paul Baird, John "Whitey" MacLean, Neil Pothier, Ed Sewall,
          Andrew Sornborger, Ward and Chris Smith, Steve Landry, Steve Wood, and
          Gary Peterson are a few of the climbers who made their mark on Rhode
          Island climbing during this era.
        </p>
        <img
        className="centered"
          src="Neil-Pothier.jpg"
          alt="1970s Advertisement for a Rhode Island outdoor shop"
          width="300 px"
        />
        <h5>1990's</h5>
        <p>
          The explosion in new climbers in Rhode Island, was like everywhere
          else, due largely to the emergence of rock gyms. The Rhode Island Rock
          Gym was the first in the state. It was started by Joe Goodreau and
          Bruce Foster in 1992. Larry Norin and Nadav Minkin bought the gym in
          1998.
        </p>
        <p>
          On the trad scene the Appalachian Mountain Club (AMC) Narragansett
          Chapter was also responsible for introducing many local climbers to
          the sport. Peter Barlow, the chairman of the AMC Technical Climbing
          Committee probably introduced more local climbers to rock and ice
          climbing than any other single person.
        </p>
        <p>
          The Rhode Island Climbing web site (this one) was brought online in
          1995. The climbri email group quickly became the primary means of
          communication among local climbers.
        </p>
        <h5>2000's</h5>
        <p>
          Led largely by Joe McLoughlin bouldering at Lincoln Woods put Rhode
          Island on the national climbing map. Joe penned an article on Lincoln
          Woods that appeared as a "MiniGuide" in the April 2000 issue of Rock &
          Ice and he wrote the guidebook A Bouldering Guide to Lincoln Woods,
          RI. The area gets occasional mentioned in both Rock & Ice and Climbing
          magazines.
        </p>
        <p>
          In 2006 the Rhode Island Climbing gym moved to a new facility in
          Lincoln and changed its name to RockSpot.
        </p>
        <h5>2010's</h5>
        <p>
          In 2013 RockSpot Climbing opened a new rock gym in Peace Dale, RI in
          2017 Central Rock opened a gym in Warwick, and in 2018 Rock Spot
          opened a bouldering facility in Providence. There are now four rock
          gyms in Rhode Island.
        </p>
        <p>
          In this decade sport climbing started making inroads in nearby
          Connecticut despite years of being dictated by one terrorist bolt
          chopper. An April 2013 Rock and Ice article on sport climbing in
          Connecticut written by Brian Phillips caused the local bolt chopper to
          chop two routes at Rhode Island's primary climbing area, Ross Rocks.
        </p>
        <img
        className="centered"
          src="rockAndIceApril2013Cover.jpeg"
          alt="Rock and Ice 2013 Magazine Cover"
          width="300 px"
        />
      </div>
    );
  }
}

export default About;
