import React from 'react';
import Layout from '../components/layout';
import './index.css';
import tom from '../images/tom.jpg';
import fua from '../images/fua.jpg';
import rungs from '../images/rungs.jpeg';
import marcin from '../images/marcin.png';
import phil from '../images/phil.png';
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
                            <span>
                                FANCYYYYY
                            </span>
                        </h1>
                    </div>
                    {/* <div className="header-link">twitter</div>
                    <div className="header-link">bandcamp</div> */}
                    <div className="header-link">
                        <span>
                            <a href="https://fancyyyyy.bandcamp.com/">bandcamp</a>
                        </span>
                    </div>
                    <div className="header-link">
                        <span>
                            <a href="https://twitter.com/fancyyyyylabel">twitter</a>
                        </span>
                    </div>
                </div>
                {/* <div className="about">
                    <div>
                        <span>
                            Eurorack modules and radical electronic music
                            <span role="img" aria-label="scream">
                                😱😱😱
                            </span>
                        </span>
                    </div>
                    <div>
                        <span>
                            Find us on <a href="https://fancyyyyy.bandcamp.com/">Bandcamp</a> and{' '}
                            <a href="https://twitter.com/fancyyyyylabel">Twitter</a>
                        </span>
                    </div>
                </div> */}
                <div className="content">
                    <Item
                        img={marcin}
                        artist="Marcin Pietruzewski"
                        title="The New Pulsar Generator Recordings"
                        url="https://fancyyyyy.bandcamp.com/"
                    />
                    <Item
                        img={phil}
                        artist="Phil Julian"
                        title="Carrier Dynamics"
                        url="https://fancyyyyy.bandcamp.com/"
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
