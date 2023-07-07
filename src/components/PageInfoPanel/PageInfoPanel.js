import React from "react";

function PageInfoPanel() {
    return (
        <div class="about-text go-to">
            <h3 class="title-heading dark-color">About me</h3>
            <h6 class="theme-color lead">
                A passionate data engineer who is capable of multiple roles and loves to work in challenging environment
                focussed on cutting edge systems
            </h6>
            <p>
                As an <mark>aspirant data engineer</mark>, I have reached great milestones throughout my journey    . I have designed and developed scalable big data processing pipelines using distributed computing
                systems like apache spark. I have created ETL workflows to extract data from different sources,
                transform it into a standardized format and load it into data warehouse for further analysis. I have
                built customer 360 profile which gives a complete view of a customer’s data and snapshots of the
                customer activity including every interaction they made with the system and it is used by the ML team to
                train their models and gives insights about sending personalized offers to the customer. I have also
                designed and built the data model for customer mdm and designed the data privacy and security layer in
                Azure. I have worked on cloud services like Amazon Aws and Microsoft Azure
            </p>
            <p>
                I am a creative, detail oriented and versatile person. I am a great team player and well organised with
                proven skills in project management and team leadership.
            </p>
            <div class="row about-list">
                <div class="col-md-6">
                    <div class="media">
                        <label>Employee ID</label>
                        <p>29058</p>
                    </div>
                    <div class="media">
                        <label>Email</label>
                        <p>gnana.priya@thoughtworks.com</p>
                    </div>
                    <div class="media">
                        <label>Working Office</label>
                        <p>Chennai</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="media">
                        <label>Role</label>
                        <p>Data Engineer, Consultant</p>
                    </div>
                    <div class="media">
                        <label>Mobile</label>
                        <p>+91-8124774706</p>
                    </div>
                    <div class="media">
                        <label>Projects</label>
                        <p>IDFC HPE (Hyper Personalisation Engine), EFL (Eureka Forbes Limited) - Data Stream</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageInfoPanel;
