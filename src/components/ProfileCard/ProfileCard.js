import React from "react";
import priyaProfilePicfrom from '../../assets/img/PriyaProfileCard.jpeg'
import twLogo from '../../assets/img/thoughtworks_logo.png'

function ProfileCard() {
    return (
        <div
            class="single_advisor_profile wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
            }}
        >
            <div class="advisor_thumb">
                <img src={priyaProfilePicfrom} alt="Gnana Priya" />
            </div>
            <div class="single_advisor_details_info">
                <h2>Gnana Priya</h2>
                <p class="designation">Data Engineer</p>
                <img src={twLogo} alt="logo"/>
            </div>
        </div>
    );
}

export default ProfileCard;