import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function service() {
  return (
    <>
      <Card border="primary" style={{ width: "100%" }} className="p-5">
        <Card.Header>Hire Resources within 1 hour</Card.Header>
        <Card.Body>
          <Card.Title>RaaS - Resource as a Service</Card.Title>
          <Card.Text>
            This service offers the capability to rapidly acquire additional
            resources, whether they are individual professionals or employees,
            within just one hour. It provides a quick and efficient solution to
            meet immediate staffing needs, which can be crucial for project
            timelines and workload management. Resources can be hired both
            remotely and for on-site work, providing flexibility based on the
            client's requirements.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="secondary" style={{ width: "100%" }} className="p-5">
        <Card.Header>Hire Team within 3 days </Card.Header>
        <Card.Body>
          <Card.Title>TaaS - Team as a Service</Card.Title>
          <Card.Text>
            This service emphasizes the ability to assemble an entire team in as
            little as three days, which is particularly valuable for projects
            that require a collaborative effort. It allows startups to
            efficiently scale up their workforce to tackle bigger projects or
            meet deadlines.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="success" style={{ width: "100%" }} className="p-5">
        <Card.Header>Building Tech Platform </Card.Header>
        <Card.Body>
          <Card.Title>
            MVP solutions for Start-Ups, delivering them within 60 days
          </Card.Title>
          <Card.Text>
            This service caters to start-ups by quickly developing Minimum
            Viable Product (MVP) tech solutions within a 60-day timeframe. An
            MVP is a streamlined version of a product, allowing startups to test
            their ideas and gain user feedback without extensive development
            time and costs. It helps startups get to market faster and assess
            their product's viability.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="danger" style={{ width: "100%" }} className="p-5">
        <Card.Header>Bench resources are available within 1 Hour</Card.Header>
        <Card.Body>
          <Card.Title>Remote and Onsite</Card.Title>
          <Card.Text>
            This highlights the fast response time to acquire additional
            resources, whether they are remote workers or on-site staff,
            providing clients with flexibility in staffing.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="warning" style={{ width: "100%" }} className="p-5">
        <Card.Header>Competitive costs</Card.Header>
        <Card.Body>
          <Card.Title>Zero Backout Guarantee</Card.Title>
          <Card.Text>
            TThis indicates that the service provider offers pricing that is
            competitive within the market, potentially helping startups manage
            their budgets effectively.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="info" style={{ width: "100%" }} className="p-5">
        <Card.Header>Fast Process</Card.Header>
        <Card.Body>
          <Card.Title>24-hour Replacement</Card.Title>
          <Card.Text>
            If a hired resource needs to be replaced for any reason, this
            service offers a 24-hour replacement guarantee, minimizing
            disruptions to ongoing projects.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="dark" style={{ width: "100%" }} className="p-5">
        <Card.Header>Skill full Resourses</Card.Header>
        <Card.Body>
          <Card.Title>
            100% functionality, reliability, security, and privacy
          </Card.Title>
          <Card.Text>
            The service provider pledges to deliver solutions that meet the
            highest standards in terms of functionality, reliability, security,
            and privacy, assuring clients of the quality and safety of their
            services.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default service;
