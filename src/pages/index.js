import React from 'react';
import Layout from '../components/layout';
import './index.css';
import tom from '../images/tom.jpg';
import fua from '../images/fua.jpg';
import rungs from '../images/rungs.jpeg';
import marcin from '../images/marcin.png';
import phil from '../images/phil.png';
import rungsv2 from '../images/rungsv2.jpg';
import guitarcultures from '../images/guitarcultures.jpg';
import Item from '../components/Item';
import SEO from '../components/seo';

export default function Home() {
    return (
        <Layout>
            <SEO title="Home" />
            <div className="app">
                <div className="header-container">
                    <div className="header">
                        <h1>
                            <span>FANCYYYYY</span>
                        </h1>
                    </div>
                    <div className="header-link">
                        <span>
                            <a href="https://fancyyyyy.bandcamp.com/">Bandcamp</a>
                        </span>
                    </div>
                    <div className="header-link">
                        <span>
                            <a href="https://twitter.com/fancyyyyylabel">Twitter</a>
                        </span>
                    </div>
                </div>
                {/*<div className="about">*/}
                {/*    <div className="blurb">*/}
                {/*        <span>*/}

                {/*        </span>*/}
                {/*    </div>*/}
                {/*    <div className="blurb-links">*/}
                {/*        <span>*/}
                {/*            <a href="https://fancyyyyy.bandcamp.com/">Bandcamp</a>{' '}*/}
                {/*            <a href="https://www.fancysynthesis.net/">Synths</a>{' '}*/}
                {/*            <a href="https://twitter.com/fancyyyyylabel">Twitter</a>*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span>Available:</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="content">
                    <Item
                        img={rungsv2}
                        title="Rung Divisions"
                        url="https://www.fancysynthesis.net/"
                    />
                    <Item
                        img={guitarcultures}
                        artist="Tom Mudd"
                        title="Guitar Cultures"
                        url="https://tommudd.bandcamp.com/album/guitar-cultures"
                    />
                    <Item
                        img={marcin}
                        artist="Marcin Pietruszewski"
                        title="The New Pulsar Generator Recordings"
                        url="https://fancyyyyy.bandcamp.com/album/the-new-pulsar-generator-recordings-volume-1"
                    />
                    <Item
                        img={phil}
                        artist="Phil Julian"
                        title="Carrier Dynamics"
                        url="https://fancyyyyy.bandcamp.com/album/carrier-dynamics"
                    />
                    <Item
                        img={tom}
                        artist="Tom Mudd"
                        title="Brass Cultures"
                        url="https://fancyyyyy.bandcamp.com/album/brass-cultures"
                    />
                    <Item
                        img={rungs}
                        title="Rung Divisions"
                        url="https://www.fancysynthesis.net/"
                    />
                    <Item img={fua} title="Fua" url="https://fancyyyyy.bandcamp.com/album/fua" />
                </div>
            </div>
        </Layout>
    );
}
