// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  terrain: require("../assets/terrain.jpg"),
  terrainDark: require("../assets/terrain-dark.jpg"),
  tiger: require("../assets/tiger.jpg"),
  yld: require("../assets/yld.svg"),
  tableflip: require("../assets/tableflip.svg"),
  justeat: require("../assets/just-eat.png"),
  stackoverflow: require("../assets/stack-overflow.png")
};

preloader(images);

const theme = createTheme({
  primary: "#f6911e"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck title="London TensorFlow" transition={["fade"]} transitionDuration={500}>
          <Slide bgColor="primary" bgImage={images.terrain.replace("/", "")}>
            <Heading size={4} fit caps textColor="black">
              London
            </Heading>
            <Text size={1} fit lineHeight={1} textColor="white" textFont="Helvetica" fontWeight="600">
              TensorFlow
            </Text>
          </Slide>
          <Slide bgColor="black" notes="Number 1!">
            <Text textSize="20rem" bold textColor="primary" textFont="primary">
              #1
            </Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="So why TensorFlow?">
            <Heading size={4} fit caps textColor="black">
              Why?
            </Heading>
          </Slide>
          <Slide bgImage={images.terrain.replace("/", "")}>
            <Heading size={4} fit caps textColor="secondary">
               For Scientists
            </Heading>
            <Heading size={4} fit caps textColor="white">
               Reproducable research
            </Heading>
          </Slide>
          <Slide bgImage={images.terrainDark.replace("/", "")}>
            <Heading size={4} fit caps textColor="primary">
               For Developers
            </Heading>
            <Heading size={4} fit caps textColor="white">
               Start using AI today
            </Heading>
          </Slide>
          <Slide bgImage={images.terrainDark.replace("/", "")}>
            <Heading size={1} caps fit textColor="white">
              Nearly 1 year since open source'd (2015-11-09)
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="tertiary">
                Large conceptual surface area
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="primary">
                Lets learn together
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="secondary">
            <Heading size={4} fit caps textColor="primary">
              Sharing good data sources
            </Heading>
            <BlockQuote>
              <Quote textSize="40" textColor="white">"I can recognise hand-written numbers, now what?"</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={4} fit caps textColor="black">
              Find interesting projects
            </Heading>
          </Slide>
          <Slide bgImage={images.tiger.replace("/", "")} bgDarken="0.5">
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Deep dream but for tigers
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="white">
                Parsey McParseFace
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="black">
                [ YOUR RAD PROJECT HERE ]
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps textColor="black">
              A safe place
            </Heading>
            <Heading size={1} fit caps textColor="black">
              to discuss new quandaries
            </Heading>
            <Text>I think my model is self aware, is it ok to turn it off?</Text>
            <Text>I can predict what you'll do, do have to wait till you do it?</Text>
          </Slide>
          <Slide bgColor="black">
            <Heading size={1} fit caps textColor="white">
              Community
            </Heading>
            <BlockQuote>
              <Quote>We get out what we put in</Quote>
              <Cite>@olizilla and everyone else</Cite>
            </BlockQuote>
          </Slide>
          <Slide bgImage={images.terrain.replace("/", "")}>
            <Heading fit textColor="black">(If we get the model right)</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="it's less scary than you think. We will help you.">
            <Heading>Give a talk!</Heading>
            <Heading>Get Kudos.</Heading>
          </Slide>
          <Slide>
            <Heading>TONIGHT</Heading>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Tom Gallacher
            </Heading>
            <Heading size={2}>
              Me myself and pseudobots
            </Heading>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Daniel Slater
            </Heading>
            <Heading size={2}>
              AlphaToe
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2}>Sponsors</Heading>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Link href="http://yld.io"><Image src="https://www.yld.io/images/svgs/yld_logo.svg" /></Link>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps lineHeight={1.5} textColor="black">
              TABLEFLIP
            </Heading>
            <Link href="https://tablflip.io"><Image src="https://tableflip.io/img/tableflip.min.svg" /></Link>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Link href="https://www.just-eat.co.uk/"><Image src={images.justeat.replace("/", "")} /></Link>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Link href="https://business.stackoverflow.com/"><Image width="100%" src={images.stackoverflow.replace("/", "")} /></Link>
          </Slide>
          <Slide bgColor="black" notes="Number 1!" bgImage={images.terrainDark.replace("/", "")}>
            <Heading fit>
              Let's go!
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
