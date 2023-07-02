import React from "react";
import { HomeWrapper, PageCardFlexWrapper } from "./Home.styles";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import PageInfoPanel from "../../components/PageInfoPanel/PageInfoPanel";
import AvatarContent from "../../components/Avatar/AvatarContent";
import ListGroup from "../../components/ListGroup/ListGroup";
import {
  communityContributionsTeam,
  eflTeamNames,
  idfcTeamNames,
} from "../../constants/textConstants";
import ContentAccordions from "../../components/ContentAccordions/ContentAccordions";
import FeedBackTrends from "../../components/FeedBackTrends/FeedBackTrends";

function Home() {
  return (
    <HomeWrapper>
      <section className="container mt-5 mb-5">
        <div className="row mt-4">
          <PageCardFlexWrapper>
            <ProfileCard />
            <PageInfoPanel />
          </PageCardFlexWrapper>
        </div>
      </section>

      <hr />

      <section className="container mt-5 mb-5 dark-container">
        <dic className="row mt-4">
          <h3 className="dark-color">Success Catalyst and Guide</h3>
        </dic>
        <div className="row mt-4">
          <div className="mt-2">
            <AvatarContent
              image="vijay.png"
              name="Vijayaragavan G - Success Catalyst"
              empId="14990"
              role="Project Manager"
              designation="Lead Consultant"
            />
          </div>
          <div className="mt-2">
            <AvatarContent
              image="geetha_pic.jpeg"
              name="Geethanjali Govindarajan - Guide/Mentor"
              empId="19492"
              role="Application Developer"
              designation="Senior Consultant"
            />
          </div>
        </div>
      </section>

      <hr />

      <section className="container mt-5 mb-5">
        <h3 className="dark-color">References</h3>
        <div className="row mt-4">
          <div className="col-6">
            <ListGroup title="IDFC HPE Team" listItems={idfcTeamNames} />
          </div>
          <div className="col-6">
            <ListGroup title="EFL Team" listItems={eflTeamNames} />
          </div>
        </div>
        <div className="row mt-4"></div>
        <div className="row mt-4">
          <div className="col-12">
            <ListGroup
              title="CommunityContributions"
              listItems={communityContributionsTeam}
            />
          </div>
        </div>
      </section>

      <hr />

      <section className="container mt-5 mb-5 dark-container">
        <h3 className="mt-4 mb-5 lite-container dark-color">
          Grade change summary
        </h3>
        <div className="row mt-4">
          <ContentAccordions />
        </div>
      </section>

      <hr />

      <section className="container mt-5 mb-5 dark-container">
        <h1 className="mt-4 mb-2 lite-container dark-color">Feedback Trends</h1>
        <div className="row ">
          <FeedBackTrends />
        </div>
      </section>
      
      <section className="container mt-5 mb-5 dark-container">
        <center><h1 className="mt-4 mb-2 lite-container dark-color center">Thanks for your Patience!!!</h1></center>
      </section>
    </HomeWrapper>
  );
}

export default Home;
