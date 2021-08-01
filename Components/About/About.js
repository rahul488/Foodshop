import React from "react";
import "./About.css";
import { Card, Row, Col } from "reactstrap";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function About() {
  return (
    <div className="about">
      <div className="about-content mt-0">
        <h2 className="text-center who_are_we mb-2">Who are We ?</h2>
        <Row>
          <Col md={8} sm={8} xl={8} className="offset-2 desc">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure.
          </Col>
        </Row>
        <h2 className="text-center mt-3 happy_customer mb-4">
          Our Happy Customers
        </h2>
        <Row>
          <Col md={3} sm={2} xl={4} lg={4}>
            <Card className="ml-2">
              <img
                width="100%"
                src="https://upload.wikimedia.org/wikipedia/en/6/64/Zomato_logo_(white-on-red).png"
                alt="Card 1"
                height="350px"
              />
            </Card>
          </Col>
          <Col md={3} sm={2} xl={4} lg={4}>
            <Card>
              <img
                width="100%"
                src="https://th.bing.com/th/id/R.7ae9d69759a7e66094bcff0e6594b21e?rik=hs%2fgJnbPWiTanQ&riu=http%3a%2f%2fwww.pngimagesfree.com%2fLOGO%2fS%2fSwiggy%2fSwiggy-Logo-Vector.png&ehk=8QWOZlAzQLMCa1AHAvjk2sQ7ELqRyCBAGkGKuZscCEo%3d&risl=&pid=ImgRaw"
                alt="Card 2"
                height="350px"
              />
            </Card>
          </Col>
          <Col md={3} sm={2} xl={4} lg={4}>
            <Card className="mr-1">
              <img
                width="100%"
                src="https://th.bing.com/th/id/R.833e40c061ffc6b0c8b70baeeb80b6ad?rik=yXlzlLLTqsHl2Q&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f08%2fdominos-pizza-logo.jpg&ehk=A6BQAPsymXmQckV5Cr8VhLiGozKnNq3ggkfQ3zl2oyA%3d&risl=&pid=ImgRaw"
                alt="Card 3"
                height="350px"
              />
            </Card>
          </Col>
        </Row>
        <h2 className="text-center follow_us mt-4">You can follow us on</h2>
        <div className="follow-us">
          <FaFacebook className="facebook facebbok ml-5" />
          <IoLogoTwitter className="twitter ml-4" />
          <FaInstagramSquare className="instagram ml-4" />
          <IoLogoYoutube className="you-tube ml-4" />
        </div>
      </div>
    </div>
  );
}

export default About;
