import React from "react";

function PageInfoPanel() {
  return (
    <div class="about-text go-to">
      <h3 class="title-heading dark-color">Introduction about myself</h3>
      <h6 class="theme-color lead">
        A passionate developer who is capable of playing multiple roles in any
        grounds
      </h6>
      <p>
        I <mark>design and develop</mark> Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div class="row about-list">
        <div class="col-md-6">
          <div class="media">
            <label>Employee ID</label>
            <p>29058</p>
          </div>
          <div class="media">
            <label>Joined TW</label>
            <p>7th December 2020</p>
          </div>
          <div class="media">
            <label>Residence</label>
            <p>India</p>
          </div>
          <div class="media">
            <label>Boyfriend</label>
            <p>Harishankar Devaraj</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="media">
            <label>Birthday</label>
            <p>30th August 1996</p>
          </div>
          <div class="media">
            <label>Age</label>
            <p>27 Yr</p>
          </div>
          <div class="media">
            <label>Residence</label>
            <p>India</p>
          </div>
          <div class="media">
            <label>Boyfriend</label>
            <p>Harishankar Devaraj</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageInfoPanel;
